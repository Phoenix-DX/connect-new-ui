# CR-LDM_Email_V2-1: consistency_check — accept compiled-view inline styles on no-capture routes

- Status: applied
- Raised by: LDM_Email_V2, 2026-10-16
- Block: tooling (`.claude/skills/outsystems-screen-spec/scripts/consistency_check.py`, NO-INLINE-COLOR), no shared component
- Other routes using it: every no-capture route whose compiled view has Styles Editor margins/paddings
  (ContactByEmailLDMCoordinator, EmailTarget, the other F9 no-capture screens)
- Related question: LDM_Email_V2 Q3 (decision, recommended A)

## Evidence
- Compiled view: `migration/runtime-sources/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc.js`
  :303-307 (`Cont_From` extendedProperties `style: "margin-top: 0px;"`), :336-340, :369-373, :402-406 (`Cont_To`,
  `Cont_Subject`, `Cont_Message`: `"margin-top: 10px;"`).
- `consistency_check.py` `captured_inline_styles` (:58-69) reads only `analysis/dom/*.html`; a no-capture route
  (`route.py no-capture`) has none, so every margin/padding inline style is reported.
- Parity difference it explains: none (no parity on a no-capture route); `[NO-INLINE-COLOR]` on
  `components/ScreenBlock_Event_Email_V2.tsx` for the four containers.

## Expected change
For a route with `no-capture.json`, also accept declarations found in an `extendedProperties.style` string of the
route's compiled view and blocks (`migration/runtime-sources/<route sources>`), exactly as written there.

## Workaround in the route until applied
None: the styles are rendered as compiled (Q3 → A); consistency reports these four lines until the check is changed.
With Q3 → B instead, the four `style` props are removed until this CR is applied.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:

## Resolution (orchestrator, 2026-10-16)
- consistency_check.py: for a no-capture route, NO-INLINE-COLOR accepts the inline styles of the compiled .mvc.js files its route-spec cites (`style: "..."`). LDM_Email_V2, ContactByEmailLDMCoordinator, EmailTarget, HomeFeed check clean.
