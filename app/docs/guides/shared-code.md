# Shared code

- `src/components/<domain>/<Name>/`, `src/containers/<Name>/`: one component per OutSystems block that two or more
  screens use. Props have the names of the block inputs. Events have the names of the block events. Placeholders become
  children. The component file carries `@os-block <Module.Flow.Block>` and `@origin`.
- `src/shared/` no longer exists. P7-0 moved most blocks to `src/components/ui/<Name>/`. P7-6 moved the rest by data
  owner ([move-map.csv](../refactor/move-map.csv)).
- `src/lib/<module>/`: the helpers of one OutSystems module: `structures.ts`, `staticEntities.ts` and the client
  actions in `actions.ts`. `src/lib/` also holds generic helpers (`cssText.ts`, `osDateTime.ts`, `jsUtils.ts`,
  `navigationEvent.ts`, `sanitizeHtml.ts`).
  - The `actions.ts` files still import `api/`, `platform/` and `legacy/os/`. Rule 6 (`lib/` imports only `lib/`) has
    55 warnings because of this.
  - The count is a ceiling: later steps may only lower it (follow-up F35 in `migration/refactor/followups.md`).
- `src/mocks/modules/<Module>/`: the MSW handlers of the module actions (`mocks.ts`, `mockDefaults.ts`).
- `src/test/`: story and test helpers (`PendingBlock.tsx`, `capturedVariants.tsx`, `loadedImages.tsx`, `mockApiSession.ts`).
- `src/components/ui/<Pattern>/`: OutSystems UI patterns (BottomSheet, Carousel, Gallery…). P7-1 moved them from the former `osui` folder. Shared actions are in `src/components/ui/lib/`. The 4 `DEPRECATED_*` patterns are in `src/components/ui/legacy/` with business names. Use the same provider library
  and version as the original, where the original has one ([stack](../reference/stack.md)).
- `src/platform/`: app-wide logic (error handling, sign-in and PIN mock, navigation, preload, feedback messages).
- `src/api/client/`: the typed `callAction` client. `src/lib/os-wire.ts` and `src/lib/os-assets.ts`: OutSystems wire and asset helpers. `src/legacy/os/`: OutSystems exceptions and other compatibility code.
  `src/platform/{config,log,flags,device}/`: providers and adapters.

Every shared block has a DOM capture test per captured state and a Storybook story per state.

**Freeze.** Once the foundation is done, screens never edit `src/platform`, `src/lib`, `src/api`, `src/legacy` or the original CSS.
When a screen needs a change:

- The screen writes `migration/change-requests/CR-<Screen>-<n>.md`.
- The screen renders that part with `<NotCaptured>` and carries on.
- The foundation owner applies change requests in batches. The owner re-verifies every screen that uses the block.

## Conventions

The reference batch sets these conventions (CustomContainer, Columns_Two, CustomText, Icon, IconSVG,
IconInline_Internal, HighlightSearch, SkeletonSection, Button; OSUI Columns2, InlineSVG). Later batches copy them.

- **Folders.**
  - Put a block in `src/components/<domain>/<Name>/` (or `src/components/ui/<Name>/` for a pattern that no domain owns).
  - Put OutSystems UI patterns in `src/components/ui/<Pattern>/`.
  - Put module code in `src/lib/<module>/` (for example `src/lib/ubtConnectLibrary/`):
    - `structures.ts`: structures. Name fields exactly as in OutSystems. All fields are optional (= OutSystems default).
    - `staticEntities.ts`: identifier values, each with its evidence.
    - `actions.ts`: client actions ported 1:1. Use the lowerCamelCase of the action name. The function returns the
      single output.
    - `actions.test.ts`: branches that no capture reaches.
  - Put generic helpers in `src/lib/`.
  - Put story/test helpers in `src/test/`.
- **Block files.**
  - `<Block>.tsx` (named export `<Block>`)
  - `index.ts` (`export *` + `export type * from './types'`)
  - `types.ts` (re-exports the structures of record inputs)
  - `<Block>.test.tsx`
  - `<Block>.stories.tsx`
  - `__captures__/v<N>.html`
  - `README.md` (name, inputs → props, events, placeholders, captures with source, not captured)
