## Result
status: pass
summary: TST now sets Layout_DetailPage `In_AlignTitleLeft: false, In_IsPrimaryColor: true` (UBTConnect.ContactFlow.ContactByEmailMember.mvc@007f1407.js, view :299-303). The page now passes `inAlignTitleLeft={false}` and config `isPrimaryColor: true`, so the markup has `ubt-layout-detail--primary` and `text-align-center`. Parity is clean in all 3 states. Calls were unchanged: only the timestamps in calls.json moved. Fix loop 1: `inputs.ts` now uses `osDate(value) ?? ''` from `@/lib/os-wire` for the In_LDMEventDate null-date check, in place of the literal "1900-01-01" (same output for every input). `consistency_check.py --screen ContactByEmailMember` prints OK.

## Files changed
app/src/pages/ContactByEmailMember/ContactByEmailMemberPage.tsx
app/src/pages/ContactByEmailMember/config.ts
app/src/pages/ContactByEmailMember/ContactByEmailMember.test.tsx
app/src/pages/ContactByEmailMember/inputs.ts (fix loop 1)
migration/screens/ContactByEmailMember/route-spec.md

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/ContactByEmailMember → exit 0, 7/7 passed (the first test now also checks `ubt-layout-detail--primary` and `text-align-center`)
npx eslint src/pages/ContactByEmailMember/ → exit 0
npm --prefix app run arch → exit 0, no dependency violations (139 known violations ignored)
python3 tools/pipeline/route.py parity ContactByEmailMember --app http://localhost:5173 (first run) → default clean; loading pixel 2.95%; offline pixel 7.83%. Both were screenshot timing flakes: the loading expected.png is an unstyled page and the offline build.png was blank, with 0 DOM, style and call differences.
python3 tools/pipeline/route.py parity ContactByEmailMember --app http://localhost:5173 (final, after the last code change) →
  default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%; exempted: CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1
  loading: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%; exempted: ignoreSubtrees×1
  offline: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%; exempted: CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1
  ContactByEmailMember: parity clean
Fix loop 1 (after the inputs.ts change):
  npm --prefix app run typecheck → exit 0
  npx vitest run src/pages/ContactByEmailMember → exit 0, 7/7 passed
  npx eslint src/pages/ContactByEmailMember → exit 0
  npm --prefix app run arch → exit 0, no dependency violations (139 known ignored)
  python3 tools/pipeline/consistency_check.py --screen ContactByEmailMember → consistency: ContactByEmailMember OK
  python3 tools/pipeline/route.py parity ContactByEmailMember --app http://localhost:5173 (first run, clean) →
    default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%; exempted: CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1
    loading: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%; exempted: ignoreSubtrees×1
    offline: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%; exempted: CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1
    ContactByEmailMember: parity clean
Dev server check: the vite process on port 5173 runs from /Users/khaitruong/Projects/connect-new/app.

## Deviations from the brief
none. Note for the tester: the loading and offline pixel checks can flake on the first run. A second run was clean.

## Questions for the user
none
