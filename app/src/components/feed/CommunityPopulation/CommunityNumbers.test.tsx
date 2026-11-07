import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { diffAgainstCapture } from '@/test/dom';
import { CommunityNumbers, formatCount } from './CommunityNumbers';
import { fictionalCommunityStatistics } from './mocks';
import * as stories from './CommunityNumbers.stories';

const captures = import.meta.glob<string>('./__captures__/numbers-*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
});
const { Loaded, Loading, ChangeDown, NoChange } = composeStories(stories);

function expectCapture(el: Element | null, file: string) {
  if (!el) throw new Error('nothing rendered');
  expect(diffAgainstCapture(el, captures[file] ?? '')).toEqual([]);
  // The four SVG_Community* icons of IconSvg, as the compiled IconSVG block names them.
  expect([...el.querySelectorAll('img')].map((img) => img.getAttribute('src')?.split('/').pop())).toEqual([
    'UBTConnectLibrary.CommunityMembers.svg',
    'UBTConnectLibrary.CommunityHouseholds.svg',
    'UBTConnectLibrary.CommunityLocalities.svg',
    'UBTConnectLibrary.CommunityCountries.svg',
  ]);
}

describe('Directory_CommunityNumbers', () => {
  it('Loaded matches __captures__/numbers-default.html (HomeFeed/default)', async () => {
    const { container } = render(<Loaded />);
    expect(await screen.findByText('48,215')).toBeInTheDocument();
    expectCapture(container.firstElementChild, './__captures__/numbers-default.html');
    expect(screen.getByText('+6')).toBeInTheDocument();
    expect(screen.getByText('Today')).toBeInTheDocument();
    expect(screen.getByText('19,870')).toBeInTheDocument();
    expect(screen.getByText('386')).toBeInTheDocument();
    expect(screen.getByText('17')).toBeInTheDocument();
  });

  it('Loading matches __captures__/numbers-loading.html (HomeFeed/loading): the 1000 placeholders in the skeleton', () => {
    const { container } = render(<Loading />);
    expectCapture(container.firstElementChild, './__captures__/numbers-loading.html');
    expect(screen.getAllByText('1,000')).toHaveLength(4);
    expect(screen.getByText('+1,000')).toBeInTheDocument();
    expect(container.querySelector('.ubt-skeleton-section')).not.toBeNull();
  });

  it('a negative change shows the down arrow in red; no change shows "No change today" without an arrow', async () => {
    const down = render(<ChangeDown />);
    // "-" + FormatCurrency(-4): the minus sign twice, as compiled.
    expect(await screen.findByText('--4')).toBeInTheDocument();
    expect(down.container.querySelector('.connect-icon-Arrow-down.text-red-dark')).not.toBeNull();
    down.unmount();
    const none = render(<NoChange />);
    expect(await screen.findByText('No change today')).toBeInTheDocument();
    expect(none.container.querySelector('.directory-numbers-card__variation .ubt-icon')).toBeNull();
    expect(screen.getByText('19,870')).toBeInTheDocument();
  });

  it('OnParametersChanged copies the record only when not loading; a block that starts not loading keeps zeros', () => {
    const { rerender } = render(
      <CommunityNumbers isLoading={false} communityStatistics={fictionalCommunityStatistics} />,
    );
    expect(screen.queryByText('48,215')).toBeNull();
    expect(screen.getByText('No change today')).toBeInTheDocument();
    rerender(<CommunityNumbers isLoading communityStatistics={{ ...fictionalCommunityStatistics }} />);
    expect(screen.queryByText('48,215')).toBeNull();
    rerender(<CommunityNumbers isLoading={false} communityStatistics={{ ...fictionalCommunityStatistics }} />);
    expect(screen.getByText('48,215')).toBeInTheDocument();
  });

  it('formatCount groups the digits by three with ","', () => {
    expect(formatCount(0)).toBe('0');
    expect(formatCount(999)).toBe('999');
    expect(formatCount(1000)).toBe('1,000');
    expect(formatCount(1234567)).toBe('1,234,567');
    expect(formatCount(-4200)).toBe('-4,200');
  });
});
