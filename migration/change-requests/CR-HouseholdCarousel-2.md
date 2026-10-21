# CR-HouseholdCarousel-2: HouseholdDetails_Block / Directory_EntityDetailsActions mocks — the carousel's four households

- Status: applied
- Raised by: HouseholdCarousel, 2026-10-15
- Block: `app/src/shared/UBTConnect/HouseholdDetails_Block/mockData.ts` (`sampleHouseholds`)
- Other routes using it: HouseholdDetails, Profile, Locality_Details (unchanged: their ids keep their answers)
- Related question: none (mock data, captured counts; P-MOCKS)

## Evidence
- `migration/screens/HouseholdCarousel/analysis/dom/default.html`: the four rendered slides show 5, 3, 6 and 6
  `ConnectCorePatterns.Member_ListItem` (ids `b3-l1-1152_0..3-…`).
- The shared mock answers 9001 (5 members) for every unknown id and 9002 with 3 members; no household has 6.
- The route's mock preload (Q1 → A) lists: In_StartingHouseholdId, 9002, 9003, 9004, then 19 more ids.

- Diagnostic default run (route markup identical): inside the slides the build differs only by mock data: TST slide 1
  household bookmarked ("Unmark", card `ubt-image-card__bookmarked`); every slide's actions menu Unmark/Bookmark, Share,
  Notes, Gift (no Call/Email: `connect-icon-gifting`, `-share`, `-tooltip`), the build shows Call/Email/Notes/Share;
  slide 2 has a non-household member row (NonMember_ListItem) and a member without birth date (`italic`).

## Expected change
Add `sampleHouseholds['9003']` and `['9004']`: fictional households (captured word lengths, as 9001), 6 members each
(two parents, four children), visible, no married children. Optionally (owner's choice, captured shapes): the contact
details of these ids without phone/email and with the Gift action, and 9002 with one non-member row.

## Workaround in the route until applied
None in code: slides 3 and 4 show 9001's household (5 members), so parity of the off-screen slides 3-4 differs by one
member row each until applied.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change (F4a foundation owner, 2026-10-15): `HouseholdDetails_Block/mockData.ts` `sampleHouseholds['9003']` and
  `['9004']`, 6 members each (two parents, four children), visible, words as 9001. Contact details: already per entity
  type (CR-HouseholdDetails-2 §1: households without phone / email, Gift from the Household menu). Slide 1 bookmarked:
  the legacy bookmark seed of household 42438 (CR-HouseholdDetails-2 §2). Not done (optional): 9002 non-member row and
  member without birth date (9002 is also Profile's household; would change Profile/default).
- Regression parity run on: see the F4a report (HouseholdCarousel, HouseholdDetails).

F5 (foundation owner, 2026-10-15): not worked in F5 (tool budget spent on the popup lifecycle, list status and
navigation gate). Still open: optional non-member row, member without birth date, member contact icons, empty birth
date in 9003, carousel slide ids vs Profile's 9002, and the loading/offline structure 56 analysis. Parity after F5:
default structure 5 / class 4 / text 1 / layout 71; loading and offline structure 56 (unchanged). Status kept as
`applied` only for the parts applied before F5.

F6 (foundation owner, 2026-10-15): open items closed. Status `applied`.
- Slide ids: slide 2 now uses the new fictional household `9005` (route `mocks.ts` preload: start id, 9005, 9003,
  9004, …); 9002 stays Profile's household and is no longer in the carousel.
- `HouseholdDetails_Block/mockData.ts`: `SampleHousehold` gains optional `firstMemberId`, `memberShapes`, `noPhoto`,
  `contactOnly`, `nonMembers` (`membersOf`); 9001 / 9002 keep ids 7001+ (9002: CR-Profile-1 only). 9005 (dom/default.html
  `b3-l1-1152_1`): 3 members (ids 7501+), member 1 Email only (`…1334_0-b7`), member 3 without photo and italic
  life-cycle line (`…1334_2`), one NonMember_ListItem ("Married to" + 2 highlighted words, chevron; `…l2-1335_0-$b11`),
  no family names. 9003 (`1152_2`, ids 7301+): member 1 empty life-cycle line (`…1371_0-b4-$b3`), member 6 without
  photo. 9004 (`1152_3`, ids 7401+). Titles / family names with the captured word lengths.
- `HouseholdDetails_Block/mocks.ts`: answers `membersOf` and `nonMembers`; registers `markNoPhoto` (UBT_LazyImage) and
  `markContactOnly` (new in `Directory_EntityDetailsActions/mocks.ts`, id-specific: Email only / Call only).
- Parity after F6: default structure 0 / class 0 / text 0 / layout 40 (was 5 / 4 / 1 / 71). The 40 are the masked
  household photos (390x26 → 390x260, 10 per slide): proposed `CAPTURE-MASKED-IMAGE-HOUSEHOLDCAROUSEL`.
  Loading / offline structure 56 (14 per slide) = capture path, not mock or build: captured `via` Locality_Details
  (user info cached, OnReady's skeleton and tags ran, GetHousehold then failed), parity opens by URL with
  GetUserInformation pending (the block waits, as TST HouseholdDetails loading opened directly: "Household gallery").
  Proposed `CAPTURE-VIA-USERINFO-HOUSEHOLDCAROUSEL` (ignoreSubtrees, loading|offline) and `…-POPUP` (aria-hidden,
  popup-disable-scroll) in `migration/screens/HouseholdCarousel/proposed-exemptions.json`.
- Regression parity 0: HouseholdDetails, Household_Relations, Locality_Details, Profile (spouse), SupperMeeting_Details,
  SupperMeeting_Carousel, OneSchoolGlobalDetails, HomeFeed.
