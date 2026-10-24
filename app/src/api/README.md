# API contract

`openapi.yaml` is the contract every server call follows; `schema.d.ts` is generated from it (`npm run gen:api`, never edited). Screens call `callAction(module, action, inputs)` from `src/api/client/callAction.ts` through their own `api.ts` adapter; an action missing from the contract does not compile.

`client/apiError.ts`: `ApiError` has `kind` (`timeout`, `network`, `server`, `security`, `viewChanged`) and `cause` (the OutSystems exception). `legacy/os/os-exceptions.ts` maps in both directions. `callAction` still raises the OutSystems exceptions.

`household/` is the first domain folder: `types.ts`, `mapper.ts`, `repository.ts`, `keys.ts`, `hooks.ts` and the barrel `index.ts`. The hooks set `staleTime: 0` and `gcTime: 0`.

Other code imports a domain through its barrel `index.ts`. One exception (decision W18): the app-start path uses deep imports to keep the entry chunk small. `platform/bootstrap/startup.ts` imports `@/api/message/unreadMessages` (the app-start call; `repository.ts` and `mapper.ts` re-export it) and `shared/Connect2_LegacyShared/lib/actions.ts` imports `@/api/bookmark/keys`.

`member/` has the same files. It holds GetAvailableMembers (ShareSheet), GetMemberByMemberId (OrbitAdminEventDetail), Member_EditDetails_Service (Profile) and ActionRequestPhotoUpdate (Menu). The old `api.ts` files of ShareSheet and Profile re-export it under their old names, and `useAdminEventDetail` calls `fetchMember` directly. The Menu page calls `requestPhotoUpdate` from `@/api/member`: the domain comes from the data that the call owns, the photo of the signed-in member (decision W9). `useAvailableMembersQuery` sets `staleTime: 0` and `gcTime: 0`. `useMemberQuery` and `useEditMemberDetailsMutation` have no caller yet: the flows call the repository functions.

`country/` has the same files. It holds 7 calls: DataActionGetCountriesStatistics (BrowseCountries and CountryList, two shapes `CountryCard` and `CountrySummary`), DataActionGetLocalityStatistics (CountryDetails), DataActionGetCountryInfo (Profile), GetUserLocalitiesForCountryCodeWithGPS and GetCountriesBySubscription (Connect2_LegacyShared), and DataActionGetCacheInfo (CacheControl_AllCountries). The pages call `api/country` directly. `Connect2_LegacyShared/lib/actions.ts` and `CacheControl_AllCountries` call the repository functions.

Two mappers keep only the fields that the UI reads: GetUserLocalitiesForCountryCodeWithGPS keeps `Id` and `Name`; DataActionGetCacheInfo keeps `CountryCode` and `CountryName`. `useCountryLocalityStatisticsQuery` and `useCountryInfoQuery` keep the options of the old queries; `useAllCountriesQuery` has no caller yet. Query keys are in `countryKeys`.

`locality/` has the same files. It holds 13 calls. DataActionGetSubdivisionName is from AssembleEvents, DataActionGetLocalityStatistics from BrowseDirectory and DataActionGetEventLocalitiesForFilter from LDM_MyEvents_V2. Locality_Details has four (locality details, subdivision list, interchanges, OneSchoolGlobal list). OneSchoolGlobalDetails has one (DataActionGetOneSchoolGlobalDetails). The others are GetLocalityInformation and GetBulkSubdivisions_V2 (Connect2_LegacyShared), DataActionGetSubdivision (SupperMeeting_DetailsBlock), DataActionGetSubdivisionHouseholds (SupperMeeting_HouseholdList, `fetchSubdivisionHouseholds`) and DataActionGetCacheInfo (CacheControl_AllLocalities).

Six old caller files re-export it under their old names. The `api.ts` of Locality_Details is deleted: its four hooks call `fetchLocalityDetails`, `fetchSubdivisionCards`, `fetchInterchanges` and `fetchOneSchoolCards` directly.

`GetLocalityInformation` keeps the full contract record (`LocalityInformation`), because the memory cache and the client action that bookmarks a locality clone it. The mappers of subdivision details, all localities and bulk subdivisions keep only the fields that the UI reads. The hook `useOneSchoolGlobalDetailsQuery` is called by `useOneSchoolGlobalDetails`; its key holds the school id only, and it sets `staleTime: Infinity`, `gcTime: 0` and `retry: false`. The five hooks (`useLocalityCardListQuery`, `useLocalityDetailsQuery`, `useInterchangesQuery`, `useSubdivisionDetailsQuery`, `useAllLocalitiesQuery`) have no caller yet; they set `staleTime: 0`, `gcTime: 0` and `retry: false`.

