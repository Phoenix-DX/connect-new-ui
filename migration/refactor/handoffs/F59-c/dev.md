# Dev · F59-c · Split the large pages files (400 lines or less)

Status: pass

## Result

Four files split by `migration/tools/refactor/f59-c-split.ts` (base = HEAD, the wip(F58) commit; reads the sources
at HEAD, each code line copied once, same output when run again; prints the lines that no output uses: imports,
headers, signatures). `npm --prefix app run ci` exits 0. Baselines: arch 72/72, depcruise 144/144 (0 stale), knip
-2 rows (UpdatesSingleListFlags/Flows are now used by the hook), no row added.

| Old file (lines) | New files (lines) |
|---|---|
| useEventBooklet.ts (494) | useEventBooklet.ts 370, eventBookletDataFlows.ts 165 |
| eventBookletState.ts (482) | eventBookletState.ts 336, eventBookletTypes.ts 103, eventBookletLists.ts 67 |
| BookmarkGroupView.tsx (439) | BookmarkGroupView.tsx 187, bookmarkGroupRows.tsx 299 |
| useUpdatesSingleList.ts (408) | useUpdatesSingleList.ts 362, updatesSingleListFlows.ts 52 |

## Notes

- `useEventBookletDataFlows` (Refresh*, OnAfterFetch_*, resets; lines copied as they are) is a function that the hook
  calls once after `write`, with `write`, `vars`, `parameters` and `asUnknownError`. It has a `use` name although it
  calls no hook: the React compiler lint (`react-hooks/refs`) refuses to pass ref-reading functions to a plain function.
  `asUnknownError` stays in `useEventBooklet.ts` and is passed in, so the `legacy/os/exceptions` import (a row of the
  depcruise baseline) stays in the same file: no baseline row moves.
- `createBookmarkRows` (bookmarkGroupRows.tsx) returns the three row render functions (copied lines); the view calls
  it at each render and passes them to `list(...)` as before. Same DOM, same hook order (none).
- Types moved to `eventBookletTypes.ts` and `updatesSingleListFlows.ts`; importers updated (import lines only):
  EventBookletView.tsx, EventBookletGuestView.tsx, EventBookletHelperView.tsx, EventBookletView.test.tsx,
  eventBookletState.test.ts. Tests did not move (they import from the new modules).
- `@origin` tag kept once per new file.

## Files changed

Added: app/src/pages/EventBooklet/hooks/eventBookletDataFlows.ts, eventBookletLists.ts, eventBookletTypes.ts;
app/src/pages/Updates_SingleList/hooks/updatesSingleListFlows.ts;
app/src/pages/BookmarksByGroup/components/bookmarkGroupRows.tsx; migration/tools/refactor/f59-c-split.ts.
Changed: app/src/pages/EventBooklet/hooks/useEventBooklet.ts, eventBookletState.ts, eventBookletState.test.ts;
app/src/pages/EventBooklet/components/EventBookletView.tsx, EventBookletGuestView.tsx, EventBookletHelperView.tsx,
EventBookletView.test.tsx; app/src/pages/Updates_SingleList/hooks/useUpdatesSingleList.ts;
app/src/pages/BookmarksByGroup/components/BookmarkGroupView.tsx; app/.knip-known-unused.json (2 rows deleted).
Deleted: none.

## Questions for the user

None.
