# MenuIcon__UpdatedOSUI

OutSystems: `Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI` · pack
`migration/blocks/Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.md`

| Input      | Type | Prop         | Default |
| ---------- | ---- | ------------ | ------- |
| MenuAction | Text | `menuAction` | `''`    |

Events: none. Placeholders: none. Class `app-menu-icon` + ` back` when MenuAction = Back; hidden when MenuAction =
Hidden. The `menu-back` button (role button, tabindex 0) runs OnBack: navigate back to the previous screen.

## Captured variants (2 tested)

| Capture | Source                   | What it shows   |
| ------- | ------------------------ | --------------- |
| v1      | BookmarksByGroup/default | MenuAction Back |
| v2      | MessageList/default      | MenuAction Menu |

## Not captured / not settled

- Hidden: from the compiled view (`visible: MenuAction <> Hidden`), tested.
- `MenuAction` values are opaque constants (`../lib/staticEntities.ts`): the identifiers are only compared, and
  neither the TST static-entity file nor the compiled code has them. Screens must pass these constants.
- No key handler: the original container only has an OnClick (Enter/Space do nothing), kept as is.
