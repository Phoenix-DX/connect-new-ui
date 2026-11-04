# Convention review of `app/src` (2026-11-04)

Read-only review of the folder, file and identifier conventions in `app/src` at `978fd4fd` (branch `retest-arch`).
No file in `app/` changed. The user asked for the points that do not make sense and a detailed plan
(user, 2026-11-04).

Scope: 3,330 files and 755 folders in `app/src`. 1,656 of the files are production `.ts`/`.tsx` (no test, no story).
Method: Python scripts over the tree (names, file sets, exports, imports, tags, story titles), then a manual check of
each example in this report. The counts are reproducible with the scripts in section 7.

Related work, not repeated here:

- [Principal review](app-principal-review-2026-11-03.md): F-09 (layers), F-14 (mocks in production folders),
  F-15 (page shapes), F-30 (OutSystems names), roadmap WP-1 to WP-13, target folder structure (section 6).
- Rules that exist: [plan v2](../../app/docs/architecture/refactor-plan-v2.md) §2.2 (folders), §2.4 (rules 1–13),
  §2.5 (naming), R8 (barrels); [page template](../../app/docs/guides/page-template.md);
  [shared code](../../app/docs/guides/shared-code.md) "Conventions".

## 1. Verdict

The code style inside a file is consistent. The names of folders, files and identifiers are not. The cause is one
open rule: the code has no single answer to "OutSystems name or React name?". Each refactor phase answered it for
its own folders, so `components/` uses React names and `pages/`, `lib/` and part of `platform/` use OutSystems names.
No lint rule checks a name, so the drift grows with each new file.

## 2. What is consistent (keep it)

| Topic | Evidence |
| --- | --- |
| Imports use the alias `@/` | 0 imports with `../` in 1,656 production files (rule 11). |
| Named exports | Only the 68 `pages/<R>/<R>Page.tsx` files have a default export. `app/screens.ts` needs it. |
| Component declaration | `export function X` and `interface XProps` in all component files. 0 `React.FC`, 0 `import React`. |
| `api/<domain>/` file set | `hooks.ts`, `index.ts`, `keys.ts`, `mapper.ts`, `repository.ts`, `types.ts`. All hooks are `use*Query` or `use*Mutation`. 106 of 142 repository functions start with `fetch`. |
| Route inputs | `pages/<R>/inputs.ts` exists exactly for the routes that have inputs in `app/routes.generated.ts`. |
| Test names | A test file has the name of its source file, except the page tests `<R>.test.tsx` (plan v2 §2.2 sets this name). |
| Hook names | All hook files start with `use`. Reducer files are `<thing>State.ts` (56 in `pages/*/hooks`). |

## 3. Findings

Each finding has: evidence, why it does not make sense, the part that must not change (boundary), and the fix.
"Boundary" means an OutSystems name that a URL, a DOM id, a CSS class, a fixture key or a migration tool reads.

### A. Folder structure

#### C-01 OutSystems compatibility code is in 5 places, and "legacy" has 3 meanings

- Evidence:
  - `legacy/os/` (the folder `legacy/` has only the child `os/`), `components/ui/os/` (`OSBlock.tsx`, `OSList/`,
    `OSPopup/`), `components/ui/lib/` (OutSystemsUI actions, structures, static entities), `lib/os-wire.ts`,
    `lib/os-assets.ts`.
  - "Legacy" means the runtime emulation in `legacy/os/`, the `DEPRECATED_*` OutSystemsUI patterns in
    `components/ui/legacy/`, and the module Connect2_LegacyShared in `LegacyPopupMenu`, `LegacyInputCounter` and
    `lib/legacyShared/`.
- Why it does not make sense: a developer cannot find the compatibility layer by its name. `LegacyInputCounter` is not
  in `components/ui/legacy/`, but `LegacyAccordion` is.
- Boundary: none. The folder names are internal.
- Fix: the `os-runtime/` folder of the principal review (WP-7). Keep "legacy" for one meaning only (decision D6).

#### C-02 `components/ui/` mixes component folders with category folders

- Evidence: 98 PascalCase component folders, and 3 lowercase category folders (`os/`, `lib/`, `legacy/`).
  `components/ui/lib/` has the same role as `src/lib/<module>/`. `components/ui/DropdownSearch/vendor/` has the same
  role as `src/vendor/`. 431 production imports go to `@/components/ui/os/OSBlock`, one level deeper than all other
  components.
