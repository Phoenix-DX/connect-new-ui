# Widgets.AdaptiveCardViewer

OutSystems: `Connect2_LegacyShared.Widgets.AdaptiveCardViewer` (TST `Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc.js`).

| Input               | Type       | Prop                 | Default |
| ------------------- | ---------- | -------------------- | ------- |
| In_AdaptiveCardJson | Text       | `inAdaptiveCardJson` | -       |
| In_HostConfig       | HostConfig | `inHostConfig`       | -       |

Event: `OnExecuteAction(CardPayload, ActionId, FormPayload)` → `onExecuteAction`. No placeholders.

- View: the container `AdaptiveCardContainer` (the If around it has the constant condition False).
- OnReady and OnParametersChanged run RenderAdaptiveCardAction (`actions.ts`): IsJsonValid, JSONSerialize_HostConfig,
  then RenderAdaptiveCardJS. An OpenUrlAction opens its url in a new tab; any other action raises OnExecuteAction.
- `hostConfig.ts`: the HostConfig structure and GetHostConfigByConfigId (Connect2_LegacyShared.controller.js:4787-4876).
- `runtime.ts`: the renderer library (the TST global `AdaptiveCards`). It is a stack decision: until the library is
  installed, the runtime is null and the container stays empty. The tests use a stub runtime.

## Not captured

- No capture shows a card. The behaviour comes from the TST compiled code; `AdaptiveCardViewer.test.tsx` tests it.
