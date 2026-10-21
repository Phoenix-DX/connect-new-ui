/* Client actions of the Leaflet module used by LeafletMap and the map screens, ported 1:1 from Leaflet.controller.js
   (line numbers below: pretty copy migration/screens/CountryDetails/analysis/sources/pretty/; raw copies in
   migration/screens/{CountryDetails,BrowseDirectory}/analysis/sources/raw/). Like the JS nodes, they keep the map and its
   layers as properties of the map element (document.getElementById(MapId)[<LL_* name>]). */
import type { MarkerClusterGroup } from 'leaflet';
import L from './leaflet';
import { UserException } from '../../../lib/os-exceptions';
import { markerJSON, markerWithWindowJSON, pathOptionsJSON, tileLayerJSON, zoomControlOptionsJSON } from './json';
import type {
  GeoJSONFeature,
  MapVisibleBoundaries,
  MarkerWithWindow,
  PathOptions,
  TileLayer,
  ZoomControlOptions,
} from './structures';

type Host = HTMLElement & Record<string, unknown>;
const host = (id: string): Host | null => document.getElementById(id) as Host | null;

/** Marker click callback of the JS nodes: (Id, Type, ExtraData, Lat, Long, MarkerObj), read from the marker options the
    JSON gave (a member equal to its default is absent: undefined). */
export type OnMarkerClickFunction = (
  id: string | undefined,
  type: string | undefined,
  extraData: string | undefined,
  lat: number,
  long: number,
  markerObj: L.Marker,
) => void;
/** Popup / tooltip content callback stored on the map element by the screen (SetCallbacks). */
export type BindingCallback = (markerWithWindow: MarkerWithWindow) => unknown;

/** LL_MapObject_Attr (:613). */
export const lL_MapObject_Attr = (): string => 'll_map';
/** LL_MapObjectAttr_ZoomControl (:991). */
export const lL_MapObjectAttr_ZoomControl = (): string => 'll_map_zoomControl';
/** LL_MapObjectAttr_MarkerCluster_Layer (:949). */
export const lL_MapObjectAttr_MarkerCluster_Layer = (): string => 'll_map_marker_cluster_layer';
/** LL_MapAttr_IsUsingCluster (:571). */
export const lL_MapAttr_IsUsingCluster = (): string => 'll_map_using_cluster';
/** LL_MapObject_Attr_Marker_Registry (:781). */
export const lL_MapObject_Attr_Marker_Registry = (): string => 'll_map_markers';
/** LL_MapObject_Attr_PopupBindingCallback (:875). */
export const lL_MapObject_Attr_PopupBindingCallback = (): string => 'll_popupbinding_callback';
/** LL_MapObject_Attr_TooltipBindingCallback (:917). */
export const lL_MapObject_Attr_TooltipBindingCallback = (): string => 'll_tooltipbinding_callback';

/** GenerateGUID (:72, JavaScript1). */
export const generateGUID = (): string => crypto.randomUUID();

/** Map_GetObject_FromId (:2357, GetObject): the Leaflet map of the element, or null. */
export function map_GetObject_FromId(id: string): L.Map | null {
  const el = host(id);
  return el?.[lL_MapObject_Attr()] ? (el[lL_MapObject_Attr()] as L.Map) : null;
}

/** GetFromObject_Bool (:383). */
export function getFromObject_Bool(mainObjectId: string, newObjectKey: string): boolean {
  const el = host(mainObjectId);
  return el?.[newObjectKey] ? Boolean(el[newObjectKey]) : false;
}

/** GetFromObject_Object (:560 JS). */
export function getFromObject_Object(mainObjectId: string, newObjectKey: string): unknown {
  const el = host(mainObjectId);
  return el?.[newObjectKey] ? el[newObjectKey] : null;
}

/** GetFromObject_Array (:286, GetObject): creates the array on first use. The marker registry uses it as an Id map. */
export function getFromObject_Array(mainObjectId: string, arrayKey: string): Record<string, L.Marker> | null {
  const el = host(mainObjectId);
  if (!el) return null;
  if (!el[arrayKey]) el[arrayKey] = [];
  return el[arrayKey] as Record<string, L.Marker>;
}

