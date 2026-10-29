# Item 10: channel row of ItemCard_WithNotes (Bookmarks Q5 (a))

User decision Bookmarks Q5 (a), 2026-10-29: build now. Port PreetyFormatDate to `lib/`, add the 3 block inputs, add a
Feed card in the demo mock. The user reviews it by eye. Status: built, tests and checks pass, no commit.

## TST evidence

| Fact | Source (file:line) |
|---|---|
| PreetyFormatDate(In_Date DateTime) → PrettyDate = JavaScript1.Out1 | `migration/runtime-sources/UBTConnectLibrary.controller.js:7952-8024` |
| JavaScript1 node `timeAgo`: future → "just now"; units year 31536000 s, month 2592000, week 604800, day 86400, hour 3600, minute 60, second 1; first unit with value >= 1 → "<n> <unit>[s] ago"; else "just now" | same file `:8026-8072` (timeAgo `:8028-8067`, Out1 `:8070`) |
| Block inputs In_ChannelName (Text, ""), In_ChannelLogo (Text, ""), In_PublishedAt (DateTime, NullDate) | `migration/screens/Bookmarks/sources/UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc.js:48-65`, `:155-178` |
| Row condition: ChannelName <> "" and ChannelLogo <> "" and not PublishedAt = NullDate() | same file `:692` |
| Columns_Two alias 12: reduce-first, gutter base, vertical align center, `margin-top-s`; LazyImage alias 13: ImageURL = logo (`:724`), height base_52, width full height, `ubt-avatar-image`; CustomText alias 14: channel name (`:776`), small, semi-bold, highlight of In_SearchString, Clicked → OnClickItemCard; CustomText alias 15: PreetyFormatDate(In_PublishedAt) (`:820`), neutral-7, extra small, Clicked → OnClickItemCard | same file `:692-870` |
| Bookmarks caller passes the card item fields `channelName`, `publishedAt`, `channelLogo` (on UI_Bookmark_CardItem, not in Bookmark_Card_Content) | `migration/screens/Bookmarks/sources/UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc.js:159`, `:187`, `:193`; wire `migration/screens/Bookmarks/analysis/calls.md:129-131` |
| Notes caller passes `noteCardItem.NoteCardContent` PublishedAt, ChannelName, ChannelLogo | `capture/survey-UBTConnect.json`, module `UBTConnect.Notes.NoteCard_Item.mvc$view`; wire `migration/screens/Notes/analysis/calls.md:132-134` |

No MCP and no TST access in this pass (brief). The survey and the live sources are the TST code.

## Files

Code (app/src):
- `lib/ubtConnectLibrary/actions.ts`: `preetyFormatDate(in_Date, now = new Date())`, next to `getRelativeTimeTag`.
- `components/note/ItemCardWithNotes/ItemCard_WithNotes.tsx`: inputs `inChannelName`, `inChannelLogo`,
  `inPublishedAt` (default NullDate); the row between the header `$b5` and the title container `$b16`.
- `api/bookmark/bookmarkCards.ts`: `BookmarkCardItem.publishedAt` (interim hand type, as the file already is).
- `api/note/types.ts`, `api/note/mapper.ts`: optional `channelName`, `channelLogo`, `publishedAt` on NoteCardItem;
  the interim wire type `NoteCardItemWireTst` gets the 3 NoteCardContent fields. No `openapi.yaml` edit.
- `pages/Bookmarks/components/Bookmarks_Card_Item.tsx`, `pages/Notes/components/NoteCard_Item.tsx`: pass the 3 fields.
- `pages/Bookmarks/hooks/bookmarksState.ts`: skeleton card `publishedAt` = NullDate.
- `pages/Bookmarks/mocks.ts`: scenario `real` only: one Feed card first (FICTIONAL: "Harvest Fair at Westvale",
  channel "Westvale Gazette", inline SVG logo, PublishedAt 2026-10-26 08:30). `captured` and `empty` are not changed.

