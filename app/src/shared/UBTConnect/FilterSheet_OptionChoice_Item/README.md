# FilterSheet_OptionChoice_Item

OutSystems: `UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item` · pack
`migration/blocks/UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.md`

| Input                        | Type                                | Prop                        | Default |
| ---------------------------- | ----------------------------------- | --------------------------- | ------- |
| Filter_Common_Control_Choice | Record Filter_Common_Control_Choice | `filterCommonControlChoice` | `{}`    |

Events: `OnChange(Title, ChoiceId)` → `onOnChange(title, choiceId)`. Options (DefineOptions on initialize and on new
parameters): None (only with a NoneLabel), Yes, No; Ids are `Choice` identifiers (opaque, `../lib/staticEntities.ts`).
The outer CustomContainer is the instance named "Choice" (generated id not rendered).

## Captured variants (1 distinct; 1 tested)

| Capture | Source        |
| ------- | ------------- |
| v1      | Notes/default |
