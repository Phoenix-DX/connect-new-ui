import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Type_MyCalendarEventSource } from '@/pages/MyEntertaining/staticEntities';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { setClientVar } from '@/platform/session/session';
import { preloadedSourceOf, useMyEntertaining } from './useMyEntertaining';

vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  feedbackMessageAutoClose: vi.fn(),
}));

describe('preloadedSourceOf (OnInitialize of MyEntertaining_Embedded)', () => {
  it('maps the four event sources and gives "" for any other value', () => {
    expect(preloadedSourceOf(Type_MyCalendarEventSource.Orbit)).toBe('orbit');
    expect(preloadedSourceOf(Type_MyCalendarEventSource.LDM)).toBe('ldm');
    expect(preloadedSourceOf(Type_MyCalendarEventSource.Assemble)).toBe('assemble');
    expect(preloadedSourceOf(Type_MyCalendarEventSource.UserCreated)).toBe('personal');
    expect(preloadedSourceOf('')).toBe('');
    expect(preloadedSourceOf('event-unknown')).toBe('');
  });
});

describe('useMyEntertaining', () => {
  beforeEach(() => {
    vi.mocked(feedbackMessageAutoClose).mockClear();
  });
  afterEach(() => {
    setClientVar('UBTConnect.Embedd_B2CTenant', '');
  });

  it('sets the sources once from the initial event source: a later input does not change them', () => {
    const initialProps: { id: string } = { id: Type_MyCalendarEventSource.LDM };
    const { result, rerender } = renderHook(({ id }) => useMyEntertaining(id), { initialProps });
    expect(result.current.sources).toBe('ldm');
    rerender({ id: Type_MyCalendarEventSource.Orbit });
    expect(result.current.sources).toBe('ldm');
  });

  it('reads the client variable Embedd_B2CTenant on render and follows its changes', () => {
    setClientVar('UBTConnect.Embedd_B2CTenant', 'tenant-a');
    const { result } = renderHook(() => useMyEntertaining(''));
    expect(result.current.b2CTenant).toBe('tenant-a');
    act(() => {
      setClientVar('UBTConnect.Embedd_B2CTenant', 'tenant-b');
    });
    expect(result.current.b2CTenant).toBe('tenant-b');
  });

  it('Handle_Error shows the message as an info message that closes by itself', () => {
    const { result } = renderHook(() => useMyEntertaining(''));
    result.current.onError('The calendar is not available.');
    expect(feedbackMessageAutoClose).toHaveBeenCalledWith({
      title: '',
      message: 'The calendar is not available.',
      messageType: 'info',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
  });

  it('Handle_OpenMap opens the Google Maps search of the point outside the app', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const { result } = renderHook(() => useMyEntertaining(''));
    result.current.onOpenMap('-33.86', '151.21');
    expect(open).toHaveBeenCalledWith(
      'https://www.google.com/maps/search/?api=1&query=-33.86,151.21',
      '_blank',
      'noopener',
    );
  });
});
