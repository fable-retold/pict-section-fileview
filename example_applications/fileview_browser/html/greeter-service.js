const libFableServiceProviderBase = require('fable-serviceproviderbase');

/**
 * A tiny Fable service that greets people, to show the code lens rendering
 * real JavaScript through pict-section-code (CodeJar, read-only, line numbers).
 */
class GreeterService extends libFableServiceProviderBase
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
		this.serviceType = 'Greeter';
		this.greetingCount = 0;
	}

	greet(pName)
	{
		this.greetingCount++;
		let tmpName = (typeof pName === 'string' && pName.trim()) ? pName.trim() : 'friend';
		let tmpResult = `Hello, ${tmpName}! (greeting #${this.greetingCount})`;
		this.log.info(tmpResult);
		return tmpResult;
	}

	greetMany(pNames)
	{
		if (!Array.isArray(pNames))
		{
			return [];
		}
		return pNames.map((pName) => this.greet(pName));
	}
}

module.exports = GreeterService;
