/* The three data actions of ScreenBlock_EventBooklet (DataActionGet_EventBooklet{Filters,Guests,Helpers}, all on
   demand: OnReady, then the refreshes of the search, the filters, the view swap and the scroll) and the two builders of
   their inputs SelectedFilters and PaginationSettings are in the domain api/event. This module keeps the names that the
   screen uses. */
export {
  fetchEventBookletFilters as getEventBookletFilters,
  fetchEventBookletGuests as getEventBookletGuests,
  fetchEventBookletHelpers as getEventBookletHelpers,
  toEventBookletPaginationInput as paginationWire,
  toEventBookletSelectedFiltersInput as selectedFiltersWire,
} from '@/api/event';
