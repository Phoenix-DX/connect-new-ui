# Brief · F29 · Delete the 4 unused OSUI patterns

Follow-up step outside `steps.json` (no `rf.py` state). Order of the user (2026-10-24): "F29 nếu ko còn ai dùng thì
xoá" (delete them when nothing uses them). Decision row: `migration/refactor/followups.md`, F29.

## Scope

- Delete `app/src/components/ui/{Columns4,RangeSlider,SwipeEvents,Tooltip}/`.
- Remove `nouislider` and `wnumb` from `app/package.json` and `app/package-lock.json` (only RangeSlider used them) and
  delete `app/src/types/vendor.d.ts` (the `wnumb` module declaration only).
- Update `app/src/components/ui/README.md` (no "Unused patterns" section; pattern list without the 4).
- Remove the `components/ui/lib` exports that only the 4 patterns used: `Orientation`, `Trigger`, `Position`
  (`staticEntities.ts`) and `RangeSliderOptionalConfigs` (`structures.ts`) (dev.md addendum 2).
- No other code change. Developer report: `dev.md` in this folder.

## Gate commands for the tester

```
npm --prefix app run ci
npm --prefix app run lint:arch   # no new warning
python3 migration/tools/refactor/arch_baseline.py check   # 0 new
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report migration/refactor/handoffs/F29/parity.md
npm --prefix app run build && node app/build/bundle-report.mjs   # limits: plan v2 section 7 and W21
cd app && npx knip   # no unused dependency; no finding that names the 4 patterns, nouislider, wnumb or vendor.d.ts
```

Also check with grep that no file in `app/src`, `app/.storybook`, `app/e2e` or `migration/tools` imports the deleted
folders or packages. Rule 4 (no behavior change) applies: the patterns had no user, so the DOM must not change.

## Documenter scope

- `migration/refactor/followups.md`: row F29 closed (user decision, 2026-10-24; what was deleted).
- `migration/refactor/move-map.csv`: status `deleted` on the rows of the 4 patterns only (check the diff: no other row).
- `app/docs/refactor/CHANGELOG.md`: one F29 entry.
- `app/src/components/ui/README.md` counts, if the developer missed one.
- Any doc that still lists the 4 patterns as present (grep `Columns4`, `RangeSlider`, `SwipeEvents`, `Tooltip` in
  `app/docs/` and `migration/refactor/`; keep historic records such as reports and logs unchanged).
