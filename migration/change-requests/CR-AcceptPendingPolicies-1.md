# CR-AcceptPendingPolicies-1: legacy CSS — add the screen stylesheet of AcceptPendingPolicies

- Status: applied (foundation owner, 2026-10-14: per-screen original stylesheets)
- Raised by: AcceptPendingPolicies, 2026-10-14
- Block: `app/public/os-legacy.css` (foundation owner: "legacy CSS only to add missing original stylesheets")
- Other routes using it: none (screen stylesheet)
- Related question: none (fact settled by the compiled code)

## Evidence
- `View.getCssDependencies` of `UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js` (survey) lists
  `css/UBTConnect.App_Policies.AcceptPendingPolicies.css`.
- `app/public/os-legacy.css` has no `/* ==== …App_Policies.AcceptPendingPolicies.css ==== */` section and no rule for
  the classes the screen uses: `ubt-policies`, `ubt-policies--content`, `ubt-policies--header`, `ubt-policies--columns`,
  `ubt-policies--list`, `ubt-policies--agree-to-all` (grep: 0 hits).
- The screen was never captured (Q7 c, `migration/capture-notes.md`), so the capture did not collect the stylesheet.

## Expected change
Append the original `UBTConnect/css/UBTConnect.App_Policies.AcceptPendingPolicies.css` of TST (a static file, read-only
GET) to `os-legacy.css` in the original load order (after `Connect2_LegacyShared.UBTConnect.css`).

## Workaround in the route until applied
None needed in markup: the route renders the original classes; they simply have no screen-specific styles until the
stylesheet is added (layout of the header, columns and agree-to-all row may differ from TST).

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: `public/os-legacy.css` replaced by the original stylesheets per screen (`src/shell/StylesheetHost.tsx`,
  sets in `src/app/routes.css.generated.ts`, files unchanged in `public/UBTConnect/css/`). AcceptPendingPolicies has
  no capture, so its set comes from the compiled `getCssDependencies` of the screen and its blocks and includes
  `UBTConnect.App_Policies.AcceptPendingPolicies.css`.
- Regression parity run on: none (route not captured, Q7 c). Route agent check 2026-10-14 (headless Chrome, 390x844):
  the 10 `<link>`s equal the generated set, all load; the 3 rules of the screen stylesheet match the DOM
  (`.ubt-policies .ubt-policies--content` padding-top 48px / max-height = --current-svg-height,
  first `.columns-item` max-height 40vh + overflow-y scroll, `.ubt-policies.ubt-fixed-footer--content` margin-bottom 0).