Tests (written first, red before the change):
- `lib/ubtConnectLibrary/actions.test.ts`: 5 tests for every branch (future, under 1 s, each unit singular and plural,
  floor of the milliseconds, NullDate and empty text).
- `components/note/ItemCardWithNotes/ItemCard_WithNotes.test.tsx`: 3 tests (condition with each missing input, the row
  markup and position, the two clicks).
- `api/bookmark/bookmarkCards.test.ts` (new): the mapper keeps the 3 fields.
- `pages/Bookmarks/hooks/bookmarksState.test.ts`, `useBookmarks.test.tsx`: card helpers get `publishedAt`.

## Checks

- `npx vitest run src/components/note src/lib src/pages/Bookmarks src/pages/Notes src/api/note
  src/api/bookmark/bookmarkCards.test.ts`: Test Files 30 passed (30); Tests 211 passed (211).
- `npx tsc --noEmit`: no error in the changed files. Errors only in files of the other agents (tests written first):
  `containers/EntityDetailsActions/mocks.test.ts`, `pages/OrbitAdminMilestoneDetail/mocks.test.ts`,
  `platform/device/cameraPlugin.test.ts`.
- eslint and prettier on the 14 changed code and test files: clean. `npm run arch`: no dependency violations (140 known ignored).
- Not caused by this change: `src/api/bookmark/repository.test.ts` and `hooks.test.tsx` fail 4 tests on the group
  calls (DataActionGetAllBookmarksByGroup, GetGroupSummaries): CommunicationException, no handler. The working tree
  deletes `pages/BookmarksByGroup/` (board: skip), and its mocks with it.

## Parity (`route.py parity … --app http://localhost:5174`, after the last code change, 12:24-12:25)

| Route | State | Result | Before (item10-Bookmarks.md, item10-Notes-drift.md) |
|---|---|---|---|
| Bookmarks | default | clean (pixels 0.02 %) | class 1, pixels 0.02 % |
| Bookmarks | loading | clean | clean |
| Bookmarks | offline | clean (pixels 0.02 %) | class 1, pixels 0.02 % |
| Notes | default | pixel 1: 0.58 %, worst tile 11.6 % (band at y 760) | class 1, pixel 1: 0.58 %, worst tile 11.6 % |
| Notes | loading | clean | clean |
| Notes | offline | clean (pixels 0.02 %) | class 1, pixels 0.02 % |

No count rose. The class diff went away before this pass (shared Input, other agent). The captured states have no
channel card, so the row does not show in parity.

## Questions

1. DateTime time zone of PublishedAt (decision). `preetyFormatDate` reads the DateTime as a local date and time
   (`osDateTime.parseOsDate`, as `getRelativeTimeTag`); a "Z" or an offset on the wire is ignored. OutSystems gives the
   node a JS Date in local time. Options: a) keep the app rule until the BFF contract fixes the DateTime format;
   b) read an ISO offset in `preetyFormatDate` only; c) change `parseOsDate` for all callers. Recommendation: a.
2. Source header of a Feed Item card in the mock (decision). No capture has a Feed bookmark; the mock uses label
   "Feed Item" and the channel initial (MOCK ASSUMPTION). Options: a) keep until a capture with a Feed card exists;
   b) use the channel logo as the avatar URL as well. Recommendation: a.
3. NoteCardItem channel fields are optional (decision, after the contract regeneration). The `api/note` tests belong to
   another agent now, so the fields are optional and the mapper copies them as is. `toNoteCardItemWire` (Notes_List
   sent back with the screen variables) does not carry them, the same as ItemId2 and HasDetailAccess. Options: a) make
   them required with "" and NullDate defaults when the contract is regenerated; b) do it now and update the api/note
   tests. Recommendation: a.

Tool calls in this pass: 64 (over the budget of 55: many small Edit calls, one per change, and one parity re-run
after a comment-only fix of line numbers).
