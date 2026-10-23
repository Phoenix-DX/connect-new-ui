import { cacheKeyPart, getCacheableObjectInBulk, getCacheKeyParts, type BulkCacheResult } from '@/api/client/cache';
import { callAction } from '@/api/client/callAction';
import { imageCache } from '@/api/image';
import { osList, wireList } from '@/legacy/os/os-wire';
import { textToLongInteger } from '@/shared/UBTConnect_Utils/lib/actions';

/* DataActionGetGuestArrangements of ScreenBlock_GuestArrangements (on demand: OnReady → RefreshData; the server reads
   the block variables In_MemberId, In_EventId, ...) is in the domain api/event. This module keeps the name that the
   screen uses. */
export { fetchGuestArrangements as getGuestArrangements } from '@/api/event';

/* Connect2_LegacyShared GetCacheableSignedImageURL (runtime-sources/Connect2_LegacyShared.controller.js, `LS:<n>`): the
   photo source of Card_MemberInformation (its getSignedImageURL input), as in HelpersDetail. */
/** GetBulkSignedImageURL (LS:2816-2890): one GetSignedImagesInBulk call for the waiting keys (Id, Type, Size), one
    answer per image (key, Error, SignedURL). */
async function getBulkSignedImageURL(cacheKeys: string[]): Promise<BulkCacheResult<string>[]> {
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

/** GetCacheableSignedImageURL(EntityId, Type, Size) (LS:3692-3837): "" for a null entity id or an empty type; else
    GetCacheableObjectInBulk (imageCache.legacySignedImage: TTL 300 s, timeout 10, bulk of 15) and ResultURL:
    Object || "". */
export async function getCacheableSignedImageURL(entityId: string, type: string, size: string): Promise<string> {
  const id = textToLongInteger(entityId);
  if (id === '0' || type === '') return '';
  const object = await getCacheableObjectInBulk(
    imageCache.legacySignedImage(type, cacheKeyPart(id) + cacheKeyPart(type) + cacheKeyPart(size)),
    getBulkSignedImageURL,
  );
  return object ?? '';
}
