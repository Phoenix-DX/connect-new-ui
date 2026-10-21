# ErrorScreen

OutSystems: `Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.md` · source
`migration/blocks/sources/Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc.js`

| Input                     | Type    | Prop                       | Default                       |
| ------------------------- | ------- | -------------------------- | ----------------------------- |
| In_ErrorMessage           | Text    | `inErrorMessage`           | `'No information available.'` |
| In_MatchMainContentHeight | Boolean | `inMatchMainContentHeight` | `false`                       |

No events, no placeholders. Local Height (Integer, 0).

- View (:139-199): container LoadMoreData, style `height: 40em; padding-*: var(--space-xl);` + `height: <Height>px;`
  when In_MatchMainContentHeight; inside `error-screen-info OSInline`: image `img/Connect2_OrbitMobile_MUI.no_events.png`
  and In_ErrorMessage (`margin-top-m`).
- OnReady (:230-250, SetHeight :322-329): with In_MatchMainContentHeight, Height = `.main-content` clientHeight.
- The inner extended style `margin-top: -27em !important;` never reaches the DOM (React cannot set `!important`; the
  capture has no style there), so it is not rendered.

## Captured variants (1 tested)

| Capture | Source                     | What it shows                                            |
| ------- | -------------------------- | -------------------------------------------------------- |
| v1      | LDM_EventDetail_V2/offline | "No event information.", height of `.main-content` 723px |

## Not captured / not settled

- In_MatchMainContentHeight = False (story `Defaults`, test): from the compiled view only.
- No `.main-content` on the page: the original JS node throws (OutSystems error handling); the port keeps Height 0.
