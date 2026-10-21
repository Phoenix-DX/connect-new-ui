# Route spec: CommunityBusinessDetails_CoomingSoon

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/CommunityBusinessDetails_CoomingSoon` with inputs `In_CommunityBusinessId: LongInteger` [pack.md; mvc.js:13, :61-63] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline (identical DOM) [pack.md; dom/*.html] |
| Shared/shell components used | `Layout_MainPages` (src/shared/UBTConnectLibrary/Layout_MainPages), `StaticInput` (src/shared/UBTConnectLibrary/StaticInput), `BlankSlate` (src/shared/osui/BlankSlate); LayoutRuntime_Top, Columns_Two/Columns2, Icon, TextEllipsis come inside them [pack.md "Block plan"] |
| Screen-specific components | none |

Source: `UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc.js` (model :1-70,
view :71-230, controller :231-280). A static placeholder screen of the flow `zDEV_Directory_CommunityBusinessBlocks`;
board note D2(a): opened from MyBookmarks / BookmarksByGroup [notes.md].

## Specification
### Structure
- `Layout_MainPages` `$b1` with `inputs: {}` (all defaults: no gray background, AddHeaderGap true, no pull to refresh)
  [mvc.js:140-141]; wrapper classes `layout layout-side layout-native ios-bounce ubt-layout-main hide-header-on-scroll`
  [dom/default.html:8].
- Placeholders: `Placeholder_Header_Title` Empty, `Placeholder_Header_Right` Empty [mvc.js:157-158] (empty
  `#b1-Placeholder_Header_Title`, `#b1-Placeholder_Header_Right`: dom/default.html:23-31); `Placeholder_Header_Input` =
  `StaticInput` `$b2` with `inputs: {}` (default prompt "Search for households. entities, news") and no Click_Input
  handler [mvc.js:159-178; dom/default.html:44-55]; `Placeholder_Header_Input_Icon`, `HeaderContent`, `Bottom`,
  `Placeholder_CommonUI_Inside_Layout` Empty [mvc.js:179-180, :220-221].
- `Content` is the OutSystems UI `BlankSlate` `$b3` with `inputs: {}` (FullHeight true → `blank-slate large`)
  [mvc.js:181-219; dom/default.html:79-92]:
  - The Icon placeholder holds `OSWidgets.Icon` ellipsis-h, size Twotimes →
    `<i class="icon fa fa-ellipsis-h fa-2x" data-icon="">`.
  - The Content placeholder holds the literal "Comming soon" (typo as compiled).
  - The Actions placeholder is Empty.

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `ActionSync_Info_GetMain` | server action | app start `UBTConnect.onApplicationReady` (shell) [calls.md #3; call-sites.md] | `isFromLogin` | none here | shell (`src/shell/startup.ts`, `src/shell/mocks.ts`) | shell's |
| `ServiceAPIFetchData_CacheableHouseholds` | service API | app start `get_Cacheable_MapHouseholds` (shell) [calls.md #6] | – | none here | shell | shell's |
| `ServiceAPIFetchData_CacheableMapEntities` | service API | app start `get_Cacheable_MapEntities` (shell) [calls.md #7] | – | none here | shell | shell's |

The screen itself has no data action, aggregate or server action (`dataFetchActionNames = []`, mvc.js:248; coverage.md
"none"). The route adds no mock handler.

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize/OnReady/OnRender/OnDestroy/OnParametersChanged | none (all `null`, mvc.js:262-266) | – | – | – |
| Screen | permissions | `checkRegistered` (mvc.js:270-271): handled by the shell for every protected path (`src/shell/paths.ts`) | – | – | – |
| StaticInput `$b2` | Click_Input | no handler bound (only `_handleError`, mvc.js:161-166): click does nothing | – | – | – |
| Input `In_CommunityBusinessId` | – | read by setInputs (mvc.js:61-63), never used by view or controller | – | – | – |
| CommonUI | – | `Placeholder_CommonUI_Inside_Layout` Empty (mvc.js:221) → `useNoCommonUi()` (app/docs/guides/shell.md:195-200) | – | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | always (static content) | yes | real |
| loading | same markup: nothing of the screen waits for data | yes | loading |
| offline | same markup: no call of the screen fails | yes | offline/error |

## Patterns used
- P-PARAMS: `In_CommunityBusinessId` read from the query string (Long Integer as text, default "0"), unused as in the original.
- P-STATES: no loading/empty/error branch of its own; all three captured states render the same static markup.
- P-CALLS: no call of the route; the captured calls are the shell's app start (call-sites.md).
- P-OSUI: BlankSlate (and Columns2 inside the layout) from `src/shared/osui/`.
- P-MOCKS: `mocks.ts` exports no handler (shell mocks answer the app-start calls).

## Feature flags
- none (`flags.py route CommunityBusinessDetails_CoomingSoon`: no feature flag detected)

## Unclear points
- none: the compiled view/controller (mvc.js:140-221, :248-271) and the three captured states define every
  element, input and event.

## Decisions to confirm
- Text "Comming soon" kept verbatim with the original typo (mvc.js:213; dom/default.html:88).
- The search box (StaticInput) has no effect when the user clicks it. The original app binds no Click_Input handler on
  this screen (mvc.js:159-178). The screen does not go to Search, unlike other main screens.
- Header title empty (mvc.js:157), although the Layout_MainPages story V1 labels it "Coming soon" for review only.
- `In_CommunityBusinessId` accepted but unused, as in the original (mvc.js:61-63).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 (position 0, pixel 0.00%, call 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1 (existing) |
| loading | loading | 0 | 0 | 0 | 0 | 0 (position 0, pixel 0.00%, call 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1 (existing) |
| offline | offline | 0 | 0 | 0 | 0 | 0 (position 0, pixel 0.00%, call 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1 (existing) |

## Server-side notes
- The screen has no server action of its own. Only registered users can open it (`checkRegistered`, mvc.js:270-271).
  The future BFF must refuse anonymous sessions for any business-details data that this screen can load later.
