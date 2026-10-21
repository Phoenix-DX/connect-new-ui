# OSList / OSListItem (OutSystems List and ListItem widgets)

Platform widgets `OSWidgets.List` and `OSWidgets.ListItem`, the reference implementation of P-LIST
(`migration/patterns/P-LIST.md`). Not an OutSystems block: no `@os-block` tag, no `OSBlockWidget` root.

## OSList

| List property (compiled view)                   | Prop                      | Markup                                            |
| ----------------------------------------------- | ------------------------- | ------------------------------------------------- |
| Source                                          | `source`                  | one iteration per record                          |
| (item ids)                                      | `keyOf(item, index)`      | React key from the record id                      |
| iterator content                                | `children(item, index)`   | direct children of the list, no wrapper per row   |
| Style Classes (`style`)                         | `className` (required)    | `class="<className> OSFillParent"`                |
| `gridProperties.classes` "OSFillParent"         | (always)                  | appended to the class                             |
| Animate Items (`animateItems`)                  | `animateItems` (required) | false → `data-animation-disabled`                 |
| extended property `disable-virtualization` True | `disableVirtualization`   | `data-virtualization-disabled`                    |
| virtualized scroll viewer                       | `positionRelative`        | `style="position: relative;"`                     |
| OnScrollEnding                                  | `onScrollEnding`          | scroll host listener (rule below)                 |
| extended property `infinite-scroll-threshold`   | `infiniteScrollThreshold` | default 2000 px                                   |
| `source_dataFetchStatus`                        | `sourceDataFetchStatus`   | Fetching → ` list-loading`, Error → ` list-error` |
| widget name                                     | `id`                      | `id` (`FavouriteList`, `b1-b7-Messages_List`)     |
| attributes written by other scripts             | `attributes`              | e.g. SortableList `data-deny-from`                |

Always rendered: `data-list`. `tag` is "div" in all 200 Lists of the survey; `mode` (Custom in 4 Lists, e.g.
BottomBarMenu) changes nothing in the captures, so neither is a prop.

## OSListItem / OSListItemAction (`OSListItem.tsx`)

Ported from `OutSystemsReactWidgets.js`; `W:<n>` = line of the readable copy
`migration/screens/MessageList/analysis/sources/pretty/OutSystemsReactWidgets.js`.

- **ListItemBasic** (W:1519-1540) when both action placeholders are empty (`leftActions` and `rightActions`
  undefined): one `<div data-list-item data-not-scrollable class=<className>>` with the OnClick.
- **ListItemSwipeable** (W:1541-1877) otherwise: `<div data-list-item data-not-scrollable id>` →
  `.list-item-container.list-item-float-left` → `.list-item-left-actions`, the content
  `<div class=<className> data-list-item-content data-not-scrollable>` (touch tracking, Swipeable W:1392-1488),
  `.list-item-right-actions` (capture v5). The actions render only once a swipe starts (`shouldRenderActions`,
  W:1624, 1719, 1787-1800), so at rest both containers are empty. Swipe: visible past 35 px (W:1723, 1919); with
  `triggerActionOnFullSwipeRight/Left`, past `max-width of an action × (min(2, count) + 0.75)` (W:1711-1717) a full
  swipe clicks the first left / last right action after the 400 ms animation (W:1577-1593, 1920); a short swipe keeps
  the buttons shown until the next touch anywhere (W:1549-1560, 1571-1576). Edge guard 15 px (W:1756-1768).
  Not ported: the edge-threshold extended properties (W:1668-1675) and the web-editor expansion.
- OnClick: ListItem.handleClick (W:1882-1888) stops propagation and runs with class `active` on the item until the
  handler (or its Promise) ends; on ListItemSwipeable only from the content and only at rest (W:1610-1612).
- **OSListItemAction** (W:1944-1984): `<button data-list-item-action class>`; `visible` false renders nothing; a
  second click is ignored (spam protection, W:1956-1963; the `disable-spam-protection` rule as compiled, W:1975-1979).
- `className`: Style Classes, or the extended property `className` that replaces them (MessageListBlock.mvc.js:264-266).

## Captures (`__captures__/`, nested blocks collapsed to their wrapper)

| Variant | Source (TST capture, state default)                  | Compiled List                   |
| ------- | ---------------------------------------------------- | ------------------------------- |
| v1      | HomeFeed, FeedBlock_Services `…__list-items`         | FeedBlock_Services.mvc.js:491   |
| v2      | HomeFeed, FeedBlock_Updates `home-page--update-list` | FeedBlock_Updates.mvc.js:172    |
| v3      | Search, HorizontalTagList `ubt-tag-list`             | HorizontalTagList.mvc.js:219    |
| v4      | Services, `FavouriteList`                            | Services.mvc.js:309             |
| v5      | MessageList, `Messages_List` with 19 ListItem rows   | MessageListBlock.mvc.js:217-384 |

`OSList.test.tsx`: each story against its capture (structure, classes, style, text) plus the data-* markers, which
the shared capture check ignores; OnScrollEnding, keys and the item click.

## Settled from `OutSystemsReactWidgets.js` (2026-10-15)

- **OnScrollEnding** (W:1235-1297): after paint (rAF + 1 ms) the List listens to `scroll` / `resize` of its scroll
  host (nearest ancestor of the list's parent with overflow auto/scroll and no `data-not-scrollable`, else the window;
  `@outsystems/virtualized-list` ScrollExtensions) and to `orientationchange` (forced). It fires when the user scrolls
  down past the last recorded offset (the first event only records it) and `scrollHeight <= scrollTop +
clientHeight + threshold` (`infinite-scroll-threshold`, default 2000, W:1195-1204; horizontal likewise), and on a
  row-count change (not forced, W:1254-1259). No new event until the handler's Promise settles (OS.Flow.tryFinally).
  While the source is Fetching the row count is not recorded (storeListLength, W:1263-1267).
- **Fetch status class** (W:1325-1334): `class = Style Classes + (" list-loading" | " list-error" | "")` for
  `source_dataFetchStatus` 0 / 2 / 1, then `OSFillParent` (captured HouseholdDetails `dom/loading.html:263, 720`).
  Lists fed by a local variable pass Fetched (the default); lists fed by a data action pass its status.
- **`position: relative`**: List renders a VirtualizedScrollViewer unless `disable-virtualization` (W:1340-1363);
  its `renderOffScreenBuffer`, run on every viewer update, writes `position: relative` only when the rows stack
  vertically (OutSystemsReactView.js; items in a row get direction None, e.g. BottomBarMenu). Pass
  `positionRelative` as the capture shows.
- **Where OnClick is attached**: ListItemBasic: the item element; ListItemSwipeable: the content element (W:1529,
  1819).

## Not ported

- **Virtualization**: all rows render. The viewer keeps rows within 7500 px (default `viewportSafetyMarginBefore/After`)
  of the viewport; its spacers are `<script>` elements, which the captures drop.
- **Animate Items**: the enter/leave transitions of new rows are not ported (nothing shows at rest).
