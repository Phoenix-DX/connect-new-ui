# Orchestrator review of wave G4 and the shared units (Fable, 2026-10-27)

## 1. Fact checks

| Flow | Item | Evidence | Result |
|---|---|---|---|
| Legacy_LDMEventsFlow | Row 063: the judge gave `match` for React's `SenderPhone: ''` on an assumption about the record default | `migration/runtime-sources/UBT_Email.model.js:207-211` (fetched 2026-10-27, read-only): `UserContactRequestRec` declares `SenderPhone` as PhoneNumber with default `""` | the assumption is now a fact; the verdict `match` stands |
| _libraries | Rows 035, 161, 236 (`unclear`: record defaults not readable) | `migration/runtime-sources/UBTConnectLibrary.model.js:1831-1847` (ButtonOptionsRec: UBT_ButtonSizeId medium, UBT_ButtonTypeId primary, UBT_FlexBehavior grow); `:1473-1526` (SearchInputRec: IsEnabled true, IsMandatory false, ValidationMessage "Required", MaxLength 50, InitalString "", SearchPrompt "Search", IsForceInvalid false, Debounce_DelayMS -1, BorderRadius softRound, EnableAutocompleteHTML false, FocusOnReady false, IsSyncValueWithInput false); `OutSystemsUI_2_23.model.js:1144-1168` (Carousel_InternalConfigRec: Navigation "", ItemsDesktop/Tablet/Phone 1, AutoPlay true, Loop true, Padding "0", StartingPosition 0) and `:3651-3663` (CarouselOptionalConfigsRec: AutoPlay true, Loop true, Padding "", StartingPosition 0); both files fetched read-only 2026-10-27 | facts sent to the _libraries judge to settle the 3 rows |
