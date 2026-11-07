# Community numbers (Directory_CommunityNumbers)

## Directory_CommunityNumbers (`CommunityNumbers.tsx`)

OutSystems: `UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers` and its child block
`Directory_CommunityNumbers__Number` (fresh TST capture of 2026-11-07; compiled code
`migration/sources/pretty/UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers*.mvc.js`). TST replaced
FeedBlock_CommunityPopulation with this block (the "COMMUNITY BY THE NUMBERS" card) on HomeFeed and on CountryList.

| Prop                  | Input                  | What it is                                                                  |
| --------------------- | ---------------------- | --------------------------------------------------------------------------- |
| `isLoading`           | In_IsLoading           | The owner data action has not answered (not IsDataFetched): SkeletonSection |
| `communityStatistics` | In_CommunityStatistics | UI_CommunityStatistics: members, change, households, localities, countries  |

No events. The owner screen runs `DataActionGetCommunityStatistics` in OnReady and gives its answer (HomeFeed:
`useHomeFeedReady`; CountryList: `useCountryList`, Action_RefreshData_CommunityStatistics). Local_CommunityStatistics
as compiled: OnReady sets every count to 1000 while loading (the skeleton shows "1,000" and "+1,000");
OnParametersChanged copies the input when not loading. The change shows an up arrow and "+n" in green (n > 0), a down
arrow and "-" + FormatCurrency(n) in red (n < 0), nothing and "No change today" (n = 0). FormatCurrency(…, "", 0, "",
","): "," between groups of three digits.

Mock (`mocks.ts`): `HomeFeed/DataActionGetCommunityStatistics`, fictional counts with the captured lengths (the
answer is not recorded); countries 17 as captured. `pages/CountryList/mocks.ts` answers
`CountryList/DataActionGetCommunityStatistics` with the same counts (`fictionalCommunityStatistics`; the CountryList
capture has the same lengths).

Captures: `__captures__/numbers-default.html` (HomeFeed/default, story `Loaded`), `numbers-loading.html`
(HomeFeed/loading and offline, story `Loading`). CountryList/default, loading and offline show the same markup. Not
captured: the negative and zero change (stories `ChangeDown`, `NoChange`, compiled code only).

Icons: the four `SVG_Community*` icons of the shared IconSvg (`img/UBTConnectLibrary.Community*.svg`, fetched
read-only from TST). Members 40 px (`icon-non-standard-40`), the other three 24 px (`icon-base`).

FeedBlock_CommunityPopulation (`CommunityPopulation.tsx`, its DataActionFetchCount) is gone from TST: removed from this
folder on 2026-11-07, when CountryList, its last user, moved to this block.
