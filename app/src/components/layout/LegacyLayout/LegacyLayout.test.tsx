import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setSignedInUser } from '@/platform/session/session';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/test/capturedVariants';
import baseV1 from '@/components/layout/BaseLayout/__captures__/v1.html?raw';
import { LegacyLayout } from './LegacyLayout';
import * as stories from './LegacyLayout.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Layout', () => {
  afterEach(() => {
    setSignedInUser(null);
  });

  testCapturedVariants(stories, captures);

  it('passes its inputs and placeholder containers to BaseLayout_UpdatedOSUI as captured (ConnectShare/default)', () => {
    const { V1 } = composeStories(stories);
    const { container } = render(<V1 />);
    expectToMatchCapture(container.querySelector('[data-block="Layout.BaseLayout_UpdatedOSUI"]'), baseV1);
  });

  it('OnInitialize sets the connect-theme body class (SetThemeClassToBody); off iOS OnReady adds no meta tag', () => {
    document.body.classList.add('orbit-theme');
    const metas = document.getElementsByTagName('meta').length;
    render(<LegacyLayout />);
    expect(document.body).toHaveClass('connect-theme');
    expect(document.body).not.toHaveClass('orbit-theme');
    expect(document.getElementsByTagName('meta')).toHaveLength(metas);
  });

  it('on iOS OnReady sets the viewport meta and cancels touches near the screen edges of #reactContainer', () => {
    vi.spyOn(Navigator.prototype, 'platform', 'get').mockReturnValue('iPhone');
    const root = document.body.appendChild(document.createElement('div'));
    root.id = 'reactContainer';
    render(<LegacyLayout />, { container: root.appendChild(document.createElement('div')) });
    expect(document.querySelector('meta[name="viewport"]')?.getAttribute('content')).toBe(
      'viewport-fit=cover, width=device-width, initial-scale=1.0, \r\nminimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
    );
    const touch = (pageX: number) => {
      const event = new Event('touchstart', { cancelable: true });
      Object.defineProperty(event, 'pageX', { value: pageX });
      root.dispatchEvent(event);
      return event.defaultPrevented;
    };
    expect(touch(5)).toBe(true);
    expect(touch(window.innerWidth / 2)).toBe(false);
    expect(touch(window.innerWidth - 5)).toBe(true);
    root.remove();
  });
});
