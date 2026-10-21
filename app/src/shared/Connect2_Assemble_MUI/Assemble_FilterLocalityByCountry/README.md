# Assemble_FilterLocalityByCountry

OutSystems: `Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry` · pack
`migration/blocks/Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.md` · compiled source
`migration/blocks/sources/Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc.js`

| Input       | Type | Prop          | Default |
| ----------- | ---- | ------------- | ------- |
| CountryCode | Text | `countryCode` | `''`    |
| CountryName | Text | `countryName` | `''`    |

Events: `SelectedSubdivision(SubdivisionId)` → `onSelectedSubdivision`, `FreeSubscriptionAlert` →
`onFreeSubscriptionAlert`, `Cancel` → `onCancel` (declared, never raised). No placeholders.

While IsFetchingLocalities, the block shows the Spinner. Otherwise it shows the title "View Localities in <CountryName>",
the search (`Input_SearchTerm` "Search Locality", max 50) and the list of localities, or "No results found". Each
locality has a chevron-down. The open locality has a blue chevron-up instead, and its `Assemble_FilterSubdivisionByLocality`
shows below it.

OnReady runs these actions in this order: ScrollToElement (`DIV_Title`, `../../osui/lib/actions.ts`),
GetCacheableUserInfo, then GetCacheableCountryInfo (`../../Connect2_LegacyShared/lib/actions.ts`).

A locality click runs HasAccessToRegion (`../lib/actions.ts`).

- When the user has no access, the block raises FreeSubscriptionAlert and audits SubscriptionRequired.
- Otherwise the block runs ExitFullscreen. Then the open locality closes, or the clicked one opens and the block raises
  SelectedSubdivision.

A supper meeting's selection raises SelectedSubdivision(its Id).

## Captured variants (0)

The captures of AssembleEvents and Assemble_BrowseByCountry show the country list only. Stories `Country` and
`NoLocalities` run on the fictional Connect2_LegacyShared mocks through the MSW worker (`../../test/mockApiSession.ts`);
`Assemble_FilterLocalityByCountry.test.tsx` checks the compiled view, the search, how a locality opens and closes, and the
Free-plan alert, signed in through `applyTestSession`.

## Not settled

- Ported 1:1: when a locality opens, the block raises SelectedSubdivision with the SelectedSubdivisionId kept so far (not
  reset when another locality opens; NullIdentifier on the first open).
- UserInformation from GetCacheableUserInfo is never read again (as compiled); the call only fills the cache.
