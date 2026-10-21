### migration/screens/HomeFeed/route-spec.md

**Change 1**

Before:

> ## 0. Summary
> Home screen (V2 default screen, board reason). Under the home layout (logo, bell, search bar) it shows three feed
> sections: Services (carousel of service shortcuts, settings button), Community Population (shared block) and Updates
> (latest update items, "View all"), then the embedded Feed CMS (shared, D8 b) and the Leave App dialog. A Share sheet
> opens from an update item or a feed item. [pack.md Block plan; HF = sources/pretty/UBTConnect.Home.HomeFeed.mvc.js]

After:

> ## 0. Summary
> HomeFeed is the home screen (V2 default screen, board reason). The home layout has a logo, a bell and a search bar. Under the layout, the screen shows three feed sections:
> - Services: a carousel of service shortcuts and a settings button.
> - Community Population: a shared block.
> - Updates: the latest update items and "View all".
> 
> After the three sections, the screen shows the embedded Feed CMS (shared, D8 b) and the Leave App dialog. The Leave App dialog opens on back navigation [app-shell.spec.md, Dialog_ExitConfirmation]. The Share sheet opens in two cases, and only when the flag C2ExtendedShare is on:
> 1. The user selects Share in the menu of an update item (sections 9 and 13a).
> 2. The embedded Feed CMS sends a share event for a feed item (section 9).
> 
> When the flag is off, the Share sheet does not open (section 13a).
> 
> [pack.md Block plan; HF = sources/pretty/UBTConnect.Home.HomeFeed.mvc.js]

**Change 2**

Before:

> ## 1. Entry and routing
> - Default screen after sign-in / PIN (shell `signIn()` → HomeFeed) and bottom bar Home [docs/guides/shell.md].
> - No input parameters. Layout `Layout_HomePage` (SVGHeight "260px", ContentBackgroundColor Neutral4) [HF:150-153];
>   bottom bar `BottomBarMenu` ActiveItem Home, isRootPage True [HF:460-479]; CommonUI_InsideLayout in
>   `Placeholder_CommonUI_Inside_Layout` [HF:483-499]. No FixedFooter in this screen (none in dom/default.html).

After:

> ## 1. Entry and routing
> - The shell opens HomeFeed after sign-in or PIN (shell `signIn()` → HomeFeed). The user also opens HomeFeed with Home in the bottom bar [docs/guides/shell.md].
> - The screen has no input parameters. Layout `Layout_HomePage` has SVGHeight "260px" and ContentBackgroundColor Neutral4 [HF:150-153].
> - The bottom bar `BottomBarMenu` has ActiveItem Home and isRootPage True [HF:460-479].
> - CommonUI_InsideLayout is in `Placeholder_CommonUI_Inside_Layout` [HF:483-499].
> - The screen has no FixedFooter (none in dom/default.html).

**Change 3**

Before:

