import { callAction, type ActionOutputs, type PathOf } from '@/api/client/callAction';
import { osNumber } from '@/legacy/os/os-wire';
import type { UnreadMessageCounts } from './types';

/* The app-start call of the message domain (SynchronizeNumberUnreadMessages, platform/bootstrap/startup.ts), kept apart
   from repository.ts and mapper.ts, which re-export it, so that the entry chunk does not pull the other calls of the
   domain (decision W18: a small module for the app-start call). */

/** The outputs of GetNumberUnreadMessages. */
export type UnreadMessageCountsWire = ActionOutputs<PathOf<'Connect2_LegacyShared', 'ActionGetNumberUnreadMessages'>>;

/** The two counts of GetNumberUnreadMessages (Long Integer texts → numbers). */
export const toUnreadMessageCounts = (wire: UnreadMessageCountsWire): UnreadMessageCounts => ({
  publicCount: osNumber(wire.NumberPublicUnreadMessages),
  privateCount: osNumber(wire.NumberPrivateUnreadMessages),
});

/** GetNumberUnreadMessages(DeviceId) (server action of Connect2_LegacyShared), called by
    SynchronizeNumberUnreadMessages: the unread public and private messages of the device. */
export async function fetchNumberUnreadMessages(deviceId: string): Promise<UnreadMessageCounts> {
  return toUnreadMessageCounts(
    await callAction('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', { DeviceId: deviceId }),
  );
}
