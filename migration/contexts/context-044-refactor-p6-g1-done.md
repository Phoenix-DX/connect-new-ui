# context-044 · Phase 6 group G1 done; scope widened to all in-scope steps (2026-10-23 evening)

## Result
- Group G1 is done: 13 steps (A, 10 pages, B-Shared, C), last commit 12f9d24. Group gate: parity visual --all 64/64
  clean on both references, e2e:pwa 9/9, arch baseline 37 rows (all P7 or pre-existing). Report:
  `app/docs/refactor/reports/P6-G1.md`; entries in `app/docs/refactor/CHANGELOG.md`.
- Tool commits: d2993d5 and 1632c03 (catalog: G1 order, `P6-G<n>-B-Shared` per group), the W12/W13 tools commit
  (`rf.py diffcheck --move` accepts move-map renames; `migration/tools/refactor/arch_baseline.py`).
- G2 started: P6-G2-A applied in the main tree (stage test); P6-G2-B-Shared prefetched (patch pending, question W17).

## Decisions (who, date)
- User 2026-10-23 evening: "từ giờ bạn hãy tự động chạy … lấy recommend của fable và opus … cứ 5 phút … báo cáo";
  then "chạy tự động tất cả step trong các phase ko giới hạn ở G1 nữa" → all in-scope steps (P6, P7) run
  automatically; P8/P9 (stretch) only on an explicit order (told the user).
- W9–W16 (Opus + Fable agree, all high except W12 medium): `migration/refactor/auto-decisions-2026-10-22.md`, Window 4.
  Key rules: W10/W11 one shared-move step per group; W12 move-map renames; W13/W15 lint baseline = moved debt, grows
  only in B-Shared steps under the guard, owners per row, empty before P9-1; W16 group G1 confirmed.

## Facts learned (evidence)
- Prefetch works: worktree per step from HEAD, `node_modules` symlinked (root symlink must be excluded from
  `git add`); a step on top of an uncommitted step: `git apply --index` its staged diff in the worktree, keep
  `git write-tree` as the base, patch = `git diff --cached <tree>`. Scripts: `migration/refactor/prefetch/master-scripts/`
  (git-ignored).
- `rf.py start` follows the single dependency chain of the catalog: a prefetched step can be applied only in catalog order.
- zsh does not split `$var` in `for`/`set --`: call scripts with explicit arguments.
- Login first load is 0.88 kB gzip under its +5 % limit (follow-up F14): a step that would pass it stops and asks.

## Files changed
- `pages/` of the 10 G1 routes; `components/{auth,layout,menu,version}`, `platform/session` (PIN hooks),
  `platform/feedback/dialogs/PinUnlockContentContainer.tsx`; `api/policy` (new), `api/member` (requestPhotoUpdate).

## Open issues
- F13 (P7 owners of the baseline), F14 (Login margin), G3, F11: `migration/refactor/followups.md`.
- Old prefetch worktrees (G1 and earlier) still exist in scratchpads; remove them at the end of the run.

## Next
- `/refactor-master continue`: P6-G2-A test → docs → commit; then P6-G2-B-Shared (W17), the 9 G2 page steps
  (prefetch 3–4 in parallel), P6-G2-C; then G3 … G6, P6-end, P7.
