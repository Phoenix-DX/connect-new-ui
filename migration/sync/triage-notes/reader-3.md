# Triage notes, reader 3 (2026-11-07)

Parity direction in the reports: expected = fresh capture, actual = React. The diffs carry no data-block id in most paths (the
`data-block` names are in the path text); the old parity reports (commit 2fe9efaf) were clean (`counts` empty) for all ten routes,
so no class D was found. Shared-component @origin lookup: `grep -rl "@origin.*<Block>" app/src`.

## HouseholdCarousel
- Class: mixed (A+C)
- Size: L (default 88 diffs; offline 277 diffs; loading 0)
- TST files changed since the capture: TagContent, CW_Share.ShareSheet, Directory_Caroussel.EntitiesCarousel_Element, Directory_CommonBlocks.Directory_EntityDetailsActions, Directory_Household.HouseholdDetails_Block, ConnectPatterns.HorizontalTagList, CW_CTA_PopUps.ContactByMessage_Wrapper
- DOM diff: default.html +1851/-1827, offline.html +1067/-999; same blocks appear on both sides (BasePatterns.CustomText, IconInline_Internal, EntitiesCarousel_Element, CustomContainer), moved/re-nested; new lines include `connect-icon-person-fill text-cyan-darker icon-non-standard-32` icons and `connect-icon-home`, a `padding-top-base` text container in offline.
- Parity diffs: default layout 70, class 6, style 6, structure 3, position 3; pixel ratio 0.0003. Examples: layout `...LazyImage_Placeholder.ubt-image-card--lazy-image-placeholder` 390×26 → 390×260; class `...Placeholder_LoadingSection` missing `.ubt-skeleton-section`; style avatar img `display none → flex; max-height 0px → 52px`. Offline: layout 164, structure 52, position 36, text 8, class 12, style 4; e.g. `TagToggle` "missing in build", text "Example & Example" → "Household gallery", layout 358×31 → 0×0.
- Calls: changed (calls.json +184 lines); parity calls expected 35, actual 58 (viaAppStartSkipped list of 7 start actions).
- Data drift signs: offline title text changed ("Example & Example" vs React "Household gallery"); tag row (TagToggle) present in the capture, missing in React.
- Artefact signs: lazy-image placeholder and skeleton classes in the default capture (390×26 vs 390×260; `.hidden` avatar images) = loading phase caught; known exemptions listed in triage: CAPTURE-SKELETON-SHIMMER-PHASE, CAPTURE-VIA-USERINFO-HOUSEHOLDCAROUSEL-POPUP, CAPTURE-POPUP-SCROLL-CLASS-FLUSH-ORDER-DIRECTORY-ACTIONS.
- React code touched by the diff paths: app/src/pages/HouseholdCarousel/HouseholdCarouselPage.tsx; components/directory/EntitiesCarouselElement/EntitiesCarouselElement.tsx; components/ui/HorizontalTagList/HorizontalTagList.tsx; components/ui/TagToggle/TagToggle.tsx
- Shared: app/src/components/directory/EntitiesCarouselElement/EntitiesCarouselElement.tsx; app/src/components/ui/HorizontalTagList/HorizontalTagList.tsx; app/src/components/ui/TagToggle/TagToggle.tsx
- Unsure: how much of the 88/277 diffs is skeleton phase (C) and how much is the new markup of EntitiesCarousel_Element / HouseholdDetails_Block (A); the offline state of the capture has more content than React (A or capture of a cached state).

## OrbitLanding
- Class: B (+C)
- Size: M (22 diffs per state in default and popup states; offline 0)
- TST files changed since the capture: none
- DOM diff: default.html +10/-56; the Orbit event card list (`Orbit_Blocks.Card_Event`, ~46 lines) and 2 `orbit-household-member-list-item` rows removed; masked texts changed length; one `fa-flag` menu icon added; body `--footer-height` 56px → 46.875px.
- Parity diffs: default layout 10, position 5, structure 5, style 1, pixel 1 (ratio 0.039); the same 22 in popup-filters, popup-filters-closed and popup-sort (21). Examples: structure `i.fa.fa-2x.fa-flag` "missing in build"; structure `div.orbit-household-member-list-item` "extra in build"; layout HeaderRight 42×29 → 36×0.
- Calls: not changed (9 expected, 9 actual).
- Data drift signs: capture notes say the `default` account has no Orbit event (`NoInformation_Orbit`); fewer household-member rows; the event card list is gone in the capture but React still renders it.
- Artefact signs: header layout/position diffs (33×0 → 36×0, HeaderRight 42×29 → 36×0) may come from the icon/skeleton phase; footer height change; triage exemptions ORBITLANDING-POPUP-TOP-AND-RADIO-CHECKED, ORBITLANDING-SKELETON-SHIMMER-PHASE-OFFLINE.
- React code touched by the diff paths: app/src/pages/OrbitLanding/OrbitLandingPage.tsx
- Shared: -
- Unsure: whether the header icon (`fa-flag`, MenuIcon area) difference is data (account) or a capture phase.

