# API contract

`openapi.yaml` is the contract every server call follows; `schema.d.ts` is generated from it (`npm run gen:api`, never edited). Screens call `callAction(module, action, inputs)` from `src/api/client/callAction.ts` through their own `api.ts` adapter; an action missing from the contract does not compile.

`client/apiError.ts`: `ApiError` has `kind` (`timeout`, `network`, `server`, `security`, `viewChanged`) and `cause` (the OutSystems exception). `legacy/os/os-exceptions.ts` maps in both directions. `callAction` still raises the OutSystems exceptions.

`household/` is the first domain folder: `types.ts`, `mapper.ts`, `repository.ts`, `keys.ts`, `hooks.ts` and the barrel `index.ts`. The hooks set `staleTime: 0` and `gcTime: 0`.

Other code imports a domain through its barrel `index.ts`. One exception (decision W18): the app-start path uses deep imports to keep the entry chunk small. `platform/bootstrap/startup.ts` imports `@/api/message/unreadMessages` (the app-start call; `repository.ts` and `mapper.ts` re-export it) and `shared/Connect2_LegacyShared/lib/actions.ts` imports `@/api/bookmark/keys`.

`member/` has the same files. It holds GetAvailableMembers (ShareSheet), GetMemberByMemberId (OrbitAdminEventDetail), Member_EditDetails_Service (Profile) and ActionRequestPhotoUpdate (Menu). The three old `api.ts` files re-export it under their old names. The Menu page calls `requestPhotoUpdate` from `@/api/member`: the domain comes from the data that the call owns, the photo of the signed-in member (decision W9). `useAvailableMembersQuery` sets `staleTime: 0` and `gcTime: 0`. `useMemberQuery` and `useEditMemberDetailsMutation` have no caller yet: the flows call the repository functions.

`country/` has the same files. It holds 7 calls: DataActionGetCountriesStatistics (BrowseCountries and CountryList, two shapes `CountryCard` and `CountrySummary`), DataActionGetLocalityStatistics (CountryDetails), DataActionGetCountryInfo (Profile), GetUserLocalitiesForCountryCodeWithGPS and GetCountriesBySubscription (Connect2_LegacyShared), and DataActionGetCacheInfo (CacheControl_AllCountries). The old `api.ts` of CountryDetails re-exports its query under the old name; the other screens call `api/country` directly. `Connect2_LegacyShared/lib/actions.ts` and `CacheControl_AllCountries` call the repository functions.

Two mappers keep only the fields that the UI reads: GetUserLocalitiesForCountryCodeWithGPS keeps `Id` and `Name`; DataActionGetCacheInfo keeps `CountryCode` and `CountryName`. `useCountryLocalityStatisticsQuery` and `useCountryInfoQuery` keep the options of the old queries; `useAllCountriesQuery` has no caller yet. Query keys are in `countryKeys`.

`locality/` has the same files. It holds 11 calls. DataActionGetSubdivisionName is from AssembleEvents, DataActionGetLocalityStatistics from BrowseDirectory and DataActionGetEventLocalitiesForFilter from LDM_MyEvents_V2. Locality_Details has four (locality details, subdivision list, interchanges, OneSchoolGlobal list). The others are GetLocalityInformation and GetBulkSubdivisions_V2 (Connect2_LegacyShared), DataActionGetSubdivision (SupperMeeting_DetailsBlock) and DataActionGetCacheInfo (CacheControl_AllLocalities).

The seven old caller files re-export it under their old names. The household calls of Locality_Details stay for the household domain.

`GetLocalityInformation` keeps the full contract record (`LocalityInformation`), because the memory cache and the client action that bookmarks a locality clone it. The mappers of subdivision details, all localities and bulk subdivisions keep only the fields that the UI reads. The five hooks (`useLocalityCardListQuery`, `useLocalityDetailsQuery`, `useInterchangesQuery`, `useSubdivisionDetailsQuery`, `useAllLocalitiesQuery`) have no caller yet; they set `staleTime: 0`, `gcTime: 0` and `retry: false`.

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

`event/` has the same files. It holds 25 data actions and one mutation (GetScanEventQRCode) of 16 screens: AssembleDetail, AssembleEvents, EventBooklet, EventDetail, GuestArrangements, HelpersDetail, HostSurvey, LDM_EventDetail_V2, LDM_MyEvents_V2, MilestoneDetail, OrbitAdminEventDetail, OrbitAdminLanding, OrbitLanding, QRCodeGenerate, TransportDetail and ViewDocuments. The old `api.ts` and `types.ts` files of these screens re-export it under their old names. The three server-action reads (GetMilestoneScanFF, GetBookletGuestsMaxRows, GetBookletHelpersMaxRows) have no hook.

