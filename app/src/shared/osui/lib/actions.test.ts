import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  dropdownClear,
  dropdownClearValidation,
  dropdownClose,
  dropdownTogglePopup,
  registerDropdown,
  scrollToElement,
  type DropdownProviderApi,
} from './actions';

/* ScrollToElement (OutSystemsUI_2_23.controller.js ScrollToElementJS :22104-22112 → OutSystemsUI.js
   Utils.ScrollToElement). jsdom has no layout: positions, scrollTop and header height are set by hand. */
function scroller(element: Element, scrollTop: number) {
  Object.defineProperty(element, 'scrollTop', { value: scrollTop, configurable: true });
  const scrollTo = vi.fn();
  Object.defineProperty(element, 'scrollTo', { value: scrollTo, configurable: true });
  return scrollTo;
}
const placeAt = (element: Element, top: number) =>
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({ top } as DOMRect);
const byId = (id: string) => document.getElementById(id) as HTMLElement;

describe('ScrollToElement', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = '';
  });

  it('after ScrollDelay, scrolls the active screen to the element top + OffSet (smooth)', () => {
    document.body.innerHTML = '<div class="active-screen"><div id="target"></div></div>';
    const scrollTo = scroller(document.querySelector('.active-screen') as Element, 30);
    placeAt(byId('target'), 120);
    scrollToElement('target', true, 10, '', 200);
    vi.advanceTimersByTime(199);
    expect(scrollTo).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(scrollTo).toHaveBeenCalledWith({ top: 160, left: 0, behavior: 'smooth' });
  });

  it('a fixed header takes its height off; IsSmooth False scrolls with behavior auto', () => {
    document.body.innerHTML =
      '<div class="layout-native"><div class="header"></div><div class="active-screen"><div id="t"></div></div></div>';
    Object.defineProperty(document.querySelector('.header'), 'offsetHeight', { value: 56 });
    const scrollTo = scroller(document.querySelector('.active-screen') as Element, 0);
    placeAt(byId('t'), 300);
    scrollToElement('t', false, 0, '', 0);
    vi.runAllTimers();
    expect(scrollTo).toHaveBeenCalledWith({ top: 244, left: 0, behavior: 'auto' });
  });

  it('ElementParentClass scrolls the closest such ancestor; else the iOS bounce content', () => {
    document.body.innerHTML =
      '<div class="ios"><div class="ios-bounce"><div class="content"><div class="active-screen">' +
      '<div class="my-list"><div id="a"></div></div><div id="b"></div></div></div></div></div>';
    const list = scroller(document.querySelector('.my-list') as Element, 5);
    const bounce = scroller(document.querySelector('.content') as Element, 7);
    const screen = scroller(document.querySelector('.active-screen') as Element, 0);
    placeAt(byId('a'), 20);
    placeAt(byId('b'), 40);
    scrollToElement('a', true, 0, 'my-list', 0);
    scrollToElement('b', true, 0, '', 0);
    vi.runAllTimers();
    expect(list).toHaveBeenCalledWith({ top: 25, left: 0, behavior: 'smooth' });
    expect(bounce).toHaveBeenCalledWith({ top: 47, left: 0, behavior: 'smooth' });
    expect(screen).not.toHaveBeenCalled();
  });

  it('the element is looked up when called: a missing one (or no scrollable screen) scrolls nothing', () => {
    document.body.innerHTML = '<div class="active-screen"></div>';
    const scrollTo = scroller(document.querySelector('.active-screen') as Element, 0);
    scrollToElement('later', true, 0, '', 100);
    (document.querySelector('.active-screen') as Element).innerHTML = '<div id="later"></div>';
    vi.runAllTimers();
    expect(scrollTo).not.toHaveBeenCalled();
    document.body.innerHTML = '<div id="orphan"></div>';
    expect(() => {
      scrollToElement('orphan');
      vi.runAllTimers();
    }).not.toThrow();
  });
});

/* Dropdown API (CR-EventBooklet-2): DropdownAPI of OutSystemsUI.js (OSUI:13765-13966), patterns found by unique id or
   widget id (MapOperation.FindInMap OSUI:3420-3436), errors answered as Success False (CreateApiResponse). */
describe('Dropdown client actions', () => {
  const fakeDropdown = () => ({
    clear: vi.fn<DropdownProviderApi['clear']>(),
    close: vi.fn<DropdownProviderApi['close']>(),
    togglePopup: vi.fn<DropdownProviderApi['togglePopup']>(),
    validation: vi.fn<DropdownProviderApi['validation']>(),
  });

  it('reach a registered dropdown by its widget id or its unique id (name), until it is disposed', () => {
    const pattern = fakeDropdown();
    const unregister = registerDropdown(':r1:', 'b5-DropdownTags_Roles', pattern);
    expect(dropdownClear('b5-DropdownTags_Roles', true)).toBe(true);
    expect(pattern.clear).toHaveBeenCalledWith(true);
    expect(dropdownClear(':r1:')).toBe(true);
    expect(pattern.clear).toHaveBeenLastCalledWith(true);
    expect(dropdownClearValidation('b5-DropdownTags_Roles')).toBe(true);
    expect(pattern.validation).toHaveBeenCalledWith(true, '');
    expect(dropdownTogglePopup('b5-DropdownTags_Roles', false)).toBe(true);
    expect(pattern.togglePopup).toHaveBeenCalledWith(false);
    expect(dropdownClose(':r1:')).toBe(true);
    expect(pattern.close).toHaveBeenCalledTimes(1);
    unregister();
    expect(dropdownClose(':r1:')).toBe(false);
    expect(pattern.close).toHaveBeenCalledTimes(1);
  });

  it('answer Success False for an unknown id or when the pattern throws', () => {
    expect(dropdownClear('nope')).toBe(false);
    const pattern = fakeDropdown();
    pattern.togglePopup.mockImplementation(() => {
      throw new Error('not built');
    });
    const unregister = registerDropdown(':r2:', 'b6-DropdownTags_Countries', pattern);
    expect(dropdownTogglePopup('b6-DropdownTags_Countries', false)).toBe(false);
    unregister();
  });
});
