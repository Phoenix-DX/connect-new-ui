import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { ContactHelpdeskFooter } from './ContactHelpdeskFooter';
import * as stories from './ContactHelpdeskFooter.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ContactHelpdesk_Footer', () => {
  testCapturedVariants(stories, captures);

  it('raises Click when the footer is clicked', () => {
    const onClick = vi.fn();
    render(<ContactHelpdeskFooter onClick={onClick} />);
    fireEvent.click(screen.getByText('Contact Orbit Helpdesk'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
