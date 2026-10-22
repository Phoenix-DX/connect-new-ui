# Auto decisions of the refactor run, 2026-10-22

Window: 11:44 to 15:30 +07. The user's instruction: "Bạn hãy chạy Refactory plan, nếu định hỏi gì thì hãy nhờ opus
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
