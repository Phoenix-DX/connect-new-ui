# Tooltip

OutSystems: `OutSystemsUI_2_23.Content.Tooltip` · pack `migration/blocks/OutSystemsUI_2_23.Content.Tooltip.md`

The block view is `OutSystemsUI_2_23.Content.Tooltip.mvc.js` (internalRender :168-247). The behaviour comes from the
OutSystems UI (OSUI) provider in `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js` (`W<n>` = character
offset): the Tooltip pattern (W646155-668600), the Balloon feature (W104243-120900) and the FloatingUI provider
(W1276300-1281400). Facts: T1-T5 of `migration/clarify/review/item5-tooltip-loader.md`. Design and decisions:
`migration/clarify/review/item5-solution.md` (B1-B15, O1-O8).

The app has one instance: `Tooltip_UniqueName` of `HostSurvey_AccommodationItem` (T1, T5).

## Files

| File                      | Holds                                                                          |
| ------------------------- | ------------------------------------------------------------------------------ |
| `Tooltip.tsx`             | the markup, the open state, the handle, the events of the content and the body |
| `balloonPosition.ts`      | `computeBalloonPosition`: offset, arrow and flip of Floating UI (pure numbers) |
| `Tooltip.test.tsx`        | the markup and the behaviours B1-B14                                           |
| `balloonPosition.test.ts` | the position math with numbers                                                 |

## Props

| Block input, event or action | Prop            | Note                                                            |
| ---------------------------- | --------------- | --------------------------------------------------------------- |
| block instance               | `id`            | the `OSBlock` id; the inner ids are `<id>-<Name>` (decision O3) |
| Trigger                      | `trigger`       | `'OnClick'` only (see "Not ported")                             |
| Position                     | `position`      | `top`, `bottom`, `left` or `right`; default `right` (W667600)   |
| StartsOpen                   | `startsOpen`    | default false; read at build only (W662727)                     |
| ExtendedClass                | `extendedClass` | classes on `.osui-tooltip` (W184573)                            |
| placeholder Content          | `content`       | the anchor                                                      |
| placeholder Tooltip          | `tooltip`       | the balloon text                                                |
| event OnToggle               | `onToggle`      | `(isOpen)` at each open and close                               |
| TooltipOpen, TooltipClose    | `ref`           | `TooltipHandle`: `open()` and `close()` (decision B a)          |

## Markup

`div.osui-tooltip[name]` > `div.osui-tooltip__content` (Content), then
`div.osui-tooltip__balloon-wrapper.osui-balloon[data-uniqueid]` > `div.osui-tooltip__balloon-wrapper__balloon.OSInline`
(Tooltip) and `div.osui-tooltip__balloon-arrow`. The balloon is always in the DOM; the `.osui-balloon` CSS hides it
while it is closed. `name` and `data-uniqueid` have the value of `useId()` (decision O2). TST uses
`Math.random().toString(36)` (W155665).

The provider adds these attributes at build:

- On the content: `role=button`, `tabindex=0`, `aria-describedby=<id>-Tooltip`, `default-tabindex-element`.
- On the balloon: `role=tooltip`, `aria-hidden`, `--osui-balloon-width: max-content` and
  `--osui-balloon-shape: var(--border-radius-sharp)`.

## Behaviour (OnClick path)

- A click on the content opens the tooltip. A second click does nothing. The click does not reach the body (B1).
- A focus on the content opens it (B2).
- Esc while open, or Tab, closes it. The key does not propagate (B4).
- A body click closes it. The listener starts one tick after the open. Clicks on the content or inside the balloon
  do not close it (B8).
- A click inside the balloon stops there, except on a focusable child (B9).
- The blur check runs one tick after a blur of the content (B3, `_onBlur` W648757). It closes the tooltip only when the
  focus is now inside another `.osui-tooltip`. Else it listens to the blur of the focused element and checks again.
- Open: `osui-tooltip--is-open`, `osui-tooltip__balloon-wrapper--is-open`, `osui-balloon--is-open` and
  `aria-hidden=false` (B5, B6).
- Close: the three classes go and `aria-hidden` is `true`. After 50 ms, `--osui-floating-position-x` and `-y` go
  to `0` (B7). The placement class and the arrow style stay, as in `unsetFloatingPosition` (W1281400).
- `open()` opens a closed tooltip; `close()` closes an open one (B10). StartsOpen opens it at build (B11).
- While open, the position runs at the open and again on each window scroll or resize (B12, autoUpdate W1281188).
- The offset is `sqrt(--osui-floating-offset × arrow²) / 2`, with 8 px and 10 px from the CSS (B13).
- An unmount removes the listeners and the timers (B14).

## Not ported

- The hover path: `osui-tooltip--is-hover`, mouseenter and mouseleave. `IsHover` is false with Trigger OnClick (T1).
- The close when another balloon opens (`_balloonOnToggleCallback` W647100, decision O5 a).
- The event Initialized and the LogEvent calls. The app has no handler.
- OnToggle timing: the provider raises it one tick later. A close by the API, the keyboard or the blur check raises it
  twice (`_triggerClose` W655010). The app has no OnToggle handler (T1), so the component raises it once, at once.
- The `auto` placement, the shift middleware, the alignments (`top-start` and others) and `center`.
- A Position change while closed: the provider computes the position at once. Here the position runs at the next open.
- The Floating UI copy of TST. `computeBalloonPosition` re-implements the Floating UI 1.x defaults (decision O1 a).
  Pixel equality with TST is not checked.

Stories (`Tooltip.stories.tsx`): `Closed` and `Open`. No capture shows the block (decision O7 a: tests and stories
are the proof).
