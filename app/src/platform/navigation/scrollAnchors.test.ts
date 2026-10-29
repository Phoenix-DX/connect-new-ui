import { beforeEach, describe, expect, it } from 'vitest';
import {
  getFocusedScrollAnchorOnBack,
  leavingScrollAnchors,
  navigationStorage,
  rememberFocusedScrollAnchor,
} from './scrollAnchors';

describe('NavigationHandler scroll anchors', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    navigationStorage.clear();
    leavingScrollAnchors.clear();
  });

  it('RememberFocusedScrollAnchor keeps index and offsetTop of the anchor of the list (NH:1613-1626)', () => {
    document.body.innerHTML =
      '<div id="List_Updates"><div data-dx-scroll-anchor-id="98"></div><div data-dx-scroll-anchor-id="99"></div></div>';
    rememberFocusedScrollAnchor('List_Updates', 3, '99');
    expect(leavingScrollAnchors.get('List_Updates')).toEqual({ index: 3, offsetTop: 0 });
  });

  it('RememberFocusedScrollAnchor keeps nothing without the list or the anchor', () => {
    rememberFocusedScrollAnchor('List_Updates', 3, '99');
    document.body.innerHTML = '<div id="List_Updates"></div>';
    rememberFocusedScrollAnchor('List_Updates', 3, '99');
    expect(leavingScrollAnchors.size).toBe(0);
  });

  it('GetFocusedScrollAnchorOnBack reads the entering anchor of the navigation storage, else "" and -1 (NH:485-495)', () => {
    expect(getFocusedScrollAnchorOnBack()).toEqual({ scrollAnchorId: '', listIndex: -1 });
    navigationStorage.set('dx-entering-scroll-anchor', { id: '42', index: 7 });
    expect(getFocusedScrollAnchorOnBack()).toEqual({ scrollAnchorId: '42', listIndex: 7 });
  });
});
