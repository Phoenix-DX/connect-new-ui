# BottomBarContent

OutSystems: `UBTConnect.App_Common.BottomBarContent` · pack `migration/blocks/UBTConnect.App_Common.BottomBarContent.md`

Inputs, events: none. Placeholder: `Placeholder_BottomBarItems` → `children` (in `div.bottom-bar.ph`). Pure markup.

## Captured variants (6 distinct; 4 tested)

| Capture | Source                                      |
| ------- | ------------------------------------------- |
| v1      | BookmarksByGroup/default (Bookmarks active) |
| v2      | BrowseCountries/default (Directory active)  |
| v3      | HomeFeed/default (Home active)              |
| v4      | HouseholdCarousel/default (no active item)  |

The variants differ only in the caller's list (BottomBarMenu); the full HomeFeed markup is checked in
`UBTConnect/BottomBarMenu`.

## Not captured

- Nothing: the block has no state of its own.
