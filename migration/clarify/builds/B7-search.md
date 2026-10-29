# B7 Search: Directory_Search F1, F2, F3

Source: report `../flows/Directory_Search/report.md` §5. TST file: `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`
(below: `S`). All three items are built. No decision is needed.

## F1 (major): If StartedDifferentSearch

- TST evidence: `S:1207-1327`. Inside `If HasSearched`, the If `SearchKey_Current <> SearchKey_LastSearched` holds the
  SectionSeparator (uuid 27) and the CustomContainer (uuid 28) with both CustomTexts (uuid 29, 30). The SkeletonSection
  (uuid 31) follows outside that If.
- Files changed:
  - `app/src/pages/Search/components/SearchView.tsx:33-35` (doc comment), `:154-176` (the caption).
  - `app/src/pages/Search/Search.test.tsx:56-80` (two tests), `:109-110` (the birthday test).
- What was built:
  - The separator and the caption "Showing results for '<term>':" show only when the input text differs from the
    last searched term.
  - After a submitted search, the caption does not show. It shows once the user types a different term.
  - The birthday test now checks the input value and the results, because the caption no longer shows after a
    search.
- Tests in `Search.test.tsx`:
  - "a search shows the three sections…": no caption after the search.
  - "once the input differs from the last searched term, the caption shows that term".
- Proposed verdict: Directory_Search-071 `match`.

## F2 (major): Event_HorizontalTagListChanged

- TST evidence: `S:3929-3937`. ListFilter, then SelectedCategory, then TagList. Then Refresh
  Get_RecentClickedResults (max 5), and after it Action_RefreshSearch.
- Files changed:
  - `app/src/pages/Search/hooks/useSearch.ts:133-136` (doc comment), `:310-322` (the flow), `:373-375` (the handler).
    The unused import of `selectedCategoryOf` is removed.
  - `app/src/pages/Search/hooks/useSearch.test.tsx:11`, `:172-200`.
- What was built:
  - `onTagListChanged` sets SelectedCategory and TagList. It then reads Get_RecentClickedResults with the new category
    and the current term, and sets the recent list.
  - After that read, it starts Action_RefreshSearch, as the TST `result.then(...)` does.
  - With a blank term, the recent gallery now changes to the new category. Action_RefreshSearch still ends at once.
- Tests: `useSearch.test.tsx` "a tag change refreshes the recent clicked results with the new category, also before
  the first search". Two clicked results (a Member, a Household) are saved. A change to People leaves only the Member.
  No fetch occurs.
- Proposed verdict: Directory_Search-101 `match`.

## F3 (major): the loading rows of Action_RefreshSearch

- TST evidence:
  - `S:2475-2497`: ListAppend x3 into LoadingList. Each row has Name "Loading Name", AdditionalInformation "Name",
    Location "Loading Location" and Type Household.
  - `S:2502-2508`: if SelectedCategory is All or Places, ListAppendAll(FetchSearchResults.Places, LoadingList).
  - `S:2510-2514`: the same for Households.
  - `S:2516-2538`: if SelectedCategory is All or People, the Foreach sets Type = Member on each LoadingList row, then
    ListAppendAll to People.
  - These steps run after Action_ClearResults, HasSearched True, SearchKey_LastSearched and IsLoading True. The
    Refresh of FetchSearchResults follows.
  - The SkeletonSection (`S:1327-1345`, In_IsLoading = IsLoading) wraps the three SearchResult_Section blocks.
  - OutSystems.js `GenericRecordList.appendAll` copies the record data (`addFromOther`). The Foreach change to Member
    therefore does not reach the rows already appended to Places and Households.
- Files changed:
  - `app/src/pages/Search/hooks/searchState.ts:3` (import), `:56-57` (action doc).
  - `app/src/pages/Search/hooks/searchState.ts:147-184`: `loadingRow` and `withLoadingRows`.
  - `app/src/pages/Search/hooks/searchState.ts:219-225`: the `searchStarted` case.
  - `app/src/pages/Search/hooks/useSearch.ts:133-134` (doc comment).
  - `app/src/pages/Search/components/SearchView.tsx:176-177` (comment).
  - `app/src/pages/Search/components/SearchResult_Section.tsx:82-85`: the row key has the row number. The three
    loading rows share Type and an empty Id.
  - Tests: `app/src/pages/Search/hooks/searchState.test.ts:8, :14, :142-188`; `app/src/pages/Search/Search.test.tsx:82-94`.
- What was built:
  - `searchStarted` now appends three loading rows to each list in scope of SelectedCategory. All gives Places,
    Households and People. A category gives its own list only. A null SelectedCategory gives no rows.
  - The People rows have Type Member. The other rows keep Type Household.
  - The view needed no new rule. The Skeleton component (SkeletonSection) already puts `ubt-skeleton-section` on the
    sections while IsLoading. The theme CSS draws the rows as placeholders.
  - The fetch result replaces the lists. Action_ClearResults on an error removes the rows.
- Tests:
  - `searchState.test.ts`: `loadingRow` defaults; `withLoadingRows` per category, Member type and append order;
    `searchStarted` after `resultsCleared`.
  - `Search.test.tsx` "while the search loads, each section shows three loading rows inside the skeleton". With
    `mock:latency` 300 ms, there are nine "Loading Name" rows in `.ubt-skeleton-section`, three per section. They go
    away when the results come.
- Proposed verdict: Directory_Search-006, -089, -090, -091, -092 and -126 `match`.

## Checks

- `npx vitest run src/pages/Search src/api/search`: 6 files, 35 tests passed.
- `npx eslint` and `npx prettier --check` on the 7 changed files: clean.
- `npm run typecheck`: clean. `npm run arch`: no new violation.

## Notes

- No file outside `app/src/pages/Search/` changed. `SearchResultItem.tsx` (group B10) did not change.
- In the dev server (default mock latency 600 ms), the skeleton rows now show during each search.
