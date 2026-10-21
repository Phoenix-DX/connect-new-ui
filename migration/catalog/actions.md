# Actions

Every data action, aggregate and server action of live screens. Ask the OutSystems MCP once per action and save the answer to `knowledge/actions/<Action>.md`; screen agents read the cached answer instead of asking again.

| Action | Kind | Screens | MCP answer cached |
|---|---|---|---|
| `DataActionGetCacheInfo` | dataAction | 55: AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, BrowseCountries … | no |
| `CS_CreateShareProfileLink` | serverAction | 12: AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails … | no |
| `CS_ShareObject` | serverAction | 12: AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails … | no |
| `DataActionGetAvailableMembers` | dataAction | 12: AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails … | no |
| `DataActionGetRecentlyShared` | dataAction | 12: AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails … | no |
| `AddNote` | serverAction | 9: HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, OneSchoolGlobalDetails … | no |
| `DeleteNoteByNoteId` | serverAction | 9: HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, OneSchoolGlobalDetails … | no |
| `UpdateNote` | serverAction | 9: HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, OneSchoolGlobalDetails … | no |
| `DataActionFetchNotes` | dataAction | 8: HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, OneSchoolGlobalDetails, Profile … | no |
| `DataActionFetchContactDetails` | dataAction | 7: HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel … | no |
| `DataActionGetHousehold` | dataAction | 5: HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel | no |
| `DataActionGetHousehold_Coordinates` | dataAction | 5: HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel | no |
| `DataActionGetFeedConfig` | dataAction | 3: FeedItemDetail, HomeFeed, MessageDetail | no |
| `DataActionGetSubdivision` | dataAction | 3: HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details | no |
| `DataActionGetSubdivisionHouseholds` | dataAction | 3: HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details | no |
| `SendContactEmail` | serverAction | 3: ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost, EmailContact | no |
| `Action_UI_UpdateItem_MarkAllAsRead` | serverAction | 2: Notifications, Updates_SingleList | no |
| `Action_UI_UpdateItem_MarkAsRead` | serverAction | 2: HomeFeed, Updates_SingleList | no |
| `Action_UI_UpdateItem_MarkAsUnread` | serverAction | 2: HomeFeed, Updates_SingleList | no |
| `DataActionFetchCount` | dataAction | 2: CountryList, HomeFeed | no |
| `DataActionFetchUpdates` | dataAction | 2: HomeFeed, Updates_SingleList | no |
| `DataActionGetCoordinatorDetails` | dataAction | 2: LDM_Email_V2, LDM_EventDetail_V2 | no |
| `DataActionGetCountriesStatistics` | dataAction | 2: BrowseCountries, CountryList | no |
| `DataActionGetDateRanges` | dataAction | 2: Notifications, Updates_SingleList | no |
| `DataActionGetLocalityStatistics` | dataAction | 2: BrowseDirectory, CountryDetails | no |
| `DataActionGetServices` | dataAction | 2: HomeFeed, Services | no |
| `SendContactMemberEmail` | serverAction | 2: ContactByEmailMember, ContactByEmailOneSchoolGlobal | no |
| `AcceptPolicies` | serverAction | 1: AcceptPendingPolicies | no |
| `AppManager_Get_UserIdToken` | serverAction | 1: MyEntertaining | no |
| `DataActionDataAction_GetCountriesNames` | dataAction | 1: ContactUsDetails | no |
| `DataActionDataAction_GetLocalityTimezone` | dataAction | 1: ContactUsDetails | no |
| `DataActionFetchNotifications` | dataAction | 1: Notifications | no |
| `DataActionFetchSearchResults` | dataAction | 1: Search | no |
| `DataActionGetAccommodationGuest` | dataAction | 1: MilestoneDetail | no |
| `DataActionGetAccommodationHelper` | dataAction | 1: MilestoneDetail | no |
| `DataActionGetAccommodationHost` | dataAction | 1: MilestoneDetail | no |
| `DataActionGetAllBookmarksByGroup` | dataAction | 1: BookmarksByGroup | no |
| `DataActionGetAssembleEvent` | dataAction | 1: AssembleDetail | no |
| `DataActionGetAssembleEventTypes` | dataAction | 1: AssembleEvents | no |
| `DataActionGetAssembleMeetingSummaryList` | dataAction | 1: AssembleEvents | no |
| `DataActionGetAvailableUsers` | dataAction | 1: LegacyShareObject | no |
| `DataActionGetCaptions` | dataAction | 1: MilestoneDetail | no |
| `DataActionGetCountryInfo` | dataAction | 1: Profile | no |
| `DataActionGetEntertainingConfig` | dataAction | 1: MyEntertaining | no |
| `DataActionGetEventByEventId` | dataAction | 1: LDM_EventDetail_V2 | no |
| `DataActionGetEventDocuments` | dataAction | 1: ViewDocuments | no |
| `DataActionGetEventLocalitiesForFilter` | dataAction | 1: LDM_MyEvents_V2 | no |
| `DataActionGetEventsForCalendar` | dataAction | 1: LDM_MyEvents_V2 | no |
| `DataActionGetEventsForMyTimeline` | dataAction | 1: LDM_MyEvents_V2 | no |
| `DataActionGetGmpMilestoneHost` | dataAction | 1: MilestoneDetail | no |
| `DataActionGetGroupSummaries` | dataAction | 1: MyBookmarks | no |
| `DataActionGetGuestArrangements` | dataAction | 1: GuestArrangements | no |
| `DataActionGetHelperDetails` | dataAction | 1: HelpersDetail | no |
| `DataActionGetHostSurvey` | dataAction | 1: HostSurvey | no |
| `DataActionGetHouseholdCaption` | dataAction | 1: Photobook | no |
| `DataActionGetInterchangesByLocalityId` | dataAction | 1: Locality_Details | no |
| `DataActionGetLocalityHouseholdIds` | dataAction | 1: Photobook | no |
| `DataActionGetLocalityHouseholds` | dataAction | 1: Locality_Details | no |
| `DataActionGetMealGuest` | dataAction | 1: MilestoneDetail | no |
| `DataActionGetMealHelper` | dataAction | 1: MilestoneDetail | no |
| `DataActionGetMealHost` | dataAction | 1: MilestoneDetail | no |
| `DataActionGetMembers` | dataAction | 1: Locality_Details | no |
| `DataActionGetMessageInstance` | dataAction | 1: MessageDetail | no |
| `DataActionGetMessageInstanceById2` | dataAction | 1: MessageList | no |
| `DataActionGetMessages` | dataAction | 1: MessageList | no |
| `DataActionGetNotes` | dataAction | 1: Notes | no |
| `DataActionGetOneSchoolGlobalDetails` | dataAction | 1: OneSchoolGlobalDetails | no |
| `DataActionGetPendingPolicies` | dataAction | 1: AcceptPendingPolicies | no |
| `DataActionGetShare` | dataAction | 1: MessageDetail | no |
| `DataActionGetSubdivisionName` | dataAction | 1: AssembleEvents | no |
| `DataActionGetSurveyHelpers` | dataAction | 1: HostSurvey | no |
| `DataActionGet_AdminEventsList` | dataAction | 1: OrbitAdminLanding | no |
| `DataActionGet_Document` | dataAction | 1: MilestoneDetail | no |
| `DataActionGet_EventBookletFilters` | dataAction | 1: EventBooklet | no |
| `DataActionGet_EventBookletGuests` | dataAction | 1: EventBooklet | no |
| `DataActionGet_EventBookletHelpers` | dataAction | 1: EventBooklet | no |
| `DataActionGet_EventDetails` | dataAction | 1: EventDetail | no |
| `DataActionGet_EventInformation` | dataAction | 1: OrbitAdminEventDetail | no |
| `DataActionGet_EventQRCode` | dataAction | 1: QRCodeGenerate | no |
| `DataActionGet_EventsByMemberId` | dataAction | 1: OrbitLanding | no |
| `DataActionGet_HasDocuments` | dataAction | 1: EventDetail | no |
| `DataActionGet_HasQRCode` | dataAction | 1: EventDetail | no |
| `DataActionGet_HostSurveyStatus` | dataAction | 1: EventDetail | no |
| `DataActionGet_HouseholdMembers` | dataAction | 1: OrbitLanding | no |
| `DataActionGet_LocalityDetails` | dataAction | 1: Locality_Details | no |
| `DataActionGet_MemberDetails` | dataAction | 1: Household_Relations | no |
| `DataActionGet_OneSchoolGlobal_List` | dataAction | 1: Locality_Details | no |
| `DataActionGet_ParentHouseholdDetails` | dataAction | 1: Household_Relations | no |
| `DataActionGet_Subdivision_List` | dataAction | 1: Locality_Details | no |
| `DataActionGet_TransportDetail` | dataAction | 1: TransportDetail | no |
| `DeleteBookmarkByBookmarkId` | serverAction | 1: BookmarksByGroup | no |
| `EventContact` | serverAction | 1: LDM_Email_V2 | no |
| `GetHouseholdCoordinates` | serverAction | 1: LDM_EventDetail_V2 | no |
| `GetHouseholdDetails` | serverAction | 1: LegacyShareObject | no |
| `GetMemberByMemberId` | serverAction | 1: OrbitAdminEventDetail | no |
| `GetScanEventQRCode` | serverAction | 1: OrbitAdminEventDetail | no |
| `Get_OrbitHostSurveyNotificationParameters` | serverAction | 1: MessageDetail | no |
| `Get_OrbitNotificationParameters` | serverAction | 1: MessageDetail | no |
| `Get_UI_CommunityBusinessShareCard` | serverAction | 1: LegacyShareObject | no |
| `MarkMessageAsClear` | serverAction | 1: MessageList | no |
| `MarkMessageAsRead` | serverAction | 1: MessageList | no |
| `Member_EditDetails_Service` | serverAction | 1: Profile | no |
| `New_UpdateBookmarkNote` | serverAction | 1: BookmarksByGroup | no |
| `PostHostSurvey` | serverAction | 1: HostSurvey | no |
| `RequestPhotoUpdate` | serverAction | 1: Menu | no |
| `ScreenDataSetGetMessageTemplateParametersByMessageTemplateId` | aggregate | 1: MessageDetail | no |
| `ScreenDataSetGetShareObjectTypeById` | aggregate | 1: LegacyShareObject | no |
| `ScreenDataSetGet_SearchBirthdayOptions` | aggregate | 1: Search | no |
| `SendContactLDMCoordinatorEmail` | serverAction | 1: ContactByEmailLDMCoordinator | no |
| `SendContactUsMessage` | serverAction | 1: ContactUsDetails | no |
| `Service_ConnectServices_ChangeOrder_Bulk` | serverAction | 1: Services | no |
| `ShareObject` | serverAction | 1: LegacyShareObject | no |
| `StoreAdaptiveCardResponses` | serverAction | 1: MessageDetail | no |
| `UserContactUser` | serverAction | 1: EmailTarget | no |
| `Wrapper_MarkAllAsReadNotifications` | serverAction | 1: MessageList | no |
| `Wrapper_NotificationOpened` | serverAction | 1: MessageDetail | no |
