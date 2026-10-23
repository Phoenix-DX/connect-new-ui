# API contract

`openapi.yaml` is the contract every server call follows; `schema.d.ts` is generated from it (`npm run gen:api`, never edited). Screens call `callAction(module, action, inputs)` from `src/api/client/callAction.ts` through their own `api.ts` adapter; an action missing from the contract does not compile.

`client/apiError.ts`: `ApiError` has `kind` (`timeout`, `network`, `server`, `security`, `viewChanged`) and `cause` (the OutSystems exception). `legacy/os/os-exceptions.ts` maps in both directions. `callAction` still raises the OutSystems exceptions.

`household/` is the first domain folder: `types.ts`, `mapper.ts`, `repository.ts`, `keys.ts`, `hooks.ts` and the barrel `index.ts`. The hooks set `staleTime: 0` and `gcTime: 0`.

`member/` has the same files. It holds GetAvailableMembers (ShareSheet), GetMemberByMemberId (OrbitAdminEventDetail) and Member_EditDetails_Service (Profile). The three old `api.ts` files re-export it under their old names. `useAvailableMembersQuery` sets `staleTime: 0` and `gcTime: 0`. `useMemberQuery` and `useEditMemberDetailsMutation` have no caller yet: the flows call the repository functions.

`country/` has the same files. It holds 7 calls: DataActionGetCountriesStatistics (BrowseCountries and CountryList, two shapes `CountryCard` and `CountrySummary`), DataActionGetLocalityStatistics (CountryDetails), DataActionGetCountryInfo (Profile), GetUserLocalitiesForCountryCodeWithGPS and GetCountriesBySubscription (Connect2_LegacyShared), and DataActionGetCacheInfo (CacheControl_AllCountries). The old `api.ts` and `types.ts` files of the four screens re-export it under their old names. `Connect2_LegacyShared/lib/actions.ts` and `CacheControl_AllCountries` call the repository functions.

Two mappers keep only the fields that the UI reads: GetUserLocalitiesForCountryCodeWithGPS keeps `Id` and `Name`; DataActionGetCacheInfo keeps `CountryCode` and `CountryName`. `useCountryLocalityStatisticsQuery` and `useCountryInfoQuery` keep the options of the old queries; `useAllCountriesQuery` has no caller yet (P5-4). Query keys are in `countryKeys`.

`locality/` has the same files. It holds 11 calls. DataActionGetSubdivisionName is from AssembleEvents, DataActionGetLocalityStatistics from BrowseDirectory and DataActionGetEventLocalitiesForFilter from LDM_MyEvents_V2. Locality_Details has four (locality details, subdivision list, interchanges, OneSchoolGlobal list). The others are GetLocalityInformation and GetBulkSubdivisions_V2 (Connect2_LegacyShared), DataActionGetSubdivision (SupperMeeting_DetailsBlock) and DataActionGetCacheInfo (CacheControl_AllLocalities).

The seven old caller files re-export it under their old names. The household calls of Locality_Details stay for the household domain.

`GetLocalityInformation` keeps the full contract record (`LocalityInformation`), because the memory cache and the client action that bookmarks a locality clone it. The mappers of subdivision details, all localities and bulk subdivisions keep only the fields that the UI reads. The five hooks (`useLocalityCardListQuery`, `useLocalityDetailsQuery`, `useInterchangesQuery`, `useSubdivisionDetailsQuery`, `useAllLocalitiesQuery`) have no caller yet; they set `staleTime: 0`, `gcTime: 0` and `retry: false`.

`update/` has the same files. It holds 9 actions.

- DataActionFetchUpdates, ServiceAPIAction_UI_UpdateItem_MarkAsRead and MarkAsUnread (HomeFeed)
- DataActionFetchUpdates, DataActionGetDateRanges and the service actions MarkAsRead, MarkAsUnread and MarkAllAsRead (Updates_SingleList)
- ActionUpdateItem_MarkAsRead (HouseholdCarousel)
- ActionRequestPhotoUpdate (Menu)
- ServiceAPIGet_UI_UpdateItems_UnreadCount_All (`shared/UBTConnect/lib/actions.ts`).

One `UpdateItem` type has two mappers: `toFeedUpdateItem` keeps the null date "1900-01-01" (HomeFeed) and `toUpdateItem` gives "" for it (Updates_SingleList). The old `api.ts` and `types.ts` files of HomeFeed, Updates_SingleList, HouseholdCarousel and Menu re-export the domain under their old names.

`directory_Updates_RefreshBottomBarCount` in `shared/UBTConnect/lib/actions.ts` gets the unread count from `fetchUnreadUpdateItemsCount`.

`useFeedUpdatesQuery` has the key `updateKeys.feed()` and keeps `retry: false`. The other calls stay imperative calls in their flows.

`requestPhotoUpdate` is in `update/` only because of its name. A later step can move it to `member/`.

`app/` has the same files. It holds the 6 app-start calls: AppManager_SynchAppContext and AppManager_AfterInitialize (UBT_AppManager), Sync_Info_GetMain, FetchData_CacheableMapEntities and FetchData_CacheableHouseholds (UBTConnect), and DataActionGetCacheInfo of CacheControl_Policies. `platform/bootstrap` (`startup.ts`, `appStartSteps.ts`) and the `CacheControl_Policies` block call the repository functions. `ClientConfig` is defined in `app/types.ts`.

The mappers drop only fields that no code in `src` reads. The local-entity records, the map objects, the household marker parts and the policy records stay whole. `usePoliciesQuery` has no caller yet (P5-4). GetUserInformation (P5-4) and GetNumberUnreadMessages (P5-3) are not in `app/`.

`event/` has the same files. It holds 25 data actions and one mutation (GetScanEventQRCode) of 16 screens: AssembleDetail, AssembleEvents, EventBooklet, EventDetail, GuestArrangements, HelpersDetail, HostSurvey, LDM_EventDetail_V2, LDM_MyEvents_V2, MilestoneDetail, OrbitAdminEventDetail, OrbitAdminLanding, OrbitLanding, QRCodeGenerate, TransportDetail and ViewDocuments. The old `api.ts` and `types.ts` files of these screens re-export it under their old names. The three server-action reads (GetMilestoneScanFF, GetBookletGuestsMaxRows, GetBookletHelpersMaxRows) have no hook.

The shared record types (for example `EventInfo`, `Milestone_Screen`, `MemberInformation`, `AssembleEventSummary`) are defined in `event/types.ts`. The `structures.ts` files of Connect2_Assemble_MUI and Connect2_OrbitMobile_MUI re-export them. The 8 local copies of the null-date helper are one helper. The 25 hooks have no caller yet; the flows call the repository functions. They set `staleTime: 0`, `gcTime: 0` and no retry by default.
