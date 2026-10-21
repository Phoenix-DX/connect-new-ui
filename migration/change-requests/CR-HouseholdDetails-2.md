# CR-HouseholdDetails-2: shared mocks — data for the HouseholdDetails capture

- Status: applied
- Raised by: HouseholdDetails, 2026-10-15
- Blocks: `src/shared/UBTConnect/HouseholdDetails_Block/mockData.ts`,
  `src/shared/UBTConnect/Directory_EntityDetailsActions/mocks.ts` (FetchContactDetails), shell mock of
  Sync_Info_GetMain (bookmarks seed) — foundation owner
- Other routes using them: HouseholdCarousel, Profile, Locality_Details (same household mocks), bookmark screens (seed)
- Related question: HouseholdDetails decision question (route.py questions HouseholdDetails)

The parity route is `/UBTConnect/HouseholdDetails?HouseholdId=42438` (analysis/states.json); the block mocks answer
household 9001 for any id. Differences in `migration/screens/HouseholdDetails/parity/default.json` that come from the
fictional data, not from code:

1. **Household contact details**: TST shows 4 actions, Unmark | Notes | Gift | Share (dom/default.html, actions
   menu `b2-b33-b2-b1-Content`), so FetchContactDetails for EntityType Household had no phone, mobile or email
   (HasCall / HasEmail False, Directory_EntityDetailsActions.tsx:296-300). The mock answers neutral numbers and an
   email for every entity, so the build shows 6 actions (Call, Email extra). Member rows keep call + email (captured).
   Expected: FetchContactDetails answers empty Phone / MobilePhone / HomePhone / WorkPhone / Email for
   EntityType `Household`.
2. **Household bookmarked**: TST shows "Unmark", check icon and card class `ubt-image-card__bookmarked`
   (HouseholdDetails_Block README v3 "bookmarked"); the mock user has no bookmarks (empty Sync_Info_GetMain seed).
   Expected (decision for the foundation owner / user): seed a local bookmark for the household id of the parity route,
   or accept this as a known data difference.
3. **Text lengths** (masked in the capture, so only widths matter): title "Locality, Country" is 5 / 7 / 9 letters
   (dom/default.html:23; mock "North Sample, Sampleland" = 5 / 7 / 10); the address wraps to two lines in TST
   (`b2-b3` address link, screenshot `default.expected.png`) while the mock address is one line.

## Workaround in the route until applied
None: the route composes HouseholdDetails_Block unchanged.

## Resolution (foundation owner)
Foundation owner, 2026-10-15:
- §1 `Directory_EntityDetailsActions/mocks.ts`: contact channels per entity type; Household and Supper Meetings answer empty phones / email.
- §3 `HouseholdDetails_Block/mockData.ts`: household 9001 country "Exampland" (title 5/7/9) and an address with the captured word lengths and line breaks; three EntitiesCarousel tests updated.
- §2 `shell/mocks.ts`: legacy LocalBookmark row (Contact / Contacts, ObjectId 42438) in Sync_Info_GetMain. Not effective yet: parity default still shows "Bookmark" (3 class + 1 text). To check: user id / C2NewBookmarks path in the mock app.
- §2 completed (F4a foundation owner, 2026-10-15). Cause: not the user id nor the C2 path (C2NewBookmarks off, legacy
  Get_LocalBookmarkByObjectId(Contact, 42438) finds the seeded row). The block's OnReady read landed between
  DeleteAllLocalBookmark and CreateOrUpdateSomeLocalBookmark of the app start's SynchBookmarks (each its own IndexedDB
  transaction, OutSystems.js deleteAll → executeTransaction): in TST the screen's reads come before the app start's sync
  (analysis/calls.json: GetHousehold 4270 ms, Sync_Info_GetMain 6172 ms) and see the copy kept from earlier runs; the
  clone's first screen loads right after the app start's GetUserInformation step (shell/userInfo.ts hold), i.e. while it
  syncs, and the capture tab's local copy did not exist. Changes: `shell/testSession.ts` seeds the mock user's legacy
  bookmarks into the local copy for `?mocksession=unlocked` (as the capture tab kept them; `mockLocalBookmarks` exported
  from `shell/mocks.ts`); `shell/localEntities/entities.ts` `replaceAll` + `localBookmarks.ts` SynchBookmarks /
  SynchBookmarksC2 delete and re-create in one transaction (documented deviation: a reader never sees the empty copy).
- Rest of default (Bookmark button and Call/Email greyed): `Directory_EntityDetailsActions` passed the caller's partial
  EnableOptions record to ActionsMenu without the ActionsMenuEnableOptions defaults (EnableBookmark / Share / Call / Email
  True; UBTConnectLibrary.model.js:4135-4156, HouseholdDetails_Block.mvc.js:1509-1514) → now merged.
- Parity HouseholdDetails after F4a: see the regression line below.
