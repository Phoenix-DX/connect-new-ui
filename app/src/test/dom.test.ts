import { expect, test } from 'vitest';
import { diffAgainstCapture } from './dom';

const captured = `<div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b5-$b3">
  <div class="font-semi-bold margin-left-s" data-container="" style="cursor: pointer;">
    <span data-expression="" style="margin-left: 0px;">Services</span>
  </div>
</div>`;

function render(html: string): Element {
  const host = document.createElement('div');
  host.innerHTML = html;
  const el = host.firstElementChild;
  if (!el) throw new Error('empty');
  return el;
}

test('ids and runtime markers are ignored, classes compare as sets', () => {
  const el = render(
    '<div data-block="BasePatterns.CustomText" class="OSBlockWidget"><div class="margin-left-s font-semi-bold" style="cursor:pointer"><span style="margin-left:0px">Services</span></div></div>',
  );
  expect(diffAgainstCapture(el, captured)).toEqual([]);
});

test('a class, a style or a static text difference is reported', () => {
  const el = render(
    '<div data-block="BasePatterns.CustomText" class="OSBlockWidget"><div class="font-semi-bold" style="cursor: default"><span style="margin-left: 0px;">Service</span></div></div>',
  );
  expect(diffAgainstCapture(el, captured).map((d) => d.kind)).toEqual(['class', 'style', 'text']);
});
