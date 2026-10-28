import { useEffect, useRef } from 'react';
import { fetchLocalityCardList } from '@/api/locality';
import type { DirectoryMapProps } from '@/components/directory/DirectoryMap';
import type { BrowseDirectoryInputs } from '@/pages/BrowseDirectory/inputs';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, useOsNavigate } from '@/platform/navigation';
import {
  map_FitBoundsAuto,
  map_InvalidateSize,
  map_Marker_OpenPopUp,
  map_SetPopupBindingCallback,
} from '@/lib/leaflet/actions';
import { directory_BrowseByCountry_TooltipBuilder, hasAccessToRegion } from '@/lib/ubtConnect/actions';
import {
  asLongText,
  browseDirectoryReducer,
  INITIAL_BROWSE_DIRECTORY_STATE,
  localityLabelOf,
  type BrowseDirectoryState,
} from './browseDirectoryState';

/** The flows and the handlers of the BrowseDirectory screen: ScreenEvent_OnReady with Action_RefreshData (the refresh
    of DataActionGetLocalityStatistics and its OnAfterFetch), the map handlers (Handler_LeafletMapOnInitialized,
    LeafletMapSetCallbacks, Handler_LeafletMapOnMarker_Clicked, Action_InvalidateMapSize), and the handlers of the list
    (StatisticsListOnParametersChhanged, Handler_StatisticsList_Clicked) and of the top section
    (Handler_BrowseCountries). The page calls this hook and passes the result to the view.
    @origin UBTConnect.Directory_Locality.BrowseDirectory */

/** What the page reads. */
export interface BrowseDirectoryFlows {
  /** The screen variables and the outputs of GetLocalityStatistics. */
  state: BrowseDirectoryState;
  /** Handler_BrowseCountries: the top section, "Select another country to view". */
  onBrowseCountries: () => void;
  /** Handler_LeafletMapOnInitialized: the OnInitialized event of the map. */
  onMapInitialized: (mapId: string) => void;
  /** LeafletMapSetCallbacks: the SetCallbacks event of the map. */
  onSetCallbacks: (mapId: string) => void;
  /** Handler_LeafletMapOnMarker_Clicked: the OnMarker_Clicked event of the map. */
  onMarkerClicked: NonNullable<DirectoryMapProps['onOnMarkerClicked']>;
  /** Handler_StatisticsList_Clicked: the Event_Clicked of StatisticsList, and the link of a map popup. */
  onStatisticsListClicked: (localityId: string) => void;
  /** StatisticsListOnParametersChhanged: the OnParametersChangedEv event of StatisticsList (Map_InvalidateSize). */
  onStatisticsListParametersChanged: () => void;
}

/** The state and the flows of the screen. The state comes from useFlowState and the view cache keeps it.
    Flow scope (item 8): GetLocalityStatistics is a data action (R1, `flow.fetch`): after the unmount its answer and
    its failure are dropped. Action_InvalidateMapSize is an own screen action (R3, `flow.own`): the timer of
    OnInitialized does nothing after the unmount (BrowseDirectory.js:961). HasAccessToRegion and the upgrade popup are
    module actions: they run after leaving. The navigation from a left screen does not happen (R4, useOsNavigate). */
export function useBrowseDirectory(inputs: BrowseDirectoryInputs): BrowseDirectoryFlows {
  const navigate = useOsNavigate();
  /** Local_MapId: set by Handler_LeafletMapOnInitialized. */
  const localMapId = useRef('');
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: 'Directory_Locality.BrowseDirectory',
    reducer: browseDirectoryReducer,
    initial: INITIAL_BROWSE_DIRECTORY_STATE,
    parameters: inputs,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
  });

  /** Action_RefreshData: the skeleton list (10 rows), then the data action and its OnAfterFetch. */
  const refreshData = async () => {
    dispatch({ type: 'refreshStarted' });
    const data = await flow.fetch(fetchLocalityCardList(parameters.current.CountryCode)); // R1
    dispatch({ type: 'localityStatisticsFetched', data });
  };

  /** ScreenEvent_OnReady: a view that the view cache restored with its data fetched keeps it; otherwise
      Action_RefreshData. A failed fetch goes to the flow handler (useFlowState). */
  const onReady = async (restored: boolean) => {
    if (restored && latest.current.isDataFetched) return;
    await refreshData();
  };

  /** Action_InvalidateMapSize: nothing before the map exists; else Map_InvalidateSize and Map_FitBoundsAuto. An own
      action of the screen (R3): after the unmount a call throws ControllerDisposedException. */
  const invalidateMapSize = flow.own(() => {
    if (localMapId.current === '') return;
    map_InvalidateSize(localMapId.current);
    map_FitBoundsAuto(localMapId.current);
  });

  /** Handler_StatisticsList_Clicked: an empty id does nothing. Without access to the region, the upgrade popup;
      else Locality_Details with the locality and its label. */
  const statisticsListClicked = async (eventId: string) => {
    if (eventId === '') return;
    // A module action: not wrapped.
    const hasAccess = await hasAccessToRegion(asLongText(eventId), parameters.current.CountryCode);
    if (!hasAccess) {
      await showUpgradePopUp(); // module action: runs after leaving, as on TST
      return;
    }
    // R4 in useOsNavigate.
    navigate('/UBTConnect/Locality_Details', {
      LocalityId: asLongText(eventId),
      PreloadedLocalityLabel: localityLabelOf(latest.current, eventId),
    });
  };
  /** The handler of the newest render, for the popup links that the map keeps. */
  const clickedRef = useRef(statisticsListClicked);
  useEffect(() => {
    clickedRef.current = statisticsListClicked;
  });

  return {
    state,
    onBrowseCountries: () => {
      navigate('/UBTConnect/BrowseCountries', {});
    },
    // Local_MapId, then AsyncInvalidate: Action_InvalidateMapSize in a setTimeout of 0.
    onMapInitialized: (mapId) => {
      localMapId.current = mapId;
      setTimeout(() => {
        try {
          invalidateMapSize();
        } catch (error) {
          raiseToFlowHandler(error, flow);
        }
      }, 0);
    },
    // The popup content is Directory_BrowseByCountry_TooltipBuilder(marker, Handler_StatisticsList_Clicked).
    onSetCallbacks: (mapId) => {
      map_SetPopupBindingCallback(mapId, (marker) =>
        directory_BrowseByCountry_TooltipBuilder(marker, (id) => {
          flow.run(() => clickedRef.current(id));
        }),
      );
    },
    // Map_Marker_OpenPopUp(MarkerObj).
    onMarkerClicked: (...args) => {
      map_Marker_OpenPopUp(args[6]);
    },
    onStatisticsListClicked: (localityId) => {
      flow.run(() => statisticsListClicked(localityId));
    },
    // StatisticsListOnParametersChhanged (BrowseDirectory.mvc.js:1025-1040): Map_InvalidateSize only, once the map
    // exists (no Map_FitBoundsAuto, unlike Action_InvalidateMapSize).
    onStatisticsListParametersChanged: () => {
      try {
        if (localMapId.current !== '') map_InvalidateSize(localMapId.current);
      } catch (error) {
        raiseToFlowHandler(error, flow);
      }
    },
  };
}
