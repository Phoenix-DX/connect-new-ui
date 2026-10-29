# Advisor Fable, 2026-10-28 (pending decisions PD1–PD12)

| Id | Option | Why | Risk of the other option |
|---|---|---|---|
| PD1 | a | Mock-only; reading `PolicyApplications.List` is the simplest server reading that still exercises the input. | (b) hides a wrong input list (React once sent names, TST sends the GUID texts). |
| PD2 | a | `static-entities-tst.json:2771` has `UBTConnect.choice` = yes "Yes", no "No", none "None": the shared constants can take the TST identifiers now; one change in `lib/ubtConnect/staticEntities.ts:103`, 16 importers. | (b) keeps a wire mismatch until a BFF exists and the BFF carries a translation nothing else needs. |
| PD3 | a | The block only works with that record (default IdAsText "AllLocalities", IsSelected True; ClearFilters selects it); check on TST when an LDM account has events. | (b) breaks Clear and the "all selected" state for no evidence. |
| PD4 | a | Not in the sources, mock-only; the simplest reading matches the filter's semantics. | (b) is a guess too. |
| PD5 | a | Not a decision: `MyTimeline_Filters.mvc.js:90-91` copies the input and mutates the copy (:888, :1096), so dropping unsaved choices is TST behaviour. | (b) changes TST behaviour and fails parity once the popup is captured. |
| PD6 | a | Rule 9 stays green with no new baseline row; F37 (followups.md:47) owns the move of all cache blocks to api hooks. | (b) builds a seam F37 deletes; (c) grows the build wave into the refactor. |
| PD7 | a | The TST bundle's highest schema is v1_3 (no v1_4): the `adaptivecards` 2.9.x line, same schema and renderer as TST, well past the stable rule. | (b) 3.0 renders 1.3 cards with changed defaults and CSS classes; (c) a 1.2 MB global outside npm, no types. |
| PD8 | a | The fetch is done (`PlaceholderLib.controller.js`, SetTextPlaceholdersValue at :396): only the port remains; today a message with placeholders renders them raw. | (b) leaves a visible text defect that TST does not have. |
| PD9 | a | `flag-values-tst.json:21` getHasExtendedShare = true: TST never renders that branch; no capture, no parity. | (b) a guessed UI with no source of truth. |
| PD10 | a | The 1:1 rule includes original defects; visible text that users and testers know. | (b) breaks text parity and hides the defects from the bug list. |
| PD11 | a | The TST value is timing noise (ms of the cache read, 0 on a hit); the only consumer (`ContactPopup.tsx:111`) is NotCaptured. | (b) ports non-deterministic noise. |
| PD12 | a | Same rule as PD10: `MealHost.mvc.js:861`, `MealHelper.mvc.js:881` read the first guest's member; keep and record. | (b) changes a link target a capture would flag. |

Notes: PD2 needs no TST check (the values are in static-entities-tst.json:2771). PD5 is a 1:1 fact, not a decision.
PD8 is "port now or later" (the file is fetched). PD10–PD12 go together: three rows in `app/docs/known-original-bugs.md`.
PD1 and PD2 are the same pattern (React constants vs TST identifiers on the wire).
