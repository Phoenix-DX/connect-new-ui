import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setSignedInUser } from '@/platform/session/session';
import { testCapturedVariants } from '../../test/capturedVariants';
import { UBT_Color } from '../lib/staticEntities';
import { Layout_HomePage } from './Layout_HomePage';
import * as stories from './Layout_HomePage.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Layout_HomePage', () => {
  afterEach(() => {
    setSignedInUser(null);
  });

  testCapturedVariants(stories, captures);

  it('OnReadyEvent gets the ContentWrapper id; search clicks raise OnSearchClick; pull to refresh; a11y class', () => {
    const onReady = vi.fn();
    const onSearch = vi.fn();
    const { container } = render(
      <Layout_HomePage
        id="$b1"
        usePullToRefresh
        enableAccessibilityFeatures
        contentBackgroundColor={UBT_Color.Neutral0}
        onOnReadyEvent={onReady}
        onOnSearchClick={onSearch}
      />,
    );
    expect(onReady).toHaveBeenCalledWith('b1-ContentWrapper');
    expect(container.querySelector('#b1-LayoutWrapper_Home')).toHaveClass('has-accessible-features');
    expect(container.querySelector('#b1-LayoutWrapper_Home')?.getAttribute('style')).toContain(
      '--current-svg-height: 260px',
    );
    expect(container.querySelector('[data-block="Private.PullToRefresh"]')).not.toBeNull();
    expect(container.querySelector('#b1-ContentWrapper')).toHaveClass('content', 'background-neutral-0');
    fireEvent.click(screen.getByText('Search for households. entities, news'));
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('scrolling past the SVG header adds the gradient to the header and raises OnSVGScrolled', () => {
    const frames: FrameRequestCallback[] = [];
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => frames.push(cb));
    const screenEl = document.createElement('div');
    screenEl.className = 'active-screen';
    document.body.appendChild(screenEl);
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(100);
    const onSvg = vi.fn();
    const { container } = render(<Layout_HomePage id="$b1" onOnSVGScrolled={onSvg} />, {
      container: screenEl.appendChild(document.createElement('div')),
    });
    screenEl.scrollTop = 150;
    screenEl.dispatchEvent(new Event('scroll'));
    act(() => {
      for (const cb of frames.splice(0)) cb(0);
    });
    expect(onSvg).toHaveBeenCalledWith(true);
    expect(container.querySelector('header')).toHaveClass('header', 'background-primary-gradient-radial');
    screenEl.remove();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });
});
