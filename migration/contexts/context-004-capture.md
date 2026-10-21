# context-004 · Phase 2: capture of the build screens

Date: 2026-10-14 · Phase: 2 done · Status: current

## Result
- 39 of 41 build screens captured on TST and analysed (`migration/screens/<S>/capture`, `analysis`): 38 with default,
  loading, offline; Splash default only. Not captured: FeedItemDetail (Q6 b), AcceptPendingPolicies (Q7 c).
- Coverage reviewed: 0 fetch failures; 490 blocks of popups / menus / sheets / empty or error branches not rendered.
  Decision: extra states are captured per route in the route loop (plan steps + recapture), not now (user).
- Decisions and gaps per screen: [capture-notes.md](../capture-notes.md). Plan `migration/capture-plan.json` and ids
  `migration/capture-ids.json` hold test-account ids and stay out of git (.gitignore).

## Decisions (user, 2026-10-14)
- Read-only guard on every capture; only the calls in plan `defaults.allowActions` pass (11: app start sync calls,
  reads with non-standard names, `Wrapper_NotificationOpened`). Recorded in CLAUDE.md rule 6.
- Q2 a ids found read-only; Q3 a fictional display text, empty avatar; Q4 phone 390×844 only; Q5 a ConnectShare with a
  fictional ShareId; Q6 b FeedItemDetail only from feed messages (none found); Q7 c AcceptPendingPolicies not captured.

## Facts learned
- A fresh tab of a signed-in context is sent to `/PINUnlock` 16-20 s after the load (app start + PIN check); no call is a
  reliable earlier signal. A reload in an unlocked tab keeps the unlock (sessionStorage).
- PINRegister appears only in a browser without a local PIN; PINChange contains `PIN.Pincode_Unlock` itself.
- Carousels get their list from the source screen (`SetPreloadObject`); opened by URL they are empty.
- HomeFeed update items mark the item read before navigating (blocked); household ids = householder member ids.
- Live OutSystems DOM carries `data-block` attributes (selectors can use block names).
- `Type_ShareObject.Household` = "Household" (TST manifest static entity).

## Files changed (skill copy in this project: `.claude/skills/outsystems-screen-spec`)
- New `scripts/readonly_guard.cjs` (guard shared with the rule of record_har.cjs).
- `scripts/batch_capture.cjs`: guard + allow list (`defaults.allowActions`, `--allow-actions`), blocked calls per run
  (`blocked-calls*.json`, cleared each run), stale `.complete` cleared, PIN redirect wait (`settleAuth`, 35 s cap), auto
  states reuse the unlocked tab and wait for `.layout`, per-screen `auth` (`none` / `locked` / `register`), `via`
  (reach a screen from its source), `waitForCall`.
- `scripts/capture.js`: the snapshot freezes DOM, images, blocks, stylesheets and environment before fetching sources.
- `scripts/site_auth.cjs`: `whereNow` (in-place lock overlay, `overlayIgnore`), `ensureSession` `stopAt`.
- Site profiles (`default.json` = `ubtconnect-tst.json`): `pin.overlay`, `pin.overlayIgnore`.
- Project tools: `migration/tools/route_discovery.cjs` (pre / dump / keepText), `flag_probe.cjs`, `check_mermaid.cjs`.
- `migration/capture-notes.md`, `.gitignore` (plan, ids).

## Open issues
- `/doctor` findings were reported but not applied (user interrupted); ask again only if the user brings it up.
- Extra states (popups, menus, sheets, empty / error) per route in the route loop.

## Next
- Phase 3: `catalog.py`, `board.py tier`, `flags.py scan`; check the scan against the 19 flag helpers.
