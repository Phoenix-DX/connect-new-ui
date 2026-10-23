# FeedBlock_CommunityPopulation

OutSystems: `UBTConnect.Home.FeedBlock_CommunityPopulation` · pack
`migration/blocks/UBTConnect.Home.FeedBlock_CommunityPopulation.md`

Inputs, events, placeholders: none. Click (OnClick_Block) → `/UBTConnect/Updates_SingleList`.

The component renders from props only:

| Prop        | What it is                                                                          |
| ----------- | ----------------------------------------------------------------------------------- |
| `isLoading` | DataActionFetchCount has not answered yet: `00000` inside a loading SkeletonSection |
| `total`     | TotalNumberOfMembers (text); `0` after an error                                     |
| `onClick`   | OnClick_Block: the caller opens Updates_SingleList                                  |

Data: `DataActionFetchCount` (contract `UBTConnect/FeedBlock_CommunityPopulation/DataActionFetchCount`, recorded). The
callers (HomeFeed, CountryList) fetch it with `useCommunityPopulationQuery` of `api/member` (no cache, no retry; a
failure logs "DataActionFetchCount failed"). Mock (`mocks.ts`): the recorded fixture (aggregate count, no person data).
FormatDecimal(…, 0, "", ","): no group separator.

## Captured variants (2 tested)

| Capture | Source                               | What it shows                         |
| ------- | ------------------------------------ | ------------------------------------- |
| v1      | pack variant 1, CountryList/default  | wrapper only (nested block collapsed) |
| v2      | `HomeFeed/analysis/dom/default.html` | full card, count loaded (masked text) |

## Not captured / not settled

- The loading state (skeleton, story `Loading`) and the error state: from the compiled code only, tested.
