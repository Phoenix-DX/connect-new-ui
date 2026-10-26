## Result
status: pass
summary: ScreenBlock_GenerateQRCode is now split into a page hook (`hooks/useGenerateQrCode.ts`, useFlowState with `beforePaint: true` per W28, W23 write guard), a pure state file and a props-only view (`components/GenerateQrCodeView.tsx`). The page reads `inputs.ts`. The calls go to `api/event` and to `api/image` (the 3 shared files are copied byte for byte from wt-OrbitAdminEventDetail). The old `api.ts`, `types.ts`, the block and `actions.ts` are deleted. Typecheck, lint, format and all 2987 tests pass. A temporary old-vs-new check found the same DOM, calls, request bodies and locations in 14 scenarios.

## Files changed
app/src/api/image/repository.ts (new; `cp` of wt-OrbitAdminEventDetail, byte for byte, not edited)
app/src/api/image/repository.test.ts (new; `cp`, byte for byte, not edited)
app/src/api/image/index.ts (`cp`, byte for byte: adds the export of `fetchLegacySignedImageURL`)
app/src/pages/QRCodeGenerate/QRCodeGeneratePage.tsx (rewritten: reads the inputs, calls the hook, renders the view and CommonUiLayout)
app/src/pages/QRCodeGenerate/inputs.ts (new: `QRCodeGenerateInputs`, `readQRCodeGenerateInputs`, same defaults as before)
app/src/pages/QRCodeGenerate/hooks/useGenerateQrCode.ts (new: OnReady, RefreshData and OnHandle_ContactHelpdesk)
app/src/pages/QRCodeGenerate/hooks/useGenerateQrCode.test.tsx (new, 9 tests, 2 of them for W23)
app/src/pages/QRCodeGenerate/hooks/generateQrCodeState.ts (new: state, reducer, pure client actions; GetContactHelpdeskSubject_Event from the old `components/actions.ts` moved here)
app/src/pages/QRCodeGenerate/hooks/generateQrCodeState.test.ts (new, 10 tests)
app/src/pages/QRCodeGenerate/hooks/useBinaryImageURL.ts (new: the object URL of the QR PNG, moved from the old block without change)
app/src/pages/QRCodeGenerate/hooks/useBinaryImageURL.test.ts (new, 3 tests)
app/src/pages/QRCodeGenerate/components/GenerateQrCodeView.tsx (new: the view, props only; the old block markup without change)
app/src/pages/QRCodeGenerate/components/GenerateQrCodeView.test.tsx (new, 6 tests)
app/src/pages/QRCodeGenerate/QRCodeGenerate.test.tsx (new, 7 tests: load, request body, first frame and loading, no pass, error, footer navigation, back navigation)
app/src/pages/QRCodeGenerate/mocks.ts (the wire type is now local, `{ List: [...] }` replaces `wireList`; the answers do not change)
app/src/pages/QRCodeGenerate/api.ts (deleted with `rm`, not staged)
app/src/pages/QRCodeGenerate/types.ts (deleted with `rm`, not staged)
app/src/pages/QRCodeGenerate/components/ScreenBlock_GenerateQRCode.tsx (deleted with `rm`, not staged)
app/src/pages/QRCodeGenerate/components/actions.ts (deleted with `rm`, not staged)
migration/refactor/handoffs/P6-G6-B-QRCodeGenerate/dev.md (new)

Not changed: `src/mocks/**`, `openapi.yaml`, the CSS, `api/event`, the docs. There was no test of QRCodeGenerate before this step.

