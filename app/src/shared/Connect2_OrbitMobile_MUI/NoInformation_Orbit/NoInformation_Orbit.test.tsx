import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { NoInformation_Orbit } from './NoInformation_Orbit';
import * as stories from './NoInformation_Orbit.stories';

/* Stories with a capture; the others have their own tests. */
const capturedStories = { default: stories.default, V1: stories.V1, V2: stories.V2 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NoInformation_Orbit', () => {
  testCapturedVariants(capturedStories, captures);

  it('IsUrgent: red classes and the circle-cross icon before the message', () => {
    const { container } = render(<NoInformation_Orbit message="Closes today." isUrgent />);
    const box = container.querySelector('[data-container]');
    expect(box).toHaveClass('bold', 'padding-y-m', 'padding-x-m', 'flex-center-vertical', 'color-orbit-red-6');
    expect(box).not.toHaveClass('color-orbit-primary-7');
    expect(box?.firstElementChild).toHaveClass('icon', 'orbit-icon-circle-cross', 'margin-right-s', 'fa', 'fa-flag');
    expect(box?.lastElementChild?.textContent).toBe('Closes today.');
  });

  it('not urgent: no icon', () => {
    const { container } = render(<NoInformation_Orbit message="None." />);
    expect(container.querySelector('i')).toBeNull();
  });
});
