# Item 3: the custom dropdowns and the validation hook (2026-10-28)

Item 3 of the user's work list (`../RESUME.md`): the follow-ups of builds B1 and B2 (`../builds/B1-contactus.md:107-114`,
`../builds/B2-hostsurvey.md:145-162`, `../builds/README.md:79-91`). Evidence order (user, 2026-10-28): the MCP (DEV)
first, then the compiled TST code (live since the source switch), then the React code. TST wins on a difference.

## 1. TST and MCP facts

| # | Fact | MCP (DEV) | Compiled TST (live) |
|---|---|---|---|
| F1 | The drift of 2026-10-27 does not touch this item: ContactUsDetails, ContactUs_Rate, the 16 HostSurvey blocks and the screen HostSurvey changed only their debugger ids; `OutSystemsReactWidgets.js` (the runtime widget) is the same | - | `survey-drift/logic-changes.json`, `survey-diff.json`, `runtime-sources-result.json` |
| F2 | The app has 8 platform dropdowns in Custom mode (`OSWidgets.Dropdown`, `dropdownMode: 1`), all mandatory: Dropdown_Country (ContactUsDetails); Dropdown_BedsNumber, Dropdown_BedSize, Dropdown_Floor (HostSurvey_AccommodationItem); Dropdown_HelperRoles (HostSurvey_AddHelper, HostSurvey_HelperItem); Dropdown_OwnerType, Dropdown_VehicleType (HostSurvey_VehicleItem) | IDropdown, DropdownMode Custom, Mandatory True, Style "dropdown", OnChange BuiltInValidations None, each. Dropdown_Country: EmptyValue "Select Your Country", Enabled `not isSubmiting`, OnChange OnChange_FormInput. HostSurvey (Connect2_OrbitMobile_MUI): Enabled `not In_IsSurveyConfirmed` (AddHelper: no Enabled); OnChange OnChange_NoOfBeds, OnChange_BedSize, OnChange_Inputs or OnChange_HelperRoles; an onfocus event OnFocus_Inputs. The MCP finds one Dropdown_HelperRoles by name (AddHelper's); HelperItem's is checked in TST only | The `React.createElement(OSWidgets.Dropdown` sites of the live survey |
| F3 | Dropdown_Country is a validation widget of Form_ContactUs (`validationParentId`). No built-in validation runs on the screen: the Send button is the block event `CW_Common/Button buttonOnClick`, and the file has no validate call. OnClick_SubmitForm assigns Valid only to Input_FullName, Input_Email and Input_PhoneNumber, then tests `Form_ContactUs.Valid`. So the dropdown stays valid, as in React today (`UnbuiltValidationWidget`, always valid) | DEV OnChange BuiltInValidations None | `UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:131-137, 908-944, 1266-1290, 1896-1961` |
| F4 | The HostSurvey dropdowns are in no Form, but the blocks set their Valid and ValidationMessage in actions. `*_Validate` and OnHandle_Save: `Valid = False`, `ValidationMessage = CreateValidationMessage("<field>")` (Number of beds, Floor, Helper role, Role, Owner type, Vehicle type). The OnChange actions set `Valid = <value> <> ""` and the message "" or the same text. AddHelper OnHandle_Save reads `Dropdown_HelperRoles.Valid` | AccommodationForm_Validate, VehicleForm_Validate, HelperForm_Validate, OnHandle_Save: the same nodes | `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_*.mvc.js` (`model.widgets.get(idService.getId("Dropdown_…")).validAttr` and `.validationMessageAttr`; for example AccommodationItem :1355-1367, :1894-1910) |
| F6 | The bed-size dropdowns are validated in the DOM: ValidateBedSizeInputs finds `<ParentClass> .list .dropdown-container`, reads the text of `.dropdown-display .dropdown-display-content span`, compares it with the Empty Value, adds or removes the class `not-valid` and appends or removes a `span.validation-message`. A shared dropdown must keep this markup | Client action ValidateBedSizeInputs (JS node ValidateAllBedInputs); AccommodationForm_Validate calls it with ".orbit-host-survey-beds", "not-valid", "Select bed type", "validation-message" | `migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js:8050-8270`; React port in `app/src/pages/HostSurvey/components/hostSurveyAccommodationItem.ts` |
| F5 | The runtime widget: render, renderEmptyValue, renderDropdownList, select, hide, the list position (updateState: left, top, width, dropdown-expanded-up / -down), the keyboard navigation of the open list, the scroll to the selected row | Not in the model (runtime) | `migration/runtime-sources/OutSystemsReactWidgets.js` (DropdownCustom module) |

## 2. React today

| Copy | File | Used by | What it ports |
|---|---|---|---|
| B1 | `app/src/pages/ContactUsDetails/components/CountryDropdown.tsx` (317 lines) | Dropdown_Country | Markup, list position (updateState), keyboard, scroll to the selected row, focus; the validation record (`useWidgetValidationRecord`, not-valid class, message); registers in the form with `UnbuiltValidationWidget` |
| B2 | `app/src/pages/HostSurvey/components/OSDropdownCustom.tsx` (135 lines) | AccommodationItem (3), AddHelper, HelperItem | Markup and select; the validation record from a prop. Not ported (its own header): the list position, the keyboard navigation of the open list, the scroll to the selected row |
| Local | `app/src/pages/HostSurvey/components/HostSurvey_VehicleItem.tsx:61-120` (`DropdownCustom`) | Dropdown_OwnerType, Dropdown_VehicleType | Markup, select, a part of the keyboard (Enter or Space opens; other keys close), the validation record. Not ported: the list position |

`UnbuiltValidationWidget` (`app/src/components/ui/os/OSValidation/OSValidation.tsx:131-150`) is for a widget whose markup
is not built: it renders nothing and only registers. `OSValidation` has no hook for a built widget that is not an input.

## 3. Differences

| # | Difference | TST | React |
|---|---|---|---|
| G1 | Three ports of one platform widget, in two pages | One runtime widget | `CountryDropdown`, `OSDropdownCustom`, local `DropdownCustom` |
| G2 | The HostSurvey dropdowns lack the list position, the keyboard navigation and the scroll to the selected row | F5 | B2 and Local (§2) |
| G3 | A built dropdown registers in its form through the "not built" component | F3 | `CountryDropdown.tsx:268` |
| G4 | The behaviour of F3, F4 and F6 (valid state from the actions, the DOM contract of the bed check) must stay | F3, F4, F6 | B1, B2 and Local show the not-valid class and the message from the record |

No capture shows an open dropdown (`../builds/B2-hostsurvey.md:162`): the parity sweep cannot check the open list.

DEV and TST agree on every fact above (no DEV≠TST row).

## 4. Status (2026-10-28)

The user approved the design of `item3-solution.md` (design (a), O1 (a), O2 port from the runtime code, O3–O6 as
recommended). Built with tests first; note `../builds/item3-dropdowns.md`:
- One platform widget `app/src/components/ui/os/OSDropdownCustom/` for the 8 dropdowns. The three copies are gone.
- `useValidationWidget` in OSValidation; `UnbuiltValidationWidget` is deleted.
- Dropdown_Country: no visible change (F3).
- The 7 HostSurvey dropdowns gain the runtime list position, keyboard, focus and scroll.
- The five former B2 dropdowns raise OnChange on the empty row (D6).
- The two vehicle dropdowns stop the second OnChange on the same row (D7) and drop `aria-describedby` (D8).
- D2 (the expanded classes on a closed dropdown that shows a message) follows the runtime code. It is not checked on
  TST: the test account has no Orbit event now (`probe-dropdown-d2.json`). Check it when the account has a host survey.

