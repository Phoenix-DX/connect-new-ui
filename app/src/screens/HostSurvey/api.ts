/* DataActionGetHostSurvey of ScreenBlock_HostSurvey (on demand: OnReady → RefreshData; the server reads the block
   variables In_EventId and In_MemberId, and a null input date travels as the null DateTime) is in the domain
   api/event. This module keeps the name that the screen uses. */
export { fetchHostSurvey as getHostSurvey } from '@/api/event';

/** OutSystems null DateTime / Date: kept as "" for the components (the formatters treat "" as null). */
const date = (value: string): string => (value.startsWith('1900-01-01') ? '' : value);

/** A DateTime screen input from the URL (shell/navigation/osNavigate.ts puts ISO texts there): "" when absent or the
    OutSystems null date. */
export const dateTimeInput = (value: string | null): string => (value === null ? '' : date(value));
