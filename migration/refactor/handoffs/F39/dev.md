# Dev report · F39

Status: pass

## Result
`useAttendeeSubdivision` now sets `onParametersChanged` on `useFlowState`. It re-reads the local contact bookmarks and applies `withLocalBookmarks` to the rows already in the block state. It makes no API call, does not copy the new input and does not reload. Running it twice gives the same result. The header comment says no path reaches it today and that parameters are compared by JSON. One test was added.

## Files changed
- app/src/pages/AssembleDetail/hooks/useAttendeeSubdivision.ts
- app/src/pages/AssembleDetail/hooks/useAttendeeSubdivision.test.tsx

## Quick checks
- typecheck: pass
- vitest src/pages/AssembleDetail: 8 files, 51 tests pass
- eslint on the two files: clean