> ## 3. DOM and markup contract
> - Body class `phone portrait osx is-ltr`, body style `--header-size-content: 0px; --footer-height: 56px;
>   --viewport-height: 844px;` [states.json]; layout markup from Layout_HomePage [shared README].
> - Section wrappers [dom/default.html:122-130, 437-447, 481-552]: `OSBlockWidget Home.Section_FeedWrapper` with name ids
>   `Section_Services` / `Section_CommunityPopulation` / `Section_Updates`, then `App_Common_Blocks.Section` `b4-$b1`,
>   CustomContainer `b4-b1-$b1` classes `background-transparent padding-x-base padding-y-s margin-top-base` (Services),
>   `background-transparent padding-x-base padding-y-s` (Community), `background-neutral-0 padding-x-base padding-y-s
>   margin-top-s` (Updates); `<div id="b4-b1-Header">`, `<div id="b4-b1-Content"><div id="b4-Content">`.
> - Updates header [dom:487-534]: CustomContainer `margin-y-base` > Columns_Two (no gutter, reduce-last) > CustomText
>   `text-neutral-9 font-semi-bold font-size-base` "Updates" | IconText (row-reverse, gutter-base) icon
>   `connect-icon-arrow_right_alt text-neutral-8 icon-medium` + CustomText `text-neutral-7 font-semi-bold font-size-xs
>   text-underline` "View all".
> - FeedBlock_Services [dom:130-433]: CustomContainer `b5-DIV_Services` classes `ubt-services-carousel background-neutral-0
>   shadow-s border-radius-large padding-s`, inline style `background-color: rgba(var(--color-rgb-neutral-0),0.87)`;
>   Columns_Two `padding-x-s` gutter-s reduce-last align-items-center: CustomText `margin-left-s` "Services" | CircleButton
>   xs, border neutral-3, background neutral-0, icon `connect-icon-settings text-neutral-7 icon-base`; CustomContainer
>   `margin-top-xs` > Carousel `b5-Carousel_Services` (ubt-services-carousel, dots) > List `list list-group
>   ubt-services-carousel__list OSFillParent` (data-animation-disabled, data-virtualization-disabled) > per page Gallery
>   (3/3/3, `ubt-services-carousel__gallery`) > List `…__list-items` > per item SkeletonSection > CircleButton_WithLabel
>   (l, border neutral-3, background neutral-0, padding s or none for SVG_ icons) > Icon (IconId, display_36 or
>   NonStandard_64 for SVG_) + text Name. Then Dialog_GoExternalApp closed markup [dom:421-430].
> - FeedBlock_Updates [dom:550-918]: SkeletonSection `b9-$b1` > List `list list-group home-page--update-list
>   OSFillParent` (`data-list`, style `position: relative`, `list-error` when the fetch failed [dom/offline.html]) > per
>   item CustomContainer `overflow-hidden` + background `cyan-lightest` when unread, `border-s border-color-neutral-3
>   border-radius-large padding-x-base padding-y-xs margin-y-s` > Update_ListItem (shared) + (HasAccess False:
>   subscription container, not captured) + empty `<div data-container="">`.
> - Item ids follow the capture (`b5-l2-53_1-l2-100_<i>-…`, `b9-l1-89_<i>-…`).
> 
> ## 4. Visual specification
> Original CSS only (shell). Screen-specific classes all come from the shared/library blocks above; nothing added.
> Images: `img/UBTConnect.ConnectLogoWhite.svg` (captured, 155x25).
> 
> ## 5. Data model
> - `DataActionGetServices` out: `List` of Connect_Services (Id, Label, Order, IconId, …), `ExternalLinks_ElGusto`,
>   `ExterrnalPackages_{CommunityTradelink,HR100,Trove}` [contract]. Mapped to pages of ItemPerPage UI_ServiceItem
>   {Id, IconId, Name=Label, Order} [Services.mvc.js:825-900].
> - `DataActionFetchUpdates` out: `UI_UpdateItemList` of Connect_Updates_CS.UI_UpdateItem (Long ids as strings) [contract].
> - Screen variables: HasUpdates (True), IsScreenInitialized (False), ShareableUpdateItem, IsShareOpen, ShareableObjectId,
>   ShareObjectTypeId, ShareableFeedItem [HF:13-33].
> - Static entities (TST values, Q2 answered; `migration/knowledge/static-entities.md` "TST values"):
>   Connect_Services ids = record names (Orbit, LDM, MyCalendar, Assemble, OrbitAdmin, MyNotes, Trove, HR100,
>   CommunityTradelink, ElGusto, OneSchoolGlobal); Type_ShareObject Update = "Update", Feed = "Feed";
>   UBT_Icons.FeedItem = `connect-icon-feed`. In code: `components/staticEntities.ts`.
> 
> ## 6. API calls
> | # | Old call | Kind | Trigger | Inputs | Output used | Server side | React |
> |---|---|---|---|---|---|---|---|
> | 1 | `…/Home/FeedBlock_Services/DataActionGetServices` | Data action | load | screen variables (MainElementClass, Local_ServicesPerPage, ExternalAppPopUp_Id, Local_ExternalApp_PopUpInfo, ItemPerPage, ForceAddService) | List, links, packages | unknown | `callAction('UBTConnect','FeedBlock_Services/DataActionGetServices')`, recordedHandler (fixture re-recorded with the real Id and IconId, Q1) |
> | 2 | `…/Home/FeedBlock_Updates/DataActionFetchUpdates` | Data action | load | screen variables (CarouselPreloadedHouseholds) | UI_UpdateItemList | unknown | `callAction('UBTConnect','FeedBlock_Updates/DataActionFetchUpdates')`, fictional (person data) |
> | 3 | `…/ServiceAPIAction_UI_UpdateItem_MarkAsRead` | Server action | item click (HasAccess) / menu Mark as read | UpdateItemId | – | unknown | store mutation (P-MUTATION) |
> | 4 | `…/ServiceAPIAction_UI_UpdateItem_MarkAsUnread` | Server action | menu Mark as unread | UpdateItemId | – | unknown | store mutation |
> | 5-6 | FetchCount, GetFeedConfig | Data actions | load | – | – | – | shared blocks |
> | 7+ | SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation, GetNumberUnreadMessages, CacheableMapEntities, CacheableHouseholds | app start | load | – | – | – | shell |
> Observed: 1, 2, 5-7+ [calls.json]; 3-4 declared only.
> 
> ## 7. State and lifecycle
> - HomeFeed OnInitialize: IsScreenInitialized = False; OnReady: True (mounts Dialog_ExitConfirmation) [HF:700-830].
> - FeedBlock_Services OnInitialize: Local_ServicesPerPage = [page 1 with 5 empty items] (skeletons) [Services:820-835];
>   OnAfterFetch: clear; if ForceAddService append "Add Service" (addCircle, mandatory); split List into pages of
>   ItemPerPage (PageNumber 1..n) [Services:836-890].
> - FeedBlock_Updates OnInitialize: when the view is restored from cache and data is fetched, reads the preload object
>   (EntitiesCarousel_SwippedItems) and marks those items read [Updates:880-930]. OnReady: unless restored, appends 3
>   loading items (Birth, "Loadin Name", "Loadinf Location", today, MALE, read, access) [Updates:960-990]. OnAfterFetch:
>   empty list → Event_NoUpdates → HasUpdates = False (hides Section_Updates) [Updates:860-868, HF:735-745].
> 
> ## 8. Render logic
> ```
> Section_Updates if HasUpdates                                           [HF:315]
> Dialog_ExitConfirmation if IsScreenInitialized                          [HF:436]
> Services settings button if GetHasCustomEvents (C2EnableCustomServices) [Services:300-330]
> Service skeleton In_IsLoading = not fetched or fetch error              [Services:517]
> Updates skeleton In_IsLoading = not fetched and not fetch error         [Updates:157]
> Update item background cyan-lightest if not IsRead; subscription container if not HasAccess (not captured)
> ShareSheet placeholder: Update_ListItem if type Update; ShareableObject_Generic if type Feed [HF:554-640]
> ```
> States: default (data), loading (requests unanswered), offline (requests fail: list-error, loading items kept).

