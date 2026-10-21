/* Client actions of ReactiveHtmlSanitizer, ported 1:1 from migration/runtime-sources/ReactiveHtmlSanitizer.controller.js
   (cited controller.js:<line>), over DOMPurify 3 (ADR-3) configured as the global `HtmlSanitizer` object of
   migration/runtime-sources/ReactiveHtmlSanitizer.HtmlSanitizer.js (a customised jitbit HtmlSanitizer, cited HS:<line>).
   The original keeps three allow lists (tags, attributes, CSS properties), filled by setDefaults when the script loads
   (HS:32); each action adds entries to a list or deletes entries from it, and the lists persist for every later call
   until setDefaults. Names are matched exactly as the original does: tags against `tagName` (upper case for HTML),
   attributes and CSS properties as written. */
import DOMPurify from 'dompurify';

/** setDefaults (HS:16-30): the default allow lists. */
// prettier-ignore
const DEFAULT_TAGS = [
  'A', 'ABBR', 'B', 'BLOCKQUOTE', 'BODY', 'BR', 'CENTER', 'CODE', 'DIV', 'EM', 'FONT',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HR', 'I', 'IMG', 'LABEL', 'LI', 'OL', 'P', 'PRE',
  'SMALL', 'SOURCE', 'SPAN', 'STRONG', 'TABLE', 'TBODY', 'TR', 'TD', 'TH', 'THEAD', 'UL', 'U', 'VIDEO',
];
// prettier-ignore
const DEFAULT_ATTRIBUTES = [
  'align', 'color', 'controls', 'height', 'href', 'src', 'style', 'target', 'title', 'type', 'width',
];
// prettier-ignore
const DEFAULT_CSS_STYLES = [
  'color', 'background-color', 'font-size', 'text-align', 'font-weight', 'text-decoration', 'text-decoration-line',
  'text-decoration-thickness', 'text-decoration-style', 'text-decoration-color',
];
/** schemaWhiteList_ (HS:12): the URL schemes a URI attribute may start with. */
const SCHEMA_WHITE_LIST = ['http:', 'https:', 'data:', 'm-files:', 'file:', 'ftp:', 'mailto:'];
/** uriAttributes_ (HS:13): the only attributes whose scheme is checked (`src` is not). */
const URI_ATTRIBUTES = new Set(['href', 'action']);
/** contentTagWhiteList_ (HS:14): tags always kept, converted to DIV (HS:65-66). */
const CONTENT_TAGS = new Set(['FORM']);
/** Tags dropped when their HTML is blank (HS:60-63, empty spans pasted from Outlook). */
const BLANK_DROPPED_TAGS = new Set(['SPAN', 'B', 'I', 'U']);

const lists = {
  tags: new Set<string>(),
  attributes: new Set<string>(),
  cssStyles: new Set<string>(),
};

/** HtmlSanitizer.setDefaults (HS:16-30; SanitizedHtml OnReady when ResetWhitelist): back to the default lists. */
export function setDefaults(): void {
  lists.tags = new Set(DEFAULT_TAGS);
  lists.attributes = new Set(DEFAULT_ATTRIBUTES);
  lists.cssStyles = new Set(DEFAULT_CSS_STYLES);
}
setDefaults();

/** The JavaScript nodes split the list on "," and skip empty tokens (no trimming). */
function change(list: Set<string>, names: string, allowed: boolean): void {
  for (const token of names.split(','))
    if (token.length > 0) {
      if (allowed) list.add(token);
      else list.delete(token);
    }
}

/** AllowTags (controller.js:109-162, JS :152-160): adds each tag to HtmlSanitizer.AllowedTags. */
export function allowTags(tags: string): void {
  change(lists.tags, tags, true);
}

/** DisallowTags (controller.js:271-324, JS :314-322): deletes each tag from HtmlSanitizer.AllowedTags. */
export function disallowTags(tags: string): void {
  change(lists.tags, tags, false);
}

/** AllowAttributes (controller.js:1-54, JS :44-52): adds each attribute to HtmlSanitizer.AllowedAttributes. */
export function allowAttributes(attributeNames: string): void {
  change(lists.attributes, attributeNames, true);
}

