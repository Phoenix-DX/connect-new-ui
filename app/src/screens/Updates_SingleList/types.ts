import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* Wire type from the contract (src/api/openapi.yaml), through the callAction types. */
type FetchUpdatesPath = PathOf<'UBTConnect', 'Updates_SingleList/DataActionFetchUpdates'>;
/** Connect_Updates_CS.UI_UpdateItem as the server sends it (Long Integers as text, Date "yyyy-MM-dd"). */
export type UpdateItemWire = ActionOutputs<FetchUpdatesPath>['UI_UpdateItemList']['List'][number];

/* The update item ('' = null date), the filter, the date ranges, the breakpoints, the type options and the screen
   variables that the data actions send are domain types of api/update. This module keeps the names that the screen
   and its client actions use. */
export type {
  FilterUpdates,
  UpdateBreakpoint as Breakpoint,
  UpdateDateRange as DateRange,
  UpdateItem,
  UpdatesListVariables as UpdatesVariables,
  UpdateTypeOption as TagOption,
} from '@/api/update';
