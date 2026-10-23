import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setFlag } from '@/platform/flags/flags';
import { NO_DATE } from '@/platform/session/clientVars';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { Connect_BottomBar_Items as I } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { BottomBarMenu, type BottomBarMenuProps } from './BottomBarMenu';
import * as stories from './BottomBarMenu.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const capturedStories = { default: stories.default, V1: stories.V1 };
const { V2 } = composeStories(stories);

/* The original's live DOM nests the Updates icon link (App_IconBadge) inside the item link: the runtime builds it with
   DOM calls, and the capture is that DOM serialized (the five `.list > a` items are also what the slider counted,
   `--dx-bottom-bar-items: 5` in HomeFeed dom/default.html:1185). Parsing the capture again lets the HTML parser close
   the item link at the inner <a> (adoption agency), so the rendered tree is serialized and parsed by the same parser
   before the comparison: both sides then go through the browser's own parse. The live nesting is asserted on its own. */
function browserParse(root: Element): Element {
  const tpl = document.createElement('template');
  tpl.innerHTML = root.outerHTML;
  const parsed = tpl.content.firstElementChild;
  if (!parsed) throw new Error('nothing parsed');
  return parsed;
}

function Where() {
  return <p data-testid="where">{useLocation().pathname}</p>;
}
const renderMenu = (props: BottomBarMenuProps) =>
  render(
    <MemoryRouter initialEntries={['/UBTConnect/Start']}>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <BottomBarMenu {...props} />
              <Where />
            </>
          }
        />
      </Routes>
    </MemoryRouter>,
  );
const clickLabel = (label: string) => {
  const link = screen.getByText(label).closest('a');
  if (!link) throw new Error(`no link for ${label}`);
  fireEvent.click(link);
};
const where = () => screen.getByTestId('where').textContent;

describe('BottomBarMenu', () => {
  afterEach(() => {
    for (const f of ['C2EnableC1DirectoryView', 'C2NewBookmarks', 'mobileDirectoryBookmarkNote'] as const)
      setFlag(f, null);
  });

  testCapturedVariants(capturedStories, captures);

  it('V2 matches __captures__/v2.html (HomeFeed/default) through the browser parse', () => {
    const { container } = render(<V2 />);
    const root = container.firstElementChild;
    if (!root) throw new Error('nothing rendered');
    expectToMatchCapture(browserParse(root), captures['./__captures__/v2.html'] ?? '');
  });

  it('V2 keeps the captured live nesting: five item links, the Updates badge link inside item link 3', () => {
    const captured = captures['./__captures__/v2.html'] ?? '';
    // Capture text (not parsed): item 3 opens its link, then App_IconBadge, then the inner link, before item 4.
    const item3 = captured.indexOf('id="b12-l1-67_2-$b2"');
    const item4 = captured.indexOf('id="b12-l1-67_3-$b2"');
    const opening = captured.lastIndexOf('<a class="" data-link=""', item3);
    const badge = captured.indexOf('data-block="App_Common_Blocks.App_IconBadge"', item3);
    const inner = captured.indexOf('<a data-link=""', badge);
    expect([opening < item3, item3 < badge, badge < inner, inner < item4]).toEqual([true, true, true, true]);

    const { container } = render(<V2 />);
    const links = container.querySelectorAll('.bottom-bar .list > a');
    expect(links).toHaveLength(5);
    const updates = links[2];
    expect(updates?.querySelector(':scope > [data-block="Navigation.BottomBarItem"]')).not.toBeNull();
    expect(
      updates?.querySelector(
        '[data-block="App_Common_Blocks.App_IconBadge"] a > [data-block="OutSystemsUIOverrides.IconBadge"]',
      ),
    ).not.toBeNull();
  });

  it('navigates to each item destination (flags at their TST defaults)', () => {
    setClientVar('UBTConnect.Directory_Updates_UnreadCount_LastCheck', new Date().toISOString().slice(0, 19));
    renderMenu({ activeItem: I.Updates, isRootPage: true });
    clickLabel('Home');
    expect(where()).toBe('/UBTConnect/HomeFeed');
    clickLabel('Directory');
    expect(where()).toBe('/UBTConnect/CountryList');
    clickLabel('Bookmarks');
    expect(where()).toBe('/UBTConnect/MyBookmarks');
    clickLabel('Menu');
    expect(where()).toBe('/UBTConnect/Menu');
  });

  it('flag branches: Locality_Details, New_MyBookmarks, Bookmarks; an active root item scrolls instead', () => {
    setFlag('C2EnableC1DirectoryView', 'off');
    setFlag('mobileDirectoryBookmarkNote', 'on');
    renderMenu({ activeItem: I.Home, isRootPage: true });
    clickLabel('Directory');
    expect(where()).toBe('/UBTConnect/Locality_Details');
    clickLabel('Bookmarks');
    expect(where()).toBe('/UBTConnect/New_MyBookmarks');
    setFlag('C2NewBookmarks', 'on');
    clickLabel('Bookmarks');
    expect(where()).toBe('/UBTConnect/Bookmarks');
    const scroll = vi.fn();
    const screenEl = document.createElement('div');
    screenEl.className = 'active-screen';
    screenEl.scroll = scroll;
    document.body.appendChild(screenEl);
    clickLabel('Home');
    expect(scroll).toHaveBeenCalledWith({ top: 0, behavior: 'instant' });
    expect(where()).toBe('/UBTConnect/Bookmarks');
    screenEl.remove();
  });

  it('OnReady refreshes the unread updates count when the last check is older than the frequency', async () => {
    setClientVar('UBTConnect.Directory_Updates_UnreadCount_LastCheck', NO_DATE);
    renderMenu({ activeItem: I.Home });
    await waitFor(() => {
      expect(getClientVar('UBTConnect.Directory_Updates_UnreadCount_LastCheck')).not.toBe(NO_DATE);
    });
  });

  it('OnParametersChanged (not on the first render): refreshes the bottom bar slider once', () => {
    const slider = vi.fn();
    window.addEventListener('dx-navigation-transition-start', slider);
    const ui = (activeItem: string) => (
      <MemoryRouter>
        <BottomBarMenu activeItem={activeItem} />
      </MemoryRouter>
    );
    const { rerender, container } = render(ui(I.Home));
    expect(slider).not.toHaveBeenCalled();
    rerender(ui(I.Menu));
    expect(slider).toHaveBeenCalledTimes(1);
    expect(container.querySelector('a.active')).toHaveTextContent('Menu');
    window.removeEventListener('dx-navigation-transition-start', slider);
  });

  it('useMapsItems renders the maps menu as NotCaptured', () => {
    renderMenu({ useMapsItems: true });
    expect(screen.getByText(/useMapsItems/)).toBeInTheDocument();
  });
});
