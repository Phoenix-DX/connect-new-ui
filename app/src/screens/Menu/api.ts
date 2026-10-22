import { callAction } from '@/api/client/callAction';

/** RequestPhotoUpdate (Menu.mvc.js:723-745, screenservices/UBTConnect/App_Menu/Menu/ActionRequestPhotoUpdate): no
    inputs; Out_IsSuccess is returned but the screen does not read it (:1020-1025). */
export async function requestPhotoUpdate(): Promise<boolean> {
  const out = await callAction('UBTConnect', 'ActionRequestPhotoUpdate', {});
  return out.Out_IsSuccess;
}
