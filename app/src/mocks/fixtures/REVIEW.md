# Fixture review (the user checks this before any commit)

Fields left unchanged are listed under `kept`: if any holds personal data, add its name to `anonymize` in the rules file and convert again. Labels that were replaced but are not personal (status names...) go to `keep`.

# Conversion 2026-10-14: session-2026-10-14.har

## Kept as recorded
- `DataActionDataAction_GetLocalityTimezone.in.In_ContactSubjectTitle` ×1
- `DataActionDataAction_GetLocalityTimezone.in.In_ListMenuOptionLabel` ×1
- `DataActionGetCacheInfo.in.CacheKey` ×4
- `DataActionGetCacheInfo.out.CacheControl_Response.CountryList.List[].CountryCode` ×17
- `DataActionGetCacheInfo.out.CacheControl_Response.LocalityList.List[].CountryCode` ×287
- `DataActionGetCacheInfo.out.CacheControl_Response.PolicyInformation_PrivacyPolicy.Policy_ContentType` ×1
- `DataActionGetCacheInfo.out.CacheControl_Response.PolicyInformation_PrivacyPolicy.Policy_Url` ×1
- `DataActionGetCacheInfo.out.CacheControl_Response.PolicyInformation_TermsAndConditions.Policy_ContentType` ×1
- `DataActionGetCacheInfo.out.CacheControl_Response.PolicyInformation_TermsAndConditions.Policy_Url` ×1
- `DataActionGetCountriesStatistics.out.Out_CountriesStatistics.List[].CountryCode` ×34
- `DataActionGetCountriesStatistics.out.Out_CountriesStatistics.List[].Statistics.Statistics.List[].Value` ×85
- `DataActionGetCountriesStatistics.out.Out_CountriesStatistics.List[].Statistics.Title` ×34
- `DataActionGetCountriesStatistics.out.Out_CountriesStatistics.List[].UI_TypedStatisticsTexts.Brothers` ×17
- `DataActionGetCountriesStatistics.out.Out_CountriesStatistics.List[].UI_TypedStatisticsTexts.Households` ×17
- `DataActionGetCountriesStatistics.out.Out_CountriesStatistics.List[].UI_TypedStatisticsTexts.Localities` ×17
- `DataActionGetCountriesStatistics.out.Out_CountriesStatistics.List[].UI_TypedStatisticsTexts.Members` ×17
- `DataActionGetCountriesStatistics.out.Out_CountriesStatistics.List[].UI_TypedStatisticsTexts.Sisters` ×17
- `DataActionGetCountryInfo.in.CurrentCountryCode` ×1
- `DataActionGetDateRanges.in.Filter_UpdateTypeOptions.List[].Identifier` ×3
- `DataActionGetDateRanges.in.Filter_UpdateTypeOptions.List[].Text` ×4
- `DataActionGetLocalityStatistics.in.CountryCode` ×2
- `DataActionGetLocalityStatistics.in.MarkersList.EmptyListItem.Popup.MaxWidth` ×2
- `DataActionGetLocalityStatistics.in.MarkersList.EmptyListItem.Popup.MinWidth` ×2
- `DataActionGetLocalityStatistics.in.MarkersList.EmptyListItem.Popup.Pane` ×2
- `DataActionGetLocalityStatistics.in.MarkersList.EmptyListItem.Tooltip.Options.Direction` ×2
- `DataActionGetLocalityStatistics.in.MarkersList.EmptyListItem.Tooltip.Options.Pane` ×2
- `DataActionGetLocalityStatistics.in.OriginalCountryCode` ×1
- `DataActionGetLocalityStatistics.out.Out_LocalitiesStatistics.List[].Statistics.Statistics.List[].Value` ×15
- `DataActionGetLocalityStatistics.out.Out_LocalitiesStatistics.List[].Statistics.Title` ×6
- `DataActionGetLocalityStatistics.out.Out_LocalitiesStatistics.List[].UI_TypedStatisticsTexts.Brothers` ×3
- `DataActionGetLocalityStatistics.out.Out_LocalitiesStatistics.List[].UI_TypedStatisticsTexts.Households` ×3
- `DataActionGetLocalityStatistics.out.Out_LocalitiesStatistics.List[].UI_TypedStatisticsTexts.Members` ×3
- `DataActionGetLocalityStatistics.out.Out_LocalitiesStatistics.List[].UI_TypedStatisticsTexts.Sisters` ×3
- `DataActionGetLocalityStatistics.out.Out_LocalitiesStatistics.List[].UI_TypedStatisticsTexts.SupperMeetings` ×3
- `DataActionGetOneSchoolGlobalDetails.in.LookupSections.Actions.Plural` ×1
- `DataActionGetOneSchoolGlobalDetails.in.LookupSections.Actions.Singular` ×1
- `DataActionGetOneSchoolGlobalDetails.in.LookupSections.Households.Plural` ×1
- `DataActionGetOneSchoolGlobalDetails.in.LookupSections.Households.Singular` ×1
- `DataActionGetOneSchoolGlobalDetails.in.LookupSections.OneSchoolStatistitics.Icon` ×1
- `DataActionGetOneSchoolGlobalDetails.in.LookupSections.OneSchoolStatistitics.Plural` ×1
- `DataActionGetOneSchoolGlobalDetails.in.LookupSections.OneSchoolStatistitics.Singular` ×1
- `DataActionGetOneSchoolGlobalDetails.in.Type_OneschoolGlobal_SubsectionId.AboutOurCampus` ×1
- `DataActionGetOneSchoolGlobalDetails.in.Type_OneschoolGlobal_SubsectionId.UpcomingEvents` ×1
- `DataActionGetOneSchoolGlobalDetails.out.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.AreasServed` ×1
- `DataActionGetOneSchoolGlobalDetails.out.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.BusinesLinks.List[].Link` ×1
- `DataActionGetOneSchoolGlobalDetails.out.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.BusinesLinks.List[].Text` ×1
- `DataActionGetServices.in.MainElementClass` ×1
- `DataActionGetServices.out.AvailableServices.List[].Label` ×3
- `DataActionGetServices.out.CurrentServices.List[].Connect_Services.Label` ×6
- `DataActionGetServices.out.ExternalLinks_ElGusto` ×1
- `DataActionGetServices.out.ExterrnalPackages_CommunityTradelink` ×1
- `DataActionGetServices.out.ExterrnalPackages_HR100` ×1
- `DataActionGetServices.out.ExterrnalPackages_Trove` ×1
- `DataActionGetServices.out.List.List[].Label` ×6
- `DataActionGet_LocalityDetails.in.LocalityLabel` ×1
- `DataActionGet_LocalityDetails.in.PreloadedLocalityLabel` ×1
- `DataActionGet_LocalityDetails.in.TagsList.List[].Identifier` ×4
- `DataActionGet_LocalityDetails.in.TagsList.List[].Text` ×4
- `DataActionGet_LocalityDetails.in.TagsList_SelectedTag` ×1
- `DataActionGet_LocalityDetails.out.LocalityDetails.UI_LocalityDetails.CountryCode` ×1
- `DataActionGet_LocalityDetails.out.LocalityDetails.UI_LocalityTimezone.TimezoneOffset` ×1
- `ScreenDataSetGetShareObjectTypeById.out.List.List[].Type_ShareObject.Label` ×1

