import { callAction } from '@/api/client/callAction';

/** GetUserInformation (UBTConnect_Utils): the information of the signed-in user. The user-info cache of
    platform/session calls it on a miss only. */
export async function fetchUserInformation() {
  return (await callAction('UBTConnect_Utils', 'ActionGetUserInformation', {})).UserInformation;
}