`update/` has the same files. It holds 8 actions.

- DataActionFetchUpdates, ServiceAPIAction_UI_UpdateItem_MarkAsRead and MarkAsUnread (HomeFeed; imported directly by `useFeedUpdates`)
- DataActionFetchUpdates, DataActionGetDateRanges and the service actions MarkAsRead, MarkAsUnread and MarkAllAsRead (Updates_SingleList)
- ActionUpdateItem_MarkAsRead (HouseholdCarousel)
- ServiceAPIGet_UI_UpdateItems_UnreadCount_All (`shared/UBTConnect/lib/actions.ts`).

One `UpdateItem` type has two mappers: `toFeedUpdateItem` keeps the null date "1900-01-01" (HomeFeed) and `toUpdateItem` gives "" for it (Updates_SingleList). The old `api.ts` and `types.ts` files of HouseholdCarousel re-export the domain under their old names.

`directory_Updates_RefreshBottomBarCount` in `shared/UBTConnect/lib/actions.ts` gets the unread count from `fetchUnreadUpdateItemsCount`.

`useFeedUpdatesQuery` has the key `updateKeys.feed()` and keeps `retry: false`. The other calls stay imperative calls in their flows.

`app/` has the same files. It holds the 6 app-start calls: AppManager_SynchAppContext and AppManager_AfterInitialize (UBT_AppManager), Sync_Info_GetMain, FetchData_CacheableMapEntities and FetchData_CacheableHouseholds (UBTConnect), and DataActionGetCacheInfo of CacheControl_Policies. `platform/bootstrap` (`startup.ts`, `appStartSteps.ts`) and the `CacheControl_Policies` block call the repository functions. `ClientConfig` is defined in `app/types.ts`.

The mappers drop only fields that no code in `src` reads. The local-entity records, the map objects, the household marker parts and the policy records stay whole. `usePoliciesQuery` has no caller yet. The user information is a memory-cache entry, `memberCache` in `member/keys.ts`. GetNumberUnreadMessages is in `message/`.

`event/` has the same files. It holds 25 data actions and one mutation (GetScanEventQRCode) of 16 screens: AssembleDetail, AssembleEvents, EventBooklet, EventDetail, GuestArrangements, HelpersDetail, HostSurvey, LDM_EventDetail_V2, LDM_MyEvents_V2, MilestoneDetail, OrbitAdminEventDetail, OrbitAdminLanding, OrbitLanding, QRCodeGenerate, TransportDetail and ViewDocuments. The old `api.ts` and `types.ts` files of ViewDocuments re-export it under their old names. The other 15 screens have no `api.ts` or `types.ts`: their hooks call `api/event`; the hook `useGenerateQrCode` (QRCodeGenerate) calls `fetchEventQRCode`. The three server-action reads (GetMilestoneScanFF, GetBookletGuestsMaxRows, GetBookletHelpersMaxRows) have no hook.

The shared record types (for example `EventInfo`, `Milestone_Screen`, `MemberInformation`, `AssembleEventSummary`) are defined in `event/types.ts`. The `structures.ts` files of Connect2_Assemble_MUI and Connect2_OrbitMobile_MUI re-export them. The 8 local copies of the null-date helper are one helper. The 25 hooks have no caller yet; the flows call the repository functions. They set `staleTime: 0`, `gcTime: 0` and no retry by default.

`bookmark/` has the same files. It holds 9 calls.

- DataActionGetAllBookmarksByGroup (BookmarksByGroup) and DataActionGetGroupSummaries (MyBookmarks)
- GetBookmarkById and New_GetBookmarkById (one function: the client action picks the second when the bookmark has a note)
- DeleteBookmarkByBookmarkId and New_UpdateBookmarkNote (Connect2_MyBookmarks_MUI)
- AddBookmark and DeleteBookmarkByBookmarkId (Connect2_Assemble_MUI)
- ServiceAPIAddBookmark2 and ServiceAPIDeleteBookmarkByBookmarkId2 (UBTConnect).

The hook of BookmarksByGroup (`pages/BookmarksByGroup/hooks/useBookmarkGroup.ts`) calls `fetchBookmarkGroup`, `fetchBookmarkById`, `deleteBookmark` and `updateBookmarkNote` directly; its `api.ts` is deleted. The hook of MyBookmarks (`pages/MyBookmarks/hooks/useMyBookmarks.ts`) calls `fetchBookmarkGroupSummaries` and `fetchBookmarkById` directly; its `api.ts` and `types.ts` are deleted. `shared/Connect2_Assemble_MUI/lib/actions.ts` and `shared/UBTConnect/lib/actions.ts` call the repository functions.

