## Result
status: pass
summary: Removed `src/screens/` from overview (diagram node, edges, sequence diagram, text), the guides screens, page-template, os-widgets, getting-started, api-and-mocks, shared-code, `src/api/README.md` and the tools README. Added the CHANGELOG entry and the "Phase 6 done" summary.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/architecture/overview.md
app/docs/guides/screens.md
app/docs/guides/page-template.md
app/docs/guides/os-widgets.md
app/docs/guides/getting-started.md
app/docs/guides/api-and-mocks.md
app/docs/guides/shared-code.md
app/src/api/README.md
migration/tools/README.md
migration/refactor/handoffs/P6-end/docs.md

## Commands run
python3 migration/tools/ste_lint.py <each file> → 0 errors, except migration/tools/README.md (4 errors, same count at HEAD, not from this step)
npx prettier --check (app files) → clean (api-and-mocks.md and shared-code.md re-aligned tables with --write)
node migration/tools/check_mermaid.cjs app/docs/architecture/overview.md → ok

## Deviations from the brief
- Not edited: `app/docs/reference/screens.md` (generated). `migration/tools/docs_gen.py` line 64 still writes `src/screens/<S>/`; it must write `src/pages/<S>/` (tool fix for later; F27 also touches the tools).
- Code comments left (a documenter does not change code files): app/src/api/client/callAction.ts:18, app/src/platform/bootstrap/mocks.ts:142, app/src/shared/Connect2_MyBookmarks_MUI/mocks.ts:17-18, app/public/mock-embeds/my-entertaining.html:14.
- Also fixed in `src/api/README.md`: a stale claim that `MessageListItemWire` lives in `screens/Notifications/types.ts` (it is exported by `api/message/mapper.ts`) and the sentence about old `api.ts` re-exports of the message owners (no `api.ts` is left in pages/MessageList or pages/Notifications). Line 63 sentence about "old api.ts files" for other owners was not re-verified and is left.
- move-map.csv not changed (no block moved in this step).

## Questions for the user
none
