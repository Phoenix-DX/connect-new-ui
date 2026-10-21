# InlineSVG

OutSystems UI: `OutSystemsUI_2_23.Utilities.InlineSVG` · pack `migration/blocks/OutSystemsUI_2_23.Utilities.InlineSVG.md`

| Input         | Type | Prop            | Default |
| ------------- | ---- | --------------- | ------- |
| SVGCode       | Text | `svgCode`       | `''`    |
| ExtendedClass | Text | `extendedClass` | `''`    |

Events and placeholders: none. The OutSystems UI provider sets SVGCode as the container's innerHTML. The provider adds
ExtendedClass to the container. The React component uses `dangerouslySetInnerHTML` (the code comes from the app, as in
the original).

## Captured variants

| Capture | Source                   | Note                                                                            |
| ------- | ------------------------ | ------------------------------------------------------------------------------- |
| v1      | BookmarksByGroup/default | header background                                                               |
| v2      | Splash/default           | the Splash screen animates the path; the story includes the animated attributes |

## Not settled

- The container's `name` attribute (the pattern's generated unique id, used by the provider to find its element) is not
  rendered: React needs no lookup id, and the captures do not record that attribute (they drop several attributes).
