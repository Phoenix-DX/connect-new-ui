# InputCounter

OutSystems: `Connect2_LegacyShared.Reusable.InputCounter` · pack `migration/blocks/Connect2_LegacyShared.Reusable.InputCounter.md`
(compiled source `migration/blocks/sources/Connect2_LegacyShared.Reusable.InputCounter.mvc.js`).

| Input               | Prop                | Notes                                                      |
| ------------------- | ------------------- | ---------------------------------------------------------- |
| `InputId`           | `inputId`           | element id of the counted input / text area (default `''`) |
| `NoteInitialLength` | `noteInitialLength` | CurrLength after OnInitialize when not 0 (default 0)       |

Events and placeholders: none. Client actions ported in `../lib/actions.ts` (`inputCounterOnInitialize`,
`inputCounterLimitField`, `inputCounterMaxLength`; tests in `../lib/actions.test.ts`). Markup: a `text-align-right`
container with an expression `text-neutral-6 font-size-0-75em margin-top-s ` (the final space is kept) that shows
`CurrLength/MaxLength`.

## Captures

None: the pack has 0 captured instances. No `migration/screens/*/analysis/dom` file holds the block: the captures
of the screens that use it do not render it. Therefore no `__captures__/` and no stories (a story needs a capture);
the test checks the classes and behaviour from the compiled code.

## Not captured / not settled

- Rendered DOM never compared with the original (see above): the class strings come from the compiled view.
- MaxLength when the element has no `maxlength`: the JS gives `parseInt(null)` = NaN; how the OutSystems Integer
  conversion reads NaN is not in the sources. Shown as 0 (same choice as `UBTConnectLibrary/InputCounter`).
