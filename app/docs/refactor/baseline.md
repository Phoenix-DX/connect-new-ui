# Refactor baseline (P0-1)

Date: 2026-10-22. Base commit: `9131ac6` on `refactor/architecture`, plus the uncommitted P0-1 change (package updates and this file).
The reference run uses Node 24.21.0, as the `engines` field asks. The developer ran the first measurement on Node 22.23.3; the numbers did not change on Node 24.

## Package updates (ADR-2 security exception)

The packages were updated before the measurement (decision Q3 of P0-1). All were pinned exactly (`--save-exact`).
`npm audit` before: 4 vulnerabilities (2 moderate, 1 high, 1 critical). `npm audit` after: 0.

| Package               | Old    | New    | Reason                                                                                                                                          |
| --------------------- | ------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| vite                  | 7.3.6  | 7.3.7  | GHSA-9jrq-w75r-8gcw, GHSA-rq7h-c2jc-7f22, and the launch-editor advisories GHSA-587h-7wmj-h5pm, GHSA-698v-4r3x-3vcv, GHSA-r825-w8mm-5pxw (high) |
| vitest                | 4.1.11 | 4.1.12 | GHSA-xp26-3454-mjgp (via @vitest/mocker, moderate)                                                                                              |
| @vitest/coverage-v8   | -      | 4.1.12 | New. Needed to measure statement coverage; same version as vitest                                                                               |
| storybook             | 10.5.8 | 10.6.3 | GHSA-f2ph-cmg5-wxc8 (critical)                                                                                                                  |
| @storybook/react-vite | 10.5.8 | 10.6.3 | Same line as storybook (its @storybook/builder-vite, react, react-dom-shim and csf-plugin moved to 10.6.3 with it)                              |

Advisory GHSA-qxg6-89mg-rqv8 was also in the audit before; it is gone after the update.

Install note: `npm install vitest@4.1.12` fails on npm 10.9.9 with `Cannot read properties of null (reading 'edgesOut')` (an arborist bug while it loads the optional peers of vitest). The install of vitest and @vitest/coverage-v8 used `--legacy-peer-deps`. `npm ci` works with the new lock file.

## Gate results

