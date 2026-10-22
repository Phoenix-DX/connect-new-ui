import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Statistics_TypedItem } from './Statistics_TypedItem';
import * as stories from './Statistics_TypedItem.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const container = (root: HTMLElement) => root.querySelector('.ubt-custom-container');

describe('Statistics_TypedItem', () => {
  testCapturedVariants(stories, captures);

  it('In_HideBorder sets the border size None; In_HideNavigation removes the chevron', () => {
    const { container: root } = render(
      <Statistics_TypedItem uICountryStatistics={{ Name: 'X' }} inHideBorder inHideNavigation />,
    );
    expect(container(root)?.classList.contains('border-none')).toBe(true);
    expect(container(root)?.classList.contains('border-s')).toBe(false);
    expect(root.querySelector('.connect-icon-chevron_right')).toBeNull();
  });

  it('shows the image only with an ImageURL or In_HasImage', () => {
    const { container: root, rerender } = render(<Statistics_TypedItem uICountryStatistics={{ Name: 'X' }} />);
    const image = () => root.querySelector('[data-block="CW_Image.UBT_LazyImage"]');
    expect(image()).toBeNull();
    expect(root.querySelector('.ubt-columns--left')?.children).toHaveLength(0);
    rerender(<Statistics_TypedItem uICountryStatistics={{ Name: 'X' }} inHasImage />);
    expect(image()).not.toBeNull();
  });
});
