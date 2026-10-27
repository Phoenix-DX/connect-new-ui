# context-055 · Clarify screens: waves G2–G4 and the shared units done; session end (2026-10-27)

## Result
- All screen flows with built screens are judged: G1 (9), G2 (7), G3 (6), G4 (6), plus the shared units (11
  block-only flows, `_shared` actions, `_libraries`): 41 reports, 5255 rows.
  - Verdicts: match 4186, partial 134, missing 164, differs 91, mock-only 157, n/a 494, unclear 29.
  - Findings: 3 blockers, 25 major, 55 minor, 29 info.
- Blockers: ContactUsDetails signed-out form; HostSurvey wizard; MilestoneDetail builds AccommodationHost only.
- Method from G2 on: Sonnet reader (`draft.json` + `notes.md`) → Opus judge; Fable for the wrapper flows and the
  shared actions and libraries. Briefs: `READER.md`, `JUDGE.md`. Review notes: `review/G1…G4-review.md`.
- The user answered the 43 questions of G1–G3 by accepting the recommendations (`decisions.md`, `answers.json`).
- TST scripts fetched read-only 2026-10-27: 41 flow and library controllers, `UBT_Email.model.js`,
  `UBTConnectLibrary.model.js`, `OutSystemsUI_2_23.model.js` (logged in `knowledge/runtime-sources.md`).
- `RESUME.md` in `migration/clarify/` says how the next session continues.

## Decisions (who, date)
- User 2026-10-27:
  - G2+ two-stage model (Sonnet read, Opus judge, Fable hard parts); no Sonnet trial for whole flows.
  - Waste report after each wave; 5 DEV-only screens get `skip` rows (V8).
  - `_shared` after G3, G4 in parallel; answers "theo id" = the recommendation of each id.
  - Stop after G4 + shared and save the history.

## Facts learned (evidence)
- Per-row cost: G1 3.2k Opus; G2 1.47k Opus + 1.21k Sonnet; G3 1.9k Opus/Fable + 1.5k Sonnet. Fable judges cost
  about 1.5× Opus for the same rows and close every `unclear` row.
- The Write tool refuses `.md` files of a subagent; deliverables go through one heredoc or a generator script.
- DEV is ahead of TST in App_Notifications; React follows DEV wrongly in OrbitLanding (passport) and OrbitAdminLanding
  (milestone branch). 30+ KB rules disagree with both DEV and TST (K rows in the reports).

## Files changed
- `migration/clarify/**` (reports, packs, briefs, tools, INDEX, decisions, review, RESUME), `migration/board.md` and
  `board.meta.json` (5 rows), `migration/runtime-sources/` (+44), `migration/knowledge/runtime-sources.md`,
  `migration/metrics/ledger.csv`.

## Open issues
- Questions of G4 and the shared units (INDEX.md §3, groups G4 and X) wait for the user. 29 `unclear` rows and the
  "to re-check" items of the review files go to the follow-up pass. G5 (4 not-built flows) and P2 (architecture and
  infra gaps) not started.

## Next
- Follow `migration/clarify/RESUME.md`: answers of G4/X, G5, follow-up pass, P2 synthesis, P3 hand-over.
