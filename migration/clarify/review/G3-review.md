# Orchestrator review of wave G3 (Fable, 2026-10-27)

## 1. Major findings checked on TST

| Flow | Finding | Evidence | Result |
|---|---|---|---|
| Legacy_MyNotificationsFlow | F6 major: a private message of another user; TST toasts and shows the message, React toasts and leaves | `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js:991-993` (`feedbackMessage_AutoClose … "You don't have access to that message"`, then `OS.Flow.breakAsync()`; the `NavigateTo_Login` trigger is a separate branch at `:998-999`) | confirmed: no navigation on TST after the toast |
| Legacy_MyNotificationsFlow | F2 major: Orbit and Assemble action buttons not built | same file `:594` ("View Meeting"), `:623` ("View Event"), `:625` ("Go to Host Survey") | confirmed: the buttons exist on TST |
| Legacy_MyNotificationsFlow | F1, F3 major: share card and adaptive card not built | the judge's citations (Share_UI.ShareObjectDetail_ExtendedShare, AdaptiveCardViewer) | not re-read here |
| Calendar | F1 major: a failed config fetch shows no toast | `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts:11, 23` (catch keeps the skeleton); runtime `handleError` per the judge | confirmed on the React side |

## 2. Facts for the knowledge pages

- `migration/knowledge/mock-fixtures.md:66-67` describes the React "no access" behaviour of MessageDetail as the
  original's. TST differs (F6 above). To correct when the user decides Q4 of the flow.
- `migration/knowledge/orbit-assemble-ldm.md:17` says the Orbit/Assemble handlers "work once built"; they are not wired
  (F2).

## 3. Cost of G3 (reader Sonnet + judge Opus, Fable for Bookmarks and Legacy_MyNotificationsFlow)

| Flow | Reader tokens / calls | Judge tokens / calls | Rows |
|---|---|---|---|
| Calendar | 100k / 18 | 180k / 37 | 72 |
| Notes | 150k / 23 | 163k / 49 | 121 |
| ContactFlow | 184k / 27 | 190k / 42 | 142 |
| Legacy_Share | 181k / 36 | 182k / 33 | 95 |
| Bookmarks | 219k / 42 | 369k / 53 (Fable) | 123 |
| Legacy_MyNotificationsFlow | 242k / 46 | 254k / 50 (Fable) | 152 |
| **G3 total** | **1.08 M Sonnet** | **1.34 M Opus/Fable** | 705 |

Per row: 1.9k Opus/Fable + 1.5k Sonnet (G2: 1.47k + 1.21k). The G3 flows are wrappers of referenced blocks, so the
rows rest on TST code that both stages read.

Waste seen in the transcripts:
- TST code dumped into the scratch folder and read back: reader Bookmarks 138k chars, reader MyNotifications 107k,
  judge Bookmarks 151k (the "assembly" column of `agent_cost.py`). A `tst_source.py grep` with a line range costs less.
- The two Fable judges cost 1.5 times an Opus judge for the same row count; they also closed every unclear row.
