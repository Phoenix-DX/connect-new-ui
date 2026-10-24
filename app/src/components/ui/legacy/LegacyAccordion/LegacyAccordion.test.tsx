import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { SectionExpandable } from '@/components/ui/legacy/SectionExpandable';
import { LegacyAccordion } from './LegacyAccordion';
import * as stories from './LegacyAccordion.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const items = (open: boolean[]) =>
  open.map((isExpanded, i) => (
    <SectionExpandable key={i} isExpanded={isExpanded} title={`Day ${String(i + 1)}`} content="Programme" />
  ));
const openItems = (container: HTMLElement) =>
  [...container.querySelectorAll('.section-expandable')].map((s) => s.classList.contains('is--open'));

describe('DEPRECATED_Accordion', () => {
  testCapturedVariants(stories, captures);

  it('items placed directly in the accordion: OnReady closes all open items but the first; opening one closes the others', () => {
    const { container } = render(<LegacyAccordion>{items([true, true, false])}</LegacyAccordion>);
    expect(openItems(container)).toEqual([true, false, false]);
    const titles = container.querySelectorAll('.section-expandable-title');
    if (titles[2]) fireEvent.click(titles[2]);
    expect(openItems(container)).toEqual([false, false, true]);
  });

  it('MultipleItems: items stay open together', () => {
    const { container } = render(<LegacyAccordion multipleItems>{items([true, true, false])}</LegacyAccordion>);
    expect(openItems(container)).toEqual([true, true, false]);
  });

  it('items inside a container (as Accordion_Orbit places them) are not reached by the close-others selector', () => {
    const { container } = render(
      <LegacyAccordion>
        <div>{items([true, false])}</div>
      </LegacyAccordion>,
    );
    const titles = container.querySelectorAll('.section-expandable-title');
    if (titles[1]) fireEvent.click(titles[1]);
    expect(openItems(container)).toEqual([true, true]);
  });

  it('OnParametersChanged hands MultipleItems to the items (DEPRECATED_UpdateAccordion)', () => {
    const { container, rerender } = render(<LegacyAccordion multipleItems>{items([false, false])}</LegacyAccordion>);
    rerender(<LegacyAccordion>{items([false, false])}</LegacyAccordion>);
    expect(container.querySelector('.accordion')?.getAttribute('data-multiple-items')).toBe('False');
    const titles = container.querySelectorAll('.section-expandable-title');
    if (titles[0]) fireEvent.click(titles[0]);
    if (titles[1]) fireEvent.click(titles[1]);
    expect(openItems(container)).toEqual([false, true]);
  });
});
