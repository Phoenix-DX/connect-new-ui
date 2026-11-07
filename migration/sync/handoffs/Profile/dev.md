## Result
status: pass
summary: The Email row now matches TST: Email_Container > Columns_Two "Email" > CustomText "EmailLabel", with an empty right column, and Input_Email is disabled. The block ids after the row moved up by 2, as captured ($b30..$b63). The cache answers are mapped with `osList` in useProfile, so no wire shape reaches the components. With the user's answers in place (default scenario `spouse`, exemption pathRegex `b6[0-9]`), parity is clean in every state and consistency is OK.

## Files changed
app/src/pages/Profile/components/PersonalInformationSection.tsx
app/src/pages/Profile/components/ProfileDetailsForm.tsx
app/src/pages/Profile/components/AddressInformationSection.tsx
app/src/pages/Profile/components/ProfileFooter.tsx
app/src/pages/Profile/components/ProfileHouseholdPreview.tsx
app/src/pages/Profile/ProfilePage.tsx
app/src/pages/Profile/hooks/useProfile.ts
app/src/pages/Profile/mocks.ts (header comment only: capture default `spouse`, `member` a review scenario)
app/src/pages/Profile/components/ProfileDetailsForm.test.tsx
app/src/pages/Profile/components/ProfileHouseholdPreview.test.tsx
app/src/pages/Profile/components/AddressCacheControls.test.tsx
app/src/pages/Profile/Profile.test.tsx
app/src/pages/Profile/hooks/profileState.test.ts
app/src/pages/Profile/hooks/useProfile.test.tsx
migration/screens/Profile/notes.md (by `sync.py note Profile`)
migration/screens/Profile/parity/default.json, loading.json, offline.json, plus the PNG files (by route.py parity)
(The master changed migration/capture-plan.json and migration/parity-exemptions.json; I did not change them.)

## Commands run
npm --prefix app run typecheck → 2 errors, none in Profile (CountryListPage.tsx:23 and HomeFeedPage.tsx:80, both in other routes)
npx vitest run src/pages/Profile → 10 files, 54 tests passed
npx eslint src/pages/Profile → exit 0
npm --prefix app run arch → no dependency violations
python3 tools/pipeline/consistency_check.py --screen Profile → consistency: Profile OK
python3 tools/sync/sync.py note Profile --text "..." → noted in migration/screens/Profile/notes.md
python3 tools/pipeline/route.py parity Profile --app http://localhost:5173 (after the last code change) → Profile: parity clean
- default (mock spouse): 0 differences, call 0; pixels 3.91% exempted (CAPTURE-MASKED-AVATAR-INPUTS-PROFILE-SHIFT); CAPTURE-MASKED-IMAGE-PROFILE-HOUSEHOLD×10, CAPTURE-SWITCH-CHECKED-PROFILE×4
- loading: 0 differences
- offline: 0 differences

## Deviations from the brief
- The brief note says "new calls", but no change to the route logic was needed: call parity shows 0 differences.
- The NO-WIRE-IN-COMPONENTS finding was in hooks/useProfile.ts:269/272, not in an inputs.ts (Profile has no inputs.ts). I fixed it with `osList` from `@/lib/os-wire`, as the master asked, and the behaviour stays the same.

## Questions for the user
none
