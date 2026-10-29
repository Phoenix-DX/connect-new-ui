import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MainPagesUpgradeLayout } from './MainPagesUpgradeLayout';

const WRAPPER =
  'layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title mainpage-upgrade-container';

describe('Layout_MainPages_Upgrade', () => {
  it('gray background, placeholders in their slots, the back arrow calls onBack', () => {
    const onBack = vi.fn();
    const { container } = render(
      <MainPagesUpgradeLayout
        isGrayBackground
        onBack={onBack}
        placeholderHeaderTitle="Notifications"
        content={<p>Body</p>}
        bottom={<p>Bar</p>}
      />,
    );
    expect(container.querySelector('#b1-LayoutWrapper_Main')?.className).toBe(`${WRAPPER} layout-gray-background`);
    expect(container.querySelector('#b1-Placeholder_Header_Title')?.textContent).toBe('Notifications');
    expect(container.querySelector('#b1-Content')?.textContent).toBe('Body');
    expect(container.querySelector('#b1-Bottom')?.textContent).toBe('Bar');
    const back = container.querySelector('.connect-icon-arrow_left_alt');
    if (!back) throw new Error('no back arrow');
    fireEvent.click(back);
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('no gray background by default', () => {
    const { container } = render(<MainPagesUpgradeLayout />);
    expect(container.querySelector('#b1-LayoutWrapper_Main')?.className).toBe(WRAPPER);
  });
});
