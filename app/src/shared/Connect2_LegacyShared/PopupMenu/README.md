# PopupMenu

OutSystems: `Connect2_LegacyShared.Widgets.PopupMenu` · compiled source
`migration/screens/BookmarksByGroup/analysis/sources/pretty/Connect2_LegacyShared.Widgets.PopupMenu.mvc.js` (no pack:
built in wave 8 O-B3 from the BookmarksByGroup copy)

| Input         | Type    | Prop            | Default |
| ------------- | ------- | --------------- | ------- |
| Position      | Text    | `position`      | `''`    |
| IsOpen        | Boolean | `isOpen`        | `false` |
| ExtendedClass | Text    | `extendedClass` | `''`    |

Events: `OnOpen` → `onOnOpen`, `OnClose` → `onOnClose`. Placeholders: `Anchor` → `anchor` (`div.dx-popup-menu-anchor`,
id `<scope>-Anchor`), `PopupMenu` → `popupMenu` (`div.dx-popup-menu-content`, id `<scope>-PopupMenu`, rendered when
IsOpen or HasOpened).

This block has the same view and JS nodes as `UBTConnectLibrary.ConnectPatterns.PopupMenu`
(`../../UBTConnectLibrary/PopupMenu`, shared `position.ts`). It also has the widget ids Root / Anchor / PopupMenu. It also has a
`dx-popup-menu-backdrop` container after the content (view :233-247).

- An anchor click toggles the menu.
- When the menu opens, it raises OnOpen. On the next frame it adds `dx-popup-menu-open`, moves the container to
  `<body>` (React portal) and follows the anchor every frame.
- A click outside the anchor, `touchmove`, `backbutton` and `dx-before-navigation` close the menu.
- Clicks inside never bubble.

Users: `ItemOptionsMenu` (BookmarksByGroup, AssembleDetail).

## Captured variants (1; 1 tested)

| Capture | Source                   | What it shows                                                   |
| ------- | ------------------------ | --------------------------------------------------------------- |
| v1      | BookmarksByGroup/default | closed, no Position, `backwards-compatibility`, ellipsis anchor |

## Not captured

- The open state: `PopupMenu.test.tsx` tests open/close, events, portal, content ids and the backdrop from the
  compiled view and JS.

## Not settled

- As in the UBTConnectLibrary twin:
  - The outside-click listener is a capture-phase `click` on `document` (React 19 stops native propagation at its root).
  - The open class follows the open state.
  - When an open popup unmounts, it raises no OnClose.
