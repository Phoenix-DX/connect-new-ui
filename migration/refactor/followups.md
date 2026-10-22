# Refactor follow-ups (carry-over list)

The master adds each open item to the developer prompt of its target step, and marks it done with the commit. Source:
the gate or decision that created it.

| Id | Target | Item | Source | Status |
| -- | ------ | ---- | ------ | ------ |
| F1 | P3-1 | Move the hook, state file and MSW mocks of the HouseholdDetails container from `pages/HouseholdDetails/` to `containers/HouseholdDetails/` (`hooks/`, `mocks.ts`), add `../containers/*/mocks.ts` to the globs of `src/mocks/handlers.ts` (keep the order) and `handlers.test.ts`, and add a dependency-cruiser rule: `containers/` never imports `pages/`; only `pages/<Route>/` imports `pages/<Route>/`. Importers today: the container, Locality_Details, Profile, EntitiesCarousel_HouseholdDetails and 5 mock or story files. | G-P2-4 (Opus 2, Fable 2) | done (P3-1) |
| F2 | P3-1 | Rename `pages/HouseholdDetails/api.ts` (the route-input reader) to `inputs.ts` and fold `types.ts` into it when it holds only input types. | G-P2-4 (Opus 4, Fable 3) | done (P3-1) |
| F3 | P3-1 | `migration/tools/docs_gen.py` and `migration/tools/refactor/move-map.mjs` read the `@origin` tag (today only `// @os-block`). | G-P2-4 (Opus 5) | done (P3-1) |
| F4 | own step after P4-5 (M2) | Move the standard state shape (the `latest` ref, `useReducer`, `useViewState` dispatch, `flowsRef` and `parametersKey` for OnParametersChanged) into one platform hook before P6, so pages do not copy it. | G-P2-4 (Opus 3) | open |
| F5 | before P6 | Profile's "Preview Household Profile" (container source `preview`) is not opened by any parity state; only the container test and story cover it. Add a parity state or an interaction test that opens it. | G-P2-4 (Opus reason) | open |
| F6 | before P6 | EventDetail/default gave a self "pixel 1" difference once in the P3-4 full run and passed on two reruns with no code change. In P4-2 it gave the same 1-pixel difference in 2 of 5 reruns (3 clean): a real flake. Before P6, find its cause (for example a time or animation value on EventDetail) or mark the state as known-flaky in the parity tool. Treat a single-state pixel-only self difference as a suspected flake: rerun that state twice before a fix loop, and record the reruns in test.md. | P3-4 test | open |
