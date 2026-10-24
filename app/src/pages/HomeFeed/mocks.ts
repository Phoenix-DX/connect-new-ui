import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';
import { updateItems } from '@/mocks/modules/UBTConnect/Directory_Updates/mocks';

/** Connect_Updates_CS.UI_UpdateItem (FetchUpdates.UI_UpdateItemList), as the contract describes it. */
type UpdateItemWire = ActionOutputs<
  PathOf<'UBTConnect', 'FeedBlock_Updates/DataActionFetchUpdates'>
>['UI_UpdateItemList']['List'][number];

/* HomeFeed own blocks (FeedBlock_CommunityPopulation, Embedded_FeedCMS, App_NotificationIcon, the bottom bar and the
   app start calls are mocked by their shared / shell owners).
   - DataActionGetServices: the recorded TST answer (service labels, links and packages, no person data). Its Id and
     IconId were anonymized by the converter (Q1, open).
   - DataActionFetchUpdates: person data, never recorded (mock-fixtures.md): the three fictional unread items of the
     update items collection (src/mocks/modules/UBTConnect/Directory_Updates/mocks.ts).
   - MarkAsRead / MarkAsUnread: writes, never recorded; they change IsRead in the collection (P-MUTATION), so the next
     fetch (and Updates screens reading this collection) show it.
   Scenarios: real, empty (FetchUpdates empty → Section_Updates hidden), error, loading. */

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
