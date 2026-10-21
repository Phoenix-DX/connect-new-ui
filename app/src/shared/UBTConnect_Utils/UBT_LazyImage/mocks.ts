import type { RequestHandler } from 'msw';
import { osList, wireList } from '../../../lib/os-wire';
import { contractHandler } from '../../../mocks/contract';
import { Connect_Entity } from '../lib/staticEntities';

/* GetSignedImagesInBulk (CR-W2A-1), decision Q-W2C-1 (user, 2026-10-14; migration/knowledge/mock-fixtures.md): where
   TST showed a photo the mock answers a neutral, non-person placeholder shipped with the app (public/mock-images/);
   where TST showed the fallback icon it answers an empty URL. Never a real or invented person photo.

   Rule, from the loaded (`default`) captures of every screen that called GetSignedImagesInBulk
   (migration/screens/<S>/analysis/dom/default.html, `CW_Image.UBT_LazyImage` blocks):
   - Every image Type that asked for a signed URL showed a photo (`data-masked-src="user-image"`), at every size:
     Member avatars (Member_ListItem 26, NonMember_ListItem 5, MemberRelation_ListItem 2, HouseholdRelations_Block 1,
     UBT_LazyImage_List in Locality_Details 44, Menu 1, Profile 1), Household cards (HouseholdDetails_Block 6,
     Household_Card 23, Household_GalleryCard 34, Photobook 69), Subdivision (SupperMeeting_DetailsBlock 2), Locality
     statistics (Statistics_TypedItem 3), share result (Result_Item_Image 1). So: placeholder by default.
   - Shape: avatars render square (50x50, 38x38, 98x98, 174x174), every other card 3:2 (390x259/260, 195x130, 65x43):
     Member → square placeholder, other types → landscape placeholder.
   - The fallback icons of the loaded captures do not follow from the type: 2 of 20 Member_ListItem avatars in
     HouseholdCarousel (children without a photo; same Type and Size as their siblings) and 2 SupperMeeting_Carousel
     slides whose subdivision was never loaded (no EntityId: no signed-image call at all). The first case is per
     entity: a route mock that builds those members registers their ids with `markNoPhoto` (empty URL = fallback).
   - FeedItem (Type passed through by GetImageType_FromEntity): no capture shows one, so it keeps the empty URL (the
     fallback icon `connect-icon-feed` shows).
   No result was recorded (calls.json keeps no outputs; no fixture), so Id, Type and Size are echoed back. */
const PLACEHOLDER = {
  square: `${import.meta.env.BASE_URL}mock-images/placeholder-square.svg`,
  landscape: `${import.meta.env.BASE_URL}mock-images/placeholder-landscape.svg`,
};
const PHOTO_TYPES = new Set<string>([Connect_Entity.Household, Connect_Entity.Locality, 'Subdivision']);

const noPhoto = new Set<string>();
const noPhotoKey = (type: string, id: string) => `${type}:${id}`;

/** Marks an entity whose image showed the fallback icon on TST: its signed URL is answered empty. */
export function markNoPhoto(type: string, id: string): void {
  noPhoto.add(noPhotoKey(type, id));
}

/** The mock signed URL of one image (Q-W2C-1 rule above). */
export function mockSignedImageURL(id: string, type: string): string {
  if (noPhoto.has(noPhotoKey(type, id))) return '';
  if (type === Connect_Entity.Member) return PLACEHOLDER.square;
  if (PHOTO_TYPES.has(type)) return PLACEHOLDER.landscape;
  return '';
}

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect_Utils', 'ActionGetSignedImagesInBulk', ({ BulkSignedImagesParameters }) => ({
    Results: wireList(
      osList(BulkSignedImagesParameters).map(({ Id, Type, Size }) => ({
        Id,
        Type,
        Size,
        SignedURL: mockSignedImageURL(Id, Type),
        Error: '',
      })),
    ),
  })),
];
