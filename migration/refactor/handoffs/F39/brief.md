# Brief · F39 · Hall block OnParametersChanged (AssembleDetail)

Fix step outside `steps.json` (no `rf.py` state). Decision: advisors Opus (b, medium) and Fable (b, high), auto-accepted
(user instruction 2026-10-24, away: "Fable và Opus hãy giúp tôi tự trả lời và chọn lựa các mục F39, F40"). Row F39 of
`migration/refactor/followups.md`; log row in `migration/refactor/auto-decisions-2026-10-22.md` (Window 5).

| Field | Value |
|---|---|
| Kind | behavior fix (approved through the advisors; rule 4 does not block it) |
| Parity level | visual, all routes (AssembleDetail has no capture states; the unit test is the evidence) |
| Developer model | sonnet |
| Handoff folder | `migration/refactor/handoffs/F39/` |

## Facts

- OutSystems `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision`
  (`migration/screens/AssembleDetail/sources/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js`):
  the only input is the hall record `AssembleAttendeeSubdivision`. OnParametersChanged (lines 2899-2917) has one step:
  `Set_SelectedAssembleAttendeeListBookmarks` (lines 2368-2680). It reads the local bookmarks
  (`GetLocalBookmarksByObjectType(MyBookmarks_ObjectType.contact)`, no server call) and sets `IsBookmarked` on each row
  of the block's local copy (`AssembleAttendeeSubdivision_Local...SubdivisionHouseholdList`). It does not copy the input
  again and does not reload the households. OnReady always calls the same action at its end (line 1812).
- Port: `app/src/pages/AssembleDetail/hooks/useAttendeeSubdivision.ts` reads the local bookmarks in onReady
  (`getLocalBookmarksByObjectType(Contact)` + `withLocalBookmarks`, helper in `attendeeSubdivisionState.ts`). It already
  passes `parameters: { subdivision }` to `useFlowState`, which supports an `onParametersChanged` option
  (`app/src/platform/navigation/flowState.ts`: runs after a render where `JSON.stringify(parameters)` changed, never after
  the first render). The hook does not set it.
- Today no path changes the hall prop while the block is mounted (the event is fetched once): the handler is not
  reachable. It protects a later refresh of the event data.

## Change

1. In `useAttendeeSubdivision`, set `onParametersChanged` of `useFlowState`: re-read the local bookmarks and set the
   bookmark flag on the rows already in the block's state (`withLocalBookmarks(latest rows, bookmarks)`). Do not copy the
   new input into the rows, do not reload, no API call (as OutSystems: the rows stay as they are).
2. The handler must be safe to run more than once (idempotent).
3. Header comment of the hook: one line that ports OnParametersChanged, that today no path reaches it, and that the
   port compares parameters by JSON (OutSystems by its runtime rule). Keep the `@origin` tag and the file's comment style.
4. Only the hook and its test change. If more files need changes, stop with `question`.

## Tests

- One test: render the block, change the `subdivision` prop (same rows), with the local bookmarks changed between the
  two renders; assert the bookmark marks update and no new fetch (call count unchanged).
- Existing AssembleDetail tests pass.

## Gate commands for the tester

```
npm --prefix app run ci
npm --prefix app run lint:arch   # no new warning
python3 migration/tools/refactor/arch_baseline.py check   # 0 new
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report migration/refactor/handoffs/F39/parity.md
npm --prefix app run build && node app/build/bundle-report.mjs   # W21: +0.3 kB per step
```

## Not in this step

`migration/refactor/followups.md`, CHANGELOG: the master and the documenter do them after the test.
