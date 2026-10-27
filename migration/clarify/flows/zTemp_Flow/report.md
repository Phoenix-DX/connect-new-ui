# Flow report: zTemp_Flow

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 2 (built: 0; not built: ShareObject, board `skip` V3d D2 skip:variant; TestOpenShare, board `skip` V7 skip:dead) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `migration/board.md`, `migration/knowledge/flag-values-tst.json`, TST file list (`tst_source.py list <Screen>`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 0 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 3 · unclear 0 (same as `checklist.json`).
- No finding. The flow has no own block and no server action.
- Status of the flow: it holds two temporary screens. The real share function is the screen LegacyShareObject (built, board line 49). It is not part of this flow.

## 2. Screens

### 2.1 ShareObject

Board decision: `skip`, reason `V3d · D2 · skip:variant`: branch 2; revisit if the LaunchDarkly flag `mobileDirectoryBookmarkNote` is true and `C2NewBookmarks` is false (user, 2026-10-14). On TST, `getHasBookmarNote` is false and `getHasNewBookmarks` is true (since 2026-10-21), so the reason still holds.

What the DEV screen does: inputs `In_ShareObjectTypeId` (Type_ShareObject) and `In_ObjectId` (Long Integer), both mandatory. Roles: Registered, UBTOne_User. The tree is the layout `Layout_MainPages` with a `StaticInput` header and a blank slate with the text "Comming soon" (sic) and an ellipsis icon. It has no data, no action and no lifecycle event.

What a build needs: `Layout_MainPages`, `StaticInput`, OSUI `BlankSlate`. No client action, no server action, no flag, no plugin. The pack does not show the text of the TST file, so the TST spelling of "Comming soon" is not in the pack.

### 2.2 TestOpenShare

Board decision: `skip`, reason `V7 · skip:dead`: test screen in the zTemp flow (user, 2026-10-14).

What the DEV screen does: no input, no data, no lifecycle event. The tree has the layout `Layout_MainPages`, the `StaticInput` header and one button "Button". The action `ButtonOnClick` calls the client action `LaunchWithData`. The call sets the Android package `com.microsoft.office.outlook`, the intent action `android.intent.action.SEND`, the type `text/plain` and extras. The pack cuts the extras after the subject. It is an Android intent test.

What a build needs: `Layout_MainPages`, `StaticInput`, the client action `LaunchWithData` (plugin for Android intents; the plugin name is not in the pack). No server action. A web build cannot run an Android intent.

## 3. Blocks of the flow

None. The flow has no own block.

## 4. Shared blocks and actions

None. The flow calls no module client action.

## 5. Findings

None.

## 6. DEV vs TST differences

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| ShareObject | present | present (`UBTConnect.zTemp_Flow.ShareObject.mvc.js`) | not built | `tst_source.py list ShareObject` |
| TestOpenShare | present | present (`UBTConnect.zTemp_Flow.TestOpenShare.mvc.js`) | not built | `tst_source.py list TestOpenShare` |
| `getHasBookmarNote` / `getHasNewBookmarks` | not read in the pack | false / true | LegacyShareObject path | `migration/knowledge/flag-values-tst.json` |

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| data | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ui | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| strings | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 3 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
