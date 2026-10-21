# Route spec: Menu

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/Menu` with inputs none [pack.md:3] |
| Tier | lite |
| Captured | 2026-10-15, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | Layout_DetailPage, CustomContainer, CustomText, SkeletonSection, Columns_Two, UBT_LazyImage, Menu_List, Version, BottomBarMenu, CommonUI_InsideLayout, Dialog_CustomChoice, CacheControl_UserInfo_Wrapper (`app/src/shared/**`), OSLink (`shared/lib`), shell `confirmAction`, `showFeedbackMessage`, `signOut`, `useOsNavigate` |
| Screen-specific components | `components/staticEntities.ts` (Connect_Menu_Items, menu icons, Heading5), `components/actions.ts` (Menu_GetList) |

## Specification
### Structure
Screen root (Menu.mvc.js view :135-705): Layout_DetailPage `$b1` (In_AlignTitleLeft True) with
- title: CustomText `$b2` "Menu" (Neutral0, Heading5, SemiBold) [view :135-175; dom/default.html:22-30];
- content: CustomContainer `$b3` (`full-height`, flex, space-between, column) [view :176-215]. It holds three parts in
  this order:
  1. Container > SkeletonSection `$b4` (In_IsLoading = not isFetched) > CustomContainer `Header` (padding y Small,
     x Base) > Columns_Two `$b6` (ReduceFirst, spacing Base) [view :216-439; dom:44-105]:
     - left: UBT_LazyImage `$b7` (EntityId = MemberID, Small_40 × Square, Member, ImageURL = Member.Photo.SignedURL);
     - right: Container > CustomText `$b8` (FullName; Neutral9, Base, SemiBold) + Link > CustomText `$b9`
       "Edit your account" (Primary, ExtraSmall, SemiBold, underlined).
  2. Menu_List `$b10` (In_MenuSection.MenuOptions = MenuOptionList) [view :440-469; dom:106-420].
  3. CustomContainer `$b11` (margin y Small, Neutral7 DoubleExtraSmall, flex centred) > Version `$b12`
     [view :470-545; dom:428-445];
- bottom: BottomBarMenu `$b13` (ActiveItem Menu, isRootPage True) [view :550-570];
- CommonUI: CommonUI_InsideLayout `$b14` [view :571-590].
Siblings of the layout [view :600-705; dom:686-711]:
- Dialog_CustomChoice `PopUp_Logout` ("Logout" / "Are you sure you wish to logout?" / "Yes" / "No").
- CacheControl_UserInfo_Wrapper `$b16` (Result → CacheControl_UserInfo_WrapperResult).
- Dialog_CustomChoice `Popup_SubmitPhotoRequest` ("Photo Request?" / "Are you sure you wish to request a photo update?" /
  "Submit" / "Cancel").

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Menu_GetList | client action (UBTConnect_Utils) | OnInitialize [controller :881-919] | none | 6 Menu_Item rows (PIN & Biometrics/password, Contact Us/help, Subscription and Payments/shopping_basket, Request Photo Update/image_gallery, Terms & Policies/book_open, Log out/logout) [Services sources UBTConnect_Utils.controller.js:4129-4205] | none (local) | n/a |
| CacheControl_UserInfo/DataActionGetCacheInfo | data action of the shared block | CacheControl_UserInfo_Wrapper [calls.md #3] | (block) | Directory_UserCurrent | shell mock user | shell mock; `householder` (Q1) |
| ActionRequestPhotoUpdate | server action | OnClick_MenuOption(RequestPhotoUpdate) after confirm [controller :1008-1031] | none | Out_IsSuccess (not read) | not captured (write) | fictional `{Out_IsSuccess: true}` (Q2) |
| ActionGet_RuntimeVersion and app-start calls | shared / shell | Version, app start [calls.md #1-8] | | | shell / shared mocks | |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize | MenuOptionList = Menu_GetList mapped: Id, IconId, Label; IconRightText "Dummy" and IconRightLoading for Subscription and Payments; IsLoading for Request Photo Update [controller :881-919] | Menu_GetList | | |
| CacheControl_UserInfo_Wrapper | Result(UserInformation) | Subscription row: IconRight OpenNew, IconRightText = SubscriptionType, IconRightLoading False; user = UserInformation; isFetched True; Request Photo Update row: IsLoading False, removed when not (isHouseholder or SpouseIsHouseholder) [controller :795-880] | | | |
| Link "Edit your account" | OnClick | if isFetched [controller :920-948] | | `/UBTConnect/Profile` | |
| Menu_List | OnClick_MenuOption(Id) | Log out → Action_Logout: ConfirmAction(PopUp_Logout) → Connect_Logout → HomeFeed (Fade) [:747-794, :970]; Contact Us / Terms & Policies / PIN & Biometrics → screen [:978-995]; Subscription and Payments → if isFetched OpenInApp_OpenExternalLink(SubscriptionManageLink, True) [:996-1005]; Request Photo Update → ConfirmAction(Popup_SubmitPhotoRequest) → RequestPhotoUpdate → message [:1008-1031]; else message "Go to " + Id (Info) [:1035] | ActionRequestPhotoUpdate | ContactUsMenu, TermsAndPoliciesMenu, PINBiometricsMenu, HomeFeed | "Your update photo request has been submitted." (Success) |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | user info fetched (householder account) | dom/default.html | `real` (Q1: `householder`) |
| loading | user info not fetched: skeleton header, Subscription right side and Request Photo Update row skeletons, "Dummy" text | dom/loading.html | `loading` |
| offline | calls fail: same as loading | dom/offline.html | `error` |

## Patterns used
- P-STATES: loading/offline from `isFetched` (SkeletonSection), no extra state.
- P-DATA / P-CALLS: `api.ts` `requestPhotoUpdate()` through `callAction('UBTConnect', 'ActionRequestPhotoUpdate')` on the confirm.
- P-MOCKS: `mocks.ts` fictional RequestPhotoUpdate answer; `householder` scenario (Q1).
- P-DIALOG: Dialog_CustomChoice opened with the shell `confirmAction(id)`; `showFeedbackMessage` for the success/info messages.
- P-PARAMS: `useOsNavigate` with the original paths (no inputs).
- P-LIST: through the shared Menu_List (OSList inside).

## Feature flags
- `connect_LaunchDarkly_PermissionCheck`, `App_PIN_BiometricEnabled`: not flags (user, 2026-10-14); the screen does not read them.
- `C2EnableC1DirectoryView` (on), `C2NewBookmarks` (off), `mobileDirectoryBookmarkNote` (off): default-only (user, 2026-10-14); read only inside the shared BottomBarMenu; nothing in this route.

## Unclear points
- Default state needs a householder mock user (TST account) → Q1 (answered A, user 2026-10-15) [questions.md Q1]
- Uncaptured branches (dialogs, row clicks, RequestPhotoUpdate answer, transitions) → Q2 (answered A, user 2026-10-15) [questions.md Q2]

## Decisions to confirm
- Q1 → A (answered, user 2026-10-15) [questions.md Q1]: `mocks.ts` has a `householder` mock scenario. It uses the shell mock user with isHouseholder on. The photo is the neutral square placeholder, as the TST record had a photo: no GetSignedImagesInBulk in the capture. The capture-plan entry needs `scenarios: {default: householder}` (orchestrator).
- Proposed exemptions (`migration/screens/Menu/proposed-exemptions.json`, for the orchestrator): masked Version text offset, masked avatar sub-pixel shift (pixel), Get_RuntimeVersion app-start order.
- Q2 → A (answered, user 2026-10-15) [questions.md Q2]: the React app builds the uncaptured branches as compiled.
  - RequestPhotoUpdate answers `{Out_IsSuccess: true}` (fictional, x-mock-source fictional).
  - Logout uses the shell `signOut()` (no AppManager_Logout call, shell spec 10) and then goes to HomeFeed. There the signed-out gate of the shell opens Login.
  - Logout goes to HomeFeed with the Fade transition, as in the compiled code (Menu.mvc.js:773). The other navigations use the app default transition. F18 added the compiled transition arguments [questions.md Q4].
- Version text shows "App version (N)" without the environment (Version README "Not settled"): masked in the capture.

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real (official run) | 1 | 2 | 0 | 0 | 6 | link href/cursor, badge text, slider timing; also text 2, pseudo 2, position 1, pixel 1, call 3: the missing "Request Photo Update" row and GetSignedImagesInBulk of the non-householder shell user without photo (Q1), the masked Version text, the app-start order of Get_RuntimeVersion |
| default | householder (trial, `parity_check --mock householder` with the proposed exemptions) | 0 | 0 | 0 | 0 | 0 | + CAPTURE-MASKED-TEXT-VERSION-MENU, CAPTURE-MASKED-AVATAR-MENU-SHIFT, CALL-ORDER-APPSTART-RACE-VERSION-MENU (proposed, `proposed-exemptions.json`) |
| loading | loading | 0 | 0 | 0 | 0 | 0 | skeleton shimmer, link href/cursor, badge text |
| offline | error | 0 | 0 | 0 | 0 | 0 | skeleton shimmer, link href/cursor, badge text, slider timing |

The capture plan has `scenarios: {default: householder}` for Menu [migration/capture-plan.json]. The three proposed
exemptions are in `migration/parity-exemptions.json`. The latest default parity run uses the `householder` scenario
[parity/default.json].

## Server-side notes
- ActionRequestPhotoUpdate must act for the session user only (no input); the server must check the caller is a householder (the client only hides the row).
- SubscriptionManageLink comes from the user record; the server owns it.
