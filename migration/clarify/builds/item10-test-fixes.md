# Item 10: test fixes after the parallel wave (2026-10-29)

Scope: the 20 failures in 5 test files of the full `npx vitest run` after the item 9 and item 10 agents. No commit, no
`git add`. Fix kinds: (a) the code change is right and the test is outdated; (b) the change broke behaviour and the code
is fixed.

## 1. MilestoneDetail `useMilestoneBlock.test.tsx` (9) and QRCodeGenerate `useGenerateQrCode.test.tsx` (6 and 1 unhandled rejection)

- Cause: `src/pages/OrbitAdminMilestoneDetail/mocks.ts:2-7` (new in item 10) imported the value
  `EMPTY_ADMIN_MILESTONE_TYPE` from the barrel `@/api/event`. The test setup imports the MSW handlers at the top
  (`src/test/setup.ts:5`, `import { handlers } from '@/mocks/handlers'`), before the `vi.mock` calls of a test file. So
  the barrel was loaded with the real `./repository` and `./milestoneBlocks`. The hooks import their calls from the
  barrel (`useMilestoneBlock.ts:1-6`, `useGenerateQrCode.ts:1`), so they called the real functions and not the mocks of
  `@/api/event/milestoneBlocks` and `@/api/event/repository`. The spies had 0 calls, and the real rejected call gave the
  unhandled rejection.
- Fix kind: (b). The mock imports the value from its module `@/api/event/adminMilestoneDetail` (the types stay on the
  barrel), with a comment that gives the reason. No other mock file imports a value from an api domain (checked with a
  script over every `mocks` file).
- Files changed: `app/src/pages/OrbitAdminMilestoneDetail/mocks.ts`.

## 2. `src/api/bookmark/repository.test.ts` (2) and `hooks.test.tsx` (2)

- Cause: the tests called `fetchBookmarkGroup` and `fetchBookmarkGroupSummaries`. Their screen handlers went with the
  deleted pages `pages/MyBookmarks/` and `pages/BookmarksByGroup/`, so `callAction` raised CommunicationException.
  Grep: `fetchBookmarkGroup`, `fetchBookmarkGroupSummaries`, `fetchBookmarkById`, `deleteBookmark`,
  `updateBookmarkNote`, `toBookmark`, `bookmarkKeys`, `useBookmarkGroupQuery` and `useBookmarkGroupSummariesQuery` have
  no caller outside `src/api/bookmark/` (only `src/api/README.md` and a stale row of `build/check-flow-fetch.mjs`).
- Fix kind: (a). User decision 2026-10-28: TST removed MyBookmarks and BookmarksByGroup, the routes are retired. Their
  dead code is deleted with its tests. The live calls (AddBookmark, DeleteBookmarkByBookmarkId of Connect2_Assemble_MUI,
  AddBookmark2, DeleteBookmarkByBookmarkId2 of UBTConnect), `bookmarkCache` and `bookmarkCards.ts` stay with their
  tests. The error-path test now uses two live server actions (`Request failed with status 500`).
- Files changed: `app/src/api/bookmark/hooks.ts` and `hooks.test.tsx` (deleted), `repository.ts`, `repository.test.ts`,
  `mapper.ts` (`BookmarkItemWire` is now `AssembleBookmarkAddedWire['CreatedBookmarkResponse']`), `mapper.test.ts`,
  `types.ts`, `keys.ts`, `index.ts`; `app/src/api/README.md` (bookmark section).

## 3. AssembleEvents "R3" (1)

- Not reproduced. `src/pages/AssembleEvents` passed alone before any fix (28 files), and the full run after the fixes
  passes. `AssembleEvents.test.tsx:109` mocks no api module (it uses MSW), so cause 1 does not apply. Most likely a
  timing failure under the load of the full run. No change.

## 4. Gate `build/check-flow-fetch.mjs`

- Two stale ALLOWED rows of the retired routes (`fetchBookmarkById`, `pages/BookmarksByGroup/... | fetchBookmarks`) are
  deleted. A row for `fetchScanMilestoneQRCode` is added with the reason of `fetchScanEventQRCode` (a server action, R2).
  `useAdminMilestoneDetail.ts:141` says "a server action, not wrapped (R2)", and the call path is
  `ActionGetScanMilestoneQRCode`. Result: `check-flow-fetch: ok`.

## Results

- Full `npx vitest run`: 716 test files passed, 4658 tests passed, no "Errors" line.
- `npm run typecheck`: pass. `npm run arch`: no violations (140 known ignored). eslint and prettier on the changed
  files: pass.
- `npm run unused`: fails, not because of these fixes.
  - knip: unused file `src/components/ui/legacy/GridGallery/index.ts`. Its only user was
    `pages/MyBookmarks/components/MyBookmarks_Album.tsx` (deleted). Decision needed: (a) delete the GridGallery
    component folder and its row in `src/components/ui/README.md`, as was done for `components/bookmark/NoBookmarks`
    (recommended); (b) keep it as a catalog component and add it to the knip ignore list.
  - knip config hint: `src/components/ui/DropdownSearch/index.ts` can leave the ignore list of `knip.json`.
  - `build/check-unused-exports.mjs`: 88 new rows (the new code of Bookmarks, OrbitAdminMilestones,
    OrbitAdminMilestoneDetail, NotificationDetails, PassportScan and others) and 33 stale rows (deleted pages). None
    comes from the bookmark files changed here.
- Note: the handlers GetBookmarkById, New_GetBookmarkById, DeleteBookmarkByBookmarkId and New_UpdateBookmarkNote in
  `src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts` now have no caller in the app. Not changed.
