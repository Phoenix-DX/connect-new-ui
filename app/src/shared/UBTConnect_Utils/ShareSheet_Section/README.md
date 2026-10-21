# ShareSheet_Section

OutSystems: `UBTConnect_Utils.CW_Share.ShareSheet_Section` · pack `migration/blocks/UBTConnect_Utils.CW_Share.ShareSheet_Section.md`

| Input         | Type    | Prop           | Default |
| ------------- | ------- | -------------- | ------- |
| In_HideBorder | Boolean | `inHideBorder` | `false` |

Events: none. Placeholders: `Placeholder_Title` → `placeholderTitle`, `Placeholder_Content` → `placeholderContent`
(two plain placeholder `div`s, compiled view `ShareSheet_Section.mvc.js:134-150`).

## Captured variants (0)

No screen capture renders it (the share sheet is closed in every capture): built from the compiled view
(`migration/blocks/sources/`), story `CompiledView`, checks in `ShareSheet_Section.test.tsx`.

## Not settled

- In_HideBorder is declared (ShareSheet passes True for "Shared To") but no view or action reads it: no effect.
