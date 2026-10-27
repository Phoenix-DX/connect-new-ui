# Pack of UI flow Directory_Locality (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "{ Icon: { iconUrl: \"/UBTConnect/img/UBTConnectLibrary.Pin_Member.svg\", iconSize: [ 20, 24 ], iconAnchor: [ 10, 24 ], popupAnchor: [ 0, -24 ] } }"  ← OnAfterFetch_GetLocalityStatistics.Value
- "Browse Directory"  ← BrowseDirectory.Value, CountryDetails.Value
- "Select another country to view"  ← BrowseDirectory.Value, CountryDetails.Value
- "Zoom in"  ← LeafletMap.Value
- "Zoom out"  ← LeafletMap.Value
- "Your location"  ← LeafletMap.Value
- "Search locality"  ← Block_SearchInput.Value
- "Browse by Locality"  ← Title.Value
- "Loading Name"  ← isLoading.Value
- "No results found for '"  ← StatisticsList.Value, isLoading.Value
- "Sorry, we couldn't find any results for your search. Please check your spelling or try different keywords."  ← isLoading.Value
- "Search any member or location"  ← CountryList.Value
- "MY LOCALITY"  ← HeaderColumns.Value
- "Supper Meeting"  ← HeaderColumns.Value
- "Supper Meetings"  ← DoesntHaveSupperMeetings.Value, HeaderColumns.Value, LegendItem_Localities.Value, ListAppendAll.Value
- "MY COUNTRY"  ← HeaderColumns.Value
- "Browse by Country"  ← Title.Value
- "Search for households or members"  ← Locality_Details.Value
- "directory-locality padding-left-xs"  ← Locality_Details.Value
- "Local Timezone And UTC Offset"  ← IsLoadingLocalityLabel2.Value
- "About the numbers"  ← Directory_LegendBottomSheet.Value, Directory_LegendBottomSheet2.Value
- "Dumyy size"  ← ListAppend.Value, ListAppend2.Value, ListAppend3.Value
- "No Locality Contacts in this locality"  ← EmptyList.Value
- "There doesn't seem to be any Locality"  ← EmptyList.Value
- "Contacts in your locality."  ← EmptyList.Value
- "Try searching for a country or locality."  ← StatisticsList.Value
- "Enter your PIN code"  ← UnlockText.DefaultValue
- "Pin does not match"  ← Event_Pincode_PinUnlockError.Value
- "User not found"  ← Event_Pincode_PinUnlockError.Value
- "Your current PIN is not correct!"  ← Event_Pincode_PinUnlockError.Value
- "No matching user. Please Register a PIN"  ← Event_Pincode_PinUnlockError.Value
- "border-bottom-s border-color-neutral-0"  ← Block_PINUnlock_ContentWrapper.Value
- "Forgot PIN?"  ← Block_PINUnlock_ContentWrapper.Value
- "Terms & Conditions"  ← Block_PINUnlock_ContentWrapper.Value
- "Our Privacy Policy"  ← Block_PINUnlock_ContentWrapper.Value
- "Photobook is currently unavailable for this household. Please try again later."  ← Handler_OnClickPhotobook.Message
- "Household gallery"  ← ImageCard_LazyLoading.Value
- "Your profile is private and only visible to you"  ← isHouseholdHidden.Value
- "Supper Meeting:"  ← SeeMoreSection.Value
- "We have noticed you are using an old version of Connect."  ← UnsupportedVersion_Native.Value
- "We recommend you upgrade to the latest version."  ← UnsupportedVersion_Browser.Value, UnsupportedVersion_Native.Value, UnsupportedVersion_WebView.Value
- "If you have any issues upgrading the Connect app, please uninstall and reinstall it."  ← UnsupportedVersion_Native.Value
- "We have noticed you are using an unsupported version of Android System Webview."  ← UnsupportedVersion_WebView.Value
- "Household members"  ← Members.Value
- "ubt-lock-screen connect-legacy-compatibily-containter"  ← Block_PINUnlock.Value
- "No results found for ‘"  ← SearchEmpty.Value
- "We couldn’t find an item that matches your search. Please check your spelling or try different keywords."  ← SearchEmpty.Value
- "No change today"  ← Directory_CommunityNumbers.Value
- "Community Population"  ← FeedBlock_CommunityPopulation.Value
- ".layout .content"  ← ScrollTop2.Value
- "Bookmarks not available"  ← GetBookmarkCategoryId_ByEntityTypeId.ExceptionMessage, OnReady.ExceptionMessage
- "Invalid option"  ← OnReady.ExceptionMessage
- "in this locality"  ← Directory_Interchange_StatisticsList.Value
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "found nearby"  ← Location.DefaultValue
- "There doesn't seem to be any"  ← Directory_EmptyState.Value
- "this locality."  ← Directory_EmptyState.Value
- "Sort by"  ← SortBy_Title.DefaultValue
- "Sort & Filter"  ← FilterSheet.Value
- "New South Wales"  ← GetSkeleton_UI_LocalityStatistics.Value
- "Subdivision Name Example"  ← GetSkeleton_UI_SubdivisionCardContent.Value
- "Subdivision Formatted Address Example"  ← GetSkeleton_UI_SubdivisionCardContent.Value
- "OneSchoold Global"  ← GetSkeleton_UI_OneSchoolGlobal_ListCard.Value
- "Example & Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Example, Example, Example, Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "testing address testing addres NSW 2000"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Example Example Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Share not available"  ← GetShareType_FromEntity.ExceptionMessage