# Gallery

OutSystems UI: `OutSystemsUI_2_23.Adaptive.Gallery` · pack `migration/blocks/OutSystemsUI_2_23.Adaptive.Gallery.md` ·
stack `osui:Gallery` = hand-written component with the captured DOM and classes (no library).

| Input           | Type    | Prop              | Default      |
| --------------- | ------- | ----------------- | ------------ |
| RowItemsDesktop | Integer | `rowItemsDesktop` | `4`          |
| RowItemsTablet  | Integer | `rowItemsTablet`  | `3`          |
| RowItemsPhone   | Integer | `rowItemsPhone`   | `1`          |
| ItemsGap        | Text    | `itemsGap`        | `Space.Base` |
| ExtendedClass   | Text    | `extendedClass`   | `''`         |

Events: `Initialized(GalleryId)` → `onInitialized`. Placeholder `Content` → `children`.
Behaviour ported (OutSystems UI pattern script, as captured): the Content element gets ExtendedClass and these inline
variables:

- `--gallery-<desktop|tablet|phone>-items`, `--gallery-list-<…>-items` = RowItems<Device>
- `--gallery-gap: var(--space-<ItemsGap>)`

The grid itself is the original CSS.

## Captured variants (4 tested)

| Capture | Source                         | What it shows                                                      |
| ------- | ------------------------------ | ------------------------------------------------------------------ |
| v1      | HomeFeed/default               | services gallery as the Carousel's slide (Splide slide attributes) |
| v2      | HomeFeed/loading               | same, five skeletons                                               |
| v3, v4  | SupperMeeting_Carousel/default | two-column household cards (11, 7)                                 |

v1 / v2 render inside `osui/Carousel` (its V1 inputs) and compare the gallery element (`Gallery.test.tsx`).

## Not captured / not settled

- Changing an input after mount (GalleryChange*Property) re-renders the variables; no other script behaviour is known.
