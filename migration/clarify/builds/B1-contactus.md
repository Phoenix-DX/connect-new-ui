# B1 ContactUs: build note (2026-10-27)

- Flow: App_Menu_ContactUs. Report: `migration/clarify/flows/App_Menu_ContactUs/report.md` §5.
- TST files: `UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js` (CUD) and `UBTConnect.App_Menu_ContactUs.ContactUs_Rate.mvc.js` (CUR).
- The paths below are relative to `app/src/` unless they start with `migration/`.

## F1 (blocker): the signed-out form (decision Q1 (a), C1)

TST evidence:

- CUD:712-1030: Form_ContactUs, If not isLogged, five Containers with a mandatory Label and a widget.
- CUD:733-760: Input_FullName, Text, MaxLength 50, prompt "Enter Full Name", OnChange_FormInput.
- Input_Email (Email type, "Enter Your Email Address", OnChange_Email) and Input_PhoneNumber (Phone type, "Enter Phone Number", OnChange_PhoneNumber).
- CUD:897-969: Dropdown_Country, Custom mode, Empty Value "Select Your Country", Values = Code, rows = Name.
- CUD:989-1020: Input_Locality, "Enter Your Locality", OnChange_FormInput.
- CUD:1742-1779: OnChange_FormInput; CUD:2191 OnChange_Email; CUD:2326 OnChange_PhoneNumber.
- CUD:1901-1954: the three messages of OnClick_SubmitForm.
- Runtime: `migration/runtime-sources/OutSystemsReactWidgets.js` ≈11641-21300 (DropdownCustom), Input render (`span.input-<type>`).

Files changed:

- `pages/ContactUsDetails/components/ContactUsMessageForm.tsx`: the `NotCaptured` placeholder and the five `UnbuiltValidationWidget` lines are replaced by the five fields.
- `pages/ContactUsDetails/components/ContactUsFormInput.tsx` (new): the OSWidgets.Input of the form.
- `pages/ContactUsDetails/components/CountryDropdown.tsx` (new): the DropdownCustom widget, with the list position, keyboard, scroll and focus of the runtime.
- `pages/ContactUsDetails/hooks/contactUsDetailsState.ts`: actions `formFieldSet` and `formInputChanged`; type `ContactUsInputField`.
- `pages/ContactUsDetails/hooks/useContactUsDetails.ts`: `onFieldChange`, `onCountryVariableChange`, `onCountryChange`.
- `pages/ContactUsDetails/ContactUsDetailsPage.tsx`: passes the form, the countries and the handlers.
- `pages/ContactUsDetails/mocks.ts`: GetCountriesNames answers eight countries (it answered an empty list).
- `api/message/repository.test.ts`: the countries expectation of the mock.

What was built:

- Signed out, the form shows Full Name, Email, Phone Number, Country and Locality before the message, in the TST order.
- Each input is `span.input-<type>` > input, with `required`, `aria-required`, MaxLength 50 and the prompt. It is disabled while isSubmiting.
- The inputs register in Form_ContactUs, so the three messages of OnClick_SubmitForm now show under their widgets.
- OnChange_Email and OnChange_PhoneNumber set the widget valid and clear its message, then run OnChange_FormInput.
- IsFormFilled needs the six trimmed fields (C1 keeps the React trim). The Send button is enabled when all six are filled.
- The dropdown keeps the runtime's quirk: Enter on the empty row sets the variable without OnChange.

Tests:

- `ContactUsMessageForm.test.tsx`: labels, inputs, dropdown rows, the selected name, the disabled state.
- `contactUsDetailsState.test.ts`: the six-field rule.
- `useContactUsDetails.test.tsx`: an invalid e-mail stops Send, OnChange_Email clears it, then Send sends the form.

Proposed verdicts: rows 057, 059, 060, 061, 062, 087, 088, 107, 108, 109, 110, 111, 115, 116, 117, 132 and 137 `match`.

## F2 (major): the rating block ContactUs_Rate (decision Q2 (a))

TST evidence:

- CUD:537-575: If Rate_ShowRate → ContactUs_Rate (SelectedRate = Rate_SelectedRate, isEnabled = not isSubmiting), event RateSelected.
- CUD:2081-2118: ContactUs_RateRateSelected: Rate_SelectedRate = Rate, then OnChange_FormInput.
- CUR:159-390: the view. It has the question (:209) and If UseEmoctions = False, so only the False branch renders.
- The False branch: the RangeSlider 1 to 10, start 0, tick marks every 1. Its ExtendedClass (:236) has "ubt-rating-slider--no-rate" while CurrentRate = 0.
- The labels "Poor" (:330) and "Excellent" (:365).
- CUR:425-470: RangeSliderOnValueChange: CurrentRate = Trunc(Value), then RateSelected(Trunc(Value)).
- `migration/blocks/sources/OutSystemsUI_2_23.Interaction.RangeSlider.mvc.js` and `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js` (AbstractNoUiSlider, OSUINoUiSliderSingle, getPipsConfig).
- `migration/runtime-sources/OutSystemsUI_2_23.NoUISlider.js`: noUiSlider 15.8.1. B1 got it from TST with a read-only GET (the rule for static files) and logged it in `migration/knowledge/runtime-sources.md`.

Files changed:

