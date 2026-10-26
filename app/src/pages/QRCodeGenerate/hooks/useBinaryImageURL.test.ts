import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi, type MockInstance } from 'vitest';
import { IMAGE_CACHE_TTL_MS, useBinaryImageURL } from './useBinaryImageURL';

/** A one-pixel PNG, as a BinaryData travels (base64). */
const PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

let createObjectURL: MockInstance<(blob: Blob) => string>;
let revokeObjectURL: MockInstance<(url: string) => void>;

beforeEach(() => {
  vi.useFakeTimers();
  createObjectURL = vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'blob:qr-code');
  revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => undefined);
});
afterEach(() => {
  vi.useRealTimers();
});

describe('useBinaryImageURL', () => {
  it('gives "" for NullBinary() without an object URL', () => {
    const { result } = renderHook(() => useBinaryImageURL(''));
    expect(result.current).toBe('');
    expect(createObjectURL).not.toHaveBeenCalled();
  });

  it('gives one object URL of the decoded bytes and keeps it while the binary stays the same', () => {
    const { result, rerender } = renderHook(({ base64 }) => useBinaryImageURL(base64), {
      initialProps: { base64: PNG },
    });
    rerender({ base64: PNG });
    expect(result.current).toBe('blob:qr-code');
    expect(createObjectURL).toHaveBeenCalledTimes(1);
    expect(createObjectURL.mock.calls[0]?.[0].size).toBe(atob(PNG).length);
  });

  it('revokes the object URL 120 s after the unmount, as the Image widget cache', () => {
    const { unmount } = renderHook(() => useBinaryImageURL(PNG));
    unmount();
    vi.advanceTimersByTime(IMAGE_CACHE_TTL_MS - 1);
    expect(revokeObjectURL).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:qr-code');
  });
});
