/** @origin Leaflet.Leaflet.LeafletMap */
// @os-block Leaflet.Leaflet.LeafletMap
import { useEffect, useId, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  lL_MapObject_Attr,
  map_GeoJSON_Feature_Add,
  map_GetVisibleBoundaries,
  map_InvalidateSize,
  map_Marker_Add,
  map_Marker_DeleteAll,
  map_MarkerCluster_AddToMap,
  map_MarkerCluster_UsingCluster_Set,
  map_SetCurrentLocation,
  map_SetTileLayer,
  map_Zoom_Control,
  map_Zoom_GetLevel,
} from '@/lib/leaflet/actions';
import { mapOptionsJSON, OSM_TILE_URL } from '@/lib/leaflet/json';
import L from '@/lib/leaflet/leaflet';
import type {
  GeoJSONFeature,
  MapOptions,
  MapVisibleBoundaries,
  MarkerWithWindow,
  TileLayer,
  ZoomControlOptions,
} from '@/lib/leaflet/structures';

export interface DirectoryMapProps {
  /** OutSystems instance id of the block. */
  id?: string;
  mapOptions?: MapOptions;
  markersList?: MarkerWithWindow[];
  tileLayer?: TileLayer;
  /** GeoJSON_Features: drawn on the map's GeoJSON layer (Map_DefineGeoJSON). */
  geoJSONFeatures?: GeoJSONFeature[];
  zoomControlOptions?: ZoomControlOptions;
  useClustering?: boolean;
  centerToCurrentLocation?: boolean;
  /** OnInitialized(MapId). */
  onOnInitialized?: (mapId: string) => void | Promise<void>;
  /** SetCallbacks(MapId): raised before the map exists, awaited (the screen stores popup/tooltip callbacks). */
  onSetCallbacks?: (mapId: string) => void | Promise<void>;
  /** OnMarker_Clicked(Id, MapId, Type, ExtraData, Lat, Long, MarkerObj). */
  onOnMarkerClicked?: (
    id: string,
    mapId: string,
    type: string,
    extraData: string,
    lat: number,
    long: number,
    markerObj: L.Marker,
  ) => void;
  /** OnGeoJSON_Clicked(Id, MapId, Type, ExtraData). */
  onOnGeoJSONClicked?: (id: string, mapId: string, type: string, extraData: string) => void;
  /** OnZoomEnd(ZoomLevel). */
  onOnZoomEnd?: (zoomLevel: number) => void;
  /** OnMoveEnd(MapVisibleBoundaries). */
  onOnMoveEnd?: (mapVisibleBoundaries: MapVisibleBoundaries) => void;
  /** OnGoToMyLocation_Clicked(MapId). */
  onOnGoToMyLocationClicked?: (mapId: string) => void;
  onOnParametersChanged?: () => void;
}

/** OnReady InitializeJS (LeafletMap.mvc.js:1158-1179): creates the map on the container, with max bounds, and raises
    Event_OnZoomEnd / Event_OnMoveEnd. */
function initialize(
  id: string,
  options: ReturnType<typeof mapOptionsJSON>,
  onZoomEnd: () => void,
  onMoveEnd: () => void,
) {
  const el = document.getElementById(id) as (HTMLElement & Record<string, unknown>) | null;
  if (!el) return;
  const b = options.maxBounds;
  const maxBounds: L.LatLngBoundsLiteral = [
    [b.Min_Lat, b.Min_Long],
    [b.Max_Lat, b.Max_Long],
  ];
  const map = L.map(el, { ...options, center: options.center as L.LatLngTuple, maxBounds });
  el[lL_MapObject_Attr()] = map;
  map.setMaxBounds(maxBounds);
  map.on('zoomend', onZoomEnd);
  map.on('moveend', onMoveEnd);
}

interface LocalState {
  isInitialized: boolean;
  /** TileLayer_Local (compared as its JSON). */
  tileLayerLocal: string;
}

/** Map_DefineTileUI: re-sets the layer when it changed (or before initialization); OSM without subdomains gets a, b, c. */
function defineTileUI(mapId: string, p: DirectoryMapProps, local: LocalState) {
  const tile = p.tileLayer ?? {};
  const key = JSON.stringify(tile);
  if (key === local.tileLayerLocal && local.isInitialized) return;
  local.tileLayerLocal = key;
  const subdomains = tile.Options?.Subdomains ?? [];
  const effective: TileLayer =
    subdomains.length === 0 && (tile.Url ?? OSM_TILE_URL) === OSM_TILE_URL
      ? { ...tile, Options: { ...tile.Options, Subdomains: ['a', 'b', 'c'] } }
      : tile;
  map_SetTileLayer(effective, mapId);
}

/** Map_DefineGeoJSON (LeafletMap.mvc.js:562-610, GetFuncs :1142-1146): every GeoJSON_Features item through
    Map_GeoJSON_Feature_Add, clicks raising Event_OnGeoJSON_Clicked → OnGeoJSON_Clicked(Id, MapId, Type, ExtraData). */
function defineGeoJSON(mapId: string, latest: { current: DirectoryMapProps }) {
  for (const feature of latest.current.geoJSONFeatures ?? [])
    map_GeoJSON_Feature_Add(feature, mapId, (id, type, extraData) => {
      latest.current.onOnGeoJSONClicked?.(id, mapId, type, extraData);
    });
}

