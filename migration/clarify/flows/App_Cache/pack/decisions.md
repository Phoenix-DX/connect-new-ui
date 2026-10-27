# Recorded decisions and facts that name the elements of UI flow App_Cache

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## app-shell.spec

- `migration/app-shell.spec.md:310` (CacheControl_UserInfo_Wrapper): | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | `CacheControl_UserInfo_Wrapper` on Menu, CountryList, Profile, ContactUsDetails… | Menu calls:7, 101-107 | recorded, `Directory_UserCurrent` filled from the mock user (knowledge/mock-fixtures.md:25-27) |

## change requests

- `migration/change-requests/CR-Search-3.md:5` (CacheControl_UserInfo_Wrapper): - Block: shell `app/src/shell/userInfo.ts` (`getUserInformation`) or the shared block that calls it on Search (FilterSheet / CacheControl_UserInfo_Wrapper / CommonUI_InsideLayout / BottomBarMenu)

## ADRs (stack.md)

- `app/docs/reference/stack.md:261` (CacheControl_UserInfo_Wrapper): - The memoryCache readers (`CacheControl`, `CacheControl_*`, `CacheControl_UserInfo_Wrapper`) are rewritten in P5-4, where they are; P6 only moves the files.

## knowledge

- `migration/knowledge/audit-a1-empty-handlers.md:36` (CacheControl_UserInfo_Wrapper): | `app/src/screens/Notifications/components/MoreActionSheet.tsx:154-155` | `onMarkAllAsRead`, `onDeleteAllNotification` | Notifications_MoreActionSheet.mvc.js Handler_MarkAllAsRead :346-358 and Handler_DeleteAllNotification :254-265: breakpoints only. The suspected "DeleteAllNotification triggers Lo