## LegacyShareObject
- Class: B
- Size: M (50 diffs: 49 structure + 1 pixel)
- TST files changed since the capture: none
- DOM diff: default.html +3/-1816 lines: the list of `border-neutral-4 border-radius-soft margin-bottom-s` items is gone (old capture had the list, new has 0 items); a few masked texts shortened ("Locality Members" → masked).
- Parity diffs: default structure 49 (all "extra in build" `div.border-neutral-4.border-radius-soft.margin-bottom-s` under `.share-with-input > div.OSFillParent.list.list-group`), pixel 1 (ratio 0.083); loading and offline 0.
- Calls: not changed (11 expected, 11 actual).
- Data drift signs: list item count old (many) → 0 in the capture; React still renders 49 items.
- Artefact signs: none sure; triage exemptions listed for this route: CAPTURE-MASKED-IMAGE-LEGACYSHAREOBJECT, CAPTURE-SHIMMER-PHASE-LEGACYSHAREOBJECT-LOADING-ITEM, CAPTURE-LOADING-BODYCLASS.
- React code touched by the diff paths: app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx
- Shared: -
- Unsure: whether the empty list is an account/data fact or a capture in which the list had not loaded (no loading class found in the DOM diff).

## Bookmarks
- Class: mixed (A+B)
- Size: M (default 41 diffs; offline 2)
- TST files changed since the capture: FilterSheet, FilterSheet_Icon_Label, ItemCardActions, Bookmarks.Bookmarks, Bookmarks_Card_Item, Bookmarks_Card_List, AvatarImage, Horizontal_Filter_TagList, ItemCard_WithNotes
- DOM diff: default.html +297/-854; most lines are block-id renumbering (`$b3` → `$b6`, `$b4` → `$b7`: new blocks were inserted in the header before the notification icon and search input); the filter tags order changed: old "All, Households, Assemble, Interchange, Members, Orbit", new "All, Assemble, Households, Interchange, Members, Orbit"; the card list is replaced by the empty-list block.
- Parity diffs: default layout 29, text 8, structure 2, position 1, pixel 1 (ratio 0.18). Examples: text `TagToggle > span` "Assemble" → "Households"; layout `TagToggle` 100×31 → 114×31; structure `EmptyListBorderless` "missing in build"; structure `div.OSFillParent.list.list--gap-s` "extra in build". Offline: text 2.
- Calls: changed (calls.json 20 lines); parity expected 8, actual 10.
- Data drift signs: the `default` account has an empty Bookmarks list (capture notes); React renders list items.
- Artefact signs: triage exemptions CAPTURE-SKELETON-SHIMMER-PHASE, SLIDER-APPEAR-TIMING, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED.
- React code touched by the diff paths: app/src/pages/Bookmarks/BookmarksPage.tsx; components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx; components/ui/TagToggle/TagToggle.tsx; components/ui/EmptyState/EmptyState.tsx
- Shared: app/src/components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx; app/src/components/ui/TagToggle/TagToggle.tsx; app/src/components/ui/EmptyState/EmptyState.tsx
- Unsure: the tag order change may come from the TST code (Horizontal_Filter_TagList changed) or from a sort by localized name; not settled.

## ContactByEmailMember
- Class: A
- Size: S (default 16 diffs, offline 16; one layout block)
- TST files changed since the capture: ContactFlow.ContactByEmailMember
- DOM diff: default.html +2/-2: `ubt-layout-detail--primary` added to the `Layout_DetailPage` wrapper; header title `text-align-left` → `text-align-center`.
- Parity diffs: default and offline identical: class 2, style 10, pseudo 2, position 1, pixel 1 (ratio 0.059). Examples: class LayoutWrapper_Detail "missing .ubt-layout-detail--primary"; style header color rgb(255,255,255) → rgb(39,43,48), background transparent+gradient → white; class title "missing .text-align-center extra .text-align-left"; position title span offset 103,2 → 0,2.
- Calls: changed in calls.json (14 lines); parity expected 4, actual 7 (start actions).
- Data drift signs: none
- Artefact signs: none
- React code touched by the diff paths: app/src/pages/ContactByEmailMember/ContactByEmailMemberPage.tsx
- Shared: app/src/components/layout/DetailLayout/DetailLayout.tsx; app/src/containers/DetailLayout/DetailLayoutContainer.tsx (@origin Layouts.Layout_DetailPage; the page passes a variant, other ContactByEmail* routes use the same layout)
- Unsure: whether `ubt-layout-detail--primary` is set by a page parameter or by the screen block only (the fix could stay in the page).

