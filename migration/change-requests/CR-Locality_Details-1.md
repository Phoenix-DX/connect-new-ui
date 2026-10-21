# CR-Locality_Details-1: seed one legacy local bookmark (Contact) in the shell mock

- Status: applied
- Route: Locality_Details (owner route-locality-details), question Q3 (decision, recommendation pending the orchestrator).
- Area: shell mock (`app/src/shell/mocks.ts` Sync_Info_GetMain LocalEntities_App.LocalBookmark, now `{ List: [] }`, :101).
- Need: the captured Households list shows the first card bookmarked (`ubt-image-card__bookmarked`,
  migration/screens/Locality_Details/analysis/dom/default.html:302) because the test account had a legacy
  Connect2_LegacyShared.LocalBookmark (ObjectType "Contact", ObjectId = that household). Locality_Households_HouseholdList
  sets IsBookmarked from GetLocal_Bookmark(Contact, HouseholdId) after the fetch, which also makes that card call
  DataActionGetMembers a second time (24 calls for 23 cards in analysis/calls.json).
- Proposal: one fictional legacy LocalBookmark row `{ ObjectType: "Contact", ObjectId: "91001" }` (91001 = the first
  fictional household of app/src/screens/Locality_Details/mocks.ts), other fields fictional.
- Without it: card 0 lacks the bookmark class and its ::before icon, and the clone makes 23 GetMembers calls.

## Resolution (foundation owner)
- F4a foundation owner, 2026-10-15: `app/src/shell/mocks.ts` `mockLocalBookmarks` now holds two legacy rows (Contact /
  Contacts): 42438 (CR-HouseholdDetails-2 §2) and 91001 (the first fictional household of the Locality_Details list).
  `shell/testSession.ts` also seeds them into the local copy for `?mocksession=unlocked` (the capture tab kept them), and
  SynchBookmarks replaces the copy in one transaction (see CR-HouseholdDetails-2 §2), so GetLocal_Bookmark finds the row
  whenever OnAfterFetch runs.
