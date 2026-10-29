# React code index of UI flow App_Common_Blocks

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddBookmark2 | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`<br>`lib/ubtConnect/staticEntities.ts:145`<br>`lib/ubtConnect/actions.ts:270`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/types.ts:200`<br>`api/bookmark/mapper.ts:35` |
| DeleteBookmarkByBookmarkId2 | 7 | `lib/ubtConnect/actions.ts:267`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:186`<br>`api/schema.d.ts:2226`<br>`api/openapi.yaml:4570`<br>`containers/EntityDetailsActions/mocks.ts:20` |
| ToggleBookmarkItem_C2 | 10 | `platform/storage/localEntities/localBookmarks.ts:18`<br>`lib/ubtConnect/actions.ts:249`<br>`lib/ubtConnect/actions.ts:266`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:3` |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: none for this flow).

- AddBookmark2: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`
- DeleteBookmarkByBookmarkId2: **no mock handler found**
