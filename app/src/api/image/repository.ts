import { cacheKeyPart, getCacheableObjectInBulk, getCacheKeyParts, type BulkCacheResult } from '@/api/client/cache';
import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import { imageCache } from './keys';

/* The image calls, with their OutSystems names. Each caller decides when it calls. */

/** TextToInteger then IntegerToLongInteger: a text that is not a number gives 0. */
const textToLongInteger = (text: string): string =>
  /^\s*-?\d+\s*$/.test(text) ? String(Number.parseInt(text, 10)) : '0';

/* ---- Connect2_LegacyShared GetCacheableSignedImageURL ---- */

/** GetBulkSignedImageURL (Connect2_LegacyShared): one GetSignedImagesInBulk call for the waiting cache keys (Id, Type,
    Size), one answer per image (key, Error, SignedURL). */
async function fetchLegacySignedImagesInBulk(cacheKeys: string[]): Promise<BulkCacheResult<string>[]> {
  const parameters = cacheKeys.map((key) => {
    const [Id = '', Type = '', Size = ''] = getCacheKeyParts(key);
    return { Id: textToLongInteger(Id), Type, Size };
  });
  const out = await callAction('Connect2_LegacyShared', 'ActionGetSignedImagesInBulk', {
    BulkSignedImagesParameters: wireList(parameters),
  });
  return osList(out.Results).map((result) => ({
    key: cacheKeyPart(result.Id) + cacheKeyPart(result.Type) + cacheKeyPart(result.Size),
    error: result.Error,
    value: result.SignedURL,
  }));
}

/** GetCacheableSignedImageURL(EntityId, Type, Size) (Connect2_LegacyShared): the signed URL of an entity image. It is
    "" for a null entity id or an empty type. Else it comes from the memory cache or from one bulk server call
    (imageCache.legacySignedImage: TTL 300 s, timeout 10, bulk of 15); ResultURL is the object or "". It is called for
    the photo of a scanned member (OrbitAdminEventDetail), the host photo (MilestoneDetail), the member cards
    (GuestArrangements), the member photo of the call popup (HelpersDetail) and the member photo of the QR code
    (QRCodeGenerate). */
export async function fetchLegacySignedImageURL(entityId: string, type: string, size: string): Promise<string> {
  const id = textToLongInteger(entityId);
  if (id === '0' || type === '') return '';
  const object = await getCacheableObjectInBulk(
    imageCache.legacySignedImage(type, cacheKeyPart(id) + cacheKeyPart(type) + cacheKeyPart(size)),
    fetchLegacySignedImagesInBulk,
  );
  return object ?? '';
}
