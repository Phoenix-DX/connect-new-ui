# SwipeEvents (OutSystems UI)

OutSystems UI: `OutSystemsUI_2_23.Utilities.SwipeEvents` · pack `migration/blocks/OutSystemsUI_2_23.Utilities.SwipeEvents.md`
· compiled source `migration/blocks/sources/OutSystemsUI_2_23.Utilities.SwipeEvents.mvc.js`

| Input    | Type | Prop       | Default |
| -------- | ---- | ---------- | ------- |
| WidgetId | Text | `widgetId` | `''`    |

Events `SwipeUp`, `SwipeDown`, `SwipeLeft`, `SwipeRight` → `onSwipeUp`, `onSwipeDown`, `onSwipeLeft`, `onSwipeRight`.

Reuses the built `osui/TouchEvents` block (child block of the original; TouchTrack port). Ported actions:
OnGestureMove (PreventDefaultJS: `Evt.preventDefault()`) and OnGestureEnd → `swipeDirection` (Threshold 10,
Velocity 0.3, local variables of the block).

## Captured variants

None: never rendered in a capture (LDM_MyEvents_V2). Built from the compiled view; the DOM is the TouchEvents root
inside the SwipeEvents root.
