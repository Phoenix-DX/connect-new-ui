# Recorded decisions and facts that name the elements of UI flow App_Services

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:22` (Services): | Services | `/UBTConnect/Services` | 3 | 24 | lite | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-services |

## change requests

- `migration/change-requests/CR-BrowseDirectory-2.md:31` (Services): - Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's
- `migration/change-requests/CR-CountryDetails-2.md:41` (Services): - Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's
- `migration/change-requests/CR-BrowseDirectory-3.md:37` (Services): - Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's
- `migration/change-requests/CR-Services-1.md:1` (Services): # CR-Services-1: shell renders CommonUI blocks (Block_PINUnlock, Dialog_AccessRestrictedAction) on a screen without CommonUI
- `migration/change-requests/CR-Services-1.md:4` (Services): - Raised by: Services, 2026-10-15
- `migration/change-requests/CR-Services-1.md:10` (Services): - `UBTConnect.App_Services.Services.mvc.js:1207`: `placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty`; the
- `migration/change-requests/CR-Services-1.md:14` (Services): - Parity (`migration/screens/Services/parity/{default,loading,offline}.json`): `div#b13-$b2 [App_PIN.Block_PINUnlock]`
- `migration/change-requests/CR-Services-1.md:21` (Services): screens, like `LOCK_SCREEN_IGNORED`), so Services gets neither block. Consequence to confirm with the user: as in

## ADRs (stack.md)

- `app/docs/reference/stack.md:143` (Services): - Context: Build screens use Leaflet (BrowseDirectory, CountryDetails), SortableJS (Services), ReactiveHtmlSanitizer (MessageDetail, Notifications, Photobook) and OSUI patterns with provider libraries: Carousel (Splide), DropdownSearch (Virtual Select), RangeSlider (noUiSlider + wNumb). Versions rea

## known original bugs

- `app/docs/known-original-bugs.md:11` (Services): | B3  | `UBTConnect.App_Services.Services`, drag reorder of Favourites                                              | Sortable's 0-based OldIndex/NewIndex are passed on and `Action_ChangeOrderLocal` subtracts 1 again: a touch drag drops one row and duplicates the dragged one; a mouse drag inside Fav

## knowledge

- `migration/knowledge/orbit-assemble-ldm.md:25` (Services): `GetServices.ExterrnalPackages_Trove`). Connect opens it through the external-app dialog (Services / HomeFeed
- `migration/knowledge/runtime-sources.md:28` (Services): | `UBTConnect.App_Services.controller.js` | — | Services flow controller (flow exception handler) |

## Decision ids on the board rows of the flow's screens

V3a
