import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { ContactHelpdesk_Footer } from './ContactHelpdesk_Footer';
import * as stories from './ContactHelpdesk_Footer.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ContactHelpdesk_Footer', () => {
  testCapturedVariants(stories, captures);

  it('raises Click when the footer is clicked', () => {
    const onClick = vi.fn();
    render(<ContactHelpdesk_Footer onClick={onClick} />);
    fireEvent.click(screen.getByText('Contact Orbit Helpdesk'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
