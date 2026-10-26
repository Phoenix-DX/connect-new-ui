# ItemOptionsMenu

OutSystems: `Connect2_LegacyShared.Utility.ItemOptionsMenu` · compiled source
`migration/screens/BookmarksByGroup/analysis/sources/pretty/Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js` (no
pack: built in wave 8 O-B3 from the BookmarksByGroup copy)

| Input                | Type    | Prop                  | Default |
| -------------------- | ------- | --------------------- | ------- |
| In_IsBookmarked      | Boolean | `inIsBookmarked`      | `false` |
| IsShareImplemented   | Boolean | `isShareImplemented`  | `false` |
| In_IsRecordAvailable | Boolean | `inIsRecordAvailable` | `true`  |
| ShowGift             | Boolean | `showGift`            | `false` |

Events: `BookmarkToggle(IsItemBookmarked)` → `onBookmarkToggle` (raised with In_IsBookmarked, mvc.js:238),
`ShareToConnect` → `onShareToConnect`, `SendGift` → `onSendGift`. Placeholder `Anchor_Placeholder` →
`anchorPlaceholder` (inside `div#<scope>-Anchor_Placeholder`).

When In_IsRecordAvailable is true, the component renders a `PopupMenu` (`../PopupMenu`, ExtendedClass
`backwards-compatibility`). The menu of the `PopupMenu` has these items:

- The bookmark item. The label is "Unmark" or "Bookmark", from the local IsBookmarked. The component sets IsBookmarked
  from In_IsBookmarked on ready and on parameter changes.
- When IsShareImplemented is true: "Share" (flag `C2ExtendedShare`) or "Share to Connect".
- When ShowGift is true and flag `WalletAccess` is on: "Send a gift".

## Captured variants (1; 1 tested)

| Capture | Source                   | What it shows                                    |
| ------- | ------------------------ | ------------------------------------------------ |
| v1      | BookmarksByGroup/default | a bookmarked household's menu, closed (ellipsis) |

## Not captured

- The open menu: `ItemOptionsMenu.test.tsx` tests the labels, flag branches and events from the compiled view.

## Not settled

- "Share to others..." needs IsShareToOThersAvailable = CheckSocialSharingPlugin.IsAvailable (Cordova plugin): always
  False on the web, so it is never rendered.
