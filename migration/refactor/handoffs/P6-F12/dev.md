# Dev report: P6-F12

Status: pass

## Files changed
- .claude/skills/refactor-master/scripts/rf.py: ORIGIN_TAG regex; `changed_lines(..., signed)`; `cmd_diffcheck` accepts added `@origin` tags (forms `/** @origin <name> */` and ` * @origin <name>`) only in renamed files; prints `origin tags: <n>`.
- app/build/bundle-report.mjs: `routeChunk` tries `../pages/<s>/<s>Page.tsx`, then `../screens/<s>/index.tsx`.

## Checks
- py_compile ok.
- `rf.py diffcheck --move` on the tree: `origin tags: 10`; all P6-G1-A files pass. The final line is FAIL only because the tool file bundle-report.mjs (this step's own edit) is a modified code file, which the move check rejects by design; no other line fails.
- Regex check on sample lines: both allowed forms match; `// @origin X`, names with spaces, and tag plus code on one line do not match. Removed tags (`-`) and tags in non-renamed files (old is None) go to the normal rule and fail.
- `npm --prefix app run build` ok; bundle-report prints Login (route LoginPage-*.js) and HomeFeed.
