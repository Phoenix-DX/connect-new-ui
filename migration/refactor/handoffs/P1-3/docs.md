## Result
status: pass
summary: Replaced the `src/lib` and `components/OS*` paths with the new ones in the overview (text and diagram node), 8 guides and 4 READMEs. Added the P1-3 CHANGELOG entry. The 20 move-map rows already had status `moved` (set by the developer).

## Files changed
- app/docs/refactor/CHANGELOG.md
- app/docs/architecture/overview.md
- app/docs/guides/api-and-mocks.md
- app/docs/guides/device.md
- app/docs/guides/getting-started.md
- app/docs/guides/os-widgets.md
- app/docs/guides/pwa.md
- app/docs/guides/screens.md
- app/docs/guides/shared-code.md
- app/docs/guides/shell.md
- app/src/api/README.md
- app/src/shared/UBTConnectLibrary/LazyImage/README.md
- app/src/shared/UBTConnectLibrary/Input/README.md
- app/src/shared/osui/DropdownSearch/README.md

## Commands run
- ste_lint.py on each changed .md → 0 errors, except guides/screens.md (2 errors "sentence > 25 words", same as in P1-2, not from this step)
- prettier --write then --check on all changed files → pass
- check_mermaid.cjs overview.md → no errors
- grep for `src/lib`, `lib/api`, `components/OS*` in overview, guides and the 4 READMEs → none left

## Deviations from the brief
- move-map.csv not edited: the rows were already `moved`.
- ADR-15 not changed: no rule of the target architecture changed.
- Comments in code and READMEs of `src/shared` that name `lib/actions.ts` of a block are a different `lib/` (per-module) and stay.

## Questions for the user
none
