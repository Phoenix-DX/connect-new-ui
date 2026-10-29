# Recorded decisions and facts that name the elements of UI flow zTemp_Flow

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:49` (ShareObject): | LegacyShareObject | `/UBTConnect/LegacyShareObject` | 7 | 71 | full | build | V3e · share button target of 12 in-scope screens; ShareObject (write) mocked (user, 2026-10-14) | built | route-legacyshareobject |
- `migration/board.md:87` (ShareObject): | ShareObject | `/UBTConnect/ShareObject` |  | 10 |  | skip | V3d · D2 · skip:variant · branch 2, revisit if LD mobileDirectoryBookmarkNote=true and C2NewBookmarks=false (user, 2026-10-14) | - |  |
- `migration/board.md:88` (TestOpenShare): | TestOpenShare | `/UBTConnect/TestOpenShare` |  | 9 |  | skip | V7 · skip:dead · test screen in zTemp flow (user, 2026-10-14) | - |  |

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:42` (ShareObject): | LegacyShareObject | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): ShareObject stored in the mock store collection; IsAllowed false with ?mockuser=expired raises Subscri |

## Decision ids on the board rows of the flow's screens

D2, V3d, V7
