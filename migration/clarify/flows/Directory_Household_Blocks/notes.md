# Notes of Directory_Household_Blocks (reader, stage 1)

## Scope
- Block-only flow. All 6 own blocks are used by built screens: HouseholdDetails_Members_Block, HouseholdDetails_TimelinePhoto,
  HouseholdDetails_TimelinePhoto_List (screen HouseholdDetails, board:30 built); Household_Card (Locality_Details, board:32
  built); Household_GalleryCard, Household_GalleryCard_List (SupperMeeting_Details board:36, SupperMeeting_Carousel board:35).
- React locations: components/household/* for five blocks; pages/Locality_Details/components/Household_Card.tsx and
  hooks/useHouseholdCardMembers.ts for Household_Card.

## TST presence check
- All 6 blocks have a TST file (UBTConnect.Directory_Household_Blocks.<Block>.mvc.js). Pack elements absent on TST: none seen.
- Checked on TST: Household_Card OnReady has IsViewRestoredFromCache (JS at line 625 of the dump, check at 486);
  Members_Block has HasAccessToRegion and App_Subscription_ShowUpgradePopUp in Handler_NonMemberOnClick (lines 889-905),
  'Household members' (line 236); the class strings of the timeline and gallery blocks are present.
- TST elements absent in the pack: none seen. No MaxLength/Enabled constraints: the flow has no input widgets.
- Not compared line by line: the full widget style options (TST lines for CustomContainer Display options).

## Pack gaps
- Pack truncates long arguments with an ellipsis (CustomContainer Options of HouseholdDetails_TimelinePhoto cut at 300 characters).
- EnableCall/EnableEmail args of Directory_EntityDetailsActions are set by renderMemberActions in the parent (HouseholdDetailsView):
  I did not read that parent code.
- references.md (14.6 KB) not read: referenced library blocks (HouseholdMember_ListItem, NonMember_ListItem, ImageCard*,
  UBT_LazyImage*) were not compared with their TST files.
- kb.md not read (judge reads the KB).

## Mock files
- Household_Card: pages/Locality_Details/mocks.ts:124 (Household_Card/DataActionGetMembers, comment line 19: never recorded).
- Members_Block: members come from the HouseholdDetails mocks (containers/HouseholdDetails/mockData.ts); not read.
- Gallery blocks: change requests name Household_GalleryCard_List/mockData.ts and SupperMeeting_HouseholdList/mocks.ts (CR files); not opened.