## CountryList
- Class: mixed (A+B)
- Size: M (default 15 diffs; offline 6)
- TST files changed since the capture: Directory_Locality.CountryList, CacheControl_UserInfo
- DOM diff: default.html +142/-28: block `Home.FeedBlock_CommunityPopulation` ("Community Population") replaced by `Directory_CommonBlocks.Directory_CommunityNumbers` ("COMMUNITY BY THE NUMBERS" card with SVG CommunityMembers icon); container class `padding-top-base` → `margin-top-base`; counts 5 → 7 Supper Meetings, 29 → 28 Localities; masked text widths changed.
- Parity diffs: default class 1, style 1, structure 2, text 5, position 4, pixel 1 (ratio 0.42), call 1. Examples: structure `Directory_CommunityNumbers` "missing in build"; structure `Home.FeedBlock_CommunityPopulation` "extra in build"; style `b17-Content` margin-top 16px → 0, padding-top 0 → 16px; text "73" → "74". Offline: position 1, class 1, style 1, structure 2, pixel 1.
- Calls: changed: `DataActionGetCommunityStatistics` and `FeedBlock_CommunityPopulation/DataActionFetchCount` replaced; `DataActionGetCountriesStatistics` kept/moved (calls.json 37 lines); parity expected 9, actual 10 (call diff 1).
- Data drift signs: counts 73 → 74 (country row), 28 → 29, 5 → 7 supper meetings.
- Artefact signs: SLIDER-APPEAR-TIMING, CAPTURE-SKELETON-SHIMMER-PHASE in triage list (bottom sheet position diff `-2293 → -2013`).
- React code touched by the diff paths: app/src/pages/CountryList/CountryListPage.tsx; components/feed/CommunityPopulation/CommunityPopulation.tsx
- Shared: app/src/components/feed/CommunityPopulation/CommunityPopulation.tsx (@origin Home.FeedBlock_CommunityPopulation; no React component with @origin Directory_CommunityNumbers found)
- Unsure: whether other routes use `Directory_CommunityNumbers` (not in my group; CountryDetails/Locality routes may).

## AssembleDetail
- Class: mixed (B+A)
- Size: M (default 12 diffs; offline 4)
- TST files changed since the capture: none
- DOM diff: default.html +158/-28: event type text "Reading" instead of a masked title; the virtual-meeting row `Assemble.AssembleCommon_VirtualMeetingURL` ("Link is not available, refer to local signal chat" + info popup) replaced by an address row (`a#Link_Address`, `connect-icon-place`) with a new `AssembleSummary_Card_Row`; masked widths changed.
- Parity diffs: default position 1, text 2, layout 3, structure 4, pixel 1 (0.022), call 1. Examples: text title "Reading" → "Prayer Meeting"; text card header "Reading - Saturday" → "Prayer Meeting - Saturday"; structure `a#Link_Address` "missing in build"; structure `AssembleCommon_VirtualMeetingURL` "extra in build"; structure `DIV_SubdivisionSpecialAttendee__Content`, `Section_GSMContacts` section differences. Offline: text title "Reading" → "" (1 text, 1 layout, 1 position).
- Calls: changed (+30 lines): new `ActionGetMemberContactByCacheKey`, `ActionGetSignedPhotosInBulk` (Connect2_LegacyShared); parity expected 4, actual 9.
- Data drift signs: a different event (type, location instead of virtual link, extra sections); capture group is `global#10`.
- Artefact signs: triage exemptions CAPTURE-2026-11-06-ASSEMBLEDETAIL-MASKED-DESCRIPTION-WIDTH, -MASKED-ROW-MARGIN, -OFFLINE-EMPTY-TITLE.
- React code touched by the diff paths: app/src/pages/AssembleDetail/AssembleDetailPage.tsx; shared Assemble summary card blocks
- Shared: - (no @origin match found for Assemble.AssembleSummary_Card_Row or AssembleCommon_VirtualMeetingURL under app/src)
- Unsure: whether the new calls come from a TST code change that is not in the drift file (no changed file lists this route) or from the account/event.

