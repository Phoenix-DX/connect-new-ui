import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { calledActions } from '@/test/testSupport';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { AppVersion } from './AppVersion';
import * as stories from './AppVersion.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Version', () => {
  testCapturedVariants(stories, captures);

  it('shows the runtime version from Get_RuntimeVersion', async () => {
    render(<AppVersion />);
    const text = await screen.findByText(/^App version \(\d+\)$/);
    expect(text.parentElement).toHaveClass('text-inherit');
    expect(calledActions()).toContain('ActionGet_RuntimeVersion');
  });
});
