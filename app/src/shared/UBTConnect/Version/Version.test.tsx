import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { calledActions } from '../../../shell/testSupport';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Version } from './Version';
import * as stories from './Version.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Version', () => {
  testCapturedVariants(stories, captures);

  it('shows the runtime version from Get_RuntimeVersion', async () => {
    render(<Version />);
    const text = await screen.findByText(/^App version \(\d+\)$/);
    expect(text.parentElement).toHaveClass('text-inherit');
    expect(calledActions()).toContain('ActionGet_RuntimeVersion');
  });
});
