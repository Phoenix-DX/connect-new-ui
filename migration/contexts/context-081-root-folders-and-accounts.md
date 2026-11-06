# context-081: root folders tidied, several test accounts (2026-11-06)

## Result
- The root has four folders: `app/`, `tools/`, `migration/`, `.claude/`.
  - `route-check/` → `migration/route-check/` (reports, `config.json`, ignored `.cache/`). `check_route.py`,
    `react_calls.mjs`, `mcp_client.py` and `config.json` (`cache`) point there; the 68 route files, `APP_SHELL.md`
    and `ROUTES.md` were regenerated from the MCP cache (relative links).
  - `capture/` → `migration/survey/`: `survey-UBTConnect.json` (live survey, still ignored) and
    `survey-UBTConnect-2026-10-13.json` (tracked). 14 tools and the documents name the new path.
- `.auth/accounts.json` holds several test accounts: one password and PIN, `accounts` = role → list of users,
  `order` = the roles in order (the owner wrote it on 2026-11-06). `site_auth.cjs` reads it (`loadAccounts`,
  `autoLoginAny`); `loadSecrets` takes the first account, then `.auth/credentials.json`; the environment and
  `--credentials` still win. Labels in logs and run files: `<role>` or `<role>#<n>`, never the user.
  - `batch_capture.cjs`: `login --auto [--role a,b]` signs in with the first account that works; `run` tries the
    next accounts for a screen the signed-in account cannot reach (redirect, no access, session expired).
  - `journey_capture.cjs`: every user of a role is one attempt; `--accounts` names roles.
  - `flag_probe.cjs`, `route_discovery.cjs`, `record_har.cjs`: unchanged, they get the first account.
- Fixed on the way: `site_auth.cjs` looked for the site profile in `tools/assets/` since the move of 2026-11-05
  (`tools/pipeline/assets/` now). A sign-in on TST with `--role global` verified the chain (PIN register, home).

## Decisions (who, date)
- User 2026-11-06: (a) `route-check/` into `migration/`, (b) `capture/` into `migration/survey/`. New tools always
  go in `tools/`. The accounts file has the format above. A tool moves to the next account of the role when one
  cannot reach the screen.

## Facts learned (evidence)
- `openapi.yaml` unchanged after the survey move (the evidence strings follow the new path). `sitemap.md` and
  `sitemap.html` regenerated (order of a few edges only).
- A fresh browser session on TST asks for a PIN register on the first sign-in of an account (`/UBTConnect/PINRegister`,
  two entries). The app then resumes at the login page, and `site_auth` opens home.

## Files changed
- Moved: `migration/route-check/**`, `migration/survey/survey-UBTConnect*.json`. Tools: `site_auth.cjs`,
  `batch_capture.cjs`, `journey_capture.cjs`, `check_route.py`, `react_calls.mjs`, `mcp_client.py`, the survey
  path in `sources_store.py`, `contract_gen.py`, `css_sets.py`, `sitemap.py`, `flags.py`, `board.py`, `tst_source.py`,
  `mark_stale.py`, `flow_pack.py`. Docs: `CLAUDE.md`, `README.md`, `RUNBOOK.md`, `.gitignore`, skills `route-check` and
  `outsystems-screen-spec`, `migration/route-check/README.md`, `tools/README.md`, knowledge pages.

## Open issues
- Row 23, re-captures, the three `confirm`, `flags.py scan` (context-080).

## Next
- The user's decisions above; then the re-captures with the account list.