## LDM_EventDetail_V2
- Class: B (+A?)
- Size: S (8 diffs, host card and one section)
- TST files changed since the capture: none
- DOM diff: default.html +197/-8: host card now has a photo (`event-detail-photo` with background-image instead of `event-detail-photo-blank` + users icon), host row with border-bottom, an address block with "Directions" button (`event-detail-hostcard-address`), a "Guest Households" section (`EventDetail_Section`, `Detail_GuestsHouseholds`); old text "Host Allocation Pending" replaced by a masked host name.
- Parity diffs: default structure 3, class 1, style 2, layout 1, pixel 1 (ratio 0.155). Examples: structure `event-detail-hostcard-address` "missing in build"; class `event-detail-photo` "missing .event-detail-photo extra .event-detail-photo-blank"; layout title span 82×17 → 129×17; structure `Detail_GuestsHouseholds` "missing in build". Offline 0.
- Calls: parity expected 3, actual 10 (start actions skipped list); calls.json +6 lines only.
- Data drift signs: the event in the capture has a host, address and guests (the old one had "Host Allocation Pending"); capture account `global#1`.
- Artefact signs: CAPTURE-MASKED-TEXT-LDM-EVENTDETAIL-V2-BANNER, CAPTURE-LINK-HREF-CURSOR-LDM-EVENTDETAIL-V2 in triage list.
- React code touched by the diff paths: app/src/pages/LDM_EventDetail_V2/components/EventDetail_HostCard.tsx; the page's mock data
- Shared: -  (EventDetail_HostCard is inside the page folder)
- Unsure: React already has an address/guest branch (to check in the mock: data of a state with a host); not read.

## Assemble_BrowseByCountry
- Class: B
- Size: S (3 text diffs + pixel)
- TST files changed since the capture: none
- DOM diff: default.html +3/-3: counts 74 → 73, 74 → 73, 29 → 28.
- Parity diffs: default text 3, pixel 1 (ratio 0.0002). Examples: text `locality-info-container.width37-5 > span` "73" → "74"; `width25` "28" → "29".
- Calls: not changed (9/9).
- Data drift signs: country statistics counts dropped by one (73, 28) in the capture; React mock has the old values.
- Artefact signs: SPINNER-ROTATION-PHASE in the triage list.
- React code touched by the diff paths: app/src/pages/Assemble_BrowseByCountry/Assemble_BrowseByCountryPage.tsx (mock counts)
- Shared: -
- Unsure: none

## AssembleEvents
- Class: B
- Size: S (3 text diffs)
- TST files changed since the capture: none
- DOM diff: default.html +21/-21: list item ids `l1-97_n` → `l1-95_n` (renumbering), counts 74 → 73 (two places), 29 → 28, one masked text shortened.
- Parity diffs: default text 3; examples same as Assemble_BrowseByCountry: "73" → "74", "28" → "29". Other states 0.
- Calls: not changed (11/11).
- Data drift signs: counts as above; the sheet list has the same country counts.
- Artefact signs: CAPTURE-MASKED-COUNT-WIDTH-ASSEMBLEEVENTS-SHEET, SPINNER-ROTATION-PHASE, CAPTURE-LINK-HREF-CURSOR-ASSEMBLEEVENTS in the triage list.
- React code touched by the diff paths: app/src/pages/AssembleEvents/AssembleEventsPage.tsx (mock counts)
- Shared: -
- Unsure: whether the counts come from a shared statistics mock (Assemble_BrowseByCountry and CountryList show the same 73/74 and 28/29 values); if so one data fix covers three routes.

## Summary
HouseholdCarousel | A+C | L | yes (EntitiesCarouselElement, HorizontalTagList, TagToggle)
OrbitLanding | B | M | no
LegacyShareObject | B | M | no
Bookmarks | A+B | M | yes (Horizontal_Filter_TagList, TagToggle, EmptyState)
ContactByEmailMember | A | S | yes (DetailLayout)
CountryList | A+B | M | yes (CommunityPopulation / new Directory_CommunityNumbers)
AssembleDetail | B+A | M | no
LDM_EventDetail_V2 | B | S | no
Assemble_BrowseByCountry | B | S | no
AssembleEvents | B | S | no
