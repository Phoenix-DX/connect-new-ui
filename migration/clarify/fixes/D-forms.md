# Fix note: group D (forms, inputs, images)

Minor findings wave of 2026-10-27. Brief: `migration/clarify/FIX.md`. No commit. No decision in `decisions.md` names
these findings.

## 1. App_Profile F2: MaxLength and autocomplete of the Profile inputs

- TST evidence (`UBTConnect.App_Profile.Profile.mvc.js`):
  - Input_Username (disabled): `maxLength: 50` (:993). Input_Email: `maxLength: 50` (:1065).
  - HomeNumber2: `autoComplete: "off"` and `maxLength: 15` (:1844, :1851).
  - Input_MobileNumber: the same (:2021, :2028). Input_WorkNumber: the same (:2242, :2249).
  - Input_ContactBaseId and Input_UBTAccountNumber: `maxLength: 0` (:687, :805). This value gives no attribute.
- Files changed:
  - `app/src/pages/Profile/components/FormInput.tsx:19-22, 30, 44, 49`: new optional props `maxLength` and
    `autoComplete`. The input gets them as attributes. Without a prop, the input has no attribute.
  - `app/src/pages/Profile/components/PersonalInformationSection.tsx:54, 65`: `maxLength={50}` on Input_Username
    and Input_Email.
  - `app/src/pages/Profile/components/ContactInformationSection.tsx:59-60, 88-89, 125-126`: `maxLength={15}` and
    `autoComplete="off"` on HomeNumber2, Input_MobileNumber and Input_WorkNumber.
  - `app/src/pages/Profile/components/ProfileDetailsForm.test.tsx:56`: new test for the attributes, and for no
    `maxlength` on the two identification inputs.
- Input_Username: row App_Profile-031 is `match` already (MaxLength has no effect on a disabled input). The
  `maxlength="50"` attribute is in the TST DOM, so the input gets it too.
- The shared `components/ui/FormInput` is not used here: Profile has its own `FormInput`. No change there.
- Tests: `npx vitest run src/pages/Profile` (pass).
- Proposed verdict: `match` for App_Profile-032, App_Profile-041, App_Profile-043, App_Profile-046.

## 2. App_PIN F1: the user name comes from AppManager_GetCachedUserInfo

- TST evidence: `UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc.js:559-580`. OnInitialize, if EnableName:
  `AppManager_GetCachedUserInfo` (:575, a client action with no server call), then
  `UserName = FirstName + " " + LastName` (:578-579).
- Files changed:
  - `app/src/platform/session/usePinRegisterContent.ts:6, 88-95, 105-109`: the hook reads the name with
    `appManager_GetCachedUserInfo()` (`cachedUserInfo.ts:36`), not with the async `getUserInformation()`. The read
    occurs once, when the block becomes enabled, during the render. Thus the name is set before the first render, as
    OnInitialize does. An empty record gives the name " ". There is no GetUserInformation call.
  - `app/src/platform/session/usePinRegisterContent.test.tsx:45, 98-114, 116-123`: the setup writes the AppManager
    record of the mock sign-in (`mockAuth.completeSignIn` writes the same record). The tests now expect the name at
    the first render, no GetUserInformation call, and " " for an empty record.
  - `app/src/components/auth/PinRegisterContent/README.md:28-29, 50-53`: the README names
    `appManager_GetCachedUserInfo` as the counterpart of the action. The text "has no counterpart" is gone.
  - `app/src/pages/PINRegister/PINRegister.test.tsx:7-8, 48` (**outside the group areas, test only**): the setup
    writes the AppManager record of the mock sign-in. Without it, the page test shows "Welcome  " (empty record), and
    the test fails. The page code has no change.
- In the running mock app, the mock sign-in writes the record, and `appManager_GetCachedUserInfo` adds the names of
  the mock user. The page shows "Welcome Matías Vitale" as before.
- Tests: `npx vitest run src/platform/session src/components/auth/PinRegisterContent src/pages/PINRegister
  src/pages/PINChange` (pass).
- Proposed verdict: `match` for App_PIN-050.

## 3. ContactFlow F2: empty src of the coordinator header image (open)

- TST evidence: `UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:330-337` (Image, type External, URL
  In_AvatarURL). `migration/runtime-sources/OutSystemsReactWidgets.js:2`, `prepareImageAttributes`: `src` is "" by
  default, and type 1 sets `src = props.url`. Thus an empty URL gives `src=""`.
- Status: open. No file changed.
- Reason: React 19 (`react-dom` 19.2.8) removes an empty `src` from the DOM and logs a console error
  (`react-dom-client.development.js:19975-19981`). If the page gives `imageSrc=""`, the DOM does not change. The
  `<img>` is in `app/src/components/contact/ContactHeaderCard/ContactHeaderCard.tsx:31`, which is not in the group D
  areas.
