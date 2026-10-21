# CR-Profile-2: platform input widgets — built-in validation (ValidateWidgets, Form.Valid, messages)

- Status: applied
- Raised by: orchestrator for Profile, 2026-10-15 (Profile Q3 answered by code)
- Block: platform widgets (OutSystems/ReactWidgets Input, TextArea, Form; ClientRuntime ValidationService) → `app/src/components/` (and the shared `UBTConnectLibrary/Input` that wraps an input)
- Other routes using it: every screen that calls ScreenController_ValidateWidgets / reads `<Form>.Valid` (Profile now; check ContactUsDetails, ContactByEmail*, Login before changing them)
- Related question: Profile Q3

## Evidence
- `migration/runtime-sources/OutSystemsReactView.js` ≈ offset 211900 (InputWithVariableWidget.validate):
  empty value and mandatory → `ValidationResult(false, getMandatoryValueMessage())`; non-empty value with
  `inputedValueValidity.valid === false` (HTML5 validity, e.g. `type="email"`) or `!variable.isAcceptable(value)` →
  `ValidationResult(false, getInvalidValueMessage(variable.type))`.
- `migration/runtime-sources/OutSystems.js` ≈ offset 514340 (ValidationService.validate / validateWidget, model flush) and
  ≈ 541500 (messages provider): `getMessage(MandatoryValue, "Required Value!")`,
  `getMessage(InvalidValuePrefix + DataTypes[type], "Invalid Value!")`.
- Input widget render: `createValidationElement()` after the `<input>`, `inputedValueValidity` = element `validity`
  (`OutSystemsReactWidgets.js`, Input / TextArea).
- Profile today: `app/src/screens/Profile/index.tsx:153-155` `detailsFormValid = () => true` (no client check).

## Expected change
A shared validation service for platform input widgets: `validate()` over the widgets of a form (mandatory, HTML5
validity, data-type acceptability), the form's `Valid` flag, the per-widget invalid state and message markup exactly as
`createValidationElement` renders it (class names from the runtime), messages "Required Value!" / "Invalid Value!" unless
the app overrides them (check the app's language resources first). Then Profile replaces `detailsFormValid` with it.

## Workaround in the route until applied
Profile keeps `detailsFormValid = () => true` (no client-side check); invalid email is sent to the mocked save.

## Resolution (foundation owner)
Applied by F7a, 2026-10-15.
- Change:
  - New `app/src/components/OSValidation/` (`validationService.ts` pure port, `OSValidation.tsx` React bindings,
    `OSValidation.test.tsx`): `ValidationService` (register/unregister, `validate(id?)`, validateWidget,
    recalculateAggregatorsState, `isValid(id)` = `<Widget>.Valid`, `setWidgetValidity` = an action assigning
    Valid/ValidationMessage), `validateInputWithVariable` (InputWithVariableWidget.validate), `OSForm` (Form widget,
    aggregator), `useInputWithVariableValidation` (Input/TextArea: " not-valid", `aria-describedby`, message span),
    `ValidationMessage` (createValidationElement), `useScreenValidationService` + `ValidationServiceProvider`.
    Evidence offsets are in the file headers (OutSystems.js ≈511752-515176, ≈539928-542148, ≈545565;
    OutSystemsReactView.js ≈209183-212175; OutSystemsReactWidgets.js Form ≈53787, Input ≈59309-64696, TextArea ≈79454).
  - Messages: the app overrides the platform defaults. `UBTConnect.languageResources.js:8-18` sets
    `Validation.Mandatory` = "This field is required.", `Validation.Email` = "Enter a valid email.",
    `Validation.PhoneNumber` = "Enter a valid phone number.", `Validation.Text` = "Enter a valid text." (and others).
    The Profile controller is built with that provider (Profile.mvc.js:4137). "Required Value!" / "Invalid Value!" are
    kept only as fallbacks.
  - Facts: ScreenController_ValidateWidgets = `validationServiceInstance.validate()` with no id, so every widget of the
    screen is validated (UBTJavaScriptUtils.controller.js ≈230126, migration/shell/sources). For Text, PhoneNumber and
    Email a text value is always acceptable (isConvertibleTo ≈265432-265900). Only the browser `validity` can fail, which
    means `type="email"`. Typing does not clear a shown message (Input/TextArea onChange only set the variable).
  - Profile: `detailsFormValid = () => true` is removed. OnClick_Save runs `validation.validate()` and then
    `validation.isValid('DetailsForm')` (Profile.mvc.js:3546-3550). The form is `OSForm` and the 7 inputs register
    (Mandatory False, data types Text/Email/PhoneNumber). An invalid email now shows "Enter a valid email." and blocks
    the save (invalid branch :3660-3667: isLoading_Submit False, HasChanges False).
  - `shared/UBTConnectLibrary/Input`: the `<NotCaptured>` invalid state and the invented `aria-invalid` are replaced
    by the runtime markup (the block assigns Input_Search.Valid/ValidationMessage, Input.mvc.js:460-463, :677-680).
    No caller sets IsMandatory or IsForceInvalid, so no finished route changes.
- Regression parity run on: Profile (default/loading/offline, all 0), Login, ContactUsDetails and
  ContactByEmailOneSchoolGlobal (all states 0). `npm --prefix app run ci` is green (251 files, 1078 tests).
- Not changed (other users of platform validation, each needs its own CR or route edit): Login (Button with built-in
  validation `_this.validateWidget("")`, Login.mvc.js:355, :456), ContactUsDetails (assigns Input_FullName/Input_Email
  Valid + ValidationMessage, reads Form_ContactUs.Valid, ContactUsDetails.mvc.js:1910-1941; the route computes it by
  hand). Not wired: web block instances as nested React scopes. The service supports `isWebBlockInstance`, but no
  React block registers one yet.
- Follow-up (foundation F8b, 2026-10-16): Login and ContactUsDetails now use the service. Login: both buttons call
  `validation.validate('')` before their action (Login.mvc.js:355, :456). ContactUsDetails: `OSForm` Form_ContactUs,
  TextArea_Message registers (Mandatory True, Text), OnClick_SubmitForm assigns Input_FullName / Input_Email /
  Input_PhoneNumber Valid + ValidationMessage with `setWidgetValidity` and reads `isValid('Form_ContactUs')`
  (ContactUsDetails.mvc.js:1907-1958). New `UnbuiltValidationWidget` (tested): the signed-out widgets, whose markup is
  `<NotCaptured>`, still register in the Form so their Valid counts. Parity 0 on Login, ContactUsDetails, Profile.
