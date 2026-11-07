# Decisions of the TST sync wave (2026-11-07)

Questions: `triage-2026-11-07.md`, section "Questions for the user". The user's words are quoted as written.

| Id | Item | Context | Options | Choice | Reason | Advisors (confidence) |
|---|---|---|---|---|---|---|
| Q1 | ConnectShare | offline capture blank | a restore / b re-capture / c exemption | b (done by Fable, settle 8 s: clean) | artefact of the settle time | judge a (high); Fable b |
| Q2 | MessageDetail | capture redirected to Notifications | a restore / b new id / c behaviour | b (done by Fable: id 5981096) | stale message id | judge a then b (high) |
| Q3 | 5 routes captured before the data loaded | skeletons, placeholders | a re-capture longer settle / b exemptions / c restore | a (done by Fable) | skeletons stay: steady state of TST | judge a (medium) |
| Q4 | LegacyShareObject, OrbitLanding, PINUnlock | content lost, no TST file changed | a keep / b restore / c other account | **investigate first** — user: "tìm hiểu xem tại sao mất, mất do ko xài nữa hay do feature flag tắt hay do phải chờ 1 lúc lâu mới có thê thấy PINUNlock?" ("find out why it is lost: no longer used, a feature flag off, or a wait before PINUnlock shows it?") | the cause decides the option | judge b (high) |
| Q5 | Bookmarks | empty list, code changed | a keep / b restore / c other account | c — user: "Chụp lại với các accounts (ko dừng ở 3, dò tới khi nào tìm được)" ("re-capture with the accounts; do not stop at 3, search until one is found") | the fix needs a card list | judge c (medium) |
| Q6 | OneSchoolGlobalDetails | rows removed | a code / b data / c other entity | a — user: "sửa a)" | compiled block: only the link part changed (Fable check) | judge a (low), Fable a (high) |
| Q7 | AssembleDetail | another event in the capture | a keep / b restore / c old event | c — user: "Chụp lại như số 2" ("re-capture like item 2": search the accounts for the event with the virtual meeting) | | judge a (medium) |
| Q8 | Menu, LDM_MyEvents_V2, Locality_Details | code or data unsettled | a developer reads the compiled file / b mocks only / c out | a — user: "a) có thể tự động đọc ko cần tôi ko?" ("a; can it read it itself, without me?") — yes: the developer reads `migration/sources/`; only a decision comes to the user | | judge a (medium) |
| Q9 | 5 DRIFT rules | unused | a remove when fixed / b keep / c now | a — user: "ok" | | judge a (high) |
| Q10 | 80 unused rules | unused | a now / b after the wave / c keep | b — user: "ok" | restores may use some again | judge b (high) |
| S1 | start of the wave | | | yes — user: "ok" (item 8) | | |

## Q4 investigation (Fable, 2026-11-07): why the three routes lost content

Re-capture with `settleMs` 8000: no change (LegacyShareObject default structure 49, PINUnlock structure 1, OrbitLanding
structure 5 in every popup state). The per-user flag probe of 2026-11-07 against the stored values: only
`getHasNewNotifications` changed (false → true); no Orbit, share, bookmark or PIN flag changed. Causes, with evidence:

| Route | Cause | Evidence |
|---|---|---|
| PINUnlock | The Terms & Conditions link renders only when the local policies cache of the account has a non-empty `policy_Url` for Terms and Conditions. The account of the capture (global#1) has none. Data of the account, not a flag, not a wait. | `migration/sources/pretty/UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js:584` (`$if(localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_TermsAndConditionsAttr.policy_UrlAttr !== "")`), filled from `cacheControl_ResponseInLocal` |
| OrbitLanding | The default filter "Upcoming events" keeps only milestones whose end date is on or after today minus 8 days (`ListFilter_Last8DaysAndFuture`). The event of global#1 (captured on 2026-11-06 through its card) is older than that on 2026-11-07, so it moved to "Past events" and the landing shows `NoInformation_Orbit`. A date window, not a flag. | `migration/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc.js:1798-1800` (`milestoneEndDateTime.gte(addDays(currDate, -8))`), `:1809-1813` (past = `lt`) |
| LegacyShareObject | `DataActionGetAvailableUsers` answers an empty list for the account of the capture (49 users for the account of 2026-10-29, which was another test account: `.auth/accounts.json` replaced `credentials.json` on 2026-11-06). Data of the account. | `migration/screens/LegacyShareObject/analysis/calls.json` (the call, status 200), `analysis/dom/default.raw.html` (no list rows), flag `getHasExtendedShare` true in both probes |

Options for the user (one answer for the three, or per route): a) keep the fresh captures (React mocks become empty
states); b) restore the analysis of these routes from commit `2fe9efaf` (the old captures stay valid: the TST code of the
routes did not change); c) re-capture with data: OrbitLanding through the "Past events" filter step (the capture plan
has the popup-filters step) or with an account that has an upcoming event (the sweep of the accounts is running);
PINUnlock with an account that has a Terms & Conditions policy; LegacyShareObject with the account of October (unknown).
Recommendation: **b** for PINUnlock and LegacyShareObject (high), **c then b** for OrbitLanding (medium).
