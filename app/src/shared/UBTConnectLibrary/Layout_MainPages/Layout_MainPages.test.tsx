import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setSignedInUser } from '@/platform/session/session';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Layout_MainPages } from './Layout_MainPages';
import * as stories from './Layout_MainPages.stories';

const scroll = vi.hoisted(() => ({ callback: undefined as ((isHeaderScrolled: boolean) => void) | undefined }));
vi.mock('@/shared/UBTConnectLibrary/lib/actions', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/shared/UBTConnectLibrary/lib/actions')>();
  return {
    ...actual,
    setMainScroll: (cb: (isHeaderScrolled: boolean) => void) => {
      scroll.callback = cb;
      return actual.setMainScroll(cb);
    },
  };
});

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Layout_MainPages', () => {
  afterEach(() => {
    setSignedInUser(null);
  });

  testCapturedVariants(stories, captures);

  it('accessibility / extended classes; AddHeaderGap False: no gutter in the search row', () => {
    const { container } = render(
      <MemoryRouter>
        <Layout_MainPages enableAccessibilityFeatures extendedClass="extra" addHeaderGap={false} />
      </MemoryRouter>,
    );
    const wrapper = container.querySelector('.ubt-layout-main');
    expect(wrapper).toHaveClass('extra', 'has-accessible-features');
    expect(wrapper?.querySelector('.skip-nav')?.getAttribute('data-showskipcontent')).toBe('true');
    const search = container.querySelector('.ubt-layout-main__search .columns2');
    const title = container.querySelector('.ubt-layout-main__title .columns2');
    expect(search?.className).not.toBe(title?.className);
  });

  it('SetMainScroll callback: OnHeaderScrolled and the PrimaryGradientRadial background on the header content', () => {
    const onScrolled = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <Layout_MainPages onOnHeaderScrolled={onScrolled} />
      </MemoryRouter>,
    );
    const content = container.querySelector('.header-top-content');
    expect(content).not.toHaveClass('background-primary-gradient-radial');
    act(() => {
      scroll.callback?.(true);
    });
    expect(onScrolled).toHaveBeenCalledWith(true);
    expect(content).toHaveClass('header-top-content', 'ph', 'background-primary-gradient-radial');
    act(() => {
      scroll.callback?.(false);
    });
    expect(content).not.toHaveClass('background-primary-gradient-radial');
  });

  it('UsePullToRefresh renders the OutSystems UI PullToRefresh', () => {
    const { container } = render(
      <MemoryRouter>
        <Layout_MainPages usePullToRefresh />
      </MemoryRouter>,
    );
    expect(container.querySelector('[data-block="Private.PullToRefresh"]')).not.toBeNull();
  });
});
