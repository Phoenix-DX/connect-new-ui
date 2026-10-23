/* The two data actions of the screen are in the domain api/notification; this module keeps the names that the screen
   uses. Both send screenData.variables: every screen variable (EventListener objects are not serialisable and stay
   out), with the names as compiled (SCR model :56-142).
   - GetDateRanges (getDateRanges$DataActRefresh, SCR :1141-1158): refresh only (fetch at start -1, SCR :1110), from
     OnReady. Returns the Updates_DateRanges records (Id, Order).
   - FetchNotifications (fetchNotifications$DataActRefresh, SCR :1159-1176): refresh only, from RefreshNotifications. */
export { fetchNotificationDateRanges as getDateRanges, fetchNotifications } from '@/api/notification';
