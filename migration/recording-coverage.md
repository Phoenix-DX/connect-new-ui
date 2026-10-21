# Recording coverage (2026-10-20)

Mode: plan; read-only guard: on. Names only, no data.

## Pages visited (1)
- plan AcceptPendingPolicies: /UBTConnect/

## Actions recorded, by page pattern
- `/UBTConnect/`: ActionGetNumberUnreadMessages, ActionGetUserInformation, DataActionFetchCount, DataActionFetchUpdates, DataActionGetFeedConfig, DataActionGetServices
- `/UBTConnect/AcceptPendingPolicies`: ActionGetNumberUnreadMessages, ActionGetUserInformation, DataActionGetPendingPolicies
- `/UBTConnect/Login`: ActionGetNumberUnreadMessages, ActionGetUserInformation

## Actions blocked by the read-only guard
(add a name to --allow-actions only if the user confirms it does not write)
- ActionAppManager_SynchAppContext (from /UBTConnect/, /UBTConnect/AcceptPendingPolicies, /UBTConnect/Login)
- ActionSync_Info_GetMain (from /UBTConnect/, /UBTConnect/AcceptPendingPolicies, /UBTConnect/Login)
- ServiceAPIFetchData_CacheableMapEntities (from /UBTConnect/, /UBTConnect/AcceptPendingPolicies, /UBTConnect/Login)
- ServiceAPIFetchData_CacheableHouseholds (from /UBTConnect/, /UBTConnect/AcceptPendingPolicies, /UBTConnect/Login)
- ActionGet_RuntimeVersion (from /UBTConnect/Login)

## Build screens never reached
(add them to the capture plan with test parameters, or reach them by plan steps)
- PINUnlock `/UBTConnect/PINUnlock`
- Splash `/UBTConnect/Splash`
- HomeFeed `/UBTConnect/HomeFeed`
- FeedItemDetail `/UBTConnect/FeedItemDetail`
- MessageDetail `/UBTConnect/MessageDetail`
- MessageList `/UBTConnect/MessageList`
- MyEntertaining `/UBTConnect/MyEntertaining`
- Notes `/UBTConnect/Notes`
- Notifications `/UBTConnect/Notifications`
- Search `/UBTConnect/Search`
- Services `/UBTConnect/Services`
- Updates_SingleList `/UBTConnect/Updates_SingleList`
- BrowseCountries `/UBTConnect/BrowseCountries`
- BrowseDirectory `/UBTConnect/BrowseDirectory`
- CommunityBusinessDetails_CoomingSoon `/UBTConnect/CommunityBusinessDetails_CoomingSoon`
- CountryDetails `/UBTConnect/CountryDetails`
- CountryList `/UBTConnect/CountryList`
- HouseholdCarousel `/UBTConnect/HouseholdCarousel`
- HouseholdDetails `/UBTConnect/HouseholdDetails`
- Household_Relations `/UBTConnect/Household_Relations`
- Locality_Details `/UBTConnect/Locality_Details`
- OneSchoolGlobalDetails `/UBTConnect/OneSchoolGlobalDetails`
- Photobook `/UBTConnect/Photobook`
- SupperMeeting_Carousel `/UBTConnect/SupperMeeting_Carousel`
- SupperMeeting_Details `/UBTConnect/SupperMeeting_Details`
- ContactByEmailMember `/UBTConnect/ContactByEmailMember`
- ContactByEmailOneSchoolGlobal `/UBTConnect/ContactByEmailOneSchoolGlobal`
- ContactUsDetails `/UBTConnect/ContactUsDetails`
- ContactUsMenu `/UBTConnect/ContactUsMenu`
- Menu `/UBTConnect/Menu`
- PINBiometricsMenu `/UBTConnect/PINBiometricsMenu`
- PINChange `/UBTConnect/PINChange`
- Profile `/UBTConnect/Profile`
- TermsAndPoliciesMenu `/UBTConnect/TermsAndPoliciesMenu`
- BookmarksByGroup `/UBTConnect/BookmarksByGroup`
- MyBookmarks `/UBTConnect/MyBookmarks`
- ConnectShare `/UBTConnect/ConnectShare`
- LegacyShareObject `/UBTConnect/LegacyShareObject`
- AssembleDetail `/UBTConnect/AssembleDetail`
- AssembleEvents `/UBTConnect/AssembleEvents`
- Assemble_BrowseByCountry `/UBTConnect/Assemble_BrowseByCountry`
- ContactByEmailLDMCoordinator `/UBTConnect/ContactByEmailLDMCoordinator`
- ContactByEmailOrbitHelpdesk `/UBTConnect/ContactByEmailOrbitHelpdesk`
- ContactByEmailOrbitHost `/UBTConnect/ContactByEmailOrbitHost`
- EmailContact `/UBTConnect/EmailContact`
- EmailTarget `/UBTConnect/EmailTarget`
- EventBooklet `/UBTConnect/EventBooklet`
- EventDetail `/UBTConnect/EventDetail`
- GuestArrangements `/UBTConnect/GuestArrangements`
- HelpersDetail `/UBTConnect/HelpersDetail`
- HostSurvey `/UBTConnect/HostSurvey`
- LDM_Email_V2 `/UBTConnect/LDM_Email_V2`
- LDM_EventDetail_V2 `/UBTConnect/LDM_EventDetail_V2`
- LDM_MyEvents_V2 `/UBTConnect/LDM_MyEvents_V2`
- MilestoneDetail `/UBTConnect/MilestoneDetail`
- OrbitAdminEventDetail `/UBTConnect/OrbitAdminEventDetail`
- OrbitAdminLanding `/UBTConnect/OrbitAdminLanding`
- OrbitLanding `/UBTConnect/OrbitLanding`
- QRCodeGenerate `/UBTConnect/QRCodeGenerate`
- TransportDetail `/UBTConnect/TransportDetail`
- ViewDocuments `/UBTConnect/ViewDocuments`
