/* The four data actions of ScreenBlock_EventDetail (DataActionGet_EventDetails, _HostSurveyStatus, _HasDocuments and
   _HasQRCode, all on demand: OnReady refreshes them one after the other) are in the domain api/event. This module keeps
   the names that the screen uses. */
export {
  fetchEventDetails as getEventDetails,
  fetchHasDocuments as getHasDocuments,
  fetchHasQRCode as getHasQRCode,
  fetchHostSurveyStatus as getHostSurveyStatus,
} from '@/api/event';