/** SetToObject_Bool (:5382). */
export function setToObject_Bool(mainObjectId: string, newObjectKey: string, newBoolean: boolean): void {
  const el = host(mainObjectId);
  if (el) el[newObjectKey] = newBoolean;
}

/** Map_Marker_GetRegistry (:3720). */
export const map_Marker_GetRegistry = (mapId: string) =>
  getFromObject_Array(mapId, lL_MapObject_Attr_Marker_Registry());

/** Map_MarkerCluster_UsingCluster_Set (:4070). */
export const map_MarkerCluster_UsingCluster_Set = (mapId: string, value: boolean): void => {
  setToObject_Bool(mapId, lL_MapAttr_IsUsingCluster(), value);
};
/** Map_MarkerCluster_UsingCluster_Check (:4007). */
export const map_MarkerCluster_UsingCluster_Check = (mapId: string): boolean =>
  getFromObject_Bool(mapId, lL_MapAttr_IsUsingCluster());

/** Map_GetPopupBindingCallback (:2527) / Map_GetTooltipBindingCallback (:2592). */
export const map_GetPopupBindingCallback = (mapId: string) =>
  getFromObject_Object(mapId, lL_MapObject_Attr_PopupBindingCallback()) as BindingCallback | null;
export const map_GetTooltipBindingCallback = (mapId: string) =>
  getFromObject_Object(mapId, lL_MapObject_Attr_TooltipBindingCallback()) as BindingCallback | null;

/** Map_MarkerCluster_GetOrCreateLayer (:3894, MarkerCluster_SetLayer): one cluster group per map (and per Type). */
export function map_MarkerCluster_GetOrCreateLayer(mapId: string, type: string): MarkerClusterGroup | null {
  const el = host(mapId);
  if (!el) return null;
  const key = type ? `${lL_MapObjectAttr_MarkerCluster_Layer()}_${type}` : lL_MapObjectAttr_MarkerCluster_Layer();
  el[key] ??= L.markerClusterGroup({
    chunkedLoading: true,
    maxClusterRadius: (mapZoom: number) => (mapZoom < 5 ? 20 : mapZoom < 10 ? 40 : 80),
  });
  return el[key] as MarkerClusterGroup;
}

/** Map_MarkerCluster_AddToMap (:3832). */
export function map_MarkerCluster_AddToMap(mapId: string): void {
  const map = map_GetObject_FromId(mapId);
  const cluster = map_MarkerCluster_GetOrCreateLayer(mapId, '');
  if (!map || !cluster) throw new TypeError('Map_MarkerCluster_AddToMap: no map'); // the JS node throws too
  map.addLayer(cluster);
}

/** Map_Marker_DeleteAll (:3651). */
export function map_Marker_DeleteAll(mapId: string): void {
  const registry = map_Marker_GetRegistry(mapId) ?? {};
  const cluster = map_MarkerCluster_GetOrCreateLayer(mapId, '');
  if (cluster) {
    cluster.remove();
    cluster.clearLayers();
  } else {
    Object.values(registry).forEach((marker) => marker.remove());
  }
  Object.keys(registry).forEach((id) => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- the registry is an Id map (JS node)
    delete registry[id];
  });
}

/** Map_Marker_BindPopUp (:3471): only when the popup has content. */
export function map_Marker_BindPopUp(mapId: string, marker: L.Marker, markerWithWindow: MarkerWithWindow): void {
  if ((markerWithWindow.Popup?.Content ?? '') === '') return;
  const json = markerWithWindowJSON(markerWithWindow);
  const callback = map_GetPopupBindingCallback(mapId);
  const popupOptions = json.Popup as L.PopupOptions;
  if (callback) {
    marker.bindPopup(() => {
      const result = callback(markerWithWindow);
      return result instanceof HTMLElement
        ? result
        : (document.createTextNode('Invalid popup content') as unknown as HTMLElement); // Leaflet accepts any node
    }, popupOptions);
  } else {
    marker.bindPopup(json.Popup.content || '', popupOptions);
  }
}

