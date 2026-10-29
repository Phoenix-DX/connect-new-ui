# Recorded decisions and facts that name the elements of UI flow SubLayout

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## knowledge

- `migration/knowledge/audit-a1-empty-handlers.md:37` (SubLayout_DirectoryDetailScreen_Section): | `app/src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx:22` | CustomContainer Clicked | the click raises the block's event Clicked; its only compiled parent (SubLayout_DirectoryDetailScreen_Section) binds no event | stays; the old note "controller clicked$Action resolves" (an eve
- `migration/knowledge/audit-a1-empty-handlers.md:90` (SubLayout_DirectoryDetailScreen_Section): MilestoneDetail, GuestArrangements) and SubLayout_Section (via SubLayout_DirectoryDetailScreen_Section:

## parity exemptions

- `migration/parity-exemptions.json:441` (SubLayout_Browse_Section): "pathRegex": "(div#b1-ContentWrapper\\.content|div#b1-MainContentWrapper\\.ThemeGrid_Container\\.main-content|div#b1-Content\\.content-middle|div#\\$b2\\.OSBlockWidget\\[SubLayout\\.SubLayout_Browse_Section\\]|div\\.directory-detail-screen|div#b2-Placeholder_BottomSection|div#\\$b10\\.OSBlockWidget\
