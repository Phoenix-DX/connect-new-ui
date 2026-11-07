## Result
status: pass
summary: Documented the HomeFeed sync. route-spec has the TST sync block and one decision bullet; drift row, changelog and IconSvg README are updated; check_route.py HomeFeed re-run. STE lint 0 errors on the changed files.

## Files changed
migration/screens/HomeFeed/route-spec.md
migration/knowledge/tst-drift-2026-11-07.md
app/docs/CHANGELOG-sync.md
app/src/components/ui/IconSvg/README.md
migration/route-check/routes/HomeFeed.md (written by check_route.py)
migration/route-check/APP_SHELL.md, migration/route-check/ROUTES.md (written by check_route.py)

## Commands run
python3 tools/route-check/check_route.py HomeFeed → wrote routes/HomeFeed.md, APP_SHELL.md, ROUTES.md (68 done)
python3 tools/docs/ste_lint.py (route-spec, CHANGELOG-sync, IconSvg README, HomeFeed.md) → 0 errors
python3 tools/docs/ste_lint.py tst-drift-2026-11-07.md → 2 errors, in older sentences; my edit only appends to one table row
node tools/docs/check_mermaid.cjs route-spec.md → ok

## Deviations from the brief
- shared-code.md has no list of icons or of the shared components, so I did not edit it. The folder README that lists icons is app/src/components/ui/IconSvg/README.md: I added a "Community icons" section there. The README of CommunityPopulation (dev) already documents the new CommunityNumbers component.
- The generated routes/HomeFeed.md (not edited by hand) still says React "does not use" DataActionGetCommunityStatistics and shows the call as "missing". The checker only sees `fetchHomeFeedCommunityStatistics` in api/country; the page calls `fetchCommunityStatistics('HomeFeed')` from api/member (useHomeFeedReady.ts:45, api/member/repository.ts:31). This is a checker limit, not a code gap.

## Questions for the user
none