After:

> ## 3. DOM and markup contract
> - Body class `phone portrait osx is-ltr`. Body style `--header-size-content: 0px; --footer-height: 56px;
>   --viewport-height: 844px;` [states.json]. The layout markup comes from Layout_HomePage [shared README].
> - Section wrappers [dom/default.html:122-130, 437-447, 481-552]:
>   - Each wrapper is `OSBlockWidget Home.Section_FeedWrapper` with a name id: `Section_Services`, `Section_CommunityPopulation` or `Section_Updates`.
>   - Inside each wrapper are `App_Common_Blocks.Section` `b4-$b1` and CustomContainer `b4-b1-$b1`.
>   - Classes: `background-transparent padding-x-base padding-y-s margin-top-base` (Services), `background-transparent padding-x-base padding-y-s` (Community), `background-neutral-0 padding-x-base padding-y-s
>     margin-top-s` (Updates); `<div id="b4-b1-Header">` and `<div id="b4-b1-Content"><div id="b4-Content">` are inside the CustomContainer.
> - Updates header [dom:487-534]:
>   - CustomContainer `margin-y-base` holds Columns_Two (no gutter, reduce-last).
>   - The first column has CustomText `text-neutral-9 font-semi-bold font-size-base` "Updates".
>   - The second column has IconText (row-reverse, gutter-base). It has the icon `connect-icon-arrow_right_alt text-neutral-8 icon-medium` and CustomText `text-neutral-7 font-semi-bold font-size-xs text-underline` "View all".
> - FeedBlock_Services [dom:130-433]:
>   - CustomContainer `b5-DIV_Services` has the classes `ubt-services-carousel background-neutral-0
>     shadow-s border-radius-large padding-s`, inline style `background-color: rgba(var(--color-rgb-neutral-0),0.87)`.
>   - Columns_Two `padding-x-s` (gutter-s, reduce-last, align-items-center) has two columns. The first column has CustomText `margin-left-s` "Services". The second column has a CircleButton (xs, border neutral-3, background neutral-0, icon `connect-icon-settings text-neutral-7 icon-base`).
>   - CustomContainer `margin-top-xs` holds Carousel `b5-Carousel_Services` (ubt-services-carousel, dots). The Carousel holds List `list list-group
>     ubt-services-carousel__list OSFillParent` (data-animation-disabled, data-virtualization-disabled).
>   - Each page of the List has a Gallery (3/3/3, `ubt-services-carousel__gallery`). The Gallery has List `…__list-items`.
>   - Each item has SkeletonSection > CircleButton_WithLabel (l, border neutral-3, background neutral-0, padding s, or none for SVG_ icons).
>   - The CircleButton_WithLabel holds Icon (IconId, display_36 or NonStandard_64 for SVG_) + text Name.
>   - After these, the closed markup of Dialog_GoExternalApp follows [dom:421-430].
> - FeedBlock_Updates [dom:550-918]:
>   - SkeletonSection `b9-$b1` holds List `list list-group home-page--update-list
>     OSFillParent` (`data-list`, style `position: relative`, `list-error` when the fetch failed [dom/offline.html]).
>   - Each item is a CustomContainer with `overflow-hidden`, the background `cyan-lightest` when the item is unread, and `border-s border-color-neutral-3 border-radius-large padding-x-base padding-y-xs margin-y-s`.
>   - The CustomContainer holds Update_ListItem (shared), then the subscription container (only when HasAccess is False, not captured), then an empty `<div data-container="">`.
> - The item ids are the same as in the capture (`b5-l2-53_1-l2-100_<i>-…`, `b9-l1-89_<i>-…`).
> 
> ## 4. Visual specification
> The screen uses only the original CSS (shell). All screen-specific classes come from the shared/library blocks above. The route adds no class.
> Images: `img/UBTConnect.ConnectLogoWhite.svg` (captured, 155x25).
> 
> ## 5. Data model
> - `DataActionGetServices` output: `List` of Connect_Services (Id, Label, Order, IconId, …), `ExternalLinks_ElGusto` and `ExterrnalPackages_{CommunityTradelink,HR100,Trove}` [contract]. FeedBlock_Services maps the list to pages of ItemPerPage UI_ServiceItem {Id, IconId, Name=Label, Order} [Services.mvc.js:825-900].
> - `DataActionFetchUpdates` output: `UI_UpdateItemList` of Connect_Updates_CS.UI_UpdateItem (Long ids as strings) [contract].
> - The screen variables are HasUpdates (True), IsScreenInitialized (False), ShareableUpdateItem, IsShareOpen, ShareableObjectId, ShareObjectTypeId and ShareableFeedItem [HF:13-33].
> - Static entities (TST values, Q2 answered; `migration/knowledge/static-entities.md` "TST values"):
>   - The Connect_Services ids are the record names: Orbit, LDM, MyCalendar, Assemble, OrbitAdmin, MyNotes, Trove, HR100, CommunityTradelink, ElGusto, OneSchoolGlobal.
>   - Type_ShareObject: Update = "Update", Feed = "Feed".
>   - UBT_Icons.FeedItem = `connect-icon-feed`.
>   - The code is in `components/staticEntities.ts`.
> 
> ## 6. API calls
> | # | Old call | Kind | Trigger | Inputs | Output used | Server side | React |
> |---|---|---|---|---|---|---|---|
> | 1 | `…/Home/FeedBlock_Services/DataActionGetServices` | Data action | load | screen variables (MainElementClass, Local_ServicesPerPage, ExternalAppPopUp_Id, Local_ExternalApp_PopUpInfo, ItemPerPage, ForceAddService) | List, links, packages | unknown | `callAction('UBTConnect','FeedBlock_Services/DataActionGetServices')`, recordedHandler (fixture re-recorded with the real Id and IconId, Q1) |
> | 2 | `…/Home/FeedBlock_Updates/DataActionFetchUpdates` | Data action | load | screen variables (CarouselPreloadedHouseholds) | UI_UpdateItemList | unknown | `callAction('UBTConnect','FeedBlock_Updates/DataActionFetchUpdates')`, fictional (person data) |
> | 3 | `…/ServiceAPIAction_UI_UpdateItem_MarkAsRead` | Server action | item click (HasAccess) / menu Mark as read | UpdateItemId | – | unknown | store mutation (P-MUTATION) |
> | 4 | `…/ServiceAPIAction_UI_UpdateItem_MarkAsUnread` | Server action | menu Mark as unread | UpdateItemId | – | unknown | store mutation |
> | 5-6 | FetchCount, GetFeedConfig | Data actions | load | – | – | – | shared blocks |
> | 7+ | SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation, GetNumberUnreadMessages, CacheableMapEntities, CacheableHouseholds | app start | load | – | – | – | shell |
> Observed: calls 1, 2, 5-7+ [calls.json]. Declared only (not observed): calls 3-4.
> 
> ## 7. State and lifecycle
> - HomeFeed OnInitialize sets IsScreenInitialized = False. OnReady sets IsScreenInitialized = True, which mounts Dialog_ExitConfirmation [HF:700-830].
> - FeedBlock_Services OnInitialize sets Local_ServicesPerPage = [page 1 with 5 empty items] (skeletons) [Services:820-835].
> - FeedBlock_Services OnAfterFetch does these steps in order [Services:836-890]:
>   1. It clears Local_ServicesPerPage.
>   2. If ForceAddService is True, it appends the item "Add Service" (addCircle, mandatory).
>   3. It splits List into pages of ItemPerPage (PageNumber 1..n).
> - FeedBlock_Updates OnInitialize [Updates:880-930]: when the app restores the view from the cache and FetchUpdates already has its data, OnInitialize does these steps:
>   1. It reads the preload object (EntitiesCarousel_SwippedItems).
>   2. It marks those items as read.
> - FeedBlock_Updates OnReady [Updates:960-990]:
>   - When the app does not restore the view from the cache, OnReady appends 3 loading items.
>   - The loading items have these values: Birth, "Loadin Name", "Loadinf Location", today, MALE, read, access.
> - FeedBlock_Updates OnAfterFetch [Updates:860-868, HF:735-745]: when the list is empty, it raises Event_NoUpdates. Event_NoUpdates sets HasUpdates = False, which hides Section_Updates.
> 
> ## 8. Render logic
> ```
> Section_Updates if HasUpdates                                           [HF:315]
> Dialog_ExitConfirmation if IsScreenInitialized                          [HF:436]
> Services settings button if GetHasCustomEvents (C2EnableCustomServices) [Services:300-330]
> Service skeleton In_IsLoading = not fetched or fetch error              [Services:517]
> Updates skeleton In_IsLoading = not fetched and not fetch error         [Updates:157]
> Update item background cyan-lightest if not IsRead; subscription container if not HasAccess (not captured)
> ShareSheet placeholder: Update_ListItem if type Update; ShareableObject_Generic if type Feed [HF:554-640]
> ```
> States:
> - default: the requests return data.
> - loading: the requests get no answer.
> - offline: the requests fail. The List has list-error and the loading items stay.

