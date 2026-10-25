## Result
status: pass
summary: All gates pass. Parity 64/64 clean on both references, ci exit 0, move review finds no logic change. Note: HomeFeed first load is 245.67 gzip kB, +0.37 over 245.30 (W21 asks +0.3 per step); Login 184.93 (-0.04). Well inside the 5 percent baseline limit.

## Commands run
- server check: /UBTConnect/HomeFeed on 5174 -> 200; cwd = /Users/khaitruong/Projects/connect-new/app
- npm --prefix app run ci -> exit 0
- python3 migration/tools/refactor/arch_baseline.py check -> exit 0 (72 warnings, 72 rows, 0 new, 0 gone)
- refactor_parity.py --level visual --all --ref both --app http://localhost:5174 -> PASS; outsystems 64/64 clean, self 64/64 clean (report: migration/refactor/handoffs/F59-b/parity.md)
- node app/build/bundle-report.mjs (after the ci build) -> HomeFeed 756.13 kB / 245.67 gzip; Login 601.94 / 184.93
- node migration/tools/refactor/f59-b-split.ts --dry-run -> exit 0 (not-copied lines are only imports, signatures, step-switch `&&` lines)

## Review
1. openapi, mocks fixtures, public css: no change. Pass.
2. No test file deleted. Pass.
3. Scope: only the 2 containers, baselines, script, handoff files. Pass.
4. @origin: present once in every new file (same tag as the origin). Pass.
5. Move: hook order in useEntityDetailsActions is the same as HEAD (useOsNavigate first, then useState group, refs, useLayoutEffect, 2 useEffect, 2 useClientVar). useShareSheet order is the same as HEAD (useId, useState, refs, 2 useEffect, 2 queries). sharingRecentMemberId: the value is locals.sharingRecentMemberId, passed from the hook (line 171) to the view, to ShareSheetFirstStep (lines 93, 96); same value at both uses. Pass.
6. n/a (move).
7. No secret in the diff. Pass.

Baselines (W44): dependency-cruiser file: 1 row removed (EntityDetailsActionsContainer -> os-exceptions), 3 added (useEntityDetailsActions -> legacy/os/exceptions, -> legacy/os/os-exceptions; entityDetailsActionsState -> legacy/os/os-exceptions). Net +2 (142 -> 144), all legacy/os imports, nothing else. The view keeps its own exceptions row. Knip: 1 row removed (EntityDetailsActionsContainerProps), none added.
New sizes: all files 344 lines or less.

## Questions for the user
none
