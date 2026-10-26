# Test report · F52

Status: pass

## Commands run
- `npm --prefix app run flags`: exit 0; prints "readers of flags outside pages, hooks, containers: 4 = 2 by design + 2 owned, target 0" (orbitStaticEntities.ts listed).
- Temporary read: I do not edit files, so I copied `app/src` to the scratchpad and ran `node app/build/check-flags.mjs --src=<copy>`. Adding `|| isOn('mobileAssemble')` in orbitStaticEntities.ts: fails with `NEW OUTSIDE READER platform/storage/localEntities/orbitStaticEntities.ts | mobileAssemble`. Removing the `mobileOrbitHostSurvey` read: fails with `STALE BY DESIGN`. The copy was deleted; the repo source is untouched.
- `npm --prefix app run ci` (shared run with F57): exit 0, includes `flags` and `format:check`.

## Diff review
1-3, 7: only `app/build/check-flags.mjs` changed for this step; no fixtures, openapi, css or secrets. Pass.
4-5: n/a. 6: the pair moved from OUTSIDE_OWNED to OUTSIDE_BY_DESIGN_PAIRS with the required comment; `app/routes.ts` still allows any flag; the check is stricter (stale by-design pair fails). Prettier also reformatted lines that were already unformatted (no logic change). Pass.
