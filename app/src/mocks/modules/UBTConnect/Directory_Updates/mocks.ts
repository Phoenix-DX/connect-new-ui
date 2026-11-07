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
  gender: 'Gender.FEMALE' | 'Gender.MALE',
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
  GenderId: gender,
  LocationString: location,
  ParentsNames: parentsNames,
  BirthType: '',
  IsRead: false,
  HasAccess: true,
  HasShare: true,
});

/* The update items that HomeFeed's FetchUpdates reads (HomeFeed.updateItems). Person data, never recorded
   (mock-fixtures.md): three fictional unread items with the types and genders of the fresh TST capture of 2026-11-07
   (HomeFeed dom/default.html: three births, a girl and two boys), HasAccess True; meaningful fictional names, places
   and parents; items 2 and 3 have the captured word lengths of the name. Their locations are short ("Town, Country",
   as item 1): the captured location texts (44 and 46 masked characters) show on one line in TST, but fictional texts
   of these lengths wrap to two lines in the app and move the location icon (parity position 0,2 → 0,9). Item 1 keeps
   the names of the capture of 2026-10-29, the first rows of the Updates_SingleList mock; mock-fixtures.md. HomeFeed's MarkAsRead / MarkAsUnread and the handler
   below change IsRead (P-MUTATION). The collection lives here, not in the HomeFeed mocks, because shared code does not import
   screens (P3-1). */
export const updateItems = collection(
  'HomeFeed.updateItems',
  () => [
    item(
      '9101',
      'Birth',
      'Gender.FEMALE',
      'Penelope Ashworth',
      '2026-10-28',
      'Toowoomba, Australia',
      '8101',
      '7101',
      'Jonathan & Clara Ashworth',
    ),
    item(
      '9102',
      'Birth',
      'Gender.MALE',
      'Samuel Hartley',
      '2026-10-28',
      'Lismore, Australia',
      '8102',
      '7102',
      'Daniel & Ruth Hartley',
    ),
    item(
      '9103',
      'Birth',
      'Gender.MALE',
      'Florence Bishop',
      '2026-10-27',
      'Leichhardt, Australia',
      '8103',
      '7103',
      'Matthew & Leah Bishop',
    ),
  ],
  'UpdateItemId',
);

/* Server action UBTConnect UpdateItem_MarkAsRead(In_UpdateItemId) (UBTConnect.controller.js:18574-18584, copy in
   migration/sources/raw/), called by Directory_Updates_CarouselSwipeAction
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