/** Map_Marker_Add (:3226-3406, Create_Marker JS :3408-3480 + Marker__Tooltip_Bind JS :3482). The marker is JSON Serialized with
    Serialize Default Values False (:3277, `markerJSON(…, false)`): its default members are absent, so Leaflet applies its
    own option defaults. */
export function map_Marker_Add(
  mapId: string,
  markerWithWindowIn: MarkerWithWindow,
  onClickFunction: OnMarkerClickFunction | null,
  useTypeBasedClustering: boolean,
): L.Marker {
  const markerWithWindow = {
    ...markerWithWindowIn,
    Marker: { ...markerWithWindowIn.Marker, Id: markerWithWindowIn.Marker?.Id || generateGUID() },
  } satisfies MarkerWithWindow;
  const map = map_GetObject_FromId(mapId);
  const registry = map_Marker_GetRegistry(mapId) ?? {};
  const marker = markerJSON(markerWithWindow.Marker, false);
  /* :3283-3285: the record's Type (not the JSON) picks the cluster layer. */
  const clusterLayer = map_MarkerCluster_UsingCluster_Check(mapId)
    ? map_MarkerCluster_GetOrCreateLayer(mapId, useTypeBasedClustering ? (markerWithWindow.Marker.Type ?? '') : '')
    : null;

  /* Create_Marker */
  const options: L.MarkerOptions & { Id?: string; Type?: string; ExtraData?: string } = {
    ...marker.options,
    icon: marker.options.icon as unknown as L.Icon, // a plain record, as in the JS node, unless replaced below
    Id: marker.Id,
    Type: marker.Type,
    ExtraData: marker.ExtraData,
  };
  const icon = marker.options.icon;
  if (icon.isTextIcon) {
    icon.iconUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    icon.className = `${String(icon.className)} leaflet-text-icon`; // an absent className reads "undefined", as in JS
    const textIconOptions: L.DivIconOptions = {
      className: 'leaflet-text-icon-wrapper',
      html: `<span class="${icon.className}"></span>`,
    };
    if (icon.iconSize.length === 2) textIconOptions.iconSize = icon.iconSize as L.PointTuple;
    if (icon.iconAnchor.length === 2) textIconOptions.iconAnchor = icon.iconAnchor as L.PointTuple;
    options.icon = new L.DivIcon(textIconOptions);
  } else if (icon.iconUrl) {
    /* Empty Decimal lists would override Leaflet's own anchors with [undefined, undefined]: drop them. */
    const iconOptions: Record<string, unknown> = { ...icon };
    for (const key of ['iconSize', 'iconAnchor', 'popupAnchor', 'tooltipAnchor', 'shadowSize', 'shadowAnchor'] as const)
      if (icon[key].length === 0) Reflect.deleteProperty(iconOptions, key);
    options.icon = L.icon(iconOptions as unknown as L.IconOptions);
  }
  if (marker.Type === '-1') {
    document.querySelectorAll('.ubt-map-marker-user-location').forEach((span) => {
      const iconEl = span.closest('.leaflet-marker-icon');
      iconEl?.parentNode?.removeChild(iconEl);
    });
  }
  const object = L.marker(marker.latlng as L.LatLngTuple, options);
  map_Marker_BindPopUp(mapId, object, markerWithWindow);
  if (map) {
    if (clusterLayer && marker.Type !== '-1') clusterLayer.addLayer(object);
    else object.addTo(map);
  }
  registry[markerWithWindow.Marker.Id] = object; // = marker.Id: never "" (a GUID above)
  if (onClickFunction) {
    object.on({
      click(this: L.Marker) {
        const o = this.options as typeof options;
        const latlng = this.getLatLng();
        onClickFunction(o.Id, o.Type, o.ExtraData, latlng.lat, latlng.lng, this);
      },
    });
  }

  /* Marker__Tooltip_Bind, when the tooltip has content (an empty offset becomes [0, 0]). */
  if ((markerWithWindow.Tooltip?.Content ?? '') !== '') {
    const withTooltip: MarkerWithWindow = {
      ...markerWithWindow,
      Tooltip: {
        ...markerWithWindow.Tooltip,
        Options: {
          ...markerWithWindow.Tooltip?.Options,
          Offset: markerWithWindow.Tooltip?.Options?.Offset?.length ? markerWithWindow.Tooltip.Options.Offset : [0, 0],
        },
      },
    };
    const json = markerWithWindowJSON(withTooltip);
    const callback = map_GetTooltipBindingCallback(mapId);
    const tooltipOptions = json.Tooltip.options as L.TooltipOptions;
    if (callback) {
      object.bindTooltip(() => {
        const result = callback(withTooltip);
        return result instanceof HTMLElement
          ? result
          : (document.createTextNode('Invalid tooltip content') as unknown as HTMLElement); // Leaflet accepts any node
      }, tooltipOptions);
    } else {
      object.bindTooltip(json.Tooltip.content, tooltipOptions);
    }
  }
  return object;
}

