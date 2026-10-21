# CR-Search-1: shell local entities — ConnectSearch_RecentSearchTerm and ConnectSearch_RecentClickedResults

- Status: applied
- Raised by: Search, 2026-10-15
- Block: shell area `app/src/shell/localEntities` (OutSystems local storage of UBTConnect)
- Other routes using it (catalog/blocks.md): Directory_Search.ScreenBlock_Search (Search; also any route embedding the block with In_IsInScreenSearch)
- Related question: Q1

## Evidence
- Captured markup: `migration/screens/Search/analysis/dom/default.html`: no recent block (both lists empty in the capture).
- Expression / handler: `sources/pretty/UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`:
  - `get_RecentClickedResults$AggrRefresh` / `get_RecentSearchTerms$AggrRefresh` (:1900-2098): local aggregates on
    `OSUSR_yde_ConnectSearch_RecentSearchTerm` / `..._RecentClickedResults`, filtered by UserId, SearchTargetId (or
    `Type_SearchTarget.Global` with no target), SearchKey_Current LIKE, ordered by SearchedOn DESC, max 10 / 5.
  - `CreateOrUpdateConnectSearch_RecentSearchTerm` (:2440, Action_RefreshSearch), `CreateOrUpdateConnectSearch_RecentClickedResults`
    (:2846), `DeleteConnectSearch_RecentClickedResults` above `Search_RecenctClickedResultsLimit` (:2957-2970),
    `DeleteConnectSearch_RecentSearchTerm` (:3481, :3788), RemoveAll (:3359-3615).
- Parity difference it explains: none in the captured states (lists empty).

## Expected change
Shell adapter for the two client entities (same pattern as LocalNotes): schema, CreateOrUpdate, Delete, and the
aggregates the block runs (by user + search target + term, ordered by SearchedOn DESC with a limit), plus the client
variable `Search_RecenctClickedResultsLimit` if not present. No personal data in browser storage in the mock phase
(stack rule): the foundation owner decides between memory-only and IndexedDB.

## Workaround in the route until applied
The route keeps both lists empty and skips the writes; the Recent search block (never shown with empty lists) renders
`<NotCaptured name="CR-Search-1: Recent search">`.

## Resolution (foundation owner)
- Change: shell adapter `src/shell/localEntities/recentSearch.ts` (exported from `localEntities`): the two client entities,
  the block's local aggregates and entity actions ported from the compiled SQL of ScreenBlock_Search (Get_RecentSearchTerms
  :1994-2098 max 10, Get_RecentClickedResults :1830-1990 max 5, CheckIfSearchtermAlreadyExist + CreateOrUpdate :2340-2445,
  clicked CreateOrUpdate + trim beyond `Search_RecenctClickedResultsLimit` :2720-2975, GetAllSearchRecentClickedResultsByUserId
  :3000-3106, Remove :3774-3792, RemoveAll :3359-3615); client variable `UBTConnect.Search_RecenctClickedResultsLimit`
  (default 10, UBTConnect.clientVariables.js:74-76). Wired in `ScreenBlock_Search.tsx` (fetch at start :2159, refresh on
  ClearResults / OnChange, writes on RefreshSearch and item click, recent source for the carousel).
- Storage (follow-up, route-search 2026-10-15): IndexedDB like the notes cache: tables OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM /
  ..._RECENTCLICKEDRESULTS, upper-case column names, key ID, entity and module keys and hashes from
  `migration/runtime-sources/UBTConnect.entities.js:3, 91-138, 320-426`; aggregates read index USERID as
  `UBTConnect.aggregates.IDB.js` does, `like` ported from OutSystems.js:8, Decimal(15,5) stored with toFixed(5)
  (OutSystems.js:13 serializeDecimal). Tests: `src/shell/localEntities/recentSearch.test.ts`.
- UI: the recent block is inline in ScreenBlock_Search's view (:502-1119; SearchResults_Recent.mvc.js is a separate block it
  does not use), built in `app/src/screens/Search/components/ScreenBlock_Search.tsx` with Remove / RemoveAll wired.
- Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
