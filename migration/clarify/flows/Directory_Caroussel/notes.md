# Directory_Caroussel: reader notes (stage 1)

Own blocks (7): CarouselTag, EntitiesCarouse_lSupperMeetingDetails, EntitiesCarousel, EntitiesCarousel_Element, EntitiesCarousel_HeaderGenerator, EntitiesCarousel_HouseholdDetails, EntitiesCarousel_OneSchoolGlobal. No screens.

## TST presence check
- TST files (tst_source.py list Directory_Caroussel): CarouselTag, EntitiesCarouse_lSupperMeetingDetails, EntitiesCarousel, EntitiesCarousel_Element, EntitiesCarousel_HeaderGenerator, EntitiesCarousel_HouseholdDetails, plus controller.js.
- Pack elements absent on TST: block EntitiesCarousel_OneSchoolGlobal (no file), the OneSchoolGlobal If in EntitiesCarousel_Element (TST view dependencies at EntitiesCarousel_Element.js:201 list SupperMeetingDetails, CarouselTag, HouseholdDetails only; grep OneSchool in that file: 0).
- TST elements absent in the pack: none seen. Not checked line by line: EntitiesCarousel.js widgets besides the lines cited in the rows (StartingPosition :195-199, splide configs :583-626, SetInternalPosition JS :842).
- Board: OneSchoolGlobalCarousel is `skip` (dev-only, no TST compiled file, board.md line 93). The OneSchoolGlobal branch is n/a for TST.

## Pack gaps
- Pack tree for EntitiesCarousel_Element repeats `placeholder None` twice under the Household block, and the OneSchool block has a `placeholder None` too. React renders one CarouselTag per slide.
- data.md lists 14 server actions, but no own block calls them. They belong to nested blocks (HouseholdDetails_Block, SupperMeeting_DetailsBlock, Directory_EntityDetailsActions). Rows say so; the mock status comes from app.md.
- Nested blocks' logic is in other flows (Directory_Household, Directory_SupperMeetings, Directory_OneSchoolGlobal); references.md was not read for this flow.
- README of components/directory/EntitiesCarousel was not read (React comments say UnsetSplideEvent "resize"/"resized" change nothing).

## Mock files
- No per-screen mock for these blocks. Slides get data from the pages HouseholdCarousel and SupperMeeting_Carousel (pages/SupperMeeting_Carousel/hooks, pages/HouseholdCarousel).

## Screens not built
- None (block-only flow). Board line for the dev-only page: `OneSchoolGlobalCarousel ... skip (V8, dev-only)`.
