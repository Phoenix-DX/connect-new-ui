# TouchEvents (OutSystems UI)

OutSystems: `OutSystemsUI_2_23.Utilities.TouchEvents` · pack `migration/blocks/OutSystemsUI_2_23.Utilities.TouchEvents.md` ·
compiled source `migration/screens/Photobook/analysis/sources/pretty/OutSystemsUI_2_23.Utilities.TouchEvents.mvc.js`

| Input           | Type    | Prop              | Default |
| --------------- | ------- | ----------------- | ------- |
| WidgetId        | Text    | `widgetId`        | `''`    |
| PreventDefaults | Boolean | `preventDefaults` | `true`  |

Events `Start(X, Y)`, `Move(X, Y, OffsetX, OffsetY, Evt)`, `End(X, Y, OffsetX, OffsetY, TimeTaken)` → `onStart`,
`onMove`, `onEnd` (Decimal → number).

## Captured variants (1; 1 tested)

| Capture | Source            | What it shows                      |
| ------- | ----------------- | ---------------------------------- |
| v1      | Photobook/default | the empty root (the view is empty) |

## Behaviour (ported)

`touchTrack.ts` is `scripts/OutSystemsUI_2_23.TouchTrack.js` (migration/runtime-sources/) ported 1:1:

- touchstart records the start point and time and raises Start.
- touchmove (only during a touch) raises Move with the offsets and the event.
- touchend raises End with the last moved point, the offsets and the time taken (ms).

The block's OnStart /
OnMove / OnEnd take Integer inputs (JSNodeParamConverter.from: `e - e % 1`), so the events get integer values.
OnReady binds once to the element WidgetId (no element: nothing bound); OnParametersChanged calls
`setPreventDefault`, which only stores a flag no handler reads: PreventDefaults has no effect, as in the original.

The OSFramework `Patterns.TouchEvents` class of `OutSystemsUI_2_23.OutSystemsUI.js` (:12005-12160) is the same
algorithm behind the newer client actions (callbacks through `Helper.AsyncInvocation`). This block's compiled view loads
TouchTrack.js (`getJsDependencies`) and never creates that pattern, so it is not used.

## Not settled

- OnDestroy DestroyJS calls `destroy()` even when nothing was bound, which throws a TypeError in OutSystems
  (removeEventListener on undefined, routed to the exception handler). The port calls `destroy()` only when bound
  (question Q-W4D-2).
