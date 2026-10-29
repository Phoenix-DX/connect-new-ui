# components/ui

The UI library of the app: components that know no page, no API and no platform service. Phase 7 filled it (plan v2
steps P7-0 to P7-6; report: `app/docs/refactor/reports/P7.md`).

## What the folder holds

| Group                           | Where                                                         | Origin                                                                                                                                                                  |
| ------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OutSystems UI patterns          | `components/ui/<Pattern>/` (P7-1)                             | `OutSystemsUI_2_23.*`: Accordion, Animate, BottomSheet, Card, Carousel, Columns2/3, DropdownSearch, Gallery, Tag, Tooltip and others. Moved from `shared/osui/`.        |
| Shared blocks of the UBT module | `components/ui/<Name>/` (P7-0)                                | `UBTConnectLibrary.*`, `UBTConnect.*`, `UBTConnect_Utils.*`, `Connect2_LegacyShared.*`, `ReactiveHtmlSanitizer.*`. Business names from `move-map.csv`.                  |
| Dialog family                   | `components/ui/Dialog/` (P7-2)                                | `Dialog` (one markup), `ConfirmDialog`, `ChoiceDialog`, `NavigationDialog`. See `Dialog/Dialog.README.md`.                                                              |
| Empty state and skeleton        | `components/ui/EmptyState/`, `components/ui/Skeleton/` (P7-3) | `EmptyList` and `SkeletonSection`, renamed, with component-library prop names. The DOM and the block names in the DOM did not change.                                   |
| Legacy components               | `components/ui/legacy/` (Q5)                                  | The three `DEPRECATED_*` OSUI patterns, with business names: `LegacyAccordion`, `SectionExpandable`, `LegacyButtonLoading`. Not deleted: the original screens use them. |
| Platform widgets                | `components/ui/os/`                                           | `OSBlock`, `OSDropdownCustom`, `OSLink`, `OSList`, `OSPopup` (`usePopupWidget`), `OSRadioGroup`, `OSValidation`. See `docs/guides/os-widgets.md`.                       |
| Pure helpers of the patterns    | `components/ui/lib/`                                          | The OSUI shared actions and structures (`actions.ts`, `deviceDetection.ts`, `staticEntities.ts`, `structures.ts`).                                                      |

`components/ui/` has 93 component folders. The groups above overlap (`Dialog`, `EmptyState` and `Skeleton` are in two
groups), so their folder counts do not add up to 93. `legacy/`, `lib/` and `os/` are not counted.

Each component folder has a `README.md` (props, OutSystems name, captured variants). `Dialog/` has `Dialog.README.md`,
`ChoiceDialog.README.md` and `NavigationDialog.README.md` instead. `legacy/`, `lib/` and `os/` have no README. A captured
folder has a `__captures__/` folder that the tests compare against.

Each component folder has its own `index.ts`; import the
folder (`@/components/ui/Icon`), not the files inside it. There is no `components/ui/index.ts`.

## Rules for components/**

From plan v2 section 2.4. The first two are the ones most often broken.

1. `components/**` does not import `api/`, `platform/`, `containers/`, `pages/` or `app/` (rule 4).
2. `components/ui/` imports only `components/ui/`, `lib/` and `styles/` (rule 5).
3. A component does not read server state or session state. The page, a hook or a container passes it in props.
4. No import cycles (rule 10). Imports use the alias `@/` (rule 11).
5. Import a component folder through its `index.ts`, not the files inside it (rule 12).
6. A file that ports an OutSystems block has one JSDoc tag `@origin <OutSystems qualified name>` (rule 13).
7. Existing components keep the legacy class names and the legacy CSS (R3). A new component uses CSS Modules with the
   tokens.

When `components/ui` needs a platform service, do not import it. Take it by a prop, or by a module binding that
`src/app/` sets, as `app/dialogs.ts` does for the dialogs (`connectDialogs()`).

Known exceptions (all in `app/docs/refactor/arch-baseline.csv`, the lint step allows no new row): `os/OSLink.tsx`
imports `platform/navigation` (follow-up F36); other `components/` files import `platform/` (rule 4, owner P7 rows).
Do not copy them.

## How to add a component

1. Look for a match first: `ls components/ui`, and `app/docs/refactor/duplicates.md`. Do not add a second component
   with the same DOM.
2. Create `components/ui/<BusinessName>/` with `<BusinessName>.tsx`, `<BusinessName>.test.tsx`,
   `<BusinessName>.stories.tsx`, `README.md` and `index.ts`.
3. Name the component by what it does, without a module prefix. Name props like the other `components/ui` props
   (`isLoading`, `extendedClass`, `title`, `onChange`).
4. When it ports an OutSystems block, add `@origin <qualified name>` to the JSDoc of the main file. Add the
   captured DOM to `__captures__/v<n>.html` and test against it.
5. Export the component in the `index.ts` of its folder.
6. Import only what rule 5 allows. Run `npm --prefix app run lint:arch`: the folder must have no new warning.
7. Run `npm --prefix app run typecheck`, the tests of the folder and `npx eslint` on the new files.
