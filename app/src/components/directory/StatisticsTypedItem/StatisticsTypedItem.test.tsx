import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { StatisticsTypedItem } from './StatisticsTypedItem';
import * as stories from './StatisticsTypedItem.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const container = (root: HTMLElement) => root.querySelector('.ubt-custom-container');

describe('Statistics_TypedItem', () => {
  testCapturedVariants(stories, captures);

  it('In_HideBorder sets the border size None; In_HideNavigation removes the chevron', () => {
    const { container: root } = render(
      <StatisticsTypedItem uICountryStatistics={{ Name: 'X' }} inHideBorder inHideNavigation />,
    );
    expect(container(root)?.classList.contains('border-none')).toBe(true);
    expect(container(root)?.classList.contains('border-s')).toBe(false);
    expect(root.querySelector('.connect-icon-chevron_right')).toBeNull();
  });

  it('shows the image only with an ImageURL or In_HasImage', () => {
    const { container: root, rerender } = render(<StatisticsTypedItem uICountryStatistics={{ Name: 'X' }} />);
    const image = () => root.querySelector('[data-block="CW_Image.UBT_LazyImage"]');
    expect(image()).toBeNull();
    expect(root.querySelector('.ubt-columns--left')?.children).toHaveLength(0);
    rerender(<StatisticsTypedItem uICountryStatistics={{ Name: 'X' }} inHasImage />);
    expect(image()).not.toBeNull();
  });
});
