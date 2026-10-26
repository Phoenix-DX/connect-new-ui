# CustomContainer

OutSystems: `UBTConnectLibrary.BasePatterns.CustomContainer` · pack `migration/blocks/UBTConnectLibrary.BasePatterns.CustomContainer.md`

| Input           | Type             | Prop                   | Default |
| --------------- | ---------------- | ---------------------- | ------- |
| ExtendedClasses | Text             | `extendedClasses`      | `''`    |
| Options         | ContainerOptions | `options` (`types.ts`) | `{}`    |

Events: `Clicked` → `onClicked` (the Content placeholder always has the click handler, hence `cursor: pointer`).
Placeholder: `Content` → `children`.

Classes: `ubt-custom-container` + ExtendedClasses + GetClasses_Container(Options). OnReady style (SetStyle): height /
width options, then background image, else background colour opacity (`rgba(var(--color-rgb-…),opacity)`).

## Captured variants (279 distinct in the pack; 8 tested)

| Capture | Source                  | What it shows                                                             |
| ------- | ----------------------- | ------------------------------------------------------------------------- |
| v1–v4   | BrowseCountries/default | background + padding axes, margin, border/radius, caller container inside |
| v5      | HomeFeed/default        | background opacity style, shadow                                          |
| v6      | Photobook/default       | flex display options, opacity                                             |
| v7      | Photobook/loading       | height/width style, text options, empty content                           |
| v8      | BrowseCountries/default | skeleton element (AvatarImage)                                            |

## Not captured

- Background image style, min/max sizes, per-side radius, visibility, `IsInlineBlock` from options: built from the
  compiled actions, unit-tested in `../lib/actions.test.ts` and `CustomContainer.test.tsx`.
