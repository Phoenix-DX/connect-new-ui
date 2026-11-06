# context-082: re-captures of 2026-11-06 and the user's decisions

## Result
- Re-captured on TST (read-only, the capture account of the plan): NotificationDetails, Household_Relations, Search.
  - NotificationDetails: the captured record is now a Lord's Day Meal adaptive card. It has the header "Meal
    Allocation", the summary "Host for Wednesday Meal", one dark text block and two positive actions. The fictional record
    (`app/src/mocks/fictional/notifications.ts`, `CAPTURED_DETAIL_CARD`) follows it; `MessageSeed` has `Summary`.
    The six `TST-DRIFT-2026-11-05-NOTIFICATIONDETAILS-*` parity rules are deleted. Parity clean (3 states).
  - Search: the live header has no FilterSheet_Icon; the header content is the FilterPills container with
    `Horizontal_Filter_TagList` (Filter label + six pills: All, Households, Members, Places, Events, Schools).
    `searchCategory_GetList` has Events (not for the map target) and Schools. Parity clean (3 states).
  - Household_Relations: the member of the capture plan has no relations on TST any more (empty family, no
    siblings), so the new capture is no baseline. The analysis and the parity of 2026-10-29 are restored from git
    (the two `HOUSEHOLDRELATIONS` drift rules stay). It waits for a member with relations.
- `flags.py scan` re-run through the store (user: option a): 66 flags of the deleted routes and the old survey marked
  gone, answers kept. Row 23 (JSON key names): user chose (c), defer to the backend phase, then (a).
- Store: `migration/sources/pinned.txt` keeps older versions that a document still cites (two pretty files);
  `sources_store.py check` and `gc` treat them as referenced. `gc` deleted 4 old raw versions nobody cites.
- Route check of NotificationDetails and Search regenerated from the new analysis.

## Decisions (who, date)
- User 2026-11-06 ("làm thôi"): row 23 (c); re-capture the three routes now (b); re-scan the flags (a).
  The `confirm` of Bookmarks, NotificationDetails, OrbitAdminMilestoneDetail still waits for the user's test.
- Fable: the Household_Relations capture with empty data is not a baseline; restored the previous one.

## Facts learned (evidence)
- The adaptive card of TST: `TextBlock` with `color: dark` (inline `rgb(0, 0, 0)`), spacing `medium` (17 px, no
  separator line) before the `ActionSet`; `adaptivecards` 2.5.0 on both sides (`Connect2_LegacyShared.AdaptiveCards.js`).
- `UBTConnect_Utils.SearchCategory_GetList` (live): All, Households, Members (People), Places, Events unless
  `In_SearchTarget` is the map, Schools; the Search screen calls it with "".
- A capture with the account list: `batch_capture.cjs run` reused `.auth/state.json` (PIN by the shared PIN).

## Files changed
- `app/src`: `mocks/fictional/notifications.ts`, `messages.ts`, `pages/NotificationDetails/mocks.ts` and test,
  `pages/Search/components/SearchView.tsx`, `hooks/searchState.ts` and tests.
- `migration`: screens NotificationDetails and Search (analysis, manifest, parity), `sources/` (new versions,
  `pinned.txt`), `parity-exemptions.json`, `flags.json`, `flags.md`, `knowledge/tst-drift-2026-11-05.md`,
  `clarify/auto-decisions-2026-11-05.md` (row 23), `route-check/` (two routes). `tools/common/sources_store.py`.

## Open issues
- Household_Relations: a member with relations for the re-capture (user). The 17 routes without a capture (user).
- `confirm` of Bookmarks, NotificationDetails, OrbitAdminMilestoneDetail (plus Search, re-built today).

## Next
- The user's confirms; then `restamp.py`. Then the Household_Relations member.
