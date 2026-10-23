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