interface GridLayerInternals {
  _url: string;
  _getSubdomain(point: { x: number; y: number }): string;
  getTileSize(): L.Point;
  getTileUrl(coords: L.Coords): string;
  options: L.TileLayerOptions & { minZoom: number };
}
let withParentFallback: (new (url: string, options?: L.TileLayerOptions) => L.TileLayer) | undefined;

/** Map_SetTileLayer (:4862, Set_TileLayer): plain tile layer, or one that previews the parent tile while loading. */
export function map_SetTileLayer(tileLayerIn: TileLayer, mapId: string): void {
  const map = map_GetObject_FromId(mapId);
  if (!map) return;
  const tileLayer = tileLayerJSON(tileLayerIn);
  withParentFallback ??= L.TileLayer.extend({
    createTile(this: GridLayerInternals, coords: L.Coords, done: L.DoneCallback) {
      const tileSize = this.getTileSize();
      const tile = document.createElement('div');
      tile.style.position = 'absolute';
      tile.style.width = `${String(tileSize.x)}px`;
      tile.style.height = `${String(tileSize.y)}px`;
      try {
        const parentZ = coords.z - 1;
        if (parentZ >= this.options.minZoom) {
          const parentX = Math.floor(coords.x / 2);
          const parentY = Math.floor(coords.y / 2);
          const quadX = ((coords.x % 2) + 2) % 2;
          const quadY = ((coords.y % 2) + 2) % 2;
          const parentData = {
            r: L.Browser.retina ? '@2x' : '',
            s: this._getSubdomain({ x: parentX, y: parentY }),
            x: parentX,
            y: parentY,
            z: parentZ,
          };
          const parentUrl = L.Util.template(this._url, L.extend({}, parentData, this.options));
          tile.style.backgroundImage = `url(${parentUrl})`;
          tile.style.backgroundSize = '200% 200%';
          tile.style.backgroundPosition = `${String(quadX * 100)}% ${String(quadY * 100)}%`;
        }
      } catch (parentFallbackError) {
        console.warn('Parent tile fallback failed, continuing without preview:', parentFallbackError);
      }
      const img = document.createElement('img');
      img.style.position = 'absolute';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.2s';
      img.onload = () => {
        img.style.opacity = '1';
        done(undefined, tile);
      };
      img.onerror = (e) => {
        done(e as unknown as Error, tile); // the JS node passes the error event as is
      };
      img.src = this.getTileUrl(coords);
      tile.appendChild(img);
      return tile;
    },
  }) as unknown as new (url: string, options?: L.TileLayerOptions) => L.TileLayer;
  const options = tileLayer.options as L.TileLayerOptions & { EnableParentTileFallback: boolean };
  if (options.EnableParentTileFallback) new withParentFallback(tileLayer.url, options).addTo(map);
  else L.tileLayer(tileLayer.url, options).addTo(map);
}

