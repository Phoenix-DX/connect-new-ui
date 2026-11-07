# context-087: TST sync wave, 2026-11-07 (re-capture, triage, fix wave through the `tst-sync` team)

## Result
- TST was published again (moduleinfo `versionSequence` 15749 → 15765). All captured routes were re-captured
  (48 of 54 in the first pass; the Orbit via routes, OneSchoolGlobalCarousel and AcceptPendingPolicies keep their
  capture because the via paths were not reachable). Source drift tool: `tools/tst/survey_diff.py`
  (`migration/knowledge/tst-drift-2026-11-07.md`). Parity sweep: 30 of 68 routes differed → triage
  (`migration/sync/triage-2026-11-07.md`): 29 items, A 17, B 12.
- New agent team `tst-sync` (skill, `sync-developer`/`sync-tester`/`sync-documenter`, `tools/sync/sync.py` + tests,
  guide `migration/sync/README.md`); the API contract was regenerated from the fresh captures (184 operations).
- Wave 1: 19 routes at review (parity clean in every state, tester and documenter passed), waiting for the user's
  `confirm` and `restamp.py`; Locality_Details waits for a flag decision; 8 items wait for the user's decisions
  (`migration/sync/state.json` questions Q1–Q8; `decisions-2026-11-07.md`).
- Tokens of the team so far: about 5.0 M (dev 3.46 M, test 0.84 M, docs 0.69 M) plus 1.0 M for the plan, readers and judge.

## Decisions (who, date)
- User 2026-11-06: scope all captured routes; new team; confirm per route; branch `sync/tst-2026-11`.
- User 2026-11-07: the eight answers of the decision session (`migration/sync/decisions-2026-11-07.md`).
- Fable (delegated or factual): contract regeneration; default scenarios Menu `householder`, Profile `spouse`; four
  exemption path renumberings (Profile, SupperMeeting_Carousel, Locality_Details, HouseholdCarousel: TST moved block
  ids); MessageDetail id 5981096, OneSchoolGlobalDetails school 132; OrbitLanding and Bookmarks captured with other
  accounts right after a fresh sign-in.

## Facts learned (evidence)
- Q4: PINUnlock T&C link needs a policy URL in the account's policies cache (`Block_PINUnlock_ContentWrapper.mvc.js:584`);
  OrbitLanding "Upcoming" keeps milestones ending ≥ today − 8 days (`ScreenBlock_OrbitLanding.mvc.js:1798-1800`);
  LegacyShareObject share list is the account's data. The per-user flag probe shows only `getHasNewNotifications` false → true.
- A capture made with a saved session can show an empty Bookmarks list; the list appears right after a fresh sign-in.
- New flag `launchDarkly_FF.mobileDirectoryLocalityContacts` (TST true) in Locality_Details.
- `scope_guard` and the parity fingerprint need the sync.py allow list and the grant/overlap rules (see `tools/sync/sync.py`).

## Files changed
- `tools/sync/`, `tools/tst/survey_diff.py`, `tools/parity/restamp.py`, `.claude/skills/tst-sync/`, `.claude/agents/sync-*.md`,
  `migration/sync/`, `migration/knowledge/tst-drift-2026-11-07.md`, `app/src/api/openapi.yaml` (+ schema), the pages
  and shared folders of the items (see each `handoffs/<Route>/dev.md`), `app/docs/CHANGELOG-sync.md`, CLAUDE.md section.

## Open issues
- The user's confirms (19 routes) and decisions Q1–Q8; then `restamp.py --app http://localhost:5173` per route and one commit each.
- Follow-ups recorded in the route specs: ActionButtonGroup capture (NotificationDetails), Orbit admin popups capture,
  EntityDetailsActions logic (owner item), page-local constants, shared fictional data patched in page mocks
  (AssembleEvents, Assemble_BrowseByCountry, LDM_EventDetail_V2), OneSchoolGlobalCarousel re-capture (needs an OSG bookmark).
- 85 exemption rules unused after the re-capture (Q10 b: remove after the final sweep).

## Next
- `/tst-sync continue` after the user's answers; P6 close (full ci, sweep, exemption review, this note final).