The shared record types (for example `EventInfo`, `Milestone_Screen`, `MemberInformation`, `AssembleEventSummary`) are defined in `event/types.ts`. The `structures.ts` files of Connect2_Assemble_MUI and Connect2_OrbitMobile_MUI re-export them. The 8 local copies of the null-date helper are one helper. The 25 hooks have no caller yet; the flows call the repository functions. They set `staleTime: 0`, `gcTime: 0` and no retry by default.

`bookmark/` has the same files. It holds 9 calls.

- DataActionGetAllBookmarksByGroup (BookmarksByGroup) and DataActionGetGroupSummaries (MyBookmarks)
- GetBookmarkById and New_GetBookmarkById (one function: the client action picks the second when the bookmark has a note)
- DeleteBookmarkByBookmarkId and New_UpdateBookmarkNote (Connect2_MyBookmarks_MUI)
- AddBookmark and DeleteBookmarkByBookmarkId (Connect2_Assemble_MUI)
- ServiceAPIAddBookmark2 and ServiceAPIDeleteBookmarkByBookmarkId2 (UBTConnect).

The old `api.ts` and `types.ts` files of BookmarksByGroup and MyBookmarks re-export it under their old names. `shared/Connect2_Assemble_MUI/lib/actions.ts` and `shared/UBTConnect/lib/actions.ts` call the repository functions.

The `Bookmark` type has `dateCreatedUtc`, the sort key of the `MyBookmarks` memory cache. The barrel exports the mapper `toBookmark` (the screen re-exports it as `toBookmarkItem`), because `fromCacheRecord` in BookmarksByGroup needs it. `AssembleBookmarkAdded`, `C2BookmarkAdded` and `BookmarkDeleted` keep the OutSystems names. The two hooks (`useBookmarkGroupQuery`, `useBookmarkGroupSummariesQuery`) have no caller yet; they set `staleTime: 0`, `gcTime: 0` and `retry: false`.

`note/` has the same files. It holds 6 calls.

- DataActionGetNotes and ActionGet_NotePills_ByNoteCategoryIds (Notes)
- DataActionFetchNotes (EntityDetailsActionsContainer)
- ServiceAPIUpdateNote and ServiceAPIDeleteNoteByNoteId (NoteListActionsContainer)
- ServiceAPIAddNote (NotesSheet).

The old `api.ts` files of these four owners re-export it under their old names. `screens/Notes/types.ts` keeps the screen types. The client actions `Get_Note_DynamicPills` and `GetNotes_FilterYear` stay in `screens/Notes/api.ts`, because they read the local notes and the session (`platform/`), and `api/` does not import `platform/`.

The AddNote mapper drops `ItemId` and `NoteCategoryId` of the answer, because no code reads them. The two hooks (`useNoteCardsQuery`, `useEntityNotesQuery`) have no caller yet; they set `staleTime: 0`, `gcTime: 0` and `retry: false`.

`message/` has the same files. It holds 19 calls of 11 screens: ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost, ContactUsDetails, EmailContact, EmailTarget, LDM_Email_V2, MessageDetail and MessageList. It also holds DataActionFetchContactDetails (Directory_EntityDetailsActions), GetMemberContactByCacheKey and GetNumberUnreadMessages (`platform/bootstrap/startup.ts`).

The old `api.ts` and `types.ts` files of these screens re-export it under their old names. `containers/EntityDetailsActions/api.ts` re-exports `fetchEntityContactDetails` as `fetchContactDetails`. `shared/Connect2_LegacyShared/lib` uses the domain too.

The domain has one e-mail form type, `ContactByEmailForm`, and one mapper, `toOrbitContactEmailInputs`, for three screens that had their own copies. `sendContactEmail` returns IsSuccess. `fetchEntityContactDetails` does not return LocalityId, because no code reads it. Wrapper_NotificationOpened and Wrapper_MarkAllAsReadNotifications are in `notification/`.

The domain has 8 query hooks and 9 mutation hooks with no caller yet. They set `staleTime: 0`, `gcTime: 0` and no retry by default. GetNumberUnreadMessages and GetMemberContactByCacheKey are server-action reads and have no hook.