The `Bookmark` type has `dateCreatedUtc`, the sort key of the `MyBookmarks` memory cache. The barrel exports the mapper `toBookmark` (`pages/BookmarksByGroup/hooks/bookmarkGroupActions.ts` imports it for `fromCacheRecord`). `AssembleBookmarkAdded`, `C2BookmarkAdded` and `BookmarkDeleted` keep the OutSystems names. The two hooks (`useBookmarkGroupQuery`, `useBookmarkGroupSummariesQuery`) have no caller yet; they set `staleTime: 0`, `gcTime: 0` and `retry: false`.

`note/` has the same files. It holds 6 calls.

- DataActionGetNotes and ActionGet_NotePills_ByNoteCategoryIds (Notes)
- DataActionFetchNotes (EntityDetailsActionsContainer)
- ServiceAPIUpdateNote and ServiceAPIDeleteNoteByNoteId (NoteListActionsContainer)
- ServiceAPIAddNote (NotesSheet).

The old `api.ts` files of the three other owners re-export it under their old names. The hook of Notes (`pages/Notes/hooks/useNotes.ts`) calls `fetchNoteCards` and `fetchNotePills` directly; `pages/Notes/api.ts` and `types.ts` are deleted (the wire type `NoteCardItemWire` is in `pages/Notes/mocks.ts`). The client reads of the local notes (`get_Note_DynamicFilter_YearOptions`, `getLocalNotesCategoryIds_ByUserId`) are in `platform/storage/localEntities`, and the hook calls them, because `api/` does not import `platform/`.

The AddNote mapper drops `ItemId` and `NoteCategoryId` of the answer, because no code reads them. The two hooks (`useNoteCardsQuery`, `useEntityNotesQuery`) have no caller yet; they set `staleTime: 0`, `gcTime: 0` and `retry: false`.

`message/` has the same files. It holds 19 calls of 11 screens: ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost, ContactUsDetails, EmailContact, EmailTarget, LDM_Email_V2, MessageDetail and MessageList. It also holds DataActionFetchContactDetails (Directory_EntityDetailsActions), GetMemberContactByCacheKey and GetNumberUnreadMessages (`platform/bootstrap/startup.ts`).

The old `api.ts` and `types.ts` files of these screens re-export it under their old names, except LDM_Email_V2: its hook `useLdmEventEmail` calls `fetchEventEmailCoordinator` and `sendEventContactEmail` directly. `containers/EntityDetailsActions/api.ts` re-exports `fetchEntityContactDetails` as `fetchContactDetails`. `shared/Connect2_LegacyShared/lib` uses the domain too.

The domain has one e-mail form type, `ContactByEmailForm`, and one mapper, `toOrbitContactEmailInputs`, for three screens that had their own copies. `sendContactEmail` returns IsSuccess. `fetchEntityContactDetails` does not return LocalityId, because no code reads it. Wrapper_NotificationOpened and Wrapper_MarkAllAsReadNotifications are in `notification/`.

The domain has 8 query hooks and 9 mutation hooks with no caller yet. They set `staleTime: 0`, `gcTime: 0` and no retry by default. GetNumberUnreadMessages and GetMemberContactByCacheKey are server-action reads and have no hook.

`notification/` has the same files. It holds 4 calls: DataActionFetchNotifications and DataActionGetDateRanges (Notifications), Wrapper_NotificationOpened (MessageDetail) and Wrapper_MarkAllAsReadNotifications (MessageList).

The old `api.ts` files of these three owners re-export it under their old names. `pages/MessageList/hooks/useMessageList.ts` keeps a small adapter, `markAllAsReadFilter`, that maps the four block variables to the camelCase inputs of `markAllNotificationsAsRead`. `api/notification` does not import `api/message`. `screens/Notifications/types.ts` keeps `MessageListItemWire` for the mocks.

The domain has 2 query hooks and 2 mutation hooks with no caller yet.

`policy/` has the same files. It holds 2 calls of AcceptPendingPolicies: DataActionGetPendingPolicies and ActionAcceptPolicies. The domain is chosen by the data that it owns (decision W8): the acceptance records of the application policies. The route's `api.ts` and `types.ts` are deleted; the page uses the domain directly.

`usePendingPoliciesQuery` keeps the options of the old block query: `keepPreviousData`, `retry: false` and the library default cache times. It does not set `staleTime: 0` and `gcTime: 0`, because that changes what the page shows on a second visit. The key is `policyKeys.pending(inputs)`; `IsAllSelected` is sent but is not in the key.

