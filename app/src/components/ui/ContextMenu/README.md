# ContextMenu

OutSystems: `UBTConnectLibrary.ConnectCorePatterns.ContextMenu` · pack
`migration/blocks/UBTConnectLibrary.ConnectCorePatterns.ContextMenu.md`

| Input                 | Type               | Prop                   | Default               |
| --------------------- | ------------------ | ---------------------- | --------------------- |
| In_ContextMenuOptions | ContextMenuOptions | `inContextMenuOptions` | `{}`                  |
| Position              | Position Id        | `position`             | `Position.BottomLeft` |
| isEnabled             | Boolean            | `isEnabled`            | `true`                |
| usePrimaryButon       | Boolean            | `usePrimaryButon`      | `false`               |

Events: `Event_SendGift` → `onEventSendGift`, `Event_MarkAsRead` → `onEventMarkAsRead`, `Event_MarkAsUnread` →
`onEventMarkAsUnread`, `Event_Edit` → `onEventEdit`, `Event_Share` → `onEventShare`, `Event_Delete` → `onEventDelete`.
Placeholders: none.

Child blocks:

- `PopupMenu`. The block passes only Position to it.
- The anchor: `CircleButton_IconPrimary` (usePrimaryButon, MoreVertical) or `Icon` (Neutral7, MoreVertical).
- The dialog content: a `CustomContainer` (`ubt-context-menu`, Neutral0, Soft radius, shadow ExtraSmall). It holds one clickable
  container + `ContextMenu_Item` for each option, in this order:
  - Send a Gift (Gift)
  - Mark as Read (Letter)
  - Mark as Unread (Letter)
  - Edit (Edit, own label)
  - Share (Share)
  - Delete (Delete, own label)

Evidence: `UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc.js:299-600`, HomeFeed copy.

## Captured variants (1 in the pack + 2 whole; 3 tested)

| Capture | Source                   | What it shows                                    |
| ------- | ------------------------ | ------------------------------------------------ |
| v1      | HomeFeed/default         | feed item menu, closed (pack)                    |
| v2      | HomeFeed/default (whole) | v1 with the PopupMenu and its Icon anchor        |
| v3      | Profile/default (whole)  | primary button, isEnabled = False, Position left |

## Not captured

- The open menu (never opened in the captures): `ContextMenu.test.tsx` tests option order, labels, events and container
  classes from the compiled view. The options render `ContextMenu_Item` (built from its compiled view, no capture).
- `UBT_Shape.Soft`, `UBT_Shadow.ExtraSmall` and the option icons: the values come from the original CSS class names
  (`border-radius-soft`, `shadow-xs`, `connect-icon-gift`…). The icons are Gift / Letter / Edit / Share / Delete.
  See `lib/staticEntities.ts`.

## Not settled

- `UBT_Icons.Gift` = `connect-icon-gift`: confirmed by the TST value (migration/knowledge/static-entities.md "TST
  values"); `connect-icon-gifting` (HouseholdCarousel Gift button) is another record.
