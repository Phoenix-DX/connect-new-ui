import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { AccordionItem } from '../AccordionItem';
import { Accordion } from './Accordion';
import * as stories from './Accordion.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Accordion', () => {
  testCapturedVariants(stories, captures);

  it('role list on the first .list inside (else on itself); Initialized with the block id', () => {
    vi.useFakeTimers();
    const onInitialized = vi.fn();
    const { container, rerender } = render(<Accordion id="b2-$b21" onInitialized={onInitialized} />);
    expect(container.querySelector('.osui-accordion')?.getAttribute('role')).toBe('list');
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(onInitialized).toHaveBeenCalledWith('b2-$b21');
    vi.useRealTimers();
    rerender(<span />);
    const second = render(
      <Accordion>
        <AccordionItem content={<div className="list" />} />
        <AccordionItem content={<div className="list" />} />
      </Accordion>,
    );
    const lists = second.container.querySelectorAll('.list');
    expect(lists[0]?.getAttribute('role')).toBe('list');
    expect(lists[1]?.getAttribute('role')).toBeNull();
  });

  it('MultipleItems keeps several items open; switching it to False collapses all', () => {
    const items = (
      <>
        <AccordionItem startsExpanded title="Accommodation" />
        <AccordionItem title="Meal Options" />
      </>
    );
    const { rerender } = render(<Accordion multipleItems>{items}</Accordion>);
    const [first, second] = screen.getAllByRole('button');
    if (!first || !second) throw new Error('items not rendered');
    fireEvent.click(second);
    expect(first.getAttribute('aria-expanded')).toBe('true');
    expect(second.getAttribute('aria-expanded')).toBe('true');
    rerender(<Accordion multipleItems={false}>{items}</Accordion>);
    expect(first.getAttribute('aria-expanded')).toBe('false');
    expect(second.getAttribute('aria-expanded')).toBe('false');
  });
});
