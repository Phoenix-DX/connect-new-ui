# CR-ContactByEmailMember-2: ContactByEmailForm message text area without `rows`

- **From:** route ContactByEmailMember (wave 5), parity. **Owner:** shared block
  `app/src/shared/UBTConnect/ContactByEmailForm/ContactByEmailForm.tsx`.
- **Change:** render `TextArea_Message` without the `rows={3}` attribute (browser default, 2 lines), as captured; check
  `TextArea_Subject` (`rows={1}`) against the OneSchool Global capture the same way.
- **Why:** the captured text area has no `rows` attribute
  (`migration/screens/ContactByEmailMember/analysis/dom/default.html:168`, block capture `__captures__/form-member.html:30`)
  and is 358×60 on TST; ours is 358×81. With the captured CSS (`.phone .form-control[data-textarea]` font-size s,
  padding s; line-height 1.5 → 21px a line): 60 = 2×21 + 16 + 2 (2 lines), 81 = 3×21 + 16 + 2 (3 lines). The compiled
  view says `textLines: 3` (ContactByEmailForm.mvc.js:556), but TST renders no `rows` for it here nor on ContactUsDetails
  (`textLines: 3` at ContactUsDetails.mvc.js:1102, captured `<textarea>` without `rows` at its dom/default.html:106).
  Note_Item already renders its text area without `rows`.
- **Parity now (all three states of ContactByEmailMember):** layout ×2 (Placeholder_Input 358×90 → 358×111, textarea
  358×60 → 358×81), position ×4 (the counter, the span, the textarea offset, the FixedFooter offset 326 → 305), pixel
  0.23% (max 0.20%), hotspots along y = 280-340 (counter row). Nothing else differs; the contact card is clean.
- **Impact to check:** ContactByEmailOneSchoolGlobal (same block), the block's tests and stories.

## Status

rejected (orchestrator, 2026-10-15, auto mode): TST renders `rows` (OutSystemsReactWidgets.js TextArea, `rows: this.props.textLines`); the capture dropped it (capture.js KEEP_ATTR, line 285; `rows|maxlength` now kept for future captures). The shared ContactByEmailForm keeps `rows`; the parity difference is covered by CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL*.
