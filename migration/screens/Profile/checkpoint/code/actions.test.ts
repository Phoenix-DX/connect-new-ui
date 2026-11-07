import { afterEach, describe, expect, it, vi } from 'vitest';
import { dropdownSearch_ForceResizeOnOpen } from './actions';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('DropdownSearch_ForceResizeOnOpen (UBTConnect_Utils.controller.js:1443-1460)', () => {
  it('adds one afterOpen listener per .osui-dropdown-search present now, which calls virtualSelect.onResize', () => {
    document.body.innerHTML = '<div class="osui-dropdown-search"></div><div class="osui-dropdown-search"></div>';
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.osui-dropdown-search'));
    const first = elements[0] as HTMLElement;
    const second = elements[1] as HTMLElement;
    const onResize = vi.fn();
    (first as HTMLElement & { virtualSelect?: { onResize: () => void } }).virtualSelect = { onResize };
    dropdownSearch_ForceResizeOnOpen();
    dropdownSearch_ForceResizeOnOpen();
    expect(first.dataset.resizeListenerAdded).toBe('true');
    expect(second.dataset.resizeListenerAdded).toBe('true');
    first.dispatchEvent(new Event('afterOpen'));
    expect(onResize).toHaveBeenCalledTimes(1);

    // An element rendered later gets no listener.
    const later = document.createElement('div');
    later.className = 'osui-dropdown-search';
    document.body.appendChild(later);
    expect(later.dataset.resizeListenerAdded).toBeUndefined();
  });
});
