# Advisor Opus, 2026-10-28 (pending decisions PD1–PD12)

| Id | Option | Why | Risk of the other option |
|---|---|---|---|
| PD1 | a | No capture or KB entry covers GetPendingPolicies; the simplest reading of an action whose only input is `PolicyApplications.List` is that it filters by that list. | (b) hides a wrong id on the wire (the App_Policies F1 class of bug). |
| PD2 | a | The check is done: `moduleinfo.json` lists Choice as None="None", No="No", Yes="Yes", which matches the capture (SortByNewest "Yes"). About 26 files change, many of them tests with 'Choice.*' literals. | (b) keeps every Choice value on the wire different from TST; a BFF would map the values for about 10 callers. |
| PD3 | a | MyTimeline_Filters compares each clicked row with the AllLocalities default record and ClearFilters selects it: the block only works with that first item. | (b) leaves Clear and the "all" logic nothing to select. |
| PD4 | a | A half-open range [FromDate, ToDate) is the only reading under which the "load past events" paging shows no boundary-day event twice (`ScreenBlock_MyEvents.mvc.js:1955-1958` sets PastEventFilters.ToDate = the old FromDate). | If the real server is inclusive, events on the picked ToDate are missing in the mock only. |
| PD5 | a | The TST block drops unsaved choices when the popup closes without Filter; 1:1. | (b) deviates from TST; parity differs on open, choose, close, open. |
| PD6 | a | Rule 9 stays green with no new baseline row; F37 owns the move of all cache blocks to api hooks. | (b) puts UI blocks in `platform/` as a pass-through F37 deletes; (c) pulls F37 and several parity re-runs into this wave. |
| PD7 | a, as an exact pin `adaptivecards@2.5.0` | After the BOM and CRLF are normalised, the TST bundle is byte-identical to the npm `adaptivecards` 2.4.0 and 2.5.0 `dist/adaptivecards.js` (md5 ae3ac2e4…, checked by the orchestrator). The stable-version rule keeps the TST version of a library the original ships. 2.5.0: 2020-10-31, no dependencies, own types, no npm advisory. | 2.9.x is not the same line (`Versions.latest = v1_4`, Action.Execute); 2.9.x and 3.0.x render a different DOM and CSS. (c) a global script outside npm and outside the checks. |
| PD8 | a | The fetch is done under the standing approval; 1:1 needs the real action; today `setTextPlaceholdersValue` returns the text unchanged. | (b) shows unfilled placeholders where TST shows values. |
| PD9 | a | The user decided on 2026-10-14: C2ExtendedShare is "default-only: TST value on" (`migration/flags.json`), so the flag-off branch is out of scope. | (b) builds a branch no TST user reaches, against an earlier decision. |
| PD10 | a | 1:1 with TST, including original defects; only the entry in `known-original-bugs.md` is open. | (b) gives parity text and flow differences. |
| PD11 | a | The 0 keeps the defect: the popup's TargetTimeLabel comes from a duration, not from OffsetSeconds (`ContactPopup.mvc.js:945`); 0 is the cache-hit value. | (b) reproduces a timing number that cannot match anyway. |
| PD12 | a | 1:1 with TST, including defects; only the bug-list entry is open. | (b) sends the helper card's link elsewhere than on TST. |

Notes: PD5, PD10, PD11 and PD12 follow the 1:1 rule (only the three bug-list entries are open). PD9 is settled by the
flag decision of 2026-10-14. PD7 is settled by the stable-version rule's exception for libraries the original ships;
the B9 note's recommendation of 3.0.x is corrected here. PD3, PD4 and PD5 need one TST check on a filtered LDM
timeline (open, choose, close, open; check the end date). PD1 filters on the same GUID texts React sends.
