# Route spec: MyEntertaining

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/MyEntertaining` with inputs `MyCalendarEventSourceId: Text` [pack.md; MyEntertaining.mvc.js:13] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | `src/shared/UBTConnect/CommonUI_InsideLayout` (×2), `src/shared/UBTConnectLibrary/Layout_DetailPage`, `src/shared/UBTConnectLibrary/{SkeletonSection,CustomContainer,LazyImage}`, `src/components/OSBlock`, `src/shell/feedback` (FeedbackMessage_AutoClose), `src/shared/UBTConnect_Utils/lib/actions` (OpenInApp_OpenExternalLink) |
| Screen-specific components | `components/MyEntertaining_Embedded.tsx` (UBTConnect.Calendar.MyEntertaining_Embedded), `components/Embedded_MyEntertaining.tsx` (UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining), `components/connect2Entertaining.ts` (D8 b SDK stand-in), `components/staticEntities.ts`; mock page `app/public/mock-embeds/my-entertaining.html` |

## Specification
### Structure
Screen [MyEntertaining.mvc.js:140-172]: `CommonUI_InsideLayout` `$b1` [shell], then `Calendar.MyEntertaining_Embedded` `$b2`
(In_InitialEventSouceId = MyCalendarEventSourceId). MyEntertaining_Embedded [MyEntertaining_Embedded.mvc.js:147-244]:
`Layout_DetailPage` `b2-$b1` (In_IsPrimaryColor True, title text "My Entertaining", empty header right / header content /
bottom), content = `Blocks.Embedded_MyEntertaining` `b2-$b2` (B2CTenant = client var Embedd_B2CTenant, Sources =
PreloadedSource; View and Theme default "timeline" / "light" [Embedded_MyEntertaining.mvc.js:53-62]),
Placeholder_CommonUI_Inside_Layout = `CommonUI_InsideLayout` `b2-$b3` [dom/default.html].
Embedded_MyEntertaining view [Embedded_MyEntertaining.mvc.js:229-410]: container `connect2entertaining` with class
`overflow-hidden` + `display-none` while isLoading, then (if isLoading) SkeletonSection(In_IsLoading True) > CustomContainer
(background Neutral0) > List `list list-group` (OSFillParent) of LoadingList > CustomContainer (margin Base) > LazyImage
(border Soft, width FullWidth_100_Percent, fallback icon WidgetsFill / font Display, padding DoubleExtraLarge)
[dom/loading.html:114-150]. The SDK iframe goes into the container; its size is the block CSS
(`iframe { width: 100%; min-height: calc(100vh - var(--header-size, 0px)) }`) [styles/bundle.css:1195-1200].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `UBTConnect_EmbedMyEntertaining/Embedded_MyEntertaining/DataActionGetEntertainingConfig` | data, load | block fetch at start [call-sites.md; calls.md #2] | block screen variables (View, Theme, Sources, B2CTenant; inputNames not captured [calls.json]) | BaseURL, Token, B2CClientId, B2CPolicy → InitializeCalendar | fictional in the contract (x-mock-source fictional) | real (BaseURL = app origin, empty Token/B2C values), loading (never answers), error (500) |
| `UBTConnect_EmbedMyEntertaining/ActionAppManager_Get_UserIdToken` | server action, every 10 min after init | Action_RefreshToken from the InitializeCalendar interval [Embedded_MyEntertaining.mvc.js:1020-1040, 1295-1298] | EspaceName "" | IdToken → embed.refreshToken | fictional (contract); never a real token | real (IdToken ""), error (500) |
| App start calls (SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation, GetNumberUnreadMessages, Cacheable*) | shell | app start [call-sites.md] | — | — | shell | shell mocks |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| MyEntertaining_Embedded | OnInitialize | PreloadedSource = "orbit" / "ldm" / "assemble" / "personal" when In_InitialEventSouceId = Type_MyCalendarEventSource Orbit / LDM / Assemble / UserCreated (event-orbit, event-ldm, event-assemble, event-user), else "" [MyEntertaining_Embedded.mvc.js:284-305; static-entities-tst.json] | — | — | — |
| Embedded_MyEntertaining | OnInitialize | LoadingList = "Loading 1".."Loading 5" (MaxLoadingItems 5) [Embedded_MyEntertaining.mvc.js:603-640] | — | — | — |
| Embedded_MyEntertaining | after GetEntertainingConfig | RequireScript(BaseURL + "/embed-entertaining.js"), then InitializeCalendar: destroy a configured embed, remove the old listener / interval, `embed.init({baseUrl, containerId, view, theme, height '100%', autoResize false, sources or null, getIdToken → Token, b2cTenants, b2cClientIds, b2cPolicy, callbacks})`, add a `message` listener (only `origin === BaseURL`; `embed:open-map` → OnOpenMap(''+lat, ''+lng, label or '')), start the 10 min token refresh [Embedded_MyEntertaining.mvc.js:922-960, 1231-1293]. D8(b): the SDK is the stand-in of Q1 | GetEntertainingConfig | — | — |
| SDK callbacks | onReady / onAuthenticated / onComplete / onError | OnReady, OnAuthenticated events; onComplete → isLoading False + OnComplete(status, total); onError → OnError(message or type or "Unknown error") [:1252-1280, 720-1010] | — | — | — |
| MyEntertaining_Embedded | Embedded OnError | Handle_Error: FeedbackMessage_AutoClose("", Message, Info, EncodedHTML True, "", 0, False) [MyEntertaining_Embedded.mvc.js:390-400] | — | — | info message |
| MyEntertaining_Embedded | Embedded OnOpenMap | Handle_OpenMap: OpenInApp_OpenExternalLink("https://www.google.com/maps/search/?api=1&query=" + Lat + "," + Lng, True) [:350-360] | — | external link | — |
| Embedded_MyEntertaining | OnParametersChanged | Action_SetSources: embed.setSources(Sources or null) when configured [:551-575, 1224-1230] | — | — | — |
| Embedded_MyEntertaining | OnDestroy | CleanupCalendar: remove listener, clear interval, destroy a configured embed [:576-600, 1212-1222] | — | — | — |
| Layout back arrow | click | previous screen (shared Layout_DetailPage) | — | back | — |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | isLoading False after SDK onComplete: container shown (empty in the capture), no skeleton | dom/default.html:114-117 | real |
| loading | isLoading True (config not answered): container `display-none`, skeleton list of 5 | dom/loading.html:114+ | loading |
| offline | config call fails: stays as loading, no feedback message shown | dom/offline.html (no `feedback` element) | error |

## Patterns used
- P-PARAMS: `MyCalendarEventSourceId` read from the query string (api.ts `readMyEntertainingInputs`).
- P-STATES: loading / offline follow isLoading; skeleton via the shared SkeletonSection, as captured.
- P-DATA: GetEntertainingConfig through `api.ts` (`callAction`, TanStack Query, domain type in types.ts).
- P-CALLS: one config call on load, token refresh only on the 10 min interval, as calls.json.
- P-MOCKS: `mocks.ts` contract handlers, fictional values (no token).
- P-DIALOG: Handle_Error uses the shell's FeedbackMessage_AutoClose.

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: MCP unavailable; decision not a flag (false positive), user 2026-10-14; implemented by the shell's PIN unlock (CommonUI_InsideLayout), nothing in this route [pack.md "Feature flags"].

## Unclear points
- Behaviour of the external Connect2Entertaining SDK (protocol, when onComplete fires, iframe query) is unknown: stand-in semantics → Q1 (answered A by the user, 2026-10-15; built with recommendation A, as the Feed CMS mock).
- The TST capture shows the container empty although the iframe `<BaseURL>/embed/calendar` was requested [calls.md:811]: the mock iframe is a structure / layout difference in state default → Q2 (answered A by the user, 2026-10-15; was open, decision: exemption MYENT-D8B-IFRAME).

## Decisions to confirm
- D8(b) stand-in for the external SDK (Q1): `components/connect2Entertaining.ts` replaces RequireScript + `window.Connect2Entertaining`; one iframe with `/mock-embeds/my-entertaining.html` (neutral page); onReady + onComplete on iframe load; setSources / refreshToken are no-ops. Plugging the real embed = `requireEmbed(BaseURL)` loads `<BaseURL>/embed-entertaining.js` and returns its `Connect2Entertaining.embed`.
- Mock config: BaseURL = app origin, Token / B2CClientId / B2CPolicy empty; AppManager_Get_UserIdToken answers IdToken "" (fictional action, never a real token).
- JSUtils_Console_Log calls of the block (ready, authenticated, complete, error, failed sources) are not ported (NO-CONSOLE).
- The mock page is an empty neutral surface (#f4f4f4, no label): the TST container was empty, so pixels stay equal (a visible label gave 0.19% / worst tile 13.1% in the first parity run).
- Exemption MYENT-D8B-IFRAME for the iframe in state default (Q2, accepted by the user 2026-10-15).
- A failing token refresh (unobserved) is only logged (`log.warn`); a failing config call leaves the skeleton, as the offline capture.
- Gaps of the pack (Policy_Checker, UnsupportedVersion_Wrapper, PinCode…) belong to the shell blocks; nothing rendered here.

## Change requests
- none (the stand-in uses a static page under `public/mock-embeds/`, no dev-server route needed).

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 | ignoreSubtrees, CAPTURE-LINK-HREF-CURSOR-HOMEFEED, MYENT-D8B-IFRAME (Q2) |
| loading | loading | 0 | 0 | 0 | 0 | 0 | ignoreSubtrees×2, CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-SKELETON-SHIMMER-PHASE×10 |
| offline | error | 0 | 0 | 0 | 0 | 0 | ignoreSubtrees×2, CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-SKELETON-SHIMMER-PHASE×10 |

Pixels 0.00% and calls equal in every state.

## Server-side notes
- DataActionGetEntertainingConfig returns a user token (Token) for the embed: the server must issue it only for the session user.
- AppManager_Get_UserIdToken returns the session user's id token: server-side authorization required; never cache it in the browser.
