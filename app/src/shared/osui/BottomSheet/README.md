# BottomSheet (OutSystems UI)

OutSystems UI: `OutSystemsUI_2_23.Interaction.BottomSheet` · pack
`migration/blocks/OutSystemsUI_2_23.Interaction.BottomSheet.md`

| Input         | Type     | Prop            | Default                      |
| ------------- | -------- | --------------- | ---------------------------- |
| Shape         | Shape Id | `shape`         | `Shape.SoftRounded` (`soft`) |
| ShowHandler   | Boolean  | `showHandler`   | `true`                       |
| ExtendedClass | Text     | `extendedClass` | `''`                         |

Events: `OnToggle(BottomSheetId, IsOpen)` → `onOnToggle`, `Initialized(BottomSheetId)` → `onInitialized`.
Placeholders: `TopBar` → `topBar`, `Content` → `content`. Client actions `BottomSheetOpen` / `BottomSheetClose`
(`osui/lib/actions.ts`) take the widget id (the block root id, also passed to Initialized).

The markup comes from the compiled view (`OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js`, CountryDetails copy,
:94-150) and the captures. It has these parts: focus-trap spans, the sheet (`role="complementary"`, aria-hidden,
tabindex, `--bottom-sheet-shape`), the header with the top bar, the content, the overlay.

Behaviour of the provider (OutSystemsUI.js, not in the captures; stack decision `osui:BottomSheet`: hand-written):

- Open:
  - Adds `osui-bottom-sheet--is-open`.
  - Adds `osui-bottom-sheet--is-active` on `<body>`.
  - Sets aria-hidden false and tabindex 0 on the sheet and the trap spans.
  - Focuses the sheet.
- Close (Escape or BottomSheetClose): reverts these changes and gives the focus back.
- Each toggle raises OnToggle.
- Content scroll toggles `osui-bottom-sheet--has-scroll`.
- A closed sheet is `inert` (the caller's IsNotInertWhenClosed removes it).

## Captured variants (8 distinct in the pack; 4 tested)

| Capture | Source                 | What it shows                     |
| ------- | ---------------------- | --------------------------------- |
| v1      | CountryDetails/default | closed filter sheet, footer 72px  |
| v2      | CountryDetails/default | closed legend sheet, footer 0px   |
| v3      | CountryDetails/loading | closed filter sheet with skeleton |
| v4      | Notes/default          | closed notes sheet                |

The root `--bottom-sheet--footer-height` and the header `touch-action: none` / `data-drag-to-open-bound` come from the
caller (ConnectPatterns.BottomSheet OnReady and Initialized). The stories reproduce them with the helpers of the caller.
The other four pack variants are the same sheets in other screens (covered by ConnectPatterns.BottomSheet v2–v4).

## Not captured / not settled

- No capture shows an open sheet. The tests of open/close, focus, body class and has-scroll follow the documented
  behaviour of the provider, not a capture.
- Provider ported from `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js` (BottomSheet :4913-5136).
  Tests: `BottomSheet.test.tsx` (drag-to-close).
  - Drag-to-close (`dragToClose.ts`) works only when DeviceInfo.IsNative or IsTouch (:2684-2715, :4940-4945).
  - The touch gesture of the header (:1779-1876) moves the sheet down: `no-transition` during the drag, translateY in a
    frame loop, AnimateOnDrag :682-806.
  - At the end of the gesture, a swipe faster than 0.3 px/ms closes the sheet. Otherwise the sheet springs back
    (tension 300, friction 15, mass 1; SpringAnimation :820-880).
  - An upward drag is ignored.
  - As in the original, the half-height test never fires for a downward drag (negative threshold).
  - The React component binds the gesture from the first toggle on. The original binds it again on every toggle; the
    React component binds it once.
- Body scroll lock: the only body effect of the provider is the `osui-bottom-sheet--is-active` class (:4993-5002,
  already ported). The original CSS uses the class only for `.vscomp-wrapper`, `[data-popup-backdrop]`, the pickers and
  `.ptr-loading`. There is no scroll lock to port.
- Seen in the provider, not ported here:
  - End / Home keys focus the last / first focusable element (:4965-4977).
  - When the stored element is gone, the close falls back to the first focusable element of the page (FocusManager
    :893-905).
- The `inert` on a closed sheet is an inference from the caller's IsNotInertWhenClosed / RemoveInert JS (captures drop
  `inert`).
