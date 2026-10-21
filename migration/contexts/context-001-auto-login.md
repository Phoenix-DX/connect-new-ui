# context-001 · Auto-login to UBTConnect TST

Date: 2026-10-13 · Phase: before 0 (survey) · Status: current

## Result
- `node $SK/batch_capture.cjs login --auto [--headed] --storage .auth/state.json` signs in end to end:
  Login → B2C → Callback → PINRegister (enter + confirm) → HomeFeed; session saved in `.auth/state.json`.
- Earlier failures: Playwright Chromium install was incomplete (user reinstalled it); script treated the
  Callback page as "in the app"; script knew only PINUnlock; after a successful registration the app resumes at
  `LastURL` (= Login), which looked like a logout.

## Decisions
- The script may register the PIN by itself on every fresh sign-in (user, 2026-10-13, option a).
- Context notes in `migration/contexts/` with an index; app facts in `migration/knowledge/` (user, 2026-10-13).

## Facts learned
- Sign-in, PINRegister, PINUnlock, resume rules: [knowledge/auth.md](../knowledge/auth.md).

## Files changed
- `.claude/skills/outsystems-screen-spec/assets/site-profiles/default.json` and `ubtconnect-tst.json` (kept identical):
  `login.transit` = Callback, `home` = `/UBTConnect/HomeFeed` (was PINUnlock), `pin.register` = PINRegister, `times: 2`.
- `.claude/skills/outsystems-screen-spec/scripts/site_auth.cjs`: wait out the transit page; `registerPin` (fields or
  keypad, confirm step); go to `home` when registration resumes at the login page; `unlockPin` no longer reports
  success when the app moved elsewhere; opt-in trace `OS_AUTH_TRACE=<dir>` (structure, paths, call names, no values).
- These are local edits to this project's copy of the skill.
- `CLAUDE.md`: section "Context notes".

## Open issues
- Service Studio MCP: `createSessionToken` reaches Service Studio (`127.0.0.1:41820`) but gets no answer within
  300 s; no approval dialog seen. Not Warp, not network. To try: look for a hidden dialog, restart Service Studio,
  `/mcp` reconnect, call again while the user watches.
- Service Studio is connected to **ubtmdev (DEV)**; captures come from **TST**. MCP answers may differ from TST.
- Reuse of `.auth/state.json` by `run`/`survey` is not verified yet; if the local PIN is not in the saved state the app
  asks again, which `site_auth.cjs` now handles.

## Next
- Phase 0: `node $SK/batch_capture.cjs survey`, then `survey_app.py`, then Phase 1 scope session.
