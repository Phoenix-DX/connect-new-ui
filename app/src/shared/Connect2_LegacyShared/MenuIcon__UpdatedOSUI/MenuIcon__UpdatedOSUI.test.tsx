import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { MenuAction } from '../lib/staticEntities';
import { MenuIcon__UpdatedOSUI } from './MenuIcon__UpdatedOSUI';
import * as stories from './MenuIcon__UpdatedOSUI.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('MenuIcon__UpdatedOSUI', () => {
  testCapturedVariants(stories, captures);

  it('MenuAction Hidden renders nothing inside the block', () => {
    const { container } = render(
      <MemoryRouter>
        <MenuIcon__UpdatedOSUI menuAction={MenuAction.Hidden} />
      </MemoryRouter>,
    );
    expect(container.firstElementChild?.childElementCount).toBe(0);
  });

  it('a click goes back to the previous screen', () => {
    render(
      <MemoryRouter initialEntries={['/UBTConnect/A', '/UBTConnect/B']} initialIndex={1}>
        <Routes>
          <Route path="/UBTConnect/A" element={<p>previous</p>} />
          <Route path="/UBTConnect/B" element={<MenuIcon__UpdatedOSUI menuAction={MenuAction.Menu} />} />
        </Routes>
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Back to previous screen' }));
    expect(screen.getByText('previous')).toBeInTheDocument();
  });
});