/** Event_OnMarker_Clicked's JSNodeParamConverter.from(value, Text) (LeafletMap.mvc.js:261-272; OutSystems.js
    JSNodeParamConverter): the marker's Id / Type / ExtraData come from its JSON options, where a "" member is absent
    (Serialize Default Values False); an absent one cannot be converted and throws. */
function textFromJS(value: string | undefined): string {
  if (typeof value === 'string') return value;
  throw new TypeError('Cannot assign a JavaScript undefined with value undefined to an output parameter of type Text');
}

/** Map_UpdateOptions (LeafletMap.mvc.js:903-925): clustering flag, tile layer, markers (Map_DefineMarkers), GeoJSON
    (Map_DefineGeoJSON), zoom control (Map_DefineZoomControl). `latest` gives the current props to the callbacks the
    JS keeps. */
function updateOptions(mapId: string, latest: { current: DirectoryMapProps }, local: LocalState) {
  const p = latest.current;
  map_MarkerCluster_UsingCluster_Set(mapId, p.useClustering ?? false);
  defineTileUI(mapId, p, local);
  map_Marker_DeleteAll(mapId);
  for (const marker of p.markersList ?? [])
    map_Marker_Add(
      mapId,
      marker,
      (id, type, extraData, lat, long, markerObj) => {
        latest.current.onOnMarkerClicked?.(
          textFromJS(id),
          mapId,
          textFromJS(type),
          textFromJS(extraData),
          lat,
          long,
          markerObj,
        );
      },
      false,
    );
  if (p.useClustering) map_MarkerCluster_AddToMap(mapId);
  defineGeoJSON(mapId, latest);
  map_Zoom_Control(p.zoomControlOptions ?? {}, mapId, () => {
    latest.current.onOnGoToMyLocationClicked?.(mapId);
  });
}

/** Leaflet map (p:Leaflet.Leaflet.LeafletMap.mvc.js): one container; OnReady builds the map (default center
    51.505, -0.09), then Map_UpdateOptions sets clustering, the tile layer, the markers and the zoom control, as
    OnParametersChanged does. Module scripts: leaflet 1.9.4 and leaflet.markercluster 1.5.3 (ADR-3). */
export function DirectoryMap(props: DirectoryMapProps) {
  const reactId = useId();
  const mapId = `${(props.id ?? reactId).replace(/[^A-Za-z0-9_$-]/g, '')}-LeafletMap`;
  const latest = useRef(props);
  /* The JS keeps callbacks that must see the current inputs and handlers. */
  useEffect(() => {
    latest.current = props;
  });
  const local = useRef<LocalState>({ isInitialized: false, tileLayerLocal: '' });
  const paramsKey = JSON.stringify([
    props.mapOptions,
    props.markersList,
    props.tileLayer,
    props.geoJSONFeatures,
    props.zoomControlOptions,
    props.useClustering,
    props.centerToCurrentLocation,
  ]);

  /* OnInitialize + OnReady (:309, :632). */
  useEffect(() => {
    const run = { cancelled: false };
    const state = local.current;
    const options = mapOptionsJSON(latest.current.mapOptions);
    const hasNoCenter = options.center.length === 0;
    if (hasNoCenter) options.center.push(51.505, -0.09);
    void (async () => {
      await latest.current.onSetCallbacks?.(mapId);
      if (run.cancelled) return;
      initialize(
        mapId,
        options,
        () => latest.current.onOnZoomEnd?.(map_Zoom_GetLevel(mapId)),
        () => latest.current.onOnMoveEnd?.(map_GetVisibleBoundaries(mapId)),
      );
      if (hasNoCenter && latest.current.centerToCurrentLocation) map_SetCurrentLocation(mapId);
      updateOptions(mapId, latest, state);
      state.isInitialized = true;
      map_InvalidateSize(mapId);
      await latest.current.onOnInitialized?.(mapId);
    })();
    return () => {
      /* React unmount (OutSystems destroys the element): release the Leaflet map so a remount can rebuild it. */
      run.cancelled = true;
      const el = document.getElementById(mapId) as (HTMLElement & Record<string, unknown>) | null;
      (el?.[lL_MapObject_Attr()] as L.Map | undefined)?.remove();
      if (el) for (const key of Object.keys(el)) if (key.startsWith('ll_')) Reflect.deleteProperty(el, key);
      state.isInitialized = false;
      state.tileLayerLocal = '';
    };
  }, [mapId]);

  /* OnParametersChanged (:721): Map_UpdateOptions (once the map exists), then the event. */
  const firstParams = useRef(true);
  useEffect(() => {
    if (firstParams.current) {
      firstParams.current = false;
      return;
    }
    if (local.current.isInitialized) updateOptions(mapId, latest, local.current);
    latest.current.onOnParametersChanged?.();
  }, [paramsKey, mapId]);

  return (
    <OSBlock name="Leaflet.LeafletMap" id={props.id}>
      {/* The JS nodes find the map by this element's id (OutSystems idService "LeafletMap"). */}
      <div data-container="" id={mapId} />
    </OSBlock>
  );
}
