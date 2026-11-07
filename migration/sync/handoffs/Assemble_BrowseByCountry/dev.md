## Result
status: pass
summary: Page mocks now override the shared Assemble world with the fresh capture counts (Saint Vincent and Trinidad 73 members, United States 28 localities). Parity is 0 in all three states; the pixel difference went away with the text.

## Files changed
app/src/pages/Assemble_BrowseByCountry/mocks.ts

## Commands run
npm --prefix app run typecheck → 2 errors, both in sibling pages (CountryList/CountryListPage.tsx:23, HomeFeed/HomeFeedPage.tsx:80, "Expected 1 arguments"), outside this item, none in Assemble_BrowseByCountry
cd app && npx vitest run src/pages/Assemble_BrowseByCountry → 4 files, 30 tests passed
cd app && npx eslint src/pages/Assemble_BrowseByCountry → clean
npm --prefix app run arch → no dependency violations
route.py parity: default → structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0
route.py parity: loading → all 0
route.py parity: offline → all 0

## Deviations from the brief
The data sits in the shared `app/src/mocks/fictional/assemble.ts`, which is outside the allowed paths (it is also used by AssembleEvents). I overrode the three counts in the page mocks instead. AssembleEvents and any other user of the shared file keep the old counts.

## Questions for the user
none
