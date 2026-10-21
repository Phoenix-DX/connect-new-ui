import { afterEach, describe, expect, it } from 'vitest';
import {
  allowAttributes,
  allowCssStyles,
  allowTags,
  disallowAttributes,
  disallowCssStyles,
  disallowTags,
  sanitizeHtml,
  setDefaults,
} from './actions';

describe('ReactiveHtmlSanitizer actions (HtmlSanitizer configuration)', () => {
  afterEach(() => {
    setDefaults();
  });

  it('a tag outside the allow list is dropped with its content; handlers, comments and data / aria attributes too', () => {
    expect(sanitizeHtml('<p onclick="x()">Hi<script>alert(1)</script><!-- c --></p>')).toBe('<p>Hi</p>');
    expect(sanitizeHtml('<div>a<section>b<b>c</b></section></div>')).toBe('<div>a</div>');
    expect(sanitizeHtml('<img src="cid:1" width="10" data-x="1" aria-label="a" alt="z">')).toBe(
      '<img src="cid:1" width="10">',
    );
  });

  it('trims the input; "" and a lone <br> give ""', () => {
    expect(sanitizeHtml('   ')).toBe('');
    expect(sanitizeHtml(' <br> ')).toBe('');
    expect(sanitizeHtml('  plain text ')).toBe('plain text');
  });

  it('tags are matched in upper case; changes persist until the lists are reset', () => {
    disallowTags('B,,I');
    expect(sanitizeHtml('<b>x</b><i>y</i><u>z</u>')).toBe('<u>z</u>');
    allowTags('b');
    expect(sanitizeHtml('<b>x</b>')).toBe('');
    allowTags('B,SECTION');
    expect(sanitizeHtml('<section><b>x</b></section>')).toBe('<section><b>x</b></section>');
    setDefaults();
    expect(sanitizeHtml('<i>y</i><section>s</section>')).toBe('<i>y</i>');
  });

  it('blank SPAN, B, I and U are dropped', () => {
    expect(sanitizeHtml('<p><span> </span><b></b>t<span>s</span><i><br></i> </p>')).toBe(
      '<p>t<span>s</span><i><br>\n</i> </p>',
    );
  });

  it('a FORM becomes a DIV with its allowed attributes and content', () => {
    expect(sanitizeHtml('<form action="https://a.example" title="t"><p>in</p><input name="q"></form>')).toBe(
      '<div title="t"><p>in</p></div>',
    );
    allowAttributes('action');
    expect(sanitizeHtml('<form action="javascript:alert(1)">x</form>')).toBe('<div>x</div>');
    expect(sanitizeHtml('<form action="/send">x</form>')).toBe('<div action="/send">x</div>');
  });

  it('href keeps only whitelisted schemes (or no scheme); src is not checked', () => {
    expect(sanitizeHtml('<a href="javascript:alert(1)">x</a>')).toBe('<a>x</a>');
    expect(sanitizeHtml('<a href="tel:123">x</a>')).toBe('<a>x</a>');
    expect(sanitizeHtml('<a href="mailto:a@b.example" target="_blank">x</a>')).toBe(
      '<a href="mailto:a@b.example" target="_blank">x</a>',
    );
    expect(sanitizeHtml('<a href="/path?q=1">x</a>')).toBe('<a href="/path?q=1">x</a>');
    expect(sanitizeHtml('<a href=" https://a.example">x</a>')).toBe('<a>x</a>');
    expect(sanitizeHtml('<img src="blob:abc">')).toBe('<img src="blob:abc">');
  });

  it('style keeps only the allowed CSS properties; none left drops the attribute', () => {
    expect(sanitizeHtml('<p style="color: red; position: absolute; font-weight: bold">x</p>')).toBe(
      '<p style="color: red; font-weight: bold;">x</p>',
    );
    expect(sanitizeHtml('<p style="position: fixed">x</p>')).toBe('<p>x</p>');
    disallowCssStyles('color');
    allowCssStyles('position');
    expect(sanitizeHtml('<p style="color: red; position: absolute">x</p>')).toBe(
      '<p style="position: absolute;">x</p>',
    );
  });

  it('attributes can be added and deleted', () => {
    allowAttributes('class');
    disallowAttributes('title');
    expect(sanitizeHtml('<p class="a" title="t">x</p>')).toBe('<p class="a">x</p>');
    allowAttributes('Width');
    disallowAttributes('width');
    expect(sanitizeHtml('<img width="10">')).toBe('<img>');
  });

  it('adds a line break after <br> and between adjacent DIVs, as the original', () => {
    expect(sanitizeHtml('<p>a<br>b</p><div>x</div><div>y</div>')).toBe('<p>a<br>\nb</p><div>x</div>\n<div>y</div>');
  });
});
