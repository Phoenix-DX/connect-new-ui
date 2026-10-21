import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { ErrorScreen } from './ErrorScreen';
import * as stories from './ErrorScreen.stories';

/* Stories with a capture; the others have their own tests. */
const capturedStories = { default: stories.default, V1: stories.V1 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ErrorScreen', () => {
  beforeEach(() => {
    // The captured `.main-content` was 723 px high (LDM_EventDetail_V2/offline).
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(723);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  testCapturedVariants(capturedStories, captures);

  it('defaults: 40em high, default message, no main-content lookup', () => {
    const { container } = render(<ErrorScreen />);
    const box = container.querySelector('[data-block] > div') as HTMLElement;
    expect(box.style.height).toBe('40em');
    expect(container.textContent).toBe('No information available.');
    expect(container.querySelector('img')?.getAttribute('src')).toContain('Connect2_OrbitMobile_MUI.no_events.png');
  });
});
