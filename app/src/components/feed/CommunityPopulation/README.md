# FeedBlock_CommunityPopulation

OutSystems: `UBTConnect.Home.FeedBlock_CommunityPopulation` · pack
`migration/blocks/UBTConnect.Home.FeedBlock_CommunityPopulation.md`

Inputs, events, placeholders: none. Click (OnClick_Block) → `/UBTConnect/Updates_SingleList`.

Data: `DataActionFetchCount` (`api.ts`; contract `UBTConnect/FeedBlock_CommunityPopulation/DataActionFetchCount`,
recorded). Mock (`mocks.ts`): the recorded fixture (aggregate count, no person data). While it loads the count is
`00000` inside a loading SkeletonSection; after an error, `0`. FormatDecimal(…, 0, "", ","): no group separator.

## Captured variants (2 tested)

| Capture | Source                               | What it shows                         |
| ------- | ------------------------------------ | ------------------------------------- |
| v1      | pack variant 1, CountryList/default  | wrapper only (nested block collapsed) |
| v2      | `HomeFeed/analysis/dom/default.html` | full card, count loaded (masked text) |

## Not captured / not settled

- The loading state (skeleton) and the error state: from the compiled code only, tested.
