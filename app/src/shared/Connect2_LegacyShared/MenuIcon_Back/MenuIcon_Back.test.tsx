import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { MenuIcon_Back } from './MenuIcon_Back';
import * as stories from './MenuIcon_Back.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('MenuIcon_Back', () => {
  testCapturedVariants(stories, captures);

  it('the link goes back to the previous screen', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/UBTConnect/A', '/UBTConnect/B']} initialIndex={1}>
        <Routes>
          <Route path="/UBTConnect/A" element={<p>previous</p>} />
          <Route path="/UBTConnect/B" element={<MenuIcon_Back />} />
        </Routes>
      </MemoryRouter>,
    );
    const link = container.querySelector('a.app-menu-back');
    if (!link) throw new Error('link not rendered');
    fireEvent.click(link);
    expect(screen.getByText('previous')).toBeInTheDocument();
  });
});
