# context-051 · Refactor P8 and P9 done; F39, F40, F43, F54 (2026-10-24 evening to 10-25 night)

## Result
- All 133 steps of plan v2 are done (P8 2/2, P9 4/4, stretch included). Final report:
  `app/docs/refactor/reports/final.md`; entries in `app/docs/refactor/CHANGELOG.md`.
- Commits: F39 8537c849, F40 9695c8ee, P8-1 e0063dfa, F43 aef8ee7a, P8-2 e2006670, P9-1 df225389, P9-2 27a3732e,
  F54 1683312c, P9-3 95f0bad3, P9-4 09cc69f2. Gate of P9-4: ci 3975 tests, coverage 89.51 % statements, parity strict
  --all 64/64 on both references, e2e:pwa 9/9, HomeFeed 244.87 kB, Login 184.92 kB.

## Decisions (who, date)
- User, 2026-10-24: "Hãy chạy P8 và P9 / Fable và Opus hãy giúp tôi tự trả lời và chọn lựa các mục F39, F40 / ... tự
  động chạy mọi thứ ... cho tới khi tôi quay lại" (auto window 5).
- Advisors Opus + Fable, all agreed: W34-W43 in `migration/refactor/auto-decisions-2026-10-22.md` (F40 keep the port
  rule; F39 add the handler; LDM audit once; 3 Orbit hooks aligned; P9-1 hybrid with frozen baselines; cheap rule-9
  moves; P8-2 conservative; knip exports baseline; flag readers 4 = 1 by design + 3 owned; 3 unread flag keys kept).
- Master: CLAUDE.md is not edited in P9-3; the proposal waits for the user (F55).

## Facts learned (evidence)
- The Mac slept during the run (`pmset` log 21:45, 22:03); `caffeinate -i -s -m` kept it awake afterwards.
- `AssembleEvents.test.tsx` compared only the day; the page asks from the full timestamp (F54, handoff dev.md).
- Legacy CSS: rule 1 of P8-2 protects about 98 % (screens without parity states); -1,019 B only (W40).
- A git worktree has no `migration/refactor-reference`: run parity from the main checkout with `--app <preview>`.

## Files changed
- `app/src/styles/` (tokens, layers), `legacy/os/StylesheetHost`, `lib/os-wire.ts`, `lib/os-assets.ts`, 3 CSS files,
  lint configs and baselines, `app/build/check-*.mjs`, 5 hooks (F39, F40), docs and ADR-15 text.

## Open issues
- User decisions: F52, F53, F55, F57-F61, F18; optional: F41, F42, F45; debt with owners: F35-F37, F46-F51;
  tools/watch: F11, F15-F17, F19, F27, F31, F32, F44, F56. Rows in `migration/refactor/followups.md`.

## Next
- The user reviews final.md and the decisions W34-W43, then decides the open rows. No refactor step is left.