- Why it does not make sense: the rule "one folder = one component" is true for 98 of 101 children only.
- Boundary: none.
- Fix: `os/` and `lib/` go to `os-runtime/` (WP-7). `DropdownSearch/vendor/` goes to `src/vendor/virtualselect/`.

#### C-03 The same domain has different names in each layer

- Evidence:

  | Domain | `api/` | `components/` | `mocks/fictional/` | `lib/` | Story titles |
  | --- | --- | --- | --- | --- | --- |
  | Orbit and LDM events | `event` | `orbit` | `orbit`, `orbitAdmin`, `orbitAdminMilestones`, `ldm` | `orbit` | `Connect2_OrbitMobile_MUI` |
  | Updates | `update` | `feed` (`UpdateListItem`) | – | – | `UBTConnectLibrary/Update_ListItem` |
  | Household members | `member`, `household` | `household` (`MemberListItem`) | `directory` | – | `UBTConnectLibrary/Member_ListItem` |
  | Notifications | `notification` | `notification` | `notifications` | – | `UBTConnect/App_NotificationIcon` |
  | App start sync | `app` (`AfterInitialize`, `AppContext`) | – | – | – | – |

  `api/app/` has the same name as the folder `src/app/` (the composition root). `lib/`, `mocks/modules/` and
  `mocks/fixtures/` use the OutSystems module names (`ubtConnectUtils`, `Connect2_Assemble_MUI`).
- Why it does not make sense: a search for one domain needs 3 to 5 different words.
- Boundary: `mocks/fixtures/<Module>/<Action>/` (the fixture loader keys on this layout).
- Fix: one domain glossary (decision D7), then the folder names follow it.

#### C-04 `containers/` has 4 shapes in 13 folders

- Evidence:
  - The main file is `<Name>Container.tsx` in 9 folders. It is `CardWithNotesSheet.tsx`, `ItemNotesSection.tsx` and
    `FreeSubscriptionActionDialog.tsx` in 3 folders.
  - `containers/AdminQRCodeScan/` has no component: only `hooks/useAdminQRCodeScan.ts`.
  - `containers/NoteListActions/api.ts` and `containers/EntityDetailsActions/api.ts` only re-export `api/note` under
    the block names. The page template says that `api.ts` files are deleted.
  - Mock data: `mocks.ts` (7) and `mockData.ts` (`HouseholdDetails`).
  - 4 folders have no `index.ts`. `containers/index.ts` is a barrel, but 20 production imports go past it.
- Why it does not make sense: "container" (plan v2 §2.1) is a component that calls hooks. A folder with only a hook is
  not a container.
- Boundary: none.
- Fix: one shape per container (section 5, N4). The shared hook goes to `features/<domain>/` (WP-7).

#### C-05 `platform/` has two shapes, and 7 of 12 areas have no barrel

- Evidence:
  - Barrels in 5 areas (`auth`, `feedback`, `flags`, `navigation`, `settings`). No barrel in 7 (`bootstrap`,
    `config`, `device`, `log`, `session`, `storage`, `theme`).
  - 515 production imports go past an area (for example 55 × `@/platform/session/session`, 45 × `@/platform/log/log`).
    200 production files in `pages/` do this. The plan v2 metric "pages import `platform/` only through the area
    barrels" (§7) is not met at HEAD.
  - Areas with one file: `config/config.ts`, `log/log.ts`, `theme/bodyTheme.ts`.
  - Components in 2 shapes: 9 folders (`navigation/NavigationHandler/`, `session/PolicyChecker/`) and flat files
    (`navigation/LockHost.tsx`, `NavigationHost.tsx`, `ScreenFrame.tsx`, `feedback/dialogs/*.tsx`).
  - The PIN screen hooks are in `platform/session/` (`usePinRegisterContent.ts`, `usePinCodeUnlock.ts` and 2 more).
    Their components are in `components/auth/`.
- Why it does not make sense: the barrel rule R8 is true for some areas only. A reader cannot know which import form
  is correct.
- Boundary: none.
- Fix: decision D3, then a lint rule. UI in `platform/` goes to `app/hosts/` (WP-7).

#### C-06 One concern is split over several files with the same name

