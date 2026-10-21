import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Card_Template } from './Card_Template';
import * as stories from './Card_Template.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Card_Template', () => {
  testCapturedVariants(stories, captures);

  it('Break milestone: the title container gets margin-bottom 0px', () => {
    const { container } = render(<Card_Template inMainColorVar="orange" inMilestoneTypeId="break" />);
    expect(container.querySelector('.orbit-card-title-cont')).toHaveStyle({ marginBottom: '0px' });
    expect(container.querySelector('.orbit-card-right-cont')?.getAttribute('style')).toBe(
      'color: var(--orbit-orange-10);',
    );
  });

  it('click on the card frame raises OnClick once; inside a placeholder twice (no stopPropagation, as the original)', () => {
    const onClick = vi.fn();
    const { container } = render(<Card_Template placeholderTitle={<span>Breakfast</span>} onOnClick={onClick} />);
    fireEvent.click(container.querySelector('.orbit-card-cont') as Element);
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Breakfast'));
    expect(onClick).toHaveBeenCalledTimes(3);
  });
});