## Fake text (same length)
- `ActionAppManager_AfterInitialize.in.EspaceName` ×1
- `DataActionGetDateRanges.in.CurrentBreakpoint.SectionName` ×2
- `DataActionGetOneSchoolGlobalDetails.out.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.Address` ×1
- `DataActionGetSubdivision.out.Subdivision.Subdivision_Card.Subdivision_Card_Content.Address` ×1

## Identifiers remapped
- `DataActionDataAction_GetLocalityTimezone.in.In_ContactSubjectId` ×1
- `DataActionGetCacheInfo.in.CacheTypeId` ×4
- `DataActionGetCacheInfo.out.CacheControl_Response.LocalityList.List[].LocalityId` ×287
- `DataActionGetCountryInfo.in.MainContainerId` ×1
- `DataActionGetDateRanges.out.DateRangesList.List[].Id` ×8
- `DataActionGetLocalityStatistics.out.Out_LocalitiesStatistics.List[].LocalityId` ×6
- `DataActionGetLocalityStatistics.out.Out_LocalitiesStatistics.List[].MainHallSubdivisionId` ×3
- `DataActionGetOneSchoolGlobalDetails.in.In_OneSchoolGlobalId` ×1
- `DataActionGetOneSchoolGlobalDetails.in.Selected_OneschoolGlobal_SubsectionId` ×1
- `DataActionGetOneSchoolGlobalDetails.out.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.CommunityBusinessId` ×1
- `DataActionGetServices.out.AvailableServices.List[].IconId` ×3
- `DataActionGetServices.out.AvailableServices.List[].Id` ×3
- `DataActionGetServices.out.CurrentServices.List[].Connect_Service_User.ConnectServiceId` ×6
- `DataActionGetServices.out.CurrentServices.List[].Connect_Service_User.Id` ×6
- `DataActionGetServices.out.CurrentServices.List[].Connect_Service_User.UserId` ×6
- `DataActionGetServices.out.CurrentServices.List[].Connect_Services.IconId` ×6
- `DataActionGetServices.out.CurrentServices.List[].Connect_Services.Id` ×6
- `DataActionGetServices.out.List.List[].IconId` ×6
- `DataActionGetServices.out.List.List[].Id` ×6
- `DataActionGetSubdivision.in.In_SubdivsionId` ×1
- `DataActionGetSubdivision.out.Subdivision.Subdivision_Card.SubdivisionId` ×1
- `DataActionGet_LocalityDetails.in.LocalityId` ×1

