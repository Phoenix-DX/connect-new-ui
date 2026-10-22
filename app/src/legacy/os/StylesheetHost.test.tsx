import { act, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { beforeEach, expect, test } from 'vitest';
import { ROUTE_CSS } from '@/app/routes.css.generated';
import { notifyScreenTransitionEnd } from '@/platform/navigation/transitionEvents';
import { CSS_PATH, StylesheetHost, stylesheetsOf, syncStylesheets } from './StylesheetHost';

const HOME_FEED = ROUTE_CSS.HomeFeed ?? [];
const MESSAGE_LIST = ROUTE_CSS.MessageList ?? [];
const THEMES = [
  'Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css',
  'Connect2_LegacyShared.ConnectMobileCommonTheme.css',
  'Connect2_LegacyShared.OrbitTheme.css',
  'Connect2_LegacyShared.AssembleTheme.css',
  'Connect2_LegacyShared.ConnectMobile.css',
  'Connect2_LegacyShared.UBTConnect_LegacyChain.css',
];

const originalLinks = () => [...document.head.querySelectorAll<HTMLLinkElement>(`link[href^="${CSS_PATH}"]`)];
const files = () => originalLinks().map((l) => (l.getAttribute('href') ?? '').slice(CSS_PATH.length));
const byFile = () => new Map(originalLinks().map((l) => [l.getAttribute('href'), l]));
const loadAll = () => {
  for (const l of originalLinks()) l.dispatchEvent(new Event('load'));
};

beforeEach(() => {
  document.head.innerHTML = '<meta charset="UTF-8"><style id="clone-styles"></style>';
});

test('the generated sets match the TST observation for HomeFeed and MessageList', () => {
  expect(HOME_FEED[0]).toBe('_Basic.css');
  expect(HOME_FEED.at(-1)).toBe('OutSystemsUI_2_23.OutSystemsUI.extra.css');
  expect(HOME_FEED).toContain('UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.css');
  expect(MESSAGE_LIST).not.toContain('UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.css');
  const base = MESSAGE_LIST.indexOf('Connect2_LegacyShared.UBTConnect.css');
  expect(MESSAGE_LIST.slice(base + 1, base + 1 + THEMES.length)).toEqual(THEMES);
});

test('a route path picks its screen set; unknown paths and the module root get the HomeFeed set', () => {
  expect(stylesheetsOf('/UBTConnect/MessageList')).toBe(MESSAGE_LIST);
  expect(stylesheetsOf('/UBTConnect/messagelist/')).toBe(MESSAGE_LIST);
  expect(stylesheetsOf('/UBTConnect/')).toBe(HOME_FEED);
  expect(stylesheetsOf('/nowhere')).toBe(HOME_FEED);
});

test('the first sync inserts the set in order, before the clone styles', () => {
  syncStylesheets(document.head, HOME_FEED);
  expect(files()).toEqual(HOME_FEED);
  expect(document.head.lastElementChild?.id).toBe('clone-styles');
});

test('HomeFeed → MessageList → HomeFeed keeps shared links, adds and removes the others at their position', () => {
  syncStylesheets(document.head, HOME_FEED);
  const before = byFile();

  syncStylesheets(document.head, MESSAGE_LIST);
  expect(files()).toEqual(MESSAGE_LIST);
  const after = byFile();
  for (const [href, link] of after) {
    if (before.has(href)) expect(link).toBe(before.get(href)); // same element: no reload
  }
  expect(after.has(`${CSS_PATH}UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.css`)).toBe(false);

  syncStylesheets(document.head, HOME_FEED);
  expect(files()).toEqual(HOME_FEED);
  expect(byFile().get(`${CSS_PATH}_Basic.css`)).toBe(before.get(`${CSS_PATH}_Basic.css`));
});

test('links in a different order are reordered (Profile → HouseholdDetails block order)', () => {
  syncStylesheets(document.head, ['_Basic.css', 'b.css', 'a.css', 'c.css']);
  const basic = byFile().get(`${CSS_PATH}_Basic.css`);
  syncStylesheets(document.head, ['_Basic.css', 'a.css', 'new.css', 'b.css', 'c.css']);
  expect(files()).toEqual(['_Basic.css', 'a.css', 'new.css', 'b.css', 'c.css']);
  expect(byFile().get(`${CSS_PATH}_Basic.css`)).toBe(basic);
  syncStylesheets(document.head, ['z.css', 'c.css']);
  expect(files()).toEqual(['z.css', 'c.css']);
});

test('the host renders only after the first set has loaded, then follows route changes', async () => {
  const router = createMemoryRouter(
    [
      {
        path: '*',
        element: (
          <StylesheetHost>
            <p>screen</p>
          </StylesheetHost>
        ),
      },
    ],
    { initialEntries: ['/UBTConnect/HomeFeed'] },
  );
  render(<RouterProvider router={router} />);
  expect(files()).toEqual(HOME_FEED);
  expect(screen.queryByText('screen')).toBeNull();

  act(loadAll);
  expect(await screen.findByText('screen')).toBeInTheDocument();

  await act(() => router.navigate('/UBTConnect/MessageList'));
  // CSSHelper (F18): the new set is added at once, the leaving screen's other files stay until the TransitionEnd
  expect(files().filter((f) => MESSAGE_LIST.includes(f))).toEqual(MESSAGE_LIST);
  expect(files()).toEqual(expect.arrayContaining([...HOME_FEED]));
  expect(screen.getByText('screen')).toBeInTheDocument();
  await act(async () => {
    notifyScreenTransitionEnd();
    await new Promise((r) => setTimeout(r, 0));
  });
  expect(files()).toEqual(MESSAGE_LIST);
});
