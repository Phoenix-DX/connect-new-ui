import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BlankLayout } from './BlankLayout';

const blocks = (root: Element) =>
  Array.from(root.querySelectorAll('[data-block]')).map((e) => e.getAttribute('data-block'));

describe('BlankLayout', () => {
  it('places the content in the main area, between LayoutRuntime_Top and OfflineDataSyncEvents', () => {
    const { container } = render(<BlankLayout id="$b1" content={<p>Content</p>} />);
    const layout = container.querySelector('[data-block="App_Common.LayoutBlank"]');
    if (layout === null) throw new Error('layout not rendered');
    expect(layout.id).toBe('$b1');
    expect(layout.querySelector('.layout.layout-native.blank')).not.toBeNull();
    const main = layout.querySelector('#b1-Content');
    expect(main).toHaveAttribute('role', 'main');
    expect(main?.textContent).toBe('Content');
    expect(blocks(layout).slice(0, 2)).toEqual([
      'LayoutRuntime_NavigationHandler.LayoutRuntime_Top',
      'App_Common.OfflineDataSyncEvents',
    ]);
    expect(layout.querySelector('#b1-\\$b1')?.getAttribute('data-block')).toBe(
      'LayoutRuntime_NavigationHandler.LayoutRuntime_Top',
    );
    expect(layout.querySelector('.offline-data-sync > #b1-\\$b2')?.getAttribute('data-block')).toBe(
      'App_Common.OfflineDataSyncEvents',
    );
  });
});
