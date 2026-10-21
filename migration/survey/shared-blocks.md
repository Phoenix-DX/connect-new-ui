# Shared blocks of UBTConnect

Blocks used by at least 3 screens (outside the shell). Build once in `src/shared/`, spec them the first time a screen needs them.

| Block | Screens | Example screens |
|---|---|---|
| `UBTConnect.App_Common.BottomBarMenu.mvc.js` | 38 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries … |
| `UBTConnect.App_Common_Blocks.App_IconBadge.mvc.js` | 38 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries … |
| `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js` | 38 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries … |
| `UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc.js` | 38 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries … |
| `OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js` | 38 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries … |
| `UBTConnect.App_Common.BottomBarContent.mvc.js` | 38 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries … |
| `UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` | 36 | AssembleDetail, BookmarksByGroup, ContactByEmailContacts, ContactByEmailMember, ContactByEmailOrbitHost … |
| `OutSystemsUI_2_23.Adaptive.Columns3.mvc.js` | 34 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, ContactByEmailMember … |
| `UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js` | 32 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, ContactByEmailMember … |
| `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` | 32 | BrowseCountries, BrowseDirectory, CommunityBusinessDetails, ContactByEmailContacts, ContactByEmailLDMCoordinator … |
| `Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc.js` | 31 | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, ConnectShare … |
| `Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js` | 28 | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, EmailContact … |
| `OutSystemsUI_2_23.Interaction.InputWithIcon.mvc.js` | 27 | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BookmarksByGroup … |
| `OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js` | 24 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails … |
| `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js` | 23 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails … |
| `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js` | 22 | AssembleDetail, ContactUsDetails, FeedItemDetail, HelpersDetail, HomeFeed … |
| `UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js` | 22 | AssembleDetail, Bookmarks, BookmarksByGroup, ContactUsDetails, CountryDetails … |
| `UBTConnectLibrary.ConnectPatterns.Input.mvc.js` | 22 | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries … |
| `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js` | 18 | AssembleDetail, ContactUsDetails, HelpersDetail, HouseholdCarousel, HouseholdDetails … |
| `UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js` | 18 | AssembleDetail, Bookmarks, BookmarksByGroup, ContactUsDetails, FeedItemDetail … |
| `UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js` | 18 | Bookmarks, ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal … |
| `UBTConnectLibrary.ConnectPatterns.InputCounter.mvc.js` | 18 | Bookmarks, ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal … |
| `Connect2_LegacyShared.Layout.Layout.mvc.js` | 18 | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, ConnectShare … |
| `UBTConnectLibrary.ConnectPatterns.EmptyList.mvc.js` | 17 | AssembleDetail, Bookmarks, BookmarksByGroup, CountryDetails, FeedItemDetail … |
| `UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc.js` | 16 | Bookmarks, CommunityBusinessDetails_CoomingSoon, CountryList, HomeFeed, HouseholdCarousel … |
| `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc.js` | 16 | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, ConnectShare … |
| `UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js` | 15 | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel … |
| `NavigationHandler.NavigationHandler.NavigationHandler.mvc.js` | 14 | ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk … |
| `UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js` | 14 | Bookmarks, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations … |
| `UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc.js` | 14 | Bookmarks, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations … |
| `UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc.js` | 14 | Bookmarks, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations … |
| `UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js` | 14 | Bookmarks, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations … |
| `UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc.js` | 14 | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel … |
| `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` | 14 | AssembleDetail, HouseholdCarousel, HouseholdDetails, LDM_EventDetail, LDM_EventDetail_V2 … |
| `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js` | 14 | AssembleDetail, HouseholdCarousel, HouseholdDetails, LDM_EventDetail, LDM_EventDetail_V2 … |
| `UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js` | 13 | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel … |
| `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` | 13 | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel … |
| `UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc.js` | 13 | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel … |
| `Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc.js` | 13 | EmailContact, EventBooklet, EventDetail, GuestArrangements, HelpersDetail … |
| `OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js` | 12 | ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk … |
| `UBTConnect.App_Common_Blocks.SectionSeparator.mvc.js` | 12 | ContactUsDetails, ContactUsMenu, Map, Menu, MyCalendar … |
| `NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js` | 12 | ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk … |
| `UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js` | 12 | AcceptPendingPolicies, ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal … |
| `UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc.js` | 12 | Bookmarks, BrowseCountries, BrowseDirectory, HomeFeed, LegacyShareObject … |
| `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc.js` | 12 | EventBooklet, EventDetail, GuestArrangements, HelpersDetail, HostSurvey … |
| `UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc.js` | 11 | Bookmarks, ContactUsDetails, CountryDetails, CountryList, Map … |
| `UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js` | 11 | Bookmarks, ContactUsDetails, CountryDetails, CountryList, Map … |
| `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` | 11 | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details … |
| `UBTConnectLibrary.ConnectPatterns.AddNote.mvc.js` | 11 | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details … |
| `UBTConnect_Utils.CW_Notes.NoteListActions.mvc.js` | 11 | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details … |
| `UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc.js` | 11 | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details … |
| `UBTConnectLibrary.ConnectPatterns.Popup.mvc.js` | 11 | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details … |
| `UBTConnectLibrary.ConnectPatterns.Note_Item.mvc.js` | 11 | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details … |
| `UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc.js` | 11 | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details … |
| `UBTConnectLibrary.ConnectPatterns.TagToggle.mvc.js` | 11 | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … |
| `UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js` | 11 | FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details … |
| `UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc.js` | 10 | Bookmarks, CountryDetails, Map, MyCalendar, Notes … |
| `OutSystemsUI_2_23.Adaptive.Gallery.mvc.js` | 10 | HomeFeed, HostSurvey, HouseholdCarousel, Map, MyCalendar … |
| `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc.js` | 10 | EventDetail, GuestArrangements, HelpersDetail, HostSurvey, MilestoneDetail … |
| `UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc.js` | 9 | ContactUsDetails, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details … |
| `UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js` | 9 | ContactUsDetails, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details … |
| `UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js` | 9 | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails … |
| `UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc.js` | 9 | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails … |
| `UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` | 9 | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Profile … |
| `UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js` | 9 | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails … |
| `UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc.js` | 8 | ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk … |
| `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js` | 8 | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails … |
| `UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js` | 8 | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails … |
| `UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js` | 8 | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails … |
| `UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc.js` | 8 | HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, OneSchoolGlobalEventDetail … |
| `Connect2_LegacyShared.Reusable.Spinner.mvc.js` | 8 | AssembleEvents, Assemble_BrowseByCountry, BookmarksByGroup, MessageDetail, MessageList … |
| `Connect2_LegacyShared.Reusable.InputCounter.mvc.js` | 8 | AssembleDetail, BookmarksByGroup, EmailContact, EmailTarget, HostSurvey … |
| `UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc.js` | 7 | Bookmarks, CountryDetails, Map, Notes, Notifications … |
| `UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc.js` | 7 | Bookmarks, CountryDetails, Map, Notes, Profile … |
| `UBTConnectLibrary.ConnectPatterns.StaticInput.mvc.js` | 7 | CommunityBusinessDetails_CoomingSoon, CountryList, HomeFeed, Locality_Details, Profile … |
| `UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc.js` | 7 | ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk … |
| `OutSystemsUI_2_23.Interaction.Animate.mvc.js` | 7 | LDM_Email, LDM_Email_V2, LDM_MyEvents, LDM_MyEvents_V2, MessageList … |
| `Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc.js` | 7 | EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail, QRCodeGenerate … |
| `NavigationHandler.ScrollAnchors.ScrollAnchor.mvc.js` | 6 | AssembleDetail, AssembleEvents, BookmarksByGroup, New_BookmarksByGroup, Notifications … |
| `UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js` | 6 | Bookmarks, CountryDetails, Map, Notes, Search … |
| `UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc.js` | 6 | Bookmarks, CountryDetails, Map, Notes, Search … |
| `UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc.js` | 6 | Bookmarks, CountryDetails, Map, Notes, Search … |
| `UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc.js` | 6 | HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Profile … |
| `UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc.js` | 6 | HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile … |
| `UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc.js` | 6 | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Profile … |
| `UBTConnect.ContactFlow.ContactByEmailForm.mvc.js` | 6 | ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk … |
| `Connect2_LegacyShared.Widgets.NetworkWarning.mvc.js` | 6 | LDM_Email, LDM_Email_V2, LDM_MyEvents, LDM_MyEvents_V2, MyBookmarks … |
| `Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc.js` | 6 | LDM_Email, LDM_Email_V2, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents … |
| `Connect2_LegacyShared.Utility.Result_Item_Image.mvc.js` | 6 | BookmarksByGroup, LDM_MyEvents, LDM_MyEvents_V2, LegacyShareObject, MessageDetail … |
| `UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js` | 5 | Bookmarks, CountryList, HomeFeed, Notes, Updates_SingleList |
| `UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc.js` | 5 | Bookmarks, CountryList, HomeFeed, Notes, Updates_SingleList |
| `UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js` | 5 | HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel |
| `UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc.js` | 5 | HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel |
| `UBTConnectLibrary.ConnectCorePatterns.Member_ListItem.mvc.js` | 5 | HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel |
| `UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc.js` | 5 | HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel |
| `UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc.js` | 5 | HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel |
| `UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc.js` | 5 | HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel |
| `UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` | 5 | HomeFeed, HouseholdCarousel, MessageDetail, SupperMeeting_Carousel, Updates_SingleList |
| `UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc.js` | 5 | HouseholdCarousel, Locality_Details, Map, SupperMeeting_Carousel, SupperMeeting_Details |
| `UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc.js` | 5 | HouseholdCarousel, Locality_Details, Map, SupperMeeting_Carousel, SupperMeeting_Details |
| `UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc.js` | 5 | HouseholdCarousel, Locality_Details, Map, SupperMeeting_Carousel, SupperMeeting_Details |
| `UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc.js` | 5 | HouseholdCarousel, Locality_Details, Map, SupperMeeting_Carousel, SupperMeeting_Details |
| `UBTConnectLibrary.Layouts.Layout_MainPages.mvc.js` | 5 | CommunityBusinessDetails_CoomingSoon, CountryList, Locality_Details, ShareObject, TestOpenShare |
| `OutSystemsUI_2_23.Utilities.AlignCenter.mvc.js` | 5 | AssembleDetail, AssembleEvents, BookmarksByGroup, MessageList, New_BookmarksByGroup |
| `Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc.js` | 5 | AssembleDetail, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2 |
| `Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc.js` | 5 | BookmarksByGroup, ConnectShare, MyBookmarks, New_BookmarksByGroup, New_MyBookmarks |
| `UBTConnect.App_Menu.Menu_List.mvc.js` | 4 | ContactUsMenu, Menu, PINBiometricsMenu, TermsAndPoliciesMenu |
| `ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc.js` | 4 | MessageDetail, MilestoneDetail, Notifications, Photobook |
| `UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc.js` | 4 | HomeFeed, MessageDetail, Notifications, Updates_SingleList |
| `OutSystemsUI_2_23.Utilities.Separator.mvc.js` | 4 | AcceptPendingPolicies, AssembleEvents, Assemble_BrowseByCountry, MessageList |
| `UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc.js` | 4 | HouseholdCarousel, Locality_Details, SupperMeeting_Carousel, SupperMeeting_Details |
| `OutSystemsUI_2_23.Interaction.Carousel.mvc.js` | 4 | HomeFeed, HouseholdCarousel, Photobook, SupperMeeting_Carousel |
| `UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc.js` | 4 | BrowseCountries, BrowseDirectory, Locality_Details, Map |
| `Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc.js` | 4 | LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2 |
| `Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc.js` | 4 | BookmarksByGroup, MyBookmarks, New_BookmarksByGroup, New_MyBookmarks |
| `Connect2_LegacyShared.Layout.MenuIcon_Back.mvc.js` | 4 | ConnectShare, LegacyShareObject, MessageDetail, MessageList |
| `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc.js` | 4 | EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail |
| `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc.js` | 4 | EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail |
| `OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc.js` | 4 | EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail |
| `OutSystemsUI_2_23.Content.BlankSlate.mvc.js` | 3 | CommunityBusinessDetails_CoomingSoon, InvalidPermissions, ShareObject |
| `UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc.js` | 3 | Bookmarks, Notes, Updates_SingleList |
| `UBTConnect.Calendar.MonthPicker.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.CalendarView.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.CacheControl_Calendar_Coordinator.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar_Events.CacheControl_CalendarEvents.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.CalendarMonths.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.DayList.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnectLibrary.ConnectPatterns.HorizontalDot_List.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.Weekday.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.CalendarHeaderWeekdays.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.CalendarWeeks.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.CalendarDays.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.EventList.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar_Events.Calendar_EventCard.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnectLibrary.ConnectPatterns.EventCard.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar_Events.Calendar_NoEvents.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Calendar.Calendar_Header_SelectedDate.mvc.js` | 3 | MyCalendar, PersonalEventForm, Recurrence |
| `UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js` | 3 | HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details |
| `UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js` | 3 | HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details |
| `UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc.js` | 3 | HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details |
| `UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc.js` | 3 | HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details |
| `OutSystemsUI_2_23.Utilities.TouchEvents.mvc.js` | 3 | LDM_MyEvents, LDM_MyEvents_V2, Photobook |
| `UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc.js` | 3 | Map, Search, Updates_SingleList |
| `UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc.js` | 3 | HomeFeed, MessageDetail, Updates_SingleList |
| `UBTConnect.Home.Feed_Embeded.mvc.js` | 3 | FeedItemDetail, HomeFeed, MessageDetail |
| `UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc.js` | 3 | FeedItemDetail, HomeFeed, MessageDetail |
| `Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js` | 3 | AssembleDetail, BookmarksByGroup, New_BookmarksByGroup |
| `Connect2_LegacyShared.Widgets.PopupMenu.mvc.js` | 3 | AssembleDetail, BookmarksByGroup, New_BookmarksByGroup |
| `Connect2_LegacyShared.Reusable.MessageList_NoResults.mvc.js` | 3 | BookmarksByGroup, MessageList, New_BookmarksByGroup |
| `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc.js` | 3 | EventDetail, OrbitAdminLanding, OrbitLanding |
| `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc.js` | 3 | EventBooklet, EventDetail, HostSurvey |
| `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc.js` | 3 | GuestArrangements, HelpersDetail, MilestoneDetail |
| `Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc.js` | 3 | GuestArrangements, HelpersDetail, MilestoneDetail |
