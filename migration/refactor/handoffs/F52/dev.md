# Dev report · F52

Status: pass

## Result
`orbitStaticEntities.ts | mobileOrbitHostSurvey` moved from OUTSIDE_OWNED to a new by-design list keyed on file + flag
(`OUTSIDE_BY_DESIGN_PAIRS`, with the comment from the brief). `app/routes.ts` still allows any flag. A stale by-design
pair (reader gone) fails. Metric prints "4 = 2 by design + 2 owned, target 0".

## Proof
- `npm --prefix app run flags`: exit 0, new metric printed.
- Temporary `flagValue('mobileAssemble')` in orbitStaticEntities: check failed (NEW OUTSIDE READER). Removed; check exit 0 again; no diff in src/.

## Files changed
- app/build/check-flags.mjs

(Prettier was run on this file; it also reformatted lines that were already unformatted.)
