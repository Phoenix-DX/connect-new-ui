# Auto decisions of the refactor run, 2026-10-22

Window: 11:44 to 15:30 +07, extended by the user at 12:59 until P0-5 is done ("kéo dài tới khi xong P0-5"; English: "extend until P0-5 is done"). Claude recommended to keep the P0-5 gate for the user; the user chose to extend. The user's instruction: "Bạn hãy chạy Refactory plan, nếu định hỏi gì thì hãy nhờ opus
suggest và auto chọn recommand nhé, ko cần chờ tôi." (English: "Run the refactor plan. If you want to ask something,
ask Opus to suggest, and choose the recommendation automatically. Do not wait for me.")

For each question or user gate, an Opus advisor agent read the evidence and recommended an option. The master
recorded the recommendation in `state.json` with the marker "auto-accepted (user instruction 2026-10-22 11:44, until
15:30)". The user can review and change every row.

| Id | Step | Question or gate | Opus recommendation | Recorded |
| -- | ---- | ---------------- | ------------------- | -------- |
| Q1 | P0-1 | Coverage provider missing: add it now or later? | (a) Add `@vitest/coverage-v8` at the vitest version now; fixed include pattern so moved files do not change the number. | accepted |
| Q2 | P0-3 | Before-gate: add `eslint-plugin-import-x` and `tsx`? | Approve neither. `import-x/no-relative-parent-imports` also flags `@/` imports (against rule 11): use ESLint core `no-restricted-imports`. Node 24 runs the codemod without `tsx` (`createRequire` for `ts-morph`). Versions: dependency-cruiser 17.4.3, eslint-plugin-boundaries 5.4.0, jscpd 4.3.0, knip 5.88.1, ts-morph 27.0.2. | accepted; plan v2 §4.4 and P1-1 need a text change |
| Q3 | P0-1 | Security patches before the baseline? (audit: vitest 2 moderate, vite 1 high + 4, storybook 1 critical) | (a) All now, before measuring: vitest and coverage-v8 4.1.12, vite 7.3.7, storybook and all `@storybook/*` 10.6.3 (ADR-2 security exception). Smoke-test `storybook build`. | accepted |
| Q4 | P0-3 | Folder rules 3–9 with `@/` imports: which tool? | (3) dependency-cruiser only (resolves `@/`), drop `eslint-plugin-boundaries`; editor feedback for simple bans with ESLint core `no-restricted-imports`. **Changes D3: review it.** | accepted |
| Q5 | P0-5 | `DEPRECATED_*` patterns (4, used by 7 routes): keep or delete? | (a) Keep as legacy UI components in `components/ui/legacy/` with business names: deleting them changes the 1:1 UI and breaks parity. Plan v2 §2.6 "delete" does not apply; a switch is a later UX decision. | accepted; plan v2 §2.6 needs a text change |
| Q6 | P0-5 | G2 email pages: container or not? | (a) Shared `ContactEmailForm` + 2 card components + a config and one submit hook per page; no container (R2). EmailContact, EmailTarget, LDM_Email_V2 stay separate. | accepted |
| Q7 | P0-5 | `OSBlock` (388 importers) and the other `OS*` widgets: `legacy/os/widgets/` with a rule exception, or a UI folder? | (b) `components/ui/os/`: they render the DOM that R3 keeps forever, so they are permanent UI primitives (rule 5 allows them). A widget that imports `legacy/os` stays there behind an adapter. | accepted; plan v2 P1-3 needs a text change |
| G-P0-5 | P0-5 | User gate: move map (329 rows), duplicates.md, ADR-15 | Opus reviewer: confirm with changes (16 rows, 5 other changes, Q7); changes applied. ADR-15 accepted; 9 dev packages allowed with `stack.py dep add --adr ADR-15`. | accepted (window extended by the user until P0-5) |

## Window 2: 15:29 +07 until the end of P1

The user's instruction (15:29): "Hãy auto chạy cho tới hết P1 như P0" (English: "Run automatically until the end of
P1, as for P0"). Same rules as window 1, with the marker "auto-accepted (user instruction 2026-10-22 15:29, until end
of P1)". Added at 15:40 by the user: when Opus is not sure, ask Fable too (refactor-master §5.1).

| Id | Step | Question or gate | Recommendation | Recorded |
| -- | ---- | ---------------- | -------------- | -------- |
| Q8 | P1-1 | The self parity reference (`migration/refactor-reference/`, git-ignored) is missing; 50 routes fail `--ref both`. Record it again, and at which commit? | Opus: (B) stash the three P1-1 app files, record `--record-self --all` at 3b25ddd, restore the files, test again. Every later step compares with this reference, so it must come from the documented commit. Done: 149/149 states, 162.4 MB. | accepted |
| Q9 | P1-2 | `shell/mocks.ts`, `mocks.test.ts` and `testSupport.ts` are not in the step table; the developer put them in `platform/testing/`. Right place? | Opus (medium) and Fable (high) agree: (b) `mocks.ts` and `mocks.test.ts` to `platform/bootstrap/` (rename only, the MSW glob still matches); `testSupport.ts` to `src/test/` next to the setup it imports. No new `platform/testing` area. `bootstrap/` is an approximate fit (it also mocks shell-block calls): P5 follow-up in move-map.csv. | accepted |

