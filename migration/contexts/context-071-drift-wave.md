# context-071: drift wave, TST publishes of 2026-10-27 and 2026-10-29 (2026-10-29)

## Result
- Drift wave (decision I10-12): all captured routes re-captured on TST (read-only); 9 work packages built
  (`../clarify/review/drift-decisions-2026-10-29.md`); commit f32ebfa1.
- Publish 2 pass: gaps G1-G4 fixed (`../clarify/builds/publish2-fix.md`); P2F-Q1 to Q3 answered (a).
- OneSchoolGlobalCarousel finished (review round 1 confirmed): narrow offline exemption for the device bookmark state.
- Flag `mobileDirectoryHouseholdGallery` recorded: on, as the TST probe.
- MCP session rows 9-12 (`../clarify/review/mcp-session-2026-10-29.md`): the Notifications mock follows the DEV server
  logic; the three fetches at start whose failure React dropped now go to the flow handler (WP6 Q2 a).
- Gates: `npm run unused` clean; `npm run ci` 730 files / 4753 tests; sweep 68 routes, 0 with differences.

## Decisions (who, date)
- User 2026-10-29: the drift scope and WP1-WP9 (all a); publish 2 (a); round 2 (G1-G4, OSG offline exemption, MCP
  session, gallery probe; all a); WP6 Q2 (a); P2F-Q1 to Q3 (a); OSG carousel review confirm.
- Applied as reversible, to confirm: WP9-Q1, WP1-Q1 to Q3, FU 1-9, the css_sets rule, the Notes pill rule
  (`drift-decisions-2026-10-29.md`, "Applied as reversible").

## Facts learned (evidence)
- TST had two publishes after the survey of 2026-10-28 (moduleinfo token change; 50 files, then 9 more).
- FetchNotifications (DEV): the only-unread filter runs in the data action and leaves the unread count 0;
  Get_UI_Notifications never sets HasUnreadMessages. Delete_Notifications reads only Id.
- GetAvailableUsers: page size 50 (ProfileList.MaxRecords); labels of ShareUserListType; the grouping is in
  Connect2_Sharing_CS.
- A failed block fetch at start goes to the flow handler (E1, E3 of `../clarify/review/item2-fetch-errors.md`).

## Files changed
- App: Notifications, EventDetail, LDM_EventDetail_V2, Bookmarks, Notes, Locality_Details, ShareSheet,
  ItemCard_WithNotes, flags registry; `migration/parity-exemptions.json`, `migration/flags.{json,md}`.

## Open issues
- M-Q4 LegacyShareObject: the group rule is in the external Directory API (MCP row 11b); user chose (b) a read-only
  TST probe of one search, then the mock follows.
- `flags.py export` would change the routes of 12 flags (refreshed survey): sync not done.
- EmptyListBorderless moved into EmptyState by the jscpd fix, against Notes Q10: to report.

## Next
- The M-Q4 probe; then the follow-ups in `../clarify/builds/README.md`.
