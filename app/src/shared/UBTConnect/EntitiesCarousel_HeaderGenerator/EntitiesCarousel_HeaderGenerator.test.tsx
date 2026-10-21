import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { get_CurrentEntityHeader } from '../lib/actions';
import type { HeaderList } from '../lib/structures';
import { EntitiesCarousel_HeaderGenerator } from './EntitiesCarousel_HeaderGenerator';
import * as stories from './EntitiesCarousel_HeaderGenerator.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('EntitiesCarousel_HeaderGenerator', () => {
  testCapturedVariants(stories, captures);

  const headers: HeaderList[] = [
    { Label: 'Town A, Country A', Index: 0 },
    { Label: 'Town B, Country B', Index: 2 },
  ];

  it('raises nothing on the first render (no OnReady), even in StrictMode', () => {
    const onEventSetHeader = vi.fn();
    render(
      <StrictMode>
        <EntitiesCarousel_HeaderGenerator
          inCurrentIndex={0}
          inHouseholdCarouselHeaderList={headers}
          onEventSetHeader={onEventSetHeader}
        />
      </StrictMode>,
    );
    expect(onEventSetHeader).not.toHaveBeenCalled();
  });

  it('raises Event_SetHeader with the header of the new index, "" when it is not known yet', () => {
    const onEventSetHeader = vi.fn();
    const view = (index: number, list: HeaderList[]) => (
      <EntitiesCarousel_HeaderGenerator
        inCurrentIndex={index}
        inHouseholdCarouselHeaderList={list}
        onEventSetHeader={onEventSetHeader}
      />
    );
    const { rerender } = render(view(0, headers));
    rerender(view(2, headers));
    expect(onEventSetHeader).toHaveBeenLastCalledWith('Town B, Country B');
    rerender(view(1, headers));
    expect(onEventSetHeader).toHaveBeenLastCalledWith('');
    const longer = [...headers, { Label: 'Town C, Country C', Index: 1 }];
    rerender(view(1, longer));
    expect(onEventSetHeader).toHaveBeenLastCalledWith('Town C, Country C');
    rerender(view(1, longer));
    expect(onEventSetHeader).toHaveBeenCalledTimes(3);
  });

  it('Get_CurrentEntityHeader: In_IsSingleHeader takes the first label ("" for an empty list)', () => {
    expect(get_CurrentEntityHeader(2, headers, true)).toBe('Town A, Country A');
    expect(get_CurrentEntityHeader(0, [], true)).toBe('');
    expect(get_CurrentEntityHeader(0, [], false)).toBe('');
  });
});