**Change 4**

Before:

> ## 12. Strings
> "Services", "Updates", "View all", service labels (data), "Move to …", "You’re about to leave this app and open …. Are you
> sure you want to continue?", "Continue to …", "Cancel", "Coming soon" / "This feature will be coming soon.",
> "Send gift", "Subscription upgrade required", "Loadin Name", "Loadinf Location".
> 
> ## 13. Accessibility, platform and security notes
> - Native-only: OpenInApp_OpenApp (external apps) out of scope on the web apart from CR-HomeFeed-1.
> - Server actions MarkAsRead/MarkAsUnread need server-side authorization (item belongs to the user); HasAccess only hides UI.

After:

> ## 12. Strings
> The screen uses these strings:
> - "Services", "Updates", "View all".
> - The service labels (data).
> - "Move to …".
> - "You’re about to leave this app and open …. Are you sure you want to continue?"
> - "Continue to …", "Cancel".
> - "Coming soon" / "This feature will be coming soon."
> - "Send gift".
> - "Subscription upgrade required".
> - "Loadin Name", "Loadinf Location".
> 
> ## 13. Accessibility, platform and security notes
> - OpenInApp_OpenApp (external apps) works only in the native app. It is out of scope on the web, except for CR-HomeFeed-1.
> - The server actions MarkAsRead/MarkAsUnread need server-side authorization: the item must belong to the user. HasAccess only hides UI.