## Commands run
All commands ran in the worktree with Node 24 on PATH. I did not start a dev server or `vite preview`, and I did not run the parity or the e2e suite.
- Bundle before the change: `npx vite build` + `node build/bundle-report.mjs HomeFeed Login QRCodeGenerate` → exit 0. HomeFeed 244.44, Login 184.47, QRCodeGenerate 200.07 kB gzip. A rebuild of a base copy in the scratchpad gave the same numbers and the same entry hash.
- `npm --prefix app run typecheck` → exit 0
- `cd app && npx vitest run src/pages/QRCodeGenerate src/api/image src/api/event` → exit 0, 9 files, 181 tests
- `cd app && npx vitest run` (full suite) → exit 0, 526 files, 2987 tests
- `cd app && npx eslint src/pages/QRCodeGenerate src/api/image` → exit 0, 0 problems
- `npm --prefix app run lint` → exit 0, 0 errors, 76 warnings; none of them is in the changed folders
- `npm --prefix app run format:check` → exit 0
- `npm --prefix app run arch` → 0 errors, 186 warnings (189 before). The 3 rule-9 warnings of QRCodeGenerate are gone: `mocks.ts`, `api.ts` and the block imported `legacy/os`. There is no warning in `pages/QRCodeGenerate` or `api/image`.
- `python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "75 warnings, 75 baseline rows, 0 new, 0 gone". The baseline had no QRCodeGenerate row.
- `cd app && npx knip` → exit 1, as on the base (whole app). None of the changed files is listed.
- Mutation checks (each put back):
  - Without `beforePaint: true`, the first-frame test and the StrictMode test of the hook fail, and 2 StrictMode scenarios of the old-vs-new check fail.
  - Without the `isAlive` guard, the W23 unmount test fails.
  - When Get_EventQRCode reads `latest` and not the flow's copy of the variables, the W23 unmount test fails.
- Temporary old-vs-new check:
  - Setup: `app/src/pages/__old_qr/` held the pre-step page, block, actions, api and types, made by `make_old.py`, which rewrites the imports, and `compare.test.tsx`. I deleted the folder after the run. Copies of the old files, the scripts and the test are in `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/qr-tools/`.
  - Each scenario compared these items: the first frame (flushSync outside act), the frames after the scenario steps, the calls in order, every request body, the location, the feedback message and the console errors.
  - Scenarios (14):
    - load
    - load in StrictMode
    - no pass (member 990002)
    - no inputs
    - empty inputs
    - a cached user without a locality and with a member id that is not a number
    - loading
    - error
    - empty
    - footer click
    - away and back
    - away while pending and back
    - away while pending and back in StrictMode
    - opened after EventDetail, then back
  - Runs: 14/14 equal in 3 runs with the old page first and 2 runs with the new page first. Two old-vs-old control runs were also equal; I used them to fix 2 problems in the test itself (a body element left by an earlier run, the feedback message id).
- Bundle after the change: `npm --prefix app run build` → exit 0. `node build/bundle-report.mjs HomeFeed Login QRCodeGenerate`:
  - HomeFeed 244.47 kB gzip (+0.03) and Login 184.49 (+0.02). Every first-load chunk of both screens has the same raw size as before, except the entry chunk, which grew by 3 raw bytes. The QRCodeGenerate route now preloads one more chunk, the shared `flowState` chunk, so its preload list in the route table has one more index. The other gzip differences come from the new chunk hashes. The code of both screens did not change.
  - QRCodeGenerate 200.77 (+0.70): the page chunk +0.16 and the shared `flowState` chunk +0.53, now loaded by this route.

## Deviations from the brief
1. Branch: the worktree is on `rf/prefetch-P6-G6-B-QRCodeGenerate-f29b7bd0`, not on `refactor/architecture`. The master set up this branch and told me to work in it. The base is HEAD plus the staged G5-A, G5-B-Shared, G6-A and G6-B-Shared diffs. I did not stage, unstage, commit or use `git mv` or `git rm`. The 4 deleted files were removed with `rm`, and every new file is untracked.
2. Depends on P6-G6-B-LegacyShareObject: that step is not in my base. QRCodeGenerate does not use LegacyShareObject code, so this step does not depend on it.
3. Shape (move-map row 26, `hook+component`):
   - The hook is `hooks/useGenerateQrCode.ts` and the view is `components/GenerateQrCodeView.tsx`, as the targets in the move-map. There is no container (one data source, one handler).
   - The client action GetContactHelpdeskSubject_Event is in `hooks/generateQrCodeState.ts` (pure, tested). The old `components/actions.ts` is deleted.
   - The view takes props only. It does not import `platform/` or `api/`; it imports only the domain types of `api/event`, as other page components do.
   - The view does not have the unused `menu` and `commonUIElements` props of the old block. It renders the same 2 empty placeholder elements.
4. W28: the old block ran OnReady in a `useLayoutEffect`, so the hook sets `beforePaint: true`. The first frame shows the skeleton with the user name set, as before.
5. W23:
   - Writes after an unmount are skipped.
   - After an unmount, the started flow still calls Get_EventQRCode once. The call sends the variables that the flow assigned (UserSignedURL included), from the flow's own copy of the variables, as the old port did with its `latest` ref.
   - A failure still goes to the flow handler after the unmount, as before.
   - StrictMode runs RefreshData once: `beforePaint` runs OnReady once.
   - Unit tests: 2 for the unmount, 1 for StrictMode.
6. View cache: the view name is now `Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode`; it was `Model`. On a restored view, the hook keeps the saved state and makes no call, as before. The old code also checked that the saved state existed. A restored view always has it, because OnReady writes the state at its start; the old-vs-new back-navigation scenarios are equal.
7. Inputs: the old reading is kept. An absent In_MemberId or In_EventId is "0" and an absent text or date is "". A value that is present stays as it is, also when it is empty; this differs from OneSchoolGlobalDetails, which reads "" as 0.
8. Imports kept from `shared/`: `Connect2_OrbitMobile_MUI/lib/staticEntities` and `lib/actions` (getFormattedDateTime), as before. They have no move-map row; P6-end deals with them.
9. Mocks: `mocks.ts` writes the seat list as `{ List: [...] }` (what `wireList` returns), so the page folder has no rule-9 warning. The answers do not change. `eventQRCodeAnswer` stays exported, as before.
10. The `api/image/repository.ts` comment names only OrbitAdminEventDetail as a caller. QRCodeGenerate is now a second caller. I did not edit the copied file (byte-for-byte rule). The comment can be updated when the G5 and G6 worktrees merge.
11. Tools: the old-vs-new tooling (`make_old.py`, `chunkdiff.mjs`, `compare.test.tsx`) is in the scratchpad, not in `migration/tools/refactor/`. It only made and deleted the temporary `__old_qr/` folder and compared the builds; it edited no tracked file. Every app edit used Edit or Write.
12. For the documenter:
    - `move-map.csv`:
      - Row 26 (ScreenBlock_GenerateQRCode): status moved, `hook+component`.
        - hook `pages/QRCodeGenerate/hooks/useGenerateQrCode.ts` (useFlowState, `beforePaint`, W23 guard)
        - state and GetContactHelpdeskSubject_Event in `hooks/generateQrCodeState.ts`
        - `hooks/useBinaryImageURL.ts`
        - view `components/GenerateQrCodeView.tsx`
      - Row 324 (QRCodeGenerate):
        - page plus `inputs.ts`
        - `api.ts`, `types.ts` and `components/actions.ts` are deleted
        - the calls are `fetchEventQRCode` (`api/event`) and `fetchLegacySignedImageURL` (`api/image`, W8)
    - `app/src/api/README.md` line 40: QRCodeGenerate no longer has an `api.ts` or `types.ts` that re-exports `api/event`.
    - `app/docs/refactor/calls-by-domain.md` lines 112 and 174: the `screens/QRCodeGenerate/api.ts` rows. The calls are now in `api/event` (DataActionGet_EventQRCode) and `api/image` (GetSignedImagesInBulk).
    - The CHANGELOG entry: 3 rule-9 warnings gone (arch 189 → 186); HomeFeed and Login: entry +3 raw bytes only.
    - GetContactHelpdeskSubject_Event has 2 more copies, in ViewDocuments and HelpersDetail. They are for step C (jscpd) or P7, not this step.

## Questions for the user
none
