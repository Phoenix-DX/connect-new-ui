import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { TagToggle } from './TagToggle';
import * as stories from './TagToggle.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const inner = (c: HTMLElement) => c.querySelector('.ubt-custom-container') as HTMLElement;

describe('TagToggle', () => {
  testCapturedVariants(stories, captures);

  it('renders the selected classes as captured (HouseholdCarousel)', () => {
    const { container } = render(<TagToggle tag={{ Text: 'About', IsSelected: true }} />);
    expect(inner(container)).toHaveClass(
      'ubt-tag-toggle',
      'inline-block',
      'ubt-skeleton-section__element',
      'background-primary',
      'border-color-primary',
      'border-radius-rounded',
      'text-neutral-0',
      'font-semi-bold',
      'font-size-s',
    );
    expect(inner(container).querySelector('[data-expression]')).toHaveTextContent('About');
  });

  it('unselected and disabled colours; the icon variant', () => {
    const { container, rerender } = render(<TagToggle tag={{ Text: 'A', IsSelected: false }} />);
    expect(inner(container)).toHaveClass('background-neutral-0', 'border-color-neutral-5', 'text-neutral-7');
    rerender(<TagToggle tag={{ Text: 'A', IsSelected: false }} isEnabled={false} />);
    expect(inner(container)).toHaveClass('background-neutral-3', 'border-color-neutral-3', 'text-neutral-6');
    rerender(<TagToggle tag={{ Text: 'A', IconId: 'connect-icon-home' }} />);
    expect(container.querySelector('.connect-icon-home')).toHaveClass('icon-non-standard-16', 'text-neutral-0');
  });

  it('raises Event_Click with IsSelected only when enabled', () => {
    const onEventClick = vi.fn();
    const { container, rerender } = render(<TagToggle tag={{ IsSelected: false }} onEventClick={onEventClick} />);
    fireEvent.click(inner(container));
    expect(onEventClick).toHaveBeenCalledWith(false);
    rerender(<TagToggle tag={{ IsSelected: false }} isEnabled={false} onEventClick={onEventClick} />);
    fireEvent.click(inner(container));
    expect(onEventClick).toHaveBeenCalledTimes(1);
  });
});