**Change 5**

Before:

> ## 15. Acceptance criteria
> 1. default, loading and offline states pass parity (DOM, styles, text, pixels, calls) at 390x844.
> 2. GetServices and FetchUpdates are called once on load with the original input names; MarkAsRead only on click.
> 3. View all → Updates_SingleList; settings → Services; update item → HouseholdCarousel with In_StartingHouseholdId.
> 4. Empty FetchUpdates hides Section_Updates; failure shows list-error with the loading items.
> 
> ## 16. Decisions to confirm
> - FetchUpdates mock: fictional items (person data), 3 unread items Birth / Marriage / Marriage with fictional names of the
>   captured lengths, HasAccess True, ShowImage False (captured shape).
> - MarkAsRead / MarkAsUnread mocked as mutations of a store collection (P-MUTATION), never recorded.
> - Service click by Id with the TST Connect_Services values (Q2): Orbit → OrbitLanding, LDM → LDM_MyEvents_V2, MyCalendar →
>   MyEntertaining, Assemble → AssembleEvents, OrbitAdmin → OrbitAdminLanding, MyNotes → Notes, Trove/HR100/CommunityTradelink
>   → GoExternalApp dialog, ElGusto → new tab, OneSchoolGlobal → "Coming soon" toast (section 9).
> - Service list and icons from the GetServices fixture re-recorded with the real Id and IconId (Q1, user 2026-10-15).
> - Item click sets the preload object and navigates to HouseholdCarousel (CR-HomeFeed-2 applied).
> - El Gusto opens in a new tab (U18, CR-HomeFeed-1 applied); GoToExternalApp OpenApp shows the "Not available" app toast in
>   the browser (CR-HomeFeed-1).
> - Lists rendered as the captured `div.list` markup inside the route (P-LIST names a shared list component that does not
>   exist yet).
> - Subscription-upgrade container (HasAccess False) rendered as NotCaptured with its compiled text and click.
> - Dialog_GoExternalApp open-state content (body, confirm label) inside NotCaptured; container with inline
>   `text-align: center` and the confirm row's FlexDirection Row left out (not captured).
> - The "Not available" toast of GoToExternalApp uses the Info type (the original passes
>   TextToInteger("Entities.UBT_MessageType.Error") = 0).
> - Bell count from the recorded ActionGetNumberUnreadMessages fixture (6). The capture showed 2 characters, i.e. "9+";
>   that is data recorded at another time, not markup (section 14 row 12).
> - Q3 answered A (user, 2026-10-15): the bottom-bar slider timing (default `-appear` class, loading slider) is a
>   capture-timing artifact (exemptions SLIDER-APPEAR-TIMING, SLIDER-LOADING-TIMEOUT); porting the OutSystems request
>   timeouts (10 s AppManager / 20 s data actions) into callAction is a foundation backlog item.
> - Exemptions accepted (user, 2026-10-15): CAPTURE-LOGO-REPLAY-HOMEFEED (+ -PIXEL), CAPTURE-LINK-HREF-CURSOR-HOMEFEED
>   (cursor only), CAPTURE-LOADING-FETCH-TIMEOUT (+ -PIXEL, loading only), CAPTURE-SKELETON-SHIMMER-PHASE,
>   FEED-CMS-D8B-IFRAME, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED (`right` only), SLIDER-APPEAR-TIMING, SLIDER-LOADING-TIMEOUT.
> 
> ## 17. Patterns used
> - P-DATA / P-CALLS / P-MOCKS: api.ts adapters for GetServices, FetchUpdates, MarkAsRead/Unread; mocks.ts.
> - P-MUTATION: read state of update items in `store.ts`.
> - P-STATES: skeletons, list-error, NotCaptured gaps.
> - P-DIALOG: Dialog_GoExternalApp (ActionConfirmationDialog), share sheet, feedback messages.
> - P-PARAMS: navigation with original parameter names.
> - P-BACK: view state (HasUpdates, IsScreenInitialized) and restored-from-cache check in FeedBlock_Updates.
> - P-FLAGS: useFlagOn for C2EnableCustomServices, C2ExtendedShare, C2EnableCarousel, C2NewLDM.
> - P-OSUI: Carousel and Gallery from src/shared/osui.
> - P-LIST: OS List markup (see 16).
> 
> ## 18. Builder notes
> Reference implementations: Login (P-PARAMS, P-STATES, P-DIALOG), AcceptPendingPolicies (P-DATA, P-MOCKS, P-MUTATION,
> P-CALLS, P-BACK).
> 
> ## 19. Parity
> `route.py parity HomeFeed --app http://localhost:5173`, 2026-10-15, after the last code change, with the exemptions the
> user accepted (section 16). Regression parity clean on Login, PINUnlock, PINRegister and Splash. Reports: `parity/<state>.json`.

