# CR-MessageList-3: local message search history (Connect2_LegacyShared client entities)

- Status: applied
- Raised by: MessageList, 2026-10-15 (filed by the orchestrator: the route agent had no write access here)
- Block: shell local entities (`app/src/shell/localEntities/`), like `recentSearch.ts` (CR-Search-1)
- Other routes using it: MessageList (MessageSearchHistory)
- Related question: MessageList Q3 (user: build MessageSearchHistory from the compiled view)

## Evidence
- MessageSearchHistory view (survey sources) reads and writes Connect2_LegacyShared client entities.
- Entity definitions and IndexedDB aggregates: `migration/runtime-sources/Connect2_LegacyShared.entities.js`,
  `Connect2_LegacyShared.aggregates.IDB.js` (fetched read-only 2026-10-15, standing rule).

## Expected change
An IndexedDB adapter for the message search-history entity, ported like `recentSearch.ts`, wired in MessageList's
MessageSearchHistory as compiled.

## Workaround in the route until applied
MessageSearchHistory renders a NotCaptured marker for its data.

## Resolution (foundation owner)
Applied 2026-10-15 by the MessageList route agent (user brief: write access to `app/src/shell/localEntities/**` for
this adapter only).
- `app/src/shell/localEntities/localSearchHistory.ts`: entity `LOCALSEARCHHISTORY` (table `OSUSR_B3N_LOCALSEARCHHISTORY`,
  key/module key/hash and columns from `Connect2_LegacyShared.entities.js:102-150`, YesIfEmpty), same IndexedDB
  database and entity service as `recentSearch.ts` / `localNotes.ts`.
  - `getFilteredUserSearchHistory(RecentSearchTypeId, SearchString, ShowOnlyOnCorrectTerm = true, MaxRecords = 5)`:
    `aggregates.IDB.js:609-712` (index USERID = GetUserId(), filter :643, CreatedOn desc, max records :709).
  - `localSearchHistory_Update(Id)`: `Connect2_LegacyShared.controller.js:5973-6090` (GetLocalSearchHistoryById
    `aggregates.IDB.js:245-312`, CreatedOn = CurrDateTime, entity update; a missing id fails as the runtime update).
  - Exported from `localEntities/index.ts`; tests in `localSearchHistory.test.ts`.
- MessageList `components/MessageSearchHistory.tsx` runs the aggregate at start and when its inputs change
  (block controller :649 dataFetchActionNames, OnParametersChanged :717-745) and LocalSearchHistory_Update on item
  click (:755-830); `ScreenBlock_MessageList.tsx` passes SearchString and RecentSearchType.MyNotifications (view :664-668).
- Nothing in MessageList creates history rows (no create action in the route's flows), so the list stays empty
  unless another module writes them; TST search capture shows the empty block (`analysis/dom/search.html:89-90`).
- Not ported: `executeLocalSearchHistory…` WebSQL branches (the app runs on IndexedDB, see `database.ts`).