`notification/` has the same files. It holds 4 calls: DataActionFetchNotifications and DataActionGetDateRanges (Notifications), Wrapper_NotificationOpened (MessageDetail) and Wrapper_MarkAllAsReadNotifications (MessageList).

The old `api.ts` files of these three owners re-export it under their old names. `pages/MessageList/hooks/useMessageList.ts` keeps a small adapter, `markAllAsReadFilter`, that maps the four block variables to the camelCase inputs of `markAllNotificationsAsRead`. `api/notification` does not import `api/message`. `screens/Notifications/types.ts` keeps `MessageListItemWire` for the mocks.

The domain has 2 query hooks and 2 mutation hooks with no caller yet.

`policy/` has the same files. It holds 2 calls of AcceptPendingPolicies: DataActionGetPendingPolicies and ActionAcceptPolicies. The domain is chosen by the data that it owns (decision W8): the acceptance records of the application policies. The route's `api.ts` and `types.ts` are deleted; the page uses the domain directly.

`usePendingPoliciesQuery` keeps the options of the old block query: `keepPreviousData`, `retry: false` and the library default cache times. It does not set `staleTime: 0` and `gcTime: 0`, because that changes what the page shows on a second visit. The key is `policyKeys.pending(inputs)`; `IsAllSelected` is sent but is not in the key.

`acceptPolicies` has no hook: the page flow calls the repository function. The policy documents (`DataActionGetCacheInfo` of CacheControl_Policies) stay in `app/`, because TermsAndPoliciesMenu, PINChange and the lock dialog also read them. A later step can move them to `policy/`.

`feed/` has the same files, without a mapper. It holds one call: DataActionGetFeedConfig of Embedded_FeedCMS. `useFeedConfigQuery` (inputs FeedItemId and B2CTenant) is called by `useEmbeddedFeed` in `platform/session`, which gives the answer to the `FeedCms` component as `config`. The block reads the wire record as it is.

`service/` has the same files. It holds 3 calls: DataActionGetServices of Services (`fetchUserServices`), Service_ConnectServices_ChangeOrder_Bulk of Services (`changeServicesOrder`) and DataActionGetServices of FeedBlock_Services in HomeFeed (`fetchFeedServices`). The domain is chosen by the data that it owns (decision W8): no other domain owns Connect_Services_CS.

The route's `api.ts` and `types.ts` are deleted. `useUserServicesQuery` keeps the old options (`gcTime: 0`, `staleTime: Infinity`, `retry: false`); its key is `serviceKeys.user()`. `changeServicesOrder` has no hook: the page flow calls it. `useFeedServicesQuery` has the key `serviceKeys.feed()` (`['service', 'feed']`), separate from `serviceKeys.user()`, and keeps `retry: false`; `useFeedServices` in `pages/HomeFeed/hooks` calls it.

`search/` has the same files. It holds 2 calls of Search: DataActionFetchSearchResults (`fetchSearchResults`) and ScreenDataSetGet_SearchBirthdayOptions (`fetchBirthdayOptions`). The domain is chosen by the data that it owns (decision W8): the directory search results and their options.

The route's `api.ts` and `types.ts` are deleted; `useSearch` in `pages/Search/hooks` calls the domain. The query key is `['Search', 'ScreenDataSetGet_SearchBirthdayOptions']`, as before.

`member/` also holds DataActionFetchCount (FeedBlock_CommunityPopulation). `useCommunityPopulationQuery` is called by HomeFeed and CountryList.

The queries of `feed/` and the count query of `member/` set `staleTime: 0`, `gcTime: 0`, `retry: false` and `refetchOnReconnect: false`, as the old effects did. They set `meta.errorLog` (a message). `logQueryError` in `client/queryClient.ts` logs it with `log.warn` when the fetch fails, so that `api/` does not import `platform/log`.

`household/` also holds the two Photobook calls: DataActionGetLocalityHouseholdIds (`fetchLocalityHouseholdIds`, called by `usePhotobook`) and DataActionGetHouseholdCaption (`fetchHouseholdCaption`, called by `useHouseholdCaption`). The old `api.ts` and `types.ts` of Photobook are deleted. The request shapes are `LocalityHouseholdIdsCallInputs` and `HouseholdCaptionCallInputs`; `SelectedHousehold`, `PhotobookHousehold` and `HouseholdCaption` are in `household/types.ts`. The flows call the repository functions.
