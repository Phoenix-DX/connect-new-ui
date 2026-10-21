# MessageList_NoResults

OutSystems: `Connect2_LegacyShared.Reusable.MessageList_NoResults` · pack
`migration/blocks/Connect2_LegacyShared.Reusable.MessageList_NoResults.md` (compiled source
`migration/blocks/sources/Connect2_LegacyShared.Reusable.MessageList_NoResults.mvc.js`)

Inputs: none. Events: none. Placeholders: `Placeholder1`, `Placeholder2`, `Placeholder3` → `placeholder1`,
`placeholder2`, `placeholder3`. Child: OutSystems UI AlignCenter (`osui/AlignCenter`) around the red `search-minus`
icon (`fa-2x`, size Twotimes) and "No results are found.", then "Suggestions:" and the three placeholder rows.

## Captured variants

None: no captured state of BookmarksByGroup or MessageList shows it. Built from the compiled view; the story
`CompiledView` and the test check that structure (no capture file).

## Not settled

- The icon container has `gridProperties.width: "auto"`; how OutSystems renders an "auto" width (class or inline
  style) is not captured anywhere, so nothing is rendered for it.
