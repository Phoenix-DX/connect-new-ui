import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { formatCount, LocalityListDetail } from './LocalityListDetail';
import * as stories from './LocalityListDetail.stories';
import { COUNTRIES } from './mocks';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('LocalityListDetail', () => {
  testCapturedVariants(stories, captures);

  it('FormatCurrency(n, "", 0, "", ","): grouped thousands, no decimals', () => {
    expect(formatCount(0)).toBe('0');
    expect(formatCount(82)).toBe('82');
    expect(formatCount(18240)).toBe('18,240');
    expect(formatCount(1234567)).toBe('1,234,567');
  });

  it('header shown unless HideHeader; a row click raises OnClick_GoToBrowseCountry with its map position', async () => {
    const onClick = vi.fn();
    const { container } = render(
      <LocalityListDetail countryDetailList={COUNTRIES.slice(0, 2)} onOnClickGoToBrowseCountry={onClick} />,
    );
    expect(container.querySelector('.border-bottom-neutral-5')?.textContent).toBe('Browse by Country');
    fireEvent.click(screen.getByText('Australia'));
    await vi.waitFor(() => {
      expect(onClick).toHaveBeenCalledWith('AU', -25.3, 133.8, 5);
    });
  });
});
