'use strict';

/**
 * The fileview probe ladder — a small, pure, network-touching enrichment step.
 *
 * When a host hands the viewer a bare URL (ProbeStrategy 'auto'), the filename extension is often the only
 * signal available, and sometimes there is not even that (a `/Depot/File/42/Open` style address has no
 * extension at all). The probe climbs three cheap rungs to learn more about the bytes WITHOUT downloading
 * the whole file:
 *
 *   1. HEAD            → Content-Type (the header MIME tier), Content-Length (Size), Accept-Ranges.
 *   2. Range 0-63      → a 206 confirms range support; Content-Range yields the true total Size.
 *   3. magic sniff     → the leading bytes of that same Range read disambiguate container formats that
 *                        share no reliable extension/MIME (a bare URL that is really a PNG or a PDF).
 *
 * Every rung is best-effort: a server may refuse HEAD (405), block Range, or be cross-origin and strip the
 * headers. Each step is wrapped so a failure simply leaves the result as-is and the ladder returns whatever
 * it has gathered. The caller (the provider) merges the result into the FileDescriptor, filling only blanks —
 * a record's explicit MIMEType/Size/Kind always wins over a probe guess.
 *
 * The fetch implementation is injected (pOptions.fetch) so this is unit-testable headless with a stub and so
 * the provider can route it through a host-supplied client. No DOM, no globals.
 */

// Magic-byte signatures → a derived MIME. Kept deliberately small: just enough to tell apart the renderable
// kinds that a bare, extension-less URL would otherwise strand on the download card. Each entry is a byte
// prefix match at offset 0 unless noted. RIFF and ISO-BMFF ('ftyp') containers are disambiguated specially
// below because several formats share the same leading bytes.
const MAGIC_PREFIXES =
[
	{ Bytes: [ 0x25, 0x50, 0x44, 0x46 ],       MIME: 'application/pdf' },        // %PDF
	{ Bytes: [ 0x89, 0x50, 0x4E, 0x47 ],       MIME: 'image/png' },              // \x89PNG
	{ Bytes: [ 0xFF, 0xD8, 0xFF ],             MIME: 'image/jpeg' },
	{ Bytes: [ 0x47, 0x49, 0x46, 0x38 ],       MIME: 'image/gif' },              // GIF8
	{ Bytes: [ 0x42, 0x4D ],                   MIME: 'image/bmp' },              // BM
	{ Bytes: [ 0x25, 0x21, 0x50, 0x53 ],       MIME: 'application/postscript' }, // %!PS
	{ Bytes: [ 0x1F, 0x8B ],                   MIME: 'application/gzip' },
	{ Bytes: [ 0x50, 0x4B, 0x03, 0x04 ],       MIME: 'application/zip' },        // PK.. (also docx/xlsx/epub/cbz)
	{ Bytes: [ 0x49, 0x44, 0x33 ],             MIME: 'audio/mpeg' },             // ID3
	{ Bytes: [ 0x4F, 0x67, 0x67, 0x53 ],       MIME: 'application/ogg' },        // OggS
	{ Bytes: [ 0x66, 0x4C, 0x61, 0x43 ],       MIME: 'audio/flac' }              // fLaC
];

// A MIME that tells the resolver almost nothing — a server default. When the header MIME is one of these we
// still climb to the magic rung to try for something sharper.
const GENERIC_MIMES =
[
	'', 'application/octet-stream', 'binary/octet-stream', 'application/download',
	'application/force-download', 'content/unknown', 'unknown/unknown'
];

/** Read a header value from a fetch Headers object or a plain map, case-insensitively. */
function readHeader(pHeaders, pName)
{
	if (!pHeaders) { return ''; }
	try
	{
		if (typeof pHeaders.get === 'function') { return pHeaders.get(pName) || ''; }
	}
	catch (pError) { /* fall through to the plain-map path */ }
	const tmpLower = String(pName).toLowerCase();
	const tmpKeys = Object.keys(pHeaders);
	for (let i = 0; i < tmpKeys.length; i++)
	{
		if (tmpKeys[i].toLowerCase() === tmpLower) { return pHeaders[tmpKeys[i]] || ''; }
	}
	return '';
}

/** Strip a Content-Type down to the bare MIME (drop `; charset=...`), lowercased. */
function cleanMIME(pContentType)
{
	if (!pContentType) { return ''; }
	return String(pContentType).split(';')[0].trim().toLowerCase();
}

/** Is this MIME uninformative enough that the magic rung is still worth climbing? */
function isGenericMIME(pMIME)
{
	return GENERIC_MIMES.indexOf(cleanMIME(pMIME)) >= 0;
}

/** Lowercase hex of the first pCount bytes (for the descriptor's MagicBytes field / debugging). */
function toHex(pBytes, pCount)
{
	const tmpLimit = Math.min(pCount || pBytes.length, pBytes.length);
	let tmpHex = '';
	for (let i = 0; i < tmpLimit; i++)
	{
		const tmpByte = pBytes[i].toString(16);
		tmpHex += (tmpByte.length === 1 ? '0' : '') + tmpByte;
	}
	return tmpHex;
}

/** Does the byte array start with this prefix? */
function startsWith(pBytes, pPrefix)
{
	if (pBytes.length < pPrefix.length) { return false; }
	for (let i = 0; i < pPrefix.length; i++)
	{
		if (pBytes[i] !== pPrefix[i]) { return false; }
	}
	return true;
}

/** Four ASCII bytes at an offset, as a string (for RIFF/ftyp brand sniffing). */
function fourCC(pBytes, pOffset)
{
	if (pBytes.length < pOffset + 4) { return ''; }
	return String.fromCharCode(pBytes[pOffset], pBytes[pOffset + 1], pBytes[pOffset + 2], pBytes[pOffset + 3]);
}

