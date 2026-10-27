# context-058 · Clarify screens: the minor findings fixed in the React app (2026-10-27, fourth session)

## Result
- The user ordered the fix of the 56 minor findings. 8 Opus developer agents (groups A–G2, brief `migration/clarify/FIX.md`)
  changed `app/`; the orchestrator fixed ContactFlow F2 and the LegacyShareObject follow-up.
- Result (`migration/clarify/fixes/README.md`, `manifest.json`): 49 fixed, 4 withdrawn after a second read of the
  TST code, 2 kept by a recorded decision, 1 open (Directory_Updates F2, capture needed).
- Gates: typecheck, lint 0 errors (73 warnings = HEAD), arch, 4060 tests; parity sweep 64/64 clean after one fix.
- Matrix: match 4365 (was 4295), partial 79 (137), missing 152 (166), differs 98 (96). Report §5 has a Status column.
- Artifact "UBTConnect React Gaps" republished (version 2). New: badges fixed / withdrawn / kept by decision / open,
  a "Show fixed and withdrawn" toggle, the tile "56 minor · 49 fixed".

- Follow-ups (same day, `fixes/H-user-followups.md`):
  - The user reversed App_Common Q1: "Forgot Password?" built as TST (AuthProvider `resetPassword`, the
    IdP_OnResetPassword callback with the success toast; Login parity clean).
  - The user allowed the MarkAsRead write for one capture of Directory_Updates rows 073/074: TST writes
    `scrollAnchorId` and `scrollAnchorDelta` on the tap; the restore on Back was not observed.
  - The user then ordered the full port of the scroll anchor (Directory_Updates F2): CaptureScrollPosition,
    RememberFocusedScrollAnchor, GetFocusedScrollAnchorOnBack, ScrollFix; `useViewState` now saves a value set in the
    same tick as the navigation (ScreenModel_Flush). Parity Updates_SingleList clean.
  - Result: 51 fixed, 4 withdrawn, 1 kept, 0 open. Artifact EN version 4.

## Decisions (who, date)
- User 2026-10-27: fix the 56 minors, re-check, update the artifact; publish without an accept step.
- Orchestrator (auto mode) 2026-10-27: one loading-state parity exemption for LegacyShareObject
  (`CAPTURE-LOADING-FETCH-TIMEOUT-LEGACYSHAREOBJECT-ONINITIALIZE`), same family as the other loading-timeout entries.
- User 2026-10-27: Forgot Password fully as TST (reversal of App_Common Q1 a). The MarkAsRead write allowed for
  the Directory_Updates capture only (the guard is read-only again). The scroll anchor ported fully.
- Open for the user: Legacy_OrbitEventsFlow F4 (keep W34 a, recommended, or reverse it in about 20 hooks);
  App_Policies F2 `networkMode: 'always'` (group C) or `'online'`.

## Facts learned (evidence)
- The runtime creates a screen's view after a handled OnInitialize error; only an unhandled error result leaves the
  screen without a view (`OutSystems.js` ControllerFactory). The clone has no request timeout, so a never-answering
  OnInitialize call leaves the page blank in the mock loading scenario.
- The runtime Container widget never reads `animate` (`OutSystemsReactWidgets.js`): no show/hide transition on TST.
- `TagRec.IsSelected` default is True (`UBTConnectLibrary.model.js:1269-1271`).
- OnAfterFetch runs only after a successful fetch (`ScreenBlock_MilestoneWrapper :1135-1143`).
- Cost of the wave: about 1.47 M tokens over 8 agents (ledger `clarify-fix-*`), 57–158 calls each.

## Files changed
- `app/`: 107 files changed, 13 new (pages, api, platform, containers, components; `docs/known-original-bugs.md` B3).
- `migration/clarify/`: `fixes/` (README, manifest, 8 notes), `tools/apply_fixes.py`, `collect.py`, `aggregate.py`,
  `artifact_build.py` (`--template`), `artifact/template-gaps.html`, `react-gaps.en.html`, `data.en.json`, 45 reports
  and checklists, `INDEX.md`, `review/aggregate.md`, `RESUME.md`, `FIX.md`.
- `migration/parity-exemptions.json` (+1), `migration/screens/*/parity/` (sweep reports), `migration/metrics/ledger.csv`.

## Open issues
- Notes F2 (major); Photobook move log; the List restore patch of NavigationHandler (NH:1050-1126) is not ported.
- The Vietnamese artifact "Infra & FE readiness" still shows the findings without the fix status.

## Next
- The user's answers on F4 (W34) and App_Policies F2; then the build items of `infra-gaps.md` §10.4 on order.
