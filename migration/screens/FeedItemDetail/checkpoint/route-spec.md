# Route spec: FeedItemDetail

Source: `capture/survey-UBTConnect.json` → `UBTConnect.Home.FeedItemDetail.mvc.js`, readable copy (prettier) in
`migration/screens/FeedItemDetail/sources/UBTConnect.Home.FeedItemDetail.mvc.js` ("SCR", cited `:line`). No capture,
no `analysis/` folder, no pack (`context_pack.py` needs `analysis/facts.json`): no-capture decided in the user's
window (`no-capture.json`, AcceptPendingPolicies precedent): the screen needs a Feed CMS item id of the external CMS.
Board: decision build, V4b (opened from MessageDetail and ConnectShare); Feed CMS = mock (D8 b) (`notes.md`).

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/FeedItemDetail?FeedItemId=<Text>` [SCR model setInputs :152-160; `routes.generated.ts`] |
| Tier | lite |
| Captured | not captured (no-capture); every state below is "not captured" |
| Shared/shell components used | `shared/UBTConnectLibrary/Layout_DetailPage`, `shared/UBTConnect/Feed_Embeded` (→ `UBTConnect_EmbedFeed/Embedded_FeedCMS`, `SharePopup`, HandleDownload), `shared/UBTConnect/CommonUI_InsideLayout`, `shared/UBTConnect_Utils/ShareSheet`, `shared/UBTConnect_Utils/ShareableObject_Generic`; shell `useViewState` |
| Screen-specific components | none (the view uses only shared blocks [SCR view :237-245]) |

## Specification
### Structure
- Root → `Layout_DetailPage` $b1 with no inputs (defaults: primary, title centred, navigation handler on) [SCR :283-300]:
  `Placeholder_Header_Title` = text "Feed Item" [:302-304]; `Placeholder_Header_Right`, `HeaderContent`, `Bottom`
  empty [:305-306, :360]; `Content` → `Feed_Embeded` $b2 with `FeedItemId` = input FeedItemId [:307-357];
  `Placeholder_CommonUI_Inside_Layout` → `CommonUI_InsideLayout` $b3 [:361-387].
- Sibling of the layout: `ShareSheet` $b4 (In_ShareableObjectId = ShareableObjectId, In_UpdateType "",
  In_ShareObjectTypeId = ShareObjectTypeId, In_UpdateDate = NullDate, In_IsOpen = IsShareOpen) [:392-438] with
  `Placeholder_ShareableObject` → `ShareableObject_Generic` $b5 (In_ShareableObject = ShareableFeedItem), always
  rendered (no `$if`, unlike HomeFeed) [:439-466].
- Screen variables: IsShareOpen False, ShareableObjectId "", ShareObjectTypeId "", ShareableFeedItem
  (UI_ShareableObject_Generic, empty) [:25-82].
- Stylesheets: `routes.css.generated.ts` FeedItemDetail set (compiled `getCssDependencies` of the screen and its
  blocks, entry `compiled`) [:224-233].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| none of its own | – | `dataFetchActionNames = []`, no server action [SCR :512-516] | – | – | – | – |
| `UBTConnect_EmbedFeed` `Embedded_FeedCMS/DataActionGetFeedConfig` | data action (shared block) | Embedded_FeedCMS load (inside Feed_Embeded, flag C2EnableFeed on) [Embedded_FeedCMS README] | block inputs (B2CTenant, FeedItemId…) | BaseURL → SDK `openFeedItem` → `<BaseURL>/embed/feeds/item/<FeedItemId>` | fictional; mock BaseURL = app origin (D8 b, CR-W2F-1 applied) | shared `mocks.ts`: real, error, loading |
| ShareSheet calls | shared block | only when the sheet opens (Event_Share) [ShareSheet README] | – | – | shared block mocks | shared |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| screen | OnInitialize / OnReady / OnRender / OnDestroy / OnParametersChanged | none [SCR :774-778] | – | – | – |
| Feed_Embeded | Event_Share(ShareId, Title, Subtitle, ImageURL) | Handler_ShareFeed: ShareObjectTypeId = Type_ShareObject.Feed; ShareableObjectId = ShareId; IsShareOpen = True; ShareableFeedItem.ConnectEntityTypeId = Connect_Entity.FeedItem, .SignedURL = ImageURL, .Title, .Subtitle (other fields kept) [SCR :317-345, :563-674] | – | – | share sheet opens |
| ShareSheet | Event_ClosedShareSheet | Handler_CloseShareSheet: IsShareOpen = False [SCR :409-428, :518-562] | – | – | – |
| Layout back arrow | click | Layout_DetailPage: previous screen (shared) | – | history back | – |
| any block | _handleError | Home flow `handleError` [SCR :779-784] (shared blocks raise to the shell handler) | – | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default (item) | FeedItemId set → Embedded_FeedCMS skeleton, then the mock CMS item page in the iframe | not captured | real |
| no item id | FeedItemId "" → Embedded_FeedCMS loads the whole feed (block behaviour, `openFeedItem` only with an id) | not captured | real, no input |
| share sheet open | after Event_Share (C2ExtendedShare on) | not captured; the mock CMS raises no `feed:share`, reached by tests only | test |
| feed config error | DataActionGetFeedConfig fails → shared block error handling | not captured | `?mock=error` |

## Patterns used
- P-PARAMS: `FeedItemId` (Text) read with `useSearchParams` under its original name, "" when absent (`api.ts`).
- P-STATES: the screen has no `$if`; its states are the shared blocks' states, listed above.
- P-DATA: `api.ts` holds the input reader only; the screen calls no action (no adapter needed).
- P-CALLS: no call of its own; DataActionGetFeedConfig goes out on load from the shared Embedded_FeedCMS.
- P-MOCKS: `mocks.ts` exports no handler of its own; the blocks' mocks answer their calls.
- P-BACK: screen variables through the shell's `useViewState` (as HomeFeed), restored on back.
- P-FLAGS: no flag in the screen; Feed_Embeded reads C2EnableFeed / C2ExtendedShare with `useFlag` (shared).
- P-DIALOG: the share bottom sheet is the shared ShareSheet; the screen only drives In_IsOpen and the close event.
- P-OSUI, P-LIST: not used (no OutSystems UI pattern, no List in the view).

## Feature flags
- C2EnableFeed (default-only, TST on, user 2026-10-14): read inside shared Feed_Embeded; feed shown.
- C2ExtendedShare (default-only, TST on, user 2026-10-14): read inside shared Feed_Embeded; OnShare raises Event_Share
  to this screen (ShareSheet), not the legacy SharePopup.
- App_PIN_BiometricEnabled, onToggle: not flags (user, 2026-10-14); behaviour of the shared blocks as in the original.

## Unclear points
- A failed DataActionGetFeedConfig: the shared Embedded_FeedCMS only logs it (skeleton stays, no message); the
  original's runtime error path (block handleError → Home flow handler, SCR :313-315, :779-784) was never observed
  → Q1 (answered A, auto-accepted in the user's 3h window 2026-10-15). Nothing in this screen's code depends on it.

## Decisions to confirm
- The whole route is built from the compiled code; no state was captured (no-capture, AcceptPendingPolicies
  precedent); parity has no captured state to run. The user reviews by hand (`review/*.png`).
- The CMS item page is the local mock page (D8 b): `/embed/feeds/item/<FeedItemId>` on the app origin answers
  `public/mock-embeds/feed-cms.html`, which shows a neutral "Feed CMS (mock)" surface for any id.
- The mock CMS never posts `feed:share`, so in the running mock app the share sheet cannot be opened from this screen;
  Handler_ShareFeed / Handler_CloseShareSheet are covered by the screen tests (Embedded_FeedCMS replaced to raise OnShare).
- Smoke check (headless Chromium 390x844, `?FeedItemId=7001&mocksession=unlocked`, 2026-10-15): title "Feed Item",
  Layout_DetailPage / Feed_Embeded / Embedded_FeedCMS / CommonUI_InsideLayout / ShareSheet blocks render; the iframe
  loads `/embed/feeds/item/7001` (visible, 794 px high); calls: DataActionGetFeedConfig (twice: dev StrictMode remounts
  the block effect) plus the shell's app-start calls; no page error, no console error (`review/default.png`).
- Error (`&mock=error`): DataActionGetFeedConfig answers 500, the Embedded_FeedCMS skeleton stays, no toast, no page
  error (`review/error.png`); see Q1.
- Screen tests `app/src/screens/FeedItemDetail/FeedItemDetail.test.tsx` (5): blocks and title, FeedItemId passed / ""
  when absent, Event_Share → ShareSheet open with the Feed item, Event_ClosedShareSheet → closed.
- ShareableObject_Generic is always rendered inside the ShareSheet placeholder, as compiled (HomeFeed renders it only
  for Feed shares); ShareableFeedItem keeps its earlier fields between shares, as the original assigns field by field.

## Change requests
- none.

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| none captured | – | – | – | – | – | – | – |

## Server-side notes
- The screen calls nothing itself. The real Feed CMS must authorize the item id for the signed-in user
  (DataActionGetFeedConfig token, CMS side).
