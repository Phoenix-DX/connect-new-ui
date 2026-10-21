# context-012 · Wave 2 route HomeFeed finished

Date: 2026-10-15 · Phase: 6–8 (route loop, wave 2) · Status: current

## Result
- HomeFeed `built` after the user's "confirm" (Q4). Parity 0 unexempted in default / loading / offline, calls 0;
  regression parity clean on Login, PINUnlock, PINRegister, Splash. Review = localhost link only (user preference).
- 6 own blocks in `app/src/screens/HomeFeed/components/`; layout from shared Layout_HomePage + CommonUI + BottomBarMenu.
- Ledger HomeFeed ≈ 1.25M tokens (route 356k + CR batches 248k/263k + parity replay 156k + finishing 229k).

## Decisions (user, 2026-10-15)
- Q1 services fixture: re-recorded DataActionGetServices read-only, Id/IconId kept, HAR deleted, fixtures reviewed.
- Static entities from TST `moduleinfo` (`migration/knowledge/static-entities.md`); OpenApp web → CommonPlugin fetched.
- Exemptions accepted: logo replay (+pixel), link cursor (cursor only), loading fetch timeout (+pixel, loading only),
  skeleton shimmer, Feed CMS D8(b) iframe, badge `right`, slider timing (Q3 = A).
- Backlog: port OutSystems request timeouts into callAction (`migration/foundation-plan.md`).

## Facts learned
- Parity replay rebuilt nested `<a>` via the HTML parser; now a DOM builder keeps live nesting (`--replay parser` = old).
- Exemption rules can target style `props`; `ignoreSubtrees` can carry `states`.
- TST adds the bottom-bar slider ~2 s after the screen (app start ForceRefresh, `undefinedms` keeps `-appear`).

## Files changed
- Skill: parity_check.cjs (DOM builder replay, `props`, per-state ignoreSubtrees), parity reference doc.
- Tools: static_entities.py; knowledge: static-entities(-tst.json), runtime-sources.md, shell-facts.md.
- Shell: transitionEvents.ts, startup (offline bell rule), testSession seeds; shared: OpenInApp_*, preload households.

## Next
- Pattern references from HomeFeed (P-FLAGS, P-OSUI?) — user's choice; wave 3 (9 screens) after go-ahead.
