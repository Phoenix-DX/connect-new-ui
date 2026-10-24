import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import accordionV1 from '@/components/ui/legacy/LegacyAccordion/__captures__/v1.html?raw';
import accordionV2 from '@/components/ui/legacy/LegacyAccordion/__captures__/v2.html?raw';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { OrbitAccordion } from './OrbitAccordion';
import * as stories from './OrbitAccordion.stories';

/* Stories with a capture; the others have their own tests. */
const capturedStories = { default: stories.default, V1: stories.V1 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1, MilestoneRooms } = composeStories(stories);
const inner = (container: HTMLElement) => container.querySelector('[data-block="Content.DEPRECATED_Accordion"]');

describe('Accordion_Orbit', () => {
  testCapturedVariants(capturedStories, captures);

  it('passes its classes and MultipleItems to DEPRECATED_Accordion as captured (EventDetail, MilestoneDetail)', () => {
    expectToMatchCapture(inner(render(<V1 />).container), accordionV1);
    expectToMatchCapture(inner(render(<MilestoneRooms />).container), accordionV2);
  });

  it('defaults: plain orbit-accordion, one item at a time', () => {
    const el = inner(render(<OrbitAccordion />).container)?.firstElementChild;
    expect(el?.className).toBe('osui-deprecated accordion orbit-accordion');
    expect(el?.getAttribute('data-multiple-items')).toBe('False');
  });
});