/** Map_Zoom_Control (:5153, JavaScript1): replaces the zoom control by one with the given classes and an optional
    "go to my location" button. */
export function map_Zoom_Control(
  zoomControlOptions: ZoomControlOptions,
  mapId: string,
  onLocationClickedFunction: () => void,
): void {
  const map = map_GetObject_FromId(mapId) as (L.Map & Record<string, unknown>) | null;
  if (!map) return;
  const attr = lL_MapObjectAttr_ZoomControl();
  if (map.zoomControl as L.Control.Zoom | undefined) map.removeControl(map.zoomControl);
  if (map[attr]) map.removeControl(map[attr] as L.Control);
  const options = zoomControlOptionsJSON(zoomControlOptions);
  const ZoomCustomControl = L.Control.Zoom.extend({
    onAdd(this: L.Control.Zoom, m: L.Map) {
      const container = (L.Control.Zoom.prototype as unknown as { onAdd(m: L.Map): HTMLElement }).onAdd.call(this, m);
      container.classList.add('leaflet-custom-controls');
      if (options.zoomInClass !== '')
        container
          .getElementsByClassName('leaflet-control-zoom-in')[0]
          ?.classList.add(...options.zoomInClass.split(' '));
      if (options.zoomOutClass !== '')
        container
          .getElementsByClassName('leaflet-control-zoom-out')[0]
          ?.classList.add(...options.zoomOutClass.split(' '));
      if (options.isAddGoToMyLocationButton) {
        const locateBtn = L.DomUtil.create('a', '', container);
        locateBtn.classList.add('leaflet-custom-location-btn');
        if (options.MyLocationButtonClass !== '') locateBtn.classList.add(...options.MyLocationButtonClass.split(' '));
        locateBtn.innerHTML = options.MyLocationButtonText;
        locateBtn.href = '#';
        locateBtn.title = options.MyLocationButtonTitle;
        L.DomEvent.on(locateBtn, 'click', (e) => {
          e.preventDefault();
          onLocationClickedFunction();
        });
      }
      return container;
    },
  }) as unknown as new (options: L.Control.ZoomOptions) => L.Control.Zoom;
  const control = new ZoomCustomControl(options as L.Control.ZoomOptions);
  map[attr] = control;
  map.addControl(control);
}

/** Map_SetCurrentLocation (:4751). */
export function map_SetCurrentLocation(mapId: string): void {
  map_GetObject_FromId(mapId)?.locate({ setView: true });
}

/** Map_InvalidateSize (:2861). */
export function map_InvalidateSize(mapId: string): void {
  const map = map_GetObject_FromId(mapId);
  if (!map) throw new TypeError('Map_InvalidateSize: no map'); // the JS node throws too
  map.invalidateSize();
}

/** Map_Zoom_GetLevel (:5294). */
export const map_Zoom_GetLevel = (mapId: string): number => map_GetObject_FromId(mapId)?.getZoom() ?? 0;

/** Map_GetVisibleBoundaries (:2655). */
export function map_GetVisibleBoundaries(mapId: string): MapVisibleBoundaries {
  const map = map_GetObject_FromId(mapId);
  if (!map) return { MaxLat: 0, MinLat: 0, MaxLong: 0, MinLong: 0 };
  const bounds = map.getBounds();
  const northEast = bounds.getNorthEast();
  const southWest = bounds.getSouthWest();
  return { MaxLat: northEast.lat, MinLat: southWest.lat, MaxLong: northEast.lng, MinLong: southWest.lng };
}

/* ---- GeoJSON (wave 4D): Map_DefineGeoJSON's actions. ---- */
/** GeoJSON click callback of the JS nodes: (Id, Type, ExtraData) of the clicked feature. */
export type OnGeoJSONClickFunction = (id: string, type: string, extraData: string) => void;
/** Style callback stored on the map element (Map_GeoJSON_Callback_SetStyle): returns { Style } for a feature. */
export type GeoJSONStyleFunction = (feature: unknown) => { Style: L.PathOptions | null };
/** A feature as Crete_Feature extends it: the parsed FeatureJSON plus Id, Type and ExtraData. */
type OSFeature = { geometry?: unknown; Id: string; Type: string; ExtraData: string } & Record<string, unknown>;
type FeatureLayer = L.Layer & { feature?: OSFeature };

