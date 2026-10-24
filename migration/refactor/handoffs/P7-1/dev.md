## Result
status: pass
summary: Moved all 230 files of src/shared/osui/ (31 patterns + lib/) to components/ui/ with move.ts; the 4 DEPRECATED_* patterns went to components/ui/legacy/ with their map names (not deleted, see Deviations). typecheck, lint (0 errors), full unit suite (639 files, 3925 tests), arch_baseline check (0 new, 0 gone) pass. 1 baseline row added (owner P7).

## Files changed
230 files moved by node migration/tools/refactor/move.ts (file list in scratchpad p71/files.csv): src/shared/osui/<X>/ -> src/components/ui/<X>/ for the 27 patterns; DEPRECATED_Accordion -> ui/legacy/LegacyAccordion, DEPRECATED_AccordionItem -> ui/legacy/SectionExpandable, DEPRECATED_ButtonLoading -> ui/legacy/LegacyButtonLoading, DEPRECATED_GalleryV2 -> ui/legacy/GridGallery (file names of the main file, test, stories follow); src/shared/osui/lib/* -> src/components/ui/lib/* (tests, stories, README, __captures__, vendor/ move with them)
Importers in pages/, components/, platform/, shared/ (import lines and renamed identifiers of the 4 legacy components)
app/eslint.config.js (vendor ignore path)
app/.prettierignore (vendor ignore path)
app/docs/refactor/arch-baseline.csv (+1 row)
Prettier re-wrap in LegacyAccordion.tsx and LegacyAccordion.test.tsx (shorter names)
src/shared/osui/ no longer exists

## Commands run
move.ts --map p71/files.csv --phase P7 -> moved 230 files, rewrote 192 imports, typecheck ok
rename-exports-g1-shared.ts p71/rn2.csv (4 DEPRECATED_* rows) -> 4 files renamed (GridGallery already ok after run 1)
add-origin-g1-shared.py p71/org.csv -> @origin added to the 31 main files (4 DEPRECATED ones carry their OutSystems name)
npm --prefix app run typecheck -> exit 0
cd app && npx eslint src -> 0 errors, 80 warnings (all in baseline)
cd app && npx vitest run -> 639 files, 3925 tests pass
prettier --check on the 235 changed ts/tsx -> clean (after 2 re-wraps)
arch_baseline.py check -> before row: 1 new (components/ui/DropdownSearch/provider.ts imports @/platform/device/device, rule-4; it was allowed in shared/); after: 79 rows, 0 new, 0 gone; arch_baseline_selfcheck.py ok
Own diff vs the P7-0 tree (temp index copy, git diff --cached -M <basetree>): 163 files with changes; non-import lines listed below

## Lines that are not a move (with reason)
- @origin JSDoc tag, one per file, 31 files (R4; 27 OSUI names + 4 DEPRECATED names)
- Renamed identifiers of the 4 legacy patterns and their Props types: DEPRECATED_Accordion -> LegacyAccordion, DEPRECATED_AccordionItem -> SectionExpandable, DEPRECATED_ButtonLoading -> LegacyButtonLoading, DEPRECATED_GalleryV2 -> GridGallery (names from move-map.csv); in the 4 components, their tests/stories, and the users: OrbitAccordion, OrbitContactFormView, HouseholdEmailView, GuestArrangementsView, HelperDetailsView, AccommodationHostView, EventDetailView, MyBookmarks_Album (JSX tags)
- Prettier re-wraps caused by the shorter names (LegacyAccordion signature, 2 render() calls in its test)
- vi.mock / typeof import('@/shared/osui/...') strings changed to '@/components/ui/...' (string paths in tests, 6 files; codemod rewrites the specifier of vi.mock, these are the importOriginal generics and the mock path)
- eslint.config.js and .prettierignore: vendor glob src/shared/osui/*/vendor -> src/components/ui/*/vendor
- arch-baseline.csv: +1 row `src/components/ui/DropdownSearch/provider.ts,@/platform/device/device,rule-4,P7` (W15, moved debt)

## Deviations from the brief
- DEPRECATED_* were moved, not deleted. The brief says "P6 moved their last users", but they have 12 importers (Orbit accordion, EmailContact, EmailTarget, EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail, MyBookmarks). Deleting them would change the DOM, and user decision Q5 (state.json, 2026-10-22; CHANGELOG) keeps them as components/ui/legacy/ (R3). move-map.csv has these rows with phase P7. The plan text "Delete DEPRECATED_*" is therefore not applied; the plan/brief text should be corrected by the documenter.
- Columns4, RangeSlider, SwipeEvents, Tooltip have no importer; the map says "P7-1 deletes it unless the user keeps the OSUI set". Deleting needs a user decision (the files hold tests and captures), so I moved them. The user can delete them in a later change step.
- Stories: all 31 patterns already had one story file each; no new story written.
- shared/osui/lib/ has no move-map row. I moved it to components/ui/lib/ (OSUI shared actions, staticEntities, structures, deviceDetection) because ui patterns and shared/UBTConnectLibrary import it. The documenter should add the row.
- Story titles ('Shared/osui/...') and README text keep the old path; not changed (not a move).
- .dependency-cruiser.cjs rule `osui-no-import-of-app-modules` still points to src/shared/osui/ (now matches nothing). Not changed in a move step; the lint:arch rules for components/ui apply (P7 cleanup should drop or retarget it).
- rename tool: the CSV needs LF endings (python csv wrote CRLF, so run 1 renamed only 1 file; fixed with rn2.csv).
- The real index was not unstaged or committed; move.ts staged the renames. For the diff review I used a copy of the index (scratchpad p71/idx).

## Questions for the user
- Columns4, RangeSlider, SwipeEvents, Tooltip (no importer, in components/ui/ now): delete them (plan note: "unless the user keeps the OSUI set") or keep?
