import { render } from '@testing-library/react';
import type { Location } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import { createBackEvent, resetBackQueue, runBackHandlers } from '../../../shell/navigation/backQueue';
import { UnsupportedVersion_Wrapper } from './UnsupportedVersion_Wrapper';

const location: Location = { pathname: '/UBTConnect/Login', search: '', hash: '', state: null, key: 'k' };

describe('UnsupportedVersion_Wrapper', () => {
  afterEach(() => {
    resetBackQueue();
    sessionStorage.removeItem('mock:mock');
    window.history.replaceState(null, '', '/');
  });

  it('is empty when every version is supported (TST)', () => {
    const { container } = render(<UnsupportedVersion_Wrapper />);
    expect(container.firstElementChild).toHaveAttribute('data-block', 'App_Common.UnsupportedVersion_Wrapper');
    expect(container.firstElementChild?.childNodes).toHaveLength(0);
    expect(runBackHandlers(createBackEvent(location, false, () => undefined))).toBe(false);
  });

  it('shows the browser card and prevents back in the unsupported-browser scenario', () => {
    window.history.replaceState(null, '', '/UBTConnect/Login?mock=unsupported-browser');
    const { container } = render(<UnsupportedVersion_Wrapper />);
    const blocks = [...(container.firstElementChild?.children ?? [])].map((el) => el.getAttribute('data-block'));
    expect(blocks).toEqual(['BasePatterns.CustomContainer', 'NavigationHandler.PreventBackNavigation']);
    const padding = container.querySelector('.ubt-custom-container');
    expect(padding?.querySelector('[data-block="App_Common.UnsupportedVersion_Browser"]')).not.toBeNull();
    expect(runBackHandlers(createBackEvent(location, false, () => undefined))).toBe(true);
  });
});
