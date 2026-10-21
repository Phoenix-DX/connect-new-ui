# Questions: Photobook

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] PanZoom (pinch zoom of the foreground photo) (answered)
- Question: PanZoom.PanZoom runs a customised anvaka panzoom script (scripts/PanZoom.anvaka_panzoom_js.js: maxZoom 3, minZoom 1, bounds, triggerZoomIn / triggerMinZoomReached callbacks, doubleClickEnablesZoom). The script is in none of the local sources and no allowed package provides it. How should the zoom be ported?
- Evidence: PanZoom.PanZoom.PanZoom.mvc.js:113-115 (getJsDependencies) and OnReady JavaScript1JS (panzoom(area, {...})); dom/default.html:113-115 (Zoomable div, transform matrix(1, 0, 0, 1, 0, 0))
- OutSystems MCP: not asked (no MCP for route agents)
- Options: A: vendor the TST script (orchestrator fetches it read-only, foundation applies it through an ADR like Virtual Select) and port PanZoom with it; until then the captured static markup without zoom | B: npm panzoom (anvaka) through an ADR | C: no zoom: static markup only (recommended: A)
- Answer (user, 2026-10-15T19:11:48): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): vendor the TST PanZoom script (ADR-7)

## Q2 [decision] Carousel provider actions (CR-Photobook-1) (answered)
- Question: Photobook_Carousel calls the OSUI actions CarouselGoTo (gallery thumbnail click, Replay) and CarouselToggleDrag (zoom in / min zoom / autoplay), and UBTConnect Carousel_SetCurrentPosition (writes the live carousel's StartingPosition). The shared Carousel API (osui/lib/actions.ts) has none of them. Priority of change request CR-Photobook-1?
- Evidence: Photobook_Carousel.mvc.js:707,832,1100-1110,1191 (carouselToggleDrag$Action / carouselGoTo$Action / carousel_SetCurrentPosition$Action); UBTConnect.controller.js Carousel_SetCurrentPosition.SetCurrentPositionJS (carouselObject._configs.StartingPosition = index)
- OutSystems MCP: not asked
- Options: A: apply CR-Photobook-1 before the review; until then the route calls nothing for these actions (thumbnail click and Replay do not move the carousel, drag stays on) | B: review now with the actions inert and apply CR-Photobook-1 later (recommended: A)
- Answer (user, 2026-10-15T19:11:48): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): apply CR-Photobook-1 (shared Carousel go-to, toggle-drag, starting position) before the review

## Q3 [decision] Mock of DataActionGetHouseholdCaption (info sheet) (answered)
- Question: The info sheet's caption (Photobook_Options_Left DataActionGetHouseholdCaption, on demand after the info button) was not captured and is person data. What should the mock answer?
- Evidence: Photobook_Options_Left.mvc.js controller getHouseholdCaption$DataActRefresh (dataFetchDependenciesOriginal -1, on demand), view SanitizedHtml AllowedTags nobr,sup; skeleton caption UBTConnect.controller.js GetSkeleton_UI_PhotobookCaption
- OutSystems MCP: not asked
- Options: A: a fictional caption per household in the skeleton caption's format (fictional names, the household's fictional locality), LastFetchedHousehold = the requested household | B: the skeleton caption text for every household (recommended: A)
- Answer (user, 2026-10-15T19:11:48): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): fictional caption per household in the skeleton caption format

## Q4 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A, Q2 → A, Q3 → A: auto-accepted (user instruction 2026-10-15 16:59); see questions.json.; CR-Photobook-2 applied: platform RadioGroup/RadioButton (`app/src/components/OSRadioGroup/`, W:78-188, W:347-430);; SetSplideEvent "moved" handler only logs to the console: not ported (NO-CONSOLE).; Exemptions (capture artifacts: masked photos, masked title, gallery scroll) merged into parity-exemptions.json Feature flags: action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T20:16:46): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q5 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A, Q2 → A, Q3 → A: auto-accepted (user instruction 2026-10-15 16:59); see questions.json.; CR-Photobook-2 applied: platform RadioGroup/RadioButton (`app/src/components/OSRadioGroup/`, W:78-188, W:347-430);; SetSplideEvent "moved" handler only logs to the console: not ported (NO-CONSOLE).; Exemptions (capture artifacts: masked photos, masked title, gallery scroll) merged into parity-exemptions.json Feature flags: action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T06:59:21): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q6 [review] review round 3 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A, Q2 → A, Q3 → A: auto-accepted (user instruction 2026-10-15 16:59); see questions.json.; CR-Photobook-2 applied: platform RadioGroup/RadioButton (`app/src/components/OSRadioGroup/`, W:78-188, W:347-430);; SetSplideEvent "moved" handler only logs to the console: not ported (NO-CONSOLE).; Exemptions (capture artifacts: masked photos, masked title, gallery scroll) merged into parity-exemptions.json Feature flags: action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T20:54:13): confirm (auto-confirmed: user instruction 2026-10-16 evening, until 2026-10-17 morning)
