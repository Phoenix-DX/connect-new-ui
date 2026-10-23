import type { UpdateItem } from '@/api/update';
import { Connect_UpdateTypeId, Gender } from '@/shared/UBTConnectLibrary/lib/staticEntities';

/** The initial variables and the read state of the updates card. Pure, without React.
    @origin UBTConnect.Home.FeedBlock_Updates */

/** The IsRead values that the client changed (MarkAsRead, MarkAsUnread, the items swiped in the carousel), by
    UpdateItemId. */
export type ReadOverrides = Record<string, boolean>;

/** CurrDate() as an OutSystems Date text (the local day). */
const currDate = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

/** OnReady, when the view is not restored: three placeholder rows while FetchUpdates runs (the texts are as in the
    compiled code). */
export const loadingItems = (): UpdateItem[] =>
  Array.from({ length: 3 }, () => ({
    updateItemId: '0',
    updateItemTypeId: Connect_UpdateTypeId.Birth,
    householdId: '0',
    memberId: '',
    name: 'Loadin Name',
    date: currDate(),
    genderId: Gender.MALE,
    locationString: 'Loadinf Location',
    parentsNames: '',
    birthType: '',
    isRead: true,
    hasAccess: true,
    hasShare: false,
  }));

/** OnInitialize of a restored view: the items swiped in the carousel are read. They are the EntitiesCarousel_SwippedItems
    rows of the preload object (EntityItemId: a Long Integer as text). */
export const swipedItemsRead = (preload: unknown): ReadOverrides =>
  Object.fromEntries(
    (Array.isArray(preload)
      ? preload.flatMap((r: unknown) =>
          r && typeof r === 'object' && 'EntityItemId' in r ? [String(r.EntityItemId)] : [],
        )
      : []
    ).map((itemId) => [itemId, true]),
  );

/** The items with the IsRead values of the client. */
export const withReadOverrides = (items: UpdateItem[], overrides: ReadOverrides): UpdateItem[] =>
  items.map((u) => ({ ...u, isRead: overrides[u.updateItemId] ?? u.isRead }));