`acceptPolicies` has no hook: the page flow calls the repository function. The policy documents (`DataActionGetCacheInfo` of CacheControl_Policies) stay in `app/`, because TermsAndPoliciesMenu, PINChange and the lock dialog also read them. A later step can move them to `policy/`.

`feed/` has the same files, without a mapper. It holds one call: DataActionGetFeedConfig of Embedded_FeedCMS. `useFeedConfigQuery` (inputs FeedItemId and B2CTenant) is called by `useEmbeddedFeed` in `platform/session`, which gives the answer to the `FeedCms` component as `config`. The block reads the wire record as it is.

`entertaining/` has the same files. It holds 2 calls of the module UBTConnect_EmbedMyEntertaining: DataActionGetEntertainingConfig (`fetchEntertainingConfig`) and ActionAppManager_Get_UserIdToken (`fetchUserIdToken`). The domain follows the data that it owns (decision W8). The answer is the configuration of the Connect2Entertaining calendar SDK, like `feed/` for the feed SDK.

`useEntertainingConfigQuery` is called by `useEntertainingCalendar` in `pages/MyEntertaining`. It keeps `staleTime: Infinity`, `gcTime: 0` and `retry: false`, and its key `entertainingKeys.config()` has no inputs, as the block fetched once. `fetchUserIdToken` has no hook: the 10-minute refresh timer of the calendar calls it.

`service/` has the same files. It holds 3 calls: DataActionGetServices of Services (`fetchUserServices`), Service_ConnectServices_ChangeOrder_Bulk of Services (`changeServicesOrder`) and DataActionGetServices of FeedBlock_Services in HomeFeed (`fetchFeedServices`). The domain is chosen by the data that it owns (decision W8): no other domain owns Connect_Services_CS.

The route's `api.ts` and `types.ts` are deleted. `useUserServicesQuery` keeps the old options (`gcTime: 0`, `staleTime: Infinity`, `retry: false`); its key is `serviceKeys.user()`. `changeServicesOrder` has no hook: the page flow calls it. `useFeedServicesQuery` has the key `serviceKeys.feed()` (`['service', 'feed']`), separate from `serviceKeys.user()`, and keeps `retry: false`; `useFeedServices` in `pages/HomeFeed/hooks` calls it.

`search/` has the same files. It holds 2 calls of Search: DataActionFetchSearchResults (`fetchSearchResults`) and ScreenDataSetGet_SearchBirthdayOptions (`fetchBirthdayOptions`). The domain is chosen by the data that it owns (decision W8): the directory search results and their options.

The route's `api.ts` and `types.ts` are deleted; `useSearch` in `pages/Search/hooks` calls the domain. The query key is `['Search', 'ScreenDataSetGet_SearchBirthdayOptions']`, as before.

`member/` also holds DataActionFetchCount (FeedBlock_CommunityPopulation). `useCommunityPopulationQuery` is called by HomeFeed and CountryList.

The queries of `feed/` and the count query of `member/` set `staleTime: 0`, `gcTime: 0`, `retry: false` and `refetchOnReconnect: false`, as the old effects did. They set `meta.errorLog` (a message). `logQueryError` in `client/queryClient.ts` logs it with `log.warn` when the fetch fails, so that `api/` does not import `platform/log`.

`household/` also holds the two Photobook calls: DataActionGetLocalityHouseholdIds (`fetchLocalityHouseholdIds`, called by `usePhotobook`) and DataActionGetHouseholdCaption (`fetchHouseholdCaption`, called by `useHouseholdCaption`). The old `api.ts` and `types.ts` of Photobook are deleted. The request shapes are `LocalityHouseholdIdsCallInputs` and `HouseholdCaptionCallInputs`; `SelectedHousehold`, `PhotobookHousehold` and `HouseholdCaption` are in `household/types.ts`. The flows call the repository functions.

`household/` also holds the two Household_Relations calls: DataActionGet_MemberDetails (`fetchMemberRelations`) and DataActionGet_ParentHouseholdDetails (`fetchSiblingRelations`), called by `useHouseholdRelations`. The old `api.ts` and `types.ts` of Household_Relations are deleted. The types are `MemberRelationsCallInputs`, `MemberRelations` and `SiblingRelations`. The mapper keeps the 13 member fields that the relations UI reads; `HouseholdMember` gets the optional field `FormattedLocality`.

