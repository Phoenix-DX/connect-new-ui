# Exemption review after the sync wave (2026-11-07)

Decisions: Q9 a (DRIFT rules removed when fixed), Q10 b (unused rules removed after the wave), user "ok" 2026-11-07.
Method: a rule is unused when no `exemptionsUsed` of any `migration/screens/*/parity/*.json` names it after the
restamp of the 29 items and the full sweep. Every route with a capture has parity reports, so no rule of a route
without reports was removed. The rules are in git (`migration/parity-exemptions.json` before this commit).

Rules before: 146. Removed: 46. Kept: 100.

| Id | Kinds | Route regex | Reason (short) |
|---|---|---|---|
| CAPTURE-LOGO-REPLAY | layout,position | `-` | Sizes and offsets that follow from the logo replay: WelcomeToConnect and its children are sized by the 16x16 b |
| CAPTURE-LOADING-TRANSITION | class | `-` | The loading and offline captures were taken before the screen transition finished (no slide-from-right-enter-d |
| CAPTURE-LOGO-REPLAY-PINCODE | layout,position | `-` | Sizes and offsets that follow from the logo replay in the PIN keypad header (overlay variant): the white Conne |
| CAPTURE-LOGO-REPLAY-HOMEFEED | layout,position | `-` | The HomeFeed header logo is a broken 16x16 image in the replayed reference; the live capture rendered it 155x2 |
| CAPTURE-LOADING-FETCH-TIMEOUT | class,style,pseudo,layout,position | `-` | The loading capture held the TST requests until the OutSystems request timeout, so these blocks show their fet |
| SLIDER-LOADING-TIMEOUT | structure | `-` | In the loading capture the slider appears after SynchAppContext times out (10 s, AM:8579) and returns an empty |
| MYENT-D8B-IFRAME | structure,layout,position | `-` | Decision D8(b): the build shows the same-size mock iframe of the MyEntertaining embed; the TST capture's conne |
| CAPTURE-DATA-DRIFT-MESSAGELIST-READ | class | `-` | Capture data drift: the test account's messages were read on TST between the default capture (2026-10-14, 16 u |
| CAPTURE-DATA-DRIFT-MESSAGELIST-READ-BG | style | `-` | Capture data drift: the test account's messages were read on TST between the default capture (2026-10-14, 16 u |
| CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYLIST-SHEET | position | `-` | Follows from CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYLIST: the closed legend sheet is placed below the page conte |
| CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYDETAILS-LAYOUT | layout,position | `-` | Layout side of CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYDETAILS: the clone's loading skeleton cards make the conte |
| CAPTURE-LOADING-FETCH-TIMEOUT-HOUSEHOLDDETAILS-IMAGE | class | `-` | The loading capture held the TST requests until the OutSystems request timeout, so the household photo's GetSi |
| CAPTURE-MASKED-IMAGE-ONESCHOOLGLOBALDETAILS | layout,position | `-` | The school photo was masked by the capture (data-masked-src="user-image", src removed, TST rendered size 390x2 |
| CAPTURE-MASKED-IMAGE-SUPPERMEETING-GRID | style | `-` | Follows from CAPTURE-MASKED-IMAGE-SUPPERMEETING: the gallery rows are sized by the household cards, whose mask |
| CAPTURE-LOADING-FETCH-TIMEOUT-SUPPERMEETING | class | `-` | The loading capture held the TST requests until the OutSystems request timeout, so FetchContactDetails and Get |
| CAPTURE-LOADING-FETCH-TIMEOUT-HOUSEHOLD-MEMBERS | class | `-` | The loading capture held the TST requests until the OutSystems request timeout, so the household members lists |
| CAPTURE-MASKED-IMAGE-SMCAROUSEL-GRID | style | `-` | Follows from CAPTURE-MASKED-IMAGE-SMCAROUSEL on slide 1 only (11 households in capture and mock): the gallery  |
| CAPTURE-OFFSCREEN-SLIDE-SKELETON-SMCAROUSEL | class,text,style,pseudo,layout,position,structure | `-` | Off-screen slides 2 and 3 were snapshotted while SupperMeeting_DetailsBlock still showed GetSkeleton_UI_Subdiv |
| CAPTURE-LOADING-FETCH-TIMEOUT-HOUSEHOLDRELATIONS-IMAGES | class | `-` | The loading capture held the TST requests until the OutSystems request timeout, so GetSignedImagesInBulk for t |
| CAPTURE-MASKED-TEXT-HOUSEHOLDRELATIONS-NAME | position | `-` | The member name is centred (justify-content-center); the capture masked it as bullets ("•••••• ••••••"), the f |
| CAPTURE-LOADING-FETCH-TIMEOUT-SUPPERMEETING-ACTIONS | class | `-` | Same capture artifact as CAPTURE-LOADING-FETCH-TIMEOUT-SUPPERMEETING (which already covers the Notes button b6 |
| CAPTURE-OFFSCREEN-SLIDE-ACTIONS-SKELETON-SMCAROUSEL | style,pseudo | `-` | Follows from SupperMeeting_Carousel Q2 (answered by code: the default capture caught off-screen slides 2-3 mid |
| CAPTURE-OFFSCREEN-SLIDE-ACTIONS-SKELETON-CLASS-SMCAROUSEL | class | `-` | Same capture timing as CAPTURE-OFFSCREEN-SLIDE-ACTIONS-SKELETON-SMCAROUSEL: in the re-capture of 2026-10-29 th |
| CAPTURE-POPUP-SCROLL-CLASS-FLUSH-ORDER-ONESCHOOLGLOBALDETAILS | class | `/UBTConnect/OneSchoolGlobalDetails\b` | Timing artifact: the html popup-disable-scroll class at capture time depends on the order of OutSystems model  |
| CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL | layout,position | `^/UBTConnect/ContactByEmail(OneSchoolGlobal|Member)(\?|$)` | The capture serializer keeps only the attributes of KEEP_ATTR (tools/pipeline/capture.js:285), which drops `ro |
| CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL-GRID | style | `^/UBTConnect/ContactByEmail(OneSchoolGlobal|Member)(\?|$)` | The capture serializer keeps only the attributes of KEEP_ATTR (tools/pipeline/capture.js:285), which drops `ro |
| CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL-PSEUDO | pseudo | `^/UBTConnect/ContactByEmail(OneSchoolGlobal|Member)(\?|$)` | The capture serializer keeps only the attributes of KEEP_ATTR (tools/pipeline/capture.js:285), which drops `ro |
| CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL-PIXEL | pixel | `^/UBTConnect/ContactByEmail(OneSchoolGlobal|Member)(\?|$)` | The capture serializer keeps only the attributes of KEEP_ATTR (tools/pipeline/capture.js:285), which drops `ro |
| CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL-FOOTER | position | `^/UBTConnect/ContactByEmailMember(\?|$)` | Follows from CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL: the message text area is 81 px on TST (rows 3) but 60 px in |
| CAPTURE-LOADING-FETCH-TIMEOUT-MYBOOKMARKS | structure | `^/UBTConnect/MyBookmarks(\?|$)` | The loading capture held DataActionGetGroupSummaries until the module's 10 s request timeout (Connect2_MyBookm |
| CAPTURE-LOADING-FETCH-TIMEOUT-MYBOOKMARKS-PIXEL | pixel | `^/UBTConnect/MyBookmarks(\?|$)` | Pixel side of CAPTURE-LOADING-FETCH-TIMEOUT-MYBOOKMARKS: the capture shows the timeout toast over the header ( |
| CAPTURE-ANIMATE-PHASE-MYBOOKMARKS-NETWORKWARNING | style | `^/UBTConnect/MyBookmarks(\?|$)` | The offline capture photographed the NetworkWarning's Animate (top-to-bottom, normal) mid-animation (opacity 0 |
| CAPTURE-ANIMATE-PHASE-MYBOOKMARKS-NETWORKWARNING-POSITION | position | `^/UBTConnect/MyBookmarks(\?|$)` | Position side of CAPTURE-ANIMATE-PHASE-MYBOOKMARKS-NETWORKWARNING: the mid-animation translateY moves the card |
| CAPTURE-TEXTAREA-ROWS-CONTACTUSDETAILS | layout,position | `^/UBTConnect/ContactUsDetails(\?|$)` | TST renders TextArea_Message with rows=3 (ContactUsDetails.mvc.js:1102 textLines: 3; OutSystemsReactWidgets Te |
| CAPTURE-TEXTAREA-ROWS-CONTACTUSDETAILS-FOOTER | position | `^/UBTConnect/ContactUsDetails(\?|$)` | TST renders TextArea_Message with rows=3 (ContactUsDetails.mvc.js:1102 textLines: 3; OutSystemsReactWidgets Te |
| CAPTURE-TEXTAREA-ROWS-CONTACTUSDETAILS-PIXEL | pixel | `^/UBTConnect/ContactUsDetails(\?|$)` | TST renders TextArea_Message with rows=3 (ContactUsDetails.mvc.js:1102 textLines: 3; OutSystemsReactWidgets Te |
| LOADING-FRAME-CONNECTSHARE | structure | `ConnectShare` | PENDING ConnectShare Q4. The original creates the screen view only after OnInitialize ends (OutSystems.js:2, f |
| CAPTURE-MASKED-PHOTO-BOOKMARKSBYGROUP | layout,position | `^/UBTConnect/BookmarksByGroup(\?|$)` | The household photos were masked by the capture (data-masked-src="user-image", src removed; TST rendered 70x47 |
| CAPTURE-LOADING-FETCH-TIMEOUT-MYBOOKMARKS-PIXEL-F7B | pixel | `^/UBTConnect/MyBookmarks(\?|$)` | Replaces the detail range of CAPTURE-LOADING-FETCH-TIMEOUT-MYBOOKMARKS-PIXEL (^2[0-9]...), calibrated before t |
| CAPTURE-LOADING-FETCH-TIMEOUT-BOOKMARKSBYGROUP-PIXEL-F7B | pixel | `^/UBTConnect/BookmarksByGroup(\?|$)` | The merged ignoreSubtrees CAPTURE-LOADING-FETCH-TIMEOUT-BOOKMARKSBYGROUP(-TOAST) remove the structure diffs bu |
| CAPTURE-FOCUS-BADGE-SEARCH-LOADING-PIXEL | pixel | `^/UBTConnect/Search(\?|$)` | Two capture artifacts together pass the 0.20% pixel limit: (1) the search input is focused on ready (Input Foc |
| TAGS-TAGLIST-SCROLL-LOCALITYDETAILS | position | `^/UBTConnect/Locality_Details` | The plan step clicks a tag that sticks out of the 390 px tag row, so Playwright scrolls the row before the cli |
| MOCK-RELATIVE-DATES-EVENTDETAIL-DAYSELECTOR | text,layout,position | `^/UBTConnect/EventDetail(\?|$)` | The day digits of the conference days: the capture shows TST's real days of event 7301 (23, 24, 25), the mock  |
| TST-DRIFT-2026-11-05-HOUSEHOLDRELATIONS-BOOKMARK-BUTTON | class,style,attr,pseudo | `^/UBTConnect/Household_Relations(\?|$)` | Baseline of 2026-10-29 predates the TST change of 2026-11-05: the live HouseholdRelations_Block enables the Bo |
| TST-DRIFT-2026-11-05-HOUSEHOLDRELATIONS-BOOKMARK-PIXEL | pixel | `^/UBTConnect/Household_Relations(\?|$)` | Baseline of 2026-10-29 predates the TST change of 2026-11-05: the live HouseholdRelations_Block enables the Bo |
| CAPTURE-MASKED-TITLE-GUESTARRANGEMENTS-HEADER | layout | `^/UBTConnect/GuestArrangements(\?|$)` | The header title (In_EventName) was masked by the capture: its bullets fit one line, the fictional title of th |
