# Brief: G2 (one record shape in the `MyBookmarks` cache), a migration fix on `main`

Not a refactor step. Decision U3 (user, 2026-10-23: "oki tôi accept 2 quyết định của Fable"); Fable's proposal is in
`migration/refactor/followups.md`, row G2. The work runs on branch `main`, in the worktree
`/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/b1c0f7f3-a5be-42a8-b170-074abce216da/scratchpad/wt-main`,
with its own dev server on http://localhost:5175. The route lifecycle of the migration applies (CLAUDE.md, rules 4 and
5): feedback on BookmarksByGroup, fix, `route.py fixed`, `route.py parity`, `route.py ready`; the USER tests and
confirms the review; only then `route.py finish`, the commit on `main`, and a merge of `main` into
`refactor/architecture` (before step P5-3-bookmark of the refactor).

## The bug (evidence: `migration/refactor/handoffs/P5-3-bookmark/dev.md`)

In OutSystems, BookmarksByGroup and Connect2_Assemble_MUI use the same Connect2_LegacyShared client actions
(`GetCachedMyBookmarks` / `PutCachedMyBookmarks`) with one structure, `Connect2_MyBookmarks_IS.BookmarkItem`
(PascalCase, with `Group` and `DateCreatedUtc`). The port gave BookmarksByGroup its own camelCase `BookmarkItem`
(`app/src/screens/BookmarksByGroup/types.ts`) and its own cache writer (`components/actions.ts`, `get/putCachedMyBookmarks`)
on the same cache type and group key as `app/src/shared/Connect2_LegacyShared/lib/actions.ts` (`getCachedMyBookmarks`,
`putCachedMyBookmarks`, `addBookmarkToCache`, `removeBookmarkFromCache`). After a user opens BookmarksByGroup,
bookmarking a household in AssembleDetail makes `addBookmarkToCache` raise a TypeError.

## Do

1. Reproduce it first with a failing test in `app/src/shared/Connect2_LegacyShared/lib/actions.test.ts`: fill the group
   through the BookmarksByGroup path, then `addBookmarkToCache`: it must not throw, the list is sorted by
   `DateCreatedUtc` descending, and `removeBookmarkFromCache` finds the row.
2. Fix: the cache holds one shape, the OutSystems `BookmarkItem` of `shared/Connect2_LegacyShared/lib/structures.ts`.
   Delete the local `get/putCachedMyBookmarks` of `screens/BookmarksByGroup/components/actions.ts`; call the
   Connect2_LegacyShared ones; convert with two small mappers (`toCacheRecord(row, group)`, `fromCacheRecord(record)`;
   `Group` from the route input, `DateCreatedUtc` from the wire row). Follow the compiled code (cite the controller lines
   as the file does today). Keep the screen's rendering and calls unchanged.
3. Tests: the new test passes; `npx vitest run src/shared/Connect2_LegacyShared src/screens/BookmarksByGroup
   src/shared/Connect2_Assemble_MUI src/screens/MyBookmarks`; typecheck; eslint and prettier on the changed files.
4. Do not change `src/api/openapi.yaml`, mock fixtures, CSS, `.auth/` or `migration/.raw/`. Do not commit.

## Gate (tester)

- `npm --prefix app run ci` in the worktree.
- `python3 .claude/skills/outsystems-screen-spec/scripts/route.py parity BookmarksByGroup --app http://localhost:5175`
  (run from the worktree root). AssembleDetail is a no-capture route: its review is by hand.
- Port 5173 is another clone and port 5174 is the refactor branch: never use them, never stop them.
