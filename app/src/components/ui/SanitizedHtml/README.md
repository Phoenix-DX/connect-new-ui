# SanitizedHtml

OutSystems: `ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml` · pack
`migration/blocks/ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.md`

| Input                | Type    | Prop                   | Default |
| -------------------- | ------- | ---------------------- | ------- |
| Value                | Text    | `value`                | `''`    |
| ResetWhitelist       | Boolean | `resetWhitelist`       | `false` |
| AllowedAttributes    | Text    | `allowedAttributes`    | `''`    |
| DisallowedAttributes | Text    | `disallowedAttributes` | `''`    |
| AllowedTags          | Text    | `allowedTags`          | `''`    |
| DisallowedTags       | Text    | `disallowedTags`       | `''`    |
| AllowedCssStyles     | Text    | `allowedCssStyles`     | `''`    |
| DisallowedCssStyles  | Text    | `disallowedCssStyles`  | `''`    |

Events: none. Placeholders: none. Renders the `OSFillParent` expression with the sanitized Value as its HTML. The
module actions (`../lib/actions.ts`) keep the allow lists like the original global `HtmlSanitizer`: changes persist
across instances until a ResetWhitelist.

## Captured variants (2 tested)

| Capture | Source                | What it shows      |
| ------- | --------------------- | ------------------ |
| v1      | MessageDetail/default | HTML value (`<p>`) |
| v2      | Notifications/default | plain text value   |

## Sanitizer configuration

`../lib/actions.ts` configures DOMPurify 3 (ADR-3) as the original global `HtmlSanitizer`
(`migration/runtime-sources/ReactiveHtmlSanitizer.HtmlSanitizer.js`, a customised jitbit HtmlSanitizer):

- Allow lists of setDefaults (:16-30): 38 tags (upper case, matched against `tagName`, so `disallowedTags="b"` changes
  nothing), 11 attributes, 10 CSS properties. Rules:
  - A tag outside the list is dropped **with its content**.
  - FORM becomes a DIV.
  - Blank SPAN / B / I / U are dropped.
  - `style` keeps only the allowed properties.
  - `href` / `action` with a ":" must start with http:, https:, data:, m-files:, file:, ftp: or mailto: (`src` is not
    checked).
  - data-* / aria-* and comments go.
  - The input is trimmed. "" and a lone `<br>` give "".
  - A line break is added after `<br>` and between adjacent DIVs (:101-103).
  - Tested in `../lib/actions.test.ts`.
- Kept from DOMPurify on top: its mXSS / clobbering / unsafe-attribute-value checks (they only remove more). The
  original throws when BODY is disallowed; here the root body always stays.
