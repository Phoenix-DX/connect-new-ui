# context-071: drift wave, TST publishes of 2026-10-27 and 2026-10-29 (2026-10-29)

## Result
- Drift wave (decision I10-12): all captured routes re-captured on TST (read-only); 9 work packages built
  (`../clarify/review/drift-decisions-2026-10-29.md`); commit f32ebfa1.
- Publish 2 pass: gaps G1-G4 fixed (`../clarify/builds/publish2-fix.md`); P2F-Q1 to Q3 answered (a).
- OneSchoolGlobalCarousel finished (review round 1 confirmed): narrow offline exemption for the device bookmark state.
- Flag `mobileDirectoryHouseholdGallery` recorded: on, as the TST probe.
- MCP session rows 9-12 (`../clarify/review/mcp-session-2026-10-29.md`): the Notifications mock follows the DEV server
  logic; the three fetches at start whose failure React dropped now go to the flow handler (WP6 Q2 a).
- Gates (final, after the late fixes): `npm run ci` 731 files / 4756 tests; sweep 68 routes, 0 with differences.

## Decisions (who, date)
- User 2026-10-29: the drift scope and WP1-WP9 (all a); publish 2 (a); round 2 (G1-G4, OSG offline exemption, MCP
  session, gallery probe; all a); WP6 Q2 (a); P2F-Q1 to Q3 (a); OSG carousel review confirm.
- The reversible rows (WP9-Q1, WP1-Q1 to Q3, FU 1-9, css_sets, Notes pill) confirmed; Notes Q10 now (a) the
  EmptyState preset; flag sync (a); PINUnlock replace (a); M-Q4 probe (b) (user, 2026-10-29, late).

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
- M-Q4 done after the commit: read-only TST probe (user b, MCP row 11c): a search answers Label "" and at most 50
  rows; the mock follows (LegacyShareObject parity clean).
- Done after the commits: flag route sync (export tool fixed; an earlier scan lacked `--survey`/`--screens`),
  Splash replace (MCP row 14), Orbit mock facts (rows 15, 16); U1 stays unclear (no impact).
- None open for the user from this wave.

## Next
- The follow-ups in `../clarify/builds/README.md` (B6 address section needs a householder capture).
