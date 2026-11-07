## Result
status: pass
summary: No code change was needed: the React markup and calls already matched the fresh capture. The remaining rows came from two exemptions whose id path still said `-b2-b4-`. The master renumbered both to `-b2-b5-` after the user chose Q1 a and Q2 a. route.py parity now gives 0 in all three states (default, loading, offline), and no row remains.

## Files changed
migration/sync/handoffs/HouseholdCarousel/dev.md
migration/screens/HouseholdCarousel/parity/default.json, loading.json, offline.json and their .png files (re-stamped by route.py parity)

## Commands run
lsof cwd of port 5173 → /Users/khaitruong/Projects/connect-new/app (this checkout)
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/HouseholdCarousel src/components/directory/EntitiesCarouselElement src/components/ui/HorizontalTagList → 6 files, 37 tests passed
cd app && npx eslint src/pages/HouseholdCarousel src/components/directory/EntitiesCarouselElement src/components/ui/HorizontalTagList → exit 0
npm --prefix app run arch → exit 0 (139 known violations ignored, as before)
python3 tools/pipeline/route.py parity HouseholdCarousel --app http://localhost:5173 (after the master renumbered the exemptions) → parity clean
- default: 0 differences; pixels 0.03%, worst tile 2.2%; call 0; exempted CAPTURE-LINK-HREF-CURSOR-HOMEFEED×46, CAPTURE-MASKED-IMAGE-HOUSEHOLDCAROUSEL×40, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED×1, ignoreSubtrees×1, CAPTURE-POPUP-SCROLL-CLASS-FLUSH-ORDER-DIRECTORY-ACTIONS×1
- loading: 0 differences; pixels 0.00%; call 0; exempted CAPTURE-VIA-USERINFO-HOUSEHOLDCAROUSEL-POPUP×1, ignoreSubtrees×1
- offline: 0 differences; pixels 0.07%, worst tile 2.2%; call 0; exempted CAPTURE-VIA-USERINFO-HOUSEHOLDCAROUSEL-POPUP×2, CAPTURE-LINK-HREF-CURSOR-HOMEFEED×46, CAPTURE-SKELETON-SHIMMER-PHASE×1, ignoreSubtrees×5, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED×1

## Deviations from the brief
No code change. The master renumbered two exemption paths (CAPTURE-MASKED-IMAGE-HOUSEHOLDCAROUSEL pathRegex and CAPTURE-VIA-USERINFO-HOUSEHOLDCAROUSEL idRegex, `-b2-b4-` → `-b2-b5-`). The cause: TST added a widget to EntitiesCarousel_Element, so the Household block alias moved from `$b4` to `$b5`. The clone gives the carousel elements no instance id (EntitiesCarousel README :44), so the move renders no different id in the clone. The grants (EntitiesCarouselElement, HorizontalTagList) were not used, and the props are unchanged.

## Questions for the user
none
