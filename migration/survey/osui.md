# OutSystems UI

Pattern blocks of OutSystems UI used by the app. Each is built ONCE as a shared component (`src/shared/osui/<Pattern>`, tag `@os-block OutSystemsUI.<Flow>.<Block>`) that renders the same DOM and classes (`osui-*`) and reproduces the behaviour of the pattern; patterns with a provider library get a stack item (`osui:<Pattern>`) for the user to choose the web equivalent.

- Module names found: `OutSystemsUI`, `OutSystemsUI_2_23`
- OutSystems UI scripts/styles in the manifest: 19
  - `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css`
  - `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css`
  - `/UBTConnect/scripts/OutSystemsUI.referencesHealth.js`
  - `/UBTConnect/scripts/OutSystemsUIWeb.referencesHealth.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.FloatingUICore.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.FloatingUIDom.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.MWO.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.NoUISlider.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.OfflineDataSync.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.OutSystemsUI.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.PullToRefresh.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.Splide.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.TouchTrack.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.VirtualSelect.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.controller.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.languageResources.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.model.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.referencesHealth.js`
  - `/UBTConnect/scripts/OutSystemsUI_2_23.wNumb.js`
- Provider libraries in the manifest: `Leaflet.Leaflet.LeafletMap.css`, `Leaflet.Leaflet.LeafletMap_Updated.css`, `SortableJS.Sortable.SortableList.css`, `Leaflet.layers.png`, `Leaflet.layers2x.png`, `Leaflet.markericon.png`, `FullCalendarReactive.moment_min.js`, `Leaflet.Leaflet.LeafletMap.mvc.js`, `Leaflet.Leaflet.LeafletMap_Updated.mvc.js`, `Leaflet.controller.js`, `Leaflet.languageResources.js`, `Leaflet.leaflet_markerclustersrc.js`, `Leaflet.leafletsrc.js`, `Leaflet.model.js`, `Leaflet.referencesHealth.js`, `OutSystemsUI_2_23.NoUISlider.js`, `OutSystemsUI_2_23.Splide.js`, `OutSystemsUI_2_23.VirtualSelect.js`, `SortableJS.Sortable.SortableList.mvc.js`, `SortableJS.Sortable.SortableList_Draggable.mvc.js`, `SortableJS.Sortable_min.js`, `SortableJS.controller.js`, `SortableJS.languageResources.js`, `SortableJS.model.js`, `SortableJS.referencesHealth.js`

| Pattern block | Screens | Users |
|---|---|---|
| `OutSystemsUI_2_23.Adaptive.Columns2` | 81 | AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BrowseCountries, BrowseDirectory, CommunityBusinessDetails … |
| `OutSystemsUI_2_23.Utilities.InlineSVG` | 74 | AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BrowseCountries, BrowseDirectory, CommunityBusinessDetails … |
| `OutSystemsUI_2_23.Navigation.BottomBarItem` | 38 | AssembleDetail, AssembleEvents, Bookmarks, BrowseCountries, BrowseDirectory, CommunityBusinessDetails, CountryDetails, CountryList … |
| `OutSystemsUI_2_23.Adaptive.Columns3` | 37 | AssembleDetail, AssembleEvents, Bookmarks, ContactByEmailMember, ContactByEmailOrbitHost, ContactUsMenu, CountryDetails, CountryList … |
| `OutSystemsUI_2_23.Interaction.BottomSheet` | 27 | AssembleDetail, AssembleEvents, Bookmarks, CountryDetails, CountryList, EventDetail, FeedItemDetail, HomeFeed … |
| `OutSystemsUI_2_23.Interaction.InputWithIcon` | 27 | AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BrowseCountries, BrowseDirectory, CountryDetails, EventBooklet … |
| `OutSystemsUI_2_23.Utilities.ButtonLoading` | 12 | ContactByEmailContacts, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost, ContactUsDetails, Login … |
| `OutSystemsUI_2_23.Adaptive.Gallery` | 9 | HomeFeed, HostSurvey, HouseholdCarousel, MyCalendar, OneSchoolGlobalCarousel, PersonalEventForm, Recurrence, SupperMeeting_Carousel … |
| `OutSystemsUI_2_23.Interaction.Carousel` | 5 | HomeFeed, HouseholdCarousel, OneSchoolGlobalCarousel, Photobook, SupperMeeting_Carousel |
| `OutSystemsUI_2_23.Interaction.Animate` | 5 | LDM_Email, LDM_Email_V2, LDM_MyEvents, LDM_MyEvents_V2, MessageList |
| `OutSystemsUI_2_23.Utilities.Separator` | 4 | AcceptPendingPolicies, AssembleEvents, Assemble_BrowseByCountry, MessageList |
| `OutSystemsUI_2_23.Content.DEPRECATED_Accordion` | 4 | EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail |
| `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem` | 4 | EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail |
| `OutSystemsUI_2_23.Content.BlankSlate` | 3 | CommunityBusinessDetails_CoomingSoon, InvalidPermissions, ShareObject |
| `OutSystemsUI_2_23.Utilities.TouchEvents` | 3 | LDM_MyEvents, LDM_MyEvents_V2, Photobook |
| `OutSystemsUI_2_23.Utilities.AlignCenter` | 3 | AssembleDetail, AssembleEvents, MessageList |
| `OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading` | 2 | EmailContact, EmailTarget |
| `OutSystemsUI_2_23.Utilities.SwipeEvents` | 2 | LDM_MyEvents, LDM_MyEvents_V2 |
| `OutSystemsUI_2_23.Interaction.RangeSlider` | 1 | ContactUsDetails |
| `OutSystemsUI_2_23.Interaction.DropdownSearch` | 1 | Profile |
| `OutSystemsUI_2_23.Content.Tag` | 1 | AssembleEvents |
| `OutSystemsUI_2_23.Content.Card` | 1 | MessageDetail |
| `OutSystemsUI_2_23.Interaction.DropdownTags` | 1 | EventBooklet |
| `OutSystemsUI_2_23.Adaptive.Columns4` | 1 | HostSurvey |
| `OutSystemsUI_2_23.Content.Accordion` | 1 | HostSurvey |
| `OutSystemsUI_2_23.Content.AccordionItem` | 1 | HostSurvey |
| `OutSystemsUI_2_23.Content.Tooltip` | 1 | HostSurvey |
| `OutSystemsUI_2_23.Content.FloatingContent` | 1 | Map |
| `OutSystemsUI_2_23.Interaction.Sidebar` | 1 | Map |
