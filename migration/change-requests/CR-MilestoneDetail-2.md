# CR-MilestoneDetail-2: shared — Connect2_LegacyShared GetCacheableMemberContactList / GetCacheableTimezoneInfo (call popup data)

- Status: applied
- Raised by: MilestoneDetail, 2026-10-16
- Block: `app/src/shared/Connect2_LegacyShared/lib/` (cacheable contact list and timezone, memory cache), contract
  operations of their server actions (`app/src/api/openapi.yaml`)
- Other routes using it: every Orbit block with ClickedPhone → BuildMemberCallData (AccommodationGuest / Helper, Meal*,
  HelpersDetail, HouseholdDetails Orbit cards)
- Related question: MilestoneDetail Q2

## Evidence
- `…ScreenBlock_AccommodationHost.mvc.js:2121-2260` BuildMemberCallData: ContactPopupData Name / ImageURL / ShowPopup /
  IsFetchingTimezone / IsLoading, `Connect2_LegacySharedController.getCacheableMemberContactList$Action`; empty list →
  Phone, `getCacheableTimezoneInfo$Action(LocalityId)` (TimezoneName, TimezoneOffset, Locality, CountryName), signed photo
  when ImageURL is ""; otherwise Locality, Mobile / Home / Work phone, timezone of the first contact.
- `migration/runtime-sources/Connect2_LegacyShared.controller.js:3416` (GetCacheableMemberContactList) and `:4253`
  (GetCacheableTimezoneInfo): memory-cache wrappers (GetCacheableObject + callbacks) around server actions that are not in
  the contract; nothing in `app/src/shared` ports them.

## Request
Port both cacheable actions to the shared Connect2_LegacyShared lib with their server actions in the contract. Until
then the route opens ContactPopup_ByPhone with the member's phone, name and photo and no timezone (Q2 A).

## Resolution (foundation owner, F11, 2026-10-16)
- Reused: `shell/memoryCache.ts` `getCacheableObject` (as getCacheableUserInfo / getCacheableLocality) and the existing
  `ContactPopup_ByPhone` block; no earlier port of these actions existed.
- Contract: `screenservices/Connect2_LegacyShared/ActionGetMemberContactByCacheKey` (CacheKey → MemberContactList of
  MemberContactWithTimezone) and `…/ActionGetTimezoneInformation` (LocalityId → TimezoneInformation) in
  `migration/contract/extra-actions.json`; `gen:api` run.
- Shared (`app/src/shared/Connect2_LegacyShared/lib/actions.ts`): `buildMemberContactsCacheKey` (:915-985, ListSort + ","),
  `getMemberContactList`, `getCacheableMemberContactList` (MemberContact, TTL 300), `getTimezoneInformation` (copies 3 fields,
  CountryName stays "" as compiled), `getCacheableTimezoneInfo` (LocalityId 0 → ObjectNotFound "Invalid country id", as
  compiled; Timezone, TTL 1200). DirectoryCacheType gains MemberContact and Timezone. Mocks in
  `app/src/shared/Connect2_LegacyShared/lib/mocks.ts`: the hosted Orbit guests have a contact (card phone as mobile, household
  locality, Argentina UTC-3); other members none; Argentine localities answer the time zone.
- Route: BuildMemberCallData ported 1:1 (empty list → Phone + time zone of LocalityId; else signed photo when ImageURL "",
  phones / locality / time zone of the first contact, Phone not set as compiled); room guests pass the guest household's
  LocalityId (SB :1053). Q2 A interim behaviour removed. Parity: MilestoneDetail 0.
