# context-059 · Clarify screens: the build wave of the blockers, majors and "build now" items (2026-10-27/28)

## Result
- The user ordered the build of the 27 major findings and the 30 "build now" items before sleeping (2026-10-27).
  Ten Opus agents (groups B1–B10, brief `migration/clarify/BUILD.md`) built from the TST compiled code; three forks
  helped B2. Results: 3 of 3 blockers, 27 of 27 majors, 30 of 30 build items closed (`migration/clarify/builds/README.md`).
- Matrix: match 4552 of 5412 (84%), partial 31, missing 22, differs 92, mock-only 157.
- Gates: `npm run ci` green: typecheck, lint 0 errors, arch, baselines, dup, unused 0 new, flags, format, 4331
  tests, vite build. Parity sweep of the 64 routes: 64 clean after the OrbitLanding restore.
- Artifacts: EN "UBTConnect React Gaps" and VI "Infra & FE readiness" rebuilt (blockers and majors "built").

## Decisions (who, date)
- User 2026-10-27: build all 27 majors and 30 build items; decisions during the night go to advisors, the user
  decides in the morning.
- 12 points wait for the user in `migration/clarify/builds/pending-decisions.md`; Opus and Fable both recommend (a)
  for all 12. PD7 is settled by evidence: the TST Adaptive Cards bundle is byte-identical to npm `adaptivecards@2.5.0`.
- Orchestrator (auto mode): clone merges to shared folders and the dead GetMilestoneScanFF code removed. The knip
  and flag baselines only shrank. The api/policy tests use the TST GUIDs; one flaky preload assertion waits.

## Facts learned (evidence)
- `Connect2_LegacyShared.AdaptiveCards.js` = `adaptivecards` 2.5.0 `dist/adaptivecards.js` after BOM and CRLF
  (md5 ae3ac2e4…); `Versions.latest = v1_3`. `PlaceholderLib.controller.js` fetched (SetTextPlaceholdersValue :396).
- `UBTConnect.choice` on the wire is "Yes"/"No"/"None" (`static-entities-tst.json:2771`); React sends 'Choice.Yes' (PD2).
- The LDM_EventDetail_V2 screen handler rebuilds the carousel preload with every guest (`:212-219`); the block's
  filtered list is overwritten (B8).
- The runtime `List` restore patch of NavigationHandler (NH:1050-1126) and the FocusScrollAnchorOnBack entering anchor
  act only on AssembleDetail's list (not ported).
- The survey of 2026-10-13 is stale for ScreenBlock_OrbitLanding: the live TST script (fetched 2026-10-28) has the
  passport control that the TST capture DOM shows; finding F3 withdrawn, the React control restored (PD13).

## Files changed
- `app/`: about 250 files.
  - Pages: ContactUsDetails, HostSurvey, MilestoneDetail, Profile, Search, LDM_*, MessageDetail, Notifications,
    Updates_SingleList, Services, MyEntertaining, OrbitLanding, OrbitAdminLanding, Notes, EmailContact, ContactByEmail*.
  - Api: event, locality, message, policy, share. Components: ui/RangeSlider, ui/NoItemsFound,
    widgets/AdaptiveCardViewer, orbit/*, contact/ContactUs_Rate. Containers: FreeSubscriptionActionDialog.
  - Platform: feedback, bootstrap; legacy/os exceptions. Docs: guides, known-original-bugs B14, api README.
- `migration/clarify/`: `BUILD.md`, `builds/` (README, manifest, 10 notes, pending-decisions, advisor-opus,
  advisor-fable), 45 reports and checklists, INDEX, aggregate, artifacts; `migration/runtime-sources/` (+3 files),
  `migration/knowledge/runtime-sources.md`, `migration/metrics/ledger.csv`.

## Open issues
- The 12 pending decisions; then: PD2 constants switch, PD7 install, PD8 port, PD10–PD12 bug-list rows.
- Follow-ups in `builds/README.md` (dropdown merge, validation hook, B4's other query callers, SanitizedHtml `<nobr>`,
  `generateScreenURL` double `?`, HostSurvey tooltip and image loader).

## Next
- The user's answers to PD1–PD12; the follow-ups; then the production topics of `infra-gaps.md` §11.