- Evidence:
  - Body theme: `legacy/os/bodyTheme.ts`, `platform/theme/bodyTheme.ts`, `components/layout/layoutTheme.ts`,
    `app/layoutTheme.ts`. Two files have the name `bodyTheme.ts`. The last two exist only to pass the layer rules.
  - Exceptions: `legacy/os/exceptions.ts` re-exports `legacy/os/os-exceptions.ts` (same folder).
    `platform/feedback/flowErrors.ts` re-exports `legacy/os/exceptions.ts`.
  - User info: `legacy/os/cache/UserInfoCacheControl/`, `platform/session/UserInfoCache/`,
    `platform/session/userInfo.ts`, `platform/session/cachedUserInfo.ts`.
- Why it does not make sense: two files with the same name in two layers hide which one is the owner.
- Boundary: none.
- Fix: one owner file per concern, with WP-7.

#### C-07 Test and mock helpers have misleading names or live in production folders

- Evidence:
  - `platform/navigation/testRouter.tsx`: only tests and `src/test/setup.ts` import it.
  - `platform/session/testSession.ts`: `platform/bootstrap/AppStart.tsx` imports it. It is the mock session of the
    demo build, not a test helper.
  - Mock data files have 5 names: `mocks.ts` (81), `mockData.ts` (2), `mockDefaults.ts` (1), `fixtures.ts` (3),
    `mocks/fictional/*.ts`.
- Why it does not make sense: "test" in a production file name tells the reader that the build does not contain it.
- Boundary: none.
- Fix: `testRouter.tsx` to `src/test/`. `testSession.ts` gets a name that tells its role (`mockSession.ts`). The
  mock placement is F-14 (WP-7).

### B. Page folders

#### C-08 Page components have OutSystems names, shared components have React names

- Evidence:

  | Folder | Exported component names | With `_` |
  | --- | --- | --- |
  | `components/**` | 251 | 6 (2 %) |
  | `pages/*/components/` | 234 | 105 (45 %) |

  - 20 of the 46 `pages/*/components/` folders mix both styles. Example `pages/HostSurvey/components/`:
    `HostSurveyView.tsx` next to 16 files such as `HostSurvey_AccommodationItem.tsx`.
  - 4 file names have `__`: `pages/AssembleDetail/components/NC_Result_Item__Image__Skeleton.tsx`,
    `NC_Result_Item__Tag.tsx`, `AssembleEventDetail__Error.tsx`, `pages/AssembleEvents/components/AssembleSummary_List__Header.tsx`.
  - 85 Props types follow the same names (`UBT_LazyImage_ListProps`).
  - 2 page components have the name of a shared component: `pages/AssembleDetail/components/ContextMenu.tsx`
    (`components/ui/ContextMenu`) and `pages/LegacyShareObject/components/HighlightSearch.tsx`
    (`components/ui/HighlightSearch`).
- Why it does not make sense: plan v2 §2.5 says "business names in PascalCase, without a module prefix". The rule is
  applied in `components/` only. `pages/Locality_Details/components/UBT_LazyImage_List.tsx` keeps the module prefix
  `UBT_`, and it renders the shared component `EntityLazyImage`: two names for one kind of thing.
- Boundary: the page folder names (`pages/Locality_Details/`, rule "folder name = route name"; `app/screens.ts` globs
  them). The `name` of `<OSBlock>` and the DOM (parity reads them). These do not change when the component name
  changes.
- Fix: decision D1, then N3.

#### C-09 The same kind of file has 2 or 3 places in a page folder

- Evidence:

  | Kind | Places |
  | --- | --- |
  | Ported client actions | `pages/<R>/actions.ts` (13), `pages/<R>/components/actions.ts` (8), `pages/<R>/hooks/<x>Actions.ts` (9) |
  | Static entities | `pages/<R>/staticEntities.ts` (22), `pages/<R>/components/staticEntities.ts` (12) |
  | Types | `pages/<R>/types.ts` (2), `pages/EventBooklet/hooks/eventBookletTypes.ts` |
  | Helpers | in `components/` (`hostSurveyHelpers.ts`, `textEllipsis.ts`, `ids.ts`, `setupList.ts`, `formOptions.ts`) and in `hooks/` (`goToExternalApp.ts`, `eventBookletLists.ts`, `unreadNotifications.ts`) |

  - 2 page components have their own subfolder (`pages/AcceptPendingPolicies/components/PoliciesHeader/`). All others
    are flat files.
  - 4 files hold several components and have no matching export: `pages/MilestoneDetail/components/milestoneBlockParts.tsx`
    (camelCase `.tsx`, 494 lines), `MealBlockViews.tsx`, `AccommodationBlockViews.tsx`,
    `pages/EventBooklet/components/EventBookletListParts.tsx`.
