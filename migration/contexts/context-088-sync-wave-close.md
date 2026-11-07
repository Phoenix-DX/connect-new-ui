# context-088: TST sync wave closed; stylesheet gap; live API bridge plan (2026-11-07)

## Result
- The 29 items of the sync wave are done. The user confirmed them ("1. confirm ok"). Each route was re-stamped
  (`restamp.py`, parity of every state) and committed (`sync(<Route>)`, 29 commits).
- Tokens of the team: 5.79 M (dev 3.67 M, test 1.14 M, docs 0.98 M), see `migration/sync/report-2026-11-07.md`.

- The user's review of HomeFeed found the COMMUNITY BY THE NUMBERS block without its CSS. The fresh captures
  brought stylesheets that the app did not have, and the route CSS sets were not regenerated. Parity cannot see a
  missing stylesheet: its reference renders the captured DOM with the app's own stylesheets.
- Fix of the gap (commit `dc68c5b4`): five live stylesheets fetched read-only, `css_sets.py` re-run (8 route sets),
  `SanitizedHtml` span id as captured. `css_sets.py --check` is now in the sync preflight and the tester gate.

### Close gates and plan
- `FilterSheetIcon` deleted (no captured DOM renders the block; Updates_SingleList follows the capture
  with `FilterSheet_Icon_Label`). knip baseline cleaned (9 new, 7 stale). The Notifications helper renamed for the
  flow-fetch check. Two api tests follow the captured read states. Eight files formatted.
- Exemptions 146 → 100 (Q9 a, Q10 b; `migration/sync/exemptions-review-2026-11-07.md`). Four stale
  `no-capture.json` markers removed (routes captured since).

- Full sweep: 68 routes clean, except the known OneSchoolGlobalCarousel structure difference. HelpersDetail and
  LegacyShareObject differed only while CI shared the CPU; alone they are clean. CI green.
- New plan `app/docs/architecture/live-api-bridge-plan.md`: the local app calls the OutSystems TST API read-only
  through a bridge (phases B0–B6, later B7 writes). The user took D1–D6. One phase at a time, each approved.

## Decisions (who, date)
- User 2026-11-07: confirm of the 29 routes; exemption CAPTURE-MASKED-TEXT-COMMUNITYNUMBERS-PIXEL (a).
- User 2026-11-07, bridge plan: D1 TST, D2 b now (writes later as B7), D3 a, D4 a (per module, all live by
  default), D5 a, D6 a. B0 waits until the user merges the sync branch into `main`.

## Facts learned (evidence)
- `parity_check.cjs:780-797`: the expected page takes the stylesheets of the app page. A stylesheet missing from
  `app/public/UBTConnect/css` or from the route's CSS set is invisible to parity.
- `migration/sources/pretty/` can be older than the raw file a manifest names. ScreenBlock_Search: the pretty copy of
  2026-11-06 renders `FilterSheet_Icon`, the fresh raw file does not.
- OutSystems wire for the bridge: `migration/sources/runtime/OutSystems.js` (`versionInfo`, `screenData`, CSRF
  header from the `crf` cookie key); `apiVersion` per data action in the compiled screen code.

## Files changed
- `app/public/UBTConnect/css/` (5), `app/src/app/routes.css.generated.ts`, `app/src/components/ui/SanitizedHtml/`,
  `.claude/skills/tst-sync/SKILL.md`, `.claude/agents/sync-tester.md`, `migration/parity-exemptions.json`,
  `migration/sync/*` (report, sweeps, exemptions review, state), `app/docs/CHANGELOG-sync.md`,
  `app/docs/architecture/live-api-bridge-plan.md`, `app/docs/reference/` (regenerated), ledger.

## Open issues
- OneSchoolGlobalCarousel keeps its old capture (needs an OSG bookmark on TST).
- The 13 routes without TST data (see context-086).
- Follow-ups in the route specs of the wave: ActionButtonGroup capture, Orbit admin popups, page mocks that
  override shared fictional data.

## Next
- The user merges `sync/tst-2026-11` into `main` (no push or merge by Claude, rule 7).
- `/tst-sync status` shows the wave as done. The bridge plan starts at B0 only when the user says start.
