# CR-MessageList-1: shared OS List component (P-LIST) and an exported SynchronizeNumberUnreadMessages

- Status: applied
- Raised by: MessageList, 2026-10-15
- Block: `app/src/shared/` (new OS List component), `app/src/shell/startup.ts` (export)
- Other routes using it: every route that renders an OutSystems List (P-LIST); Notifications (SynchronizeNumberUnreadMessages)
- Related question: MessageList Q1

## Evidence
- `migration/patterns/P-LIST.md` (accepted): "use the shared OS list component (virtualisation, scroll ending, row keys
  from ids)"; no such component exists under `app/src/shared` (grep `data-list`: only PinCode, SelectionOption_List).
- `Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc.js` view: `OSWidgets.List` (style `list list-group`,
  `OSFillParent`, `virtualization-threshold-before/after` 1000, `onScrollEnding`) with `OSWidgets.ListItem` rows
  (left/right `ListItemAction`, full-swipe triggers).
- `ScreenBlock_MessageList` OnClick_MarkAllAsRead calls `Connect2_LegacyShared.SynchronizeNumberUnreadMessages`; the
  shell has it (`src/shell/startup.ts` `synchronizeNumberUnreadMessages`) but does not export it.

## Expected change
1. A shared `OSList` / `OSListItem` pair rendering the captured List and ListItem markup (`data-list`,
   `data-animation-disabled`, `data-list-item`, `list-item-container list-item-float-left`, left/right action
   containers) with `onScrollEnding` and keys from ids.
2. Export `synchronizeNumberUnreadMessages` from the shell (or `shared/Connect2_LegacyShared/lib/actions.ts`).

## Workaround in the route until applied
The route renders the list markup itself in `components/MessageListBlock.tsx` (IntersectionObserver on the last row for
OnScrollEnding) and keeps a local copy of SynchronizeNumberUnreadMessages in `components/actions.ts`.

## Resolution (foundation owner)
Applied 2026-10-15.

1. `app/src/components/OSList/` (`OSList`, `OSListItem`; README there), P-LIST reference. OSList: `source`, `keyOf`
   (keys from ids), `children(item, index)`, `className` (+ `OSFillParent`), `animateItems` (false →
   `data-animation-disabled`), `disableVirtualization` (`data-virtualization-disabled`), `positionRelative`,
   `onScrollEnding` (IntersectionObserver on the last row, as the route's workaround), `id`, `attributes`. OSListItem:
   `id`, `className`, `onClick`, children; renders `data-list-item`, `list-item-container list-item-float-left`, the
   empty left/right action containers and `data-list-item-content` as captured. Tested against captures of HomeFeed,
   Search, Services and MessageList (`__captures__/v1-v5`).
   Not in this CR: the swipe (Q2). Its source, `OutSystemsReactWidgets.js`, is not in `migration/runtime-sources/`;
   the action containers stay empty as captured until it is fetched.
2. `synchronizeNumberUnreadMessages` is exported from `app/src/shell/startup.ts`
   (`import { synchronizeNumberUnreadMessages } from '../../shell/startup'`). It now also swallows
   `Connect2_LegacyShared.OnlineCommunicationException` as the original does (controller.js:7517), tests in
   `startup.test.ts`.

For the MessageList route (when its owner adopts it): replace the list markup of `components/MessageListBlock.tsx`
with `OSList` / `OSListItem` and drop the local copy in `components/actions.ts`.
