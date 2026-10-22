import type { RequestHandler } from 'msw';
import { osList, wireList } from '@/legacy/os/os-wire';
import { contractHandler } from '../../../mocks/contract';
import type { GetSignedPhotosInBulk } from '../lib/actions';

/* Mock answer of GetSignedPhotosInBulk (contract operation since CR-W3Y-1), by the person-image rule of
   migration/knowledge/mock-fixtures.md (Q-W2C-1, user 2026-10-14) as UBT_LazyImage/mocks.ts applies it: where TST showed
   a photo the mock answers a neutral, non-person placeholder shipped with the app, never a person photo. Every captured
   signed photo of this block showed one (`data-masked-src="user-image"`, BookmarksByGroup/default, captures v1 and v3),
   rendered 70x47, so the landscape (3:2) placeholder. No result was recorded, so Bucket, Path and Type are echoed. */
export const MOCK_SIGNED_PHOTO_URL = `${import.meta.env.BASE_URL}mock-images/placeholder-landscape.svg`;

export const mockGetSignedPhotosInBulk: GetSignedPhotosInBulk = (parameters) =>
  Promise.resolve(parameters.map((photo) => ({ ...photo, SignedURL: MOCK_SIGNED_PHOTO_URL, Error: '' })));

export const handlers: RequestHandler[] = [
  contractHandler('Connect2_LegacyShared', 'ActionGetSignedPhotosInBulk', ({ Parameters }) => ({
    Results: wireList(
      osList(Parameters).map(({ Bucket, Path, Type }) => ({
        Bucket,
        Path,
        Type,
        SignedURL: MOCK_SIGNED_PHOTO_URL,
        Error: '',
      })),
    ),
  })),
];
