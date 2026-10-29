import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { OrbitBlankLayout } from './OrbitBlankLayout';

describe('OrbitBlankLayout', () => {
  it('nests LayoutRuntime_Top and BaseLayoutBlank_UpdatedOSUI in orbit-theme backwards-compatibility', () => {
    const { container } = render(
      <OrbitBlankLayout
        id="b1-$b1"
        extendedClasses="extra"
        content={<p>Embed</p>}
        commonUIElements={<span>Common</span>}
      />,
    );
    const layout = container.querySelector('[data-block="Layout_OrbitTheme.Layout_OrbitBlank"]');
    expect(layout?.querySelector('[data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top"]')).not.toBeNull();
    const base = layout?.querySelector(
      '.orbit-theme.backwards-compatibility > [data-block="Layout.BaseLayoutBlank_UpdatedOSUI"]',
    );
    expect(base?.querySelector('#b1-b1-b2-LayoutWrapper')?.className).toBe(
      'layout layout-side layout-native ios-bounce orbit-theme extra',
    );
    expect(base?.querySelector('.content-middle #b1-b1-Content')?.textContent).toBe('Embed');
    expect(base?.querySelector('#b1-b1-b2-CommonUI #b1-b1-CommonUI_Elements')?.textContent).toBe('Common');
  });

  it('sets the Orbit theme class on the body', () => {
    render(<OrbitBlankLayout id="b1-$b1" />);
    expect(document.body.className).toContain('orbit');
  });
});
