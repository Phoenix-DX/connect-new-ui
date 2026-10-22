import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { DetailLayout } from './DetailLayout';

describe('DetailLayout', () => {
  it('places the title, the content, the bottom bar and the CommonUI part; the back arrow calls onBack', () => {
    const onBack = vi.fn();
    const onReady = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <DetailLayout
          id="$b1"
          isPrimaryColor={false}
          headerTitle={<span>Title</span>}
          content={<p>Content</p>}
          bottom={<nav>Bottom</nav>}
          commonUI={<aside>Common</aside>}
          onBack={onBack}
          onReady={onReady}
        />
      </MemoryRouter>,
    );
    const wrapper = container.querySelector('#b1-LayoutWrapper_Detail');
    expect(wrapper).toHaveClass('ubt-layout-detail');
    expect(wrapper).not.toHaveClass('ubt-layout-detail--primary');
    expect(container.querySelector('.header-title.text-align-center')?.textContent).toBe('Title');
    expect(container.querySelector('.content-middle')?.textContent).toBe('Content');
    expect(container.querySelector('.footer')?.textContent).toBe('Bottom');
    expect(screen.getByText('Common').closest('#b1-LayoutWrapper_Detail')).toBeNull();
    expect(onReady).toHaveBeenCalledWith('b1-LayoutWrapper_Detail');
    const arrow = container.querySelector('.connect-icon-arrow_left_alt');
    if (!arrow) throw new Error('back arrow not rendered');
    fireEvent.click(arrow);
    expect(onBack).toHaveBeenCalledTimes(1);
  });
});