/** LL_MapObject_Attr_GeoJSON_Callback_Style (:653-693). */
export const lL_MapObject_Attr_GeoJSON_Callback_Style = (): string => 'll_map_gjson_callback_style';
/** LL_MapObject_Attr_GeoJSON_Layer (:695-735). */
export const lL_MapObject_Attr_GeoJSON_Layer = (): string => 'll_map_gjson_layer';
/** LL_MapObject_Attr_GeoJSON_Registry (:737-777). */
export const lL_MapObject_Attr_GeoJSON_Registry = (): string => 'll_map_gjson';

/** SetToObject_Object (:5454, JavaScript1 :5519-5527). */
export function setToObject_Object(mainObjectId: string, key: string, newObject: unknown): void {
  const el = host(mainObjectId);
  if (el) el[key] = newObject;
}

/** Map_GeoJSON_Callback_GetStyle (:1325-1386): the style callback stored on the map element, or null. */
export const map_GeoJSON_Callback_GetStyle = (mapId: string): GeoJSONStyleFunction | null =>
  getFromObject_Object(mapId, lL_MapObject_Attr_GeoJSON_Callback_Style()) as GeoJSONStyleFunction | null;

/** Map_GeoJSON_Callback_SetStyle (:1388-1440): stores the style callback on the map element. */
export function map_GeoJSON_Callback_SetStyle(mapId: string, callbackFunction: GeoJSONStyleFunction): void {
  setToObject_Object(mapId, lL_MapObject_Attr_GeoJSON_Callback_Style(), callbackFunction);
}

/** Map_GeoJSON_GetLayer (:1871-1955, GeoJSONSetLayer :1957-1978): the map's one L.geoJSON layer, created on first use
    with a style function that asks the stored style callback (null without one), and (re)added to the map. */
export function map_GeoJSON_GetLayer(mapId: string): L.GeoJSON | null {
  const mapObject = map_GetObject_FromId(mapId);
  const el = host(mapId);
  if (!el) return null;
  const attr = lL_MapObject_Attr_GeoJSON_Layer();
  if (!el[attr]) {
    el[attr] = L.geoJSON(null, {
      /* The JS returns `fn(feature).Style` or null; Leaflet's setStyle of null or {} changes nothing. */
      style: (feature) => {
        const fn = map_GeoJSON_Callback_GetStyle(mapId);
        return fn ? (fn(feature).Style ?? {}) : {};
      },
    });
  }
  const layer = el[attr] as L.GeoJSON;
  if (mapObject) layer.addTo(mapObject);
  return layer;
}

/** Map_GeoJSON_GetRegistry (:1980-2030): the Id → feature layer map kept on the map element. */
export const map_GeoJSON_GetRegistry = (mapId: string) =>
  getFromObject_Array(mapId, lL_MapObject_Attr_GeoJSON_Registry()) as Record<string, FeatureLayer> | null;

/** Map_Internal_Layer_SetStyle (:2792-2850, SetStyle :2852-2857): `setStyle` with the serialized PathOptions
    (Serialize Default Values False :2841: only the attributes that differ from their default). */
export function map_Internal_Layer_SetStyle(object: unknown, options: PathOptions = {}): void {
  (object as L.Path).setStyle(pathOptionsJSON(options));
}

/** Map_GeoJSON_Feature_Add (:1442-1563, Crete_Feature :1565-1597): a feature without Id gets a GUID; the parsed
    FeatureJSON (no geometry → nothing) gets Id, Type and ExtraData, is added to the GeoJSON layer unless its Id is in
    the registry, is registered, gets the click callback (Id, Type, ExtraData), then its PathOptions style. */
