## Result
status: pass
summary: move-map.csv: 52 P7-6 rows `moved`, 2 `deleted` (MultiResolutionImageLoader and src/shared/README.md; only P7-6 rows changed, each target exists). ADR-15 (stack.json, rendered), overview.md (diagram and rules), 6 guides, 33 comment/README files, followups F35 to F38 (F30, F34 closed) and the CHANGELOG entry are updated. Checks pass.

## Files changed
app/docs/refactor/move-map.csv
app/docs/refactor/CHANGELOG.md
migration/refactor/followups.md
migration/stack.json (ADR-15 decision: shared/ rules removed, P7-6 line added)
migration/architecture.md (rendered by stack.py render; 4 lines)
app/docs/architecture/overview.md (mlib node replaces shared in the mermaid diagram; rules; P7-6 note)
app/docs/guides/shared-code.md
app/docs/guides/api-and-mocks.md (MSW glob `mocks/modules/**/mocks.ts`, path)
app/docs/guides/os-widgets.md
app/docs/guides/shell.md (3 paths; table re-aligned by prettier)
app/docs/guides/screens.md
Comment text or README text only in these 33 files under app/src (paths of `src/shared/` replaced by the new paths; no code line changed):
- app/src/api/README.md
- app/src/api/bookmark/repository.test.ts
- app/src/api/note/repository.test.ts
- app/src/api/update/repository.test.ts
- app/src/components/contact/AddressPopupWrapper/README.md
- app/src/components/directory/StatisticsTypedItem/README.md
- app/src/components/directory/SupperMeetingDetails/README.md
- app/src/components/directory/SupperMeetingHouseholdList/README.md
- app/src/components/feed/UpdateListItem/README.md
- app/src/components/ui/Carousel/README.md
- app/src/components/ui/Dialog/NavigationDialog.README.md
- app/src/components/ui/LegacyPopupMenu/LegacyPopupMenu.tsx
- app/src/components/version/UnsupportedVersionWrapper/README.md
- app/src/lib/orbit/actions.ts
- app/src/mocks/fictional/orbit.ts
- app/src/mocks/modules/Connect2_Assemble_MUI/mocks.ts
- app/src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts
- app/src/pages/AcceptPendingPolicies/staticEntities.ts
- app/src/pages/AssembleEvents/components/actions.ts
- app/src/pages/BookmarksByGroup/hooks/bookmarkGroupActions.test.ts
- app/src/pages/BookmarksByGroup/hooks/bookmarkGroupActions.ts
- app/src/pages/BookmarksByGroup/mocks.ts
- app/src/pages/EventBooklet/components/PopUp_OrbitBookletFilters.tsx
- app/src/pages/FeedItemDetail/FeedItemDetail.test.tsx
- app/src/pages/GuestArrangements/mocks.ts
- app/src/pages/HelpersDetail/mocks.ts
- app/src/pages/HomeFeed/mocks.ts
- app/src/pages/LDM_Email_V2/components/actions.ts
- app/src/pages/LDM_EventDetail_V2/components/actions.ts
- app/src/pages/LDM_MyEvents_V2/components/actions.ts
- app/src/pages/MyBookmarks/mocks.ts
- app/src/platform/bootstrap/mocks.ts
- app/src/platform/navigation/osNavigate.ts
Left as is on purpose: app/src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.README.md (history: "P7-2 moved the block from src/shared/..."), the P7-0 history line of overview.md.

## Commands run
python3 migration/tools/ste_lint.py <changed .md files> → 0 errors in each (warnings are passive/glossary hits, mostly old text; CHANGELOG 288 warnings, 0 errors)
cd app && npx prettier --check <changed files under app/ and followups.md> → all pass
node migration/tools/check_mermaid.cjs app/docs/architecture/overview.md → [] (no error)
python3 .claude/skills/outsystems-screen-spec/scripts/stack.py render → architecture.md written
grep -rn "shared/" app/src → 1 hit left (the history line above)

## Deviations from the brief
- Follow-up ids F35 (split module actions), F36 (OSLink navigation), F37 (CacheControl to api hooks), F38 (rule-5 drop is a reclassification) are new ids; the master may rename them. ADR-15, overview.md and the CHANGELOG cite F35.
- The CHANGELOG names parts 1 to 3 by commit hash; parts 4 and 5 are staged, so they have no hash yet. The master adds them.
- The README row (`src/shared/README.md`) is also `deleted`, because the folder file is deleted in the staged diff.
- The numbers 269 to 222 come from the master's brief; test.md gives 222 and the base 274 (dev.md). rule-5 net -109 = 122 to 13.
- Edited the code comments with a Python string replacement, not sed.

## Questions for the user
none
