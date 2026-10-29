# Auto decisions, window 7 (2026-10-29)

User instruction (2026-10-29 ~11:30 +07): "Tôi đang bận việc khác nên bạn hãy auto accept các recommand từ Fable + opus
(ưu tiên Fable). Và chạy cho tới khi ko còn câu hỏi gì nữa." Rule: the Opus recommendation and a Fable judgement;
agree → use it; split → Fable. The user can reopen any row.

| # | Route / item | Question | Options | Opus | Fable | Chosen | Reason (short) |
|---|---|---|---|---|---|---|---|
| 1 | Bookmarks/Notes (channel row) | C1 PublishedAt time zone | a keep local-time rule / b ISO offset in preetyFormatDate / c change parseOsDate | a | a | a | One date rule for the app (`lib/osDateTime.ts:21`, 7 callers); the format belongs to the BFF contract work |
| 2 | Bookmarks | C2 Feed card source header (mock assumption) | a keep until a capture / b logo as avatar | a | a | a | SourceHeader is server data; no capture has a Feed card |
| 3 | Notes | C3 channel fields optional | a required with defaults at the contract regeneration / b now | a | a | a | `toNoteCardItemWire` already omits ItemId2 and HasDetailAccess; one edit at the regeneration |
| 4 | PassportScan | K1 back button in the camera view | a keep TST (no answer) / b answer empty image / c cancel button | a | a | a | The port follows TST line by line; (b) only if the demo gets stuck, logged as React-only |
| 5 | PassportScan | K2 phones and tablets | a TST file-input camera / b in-page view everywhere | a | a | a | TST picks NativeCamera (file input) on phones |
| 6 | PassportScan | K3 capture button label | a keep / b aria-label | a now, b production | a now, b production | a now; b on the production accessibility list | 1:1 markup rule |
| 7 | OneSchoolGlobalCarousel | F1 offline/loading scenario | a captured for all states / b keep difference / c seed in real | a | a | a | All three captures came from the same Bookmarks card; `plan_scenarios` is per state |
| 8 | OrbitAdminMilestoneDetail | F2 reading of MCP row 5 for the success case | confirm / correct | confirm | correct the reading, keep the value | Fable | Row 5 states the id for the failure branch only; fix the comment, carry the success id to the MCP fact list |
| 9 | OrbitAdminEventDetail | O1 shared OrbitErrorMessage/OrbitPopup | a switch and delete copies now / b later | a | a | a | Copies differ only in names and comments; 2 import sites |
| 10 | Orbit admin pages | O2 duplicated helpers | a move to `lib/orbit/actions.ts` now / b later | a | a, reuse `containsIgnoreCase` of `lib/ubtConnectUtils/actions.ts:155` | Fable | No third copy; `textToLongIntegerValidated` stays in the milestone page |
| 11 | components/ui (retired MyBookmarks) | G1 GridGallery has no user left | a delete / b keep + knip ignore | a | a | a | `migration/catalog/blocks.json`: DEPRECATED_GalleryV2 remainingUsers []; only user was MyBookmarks_Album |
| 12 | mocks Connect2_MyBookmarks_MUI | G2 four handlers without caller | a delete / b keep | a | a | a | Two writes left the regenerated contract; the two reads have no caller; the collection stays (Assemble, app start) |
| 13 | app (jscpd gate) | `npm run dup` fails: 0.65% > 0.57% (new clones of this wave) | a dedupe with shared code / b raise threshold / c ignore patterns | a | a: dedupe 8 pairs (Orbit admin detail view, QR popup, scan hook; Bookmarks/Notes card; EmptyListBorderless as EmptyState preset; tag-list core; Orbit layout effects; main fixed scroll effects); leave page shells and old debt | a (Fable's list) | Clones are real twins of this wave; the project keeps behaviour, not the OS block split; about 0.44% after |
| 14 | OneSchoolGlobalCarousel | F1 measured: offline with 'captured' gave 58 differences, with the default scenario 23; loading with 'captured' 0, default 1 | a captured for default+loading, default scenario for offline / b keep F1 | — | — | a (measured) | Evidence beats the expectation of row 7; the remaining offline/default differences come from the Directory_EntityDetailsActions gaps |
| 15 | 6 routes (gate) | Q-S scope guard lists 1221 files (whole wave in one tree) | a --no-scope-guard, out-of-scope areas listed with their decisions / b long --allow lists / c commit platform first and move startCommit | c if cheap, else a | a | a | (c) does not build alone (routes.generated.ts names the new pages); the guard's unit is one route agent; ~1000 files are re-capture outputs |
| 16 | PassportScan | Q-N NO-CONSOLE on the two TST console logs of the camera | a platform log facility / b keep console.log with a rule exception / c drop | b | a | a (Fable) | `platform/log/log.ts:3-5` states the rule; console output is not a parity input; keeps the TST texts |
| 17 | OneSchoolGlobalCarousel | Q-O parity left 12/23 differences from Directory_EntityDetailsActions | a fix the block now / b hold the route at parity, drift wave / c temporary exemption | b | b | b | The user deferred OneSchoolGlobalDetails Q7 (the block) to the drift wave; an exemption would mask a missing data call |
