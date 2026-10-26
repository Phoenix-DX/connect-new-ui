# ContactHeaderCard

The header card of the ContactByEmail form (`Placeholder_ContactCard` of `ContactEmailForm`). It is in the screens
`UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal`, `…ContactByEmailLDMCoordinator` and
`…ContactByEmailOrbitHelpdesk`. The markup is the same; only the image and the texts differ
(`app/docs/refactor/duplicates.md` group 1; decision Q6). It is screen markup, not an OutSystems block.

| Screen          | `imageSrc`                                               | `title`            | `subtitle`                |
| --------------- | -------------------------------------------------------- | ------------------ | ------------------------- |
| OneSchoolGlobal | `osImage('img/UBTConnectLibrary.OneSchoolGlobal.svg')`   | In_ContactName     | `' '`                     |
| LDMCoordinator  | In_AvatarURL, `undefined` when "" (no src attribute)     | In_ContactName     | `'LDM Event Coordinator'` |
| OrbitHelpdesk   | `osImage('img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg')` | `'Orbit Helpdesk'` | none (no `$b5` line)      |

The blocks keep the instance ids of the screens (`$b3` to `$b5`).

## Captures

None of its own: the route captures of ContactByEmailOneSchoolGlobal and ContactByEmailOrbitHelpdesk cover it (route
parity; LDMCoordinator was not captured). The tests check the image source, the texts and the instance ids.

Status: built in P6-G2-B-ContactByEmailMember with the pattern. ContactByEmailOneSchoolGlobal, ContactByEmailLDMCoordinator and ContactByEmailOrbitHelpdesk use it.
