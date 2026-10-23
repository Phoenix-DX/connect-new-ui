# Directory_EmptyState

OutSystems: `UBTConnect.Directory_CommonBlocks.Directory_EmptyState` · pack `migration/blocks/UBTConnect.Directory_CommonBlocks.Directory_EmptyState.md`

| Input        | Type                  | Prop           | Default          |
| ------------ | --------------------- | -------------- | ---------------- |
| EntityTypeId | Text (Connect_Entity) | `entityTypeId` | `''`             |
| Location     | Text                  | `location`     | `'found nearby'` |

Events: none.
Placeholders: none.

## Captured variants

None (no screen in scope loaded it). Stories: SupperMeetings, Interchanges; tests from the compiled view.

## Not captured / not settled

- No capture: the compiled view (migration/blocks/sources/UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc.js:154-225) is the reference; tests check it.
- The title shows the Connect_Entity Id, so UBTConnect Connect_Entity holds TST values. GetEntityType_Icon (UBTConnect_Utils) compares with UBTConnect_Utils.Connect_Entity. The SupperMeetings / OneSchoolGlobal / FeedItem values of that entity are opaque constants. Those entities get the fallback icon until CR-W4B-1 is applied.
