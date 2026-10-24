import { act, render } from '@testing-library/react';
import { createElement } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  appPathOf,
  changeWindowLocation,
  jSUtils_AddClass,
  jSUtils_SetStyleProperty,
  useScreenController_NavigateToPage,
  type ScreenController_NavigateToPage,
  jSUtils_CopyToClipboard,
  jSUtils_String_Split,
} from './jsUtils';

describe('UBTJavaScriptUtils actions', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('set a style property and add a class on the element with the id', () => {
    document.body.innerHTML = '<div id="target"></div>';
    jSUtils_SetStyleProperty('target', '--x', '4px');
    jSUtils_AddClass('extra', 'target');
    const el = document.getElementById('target');
    expect(el?.style.getPropertyValue('--x')).toBe('4px');
    expect(el).toHaveClass('extra');
  });

  it('do nothing without the element', () => {
    expect(() => {
      jSUtils_SetStyleProperty('missing', '--x', '4px');
      jSUtils_AddClass('extra', 'missing');
    }).not.toThrow();
  });
});

describe('ScreenController_NavigateToPage (CR-Splash-2)', () => {
  it('turns an href of this origin or an app path into the in-app path; another origin gives null', () => {
    const origin = window.location.origin;
    expect(appPathOf(`${origin}/UBTConnect/Profile?Id=7#top`)).toBe('/UBTConnect/Profile?Id=7#top');
    expect(appPathOf('/UBTConnect/Notes')).toBe('/UBTConnect/Notes');
    expect(appPathOf('https://elsewhere.example.com/UBTConnect/Notes')).toBeNull();
  });

  it('navigates through the shell navigation, replacing the entry when asked', async () => {
    let navigateToPage: ScreenController_NavigateToPage = () => undefined;
    function Probe() {
      navigateToPage = useScreenController_NavigateToPage();
      return null;
    }
    const router = createMemoryRouter([{ path: '*', element: createElement(Probe) }], {
      initialEntries: ['/UBTConnect/Splash'],
    });
    render(createElement(RouterProvider, { router }));

    await act(async () => {
      navigateToPage(`${window.location.origin}/UBTConnect/Profile?Id=7`, true);
      await Promise.resolve();
    });
    expect(router.state.location.pathname + router.state.location.search).toBe('/UBTConnect/Profile?Id=7');
    expect(router.state.historyAction).toBe('REPLACE');

    await act(async () => {
      navigateToPage('/UBTConnect/Notes', false);
      await Promise.resolve();
    });
    expect(router.state.location.pathname).toBe('/UBTConnect/Notes');
    expect(router.state.historyAction).toBe('PUSH');
  });

  it('another origin: changeWindowLocation sets location.href, with or without ReplaceInHistory (OutSystems.js:8:698)', async () => {
    const fake = { href: 'http://localhost/UBTConnect/Splash' };
    changeWindowLocation('https://other.example/page', fake);
    expect(fake.href).toBe('https://other.example/page');
    let navigateToPage: ScreenController_NavigateToPage = () => undefined;
    function Probe() {
      navigateToPage = useScreenController_NavigateToPage();
      return null;
    }
    const router = createMemoryRouter([{ path: '*', element: createElement(Probe) }], {
      initialEntries: ['/UBTConnect/Splash'],
    });
    render(createElement(RouterProvider, { router }));
    const before = window.location.href;
    await act(async () => {
      navigateToPage('https://other.example/page', true);
      await Promise.resolve();
    });
    // jsdom does not navigate; the router is left alone and location.replace is never the path taken.
    expect(router.state.location.pathname).toBe('/UBTConnect/Splash');
    expect(window.location.href).toBe(before);
  });
});

describe('JSUtils_CopyToClipboard and JSUtils_String_Split', () => {
  it('copies with navigator.clipboard; a missing clipboard ends as a rejection', async () => {
    const writeText = vi.fn(() => Promise.resolve());
    vi.stubGlobal('navigator', { clipboard: { writeText } });
    await jSUtils_CopyToClipboard('1 Harbour Street');
    expect(writeText).toHaveBeenCalledWith('1 Harbour Street');
    vi.stubGlobal('navigator', { clipboard: undefined });
    await expect(jSUtils_CopyToClipboard('x')).rejects.toBeInstanceOf(TypeError);
    vi.unstubAllGlobals();
  });
  it('splits like String.split', () => {
    expect(jSUtils_String_Split('a b  c', ' ')).toEqual(['a', 'b', '', 'c']);
  });
});
