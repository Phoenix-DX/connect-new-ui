## Result
status: pass (work under the master's literal rules is complete; one open question on rule 1 below)
summary: Built the CSS coverage tooling (CDP rule usage over every parity state, both references) and pruned the 6 stylesheets that the master's rules allow. Legacy CSS goes 1,605,845 -> 1,601,725 bytes (-4,120 B; gzip per file 364,119 -> 362,802 B, -1,317 B). The master's rule 1 (a stylesheet that any 0-state route loads stays unchanged) protects 1,575 kB of the 1,606 kB, so the saving is 0.26%. Parity visual --all (both references, 64 routes) passes after the change.

## Files changed
app/public/UBTConnect/css/Connect2_LegacyShared.Widgets.AdaptiveCardViewer.css (888 -> 3 B, BOM only)
app/public/UBTConnect/css/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.css (564 -> 3 B)
app/public/UBTConnect/css/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AdminNotes.css (321 -> 3 B)
app/public/UBTConnect/css/UBTConnect.App_Menu_ContactUs.ContactUs_Rate.css (7,779 -> 5,617 B)
app/public/UBTConnect/css/UBTConnect.App_Notifications.Notifications.css (200 -> 60 B)
app/public/UBTConnect/css/UBTConnect.App_Services.Services.css (57 -> 3 B)
migration/tools/refactor/css-coverage-preload.cjs (new: CDP rule-usage tracking, loaded with node -r)
migration/tools/refactor/css-coverage-node.sh (new: node wrapper for refactor_parity.py --node)
migration/tools/refactor/css-prune.py (new: aggregate, plan, apply; guards; deleted-selector lists; --relax estimate only)
migration/refactor/handoffs/P8-2/dev.md
migration/refactor/handoffs/P8-2/coverage/merged.json (merged used offsets of the 298 raw runs, plus routes seen)
migration/refactor/handoffs/P8-2/coverage-summary.json (per stylesheet: status, bytes, gzip, rules kept per guard)
migration/refactor/handoffs/P8-2/route-css.json (ROUTE_CSS per screen, zero-state screens)
migration/refactor/handoffs/P8-2/deleted-selectors/*.txt (6 files, 25 selectors)

## Commands run
- Coverage: `CSS_COVERAGE_DIR=... python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --out migration/refactor-parity/p8-2-cov --node migration/tools/refactor/css-coverage-node.sh` -> baseline PASS, 64 routes, outsystems 64 clean, self 64 clean, 4.7 min, 298 raw files (both pages of each run tracked; used on either side counts as used).
- Per stylesheet: `css-prune.py apply <file>` then `refactor_parity.py --level visual --routes <the only route that loads it> --ref both` -> PASS each time (MessageDetail, HostSurvey x2, ContactUsDetails, Notifications, Services). No pixel difference, nothing restored. The route-only run is equivalent to --all here because no other route loads these files.
- After all six: `refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --out migration/refactor-parity/p8-2-all` -> PASS, outsystems 64/64 clean, self 64/64 clean, 4.3 min.
- `npm --prefix app run typecheck` -> exit 0.
- `cd app && npx vitest run src/styles src/legacy/os` -> 11 files, 57 tests passed.
- ESLint: not run, no file in app/src changed (only app/public CSS, which Prettier and ESLint ignore).

Sizes (all 52 files): 1,605,845 -> 1,601,725 B; gzip (per file, level 9, summed) 364,119 -> 362,802 B. Per-file table is in coverage-summary.json. Bundle limits: no JS touched.

Method and guards:
- Rule = style rule at any depth of @media. Deleted only when no captured state used it AND no guard keeps it. Kept whole: @font-face, @keyframes, @import, every other at-rule, anything in @supports/@container, rules in an @media that the captured viewport (390x844, the only captured one) does not evaluate or cannot be evaluated (print, prefers-*, orientation...), :root, custom-property rules, vendor pseudo (::-webkit-*, ::placeholder, ::selection...), state/interaction selectors (:hover, :focus*, :active, :checked, :disabled, [aria-*], [data-*], .active/.open/.is-*/.selected/.error/... plus device classes). BOM and CRLF of the files are kept; offsets from Chromium are exact rule starts.
- Rules kept per guard for the pruned files: ContactUs_Rate: custom-property 11, state-selector 1; Notifications: used 1. The other four had no used rule and no guarded rule.
- Third-party widget CSS (Leaflet*, FullCalendarReactive, SortableJS) is skipped in addition to the master's list: its classes (leaflet-dragging, zoom-anim...) are toggled by script on interactions that the captures do not run. Leaflet.LeafletMap.css (the only third-party file the rule 1 would have allowed) would have lost 10 kB.
- Skipped by rule 1 (loaded by at least one of the 33 screens with 0 parity states): 31 files, all the large ones (OutSystemsUI 758,828 B, UBTMobileTheme 156,256, ConnectMobileCommonTheme 138,186, UBTConnectBase 118,537, OrbitTheme 90,057, UBTConnectLibrary 68,137, UBTConnect 47,400, OutSystemsReactWidgets 43,962, and more). Files with used rules in captures but nothing deletable (EntitiesCarousel, BrowseDirectory, CountryDetails, StatisticsList, Directory_LegendBottomSheet, Updates_SingleList, Embedded_MyEntertaining) are unchanged.
- Raw coverage (2 MB, 298 files) was merged into coverage/merged.json and deleted. Re-run with the commands in css-prune.py's docstring (P9-3).