- Why it does not make sense: `components/` and `hooks/` tell a reader "only components" and "only hooks".
- Boundary: none.
- Fix: one page folder layout (N3, step 2).

### C. Identifiers and file names

#### C-10 Function, type and constant names keep the OutSystems underscores

- Evidence:

  | Area | Exported functions with `_` | Exported types with `_` | Examples |
  | --- | --- | --- | --- |
  | `lib/` | 141 of 259 (54 %) | 41 | `jSUtils_SetStyleProperty`, `bottomBar_GetList`, `CacheControl_Policies` |
  | `pages/` | 79 of 742 | 85 | `getSkeletonList_UI_SubdivisionCard`, `zOnApplicationEvent_Wrapper` |
  | `platform/` | 25 of 327 | 4 | `get_LocalNoteByNoteId`, `create_LocalBookmark`, `AppManager_CachedUserInfoRec` |

  - Module constants have 3 styles: `UPPER_SNAKE` (`INITIAL_ADMIN_MILESTONES_STATE`), `Pascal_Snake` for static
    entities (83 in `lib/`, 112 in `pages/`: `UBT_Icons2_Password`), and camelCase.
  - `shared-code.md` says "Use the lowerCamelCase of the action name". `get_LocalNoteByNoteId` is not lowerCamelCase.
    The rule does not say what happens to the underscores.
- Why it does not make sense: two functions of the same kind have two styles (`fetchHousehold` in `api/`,
  `get_LocalNoteByNoteId` in `platform/storage/`).
- Boundary: the field names of `structures.ts` ("Name fields exactly as in OutSystems") and the wire names in
  `api/schema.d.ts`. The static entity values.
- Fix: decision D1. Rename `lib/<module>/actions.ts` only when WP-7 splits it, so that each function changes once.

#### C-11 File names have 4 casing styles

- Evidence:
  - kebab-case `.ts`: `legacy/os/os-exceptions.ts`, `lib/os-assets.ts`, `lib/os-wire.ts` (and
    `platform/device/device-classes.json`). All other `.ts` files are camelCase.
  - camelCase `.tsx`: `pages/MilestoneDetail/components/milestoneBlockParts.tsx`, `platform/navigation/testRouter.tsx`,
    `test/capturedVariants.tsx`, `test/nativeLayout.tsx`, `test/loadedImages.tsx`.
  - Component file name is not the folder name in 6 folders of `components/`:
    `note/ItemCardActions/ItemCard_ActionBar.tsx`, `note/ItemCardWithNotes/ItemCard_WithNotes.tsx`,
    `filter/FilterSheetIconLabel/FilterSheet_Icon_Label.tsx`, `filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx`,
    and the folders `ui/ComingSoon_V2/`, `contact/ContactUs_Rate/` keep `_`.
  - `components/ui/os/OSPopup/` has no component: only `usePopupWidget.ts`.
  - `OSRadioGroup.tsx` exports `RadioGroup` and `RadioButton`. `OSValidation.tsx` exports `ValidationServiceProvider`,
    `ValidationMessage` and `OSForm`.
  - READMEs: 245 `README.md` and 4 `<Name>.README.md` (`components/ui/Dialog/`, `platform/feedback/dialogs/`).
- Why it does not make sense: a reader cannot guess a file name from a component name.
- Boundary: none.
- Fix: N2.

#### C-12 Acronyms have two casings

- Evidence (distinct identifiers that contain the form):

  | Acronym | All caps | Word case |
  | --- | --- | --- |
  | LDM | 24 (`LDM_EventDetail_V2`) | 38 (`LdmEventDetailView`) |
  | PIN | 23 (`PINRegister`) | 79 (`PinCodeRegister`) |
  | URL | 94 | 38 (`VirtualMeetingUrl`) |
  | QR code | 79 (`useAdminQRCodeScan`) | 12 |
  | SVG | `components/ui/InlineSVG/` | `components/ui/IconSvg/` (same folder) |
  | HTML | 24 | 11 (`SanitizedHtml`) |

