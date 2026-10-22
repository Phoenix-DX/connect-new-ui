# Feature-flag helpers (`UBTConnect_Utils.GetHas…`)

Evidence: compiled TST `/UBTConnect/scripts/UBTConnect_Utils.controller.js` and the survey sources (2026-10-14).
Each helper returns `HasAccess` of `Connect_OutSystems_PermissionCheck(<OutSystems_FF record>)` or
`Connect_LaunchDarkly_PermissionCheck(<LaunchDarkly_FF record>)`: a **per-user** flag.

The flag detection of the survey saw only `launchDarkly_FF.mobileDirectoryBookmarkNote`.
`flags.py scan` now detects `getHas…` calls (rule fixed 2026-10-14).
The table lists two more flags as (direct): the code checks them directly with a record.

| Helper | Flag | TST test account | Used in (flows / blocks) | Chooses between screens? |
|---|---|---|---|---|
| GetHasNewLDM | outSystems_FF.C2NewLDM | true | Calendar, Home, Legacy_LDMEventsFlow, Legacy_MyNotificationsFlow | yes: LDM V2 / V1 (D1) |
| GetHasNewBookmarks | outSystems_FF.C2NewBookmarks | true since 2026-10-21 (false on 2026-10-14; Bookmarks Q1) | App_Common, Directory_CommonBlocks, Directory_Locality | yes: Bookmarks / New_MyBookmarks / MyBookmarks (D2) |
| GetHasBookmarNote | launchDarkly_FF.mobileDirectoryBookmarkNote | false | Assemble, MyBookmarksFlow (+ bottom bar directly) | yes, with the above (D2) |
| GetHasNewNotifications | outSystems_FF.C2NewNotifications | false | App_NotificationIcon, MessageDetail | yes: bell → Notifications / MessageList (D11) |
| GetHasCarouselEnabled | outSystems_FF.C2EnableCarousel | true | 10 places: Directory_*, Home, Legacy_AssembleFlow | yes: HouseholdCarousel / HouseholdDetails |
| GetHasC1DirectoryView | outSystems_FF.C2EnableC1DirectoryView | true | App_Common (bottom bar), Directory_Locality | yes: Directory tab → CountryList / Locality_Details |
| GetHasMapsEnabled | outSystems_FF.C2EnableMaps | false | Directory_Locality | probably: access to Map |
| GetHasPhotobookAccess | launchDarkly_FF.mobilePhotobook | true | Directory_Household | probably: access to Photobook |
| GetHasOrbitAccess | launchDarkly_FF.mobileOrbitAccess | true | Legacy_OrbitEventsFlow, MyNotifications | probably: Orbit entry |
| GetHasOrbitEventBooklet | launchDarkly_FF.mobileOrbitEventBooklet | true | Orbit_ScreenBlocks | probably: EventBooklet |
| GetHasOrbitHostSurvey | launchDarkly_FF.mobileOrbitHostSurvey | true | MyNotifications, Orbit_ScreenBlocks | probably: HostSurvey |
| GetHasAssemble | launchDarkly_FF.mobileAssemble | true | MyNotifications | probably: Assemble entry |
| GetHasFeedEnabled | outSystems_FF.C2EnableFeed | true | Home | part of HomeFeed (Feed CMS embed) |
| GetHasCustomEvents | outSystems_FF.C2EnableCustomServices | true | Home | part of HomeFeed (services) |
| GetHasExtendedShare | outSystems_FF.C2ExtendedShare | true | 10 places: share UI | behaviour inside screens |
| GetHasDeceasedProfileAccess | launchDarkly_FF.mobileDirectoryUpdateFeedDeceasedProfile | true | MyNotifications, Share_UI | behaviour inside screens |
| GetHasPersonalEvents | outSystems_FF.C2EnablePersonalEvents | false | Calendar | MyCalendar personal events (deprecated area) |
| GetHasAncestry4thGenerationAccess | launchDarkly_FF.mobileHouseholdAncestry4thGen | true | not used by UBTConnect | — |
| GetHasHiddenMembersAccess | launchDarkly_FF.mobileHasHiddenMembersAccess | true | not used by UBTConnect | — |
| GetHasWalletAccess | constant `HasAccess = False` | false | Utility | — |
| (direct) | outSystems_FF.C2EnableSearchByBirthday | true | Directory_Search.ScreenBlock_Search (`Connect_OutSystems_PermissionCheck`) | behaviour inside Search (birthday search) |
| (direct) | launchDarkly_FF.mobileStudentInformation | true | OneSchoolGlobalDetails (`Connect_LaunchDarkly_PermissionCheck`) | section inside OneSchoolGlobalDetails |

In the "Chooses between screens?" column, "probably" means: the flow calls the helper, but the branch was not read yet.
Confirm it when the round reaches that flow.

TST values: `node migration/tools/flag_probe.cjs` on 2026-10-14 (read-only, no service call during the probe) →
`flag-values-tst.json`. PROD values are not known.

Navigation checks:
- The code opens HouseholdCarousel only when C2EnableCarousel is true (13/13 sites).
- HouseholdDetails has 28 sites. 16 of them are not behind that flag.
