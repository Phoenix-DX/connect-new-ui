# EmptyState

OutSystems: `UBTConnectLibrary.ConnectPatterns.EmptyList` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.EmptyList.md`

The base empty state of `components/ui` (P7-3; `docs/refactor/duplicates.md`, group 3). It renders the DOM of
`EmptyList`: the block name in the DOM stays `ConnectPatterns.EmptyList`.

| Input / placeholder | Type         | Prop     | Default |
| ------------------- | ------------ | -------- | ------- |
| IconId              | UBT_Icons Id | `iconId` | `''`    |
| TitlePlaceholder    | placeholder  | `title`  | none    |
| TextPlaceholder     | placeholder  | `text`   | none    |

Events: none. Each placeholder is in its styled `<div>` as compiled. Child blocks: `CustomContainer` (flex, centred,
Neutral3 border, Large radius), `CircleButton` (Small_40, Primary background and border) with an `Icon` (Neutral0,
Base_24).

## Users

| User                                                | What it shows                                             |
| --------------------------------------------------- | --------------------------------------------------------- |
| `components/directory/DirectoryEmptyState` (preset) | entity icon, "No <entities> <location>", locality text    |
| `pages/Notes/components/NoteCard_List`              | no notes                                                  |
| `containers/ShareSheet/ShareSheetContainer`         | search icon, "No results found for '<term>'" in the sheet |

Not merged into this component: BlankSlate, ConnectBlankSlate, MessageListNoResults, OrbitNoInformation, OrbitNoResults
and NoBookmarks. Each one has its own DOM.

## Captured variants (1 in the pack + 1 whole; 2 tested)

| Capture | Source                | What it shows                          |
| ------- | --------------------- | -------------------------------------- |
| v1      | Notes/default         | no notes (pack)                        |
| v2      | Notes/default (whole) | v1 with the caller's CustomText blocks |