- Why it does not make sense: `InlineSVG` and `IconSvg` are neighbours in `components/ui/`.
- Boundary: route names (`PINRegister`, `LDM_EventDetail_V2`) and OutSystems strings.
- Fix: decision D2, then a lint rule.

#### C-13 Blocks with the same name from different OutSystems modules use 4 naming schemes

- Evidence (all in `components/ui/`, `@origin` in brackets):

  | Scheme | Example |
  | --- | --- |
  | Digit or word | `Columns2` (OutSystemsUI) and `ColumnsTwo` (UBTConnectLibrary `Columns_Two`); `Columns3` and `ColumnsThree` |
  | Prefix `Connect` | `ConnectBlankSlate` (Connect2_LegacyShared), `ConnectBottomSheet` (UBTConnectLibrary): one prefix, two modules |
  | Prefix `Legacy` | `LegacyPopupMenu`, `LegacyInputCounter` (Connect2_LegacyShared), at the root of `ui/` |
  | Suffix `_V2` | `ComingSoon_V2` (UBTConnectLibrary) |

- Why it does not make sense: the name does not tell which block to use, or why there are two.
- Boundary: none. `@origin` keeps the OutSystems name.
- Fix: decision D6.

### D. File sets, tags, docs

#### C-14 The component folder set and the barrel rule do not match the code

- Evidence:
  - The documented set (page template, shared code): `<Name>.tsx`, `index.ts`, `types.ts`, `<Name>.test.tsx`,
    `<Name>.stories.tsx`, `__captures__/`, `README.md`. Missing in the 265 component folders of `components/`,
    `containers/`, `legacy/` and `platform/`: `index.ts` 13, test 11, story 29, README 25.
  - 3 folders hold several components: `ui/Dialog/` (4), `ui/os/OSList/` (4), `note/ItemCardActions/` (2).
  - R8 (user, 2026-10-22): "a barrel `index.ts` exists only at these boundaries: `components/ui`,
    `components/<domain>`, `containers`, `api/<domain>`, `platform/<area>`".
  - In the code: 232 `index.ts` files in `components/`, one in almost every component folder. `components/ui/` has
    no `index.ts`. 2 of 17 domains have a domain barrel (`household`, `layout`).
  - 1,359 imports (tests included) use the folder of one component (`@/components/ui/Button`).
- Why it does not make sense: the rule and the code disagree, so a new file follows whichever example the developer
  opens first.
- Boundary: none.
- Fix: decision D3.

#### C-15 Two origin tags, and the docs contradict each other

- Evidence:
  - 210 `.tsx` files have `/** @origin X */` and `// @os-block X` with the same value. About 330 `.tsx` files have
    `@origin` only.
  - 8 files have `// @os-block` only (no `@origin`, against R4): `platform/feedback/dialogs/BlockPinUnlock.tsx`,
    6 files in `pages/AssembleEvents/components/`, `pages/Updates_SingleList/components/UpdateItem_Header.tsx`.
  - Position: line 1 in `components/`. After the imports in 236 page files.
  - `shared-code.md` "Tag": "Write `// @os-block <Module.Flow.Block>` as the first line. The catalog counts built blocks
    by this tag." `page-template.md:200`: "No `// @os-block`".
  - Tools that read `@os-block`: `.claude/skills/outsystems-screen-spec/scripts/catalog.py:42`,
    `migration/tools/docs_gen.py`, `migration/tools/contract_gen.py`. A converter exists:
    `migration/tools/refactor/os-block-to-origin.py`.
- Why it does not make sense: two tags with one value can disagree, and the docs give two opposite rules.
- Boundary: the catalog tools. Change them before the tag.
- Fix: decision D4.

#### C-16 Storybook titles follow OutSystems modules, not the code tree

- Evidence:
  - 230 of 243 stories use `Shared/<OutSystems module>/<OutSystems block>`.
  - 13 use the code tree (`Components/Household/…`, `Containers/HouseholdDetails`, `Pages/…`, `Platform/feedback/…`,
    `Review/NotCaptured`).
  - OutSystemsUI has two spellings: `Shared/osui/…` (24) and `Shared/OutSystemsUI/…` (4).
  - Example: `components/ui/ResultItemMedia` has the title `Shared/Connect2_LegacyShared/NC_Result_Item__Image`.
