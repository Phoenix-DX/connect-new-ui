# context-052 · The user's decisions of 2026-10-25 done: F52, F55, F57, F58, F59 (afternoon)

## Result
- All 8 open decisions of the final report are decided by the user (recommended options) and done on
  `refactor/architecture`: F52 a5ccee2b, F57 7da9980c, decisions + CLAUDE.md (F55) 16967738, F59-a e5714670,
  F59-b f92ed232, F58 14408db8, F59-c f0f09c25. F53 keep, F60 accept, F61 2 routes on the manual review list.
- Metrics after the report (`app/docs/refactor/reports/final.md`, section "After the report"): callAction outside
  api/ 6 → 4, getClientVar outside platform/ 22 → 7, flag readers 4 = 2 by design + 2 owned, files over 400 lines in
  components/containers/pages 10 → 0 (largest 392), HomeFeed 245.90 kB (+1.03 since P9-4), Login 185.10 kB.
- Each step: ci, parity visual --all 64/64 on both references; F58 also e2e:pwa 9/9.

## Decisions (who, date)
- User, 2026-10-25: F52, F53, F55, F57, F58, F59, F60, F61 (answers in the chat). Then "Từ giờ tôi giao lại cho opus
  và fable quyết định ... ko cần hỏi tôi" (auto window 6, open-ended).
- Advisors (Window 6 in `migration/refactor/auto-decisions-2026-10-22.md`): W44 baseline 142 → 144 for the F59-b
  split (split, conservative); W45 HomeFeed +0.37 kB once, trim triggers (split, conservative).

## Facts learned (evidence)
- Why the Mac slept on 2026-10-24: `pmset sleep 1` and Claude Code's own short `caffeinate -t 300`
  (memory `project-mac-sleep-unattended-runs`; `pmset -g log`).
- A barrel import from the entry hoists a whole shared module: own small files for app-start calls (F57 loop 1).
- A staged `git rm` from a developer goes into the next commit of any step: check the index before a commit.

## Open issues
- Rows in `migration/refactor/followups.md`: debt F35-F37, F46-F51 (F49: back to 142), F62; optional F41, F42, F45;
  tools F27, F44, F56; watch F11, F17 (W45 triggers).

## Next
- Nothing queued. The user tests on http://localhost:5174/UBTConnect/HomeFeed and gives the next order.
