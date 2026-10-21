# NetworkWarning

OutSystems: `Connect2_LegacyShared.Widgets.NetworkWarning`. No pack exists; compiled source
`migration/runtime-sources/Connect2_LegacyShared.Widgets.NetworkWarning.mvc.js` (fetched read-only from TST,
2026-10-16, row in `migration/knowledge/runtime-sources.md`). Used by LDM_MyEvents_V2, LDM_Email_V2, MyBookmarks.

Inputs: none. Event `TryAgain` → `onTryAgain()` (the Button OnClick; the block's own `tryAgain$Action` is empty, the
parent's handler does the work). Placeholders: none. The card is the placeholder content of a real `Animate`
(`top-to-bottom`, `normal`, no Delay input = 0). The two texts are literal English strings, not translated resources.

## Captures

| Capture | Source                                                | What it shows                                                 |
| ------- | ----------------------------------------------------- | ------------------------------------------------------------- |
| v1      | LDM_MyEvents_V2/offline (`analysis/dom/offline.html`) | the card; MyBookmarks/offline has the same DOM apart from ids |

## Not captured / not settled

- Other languages: the compiled strings are literals; no resource lookups.
