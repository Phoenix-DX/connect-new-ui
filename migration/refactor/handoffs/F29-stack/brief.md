# Brief · F29-stack · Remove noUiSlider and wNumb from the stack record

Docs-only step outside `steps.json`. Decision: user, 2026-10-24 ("ok tôi duyệt hết"): remove `nouislider` and
`wnumb` and the RangeSlider row from `migration/stack.json`, add a short ADR, and regenerate the reference pages.
Reason: F29 (commit 9b88da40) deleted the RangeSlider pattern and uninstalled both packages.

| Field | Value |
|---|---|
| Kind | docs and project data only (no app code) |
| Agent | refactor-documenter (sonnet) |
| Handoff folder | `migration/refactor/handoffs/F29-stack/` |

## Change

1. `migration/stack.json`:
   - remove `nouislider` and `wnumb` from the pinned dependencies;
   - remove the RangeSlider item (the row "same provider library as the original, pinned to the version in the
     manifest (noUiSlider + wNumb)");
   - add an ADR entry with the next free id, in the same shape as ADR-10 … ADR-13: title "Remove noUiSlider and
     wNumb", decision by the user 2026-10-24, context F29, consequence.
   - Do not change other items. The Tooltip, Columns4 and SwipeEvents rows, if any, stay. Name them in docs.md.
2. Regenerate with `python3 migration/tools/docs_gen.py --out <a temp folder>`, then copy only `stack.md` and
   `shared-blocks.md` to `app/docs/reference/`. Compare the other generated pages with `app/docs/reference/` and
   list the differences in docs.md, but do not copy them: the generator still writes `src/screens/` (known issue).
   If `shared-blocks.md` changes in more than the 4 deleted pattern rows, list the extra changes and copy it only
   when they are correct for the current tree.
3. Check: `python3 migration/tools/english_docs.py` or the ste_lint command you use, prettier on changed .md files,
   `git diff --stat` shows only `migration/stack.json`, the two reference pages and docs.md.

Do not change app code. Do not change `migration/refactor/followups.md` or the CHANGELOG (the master does).
Write docs.md in this folder.
