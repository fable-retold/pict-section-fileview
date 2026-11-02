# Field notes

The **markdown lens** delegates to [`pict-section-content`](https://github.com/fable-retold)'s
`parseMarkdown`, so everything on this page is real markdown turned into HTML by the
same provider the rest of the ecosystem uses — not a fake.

## What the viewer handles

- Headings, paragraphs, and **bold** / _italic_ runs
- Bulleted and numbered lists
- `inline code` and fenced code blocks (highlighted by `pict-section-code`)
- Tables
- Blockquotes and links

## A fenced code block

```javascript
// The markdown lens highlights fenced code through pict-section-code.
function fit(pNatural, pStage)
{
    const tmpScale = Math.min(pStage.w / pNatural.w, pStage.h / pNatural.h, 1);
    return { w: Math.round(pNatural.w * tmpScale), h: Math.round(pNatural.h * tmpScale) };
}
```

## Lens precedence (score tiers)

| Signal | Score |
|---|---|
| explicit `Kind` | 10000 |
| strong extension | ~700 |
| header `Content-Type` | ~400 |
| magic bytes | ~200 |
| download-card floor | 1 |

> The highest score wins; ties break by `Priority`, then registration order.
> A delegating lens whose library is absent abstains, and the viewer falls
> through to the next best renderer — ultimately the download card.
