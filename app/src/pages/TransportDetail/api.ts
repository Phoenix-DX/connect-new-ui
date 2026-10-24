/* DataActionGet_TransportDetail of ScreenBlock_TransportDetail (on demand: OnReady → Refresh Query; the server reads
   the block variables In_MilestoneId, ...) is in the domain api/event. This module keeps the name that the screen
   uses. */
export { fetchTransportDetail as getTransportDetail } from '@/api/event';
