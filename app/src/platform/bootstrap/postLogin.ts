import { log } from '@/platform/log/log';
import {
  synchBookmarks,
  synchBookmarksC2,
  syncNotes,
  type LegacyLocalBookmark,
  type LocalBookmark,
  type LocalNote,
} from '@/platform/storage/localEntities';
import { isSignedIn, setClientVar } from '@/platform/session/session';
import { getUserInformation_Wrapper, releaseUserInfoForAppStart } from '@/platform/session/userInfo';
import { syncInfoMain, synchronizeNumberUnreadMessages } from './startup';

/* The logged context of a signed-in user: the post-login sequence of the Login callback, and the signed-in part of the
   app start (appStartSteps.ts, step setLoggedContext). Neither depends on the identity provider (plan v2 §3.2): sign-in
   (platform/session/auth.ts) runs postLogin after the provider signed the user in. */

/** OutSystems CurrDateTime on the wire: ISO date and time without milliseconds. */
const nowWire = () => new Date().toISOString().slice(0, 19);

/** Connect_SetLoggedContext(Bookmarks, IsFromLogin, Bookmarks_C2, Notes) (UC:1092-1160), signed in only. The lists:
    the app start passes Sync_Info_Main's outputs (UC:15367), the login empty lists (Login.mvc.js:845); from the login,
    Sync_Info_Main replaces them (UC:1121-1128). SynchBookmarks, SynchBookmarksC2 and SyncNotes each replace a whole
    local copy (UC:1135-1150; shell/localEntities). */
export async function connectSetLoggedContext(
  isFromLogin: boolean,
  notes: readonly LocalNote[] = [],
  bookmarks: readonly LegacyLocalBookmark[] = [],
  bookmarks_C2: readonly LocalBookmark[] = [],
): Promise<void> {
  if (!isSignedIn()) return;
  try {
    await getUserInformation_Wrapper(); // Sync_UserInfo_TriggerCache: errors swallowed
  } catch (e) {
    log.warn('Sync_UserInfo_TriggerCache failed', e);
  } finally {
    releaseUserInfoForAppStart();
  }
  if (isFromLogin) ({ notes, bookmarks, bookmarks_C2 } = await syncInfoMain(true));
  await synchBookmarks(bookmarks);
  await synchBookmarksC2(bookmarks_C2);
  setClientVar('UBTConnect.Bookmarks_IsSynched', true);
  await syncNotes(notes);
  setClientVar('UBTConnect.Notes_IsSynched', true);
  await synchronizeNumberUnreadMessages();
  setClientVar('UBTConnect.Notifications_IsSynched', true);
  setClientVar('UBTConnect.Notifications_LastChecked', nowWire());
}

/** What the Login callback runs once the user is signed in (Login p:UBTConnect.App_Common.Login.mvc.js:836-870):
    Connect_SetLoggedContext(isFromLogin = True) (GetUserInformation, Sync_Info_GetMain with isFromLogin = true,
    GetNumberUnreadMessages), then TriggerOfflineDataSync, an empty action (UC:15118-15140). */
export async function postLogin(): Promise<void> {
  await connectSetLoggedContext(true);
}
