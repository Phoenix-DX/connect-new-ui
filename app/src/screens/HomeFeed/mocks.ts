import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';
import { collection } from '@/mocks/store';
import type { UpdateItemWire } from './types';

/* HomeFeed own blocks (FeedBlock_CommunityPopulation, Embedded_FeedCMS, App_NotificationIcon, the bottom bar and the
   app start calls are mocked by their shared / shell owners).
   - DataActionGetServices: the recorded TST answer (service labels, links and packages, no person data). Its Id and
     IconId were anonymized by the converter (Q1, open).
   - DataActionFetchUpdates: person data, never recorded (mock-fixtures.md): three fictional unread items with the
     captured types (Birth, Marriage, Marriage), HasAccess True; meaningful fictional names, real places and the
     birth's parents, with the captured word lengths (the first rows of the Updates_SingleList mock; mock-fixtures.md).
   - MarkAsRead / MarkAsUnread: writes, never recorded; they change IsRead in the collection (P-MUTATION), so the next
     fetch (and Updates screens reading this collection) show it.
   Scenarios: real, empty (FetchUpdates empty → Section_Updates hidden), error, loading. */

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

export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'FeedBlock_Services/DataActionGetServices'),
  contractHandler('UBTConnect', 'FeedBlock_Updates/DataActionFetchUpdates', () => ({
    UI_UpdateItemList: { List: updateItems.all() as unknown as UpdateItemWire[] },
  })),
  contractHandler('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAsRead', ({ UpdateItemId }) => {
    updateItems.upsert({ UpdateItemId, IsRead: true });
    return {};
  }),
  contractHandler('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAsUnread', ({ UpdateItemId }) => {
    updateItems.upsert({ UpdateItemId, IsRead: false });
    return {};
  }),
];
