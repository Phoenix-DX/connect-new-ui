# Recorded decisions and facts that name the elements of UI flow Deprecated_Calendar_PersonalEvent

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:82` (PersonalEventDetails): | PersonalEventDetails | `/UBTConnect/PersonalEventDetails` |  | 59 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |
- `migration/board.md:83` (PersonalEventForm): | PersonalEventForm | `/UBTConnect/PersonalEventForm` |  | 108 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |
- `migration/board.md:85` (Recurrence): | Recurrence | `/UBTConnect/Recurrence` |  | 80 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |
- `migration/board.md:86` (Reminder): | Reminder | `/UBTConnect/Reminder` |  | 53 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |
- `migration/board.md:91` (ViewEventList): | ViewEventList | `/UBTConnect/ViewEventList` |  | 6 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |

## flags

- `migration/flags.md:9` (PersonalEventForm): | `action:action_ToggleSearchMode` (gone) (candidate) | flag check action | PersonalEventForm | - | open | - | **open** |
- `migration/flags.md:17` (PersonalEventForm): | `action:event_ToggledSearchMode` (gone) (candidate) | flag check action | PersonalEventForm | - | open | - | **open** |
- `migration/flags.md:18` (PersonalEventForm): | `action:event_ToggledSearchResult` (gone) (candidate) | flag check action | PersonalEventForm | - | open | - | **open** |
- `migration/flags.md:26` (PersonalEventForm): | `action:handler_ToggleMonthSelector` (gone) (candidate) | flag check action | PersonalEventForm, Recurrence | - | open | - | **open** |
- `migration/flags.md:30` (PersonalEventForm): | `action:handler_ToggledSearchMode` (gone) (candidate) | flag check action | PersonalEventForm | - | open | - | **open** |
- `migration/flags.md:31` (PersonalEventForm): | `action:handler_ToggledSearchResultsList` (gone) (candidate) | flag check action | PersonalEventForm | - | open | - | **open** |
- `migration/flags.md:26` (Recurrence): | `action:handler_ToggleMonthSelector` (gone) (candidate) | flag check action | PersonalEventForm, Recurrence | - | open | - | **open** |
- `migration/flags.md:46` (Recurrence): | `action:tagToggleToggle` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, Profile, Recurrence … | - | open | - | **open** |
- `migration/flags.md:158` (Picker_Date): - `action:handler_ToggleMonthSelector`: `UBTConnect.Deprecated_Calendar_PersonalEvent.Picker_Date.mvc.js`

## Decision ids on the board rows of the flow's screens

V7
