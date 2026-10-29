import { render, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { clearMemoryCache, putCacheableObject } from '@/api/client/cache';
import { fetchAllLocalities, fetchAllSubdivisions, localityCache, type AllSubdivisions } from '@/api/locality';
import { clientVar } from '@/platform/session/session';
import { CacheControl_AllLocalities, CacheControl_AllSubdivisions } from './AddressCacheControls';

vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchAllLocalities: vi.fn(),
  fetchAllSubdivisions: vi.fn(),
}));

const subdivisions: AllSubdivisions = {
  SubdivionsList: {
    List: [{ SubdivisionId: '9202', SubdivisionName: 'Patagonia', LocalityId: '585', LocalityName: 'Bahia Blanca' }],
  },
};

beforeEach(() => {
  vi.clearAllMocks();
  clearMemoryCache();
});

describe('CacheControl_AllLocalities and CacheControl_AllSubdivisions of Profile', () => {
  it('a miss calls GetCacheInfo with UniqueCacheKey, the cache type and 7200 s, keeps the answer and raises Result', async () => {
    vi.mocked(fetchAllSubdivisions).mockResolvedValue(subdivisions);
    const onResult = vi.fn();
    const { container } = render(<CacheControl_AllSubdivisions id="$b58" onResult={onResult} />);
    await waitFor(() => {
      expect(onResult).toHaveBeenCalledWith(subdivisions);
    });
    expect(fetchAllSubdivisions).toHaveBeenCalledWith({
      CacheKey: clientVar.uniqueCacheKey.get(),
      CacheTypeId: 'AllSubdivisions',
      TimeToLiveSeconds: 7200,
    });
    expect(container.querySelector('#\\$b58')).not.toBeNull();

    // A second block of the same key is a hit: Result with the kept object, no call.
    const second = vi.fn();
    render(<CacheControl_AllSubdivisions onResult={second} />);
    await waitFor(() => {
      expect(second).toHaveBeenCalledWith(subdivisions);
    });
    expect(fetchAllSubdivisions).toHaveBeenCalledTimes(1);
  });

  it('a hit of the localities raises Result without a call; a failed call goes to onError', async () => {
    const kept = { LocalityList: { List: [] } };
    putCacheableObject(localityCache.allLocalities(clientVar.uniqueCacheKey.get(), 7200), kept);
    const onResult = vi.fn();
    render(<CacheControl_AllLocalities id="$b57" onResult={onResult} />);
    await waitFor(() => {
      expect(onResult).toHaveBeenCalledWith(kept);
    });
    expect(fetchAllLocalities).not.toHaveBeenCalled();

    const error = new Error('offline');
    vi.mocked(fetchAllSubdivisions).mockRejectedValue(error);
    const onError = vi.fn();
    render(<CacheControl_AllSubdivisions onError={onError} />);
    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith(error);
    });
  });
});
