# PopupMenu

OutSystems: `UBTConnectLibrary.ConnectPatterns.PopupMenu` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.PopupMenu.md`

| Input         | Type        | Prop            | Default |
| ------------- | ----------- | --------------- | ------- |
| Position      | Position Id | `position`      | `''`    |
| IsOpen        | Boolean     | `isOpen`        | `false` |
| ExtendedClass | Text        | `extendedClass` | `''`    |

Events: `OnOpen` → `onOnOpen`, `OnClose` → `onOnClose`. Placeholders: `Anchor` → `anchor` (`div.dx-popup-menu-anchor`),
`PopupMenu` → `popupMenu` (`div.dx-popup-menu-content`, rendered when IsOpen or HasOpened).

Behaviour ported from the JS nodes (`UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js:612-900`, HomeFeed copy):

- An anchor click toggles.
- When the menu opens, it raises OnOpen. On the next frame it does four things:
  - It adds `dx-popup-menu-open`.
  - It moves the container to `<body>` (a React portal, kept there after it closes).
  - It sets `position: fixed`.
  - It follows the anchor every frame (`position.ts`, the pure `updatePosition`).
- A click outside the anchor, `touchmove` on body, `backbutton` and `dx-before-navigation` close it (OnClose only if
  it was open).
- Clicks inside the root never bubble to the caller (`stopReactClickBubbling`).
- Any input change runs `componentUpdate`: IsOpen True → openPopup (a toggle), False → close.

## Captured variants (2; 2 tested)

| Capture | Source           | What it shows                                  |
| ------- | ---------------- | ---------------------------------------------- |
| v1      | HomeFeed/default | closed, bottom-left, Icon anchor (ContextMenu) |
| v2      | Profile/default  | closed, left, CircleButton_IconPrimary anchor  |

## Not captured

- The open state (no capture opened a menu): `PopupMenu.test.tsx` tests open/close, events, portal and
  position from the compiled JS.

## Not settled

- The outside-click listener is a capture-phase `click` on `document` (the original adds a bubbling one on `body`):
  A bubbling body listener misses clicks on the anchor of another menu, because React 19 stops native propagation at its
  root. The listener excludes the anchor, so that its own toggle still works. Same observable result.
- The compiled class also adds `dx-popup-menu-open` from the IsOpen input on render. The JS toggles it on the DOM.
  Here the class follows the open state of the menu, which IsOpen drives.
- When an open menu unmounts, it leaves the DOM and does not raise OnClose.
