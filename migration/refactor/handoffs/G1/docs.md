# G1 documenter report

## Result

Status: `pass`.

Changed (all evidence: `app/src/legacy/os/exceptions.ts`, `app/src/platform/navigation/osNavigate.ts`, `app/src/screens/ContactUsDetails/mocks.ts`, dev.md):

- `app/src/platform/README.md`: the SecurityException trigger no longer waits for the BFF; only the 401 trigger does.
- `app/docs/architecture/overview.md`: same fix; names `raiseToFlowHandler` and `osNavigateTo`.
- `app/docs/guides/api-and-mocks.md`: SecurityException behavior (signed in / anonymous, subtypes); `?mock=security` added to the route scenario row. Prettier reflowed the scenario table.
- `app/docs/guides/shell.md`: `raiseToFlowHandler` summary lists the three branches in App_Common order; the hand test with `?mock=security`.
- `migration/knowledge/shell-facts.md`: the open question on NotRegisteredException is now a fact (`migration/runtime-sources/OutSystems.js` line 2).
- `app/docs/refactor/CHANGELOG.md`: entry G1, marked as a behavior change outside the refactor steps (U2, W7).

Not changed: `move-map.csv` (no move), ADR-15 (no rule change), `followups.md` (master's).

Checks: `ste_lint.py` 0 errors on all changed files; prettier passes on the files under `app/`. No mermaid change.

## Questions for the user

None.
