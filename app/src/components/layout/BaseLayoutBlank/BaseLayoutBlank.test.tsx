import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BaseLayoutBlank } from './BaseLayoutBlank';

describe('BaseLayoutBlank', () => {
  it('renders main screen, content and main-content with the content and the CommonUI placeholders', () => {
    const { container } = render(<BaseLayoutBlank id="b2-$b2" content={<p>Body</p>} commonUI={<span>UI</span>} />);
    const wrapper = container.querySelector('[data-block="Layout.BaseLayoutBlank_UpdatedOSUI"] > #b2-b2-LayoutWrapper');
    expect(wrapper?.className).toBe('layout layout-side layout-native ios-bounce');
    const main = wrapper?.querySelector('.main.screen > .content > .main-content.ThemeGrid_Container');
    expect(main?.getAttribute('role')).toBe('main');
    expect(main?.querySelector('.content-middle')?.textContent).toBe('Body');
    expect(wrapper?.querySelector(':scope > #b2-b2-CommonUI')?.textContent).toBe('UI');
  });
});
