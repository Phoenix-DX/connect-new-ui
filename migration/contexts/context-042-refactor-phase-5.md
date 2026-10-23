# context-042 · Refactor Phase 5 done (2026-10-23)

## Result
- Phase 5 (api layer) 12/12. This run: P5-2-app (36df9c9), P5-3-event (be1598b), P5-3-bookmark (64ab666), P5-3-note
  (cbb79b2), P5-3-message (cf0d7a5), P5-3-notification (f674c24), P5-4 (a966278). Earlier steps: context-041.
- Gap G2 fixed on `main` (9a8093f, route BookmarksByGroup review round 3) and merged into `refactor/architecture`
  (6196a07) before P5-3-bookmark.
- Every step: ci pass; strict parity 64/0 on both references (P5-4 full `--all` run); exemptions none; bundle within +5
  percent (Login +4.2 percent, HomeFeed +3.3 percent). Summary: `app/docs/refactor/CHANGELOG.md` ("Phase P5").

## Decisions (who, date)
- User 2026-10-23 13:43: Fable and Opus decide every decision for the user, no waiting (Window 4).
- W1 (G2 cache field defaults), W2 (G2 review confirm), W3 to W5 (P5-4: TanStack queries with a logout session epoch,
  one step, options in the owning domains), W6 (Phase 5 exemption list confirmed, empty): all agreed by Opus and
  Fable, `migration/refactor/auto-decisions-2026-10-22.md`, Window 4.

## Facts learned (evidence)
- Prefetch patches made on an older base apply with `git apply --3way`, but a clean 3-way merge can still leave an
  unused import (P5-3-message, `Directory_EntityDetailsActions/api.ts`): run eslint on the changed files after apply.
- A prefetch on top of an uncommitted step works: apply the staged diff of the main tree with `git apply --index` in
  the worktree, and take the prefetch diff as the unstaged changes (P5-3-notification).
- `route.py parity` in a worktree without a root `node_modules` needs
  `NODE_PATH=<project root>/node_modules` (Playwright of the main tree).
- Accepted behavior change of P5-4: a reader more than 10 s after a pending miss shares the running call (W3).

## Files changed
- `app/src/api/*` (app, event, bookmark, note, message, notification, image, client/cache.ts, client/queryClient.ts);
  `memoryCache.ts` deleted. Docs: CHANGELOG, `app/src/api/README.md`, overview, shell guide, block READMEs.
- `migration/refactor/followups.md`: G2 done, F11 (PopupMenu test flake, open).

## Open issues
- G1 (App_Common SecurityException branch): accepted (U2) for right after Phase 5, before any BFF work; not started.
- F10 (domains of the other "app" calls): decide at the start of P6. F11: watch.
- The worktree of `main` (G2) is still in an old session scratchpad; its dev server runs on port 5175.

## Next
- Wait for the user (scope "finish P5, then stop"). Then G1 or P6 (`/refactor-master continue` starts P6-G1-A).
