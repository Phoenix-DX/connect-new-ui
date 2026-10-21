# Assemble_FilterSubdivisionByLocality

OutSystems: `Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality` · pack
`migration/blocks/Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.md` · compiled source
`migration/blocks/sources/Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc.js`

| Input                 | Type         | Prop                    | Default |
| --------------------- | ------------ | ----------------------- | ------- |
| LocalityId            | Long Integer | `localityId`            | `'0'`   |
| SelectedSubdivisionId | Long Integer | `selectedSubdivisionId` | `'0'`   |

Event: `SelectedSubdivision(SubdivisionId)` → `onSelectedSubdivision`. No placeholders.

The Spinner shows while IsFetchingSubdivisions is True (default True). Then come:

- The search (InputWithIcon, `Input_SearchTearn` "Search Supper Meetings", max 50).
- A Separator.
- The animated list of RadioButtonListItem (the main hall's title in primary) or "No results found".

OnReady: `getLocality` (`../lib/actions.ts`: GetCacheableLocality, 20 min memory cache, then
GetLocalBookmarkedLocalityInformation: IsBookmarked flags from the device's legacy bookmarks; this block reads none). The
search filters by name (`listFilterByName`, diacritics and case ignored); an empty term reloads through GetLocality.

Users: `Assemble_FilterLocalityByCountry` (AssembleEvents, Assemble_BrowseByCountry).

## Captured variants (0)

The captures of AssembleEvents and Assemble_BrowseByCountry show the country list only. Stories `Locality` and `Selected`
run on the fictional Connect2_LegacyShared mocks (`../../Connect2_LegacyShared/lib/mocks.ts`) through the MSW worker
(`../../test/mockApiSession.ts`); `Assemble_FilterSubdivisionByLocality.test.tsx` checks the compiled view, the radio
selection and the search, signed in through `applyTestSession`.

## Not settled

- WasCurrentViewRestoredFromCache is always False (no view cache in the React app), so OnReady always fetches.
