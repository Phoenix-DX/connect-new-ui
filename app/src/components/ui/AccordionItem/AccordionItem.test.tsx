import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { Accordion } from '@/components/ui/Accordion';
import { AccordionIconPosition, AccordionIconType } from '@/components/ui/lib/staticEntities';
import { AccordionItem } from './AccordionItem';
import * as stories from './AccordionItem.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('AccordionItem', () => {
  testCapturedVariants(stories, captures);

  describe('provider behaviour (OutSystemsUI.js AccordionItem)', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });
    afterEach(() => {
      vi.useRealTimers();
    });
    const item = (el: HTMLElement) => el.closest('.osui-accordion-item');
    const contentOf = (el: HTMLElement) => item(el)?.querySelector('.osui-accordion-item__content');

    it('closed by default; a title click opens it, animates the height and raises OnToggle', () => {
      const onToggle = vi.fn();
      render(<AccordionItem id="b1-$b3" title="Accommodation" content={<p>Rooms</p>} onOnToggle={onToggle} />);
      const title = screen.getByRole('button');
      expect(item(title)).toHaveClass('osui-accordion-item--is-closed');
      expect(item(title)?.getAttribute('role')).toBeNull(); // not inside an Accordion
      expect(title.getAttribute('aria-controls')).toBe('b1-b3-Content');
      expect(title.getAttribute('aria-expanded')).toBe('false');
      const content = contentOf(title);
      expect(content).toHaveClass('osui-accordion-item__content--is-collapsed');
      expect(content?.hasAttribute('inert')).toBe(true);
      fireEvent.click(title);
      expect(item(title)).toHaveClass('osui-accordion-item--is-open');
      expect(title.getAttribute('aria-expanded')).toBe('true');
      expect(content?.getAttribute('style')).toBe('height: 0px;');
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(content).toHaveClass('osui-accordion-item__content--is-animating');
      expect(onToggle).toHaveBeenCalledWith('b1-$b3', true);
      if (content) fireEvent.transitionEnd(content);
      expect(content).toHaveClass('osui-accordion-item__content--is-expanded');
      expect(content).not.toHaveClass('osui-accordion-item__content--is-animating');
      expect(content?.hasAttribute('style')).toBe(false);
    });

    it('Escape closes an open item; Enter opens it; a disabled item ignores clicks', () => {
      const { rerender } = render(<AccordionItem startsExpanded title="Meal Options" />);
      const title = screen.getByRole('button');
      fireEvent.keyDown(title, { key: 'Escape' });
      expect(title.getAttribute('aria-expanded')).toBe('false');
      fireEvent.keyDown(title, { key: 'Enter' });
      expect(title.getAttribute('aria-expanded')).toBe('true');
      rerender(<AccordionItem startsExpanded isDisabled title="Meal Options" />);
      expect(item(title)).toHaveClass('osui-accordion-item--is-disabled');
      expect(title).not.toHaveClass('osui-accordion-item__click_zone');
      expect(title.getAttribute('tabindex')).toBe('-1');
      fireEvent.click(title);
      expect(title.getAttribute('aria-expanded')).toBe('true');
    });

    it('icon type and position classes', () => {
      render(<AccordionItem icon={AccordionIconType.Custom} iconPosition={AccordionIconPosition.Left} title="T" />);
      const title = screen.getByRole('button');
      expect(title).toHaveClass('osui-accordion-item__title--is-left');
      const icons = title.querySelectorAll('.osui-accordion-item__icon');
      expect(icons[0]).toHaveClass('osui-accordion-item__icon--hidden');
      expect(icons[1]).toHaveClass('osui-accordion-item__icon--custom');
    });

    it('in an Accordion without MultipleItems opening one item closes the other', () => {
      render(
        <Accordion>
          <AccordionItem startsExpanded title="Accommodation" />
          <AccordionItem title="Meal Options" />
        </Accordion>,
      );
      const [first, second] = screen.getAllByRole('button');
      if (!first || !second) throw new Error('items not rendered');
      expect(item(first)?.getAttribute('role')).toBe('listitem');
      fireEvent.click(second);
      expect(second.getAttribute('aria-expanded')).toBe('true');
      expect(first.getAttribute('aria-expanded')).toBe('false');
    });
  });
});