/**
 * Guess a MIME from leading bytes. Returns '' when nothing matches.
 * @param {Uint8Array} pBytes
 * @returns {string}
 */
function sniffMagic(pBytes)
{
	if (!pBytes || !pBytes.length) { return ''; }

	// RIFF container: WEBP / WAV / AVI share "RIFF"; the brand sits at bytes 8..11.
	if (fourCC(pBytes, 0) === 'RIFF')
	{
		const tmpBrand = fourCC(pBytes, 8);
		if (tmpBrand === 'WEBP') { return 'image/webp'; }
		if (tmpBrand === 'WAVE') { return 'audio/wav'; }
		if (tmpBrand === 'AVI ') { return 'video/x-msvideo'; }
	}

	// ISO base media (mp4 / m4a / mov): 'ftyp' at offset 4, brand at 8..11.
	if (fourCC(pBytes, 4) === 'ftyp')
	{
		const tmpBrand = fourCC(pBytes, 8);
		if (tmpBrand.indexOf('M4A') === 0) { return 'audio/mp4'; }
		if (tmpBrand === 'qt  ') { return 'video/quicktime'; }
		return 'video/mp4';
	}

	for (let i = 0; i < MAGIC_PREFIXES.length; i++)
	{
		if (startsWith(pBytes, MAGIC_PREFIXES[i].Bytes)) { return MAGIC_PREFIXES[i].MIME; }
	}
	return '';
}

/**
 * Probe a descriptor's URL and return an enrichment object. Never throws — every rung is guarded and a
 * blocked/absent step just leaves its fields empty.
 *
 * @param {Object} pDescriptor - a normalized FileDescriptor (only .URL is read)
 * @param {Object} pOptions - { fetch: function, RangeBytes?: number }
 * @returns {Promise<Object>} { MIMEType, MIMESource, AcceptRanges, Size, MagicBytes }
 */
function probeDescriptor(pDescriptor, pOptions)
{
	const tmpOptions = pOptions || {};
	const tmpFetch = tmpOptions.fetch;
	const tmpURL = pDescriptor && pDescriptor.URL;
	const tmpRangeBytes = (typeof tmpOptions.RangeBytes === 'number' && tmpOptions.RangeBytes > 0) ? tmpOptions.RangeBytes : 64;

	const tmpResult = { MIMEType: '', MIMESource: '', AcceptRanges: null, Size: null, MagicBytes: null };

	if ((typeof tmpFetch !== 'function') || !tmpURL)
	{
		return Promise.resolve(tmpResult);
	}

	// Rung 1 — HEAD.
	return Promise.resolve()
		.then(() => { return tmpFetch(tmpURL, { method: 'HEAD' }); })
		.then((pHeadResponse) =>
		{
			if (pHeadResponse && pHeadResponse.ok)
			{
				const tmpContentType = cleanMIME(readHeader(pHeadResponse.headers, 'content-type'));
				if (tmpContentType) { tmpResult.MIMEType = tmpContentType; tmpResult.MIMESource = 'header'; }

				const tmpLength = readHeader(pHeadResponse.headers, 'content-length');
				if (tmpLength && !isNaN(Number(tmpLength))) { tmpResult.Size = Number(tmpLength); }

				const tmpAcceptRanges = readHeader(pHeadResponse.headers, 'accept-ranges');
				if (tmpAcceptRanges) { tmpResult.AcceptRanges = (String(tmpAcceptRanges).toLowerCase().indexOf('bytes') >= 0); }
			}
		})
		.catch(() => { /* HEAD refused / cross-origin — the Range rung below often still works */ })
		.then(() =>
		{
			// Rungs 2 + 3 — a small Range read confirms 206 support AND yields magic bytes. Skip it only when we
			// already have a sharp MIME and a known range answer (nothing left to learn cheaply).
			const tmpNeedMagic = isGenericMIME(tmpResult.MIMEType);
			const tmpNeedRanges = (tmpResult.AcceptRanges === null);
			if (!tmpNeedMagic && !tmpNeedRanges) { return null; }

			return Promise.resolve()
				.then(() => { return tmpFetch(tmpURL, { headers: { Range: 'bytes=0-' + (tmpRangeBytes - 1) } }); })
				.then((pRangeResponse) =>
				{
					if (!pRangeResponse) { return; }

					if (pRangeResponse.status === 206) { tmpResult.AcceptRanges = true; }
					else if (tmpResult.AcceptRanges === null && pRangeResponse.ok) { tmpResult.AcceptRanges = false; }

					const tmpContentRange = readHeader(pRangeResponse.headers, 'content-range');
					if (tmpContentRange)
					{
						const tmpTotalMatch = /\/\s*(\d+)\s*$/.exec(tmpContentRange);
						if (tmpTotalMatch) { tmpResult.Size = Number(tmpTotalMatch[1]); }
					}

					if (tmpNeedMagic && (typeof pRangeResponse.arrayBuffer === 'function'))
					{
						return Promise.resolve(pRangeResponse.arrayBuffer()).then((pBuffer) =>
						{
							if (!pBuffer) { return; }
							const tmpBytes = new Uint8Array(pBuffer);
							tmpResult.MagicBytes = toHex(tmpBytes, 16);
							const tmpGuess = sniffMagic(tmpBytes);
							if (tmpGuess && isGenericMIME(tmpResult.MIMEType))
							{
								tmpResult.MIMEType = tmpGuess;
								tmpResult.MIMESource = 'magic';
							}
						});
					}
				})
				.catch(() => { /* Range blocked — keep whatever HEAD gave us */ });
		})
		.then(() => { return tmpResult; });
}

module.exports = { probeDescriptor, sniffMagic, isGenericMIME, cleanMIME };
