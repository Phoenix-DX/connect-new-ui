import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '../../../test/dom';
import templateV3 from '../Card_Template/__captures__/v3.html?raw';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Card_Event } from './Card_Event';
import * as stories from './Card_Event.stories';
import { THREE_DAY_MEETINGS } from './fixtures';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const template = (container: HTMLElement) => container.querySelector('[data-block="Orbit_Blocks.Card_Template"]');

describe('Card_Event', () => {
  testCapturedVariants(stories, captures);

  it('V1: the nested Card_Template matches its OrbitLanding capture (Card_Template v3)', () => {
    const { container } = render(<Card_Event inEventSummary={THREE_DAY_MEETINGS} />);
    expectToMatchCapture(template(container), templateV3);
    expect(container.querySelector('.orbit-card-content-info span')?.textContent).toBe(
      'Fri 16 Oct 2026 - Sun 18 Oct 2026',
    );
  });

  it('click on the card raises ClickedEvent with the event record', () => {
    const onClicked = vi.fn();
    const { container } = render(<Card_Event inEventSummary={THREE_DAY_MEETINGS} onClickedEvent={onClicked} />);
    fireEvent.click(container.querySelector('.orbit-card-cont') as Element);
    expect(onClicked).toHaveBeenCalledWith(THREE_DAY_MEETINGS);
  });

  it('empty record: null dates give " - ", no icon class beyond the fixed ones', () => {
    const { container } = render(<Card_Event />);
    expect(container.querySelector('.orbit-card-content-info span')?.textContent).toBe(' - ');
    expect(container.querySelector('.orbit-card-icon')?.getAttribute('style')).toBe('color: var(--orbit--7);');
  });
});
