# BottomBarMenu

OutSystems: `UBTConnect.App_Common.BottomBarMenu` · pack `migration/blocks/UBTConnect.App_Common.BottomBarMenu.md`

| Input         | Type                           | Prop            | Default |
| ------------- | ------------------------------ | --------------- | ------- |
| ActiveItem    | Text (Connect_BottomBar_Items) | `activeItem`    | `''`    |
| useMapsItems  | Boolean                        | `useMapsItems`  | `false` |
| isHouseholder | Boolean                        | `isHouseholder` | `false` |
| isRootPage    | Boolean                        | `isRootPage`    | `false` |

The block raises one event: `BottomBar_Clicked(In_Item)` → `onBottomBarClicked(inItem)`. The block has these children:
BottomBarContent, BottomBarItem, App_IconBadge, Icon (Base_24) and CustomText (xs). App_IconBadge shows the Updates count
(`UBTConnect.Directory_Updates_UnreadCount`, max 9).

- OnInitialize: the block calls `BottomBar_GetList` (UBTConnect_Utils/lib/actions.ts).
  - The list has five items: Home, Directory, Updates, Bookmarks, Menu.
  - The active item gets the link class `active`, the active icon and the colour primary.
  - Each other item gets the colour neutral-6.
- OnReady: the block does two steps in this order.
  1. It runs `Directory_Updates_RefreshBottomBarCount(False)` (UBTConnect/lib/actions.ts).
     This action calls `ServiceAPIGet_UI_UpdateItems_UnreadCount_All` only when the last check is 5 minutes old or more.
     The recorded mock is in `src/platform/bootstrap/mocks.ts`.
  2. It runs OSUI `SetBottomBarActiveElement(-1)`.
- OnParametersChanged: this event runs only when a parent changes the inputs (BottomBarMenu.mvc.js:513-560):
  - For a householder, the first time: the block sets Retried and runs OnInitialize.
  - In the other cases: the block runs BottomBarSlider_ForceRefresh. When useMapsItems is off, the block stops here.
  - Then the block runs the Delayed_BottomBarSlider_ForceRefresh JS. The React app ports this JS as is, with the DOM
    classes.
- Event_BottomBar_Clicked: the user clicks an item. The result depends on the item.
  - The item is the active item of a root page: the block scrolls `.layout .content` to the top for Bookmarks.
    For the other items, it scrolls `.active-screen` to the top.
  - Home: the app opens HomeFeed.
  - Directory: the app opens CountryList or Locality_Details. The flag C2EnableC1DirectoryView selects the screen
    [BottomBar.tsx, `getHasC1DirectoryView`].
  - Updates: the app opens Updates_SingleList.
  - Bookmarks: the app opens Bookmarks, with no flag (TST publish of 2026-10-27, BottomBarMenu.mvc.js:623-626; the
    flags C2NewBookmarks and mobileDirectoryBookmarkNote no longer select the screen; MyBookmarks is retired).
  - Menu: the app opens Menu.
  - Any other item: the block raises the event.

## Captured variants (1 distinct in the pack; 2 tested)

| Capture | Source                                        |
| ------- | --------------------------------------------- |
| v1      | BookmarksByGroup/default (pack: wrapper only) |
| v2      | HomeFeed/default (Home active, full markup)   |

## Not captured / not settled

- `useMapsItems` (Explore, Bookmarked, Settings): no screen passes it. No capture contains the item identifiers (= labels).
  Status: `NotCaptured` (question Q-W2A-1).
- `SetBottomBarActiveElement(-1)`: the React app marks no item with it. The captures do not contain the OSUI
  runtime source.
- The Updates icon is a Link (App_IconBadge) inside the item Link, as captured. A click on either Link runs
  Event_BottomBar_Clicked. OutSystems can stop the inner click. The captures do not prove this.