## Deviations from the brief
- Added the third-party widget CSS exclusion (more conservative than the brief). 
- Did not run `--all` after each of the six stylesheets: ran only the one route that loads each (equivalent, the file loads nowhere else), then one `--all` run after the last. 
- The brief's metric "Legacy CSS (kB): 1,600 -> smaller": 1,605.8 -> 1,601.7 kB.

## Questions for the user
1. Rule 1 leaves 98% of the CSS untouched, because the 33 screens with 0 parity states (F27) load the shared files. Do you want to relax it? Dry-run estimate with `css-prune.py plan --relax` (not applied, no parity run yet): delete a rule that the captures did not use only when no guard keeps it and none of its class names appears anywhere in app/src outside tests and stories. Result: 1,605,845 -> 1,333,680 B (-272 kB, -17%): OutSystemsUI -138 kB, UBTConnectBase -49 kB, OrbitTheme -13 kB, OutSystemsReactWidgets -25 kB, UBTMobileTheme -13 kB, UBTConnect -12 kB, AssembleTheme -6 kB. Risk: the zero-state screens have no parity check, so their look would depend only on the source-class guard. Alternative that costs nothing: first give the 33 screens parity states (F27), then run this step again.
2. Your rule 2 keeps every `[data-*]` selector; OutSystems CSS uses `[data-block*=...]` for static identity, not state. I kept them all (as written). Say if you want only `[data-block]` forms released.

## Loop 1

Fix: the guard for script-toggled third-party widget classes now covers all 25 deleted selectors.
- Restored exactly (from HEAD): `UBTConnect.App_Services.Services.css` (`.sortable-drop-denied-target`, SortableJS), `Connect2_LegacyShared.Widgets.AdaptiveCardViewer.css` (`.ac-*` and `[type=...]`, rendered by the Adaptive Cards library), `UBTConnect.App_Menu_ContactUs.ContactUs_Rate.css` (13 `.noUi-*` rules, generated by noUiSlider).
- Kept deleted (checked in app/src, plain app classes, none built at run time): HostSurvey_AccommodationItem (3 `.orbit-host-survey-label-with-icon` rules), HostSurvey_AdminNotes (`.orbit-host-survey-admin-msg`), Notifications (`.updates-list__list-section-header`, empty body: comments only).
- Updated: `coverage-summary.json` (3 files set to `restored-third-party-guard`, bytesAfter = bytes), `deleted-selectors/` (3 .txt removed; 3 left, 5 selectors).
- Files changed in loop: the 3 CSS files above (back to HEAD), coverage-summary.json, deleted-selectors/ (3 files removed), dev.md.
- Sizes now: 3 stylesheets pruned. Legacy CSS 1,605,845 -> 1,604,826 B (-1,019 B); gzip per file -518 B.
- Parity: `refactor_parity.py --level visual --routes HostSurvey Notifications --ref both --app http://localhost:5174` -> PASS, outsystems 2/2 clean, self 2/2 clean. The three restored files are identical to HEAD, so their routes need no new run.
