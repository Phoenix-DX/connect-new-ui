import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { collection } from '@/mocks/store';

/** Connect_Updates_CS.UI_UpdateItem as FetchUpdates sends it (FetchUpdates.UI_UpdateItemList). */
type UpdateItemWire = ActionOutputs<
  PathOf<'UBTConnect', 'FeedBlock_Updates/DataActionFetchUpdates'>
>['UI_UpdateItemList']['List'][number];

const item = (
  id: string,
  type: string,
  name: string,
  date: string,
  location: string,
  householdId: string,
  memberId: string,
  parentsNames = '',
): UpdateItemWire => ({
  UpdateItemId: id,
  UpdateItemTypeId: type,
  HouseholdId: householdId,
  MemberId: memberId,
  Name: name,
  Date: date,
  GenderId: 'Gender.MALE',
  LocationString: location,
  ParentsNames: parentsNames,
  BirthType: '',
  IsRead: false,
  HasAccess: true,
  HasShare: true,
});

/* The update items that HomeFeed's FetchUpdates reads (HomeFeed.updateItems). Person data, never recorded
   (mock-fixtures.md): three fictional unread items with the captured types (Birth, Marriage, Marriage), HasAccess True;
   meaningful fictional names, real places and the birth's parents, with the captured word lengths (the first rows of
   the Updates_SingleList mock; mock-fixtures.md). HomeFeed's MarkAsRead / MarkAsUnread and the handler below change
   IsRead (P-MUTATION). The collection lives here, not in the HomeFeed mocks, because shared code does not import
   screens (P3-1). */
export const updateItems = collection(
  'HomeFeed.updateItems',
  () => [
    item(
      '9101',
      'Birth',
      'James Hargreaves',
      '2026-10-08',
      'Geelong, Australia',
      '8101',
      '7101',
      'Thomas & Sophie Hargreaves',
    ),
    item('9102', 'Marriage', 'Michael & Hannah Booth', '2026-10-03', 'Brisbane, Australia', '8102', '7102'),
    item('9103', 'Marriage', 'Oscar & Emma Hughes', '2026-09-26', 'Bendigo, Australia', '8103', '7103'),
  ],
  'UpdateItemId',
);

/* Server action UBTConnect UpdateItem_MarkAsRead(In_UpdateItemId) (UBTConnect.controller.js:18574-18584, copy in
   migration/screens/HouseholdCarousel/analysis/sources/raw/), called by Directory_Updates_CarouselSwipeAction
   (:1625-1660) when an updates carousel item is swiped (CR-HouseholdCarousel-1). A write, never recorded: it marks the
   update read in the update items the ServiceAPI MarkAsRead / MarkAsUnread handlers change (HomeFeed.updateItems, the
   collection HomeFeed's FetchUpdates reads; one shared collection for every Updates screen is CR-Updates_SingleList-1),
   so HomeFeed shows it read after the swipe. Only an existing update changes (no partial row for an unknown id). No
   output. */
export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'ActionUpdateItem_MarkAsRead', ({ In_UpdateItemId }) => {
    const row = updateItems.get(In_UpdateItemId);
    if (row) updateItems.upsert({ ...row, IsRead: true });
    return {};
  }),
];
