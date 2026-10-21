### app/src/shared/UBTConnect/BottomBarMenu/README.md

**Change 1**

Before:

> Event: `BottomBar_Clicked(In_Item)` → `onBottomBarClicked(inItem)`. Children: BottomBarContent, BottomBarItem,
> App_IconBadge (Updates: `UBTConnect.Directory_Updates_UnreadCount`, max 9), Icon (Base_24), CustomText (xs).
> 
> - OnInitialize: `BottomBar_GetList` (UBTConnect_Utils/lib/actions.ts): Home, Directory, Updates, Bookmarks, Menu.
>   Active item: link class `active`, active icon, colour primary (else neutral-6).
> - OnReady: `Directory_Updates_RefreshBottomBarCount(False)` (UBTConnect/lib/actions.ts:
>   `ServiceAPIGet_UI_UpdateItems_UnreadCount_All` when the last check is ≥ 5 minutes old; recorded mock in
>   `src/shell/mocks.ts`), then OSUI `SetBottomBarActiveElement(-1)`.
> - OnParametersChanged: Retried/OnInitialize for a householder, BottomBarSlider_ForceRefresh, and the
>   Delayed_BottomBarSlider_ForceRefresh JS (ported as is, DOM classes) — reached only when a parent changes the inputs.
> - Event_BottomBar_Clicked: the active item of a root page scrolls `.layout .content` (Bookmarks) or `.active-screen`
>   to the top; otherwise HomeFeed; CountryList / Locality_Details (C2EnableC1DirectoryView); Updates_SingleList;
>   Bookmarks / New_MyBookmarks / MyBookmarks (C2NewBookmarks, mobileDirectoryBookmarkNote); Menu; else the event.

After:

> The block raises one event: `BottomBar_Clicked(In_Item)` → `onBottomBarClicked(inItem)`. The block has these children:
> BottomBarContent, BottomBarItem, App_IconBadge, Icon (Base_24) and CustomText (xs). App_IconBadge shows the Updates count
> (`UBTConnect.Directory_Updates_UnreadCount`, max 9).
> 
> - OnInitialize: the block calls `BottomBar_GetList` (UBTConnect_Utils/lib/actions.ts).
>   - The list has five items: Home, Directory, Updates, Bookmarks, Menu.
>   - The active item gets the link class `active`, the active icon and the colour primary.
>   - Each other item gets the colour neutral-6.
> - OnReady: the block does two steps in this order.
>   1. It runs `Directory_Updates_RefreshBottomBarCount(False)` (UBTConnect/lib/actions.ts).
>      This action calls `ServiceAPIGet_UI_UpdateItems_UnreadCount_All` only when the last check is 5 minutes old or more.
>      The recorded mock is in `src/shell/mocks.ts`.
>   2. It runs OSUI `SetBottomBarActiveElement(-1)`.
> - OnParametersChanged: this event runs only when a parent changes the inputs. The block runs these actions:
>   - Retried/OnInitialize, for a householder.
>   - BottomBarSlider_ForceRefresh.
>   - The Delayed_BottomBarSlider_ForceRefresh JS. The React app ports this JS as is, with the DOM classes.
> - Event_BottomBar_Clicked: the user clicks an item. The result depends on the item.
>   - The item is the active item of a root page: the block scrolls `.layout .content` to the top for Bookmarks.
>     For the other items, it scrolls `.active-screen` to the top.
>   - Home: the app opens HomeFeed.
>   - Directory: the app opens CountryList or Locality_Details. The flag C2EnableC1DirectoryView selects the screen
>     [BottomBarMenu.tsx, `getHasC1DirectoryView`].
>   - Updates: the app opens Updates_SingleList.
>   - Bookmarks: the app opens Bookmarks, New_MyBookmarks or MyBookmarks. The flags C2NewBookmarks and
>     mobileDirectoryBookmarkNote select the screen.
>   - Menu: the app opens Menu.
>   - Any other item: the block raises the event.

**Change 2**

Before:

> - `useMapsItems` (Explore, Bookmarked, Settings): no screen passes it and the item identifiers (= labels) are in no
>   capture: `NotCaptured` (question Q-W2A-1).
> - `SetBottomBarActiveElement(-1)`: treated as marking nothing (OSUI runtime source not in the captures).
> - The Updates icon is a Link (App_IconBadge) inside the item Link, as captured: a click runs Event_BottomBar_Clicked
>   from both (OutSystems may stop the inner click; not verifiable from the captures).

After:

> - `useMapsItems` (Explore, Bookmarked, Settings): no screen passes it. No capture contains the item identifiers (= labels).
>   Status: `NotCaptured` (question Q-W2A-1).
> - `SetBottomBarActiveElement(-1)`: the React app marks no item with it. The captures do not contain the OSUI
>   runtime source.
> - The Updates icon is a Link (App_IconBadge) inside the item Link, as captured. A click on either Link runs
>   Event_BottomBar_Clicked. OutSystems can stop the inner click. The captures do not prove this.