/** DisallowAttributes (controller.js:163-216, JS :206-214): deletes each attribute from
    HtmlSanitizer.AllowedAttributes (its parameter is named CssStyles in the original). */
export function disallowAttributes(cssStyles: string): void {
  change(lists.attributes, cssStyles, false);
}

/** AllowCssStyles (controller.js:55-108, JS :98-106): adds each property to HtmlSanitizer.AllowedCssStyles. */
export function allowCssStyles(cssStyles: string): void {
  change(lists.cssStyles, cssStyles, true);
}

/** DisallowCssStyles (controller.js:217-270, JS :260-268): deletes each property from HtmlSanitizer.AllowedCssStyles. */
export function disallowCssStyles(cssStyles: string): void {
  change(lists.cssStyles, cssStyles, false);
}

/* makeSanitizedCopy (HS:54-97) as DOMPurify hooks on a private instance (the shared DOMPurify keeps its defaults). */
const purify = DOMPurify(window);

/** Elements: a tag not in AllowedTags (nor FORM) is dropped with all its content (HS:58, :93-95); an allowed SPAN, B,
    I or U whose HTML is blank is dropped (HS:60-63). The body that holds the input is the root and stays. */
purify.addHook('uponSanitizeElement', (node) => {
  if (!(node instanceof Element) || node === node.ownerDocument.body) return;
  const tag = node.tagName;
  if (CONTENT_TAGS.has(tag)) return;
  if (!lists.tags.has(tag) || (BLANK_DROPPED_TAGS.has(tag) && node.innerHTML.trim() === '')) node.remove();
});

/** Attributes (HS:70-88): only those in AllowedAttributes; `style` keeps only the AllowedCssStyles properties (none
    left = no style attribute); `href` / `action` with a ":" must start with a whitelisted scheme. Values are kept as
    written (untrimmed). */
purify.addHook('uponSanitizeAttribute', (node, data) => {
  const name = data.attrName;
  if (!lists.attributes.has(name)) {
    data.keepAttr = false;
    return;
  }
  const value = node.getAttribute(name) ?? '';
  if (name === 'style') {
    const source = (node as Partial<ElementCSSInlineStyle>).style;
    const copy = document.createElement('div');
    if (source)
      for (const styleName of Array.from(source))
        if (lists.cssStyles.has(styleName)) copy.style.setProperty(styleName, source.getPropertyValue(styleName));
    const css = copy.getAttribute('style');
    if (css === null) data.keepAttr = false;
    else data.attrValue = css;
    return;
  }
  if (URI_ATTRIBUTES.has(name) && value.includes(':') && !SCHEMA_WHITE_LIST.some((schema) => value.startsWith(schema)))
    data.keepAttr = false;
  else data.attrValue = value;
});

/** SanitizeHtml (controller.js:325-405, JS :399-403): HtmlSanitizer.SanitizeHtml(Value) (HS:34-104) → SanitizedHtml.
    The input is trimmed; "" and a lone `<br>` give "". DOMPurify does the walk (its own safety checks stay on: mXSS,
    clobbering, unsafe attribute values); the lists decide in the hooks above, FORM elements become DIVs, and the
    result gets the original's line breaks after `<br>` and between adjacent DIVs (HS:101-103). */
export function sanitizeHtml(value: string): string {
  const input = value.trim();
  if (input === '' || input === '<br>') return '';
  const fragment = purify.sanitize(input, {
    // the root body always stays (the original throws when BODY is disallowed: HS:99-101 on a fragment)
    ALLOWED_TAGS: [...lists.tags, ...CONTENT_TAGS, 'body', '#text'],
    ALLOWED_ATTR: [...lists.attributes],
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false,
    ALLOWED_URI_REGEXP: /^/,
    KEEP_CONTENT: false,
    RETURN_DOM_FRAGMENT: true,
  });
  for (const form of Array.from(fragment.querySelectorAll('form'))) {
    const div = document.createElement('div');
    for (const attribute of Array.from(form.attributes)) div.setAttribute(attribute.name, attribute.value);
    div.append(...Array.from(form.childNodes));
    form.replaceWith(div);
  }
  const holder = document.createElement('div');
  holder.append(fragment);
  return holder.innerHTML.replace(/<br[^>]*>(\S)/g, '<br>\n$1').replace(/div><div/g, 'div>\n<div');
}
