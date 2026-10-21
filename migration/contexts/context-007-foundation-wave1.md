# context-007 · Phase 5 foundation: shell, contract, wave-1 blocks

Date: 2026-10-14 · Phase: 5 in progress (wave 1 foundation done) · Status: current

## Result
- Task list: [foundation-plan.md](../foundation-plan.md). App scaffolded on the stable baseline (ADR-2); `npm run ci` green
  (83 test files, 316 tests), Storybook builds (http://localhost:6006 when running).
- Fixtures: 25, no person data ([mock-fixtures](../knowledge/mock-fixtures.md)), reviewed by the user; raw HAR deleted, salt kept.
- Shell spec + answers/decisions: [app-shell.spec.md](../app-shell.spec.md) §12a; facts in knowledge/shell-observed.md,
  shell-facts.md, shell/client-variables.md. Shell parts A (session, app start, sign-in/PIN mock, lock), B (navigation,
  back queue, preload, view cache, Leave App), C (feedback messages with original bugs B1/B2, dialogs, lock overlay).
- API contract: 95 operations from TST compiled code (`migration/tools/contract_gen.py`, report catalog/contract-report.md);
  data actions per owner `/api/<Module>/<Owner>/<Action>`; `contractHandler` types fictional mocks.
- Wave-1 blocks: 49 built in 4 batches (packs `migration/blocks/`, `migration/tools/block_pack.py`), conventions in
  app/docs/guides/shared-code.md. Wave-1 screens all tier lite.
- Docs: app/docs (overview C4, guides, generated reference via migration/tools/docs_gen.py, known-original-bugs).
- Ledger: foundation subagents 3,132k tokens over 10 runs (`ledger.py report`).

## Decisions (user, 2026-10-14)
- TST data is test data; fixtures only for non-person data; user profile dropped from GetCacheInfo (mock user instead).
- Shell decisions U4–U7, U12–U19 as recommended; original bugs reproduced 1:1 and listed.
- Contract: owner in the path for data actions; fixture re-review accepted.
- Test switch `?mocksession=unlocked|out|nopin|locked`; parity adds the plan's `cloneQuery` (capture-plan defaults + per screen).
- Foundation by wave (wave 1 = 49 blocks, then its 5 screens for review); all block agents on Opus.
- Review: localhost link + comparison page (`migration/tools/review_page.py`, parity now saves .expected/.build png).

## Facts learned
- Root `/UBTConnect/` shows HomeFeed; signed-out → `Login?In_IsFromInvalidPermissions=True`; fresh tab → PINUnlock;
  TST PIN settings: inactivity 1200 s, overlay in place.
- Static entity record values are loaded at runtime (not in compiled code); UI-only identifiers use symbolic constants.
- record_har needed: PIN wait before recording and `serviceWorkers: 'block'` (the SW bypassed the guard; no write seen).

## Open issues
- U11 start order, U20 (server refusal while locked), U21 (dialog/toast/overlay open states not captured).
- Layouts (wave 2) must mount CommonUI_InsideLayout and retire the shell's temporary CommonUiHost.
- Version text lacks OutSystems_Environment; dx-before-navigation not dispatched; PIN_SessionInactivity_Destroy not ported.

## Next
- Route loop wave 1: Login, PINUnlock, PINRegister, Splash, AcceptPendingPolicies (one Opus agent per route), then the
  user reviews each (localhost + review page). Then wave 2 blocks (42) → HomeFeed.
