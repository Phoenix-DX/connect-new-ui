# context-064: item 3, one shared Custom Dropdown (2026-10-28)

## Result
- Item 3 of the user's list (`migration/clarify/RESUME.md`) is built: the three ports of the runtime Custom Dropdown
  are one platform widget `app/src/components/ui/os/OSDropdownCustom/`; OSValidation has `useValidationWidget`;
  `UnbuiltValidationWidget` is deleted.
- Evidence and status: `migration/clarify/review/item3-dropdowns.md` (F1–F6, §4); design: `item3-solution.md`
  (Fable, React architect); build note: `migration/clarify/builds/item3-dropdowns.md` (an Opus agent, tests first).
- Gates: `npm run ci` green (4401 tests, after a jsdom polyfill for scrollIntoView); parity sweep 64 routes, 0 diffs.

## Decisions (user, 2026-10-28)
- Design (a) one generic widget with render props; O1 (a) `onValueChange` then `onChange`; O3–O6 as recommended.
- O2: port D2 (the expanded classes on a closed dropdown with a message) from the runtime code, not checked on TST.

## Facts learned (evidence)
- MCP = TST for the 8 dropdowns and the four HostSurvey validate actions; no DEV≠TST row. The publish of 2026-10-27
  changed only debugger ids here.
- The HostSurvey actions set Valid and ValidationMessage of the dropdowns (CreateValidationMessage); the bed-size
  check works on the DOM (ValidateBedSizeInputs): the markup is a contract.
- The test account has no Orbit event on TST now (OrbitLanding shows NoInformation_Orbit; read-only probe
  `migration/clarify/tools/probe_dropdown_d2.cjs`).
- MCP: parallel calls fail with a missing temp file; call the MCP one request at a time. Dropdown widget type:
  `ServiceStudio.Plugin.NRWidgets.IDropdown`.

## Files changed
- `app/`: `components/ui/os/OSDropdownCustom/` (new), `components/ui/os/OSValidation/`, ContactUsMessageForm, four
  HostSurvey item blocks and their tests, two deleted copies, `docs/guides/os-widgets.md`, `components/ui/README.md`,
  `.knip-known-unused.json` (one stale row).
- `migration/clarify/`: review and build notes, `tools/probe_dropdown_d2.cjs`, checklists, `builds/README.md`, `RESUME.md`.

## Open issues
- Check D2 on TST when the test account has an Orbit event with a host survey.

## Next
- Item 4 of the user's list: SanitizedHtml `<nobr>` and the double `?` of `generateScreenURL`.