- Why it does not make sense: the name in Storybook is not the name in the code. "Shared" is no longer a folder: P7
  deleted `src/shared/`.
- Boundary: none. No tool in `migration/` or `app/build/` reads the story titles.
- Fix: decision D5.

## 4. Decisions for the user

Each decision changes the plan. The recommendation is first.

| # | Question | Options | Recommendation and reason |
| --- | --- | --- | --- |
| D1 | Which name does internal code use? | (a) React names everywhere outside the boundary list. The OutSystems name stays in `@origin`, and a generated alias table maps both. (b) React names in `components/` only; OutSystems names stay in `pages/`, `lib/`, `platform/`, written as the rule. (c) No rename of existing code; only new code uses React names. | (a). It matches plan v2 §2.5 and F-30, and the production goal needs code that a React team can read. The alias table keeps the trace to OutSystems. |
| D2 | Acronym casing | (a) Acronym as a word: `Ldm`, `Pin`, `QrCode`, `Url`, `Svg`, `Html`. (b) All caps: `LDM`, `PIN`, `QRCode`, `URL`, `SVG`, `HTML`. | (a). The ESLint `naming-convention` formats `strictCamelCase` and `StrictPascalCase` check it. No lint checks (b). |
| D3 | Barrels (changes R8 of 2026-10-22) | (a) R8 as written: one barrel per `components/ui`, `components/<domain>`, `platform/<area>`; delete 232 component barrels. (b) Change R8: one barrel per component folder and per `platform/<area>`; add the 7 missing area barrels; a lint rule forbids an import past a barrel. (c) No barrels outside `api/<domain>`; import the file. | (b). 1,359 imports already use the component barrel, so the change is small. A 98-export barrel for `components/ui` slows tests and HMR and makes import cycles easier. |
| D4 | Origin tag | (a) `@origin` only: change `catalog.py`, `docs_gen.py`, `contract_gen.py` to read it, then remove `// @os-block`. (b) Keep both tags and correct `page-template.md`. | (a). One value cannot disagree with itself, and the converter exists. |
| D5 | Storybook titles | (a) The code path: `ui/Button`, `household/HouseholdMemberList`, `pages/Notes/…`. The OutSystems name goes in the story description. (b) Keep `Shared/<Module>/<Block>`; correct the 13 others and the `osui` spelling. | (a). A developer finds a component by its code path. |
| D6 | Blocks with the same name from different modules | (a) The OutSystemsUI pattern keeps its name. A project block gets a prefix that names its owner (`Connect…` for UBTConnectLibrary, `Shared…` for Connect2_LegacyShared). `ui/legacy/` holds only `DEPRECATED_*`. (b) Each block gets a business name that tells the difference; the README says when to use it. | (a). The rule is mechanical and a lint can check it. (b) needs a design decision per pair. |
| D7 | Domain names | (a) One glossary of business domains (for example `directory`, `orbit`, `ldm`, `assemble`, `updates`, `notes`). `api/`, `components/`, `features/` and `mocks/fictional/` use it. (b) The `api/` names are the reference; other layers follow `api/`. | (a). `api/event` holds Orbit and LDM, which the app shows as two products. |
| D8 | How to run the plan | (a) As plan v3 through `refactor-master` (state, agents, gates, a commit per step), on a new branch. (b) Manual batches. | (a). The plan has about 40 mechanical steps. Each step needs `ci` and parity, as in plan v2. |

## 5. Plan

Order: N0 and N1 stop new drift. N2 and N3 are renames with no behaviour change. N4 and N5 run together with WP-7 of
the principal review, so that each file moves and renames once.

Rules for every step:

- A step changes names and paths only. It does not change markup, CSS classes, DOM ids, `<OSBlock name>` values,
  call order or MSW handler order.
- Gate of each step: `npm run ci`, `refactor_parity.py --changed --level strict` (0 differences), `npm run unused`.
- Each rename uses the ts-morph codemod of P0, not a text replace. Each step is one commit. The commit ids go to
  `.git-blame-ignore-revs`.
- A step does not start before the decisions that it names (D1 to D8).

