# Recorded decisions and facts that name the elements of UI flow Directory_Caroussel

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## change requests

- `migration/change-requests/CR-HouseholdDetails-2.md:35` (EntitiesCarousel): - §3 `HouseholdDetails_Block/mockData.ts`: household 9001 country "Exampland" (title 5/7/9) and an address with the captured word lengths and line breaks; three EntitiesCarousel tests updated.

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:69` (EntitiesCarousel_Element): | SupperMeeting_Carousel | Q2 | fact | by code | Capture timing artifact. EntitiesCarousel_Element.mvc.js:240-307 passes In_IsSkeletonOnly only to the HouseholdDetails branch, never to EntitiesCarouse_lSupperMeetingDeta |

## parity exemptions

- `migration/parity-exemptions.json:593` (CarouselTag): "reason": "The CarouselTag text was masked by the capture ('• • •' for '1 / 3'), so the right-aligned tag placeholder of the reference is a third of a pixel wider than the clone's (left 337.688px → 337.344px). auto-accepted in the user's auto mode 2026-10-15",
- `migration/parity-exemptions.json:609` (EntitiesCarousel_Element): "reason": "Off-screen slides 2 and 3 were snapshotted while SupperMeeting_DetailsBlock still showed GetSkeleton_UI_SubdivisionDetails (ubt-skeleton-section, 'Subdivision Name Example', counts 10) although their household lists had loaded; the clone shows the loaded card. Limited to the card and acti