| Check                                  | Result                                                                                                                                                                                                                            |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm --prefix app run ci`              | Passed (exit 0, Node 24.21.0): gen:api, typecheck, lint, format:check, 324 test files / 1,457 tests, build                                                                                                                        |
| `npm --prefix app run build-storybook` | Passed once as a smoke test (`storybook-static` is ignored by git)                                                                                                                                                                |
| Parity sweep (OutSystems)              | ROUTES 64 WITH DIFFS 0 (`migration/tools/parity_sweep.py`, Node 24.21.0)                                                                                                                                                          |
| Self-parity                            | Recorded in P0-2: strict 64/0 against both references, visual self 64/0. `migration/refactor-reference/` is git-ignored (162 MB); a new clone runs `python3 migration/tools/refactor_parity.py --record-self --all` (about 2 min) |
| `npm audit`                            | 0 vulnerabilities                                                                                                                                                                                                                 |

## Statement coverage

Command (run in `app/`):

```
npx vitest run --coverage.enabled --coverage.include='src/**/*.{ts,tsx}' --coverage.exclude='**/*.stories.tsx' --coverage.reporter=text-summary --coverage.reporter=json-summary
```

| Metric     | Value                         |
| ---------- | ----------------------------- |
| Statements | 49.22 percent (10348 / 21021) |
| Branches   | 46.66 percent (7004 / 15009)  |
| Functions  | 46.06 percent (2836 / 6156)   |
| Lines      | 50.10 percent (9229 / 18420)  |

The numbers are the same on Node 22.23.3 and Node 24.21.0. The json report is in `app/coverage/coverage-summary.json` (ignored by git).

## Metrics of plan v2 section 7

| Metric                                            | Baseline                                                                                                                                                                                                                                                               |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Import cycles                                     | 1 cycle (`src/shell/cachedUserInfo.ts` and `src/shell/mockUser.ts`), `npm run arch` in P0-3; target 0 (P3-4)                                                                                                                                                           |
| Boundary violations                               | Not measured (P1-1)                                                                                                                                                                                                                                                    |
| Duplicate code (`jscpd`)                          | 63 clones, 1.15 percent of lines (`jscpd` in P0-3, `reports/P0-3-jscpd.txt`)                                                                                                                                                                                           |
| Files that call `callAction` outside `api/`       | 70 by a TypeScript AST scan of `src/**/*.ts(x)` without `src/api/`, tests and stories (`measure.mjs`, P0-4). The plan says 71; the P0-1 word search gave 87, because it also hits types, comments, mocks and `lib/api.ts`. The gap of one to the plan is not explained |
| Users of `memoryCache`                            | 19 files by the same search (the plan says 27)                                                                                                                                                                                                                         |
| Users of `getClientVar` outside `platform/`       | 37 files by the same search (the plan says 50)                                                                                                                                                                                                                         |
| Readers of flags outside pages, hooks, containers | Not measured                                                                                                                                                                                                                                                           |
| Lines of the largest page or component file       | 1,077 (`src/screens/EventBooklet/components/ScreenBlock_EventBooklet.tsx`; larger files: `mocks/fictional/orbit.ts` 1,446 and `shared/Connect2_LegacyShared/lib/mockDefaults.ts` 1,170, which are data and not counted)                                                |
| Parity against OutSystems / self-parity           | 64 routes, 0 with differences against OutSystems; self-parity recorded in P0-2                                                                                                                                                                                         |
| Statement coverage                                | 49.22 percent                                                                                                                                                                                                                                                          |
| First-load size: HomeFeed, Login (kB gzip)        | HomeFeed 236.40 (730.63 raw), Login 184.61 (602.89 raw). Entry, route chunk and shared chunks, measured by `app/build/bundle-report.mjs` on `dist/` (P0-4)                                                                                                             |
| Total JS and CSS (kB gzip)                        | JS 974.16 (192 files, 3,015.24 kB raw) + CSS 0.39 (1 file) = 974.55 kB gzip                                                                                                                                                                                            |
| Legacy CSS (kB)                                   | 1,605.8 kB raw in `public/UBTConnect/css/` (the plan says 1,600)                                                                                                                                                                                                       |

The counts for `callAction`, `memoryCache` and `getClientVar` differ from the plan values. The plan values are the reference for the targets. The counts here come from a plain word search and include type-only or comment uses. Re-measure them with the same method at the end of each phase.

## Chunks in `app/dist/assets/` (after `npm run ci`)

Sorted by size. kB = 1,000 bytes. The build warns that `index-CmkJrG_Q.js` is larger than 500 kB.

| Chunk                                               |     kB | kB gzip |
| --------------------------------------------------- | -----: | ------: |
| index-CmkJrG_Q.js                                   | 575.79 |  172.31 |
| BarcodePlugin.OSBarcodePlugin-CflgKep4.js           | 405.40 |  115.33 |
| fixtures-BOZbN237.js                                | 279.36 |   85.04 |
| SubLayout_Browse_Section-BGrYS677.js                | 193.22 |   55.28 |
| index-DN0VfBVh.js                                   | 124.76 |   33.41 |
| handlers-KEfJfeVu.js                                | 123.02 |   32.20 |
| index-mUMZiqaP.js                                   |  90.22 |   35.93 |
| browser-BzUUFac2.js                                 |  89.54 |   24.68 |
| index-BuczCTjC.js                                   |  48.54 |   17.03 |
| Carousel-BgASIa0u.js                                |  39.01 |   16.25 |
| index-BAPwCKQJ.js                                   |  35.81 |   12.98 |
| mocks-DWm4sZ0d.js                                   |  35.11 |   13.42 |
| SanitizedHtml-DPIMkr6C.js                           |  33.06 |   12.64 |
| index-CcSvJek3.js                                   |  30.25 |    8.88 |
| index-BUoRroFk.js                                   |  28.04 |    8.31 |
| index-DjOpW9eb.js                                   |  23.07 |    7.21 |
| index-DEElTrp4.js                                   |  22.93 |    6.58 |
| index-BR8PyKXn.js                                   |  21.67 |    7.77 |
| index-CvSK48Te.js                                   |  21.50 |    6.61 |
| index-BCezdEv2.js                                   |  21.03 |    6.67 |
| index-Cm37Nplh.js                                   |  20.40 |    6.09 |
| index-DlTzn46N.js                                   |  20.06 |    6.56 |
| index-IwIQ_OqC.js                                   |  19.43 |    6.00 |
| index-BUriUoXG.js                                   |  19.07 |    6.16 |
| index-CF1USKzF.js                                   |  18.48 |    5.96 |
| HouseholdDetails_Block-C5eq4HB5.js                  |  17.73 |    5.63 |
| index-Ja3mAs3Y.js                                   |  17.32 |    6.01 |
| index-DMFIBwg_.js                                   |  16.97 |    6.19 |
| index-C2Ya7IMH.js                                   |  16.91 |    5.53 |
| index-V3Nj_a1M.js                                   |  15.81 |    5.09 |
| index-CVhDcANi.js                                   |  15.32 |    4.18 |
| index-NkB-ej5i.js                                   |  15.25 |    5.36 |
| index-Csy__wN4.js                                   |  14.83 |    5.26 |
| index-iolzw5aT.js                                   |  14.77 |    5.12 |
| AddressPopup_Wrapper-el7oy8Nk.js                    |  14.55 |    5.15 |
| FilterSheet-C6TkhJDS.js                             |  14.47 |    4.72 |
| index-CVcdJmkQ.js                                   |  14.36 |    5.12 |
| Feed_Embeded-ClfmvkUj.js                            |  13.28 |    4.82 |
| NC_Result_Item_Badge-DfjPmDPq.js                    |  12.99 |    3.79 |
| index-Deaput12.js                                   |  12.99 |    4.63 |
| index-ByhiOa8q.js                                   |  12.09 |    4.01 |
| NotesSheet-CtRifg_M.js                              |  11.78 |    4.09 |
| index-BTQbQHin.js                                   |  11.20 |    3.73 |
| BottomSheet-08rkff_P.js                             |  11.10 |    4.28 |
| index-Coj0iW8Y.js                                   |  10.91 |    3.89 |
| index-DCqu1an7.js                                   |  10.30 |    3.87 |
| ShareSheet-BF0WG2_h.js                              |  10.00 |    3.66 |
| index-Cjoj1DEn.js                                   |   9.45 |    3.64 |
| index-O08HmoUd.js                                   |   9.27 |    3.98 |
| OSListItem-CwVnsK0c.js                              |   9.18 |    2.72 |
| BaseLayout_UpdatedOSUI-xE1wsDdv.js                  |   9.16 |    3.57 |
| useQuery-D6IULKqR.js                                |   8.84 |    3.22 |
| index-CPx6YGLw.js                                   |   8.51 |    3.47 |
| index-CUoep19q.js                                   |   8.09 |    3.17 |
| LocalityListDetail-FHlgHqKk.js                      |   7.87 |    2.54 |
| index-XhK58ClV.js                                   |   7.79 |    3.32 |
| index-CQLnCLRK.js                                   |   7.47 |    2.92 |
| index-BHtCPr20.js                                   |   7.23 |    2.96 |
| index-BkBy5KFs.js                                   |   6.63 |    2.63 |
| barcodePlugin-DmPCSk2V.js                           |   6.62 |    2.46 |
| DEPRECATED_AccordionItem-DNhqtlpQ.js                |   6.60 |    2.16 |
| index-C8nns1sf.js                                   |   6.40 |    2.70 |
| OSValidation-Co32_-5t.js                            |   6.00 |    1.95 |
| index-BchWEDtE.js                                   |   5.80 |    2.67 |
| index-Ckg0dYim.js                                   |   5.75 |    2.34 |
| index-DtKRxUKz.js                                   |   5.59 |    2.52 |
| index-C3Q_tjrK.js                                   |   5.24 |    2.15 |
| Card_Milestone-ZjWolDXp.js                          |   4.83 |    1.47 |
| index-vBJFvIuR.js                                   |   4.75 |    2.13 |
| Block_PINRegister_ContentWrapper-BQL6a8e4.js        |   4.59 |    1.89 |
| index-aDCQDt6M.js                                   |   4.49 |    2.05 |
| ContextMenu-Bn6XffQP.js                             |   4.48 |    1.88 |
| Skeleton_Loading-Cfi7LOka.js                        |   4.40 |    1.03 |
| index-C8ApJR4t.js                                   |   4.25 |    1.82 |
| BottomBarMenu-Cge1w3S0.js                           |   4.24 |    1.80 |
| index-B2qQDZ6V.js                                   |   4.19 |    1.91 |
| SupperMeeting_DetailsBlock-ByfY7dtu.js              |   4.16 |    1.57 |
| index-ByJZR-fH.js                                   |   4.15 |    1.64 |
| EntitiesCarousel-DXQo18w9.js                        |   4.10 |    1.66 |
| index-D-Uro1-g.js                                   |   4.07 |    1.94 |
| ItemOptionsMenu-CjqHNvuK.js                         |   3.84 |    1.55 |
| actions-TtLZmJqd.js                                 |   3.74 |    1.72 |
| Layout_HomePage-B4Vei2TP.js                         |   3.70 |    1.53 |
| ContactPopup-D9GDYnVs.js                            |   3.64 |    1.49 |
| index-DZDlOEeZ.js                                   |   3.63 |    1.62 |
| Statistics_TypedItem-BKdUYvOB.js                    |   3.57 |    1.47 |
| MilestoneHeader-DxbWuJbC.js                         |   3.52 |    1.22 |
| ContactByEmailForm-BGNb-5_n.js                      |   3.43 |    1.44 |
| Update_ListItem-SVVPEmqY.js                         |   3.41 |    1.42 |
| UBT_LazyImage-CvNdqhrT.js                           |   3.38 |    1.34 |
| Input-Dhehf0ak.js                                   |   3.23 |    1.40 |
| actions-CR9NPd1_.js                                 |   3.20 |    1.44 |
| index-CB9oOiQo.js                                   |   3.18 |    1.51 |
| FilterSheet_OptionChoice_Item-DZleb7-L.js           |   3.12 |    1.43 |
| SupperMeeting_ImageCard_Content-g2B8uwOG.js         |   3.10 |    1.23 |
| Layout_MainPages_FixedTitle-BFfGe_ta.js             |   3.09 |    1.16 |
| index-5fjsr7Fs.js                                   |   3.09 |    1.44 |
| index-BSRjNdK8.js                                   |   3.07 |    1.44 |
| Layout_MainPages-78SjmDay.js                        |   3.01 |    1.22 |
| exceptionMessages-9KsyEAr3.js                       |   2.96 |    1.38 |
| OSList-BcFxJINy.js                                  |   2.94 |    1.25 |
| index-C3shPgd1.js                                   |   2.85 |    1.40 |
| index-CwSn9vS4.js                                   |   2.68 |    1.28 |
| DialogExitConfirmation-CT96oQld.js                  |   2.62 |    0.98 |
| index-BP2jZ6lj.js                                   |   2.62 |    1.24 |
| Statistics_ListItem-DcOUGUub.js                     |   2.42 |    1.05 |
| Layout_DetailPage-s_HIXOEb.js                       |   2.31 |    1.01 |
| Menu_List-DLgFiEkP.js                               |   2.31 |    1.08 |
| Result_Item_Image-CjqPXfA7.js                       |   2.30 |    1.02 |
| SearchResult_Item-B99AN7pw.js                       |   2.23 |    1.04 |
| StatisticsList-D4wvGsuU.js                          |   2.16 |    1.12 |
| index-f3pJRIVx.js                                   |   2.14 |    1.13 |
| CommonUI_InsideLayout-B4OUMnxr.js                   |   2.08 |    1.10 |
| NavigationConfirmationDialog-gLiLWxXK.js            |   2.06 |    0.86 |
| index-B4lvNGj-.js                                   |   1.87 |    0.96 |
| LazyImage-CuI-XRm9.js                               |   1.86 |    0.94 |
| index-Dl4CQfXG.js                                   |   1.60 |    0.86 |
| CircleButton_WithLabel-oE9EUykk.js                  |   1.59 |    0.67 |
| handleDownload-B51-SZy_.js                          |   1.51 |    0.69 |
| ContactByMessage_Wrapper-CBiAEiFe.js                |   1.50 |    0.69 |
| OSRadioGroup-DxoxT_ps.js                            |   1.50 |    0.81 |
| Card_Event-BZczJppn.js                              |   1.43 |    0.62 |
| NonMember_ListItem-DN6c_QUn.js                      |   1.38 |    0.66 |
| ShareableObject_Generic-DdbRHvCI.js                 |   1.35 |    0.69 |
| FeedBlock_CommunityPopulation-B6FT3EZI.js           |   1.29 |    0.73 |
| TextArea_WithCounter-C_7qM-zw.js                    |   1.29 |    0.70 |
| ListOfDaySelectors-CJViRKqW.js                      |   1.23 |    0.60 |
| index-Bwusk1zb.js                                   |   1.22 |    0.69 |
| EmptyList-snsZuJbw.js                               |   1.21 |    0.58 |
| index-B3G-gNUs.js                                   |   1.18 |    0.72 |
| Person_Contact_Options-CcimqBdV.js                  |   1.17 |    0.41 |
| Card_Template-BnubyuxU.js                           |   1.16 |    0.50 |
| OfflineDataSyncEvents-DtYHzlL3.js                   |   1.16 |    0.52 |
| Layout-Osn_O01C.js                                  |   1.15 |    0.59 |
| index-xTjy2f42.js                                   |   1.13 |    0.58 |
| Columns_Three-CBDaEEX9.js                           |   1.11 |    0.57 |
| staticEntities-Boe3mL75.js                          |   1.10 |    0.52 |
| inProcess-Jm5pbIp1.js                               |   1.09 |    0.65 |
| AvatarImage-DHuFlplf.js                             |   1.07 |    0.57 |
| Layout_Orbit-BEYUXnUD.js                            |   1.07 |    0.55 |
| HorizontalTagList-tdfVB6Up.js                       |   1.07 |    0.66 |
| ContactPopup_ByPhone-B_EWH4xm.js                    |   1.07 |    0.56 |
| TagToggle-D62Vc-KF.js                               |   1.07 |    0.60 |
| MessageList_NoResults-BSB8sHkK.js                   |   1.03 |    0.42 |
| Dialog_CustomChoice-Dls3jFyC.js                     |   1.02 |    0.52 |
| index-T18T1cCV.js                                   |   1.02 |    0.61 |
| Dialog_Navigation-QdWXFsv-.js                       |   1.01 |    0.49 |
| CacheControl_UserInfo_Wrapper-qHQGhMPZ.js           |   0.98 |    0.50 |
| SharePopup-DT4JC6zD.js                              |   0.96 |    0.57 |
| Layout_LoginFlow-sCI7MkAp.js                        |   0.92 |    0.49 |
| NetworkWarning-B4SdYfza.js                          |   0.92 |    0.45 |
| App_NotificationIcon-WABYrWZe.js                    |   0.89 |    0.54 |
| SubLayout_DirectoryDetailScreen_Section-CZhC5Nl3.js |   0.88 |    0.48 |
| ErrorScreen-IjPgblfl.js                             |   0.87 |    0.53 |
| index-CPME1LWB.js                                   |   0.84 |    0.53 |
| Gallery-B8pP8YWW.js                                 |   0.78 |    0.43 |
| position-DHR4IM1e.js                                |   0.76 |    0.37 |
| DEPRECATED_ButtonLoading-WJ8VzbOe.js                |   0.76 |    0.50 |
| index-B9SgBNV0.css                                  |   0.74 |    0.39 |
| auth-Dgbe60Qh.js                                    |   0.71 |    0.43 |
| InputCounter-BmrzAupy.js                            |   0.70 |    0.46 |
| ButtonLoading-6k12SeB8.js                           |   0.68 |    0.46 |
| PullToRefresh-DyLGDnQx.js                           |   0.67 |    0.31 |
| TagContent-2wo27d2P.js                              |   0.65 |    0.41 |
| HostSurvey_PillItem-CZoOJF9m.js                     |   0.65 |    0.41 |
| MenuIcon__UpdatedOSUI-BJxFrQVz.js                   |   0.61 |    0.39 |
| Version-B3JETeg2.js                                 |   0.59 |    0.38 |
| FilterSheet_Icon-DT-4bzvm.js                        |   0.56 |    0.40 |
| NoBookmarks-BXkxgizr.js                             |   0.53 |    0.36 |
| EventDetail_SubSection-CbrV0fiz.js                  |   0.53 |    0.31 |
| index-CAeWYH8P.js                                   |   0.52 |    0.37 |
| StaticInput-B8pzXET-.js                             |   0.52 |    0.38 |
| Separator-Bmg78_4x.js                               |   0.52 |    0.33 |
| NoInformation_Orbit-BAi7M7wV.js                     |   0.50 |    0.34 |
| FixedFooter-Dsq-OZAa.js                             |   0.49 |    0.33 |
| ConnectBlankSlate-Cos9Uhi-.js                       |   0.47 |    0.27 |
| InputWithIcon-DbXQUnG1.js                           |   0.47 |    0.29 |
| useLoadPhotoAsync-BDYCXyO8.js                       |   0.46 |    0.32 |
| MenuIcon_Back-CYjvMcOM.js                           |   0.43 |    0.29 |
| ComingSoon-DCkXrGza.js                              |   0.41 |    0.27 |
| NavigationHandler-DbKb0YLU.js                       |   0.39 |    0.26 |
| ContactHelpdesk_Footer-CseYnoKi.js                  |   0.35 |    0.25 |
| Animate-BYemGCxR.js                                 |   0.34 |    0.24 |
| api-DxfUTQC7.js                                     |   0.33 |    0.25 |
| AlignCenter-DQHof31D.js                             |   0.32 |    0.25 |
| Dialog_AccessRestrictedAction_Legacy-Cspy8b9b.js    |   0.31 |    0.26 |
| staticEntities-B2YzMAcB.js                          |   0.31 |    0.20 |
| exceptions-CZNSNKRh.js                              |   0.30 |    0.23 |
| TextEllipsis-BLMEVYA0.js                            |   0.30 |    0.23 |
| Spinner-BWz_q58H.js                                 |   0.29 |    0.21 |
| SectionSeparator-ChyIJWG9.js                        |   0.28 |    0.23 |
| api-BRU0Ivti.js                                     |   0.26 |    0.20 |
| ScrollAnchor-DEZkQoTA.js                            |   0.22 |    0.19 |

## Architecture tools (P0-3)

Date: 2026-10-22. Dev dependencies, pinned exactly (`--save-exact`). Versions follow the stable rule (ADR-2) and decisions Q2 and Q4 of P0-3: no `eslint-plugin-boundaries`, no `eslint-plugin-import-x`, no `tsx`. The codemod runs on plain Node 24 and loads `ts-morph` from `app/package.json`.

| Package            | Version | Release date |
| ------------------ | ------- | ------------ |
| dependency-cruiser | 17.4.3  | 2026-05-29   |
| jscpd              | 4.3.0   | 2026-08-13   |
| knip               | 5.88.1  | 2026-03-19   |
| ts-morph           | 27.0.2  | 2025-10-12   |

`npm audit` after the install: 1 high advisory, `braces` (GHSA-vfj7-8cjw-p6xm, stack exhaustion on deeply nested patterns). It comes through the dev-only CLIs and has no fix. To accept in ADR-15.

First reports: `app/docs/refactor/reports/P0-3-*.txt`. Graph: `npm --prefix app run graph` writes `app/docs/refactor/graph.json`; `npm --prefix app run arch` prints the rule violations.

## Code inventory (P0-4)

`migration/tools/refactor/measure.mjs` writes `app/docs/refactor/inventory.csv` (265 rows: 237 shared blocks and 28 `ScreenBlock_*` files), `app/docs/refactor/routes.csv` (64 routes) and `app/docs/refactor/calls-by-domain.md`. The tool reads `src/` with the TypeScript AST and needs no `dist/`.

`app/build/bundle-report.mjs` prints the first-load size of HomeFeed and Login. It reads `app/dist/`, so run `npm --prefix app run build` first. Run both scripts again in P9-3 or P9-4 and compare with the values in the table above.

After each run of `measure.mjs`, run `npx prettier --write app/docs/refactor/calls-by-domain.md` in `app`.
