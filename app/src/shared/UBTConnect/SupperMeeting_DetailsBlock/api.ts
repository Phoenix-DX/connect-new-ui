/* DataActionGetSubdivision (sent with the block's In_SubdivsionId; refreshed only by ScreenEvent_OnReady) is in the
   domain api/locality. This module keeps the name that the block uses, until it imports the domain name. */
export { fetchSubdivisionDetails as getSubdivision } from '@/api/locality';
