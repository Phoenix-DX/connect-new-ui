# CR-BrowseDirectory-2: StatisticsList — row keys must not repeat when skeleton rows share an Id

- Status: applied
- Raised by: BrowseDirectory, 2026-10-15
- Block: `UBTConnect.Directory_Locality.StatisticsList` → `app/src/shared/UBTConnect/StatisticsList/StatisticsList.tsx`
- Other routes using it (catalog/blocks.md): BrowseCountries, CountryDetails (any screen that feeds skeleton rows)
- Related question: BrowseDirectory Q4

## Evidence
- BrowseDirectory feeds In_Statistics with Id = LongIntegerToText(LocalityId) (`sources/pretty/UBTConnect.Directory_Locality.BrowseDirectory.mvc.js:589-593`);
  while loading the rows are GetSkeletonList_UI_LocalityStatistics(10), whose LocalityId is the default 0, so all ten
  Ids are "0" (`dom/loading.html`: ten Statistics_ListItem rows).
- `StatisticsList.tsx:132`: `keyOf={(item, index) => (item.Id === undefined || item.Id === '' ? index : item.Id)}` →
  ten rows with key "0".
- Parity difference it explains: default state, `div#b11-List > div` extra in build ×7 and skeleton texts
  ("New South Wales", "Bretheren", "15868") left in the first rows after the data replaced the skeleton
  (`migration/screens/BrowseDirectory/parity/default.json`, run before the route workaround).

## Expected change
Fall back to the index when an Id repeats in the list (or key skeleton rows by index), so React replaces the rows
when the data arrives.

## Workaround in the route until applied
`key={model.isDataFetched ? 'fetched' : 'skeleton'}` on the route's StatisticsList (remount when the data replaces the
skeleton; no markup change). Remove it when this request is applied.

## Resolution (foundation owner)
- Change: `app/src/shared/UBTConnect/StatisticsList/StatisticsList.tsx` keys a row by its position (`#<index>`)
  when its Id is empty or appears more than once in the list (skeleton rows all carry "0"), else by Id; test added. The
  route's `key={model.isDataFetched ? …}` workaround is removed.
- Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's links are `text-neutral-8`; difference present before this batch, exemption scope for the user), BrowseCountries, HomeFeed, Search, Services 0.
