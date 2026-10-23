# ContactPersonCard

The person card of the ContactByEmail form (`Placeholder_ContactCard` of `ContactEmailForm`), in the screens
`UBTConnect.ContactFlow.ContactByEmailMember` and `UBTConnect.ContactFlow.ContactByEmailOrbitHost` (same markup,
`app/docs/refactor/duplicates.md` group 1; decision Q6). Screen markup, not an OutSystems block.

| Screen value                                                             | Prop                  |
| ------------------------------------------------------------------------ | --------------------- |
| In_EntityType ("" → Connect_Entity.Member)                               | `entityType`          |
| In_EntityId                                                              | `entityId`            |
| In_AvatarURL                                                             | `avatarURL`           |
| Member: In_ContactName + " " + In_ContactSurname; OrbitHost: In_HostName | `name`                |
| In_ContactLocality, In_ContactCountry (", " only when both are not "")   | `locality`, `country` |

The blocks keep the instance ids of the screens (`$b3` to `$b9`, the same in both).

## Captures

None of its own: the route captures of ContactByEmailMember cover it (route parity). The tests check the texts, the
locality separator and the instance ids.
