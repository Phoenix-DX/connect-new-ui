# CR-Profile-1: HouseholdDetails_Block mock data — household 9002's third member has CTAs

- Status: applied
- Raised by: Profile, 2026-10-15
- Block: `app/src/shared/UBTConnect/HouseholdDetails_Block/mockData.ts` (shared mock data, `sampleHouseholdMembers`)
- Other routes using it: HouseholdCarousel (slide with household 9002), any route whose user is in household 9002
- Related question: Profile Q2 (scenario `spouse` gives the Profile preview household 9002)

## Evidence
- `migration/screens/Profile/analysis/dom/default.html:1613-1675`: the third Member_ListItem of the Profile household
  preview (`b60-b2-b39-l1-276_2`) renders `Directory_CommonBlocks.Directory_EntityDetailsActions` (`$b7`) in its Actions
  column (53x40), like the first two members (:1329, :1502). Member_ListItem shows the actions only when the member has
  CTAs (HouseholdDetails_Members_Block, `HasCTAs`).
- `mockData.ts:89-100`: `sampleHouseholdMembers` gives `HasCTAs` only to the first two members (`i < 2`), so the clone's
  third member has an empty Actions column (parity Profile/default with `?mock=spouse`: `…l1-276_2-b4-Actions` 53x40 →
  0x0, `…l1-276_2-$b7` missing in build). No navigation difference was reported (HasNavigation stays as it is).

## Expected change
For household 9002 (PROFILE_HOUSEHOLD_ID) the third member gets `HasCTAs: true` (e.g. an optional per-household list
of member indexes with CTAs in `sampleHouseholds`), other households unchanged. Re-check HouseholdCarousel parity.

## Workaround in the route until applied
None needed in Profile code (the block is shared); the Profile default state reports the missing actions of member 3
until applied.

## Resolution (foundation owner)
- Change (F6 foundation owner, 2026-10-15): `HouseholdDetails_Block/mockData.ts` 9002 gets `memberShapes: { 2: { HasCTAs:
  true } }` and `contactOnly: { 2: 'Call' }`: the Profile capture shows one CircleButton `connect-icon-call` for the third
  member (dom/default.html:1613-1760, Actions 53x40, no chevron), so its contact details answer a home phone only
  (`markContactOnly`, `Directory_EntityDetailsActions/mocks.ts`; member id 7003 is fetched by no other mock household,
  9001's third member has no CTAs). Member ids and HasNavigation unchanged.
- Other routes: HouseholdDetails (9001), Household_Relations and Locality_Details never request household 9002; their
  parity stays 0. HouseholdCarousel no longer shows 9002 (slide 2 is 9005, CR-HouseholdCarousel-2).
- Regression parity run on: Profile (spouse scenario) 0 in default / loading / offline; HouseholdDetails,
  Household_Relations, Locality_Details 0; HouseholdCarousel unchanged.
