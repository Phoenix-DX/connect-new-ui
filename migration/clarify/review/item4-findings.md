# Item 4: SanitizedHtml `<nobr>` and the double `?` of generateScreenURL (2026-10-28)

Item 4 of the user's work list (`../RESUME.md`), from the B3 build note (`../builds/B3-milestones.md:126-127`).
Evidence order: the MCP (DEV) first, then the compiled TST code (live since the source switch), then the React code.

## 1. The double `?` of the Google Maps link

| # | Fact | MCP (DEV) | Compiled TST (live) |
|---|---|---|---|
| M1 | The External Site WebMaps has the URL `https://www.google.com/maps/dir/?api=1` and also the input parameters `api` (Integer) and `query` (Text) | `getExternalSite WebMaps` (Connect2_OrbitMobile_MUI): URL and the two parameters | `OS.Navigation.generateScreenURL("https://www.google.com/maps/dir/?api=1", { api: …, query: … })` |
| M2 | The runtime appends `"?" + "api=…&query=…"` whatever the URL holds: the link is `…/dir/?api=1?api=1&query=<address>` | Not in the model (runtime) | `migration/runtime-sources/OutSystems.js`, Navigation module: `generateScreenURL = z` → `G(e,t)`: `"".concat(e).concat(n.length>0?"?".concat(n):"")` |
| M3 | Four places build this link: HostInformation OnClick_Address, AssembleSummaryCard LinkAddressOnClick, LDM_EventDetail and LDM_EventDetail_V2 Handler_NavigateTo_WebMaps | HostInformation OnClick_Address: Destination WebMaps, `api = 1`, `query = MapsAddress` | `HostInformation.mvc.js:632-633`, `AssembleSummaryCard.mvc.js:729-730`, `LDM_EventDetail.mvc.js:319-320`, `LDM_EventDetail_V2.mvc.js` (Handler_NavigateTo_WebMaps) |

React: `app/src/platform/navigation/osNavigate.ts:147-155` ports G exactly (its comment names the double `?`); the
callers are `MilestoneDetail/actions.ts:53`, `AssembleSummaryCardContainer.tsx:49`, `LDM_EventDetail_V2Page.tsx:45`.
**React = TST.** The link is an error of the original model (the URL and the parameter both carry `api`). How Google
Maps reads `api=1?api=1` is not checked.

## 2. SanitizedHtml drops `<nobr>`

| # | Fact | MCP (DEV) | Compiled TST (live) |
|---|---|---|---|
| S1 | The household captions are sanitized with AllowedTags "nobr,sup" and ResetWhitelist False | Pack rows of the clarify phase (MCP dump): `../flows/Directory_Photobook/report.md:259` (Photobook_Options_Left) | HostInformation and Photobook_Options_Left block instances of ReactiveHtmlSanitizer.SanitizedHtml |
| S2 | AllowTags adds each token as written: `HtmlSanitizer.AllowedTags["nobr"] = true` | ReactiveHtmlSanitizer is a referenced component (not open in the MCP) | `migration/runtime-sources/ReactiveHtmlSanitizer.controller.js:152-160` |
| S3 | The walk tests `AllowedTags[node.tagName]`; `tagName` of an HTML element is upper case (`NOBR`), so the lower-case key never matches. A tag that does not match becomes an empty DocumentFragment: the tag and all its content go | - | `migration/runtime-sources/ReactiveHtmlSanitizer.HtmlSanitizer.js:57-95` |
| S4 | A caption such as `…<br /><nobr><strong>Tomás</strong><sup>14</sup></nobr>…` loses the children's names and ages | - | S2 + S3 |

React: `app/src/lib/sanitizeHtml.ts` matches the names as written against `tagName` (header :6, hook :96-99) and drops
an element with its content. **React = TST.** The `<sup>` rule has the same case problem.

## 3. Result

Both items are behaviours of the original TST app, and React ports them 1:1. No React ≠ TST difference, so no Fable
design is needed. Neither is in `app/docs/known-original-bugs.md` yet (last row B19). The decision is the user's.

## 4. Decision (user, 2026-10-28)

(a) Keep both 1:1. They are recorded as known original bugs B20 (the Maps link) and B21 (the sanitizer) in
`app/docs/known-original-bugs.md`. No code change.

