import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { action_DefineList, StatisticsList } from './StatisticsList';
import * as stories from './StatisticsList.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const card = (Id: string, Title: string, Subtitle = '') => ({ Id, StatisticsOptions: { Title, Subtitle } });
const input = () => screen.getByRole('searchbox');
const titles = (root: HTMLElement) =>
  [...root.querySelectorAll('[data-block="ConnectCorePatterns.Statistics_ListItem"] .font-size-h6')].map((e) =>
    e.textContent.trim(),
  );

describe('StatisticsList', () => {
  testCapturedVariants(stories, captures);
  afterEach(() => {
    vi.useRealTimers();
  });

  it('Action_DefineList: all cards without a search; Title or Subtitle, ignoring case and accents', () => {
    const list = [card('1', 'Bogotá'), card('2', 'Lima', 'PERÚ'), card('3', 'Quito')];
    expect(action_DefineList(list, '')).toBe(list);
    expect(action_DefineList(list, 'BOGOTA').map((c) => c.Id)).toEqual(['1']);
    expect(action_DefineList(list, 'peru').map((c) => c.Id)).toEqual(['2']);
    expect(action_DefineList(list, 'x')).toEqual([]);
  });

  it('typing filters after the 200 ms debounce; no match shows the "No results" texts; clear restores the list', () => {
    vi.useFakeTimers();
    const { container } = render(<StatisticsList inStatistics={[card('1', 'Bogotá'), card('2', 'Lima')]} />);
    fireEvent.change(input(), { target: { value: 'bogota' } });
    expect(titles(container)).toEqual(['Bogotá', 'Lima']);
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(titles(container)).toEqual(['Bogotá']);
    fireEvent.change(input(), { target: { value: 'zz' } });
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(screen.getByText("No results found for 'zz'").closest('[data-container]')).toHaveClass(
      'text-neutral-9 font-semi-bold font-size-s',
    );
    expect(screen.getByText('Try searching for a country or locality.').closest('[data-container]')).toHaveClass(
      'text-neutral-10 font-regular',
    );
    expect(container.querySelector('[data-list]')).toBeNull();
    const clear = container.querySelector('.connect-icon-cancel_fill');
    if (!clear) throw new Error('no clear icon');
    fireEvent.click(clear);
    expect(titles(container)).toEqual(['Bogotá', 'Lima']);
  });

  it('Enter submits the search at once; the search is highlighted unless loading', () => {
    const { container, rerender } = render(<StatisticsList inStatistics={[card('1', 'Lima'), card('2', 'Quito')]} />);
    fireEvent.change(input(), { target: { value: 'lim' } });
    fireEvent.keyUp(input(), { key: 'Enter' });
    expect(titles(container)).toEqual(['Lima']);
    expect(container.querySelector('.highlight-search')).not.toBeNull();
    rerender(<StatisticsList inStatistics={[card('1', 'Lima'), card('2', 'Quito')]} inIsLoading />);
    expect(container.querySelector('.highlight-search')).toBeNull();
  });

  it('the search is enabled only with more than one card', () => {
    const { rerender } = render(<StatisticsList inStatistics={[card('1', 'Lima')]} />);
    expect(input()).toBeDisabled();
    rerender(<StatisticsList inStatistics={[card('1', 'Lima'), card('2', 'Quito')]} />);
    expect(input()).toBeEnabled();
  });

  it('a card click raises Event_Clicked with its Id; new inputs raise OnParametersChangedEv', () => {
    const onEventClicked = vi.fn();
    const onOnParametersChangedEv = vi.fn();
    const list = [card('11', 'Lima'), card('12', 'Quito')];
    const { rerender } = render(
      <StatisticsList
        inStatistics={list}
        onEventClicked={onEventClicked}
        onOnParametersChangedEv={onOnParametersChangedEv}
      />,
    );
    fireEvent.click(screen.getByText('Quito'));
    expect(onEventClicked).toHaveBeenCalledWith('12');
    expect(onOnParametersChangedEv).not.toHaveBeenCalled();
    rerender(
      <StatisticsList
        inStatistics={list}
        inShowSubtitle
        onEventClicked={onEventClicked}
        onOnParametersChangedEv={onOnParametersChangedEv}
      />,
    );
    expect(onOnParametersChangedEv).toHaveBeenCalledTimes(1);
  });

  it('rows sharing an Id (skeleton rows, Id "0") are keyed by position: the data replaces them all', () => {
    const errors = vi.spyOn(console, 'error');
    const { container, rerender } = render(
      <StatisticsList
        inIsLoading
        inStatistics={[card('0', 'Adelaide'), card('0', 'Adelaide'), card('0', 'Adelaide')]}
      />,
    );
    expect(titles(container)).toEqual(['Adelaide', 'Adelaide', 'Adelaide']);
    rerender(<StatisticsList inStatistics={[card('7', 'Lima'), card('8', 'Quito')]} />);
    expect(titles(container)).toEqual(['Lima', 'Quito']);
    expect(errors.mock.calls.filter((c) => String(c[0]).includes('same key'))).toEqual([]);
    errors.mockRestore();
  });
});