### N0 — Write the rules (docs only, effort S)

1. Get D1 to D8 from the user.
2. Write `app/docs/guides/conventions.md`. It holds these rules:
   - the folder roles and the file set of each folder kind;
   - the naming table, the boundary list and the acronym rule;
   - the tag, the story title and the barrel rule.

   The other guides link to it and do not repeat it.
3. Correct the conflicts in the docs:
   - `shared-code.md` "Tag" against `page-template.md:200` (D4);
   - the R8 text in plan v2 (D3);
   - the vendored script list in `shared-code.md`: 2 listed, 4 in `src/vendor/` and `DropdownSearch/vendor/`;
   - the count "4 `DEPRECATED_*` patterns": `components/ui/legacy/` has 3 folders.
4. Generate `app/docs/reference/os-names.md` from the `@origin` tags: React name, file, OutSystems name.

### N1 — Guards that stop new drift (effort S to M, parity risk none)

Part of WP-1. Each check has a frozen baseline. The baseline can only get smaller, as `arch-baseline.csv`.

1. `app/build/check-names.mjs` (Node), a step of `npm run ci`:
   - Folder casing per area: component folders PascalCase, other folders camelCase; `_` only in `pages/<Route>/`.
   - File names: `.tsx` PascalCase except `main.tsx` and the `test/` helpers; `.ts` camelCase; no kebab-case.
   - Component folder set: `<Folder>.tsx` exists; `index.ts` follows D3; test and story exist.
   - Header tag: one `@origin` in each file that ports a screen or a block (D4).
   - Story title = code path (D5).
2. ESLint `@typescript-eslint/naming-convention` as warnings with a baseline: functions and variables camelCase,
   types and components PascalCase, module constants `UPPER_CASE`, acronym format of D2. The boundary list is the
   exception list (structure fields, wire types of `api/schema.d.ts`).
3. ESLint `no-restricted-imports`: no import past a barrel (D3).

Result: the counts of section 3 are the baseline numbers. New code cannot add to them.

### N2 — Small mechanical renames (effort M, parity risk low)

| Step | Change | Files (about) | Finding |
| --- | --- | --- | --- |
| N2-1 | File name = folder name = component name for the 6 folders of C-11; `ComingSoon_V2`, `ContactUs_Rate` get names without `_` | 30 | C-11 |
| N2-2 | kebab-case `.ts` to camelCase (`osExceptions.ts`, `osAssets.ts`, `osWire.ts`); `milestoneBlockParts.tsx` to `MilestoneBlockParts.tsx`; `<Name>.README.md` into the folder `README.md` | 120 (imports) | C-11 |
| N2-3 | `OSPopup/` to a hook folder name; `OSRadioGroup`, `OSValidation` file names match their main export | 40 | C-11 |
| N2-4 | Acronyms to the D2 form in identifiers (not in route names or strings); `IconSvg` and `InlineSVG` to one form | 150 | C-12 |
| N2-5 | Change the 3 tools to read `@origin`; add `@origin` to the 8 files of C-15; remove `// @os-block` (D4) | 220 + 3 tools | C-15 |
| N2-6 | Story titles to the code path (D5) | 243 | C-16 |
| N2-7 | `testRouter.tsx` to `src/test/`; `testSession.ts` to `mockSession.ts` | 90 (imports) | C-07 |
| N2-8 | Barrels: add the 7 `platform/<area>/index.ts`; correct the 13 missing component barrels; codemod the 515 imports past a barrel (D3) | 400 | C-05, C-14 |
| N2-9 | Same-name blocks to the D6 scheme (`Columns2`/`ColumnsTwo`, `ConnectBlankSlate`, `LegacyPopupMenu`, …) | 80 | C-13 |

### N3 — Page folders (effort M to L, parity risk low)

Batches of about 10 pages. One commit per batch. The page folder names do not change.

1. Page layout. Write it in `conventions.md` (N0) and apply it:

   ```
   pages/<Route>/
     <Route>Page.tsx  <Route>.test.tsx  inputs.ts  mocks.ts  config.ts
     actions.ts       ported client actions of the screen (one place)
     staticEntities.ts                  (one place)
     types.ts                           (one place)
     hooks/           use*.ts, <thing>State.ts, their tests
     components/      PascalCase .tsx only, one component per file, with tests
   ```

   Move the 8 `components/actions.ts`, the 9 `hooks/<x>Actions.ts`, the 12 `components/staticEntities.ts` and the
   helper files of C-09 to their one place.