export function map_GeoJSON_Feature_Add(
  geoJSON_Feature: GeoJSONFeature,
  mapId: string,
  onClickFunction: OnGeoJSONClickFunction | null,
): void {
  const feature = { ...geoJSON_Feature, Id: geoJSON_Feature.Id ?? '' };
  if (feature.Id === '') feature.Id = generateGUID();
  map_GetObject_FromId(mapId);
  const geoJSONLayer = map_GeoJSON_GetLayer(mapId);
  const registry = map_GeoJSON_GetRegistry(mapId);
  /* Crete_Feature (JS). */
  const geojsonFeature = JSON.parse(feature.FeatureJSON ?? '') as OSFeature;
  if (!geojsonFeature.geometry) return;
  geojsonFeature.Id = feature.Id;
  geojsonFeature.Type = feature.Type ?? '';
  geojsonFeature.ExtraData = feature.ExtraData ?? '';
  const reg = registry as Record<string, FeatureLayer>;
  const layer = geoJSONLayer as L.GeoJSON;
  if (!reg[geojsonFeature.Id]) layer.addData(geojsonFeature as unknown as Parameters<L.GeoJSON['addData']>[0]);
  reg[geojsonFeature.Id] = layer
    .getLayers()
    .find((l: FeatureLayer) => l.feature?.Id === geojsonFeature.Id) as FeatureLayer;
  const featureObject = reg[geojsonFeature.Id] as FeatureLayer;
  if (onClickFunction) {
    featureObject.on({
      click: function (this: FeatureLayer) {
        const f = this.feature as OSFeature;
        onClickFunction(f.Id, f.Type, f.ExtraData);
      },
    });
  }
  map_Internal_Layer_SetStyle(featureObject, feature.PathOptions);
}

/* ---- Map screens (CR-CountryDetails-1, CR-BrowseDirectory-1): actions CountryDetails and BrowseDirectory call. ---- */
/** Map_FitBoundsAuto (:1137-1205, JavaScript1 :1206-1231): Map_GetObject_FromId, then with clustering the cluster
    layer's bounds when valid: a single point → setView(point, 5), else fitBounds(padding 80, animated, 1 s); without
    clustering the user exception Leaflet.UserException2 "Not implemented". */
export function map_FitBoundsAuto(mapId: string): void {
  const mapObject = map_GetObject_FromId(mapId);
  if (!map_MarkerCluster_UsingCluster_Check(mapId))
    throw new UserException('Not implemented', 'Leaflet.UserException2');
  const clusterLayer = map_MarkerCluster_GetOrCreateLayer(mapId, '');
  if (!clusterLayer) throw new TypeError('Map_FitBoundsAuto: no cluster layer'); // the JS node's getBounds throws too
  const bounds = clusterLayer.getBounds();
  if (!bounds.isValid()) return;
  if (!mapObject) throw new TypeError('Map_FitBoundsAuto: no map'); // the JS node's setView / fitBounds throw too
  const northEast = bounds.getNorthEast();
  const southWest = bounds.getSouthWest();
  // check if it's basically a single point
  const isSinglePoint = northEast.lat === southWest.lat && northEast.lng === southWest.lng;
  if (isSinglePoint) mapObject.setView(northEast, 5);
  else mapObject.fitBounds(bounds, { padding: [80, 80], animate: true, duration: 1 });
}

/** Map_Marker_OpenPopUp (:3823-3865, OpenPopup JS :3866-3870): MarkerObj.openPopup(). */
export function map_Marker_OpenPopUp(markerObj: L.Marker): void {
  markerObj.openPopup();
}

/** Map_SetPopupBindingCallback (:4897-4925): SetToObject_Object(MapId, LL_MapObject_Attr_PopupBindingCallback,
    Callback); Map_Marker_BindPopUp reads it. */
export function map_SetPopupBindingCallback(mapId: string, callback: BindingCallback): void {
  setToObject_Object(mapId, lL_MapObject_Attr_PopupBindingCallback(), callback);
}
