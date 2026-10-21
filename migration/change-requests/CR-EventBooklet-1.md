# CR-EventBooklet-1: API contract + Orbit client variables — GetBookletGuestsMaxRows / GetBookletHelpersMaxRows and SetBookletMaxRows

- Status: applied
- Raised by: EventBooklet, 2026-10-16
- Block: contract (`app/src/api/openapi.yaml`, extra actions) and `app/src/shared/Connect2_OrbitMobile_MUI/lib` (client variables BookletGuestsMaxRows / BookletHelpersMaxRows, client action SetBookletMaxRows)
- Other routes using it (catalog/blocks.md): none (EventBooklet only)
- Related question: EventBooklet Q3 (page size until applied)

## Evidence
- No capture (no-capture.json). Handler: `migration/screens/EventBooklet/analysis/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc.js` OnReady :3121-3194 (`setBookletMaxRows$Action` before ResetPaginationSettings(True)), ResetPaginationSettings :2744-2844 (`getBookletGuestsMaxRows()` / `getBookletHelpersMaxRows()`, ScrollThreshold = MaxRows × 30).
- `migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js`: SetBookletMaxRows :6599-6620 → Set_BookletGuestsMaxRows :6515-6556 / Set_BookletHelpersMaxRows :6557-6598 → server actions GetBookletGuestsMaxRows / GetBookletHelpersMaxRows :8466-8530 (`rssespaceconnect2_orbitmobile_bl_ActionGetBookletGuestsMaxRows`, output BookletGuestsMaxRows Integer; same for helpers).
- Missing: both server actions in the contract (F9 note: "GetBookletGuests/HelpersMaxRows … add via CRs when routes need them"); `Connect2_OrbitMobile_MUI.clientVariables.js` (defaults of the two client variables) is not among the TST sources (name it to the orchestrator: fetch read-only).

## Expected change
1. Contract: the two server actions (no inputs; output BookletGuestsMaxRows / BookletHelpersMaxRows Integer), 10 s timeout as the module.
2. Shared lib: the two client variables (default from the fetched clientVariables.js) and `setBookletMaxRows()` (Set_BookletGuestsMaxRows then Set_BookletHelpersMaxRows, each storing the server value).
3. Mock answers (fictional page sizes, e.g. 10 / 10).

## Workaround in the route until applied
No UI part: `app/src/screens/EventBooklet/components/actions.ts` `bookletMaxRows` (10 / 10) and a `setBookletMaxRows()` stand-in that makes no call (EventBooklet Q3 → A).

## Resolution (foundation owner)
Set `- Status: applied` above when done.
- Change (F17, 2026-10-16):
  - Contract: `migration/contract/extra-actions.json` + `contract_gen.py` + `gen:api` → `POST /api/Connect2_OrbitMobile_MUI/ActionGetBookletGuestsMaxRows`
    and `…/ActionGetBookletHelpersMaxRows` (no inputs; output BookletGuestsMaxRows / BookletHelpersMaxRows Integer;
    module timeout 10 s from `app/src/lib/api.ts` SERVER_REQUEST_TIMEOUT). Both are flagged `x-os-writes` by the read-only
    guard rule (`Book` in "Booklet" matches its WRITE pattern): a name false positive, they are reads.
  - Client variables `Connect2_OrbitMobile_MUI.BookletGuestsMaxRows` / `.BookletHelpersMaxRows` in `app/src/shell/clientVars.ts`:
    Integer, default 0 (the fetched `Connect2_OrbitMobile_MUI.clientVariables.js:8-19` gives no compiled default, so the type default).
  - `app/src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts`: `set_BookletGuestsMaxRows` (C:6515-6556),
    `set_BookletHelpersMaxRows` (C:6557-6598), `setBookletMaxRows` (C:6599-6620, sequential), via setClientVar.
  - Mocks (`…/lib/mocks.ts` BOOKLET_MAX_ROWS): fictional 10 guests / 5 helpers per page, so both fixture lists page
    (24 guests, 7 helpers). Test in `…/lib/actions.test.ts`.
  - EventBooklet: stand-ins removed from `components/actions.ts`; `ScreenBlock_EventBooklet.tsx` calls the shared
    `setBookletMaxRows` and ResetPaginationSettings reads the client variables (SB :2744-2844).
- Regression parity run on: Profile, OrbitLanding, EventDetail (all 0, 2026-10-16). EventBooklet (no capture): headless
  smoke test, calls GuestsMaxRows → HelpersMaxRows → filters → guests; guest pages 1-3 of 10, helper pages 1-2 of 5.
