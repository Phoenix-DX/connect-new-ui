# context-046 · Phase 6 group G4 done; W26–W29; fix step P6-F17 next (2026-10-24 morning)

## Result
- Group G4 done: A, B-Shared, 13 page steps, C (no fix loop). Group gate W29 confirmed; report
  `app/docs/refactor/reports/P6-G4.md`; entries in `app/docs/refactor/CHANGELOG.md`. Gate: parity visual --all 64/64
  clean on both references, e2e:pwa 9/9, arch baseline 67 rows (P7 66, pre-existing 1), HomeFeed 244.14/248.22 kB
  (margin 4.08), Login 184.19/193.84 kB.
- Prefetched for G5 (patches in `migration/refactor/prefetch/`, git-ignored): P6-F17, G5-A, G5-B-Shared and most of the
  16 G5 page steps; some page patches get a short W28 loop (`beforePaint`) before they apply.

## Decisions (who, date)
- Opus + Fable (delegated by the user, Window 4 of `migration/refactor/auto-decisions-2026-10-22.md`):
  W26 SupperMeetingDetails `renderSupperMeetingDetails` slot; W27 MilestoneDetail keeps the old-port restore (follow-up
  next to F22); W28 opt-in `beforePaint` option of `useFlowState` in fix step P6-F17 (after P6-G4-C, before P6-G5-A;
  gen_steps.py AFTER_GROUP G4); W29 group G4 confirmed.

## Facts learned (evidence)
- 10 old G5/G6 blocks run OnReady in a `useLayoutEffect`; after-paint OnReady shows one frame of the wrong state and
  changes the call order (MilestoneDetail dev report) → W28.
- A vite dev server in a prefetch worktree rewrites the main tree's `.vite` cache through the `node_modules` symlink:
  prefetch developers use `vite preview` only (parity on 5174 stayed clean).
- Parallel page steps that append to one `api/<domain>` conflict at the end of each file: keep both blocks and the
  union of the import names (master script `resolve_append.py`, scratchpad); a chain worktree pre-applies the pending
  patches in catalog order and runs the full suite before they reach the main tree.

## Files changed
- `pages/` of the 13 G4 routes; `containers/SupperMeetingDetails`; `api/{household,locality,country}`;
  `components/directory/*` carousel slots.

## Open issues
- F21 (G5 AssembleEvents), F22 (restored-view calls of SupperMeetingDetails, user decision), F17 (HomeFeed margin
  watch): `migration/refactor/followups.md`.

## Next
- `/refactor-master continue`: P6-F17, P6-G5-A, P6-G5-B-Shared, the 16 G5 pages (patches ready or in a W28 loop),
  P6-G5-C; then G6, P6-end, P7-0 … P7-5.
