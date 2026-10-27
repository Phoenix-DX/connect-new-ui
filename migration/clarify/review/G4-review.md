# Orchestrator review of wave G4 and the shared units (Fable, 2026-10-27)

## 1. Fact checks

| Flow | Item | Evidence | Result |
|---|---|---|---|
| Legacy_LDMEventsFlow | Row 063: the judge gave `match` for React's `SenderPhone: ''` on an assumption about the record default | `migration/runtime-sources/UBT_Email.model.js:207-211` (fetched 2026-10-27, read-only): `UserContactRequestRec` declares `SenderPhone` as PhoneNumber with default `""` | the assumption is now a fact; the verdict `match` stands |
| _libraries | Rows 035, 161, 236 (`unclear`: record defaults not readable) | `migration/runtime-sources/UBTConnectLibrary.model.js:1831-1847` (ButtonOptionsRec: UBT_ButtonSizeId medium, UBT_ButtonTypeId primary, UBT_FlexBehavior grow); `:1473-1526` (SearchInputRec: IsEnabled true, IsMandatory false, ValidationMessage "Required", MaxLength 50, InitalString "", SearchPrompt "Search", IsForceInvalid false, Debounce_DelayMS -1, BorderRadius softRound, EnableAutocompleteHTML false, FocusOnReady false, IsSyncValueWithInput false); `OutSystemsUI_2_23.model.js:1144-1168` (Carousel_InternalConfigRec: Navigation "", ItemsDesktop/Tablet/Phone 1, AutoPlay true, Loop true, Padding "0", StartingPosition 0) and `:3651-3663` (CarouselOptionalConfigsRec: AutoPlay true, Loop true, Padding "", StartingPosition 0); both files fetched read-only 2026-10-27 | facts sent to the _libraries judge to settle the 3 rows |
| App_CommonBlocks_Filter | F1 major: the option-list search does not remove accents | React `app/src/components/filter/FilterOptionList/FilterOptionList.tsx:43` (`const removeAccents = (text) => text`); TST helper `JSUtils_String_RemoveAccents` in `migration/shell/sources/UBTJavaScriptUtils.controller.js` (judge's citation :3078-3084) | React side confirmed; the TST call site is the judge's citation (not re-read here) |
| Legacy_LDMEventsFlow_V2 | F1 major: guest tap opens the carousel with every guest | TST action `CarouselFilteredEventResults` exists (`Connect2_OrbitMobile_MUI.controller.js:877`); React comment in `app/src/pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.ts:175` says it passes every guest | confirmed |
| Legacy_OrbitAdminFlow | F1 major: React follows DEV (GetMilestoneScanFF branch → route that does not exist) | judge's citations (`OrbitAdminLanding.mvc.js:244-252`, `useNavigateToEventDetail.ts:15-19`) | not re-read here; the reader and the judge agree |
| _libraries | F1 major: subscription upgrade actions not in React | React has subscription dialog code (`app/src/platform/feedback/dialogs/DialogAccessRestrictedAction.tsx`, `subscription.ts`): the judge says the SearchResult_Item and ShareSheet taps do nothing | to re-check in the follow-up pass: which of the two taps reach the existing dialog |

## 2. Cost of the shared units and G4 (reader Sonnet + judge Opus/Fable)

| Unit | Reader tokens / calls | Judge tokens / calls | Rows |
|---|---|---|---|
| _shared a (4 flows) | 124k / 18 | 180k / 45 | 88 |
| _shared b (4 flows) | 301k / 51 | 291k / 71 | 498 |
| _shared c (3 flows) | 174k / 36 | 174k / 43 | 121 |
| _shared d (actions) | 220k / 37 | 250k / 33 (Fable) | 194 |
| _libraries | 336k / 49 | 298k / 52 (Fable) | 245 |
| Legacy_OrbitAdminFlow | 160k / 34 | 244k / 48 | 109 |
| Legacy_AssembleFlow | 201k / 39 | 259k / 43 (Fable) | 159 |
| Legacy_LDMEventsFlow_V2 | 231k / 45 | 281k / 54 (Fable) | 219 |
| Legacy_OrbitQRCodeFlow | 121k / 22 | 171k / 36 | 68 |
| Legacy_LDMEventsFlow | 131k / 23 | 173k / 36 | 94 |
| Legacy_OrbitEventsFlow | 289k + 285k / 51 + 50 (two readers) | see the G5 note when the judge hands back | 420+ |

Waste seen: the two Orbit readers still built their rows through scratch scripts that echo the content (assembly 87k
and 159k chars); the judges of units b and the libraries read 115k–179k chars of evidence and reports ("other"),
which is the size of their input, not waste.
