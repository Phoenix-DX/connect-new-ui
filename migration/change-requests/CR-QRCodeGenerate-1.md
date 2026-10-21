# CR-QRCodeGenerate-1: shell — the mock user's names, MemberId, locality and country in AppManager_GetCachedUserInfo (in memory only)

- Status: applied
- Raised by: QRCodeGenerate, 2026-10-16
- Block: `app/src/shell/cachedUserInfo.ts` (`appManager_GetCachedUserInfo`), `app/src/shell/mockUser.ts` (`mockCachedUserInfo`)
- Same need as CR-OrbitAdminLanding-1 (FirstName, MemberId; applied with this CR, F16): this CR adds LastName, Locality and Country; one change
  can close both.
- Related question: QRCodeGenerate Q2 (decision, answered A, user 2026-10-16)

## Evidence
- ScreenBlock_GenerateQRCode RefreshData (`migration/screens/QRCodeGenerate/analysis/sources/Connect2_OrbitMobile_MUI.
  Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc.js` :749-812): UserName = FirstName + " " + LastName,
  UserLocation = Locality + (Locality <> "" ? ", " + Country : Country), then GetCacheableSignedImageURL(
  TextToInteger(MemberId), Member, Medium) for the photo; all from AppManager_GetCachedUserInfo.UserInformation. The view
  shows them on the event pass (:336-378: photo `img.orbit-member-photo`, bold name, location).
- The mock record has only CountryCode (`app/src/shell/mockUser.ts` `mockCachedUserInfo`; knowledge/shell-facts.md:125-127
  "Ask again when … a screen depends on other fields"). The pass therefore shows " " as name, an empty location and no
  photo request (MemberId "" → TextToInteger 0 → GetCacheableSignedImageURL returns "" without a call).

## Expected change
While the app runs on mocks, `appManager_GetCachedUserInfo()` returns the fictional mock user's FirstName "Matías",
LastName "Vitale" (directory.ts MOCK_USER), MemberId MOCK_USER_ID ("990001"), Locality "Bahia Blanca" and Country
"Argentina" (directory.ts LOCALITY) from memory, without writing them to the client variable or any browser storage
(AGENTS.md rule 16 unchanged).

## Workaround in the route until applied
None needed: the route reads `appManager_GetCachedUserInfo()` as compiled (components/ScreenBlock_GenerateQRCode.tsx
RefreshData), so the name, location and photo appear once the shell returns them. No `<NotCaptured>`: the markup is
complete, only the session data is empty.

## Resolution (foundation owner)
- Change: foundation owner (F16), 2026-10-16, one change for CR-OrbitAdminLanding-1 and CR-QRCodeGenerate-1.
  - `app/src/shell/mockUser.ts`: `mockCachedUserIdentity()` = FirstName "Matías", LastName "Vitale" (directory.ts
    MOCK_USER), MemberId MOCK_USER_ID ("990001"), Locality "Bahia Blanca", Country "Argentina" (directory.ts LOCALITY).
    `mockCachedUserInfo()` (what the mock sign-in stores) is unchanged: CountryCode only.
  - `app/src/shell/cachedUserInfo.ts` `appManager_GetCachedUserInfo()`: while `config.useMocks` and the variable holds a
    record (signed in), the identity is merged at read time into the fields the stored record leaves empty. Nothing is
    written back: AppManager_UserExtended keeps only CountryCode (AGENTS.md rule 16); signed out → empty record as before.
  - Tests: `shell/cachedUserInfo.test.ts` (stored JSON has empty names/ids; read gives the identity; no identity text in
    localStorage/sessionStorage; empty after logout).
  - Regression (all callers in `app/src`): OrbitLanding (CurrentMemberId) would have shown the My-calendar icon on load
    (mock household listed the signed-in user first; capture has no icon although TST fills the cache). Decision taken in
    auto mode (recommended A): keep the shell change and list the signed-in user second in OrbitLanding's
    Get_HouseholdMembers mock (`app/src/screens/OrbitLanding/mocks.ts`), so the selected first row is not the user, as
    in TST; tapping the own chip shows the icon and View Passport details navigates (as compiled). Supersedes the premise
    of OrbitLanding Q3 (CurrentMemberId 0). MessageDetail reads GetUserInformation, not this action (unaffected).
    MilestoneDetail sends UserMemberId 990001 (mock ignores it). ContactByEmail*, LDM_Email_V2 (shows Email only, still
    empty), EmailTarget, LegacyShareObject, OrbitAdminEventDetail read names/ids only on submit or scan.
    Facts: `migration/knowledge/shell-facts.md` (CachedUserInfo notes).
- Regression parity run on: 2026-10-16, after the last code change: OrbitAdminLanding (default/loading/offline,
  scenario noadminevents), OrbitLanding (5 states), MessageDetail, ContactByEmailMember, ContactByEmailOneSchoolGlobal,
  Profile, Menu, MilestoneDetail: 0 unexempted differences; no exemption proposed. Menu showed a header-band pixel
  timing flake in 2 of 3 runs (alternating states; Menu does not read this action), clean on the third. AcceptPendingPolicies,
  QRCodeGenerate, LDM_Email_V2, OrbitAdminEventDetail have no captured states: unit test (CountryCode) and a headless
  check instead (QRCodeGenerate `?mocksession=unlocked&In_EventId=7301&In_MemberId=990001`: pass shows "Matías Vitale",
  "Bahia Blanca, Argentina", GetSignedImagesInBulk for member 990001 Medium; OrbitAdminLanding header "Matías"; no
  identity text in browser storage).