`household/` also holds the two Locality_Details calls: DataActionGetLocalityHouseholds (`fetchLocalityHouseholds`, called by `useLocalityHouseholdList`) and DataActionGetMembers (`fetchHouseholdCardMembers`, called by `useHouseholdCardMembers`). The old `api.ts` and `types.ts` of Locality_Details are deleted. The flows call the repository functions.

`household/` also holds the OrbitLanding call DataActionGet_HouseholdMembers (`fetchOrbitHouseholdMembers`, called by `useOrbitLanding`). The old `api.ts` and `types.ts` of OrbitLanding are deleted. The types are `OrbitHouseholdMembersCallInputs` and `OrbitHouseholdMember`. The flow calls the repository function.

`event/` also holds the two OrbitAdminLanding calls: Get_AdminEventsList (`fetchAdminEvents`, called by `useAdminLanding`) and ActionGetMilestoneScanFF (`fetchMilestoneScanFF`, called by `useNavigateToEventDetail`). The old `api.ts` and `types.ts` of OrbitAdminLanding are deleted. The hooks call the repository functions.

`image/` has `keys.ts` (the memory-cache entries `imageCache`) and, since P6-G5-B-OrbitAdminEventDetail, `repository.ts` and the barrel `index.ts`. It holds one call: GetCacheableSignedImageURL of Connect2_LegacyShared (`ActionGetSignedImagesInBulk`, `fetchLegacySignedImageURL`). The domain is chosen by the data that it owns (decision W8): the signed image URLs. The hooks `useAdminEventDetail` (OrbitAdminEventDetail) and `useAccommodationHost` (MilestoneDetail), `useHelperDetails` (HelpersDetail), `useGenerateQrCode` (QRCodeGenerate) and the page `GuestArrangementsPage` (GuestArrangements) call it.

Later G5 and G6 pages will also call it. The repository has its own `textToLongInteger`, because `api/` does not import `shared/`. It has no mapper and no hook.

`event/` also holds the four EventDetail calls: Get_EventDetails, Get_HostSurveyStatus, Get_HasDocuments and Get_HasQRCode (`fetchEventDetails`, `fetchHostSurveyStatus`, `fetchHasDocuments`, `fetchHasQRCode`, called by `useEventDetail`). The old `api.ts` and `types.ts` of EventDetail are deleted. The hook calls the repository functions.

`event/` also holds the three EventBooklet calls: Get_EventBookletFilters, Get_EventBookletGuests and Get_EventBookletHelpers (`fetchEventBookletFilters`, `fetchEventBookletGuests`, `fetchEventBookletHelpers`, called by `useEventBooklet`). The old `api.ts` of EventBooklet is deleted, and its `types.ts` no longer re-exports `api/event`. The hook calls the repository functions.

`household/` also holds the LDM_EventDetail_V2 call ActionGetHouseholdCoordinates (`fetchHouseholdCoordinatesById`, called by `useLdmEventDetail` on a click). It returns `Required<HouseholdCoordinates>`. It has no query hook. The old `api.ts` and `types.ts` of LDM_EventDetail_V2 are deleted; its two event calls come from `api/event`.

`household/` also holds the LegacyShareObject call ServiceAPIGetHouseholdDetails (`fetchHouseholdShareCard`, called by `useShareObject`). The old `api.ts` and `types.ts` of LegacyShareObject are deleted.

`locality/` also holds the LegacyShareObject call Get_UI_CommunityBusinessShareCard (`fetchCommunityBusinessShareCard`, called by `useShareObject`), next to the OneSchool Global calls.

`share/` (since P6-G6-B-ConnectShare) holds four calls. Get_ShareDetails (`ActionGet_ShareDetails`, `fetchShareDetails`) is from ConnectShare. LegacyShareObject adds ScreenDataSetGetShareObjectTypeById (`fetchShareObjectTypeLabel`), ActionShareObject (`shareObject`) and DataActionGetAvailableUsers (`fetchAvailableUsers`, the share-target list). The domain is chosen by the data that it owns (decision W8): the share records. The flow hook `useConnectShare` (`pages/ConnectShare/hooks/useConnectShare.ts`) calls the repository function. The domain has `types.ts`, `mapper.ts`, `repository.ts` and the barrel `index.ts`;

ConnectShare has no query hook, because its flow calls the read. LegacyShareObject adds `keys.ts` and `hooks.ts` with `useShareObjectTypeLabelQuery` and `useAvailableUsersQuery` (`keepPreviousData`, no retry, library default cache times; `requestId` is in the users key); the flow hooks `useShareObject` and `useProfileList` use them. The old `api.ts` and `types.ts` of ConnectShare and LegacyShareObject are deleted.