## Phone / long numbers
- `DataActionDataAction_GetLocalityTimezone.in.CountryPhone` ×1
- `DataActionFetchCount.out.UI_MembersStatistics.TotalNumberOfMembers` ×1

## Images removed
- `DataActionGetOneSchoolGlobalDetails.out.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.SignedURL` ×1

## Dropped (rules `dropInputs`: screen state not needed to match a call; `dropOutputs`: person data a fictional mock fills at runtime)
- `ActionAppManager_AfterInitialize.in.AppManager_MobileContext` ×34
- `ActionGetNumberUnreadMessages.in.DeviceId` ×34
- `DataActionDataAction_GetLocalityTimezone.in.ContactUsForm` ×1
- `DataActionDataAction_GetLocalityTimezone.in.Description` ×1
- `DataActionDataAction_GetLocalityTimezone.in.LocalCacheControl_UserInformation` ×1
- `DataActionDataAction_GetLocalityTimezone.in.MessagePrompt` ×1
- `DataActionGetCacheInfo.out.CacheControl_Response.Directory_UserCurrent` ×7
- `DataActionGetCountriesStatistics.in.LocalCacheControl_UserInformation` ×1
- `DataActionGetCountryInfo.in.AccountForm` ×1
- `DataActionGetCountryInfo.in.AccountFormOriginal` ×1
- `DataActionGetCountryInfo.in.AccountForm_ViewPreview` ×1
- `DataActionGetCountryInfo.in.LocalCacheControl_UserInformation` ×1
- `DataActionGet_LocalityDetails.in.Logged_User` ×1

# Conversion 2026-10-15: services-2026-10-15.har

## Kept as recorded
- `DataActionGetServices.in.MainElementClass` ×1
- `DataActionGetServices.out.ExternalLinks_ElGusto` ×1
- `DataActionGetServices.out.ExterrnalPackages_CommunityTradelink` ×1
- `DataActionGetServices.out.ExterrnalPackages_HR100` ×1
- `DataActionGetServices.out.ExterrnalPackages_Trove` ×1
- `DataActionGetServices.out.List.List[].Label` ×6

# Conversion 2026-10-15: services-screen-2026-10-15.har

## Kept as recorded
- `DataActionGetServices.in.MainElementClass` ×1
- `DataActionGetServices.out.AvailableServices.List[].Label` ×3
- `DataActionGetServices.out.CurrentServices.List[].Connect_Services.Label` ×6
- `DataActionGetServices.out.ExternalLinks_ElGusto` ×1
- `DataActionGetServices.out.ExterrnalPackages_CommunityTradelink` ×1
- `DataActionGetServices.out.ExterrnalPackages_HR100` ×1
- `DataActionGetServices.out.ExterrnalPackages_Trove` ×1
- `DataActionGetServices.out.List.List[].Label` ×6

## Identifiers remapped
- `DataActionGetServices.out.CurrentServices.List[].Connect_Service_User.ConnectServiceId` ×6
- `DataActionGetServices.out.CurrentServices.List[].Connect_Service_User.UserId` ×6

# Conversion 2026-10-15: services-screen-2026-10-15b.har

## Kept as recorded
- `DataActionGetServices.in.MainElementClass` ×1
- `DataActionGetServices.out.AvailableServices.List[].Label` ×3
- `DataActionGetServices.out.CurrentServices.List[].Connect_Services.Label` ×6
- `DataActionGetServices.out.ExternalLinks_ElGusto` ×1
- `DataActionGetServices.out.ExterrnalPackages_CommunityTradelink` ×1
- `DataActionGetServices.out.ExterrnalPackages_HR100` ×1
- `DataActionGetServices.out.ExterrnalPackages_Trove` ×1
- `DataActionGetServices.out.List.List[].Label` ×6

## Identifiers remapped
- `DataActionGetServices.out.CurrentServices.List[].Connect_Service_User.UserId` ×6

# Conversion 2026-10-15: dateranges-2026-10-15.har

## Kept as recorded
- `DataActionGetDateRanges.in.Filter_UpdateTypeOptions.List[].Identifier` ×3
- `DataActionGetDateRanges.in.Filter_UpdateTypeOptions.List[].Text` ×4

## Fake text (same length)
- `DataActionGetDateRanges.in.CurrentBreakpoint.SectionName` ×2
