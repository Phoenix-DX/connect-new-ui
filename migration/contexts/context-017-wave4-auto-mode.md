# context-017 · Wave 4 in auto mode (2026-10-15, from 16:59 +07)

## Result
- 46/46 wave-4 blocks built. 5 wave-4 routes finished: BrowseCountries, CountryList (re-stamped), CommunityBusinessDetails_CoomingSoon,
  BrowseDirectory and CountryDetails, for 20 finished routes in total.
- Built and waiting on foundation CRs: HouseholdDetails, OneSchoolGlobalDetails, SupperMeeting_Details, Locality_Details, Photobook,
  HouseholdCarousel. Route agents still running: SupperMeeting_Carousel, Household_Relations. Board: `route.py plan`.

## Decisions (auto-accepted, user instruction 2026-10-15 16:59; every answer recorded in the route's `questions.json`)
- BrowseCountries Q1 A; BrowseDirectory Q2–Q5 A; CountryDetails Q1–Q3 A; CountryList Q1–Q2 A; the reviews of these routes
  and of CommunityBusinessDetails_CoomingSoon were auto-confirmed.
- HouseholdDetails Q1–Q2 A; OneSchoolGlobalDetails Q2–Q4 A (Q1 answered by code); SupperMeeting_Details Q1 A;
  Locality_Details Q1–Q3 (recommended) and Q4 (a)+(b); Photobook Q1–Q3 A and **ADR-7** (vendor TST PanZoom; `migration/stack.json`);
  HouseholdCarousel Q1 A (mock-only preload seed), Q2 A (CR-HouseholdCarousel-1).
- Exemptions merged from route proposals into `migration/parity-exemptions.json`, among them APP-START-VIA,
  CAPTURE-LOADING-FETCH-TIMEOUT-HOUSEHOLD-MEMBERS and CALL-COUNT-SIGNED-IMAGES-BATCH (countFree).

## Facts learned
- Playwright cannot return a serialized DOM tree 65 levels deep ("Execution context was destroyed", HouseholdCarousel).
  `parity_check.cjs` now returns the tree as a JSON string and parses it in Node.
- States captured `via` another screen (`states.json`) record no app-start calls. Parity opens the route by URL, so the app-start
  chain (`app/src/shell/startup.ts`) runs on the screen itself. New exemption key `appStartCalls` applies only to via states.
- New rule field `detailRegex`: exempts only one exact difference (e.g. capture `list-error` vs build `list-loading`).
- Capture-plan `settles` per state (Photobook default 5.5 s: the option buttons hide after 5 s). It replaced a timer exemption.
- TST static files fetched under the standing rule: PanZoom script, OneSchool flow controller (`migration/knowledge/runtime-sources.md`).

## Files changed
- Skill: `scripts/parity_check.cjs` (JSON serialization, appStartCalls, detailRegex), `scripts/route.py` (settles), `assets/parity-exemptions.example.json`.
- `migration/foundation-plan.md` (batch F4), `migration/capture-plan.json` (Photobook settles).

## Open issues
- Foundation batch running: CR-HouseholdDetails-1/2, CR-OneSchoolGlobalDetails-1, CR-SupperMeeting_Details-1, flaky OSList test
  (lint `unbound-method` in `OSList.test.tsx:70`).
- F4 next: CR-Photobook-1/2 + ADR-7 wiring, CR-Locality_Details-1, CR-HouseholdCarousel-1/2, offline PINUnlock flake.
- `scope_guard` needs git; the project folder is not a git repo, so it is skipped.

## Next
Finish the running foundation and route agents → F4 → re-run parity on the blocked routes → spec-done/ready/confirm/finish → wave 5.
