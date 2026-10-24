# AvatarDouble

OutSystems: `UBTConnectLibrary.ConnectPatterns.AvatarDouble` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.AvatarDouble.md` · compiled source
`migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc.js`

| Input                | Type              | Prop                  | Default |
| -------------------- | ----------------- | --------------------- | ------- |
| In_FirstAvatarImage  | AvatarImage       | `inFirstAvatarImage`  | `{}`    |
| In_SecondAvatarImage | AvatarImage       | `inSecondAvatarImage` | `{}`    |
| In_SizeId            | UBT_AvatarSize Id | `inSizeId`            | `''`    |

Inputs and defaults from the compiled model (`…AvatarDouble.mvc.js:12-30`); the structure is re-exported as
`AvatarImageRecord`.

Events and placeholders: none. View (`:171-278`): CustomContainer without options. Its classes are
`"ubt-avatar-double " + GetClasses_AvatarSize(In_SizeId) + " inline-block"` (plain concatenation, so an empty size
leaves a double space). Then `div.ubt-avatar-double__wrapper` with `div.text-align-left` (first `AvatarImage`) and
`div.ubt-avatar-double__wrapper__last-avatar` (second `AvatarImage`), both at In_SizeId.

Callers: Update_ListItem
(Large_65), Notification_ListItem (Base_52).

## Not captured

- No captured DOM exists (never rendered in the captured states): `AvatarDouble.test.tsx` checks the markup built from
  the compiled view, not a capture. The story is `CompiledView`, not a `V<N>` capture story.
