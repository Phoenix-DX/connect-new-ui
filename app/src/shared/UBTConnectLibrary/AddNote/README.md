# AddNote

OutSystems: `UBTConnectLibrary.ConnectPatterns.AddNote` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.AddNote.md`
(compiled source `migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.AddNote.mvc.js`)

Inputs: none. Event `OnSubmitRequested(Note)` → `onOnSubmitRequested` (awaited; then Note = "",
Handler_OnSubmitNote :317-348). Placeholders: none.

Markup (view :100-295): CustomContainer (padding horizontal base, top small; border neutral-3, top small) >
Columns_Two (reduce last, spacing xs).

- Left: the text Input widget `Input_Note` and InputCounter. The widget markup is `span.input-text >
input.form-control .OSFillParent`, with prompt "Add a Note" and max length 150. The capture on ContactByEmailMember
  shows this Input widget markup. InputCounter has In_InputId = the input id and In_InitialLength 0.
- Right: CircleButton_IconPrimary (Send, primary circle, neutral-0 icon). It is enabled when Trim(Note) <> "".
  A click runs Handler_OnSubmitNote.

## Not captured

No capture renders this block (the notes sheet is closed in every capture): built from the compiled view, story
`CompiledView`, tested in `AddNote.test.tsx`.

## Not settled

- OutSystems Trim removes spaces; JavaScript `trim()` also removes other white space.