## Window 3: 19:41 +07, overnight, until every in-scope phase (P2 to P7) is done

The user's instruction (19:41): "Tôi giờ sẽ đi ngủ nên là bạn cứ chạy hết các Px giúp tôi nhé, xong hết thì cho 1 bảng
đầy đủ các quyết định của Opus và Fable, mỗi quyết định nêu rõ context và lý do vì sao chọn nhé." (English: "I am going
to sleep, so run all the phases for me. When all is done, give me a full table of the decisions of Opus and Fable, each
with its context and the reason for the choice.") Marker: "auto-accepted (user instruction 2026-10-22 19:41,
overnight)". Stretch phases P8 and P9 are not in this window. Each row: context, options, choice, reason, advisors and
confidence.

| Id | Step | Context | Options | Choice | Reason | Advisors (confidence) |
| -- | ---- | ------- | ------- | ------ | ------ | --------------------- |
| Q10 | P2-1 | ci fails on `AssembleEvents.test.tsx`, a test that P2-1 did not touch: it computes the expected next meeting from the real time (`Date.now()`, UTC day), so it passed at 19:30 and fails at 20:00 +07. Every later gate runs ci. | (a) fix the test in its own commit before P2-1; (b) fix it inside the P2-1 commit; (c) accept ci red | (a), freeze the clock with `vi.setSystemTime` | A pre-existing flaky test that blocks every later gate; a separate test-only commit keeps P2-1 a pure move and ci meaningful. Copying the app rule into the test would still depend on the time of day. | Opus (high) |
| M1 | P2-3 | The step touched 50 paths under `app/src` (17 renamed, 15 added, 12 changed, 6 deleted), over the guideline of about 40 files. All gates pass. | (a) accept; (b) split the step | (a) accept | A guideline, not a gate: the 2 deleted block folders and the 4 callers that switch to the container belong together; splitting would leave a half-migrated block between commits. | master (no advisor) |
| G-P2-4 | P2-4 | User gate at the end of P2 (walking skeleton on HouseholdDetails): test HouseholdDetails, HouseholdCarousel and Profile, read the pilot report, confirm the page template that ~60 pages in P6 will copy. | (A) confirm; (B) confirm with changes; (C) do not confirm | (B) confirm with changes: fix `page-template.md` now (hook shape, container rule, state shape, `screens/*/api.ts` split); code moves later as follow-ups F1 to F5 (`migration/refactor/followups.md`) | The 3 routes render as before (links 200, build images match, parity 64/64 on both references). But the template text did not match its own pilot: it said hooks read TanStack Query hooks (the pilot calls repository functions), and it did not forbid `containers/` importing `pages/`. Where the advisors differed (Fable: move the hook and rename `api.ts` now; Opus: schedule), the master took the more conservative option: schedule. | Opus (medium), Fable (high); merged by the master |
| Q11 | P3-2 | The cycle among UBTConnectLibrary, UBTConnect_Utils and UBTConnect came only from 8 Library stories (20 upward imports); production code had none. The developer replaced the real blocks in those stories with `StandInBlock`, so Storybook showed "Not captured" markers instead of the bottom bar, PIN blocks and lazy image. | (a) keep the stand-ins; (b) real blocks in stories, exclude `*.stories.tsx` and tests from the cycle and layer rules; (c) move the 8 stories up into the higher module | (b) **split** | Opus chose (c): the higher module owns the composed view, no rule exception. Fable chose (b): a story is a top-level consumer, not a module dependency; standard dependency-cruiser practice; keeps Storybook faithful. The master took (b) as the more conservative and reversible option (smallest diff from HEAD, no file moves). | Opus (c, medium), Fable (b, high): split |
| U1 | P6 | How to run P6 (76 steps, most of the time): the catalog chains the steps, but most P6 steps convert one page in its own folder. | (a) sequential; (b) 3 to 4 page steps in parallel, each in its own git worktree and dev server (ports 5175 to 5178), diff applied to the main tree one at a time with a short tester pass (ci and the parity of the step) before docs and commit; group steps G*-A and gates G*-C stay sequential | (b) | Cuts P6 from about 44 h to about 15 to 20 h with few conflicts; P3 to P5 stay sequential (shared foundations). | **User** (23:14): "okie đồng ý, miến sao đạt target nhưng vẫn an toàn và ít conflict là được" |
