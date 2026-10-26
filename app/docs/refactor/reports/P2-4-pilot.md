# Pilot report P2-4: HouseholdDetails

Pilot of the page template (steps P2-1 to P2-3). The template is in `docs/guides/page-template.md`. The parity result of
this step is in `P2-4.md`.

## Test on localhost (dev server http://localhost:5174)

| Route             | Link                                                                     | Look at                                                         |
| ----------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------- |
| HouseholdDetails  | http://localhost:5174/UBTConnect/HouseholdDetails?HouseholdId=42438     | Title "Locality, Country", card, About and Photos tags, members |
| HouseholdCarousel | http://localhost:5174/UBTConnect/HouseholdCarousel?In_StartingHouseholdId=42438 | Carousel of household cards (uses the container)         |
| Profile           | http://localhost:5174/UBTConnect/Profile                                 | Household preview (container with `source.kind = 'preview'`)    |

Parity of P2-3 (visual, both references): 64/64 routes OK (`P2-3.md`).

## What the pilot taught

- Shapes: the block became a hook (`useReducer`) + a container (criterion 1: server data and Profile preview data) +
  props-only components. The `shape` column of `move-map.csv` holds the choice.
- A container may not import blocks that are still containers-to-be (rule 4); it gives them to the view as slots.
- Time: 3 steps in about 1.5 h of commits (20:04 to 21:06), plus the test fix for the AssembleEvents clock.

## Follow-ups

- Settled in `move-map.csv`: `HouseholdTimelinePhotoList` is the port of the block; `HouseholdTimelinePhotos` is the
  card section.
- Open on purpose: `useHouseholdDetails` moves next to the container when HouseholdCarousel and Profile become pages.
- Open for the repeat phases: `migration/tools/docs_gen.py` and `migration/tools/refactor/move-map.mjs` read
  `// @os-block`; the new files use `@origin` only.

## Decision for you

Confirm the 3 routes look and work as before and that the template is the shape for the other pages (P3 on).
