# SubLayout: reader notes (stage 1)

## TST presence check
- All 4 own blocks have a TST file (tst_source.py show): SubLayout_Browse_Section, SubLayout_DirectoryCalendar, SubLayout_DirectoryDetailScreen, SubLayout_DirectoryDetailScreen_Section.
- SubLayout_DirectoryCalendar TST: style "calendar-full-content" (line 124), Placeholder_CalendarContent (line 137).
- Pack elements absent on TST: none seen. TST elements absent in the pack: not scanned line by line.

## Not found in React
- SubLayout_DirectoryCalendar: only user MyCalendar; board line 75: `MyCalendar | /UBTConnect/MyCalendar | skip | V7 · skip:dead · replaced by MyEntertaining; revisit if a link to MyCalendar appears (user, 2026-10-14)`.

## Pack gaps
- HideActions of SubLayout_DirectoryDetailScreen: the pack tree shows no use of it; React sets display-none on the call-to-action placeholder (citing the compiled view). TST file not read for that style.
- Referenced UBTConnectLibrary blocks (SubLayout_Section, CustomContainer, CustomText) have no body in the pack.
- app.md of the pack is empty; React found by grep: components/layout/BrowseSection, DirectoryDetailLayout, DirectoryDetailSection, SectionLayout.
- strings.md is empty.

## Mock files
- None.

## Screens
- None (block-only flow).