- **Tag.** Write `// @os-block <Module.Flow.Block>` as the first line. The catalog counts built blocks by this tag.
- **Props.**
  - Name a prop with the lowerCamelCase of the input name, underscores dropped (`In_Text` → `inText`,
    `ExtendedClasses` → `extendedClasses`).
  - Name an event `on` + the event name without underscores (`Clicked` → `onClicked`, `Event_OnClick` →
    `onEventOnClick`).
  - One placeholder → `children`. Several placeholders → one `ReactNode` prop each (`Left` → `left`).
  - Optional `id` = OutSystems instance id on the root wrapper.
  - Text/identifier and Long Integer → `string`. Integer/Decimal → `number`. Record → structure type.
  - Defaults = OutSystems input defaults.
  - A parent passes child inputs explicitly, as OutSystems does. An omitted record field means `''`, not the default of
    the child.
- **Markup.**
  - The root is `<OSBlock name="<Flow>.<Block>">`. The rest is as captured.
  - Build classes with the ported actions, in the original order. Keep class strings verbatim (spaces included).
  - Use inline `style` only where captured. An OutSystems click handler adds `cursor: pointer`. SetStyle text goes
    through `styleFromCssText`.
  - Do not render generated inner ids.
  - A JS node that rebuilds DOM becomes a pure function that React renders (`HighlightSearch/highlight.ts`).
- **Captures.**
  - Copy pack variants 1–4 verbatim.
  - Add extra variants from `migration/screens/*/analysis/dom/*.html` for logic that the first four miss.
  - Write `<!-- prettier-ignore -->` as the first line. Without it, Prettier rewrites the files.
- **Stories are the test inputs.**
  - Story `V<N>` (JSDoc: source screen/state) renders the inputs that produce capture `v<N>`. The title is
    `Shared/<Module>/<Block>`.
  - The test calls `testCapturedVariants(stories, import.meta.glob(
'./__captures__/*.html', { query: '?raw', import: 'default', eager: true }))`: one `expectToMatchCapture` test per
    story (via `composeStories`). The test also has `it(...)` for events and branches not captured.
- **Nested blocks.**
  - Render built blocks for real.
  - In stories, render other blocks as `<PendingBlock name="<Flow>.<Block>">` (same root wrapper, visible "not built"
    content).
  - Write caller markup inside placeholders in the story, as captured.
- **Data.** The tests do not compare masked text (`•`). Stories use neutral mock values, never real names.
- **Unknowns.**
  - The compiled code has no static entity values. Take them from captured classes / the original stylesheets
    (`public/UBTConnect/css/`) and note the evidence.
  - Values that tests only compare (never render) are opaque constants.
  - Captures drop many attributes (`preserveAspectRatio`, `x1`, `inert`…). A missing attribute is no evidence.
  - READMEs list "not captured" states and "not settled" points.
  - Use `<NotCaptured>` only where even the compiled code says nothing.

## Vendored third-party scripts

The original app has two scripts with no npm build that matches them. The app contains copies of the exact files that the
original serves (same version). A typed module wraps each copy. Each folder has a `SOURCE.md` (URL, date, size, sha256,
licence). Never edit the copies.

| Script                                                 | Folder                                                  | Used by                                                             | Decision |
| ------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------- | -------- |
| PanZoom (anvaka panzoom, customised by the original)   | `src/vendor/panzoom/` (`index.ts` is the typed wrapper) | the Photobook screen (`src/pages/Photobook/components/PanZoom.tsx`) | ADR-7    |
| Virtual Select 1.3.0, as bundled by OutSystems UI 2.23 | `src/components/ui/DropdownSearch/vendor/`              | the DropdownSearch OSUI pattern                                     | ADR-5    |

Why vendored: the original customises PanZoom (options that upstream does not have), and npm stops at Virtual Select
1.1.0. Behaviour must match the original, so the app keeps the same file.

Not vendored: Floating UI, as bundled by OutSystems UI 2.23. The Tooltip pattern uses only its offset, arrow and flip
middlewares. `src/components/ui/Tooltip/balloonPosition.ts` re-implements them as a pure function. The user chose
this on 2026-10-28 (decision O1 a, `migration/clarify/review/item5-solution.md`).

How to upgrade: upgrade only together with the original app.

1. Fetch the new file as a plain static GET.
2. Replace the copy byte for byte.
3. Update `SOURCE.md` (URL, date, size, sha256).
4. Run the `index.test.ts` of the folder and the tests of the screens that use it.
5. Record the change as an ADR.

Do not patch the vendored file. Change the wrapper (`index.ts`) instead.

## Platform widgets in `src/components`

See [Platform widgets](os-widgets.md).
