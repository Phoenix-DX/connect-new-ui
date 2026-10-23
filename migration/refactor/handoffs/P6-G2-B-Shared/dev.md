## Result
status: pass
summary: Moved the 9 src/shared/ rows of P6-G2 (62 files) with move.ts (file-list CSV), renamed component and Props to the target names, added 9 @origin tags, rewrote 113 imports. 11 new Rule 4 warnings added as baseline rows (10 P7, 1 P6-G2-B-ContactByEmailMember). arch_baseline.py has the W15 move-step mode.

## Files changed
62 files under app/src/shared/{Connect2_LegacyShared,UBTConnect_Utils,UBTConnect,UBTConnectLibrary}/ -> app/src/components/{layout,contact}/ (BaseLayout, LegacyLayout, OrbitLayout, MenuIcon, ContactPopup, ContactPopupByPhone, ContactEmailForm, DirectoryDetailSection, SectionLayout), as in move-map.csv
~70 importers (import lines and renamed identifiers; one vi.mock factory key in app/src/pages/ContactByEmailMember/ContactByEmailMember.test.tsx)
app/src/mocks/handlers.ts, app/src/mocks/handlers.test.ts (new glob ../components/**/mocks.ts; see Deviations)
app/docs/refactor/arch-baseline.csv (+11 rows)
migration/tools/refactor/arch_baseline.py (check --move-step <phase> --base <commit>)

## Commands run
node migration/tools/refactor/move.ts (file-list CSV, --phase P6-G2) -> moved 62 files, 113 imports
rename-exports-g1-shared.ts, add-origin-g1-shared.py (reused) -> 8 renamed (SectionLayout already renamed), 9 tags
npm --prefix app run typecheck -> exit 0
cd app && npx vitest run -> 411 files, 2194 tests pass
cd app && npx eslint <changed files> -> 0 errors, 11 warnings (the new Rule 4 ones); prettier --check src clean
arch_baseline.py check -> 48 warnings, 48 rows, 0 new, exit 0
arch_baseline.py check --move-step P6-G2 --base 86f7682 (on the old 37-row baseline) -> 11 ADD, 0 new, exit 0; with P6-G1 the same 11 stay NEW (self-check)
rf.py diffcheck --move -> FAIL only on app/src/mocks/handlers.ts (+handlers.test.ts); renames 117, origin tags 18, no other failure

## Deviations from the brief
- ContactByEmailForm has a mocks.ts (SendContactMemberEmail handler). Moved to components/contact/ContactEmailForm/mocks.ts it would no longer be picked up by the shared/** glob and the handler would vanish. I added one glob line `../components/**/mocks.ts` in handlers.ts (after shared, before platform) and the same path in the order test in handlers.test.ts. This is not a pure move, so diffcheck --move reports these lines. Needs acceptance (alternative: leave mocks.ts in shared, which breaks "shared empty").
- Rename missed a vi.mock factory property key (`ContactByEmailForm:` in ContactByEmailMember.test.tsx); fixed by hand (identifier only; strings unchanged).
- W15 guard: new rows owners: ContactEmailForm.tsx -> P6-G2-B-ContactByEmailMember (first user page); ContactPopup, BaseLayout, LegacyLayout, MenuIcon -> P7 (shared by several groups / layout shells, as in G1). No self-check test file; the self-check is the run above.
- Used sed once on a scratch CSV in the scratchpad (not a project file).

## Questions for the user
Accept the handlers.ts glob line for components/**/mocks.ts (diffcheck --move flags it)?