2. Rename the 105 page components with `_` and their 85 Props types to business names (D1). The file name follows. The
   `@origin` keeps the OutSystems name; `os-names.md` (N0-4) is regenerated.
3. Rename `ContextMenu` (AssembleDetail) and `HighlightSearch` (LegacyShareObject) so that they do not hide the shared
   components.
4. Split the 4 multi-component files of C-09 into one file per component. `HostSurvey` (888 + 853 lines) stays for
   WP-13, which splits it per step.
5. Rename the 79 page functions with `_` (D1). The static entity names follow D1 and the boundary list.

### N4 — Folder roles (effort L, with WP-7)

These steps are the WP-7 moves of the principal review (section 6), with these additions:

1. `legacy/os/`, `components/ui/os/`, `components/ui/lib/`, `lib/os-wire.ts`, `lib/os-assets.ts` to `os-runtime/`
   (C-01, C-02). `components/ui/DropdownSearch/vendor/` to `src/vendor/virtualselect/`.
2. One owner file per concern (C-06): body theme, exceptions (`exceptions.ts` and `os-exceptions.ts` become one
   module), user info.
3. Containers in one shape (C-04): `<Name>Container.tsx`, `hooks/`, `mocks.ts`, `index.ts`. `AdminQRCodeScan` goes to
   `features/orbit/` as a hook. Delete the 2 `api.ts` alias files; the callers import `@/api/note`.
4. Give the `platform/` components one shape (C-05). Move the PIN screen hooks next to `components/auth/` or to
   `features/auth/`. Merge the one-file areas `config/`, `log/`, `theme/` where the owner is clear.
5. Domain folders follow the glossary of D7 (C-03). `api/app` gets a name that is not `app`.

### N5 — Identifiers in `lib/` and `platform/` (effort L, with WP-7)

1. Each `lib/<module>/actions.ts` function gets its React name when WP-7 moves it to `features/<domain>/` or
   `platform/` (141 functions with `_`, 41 types).
2. The 25 `platform/storage/localEntities` functions with `_` (`get_LocalNoteByNoteId` to `getLocalNote`).
3. `os-names.md` is regenerated after each batch.

### Effort and order

| Phase | Effort | Parity risk | Depends on | Can run before the repository split |
| --- | --- | --- | --- | --- |
| N0 | S | none | user decisions | yes |
| N1 | S–M | none | N0 | yes |
| N2 | M | low | N1 | yes |
| N3 | M–L | low | N1 (N2-5 for the tags) | yes |
| N4 | L | low for moves, medium for MSW order | WP-1, WP-2, N2 | start before, finish after |
| N5 | L | low | N4 | after |

S = up to 1 day, M = 2–4 days, L = 1–2 weeks, for one agent team with the gates above.

## 6. What must not change

- `pages/<Route>/` folder names and `<Route>Page.tsx` (`app/screens.ts` globs `../pages/*/*Page.tsx`; the route table
  maps screen names to them).
- `app/routes.generated.ts`, `routes.css.generated.ts`, `api/openapi.yaml`, `api/schema.d.ts` paths (generators and
  `vite.config.ts` read them).
- `mocks/fixtures/<Module>/<Action>/` (the fixture loader keys on it), and the MSW handler order in `mocks/handlers.ts`.
- The `name` of `<OSBlock>`, `data-block` attributes, DOM ids and CSS classes (CSS and parity read them).
- The field names in `structures.ts` and `schema.d.ts` (wire names).
- `public/UBTConnect/**`.

## 7. Method and limits

- Scripts in the session scratchpad (not in the repository) measured these points:
  - folder casing per area and depth, file suffix and casing per area;
  - the component folder set and the page folder entries;
  - exported names, declaration style, Props types, tags and imports past a barrel;
  - story titles against the folder, and acronym forms.
- The reviewer opened and checked each example in section 3.
- Limits: the counts are for HEAD `978fd4fd`. "Distinct identifiers" in C-12 counts unique tokens, not uses. The
  effort is an estimate from the file counts, not a measurement.
- This review does not judge behaviour, tests or architecture layers. The principal review covers them.
