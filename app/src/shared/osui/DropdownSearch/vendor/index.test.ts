import { describe, expect, it } from 'vitest';
import { virtualSelect } from './index';

describe('vendored Virtual Select', () => {
  it('sets window.VirtualSelect and renders into the element', () => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    const instance = virtualSelect().init({ ele: el, options: [{ label: 'A', value: '1' }], search: true });
    expect(el.classList.contains('vscomp-ele')).toBe(true);
    expect(Array.isArray(instance)).toBe(false);
    el.remove();
  });
});
