import { setClientVar } from './session';

/* Where the app goes back to after sign-in, PIN registration or unlock. */

let resumeLoginLink = '';

/** SetResumeLoginLink (UC:16078-16081): a link opened while signed out, locked or registering (decision U14). */
export function setResumeLoginLink(url: string): void {
  resumeLoginLink = url;
}

/** GetColdStartLinkURL (UC:8083-8145): the link the app was cold-started with, from the Android app-link data or the
    EventfulDeeplinks cold-start URL (GetURLFromEventDataURL). Both are native plugins: on the web there is none
    (decision U14, plugins later), so the link is empty. */
export function getColdStartLinkURL(): string {
  return '';
}

/** GetResumeLoginLink (UC:10770-10819): returns the link and clears it. */
export function getResumeLoginLink(): string {
  const url = resumeLoginLink;
  resumeLoginLink = '';
  return url;
}

/** AppManager_SetAppCallback (AM:4200-4215): OutSystems_LastURL, the sign-in callback location. */
export function setAppCallback(url: string): void {
  setClientVar('UBT_AppManager.OutSystems_LastURL', url);
}

/** AppManager_SetAppCallback_CurrentLocation (AM:4250-4290): OutSystems_LastURL = window.location.pathname. */
export function setAppCallbackCurrentLocation(pathname: string = window.location.pathname): void {
  setAppCallback(pathname);
}
