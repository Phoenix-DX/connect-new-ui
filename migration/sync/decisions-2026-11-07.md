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
