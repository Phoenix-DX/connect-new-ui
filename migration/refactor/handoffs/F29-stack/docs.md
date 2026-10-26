# Docs · F29-stack

Status: pass

## Result

- `migration/stack.json`: removed `nouislider` 15.8.1 and `wnumb` 1.2.0 from `dependencies`. Removed the item `osui:RangeSlider`. Added ADR-16 "Remove noUiSlider and wNumb" (accepted, user, 2026-10-24, context F29 commit 9b88da40). ADR-3 stays unchanged as the earlier record.
- The Tooltip, Columns4 and SwipeEvents rows: the file has an `osui:Tooltip` item only. It stays. No Columns4 or SwipeEvents item exists. No other item changed.
- `app/docs/reference/stack.md`: copied from the generator. It loses the RangeSlider row and the two package rows, and gains the ADR-16 row and section. The page was older than `stack.json`, so it also gains ADR-15 text (P3-1 to P7-6 notes, the route guard line, the rule 10 and 11 line). This text is already in `stack.json`.
- `app/docs/reference/shared-blocks.md`: not changed. The generated page differs in one line only: it writes `src/shared/osui/` where the current page writes `src/components/ui/` (known generator issue). The page had no RangeSlider row to remove.
- Other generated pages: `api.md` and `flags.md` are identical. `screens.md` differs (generator writes `src/screens/`); not copied.
- `git diff --stat` shows `migration/stack.json` and `app/docs/reference/stack.md` only, plus this file (untracked).
- Lint: `ste_lint.py` gives 24 errors on `stack.md`. They come from the long ADR-15 sentences in `stack.json`, not from ADR-16. Prettier passes.