- Proposed change for the owner of `components/contact`: in `ContactHeaderCard`, add a ref that writes the empty
  attribute, as in finding 4 (`GenerateQrCodeView.tsx:17-22`):
  `ref={(img) => { if (img && imageSrc === '') img.setAttribute('src', ''); }}`, and keep `src={imageSrc || undefined}`.
  Then `ContactByEmailLDMCoordinatorPage.tsx:34` gives `imageSrc={inputs.In_AvatarURL}` (without `|| undefined`). The
  two other pages give a non-empty asset URL, so they do not change.
- Proposed verdict: ContactFlow-131 stays `partial` until that change.

## 4. Legacy_OrbitQRCodeFlow F2: empty src of the member photo

- TST evidence: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc.js:337-339`
  (Image, style `orbit-member-photo`, type External, URL UserSignedURL, no default image).
  `OutSystemsReactWidgets.js:2` (`prepareImageAttributes`): an empty URL gives `src=""`.
- Files changed:
  - `app/src/pages/QRCodeGenerate/components/GenerateQrCodeView.tsx:17-22, 72-77`: new helper `keepEmptySrc`. A ref
    writes `src=""` after the commit when UserSignedURL is empty, because React 19 removes an empty `src`. A non-empty
    URL goes through the `src` prop as before.
  - `app/src/pages/QRCodeGenerate/components/GenerateQrCodeView.test.tsx:68-71, 78-92`: an empty URL gives `src=""`.
    A new test changes the URL to empty and back again.
- Tests: `npx vitest run src/pages/QRCodeGenerate` (pass).
- Proposed verdict: `match` for Legacy_OrbitQRCodeFlow-049.

## 5. _libraries F4: HorizontalTagList default of IsSelected (finding not confirmed)

- TST evidence: `UBTConnectLibrary.model.js:1258-1274`, `TagRec`: the IsSelected default is **True** (:1269-1271),
  and the Enabled default is True (:1272-1274). `UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js:22-24`:
  In_TagToggleList is a `TagList` (item type `TagRec`, `UBTConnectLibrary.model.js:1290`). The guard (:349-368)
  counts the rows with IsSelected = True.
- Result: React `IsSelected ?? true` (`HorizontalTagList.tsx:55, 59`) is the same as TST. The judge note ("a Boolean
  attribute, default False") is not correct for this structure. With `?? false`, React is different from TST. `TagToggle.tsx:34` (`IsSelected = true`) has the same default.
- Files changed:
  - `app/src/components/ui/HorizontalTagList/HorizontalTagList.tsx:49-50`: comment only. It cites the TagRec defaults.
  - `app/src/components/ui/HorizontalTagList/HorizontalTagList.test.tsx:46-60`: new test. A tag with no IsSelected
    counts as selected in the mandatory-selection guard, so the selected tag can go off.
- Tests: `npx vitest run src/components/ui/HorizontalTagList src/components/ui/TagToggle` (pass).
- Proposed verdict: `match` for _libraries-053 and _libraries-054 (no difference from TST).

## Checks

- `npx vitest run src/pages/Profile src/platform/session src/components/auth/PinRegisterContent src/pages/PINRegister
  src/pages/PINChange src/pages/QRCodeGenerate src/components/ui/HorizontalTagList src/components/ui/TagToggle
  src/pages/ContactByEmailLDMCoordinator`: 38 files, 249 tests, all pass.
- `npx eslint` and `npx prettier --check` on the changed files: no problems.
- `npm run typecheck`: 27 errors, all in `src/pages/Services/` (`servicesState.test.ts`, `useServices.ts`). These
  files are in the work of another group. The group D files have no type errors.

## ContactFlow F2, closed by the orchestrator (2026-10-27)

- TST: `UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:329-333` (OSWidgets.Image, type External, url In_AvatarURL): an empty URL renders `<img src="">`.
- Files changed: `app/src/components/contact/ContactHeaderCard/ContactHeaderCard.tsx:21-24, 38-43` (ref `keepEmptySrc`, as in GenerateQrCodeView), `ContactHeaderCard.stories.tsx:21-24`, `ContactHeaderCard.test.tsx:23-25`, `README.md:11`; `app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx:34` (passes In_AvatarURL as is), `ContactByEmailLDMCoordinator.test.tsx:109-111`.
- Tests: `npx vitest run src/components/contact/ContactHeaderCard src/pages/ContactByEmailLDMCoordinator src/pages/ContactByEmailOrbitHelpdesk src/pages/ContactByEmailOneSchoolGlobal`: 4 files, 20 tests, pass. ESLint and Prettier: clean.
- Proposed verdict: row ContactFlow-131 `match`.