After:

> ## 15. Acceptance criteria
> 1. The default, loading and offline states pass parity (DOM, styles, text, pixels, calls) at 390x844.
> 2. On load, the screen calls GetServices and FetchUpdates once, with the original input names. The screen calls MarkAsRead only on click.
> 3. A click on View all goes to Updates_SingleList. A click on settings goes to Services. A click on an update item goes to HouseholdCarousel with In_StartingHouseholdId.
> 4. An empty FetchUpdates result hides Section_Updates. A failed FetchUpdates call shows list-error with the loading items.
> 
> ## 16. Decisions to confirm
> - FetchUpdates mock: fictional items (person data). It has 3 unread items, Birth / Marriage / Marriage, with fictional names of the captured lengths. HasAccess is True and ShowImage is False (captured shape).
> - The mock turns MarkAsRead / MarkAsUnread into mutations of a store collection (P-MUTATION). The mock never records them.
> - A click on a service item goes by Id, with the TST Connect_Services values (Q2) (section 9):
>   - Orbit → OrbitLanding.
>   - LDM → LDM_MyEvents_V2.
>   - MyCalendar → MyEntertaining.
>   - Assemble → AssembleEvents.
>   - OrbitAdmin → OrbitAdminLanding.
>   - MyNotes → Notes.
>   - Trove/HR100/CommunityTradelink → GoExternalApp dialog.
>   - ElGusto → new tab.
>   - OneSchoolGlobal → "Coming soon" toast.
> - The service list and the icons come from the GetServices fixture. The fixture is re-recorded with the real Id and IconId (Q1, user 2026-10-15).
> - A click on an update item sets the preload object and goes to HouseholdCarousel (CR-HomeFeed-2 applied).
> - El Gusto opens in a new tab (U18, CR-HomeFeed-1 applied). In the browser, GoToExternalApp OpenApp shows the "Not available" app toast (CR-HomeFeed-1).
> - The route renders the lists as the captured `div.list` markup. P-LIST names a shared list component that does not exist yet.
> - The subscription-upgrade container (HasAccess False) renders as NotCaptured, with its compiled text and click.
> - The open-state content of Dialog_GoExternalApp (body, confirm label) is inside NotCaptured. The route leaves out these items (not captured): the container with inline `text-align: center` and the FlexDirection Row of the confirm row.
> - The "Not available" toast of GoToExternalApp uses the Info type. The original passes TextToInteger("Entities.UBT_MessageType.Error") = 0.
> - The bell count comes from the recorded ActionGetNumberUnreadMessages fixture (6). The capture showed 2 characters, i.e. "9+". That is data recorded at another time, not markup (section 14 row 12).
> - Q3 answered A (user, 2026-10-15): the bottom-bar slider timing (default `-appear` class, loading slider) is a capture-timing artifact (exemptions SLIDER-APPEAR-TIMING, SLIDER-LOADING-TIMEOUT). Porting the OutSystems request timeouts (10 s AppManager / 20 s data actions) into callAction is a foundation backlog item.
> - Exemptions accepted (user, 2026-10-15):
>   - CAPTURE-LOGO-REPLAY-HOMEFEED (+ -PIXEL).
>   - CAPTURE-LINK-HREF-CURSOR-HOMEFEED (cursor only).
>   - CAPTURE-LOADING-FETCH-TIMEOUT (+ -PIXEL, loading only).
>   - CAPTURE-SKELETON-SHIMMER-PHASE.
>   - FEED-CMS-D8B-IFRAME.
>   - CAPTURE-BADGE-MASKED-TEXT-HOMEFEED (`right` only).
>   - SLIDER-APPEAR-TIMING.
>   - SLIDER-LOADING-TIMEOUT.
> 
> ## 17. Patterns used
> - P-DATA / P-CALLS / P-MOCKS: api.ts has the adapters for MarkAsRead/Unread, GetServices and FetchUpdates; mocks.ts has the mocks.
> - P-MUTATION: `store.ts` keeps the read state of update items.
> - P-STATES: the screen has skeletons, list-error and NotCaptured gaps.
> - P-DIALOG: Dialog_GoExternalApp (ActionConfirmationDialog), the share sheet and the feedback messages use this pattern.
> - P-PARAMS: navigation uses the original parameter names.
> - P-BACK: view state (HasUpdates, IsScreenInitialized). FeedBlock_Updates has the restored-from-cache check.
> - P-FLAGS: the screen uses useFlagOn for C2EnableCustomServices, C2ExtendedShare, C2EnableCarousel and C2NewLDM.
> - P-OSUI: Carousel and Gallery come from src/shared/osui.
> - P-LIST: the screen uses the OS List markup (see 16).
> 
> ## 18. Builder notes
> The reference implementations are Login (P-PARAMS, P-STATES, P-DIALOG) and AcceptPendingPolicies (P-DATA, P-MOCKS, P-MUTATION, P-CALLS, P-BACK).
> 
> ## 19. Parity
> The command `route.py parity HomeFeed --app http://localhost:5173` ran on 2026-10-15, after the last code change. It used the exemptions that the user accepted (section 16). The regression parity is clean on Login, PINUnlock, PINRegister and Splash. The reports are in `parity/<state>.json`.