- `components/ui/RangeSlider/` (new: component, test, story, README, index): the OSUI RangeSlider with the noUiSlider DOM.
- `components/contact/ContactUs_Rate/` (new: component, test, story, README, index): the block.
- `pages/ContactUsDetails/components/ContactUsMessageForm.tsx`: ContactUs_Rate `$b8` replaces the placeholder.
- `pages/ContactUsDetails/hooks/contactUsDetailsState.ts` (action `rateSelected`) and `useContactUsDetails.ts` (`onRateSelected`).

What was built:

- No slider exists in `components/ui` or `components/ui/os`. No library was installed: the port renders the noUiSlider markup itself.
- The slider has the classes and attributes that `ContactUs_Rate.css` selects on, for example `aria-valuenow="1.0"` and the marker and value order of the pips.
- A tap, a drag or a key moves the handle. The OSUI 200 ms throttle then raises OnValueChange.
- The block sets CurrentRate and raises RateSelected. The screen sets Rate_SelectedRate and runs OnChange_FormInput.
- A rate enables Send on the feedback subject without a message (BR-UBTCON-968). SendContactUsMessage gets the rate (BR-UBTCON-970).
- ContactUs_RateItem is not built: TST does not render it. It is only in the True branch of If UseEmoctions (False), and getBlocks of ContactUs_Rate does not list it.

Tests: `RangeSlider.test.tsx` (markup, pips, throttle, keys, tap, class order), `ContactUs_Rate.test.tsx`, `contactUsDetailsState.test.ts`, `useContactUsDetails.test.tsx` (the rate goes with the message).

Proposed verdicts: rows 052, 084, 124, 125, 126, 127, 129, 139, 140, 142, 143, 144 and 146 `match`. Row 139 keeps a note: the emoji locals and isEnabled have no reader in the rendered view.

## F3 (major): the user record and DataAction_GetLocalityTimezone (decision Q4 (a))

TST evidence:

- CUD:2120-2165: CacheControl_UserInfo_WrapperResult sets LocalCacheControl_UserInformation (the user, isFetched True), then refreshes DataAction_GetLocalityTimezone.
- CUD:55-120: the screen variables in their order (ContactUsForm, IsFormFilled, IsAnyFilled, Description, MessagePrompt, …, CallPopupData, LocalCacheControl_UserInformation, …).
- Report row 038: the server reads In_LocalityId from the record (Get_Core_LocalityTimezone).

Files changed:

- `pages/ContactUsDetails/hooks/contactUsDetailsState.ts`: the state field `localCacheControl_UserInformation` (as Menu keeps it: user or null, isFetched). `localityTimezoneCallInputs` also sends ContactUsForm, Description, MessagePrompt and the record, in the TST order.
- `pages/ContactUsDetails/mocks.ts`: GetLocalityTimezone is a `contractHandler` that reads `Locality_Id` from the record. The mock user's locality answers ART (-10800). Any other id, or no record, answers the TST recording (CDT, -18000).

Tests: `contactUsDetailsState.test.ts` (the keys in order, the record, the locality id), `useContactUsDetails.test.tsx` (the call gets the record and the texts). `api/message/repository.test.ts` still gets the recording without the record.

Proposed verdicts: rows 038 and 081 `match`. Row 039 stays `mock-only`.

## Checks

- `npx vitest run src/api/message src/mocks src/pages/ContactUsMenu src/pages/ContactUsDetails src/components/contact src/components/ui/RangeSlider src/components/ui/os`: 33 files, 242 tests pass.
- `npx eslint` and `npx prettier --check` on the changed folders: clean.
- `npm run typecheck`: no error in the B1 files. The errors left are in MessageDetail, HostSurvey and AdaptiveCardViewer (other groups).
- `npm run arch`: no B1 violation. The three violations are in MessageDetail and HostSurvey (other groups).

## Decisions needed

1. Shared Dropdown widget.
   - Evidence: HostSurvey (another group, untracked) adds `pages/HostSurvey/components/OSDropdownCustom.tsx`. B1 adds `pages/ContactUsDetails/components/CountryDropdown.tsx`. Both port the same runtime widget.
   - Options: (a) keep two page copies; (b) move one port to `components/ui/os/OSDropdownCustom` after this build.
   - Recommendation: (b), from the B1 port, because it has the list position, keyboard, scroll and focus.
2. Validation registration of a widget that is not an input.
   - Evidence: CountryDropdown registers in Form_ContactUs with `UnbuiltValidationWidget`, whose name says "not built". `components/ui/os/OSValidation` has no hook for this case.
   - Options: (a) keep it; (b) add a `useValidationWidget` hook to OSValidation (owner of that folder).
   - Recommendation: (b). No validation runs on this screen, so the behaviour is the same.
3. Place of the RangeSlider.
   - Evidence: it is an OutSystems UI block, so B1 put it in a new folder `components/ui/RangeSlider/`, outside the listed B1 areas. No other file of `components/ui` changed.
   - Options: (a) keep it there; (b) move it into `components/contact/ContactUs_Rate/`.
   - Recommendation: (a), as the other OSUI blocks.
4. Mock data of GetCountriesNames.
   - Evidence: never recorded. The list, its order and its codes on the real server are not known.
   - Options: (a) keep eight real countries sorted by name; (b) record the call signed out on TST.
   - Recommendation: (a) for the mock phase; the backend contract decides the list.
