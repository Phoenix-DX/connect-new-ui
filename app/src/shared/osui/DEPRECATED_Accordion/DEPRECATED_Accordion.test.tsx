import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { DEPRECATED_AccordionItem } from '@/shared/osui/DEPRECATED_AccordionItem';
import { DEPRECATED_Accordion } from './DEPRECATED_Accordion';
import * as stories from './DEPRECATED_Accordion.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const items = (open: boolean[]) =>
  open.map((isExpanded, i) => (
    <DEPRECATED_AccordionItem key={i} isExpanded={isExpanded} title={`Day ${String(i + 1)}`} content="Programme" />
  ));
const openItems = (container: HTMLElement) =>
  [...container.querySelectorAll('.section-expandable')].map((s) => s.classList.contains('is--open'));

describe('DEPRECATED_Accordion', () => {
  testCapturedVariants(stories, captures);

  it('items placed directly in the accordion: OnReady closes all open items but the first; opening one closes the others', () => {
    const { container } = render(<DEPRECATED_Accordion>{items([true, true, false])}</DEPRECATED_Accordion>);
    expect(openItems(container)).toEqual([true, false, false]);
    const titles = container.querySelectorAll('.section-expandable-title');
    if (titles[2]) fireEvent.click(titles[2]);
    expect(openItems(container)).toEqual([false, false, true]);
  });

  it('MultipleItems: items stay open together', () => {
    const { container } = render(
      <DEPRECATED_Accordion multipleItems>{items([true, true, false])}</DEPRECATED_Accordion>,
    );
    expect(openItems(container)).toEqual([true, true, false]);
  });

  it('items inside a container (as Accordion_Orbit places them) are not reached by the close-others selector', () => {
    const { container } = render(
      <DEPRECATED_Accordion>
        <div>{items([true, false])}</div>
      </DEPRECATED_Accordion>,
    );
    const titles = container.querySelectorAll('.section-expandable-title');
    if (titles[1]) fireEvent.click(titles[1]);
    expect(openItems(container)).toEqual([true, true]);
  });

  it('OnParametersChanged hands MultipleItems to the items (DEPRECATED_UpdateAccordion)', () => {
    const { container, rerender } = render(
      <DEPRECATED_Accordion multipleItems>{items([false, false])}</DEPRECATED_Accordion>,
    );
    rerender(<DEPRECATED_Accordion>{items([false, false])}</DEPRECATED_Accordion>);
    expect(container.querySelector('.accordion')?.getAttribute('data-multiple-items')).toBe('False');
    const titles = container.querySelectorAll('.section-expandable-title');
    if (titles[0]) fireEvent.click(titles[0]);
    if (titles[1]) fireEvent.click(titles[1]);
    expect(openItems(container)).toEqual([false, true]);
  });
});
