import { render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { setSignedInUser } from '@/platform/session/session';
import { testCapturedVariants } from '@/test/capturedVariants';
import { BaseLayout } from './BaseLayout';
import * as stories from './BaseLayout.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('BaseLayout_UpdatedOSUI', () => {
  afterEach(() => {
    setSignedInUser(null);
  });

  testCapturedVariants(stories, captures);

  it('hide-header-on-scroll adds the class and the sticky observer; a transparent header drops the custom class', () => {
    const { container } = render(
      <BaseLayout hideHeaderOnScroll isHeaderTransparent customClass="dark" menuBehavior="aside-x" />,
    );
    const wrapper = container.querySelector('.layout');
    expect(wrapper?.className).toBe('layout layout-side layout-native ios-bounce hide-header-on-scroll aside-x');
    expect(container.querySelector('.sticky-observer')?.getAttribute('aria-hidden')).toBe('true');
    expect(container.querySelector('header')?.className).toBe('header transparent');
    expect(container.querySelector('.content')).toHaveClass('dark');
  });
});
