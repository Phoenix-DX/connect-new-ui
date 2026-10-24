/* JSON Serialize of the Leaflet structures as the JS nodes read them: JSON.parse of
   OS.JSONUtils.serializeToJSON(record, SerializeDefaultValues, false). TST runs the classic converter
   (migration/runtime-sources/OutSystemsSettings.js: UseNewJSONSerialization = false; OutSystems.js JSONConverter.to):
   every attribute under its JSON name (Leaflet.model.js `this.attr(Name, …, JSONName, …)`), nested records and lists
   always written; with Serialize Default Values False a basic value (also a list item) equal to its default becomes null
   (basicTypeToJSON), and the stringify replacer drops null members (a null list item stays null). Defaults from
   Leaflet.model.js. The flag per call (pretty Leaflet.controller.js, same in the raw copies): Map_Marker_Add's marker
   :3277 False; its Tooltip :3322 and Map_Marker_BindPopUp :3530 True; Map_SetTileLayer :4971 and Map_Zoom_Control
   :5280 True; Map_Internal_Layer_SetStyle :2841 False; LeafletMap's MapOptions (LeafletMap.mvc.js:664) True. */
import type L from './leaflet';
import type {
  Icon,
  MapOptions,
  PathOptions,
  Marker,
  MarkerWithWindow,
  PopUp,
  TileLayer,
  Tooltip,
  ZoomControlOptions,
} from './structures';

/** TileLayerRec Url default. */
export const OSM_TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export function tileLayerJSON(t: TileLayer = {}) {
  const o = t.Options ?? {};
  return {
    url: t.Url ?? OSM_TILE_URL,
    options: {
      minZoom: o.MinZoom ?? 0,
      maxZoom: o.MaxZoom ?? 19,
      maxNativeZoom: o.MaxNativeZoom ?? 19,
      subdomains: [...(o.Subdomains ?? [])],
      errorTileUrl: o.ErrorTileUrl ?? '',
      tms: o.Tms ?? false,
      zoomOffset: o.ZoomOffset ?? 0,
      zoomReverse: o.ZoomReverse ?? false,
      detectRetina: o.DetectRetina ?? false,
      attribution: o.Attribution ?? '',
      noWrap: o.noWrap ?? false,
      keepBuffer: o.KeepBuffer ?? 0,
      updateWhenIdle: o.UpdateWhenIdle ?? false,
      EnableParentTileFallback: o.EnableParentTileFallback ?? false,
    },
  };
}

/** basicTypeToJSON (OutSystems.js JSONConverter): with Serialize Default Values False, a value equal to its default is
    null (dropped by the replacer). */
function basic<T extends string | number | boolean>(value: T | undefined, defaultValue: T, sdv: boolean): T | null {
  const v = value ?? defaultValue;
  return !sdv && v === defaultValue ? null : v;
}

/** A list of basic values: always written; each item through basicTypeToJSON with its type's default. */
function basicList<T extends string | number>(items: readonly T[] | undefined, itemDefault: T, sdv: boolean) {
  return (items ?? []).map((item) => basic(item, itemDefault, sdv));
}

/** serializeToJSON's JSON.stringify(record, replacer) (null members dropped, null list items kept as null), then the JS
    node's JSON.parse. */
function parsed(record: unknown): unknown {
  return JSON.parse(JSON.stringify(record, (_key, value: unknown) => (value === null ? undefined : value)));
}

/** IconRec as the JS node reads it: members equal to their default are absent when Serialize Default Values is False. */
export interface IconJSON {
  iconUrl?: string;
  iconRetinaUrl?: string;
  iconSize: (number | null)[];
  iconAnchor: (number | null)[];
  popupAnchor: (number | null)[];
  tooltipAnchor: (number | null)[];
  shadowUrl?: string;
  shadowRetinaUrl?: string;
  shadowSize: (number | null)[];
  shadowAnchor: (number | null)[];
  className?: string;
  crossOrigin?: string;
  isTextIcon?: boolean;
}

/** MarkerRec as the JS node reads it (same rule as IconJSON). */
export interface MarkerJSON {
  Id?: string;
  Type?: string;
  ExtraData?: string;
  latlng: (number | null)[];
  options: {
    icon: IconJSON;
    draggable?: boolean;
    keyboard?: boolean;
    title?: string;
    alt?: string;
    zIndexOffset?: number;
    opacity?: number;
    riseOnHover?: boolean;
    riseOffset?: number;
  };
}

function iconJSON(i: Icon, sdv: boolean) {
  return {
    iconUrl: basic(i.iconUrl, '', sdv),
    iconRetinaUrl: basic(i.iconRetinaUrl, '', sdv),
    iconSize: basicList(i.iconSize, 0, sdv),
    iconAnchor: basicList(i.iconAnchor, 0, sdv),
    popupAnchor: basicList(i.popupAnchor, 0, sdv),
    tooltipAnchor: basicList(i.tooltipAnchor, 0, sdv),
    shadowUrl: basic(i.shadowUrl, '', sdv),
    shadowRetinaUrl: basic(i.shadowRetinaUrl, '', sdv),
    shadowSize: basicList(i.shadowSize, 0, sdv),
    shadowAnchor: basicList(i.shadowAnchor, 0, sdv),
    className: basic(i.className, '', sdv),
    crossOrigin: basic(i.crossOrigin, '', sdv),
    isTextIcon: basic(i.isTextIcon, false, sdv),
  };
}

/** MarkerRec (Leaflet.model.js:353-381; MarkerOptionsRec :308-348, JSON names lower-case; IconRec :91-143).
    Map_Marker_Add serializes it with Serialize Default Values False (:3277): Keyboard False, Opacity 0, Alt "", … are
    left out, so `L.marker` keeps Leaflet's own defaults (keyboard true → tabindex 0 and role button, opacity 1, alt
    "Marker"). Inside MarkerWithWindow (tooltip :3322, popup :3530) it is serialized with True. */
export function markerJSON(m: Marker = {}, serializeDefaultValues: boolean): MarkerJSON {
  const sdv = serializeDefaultValues;
  const o = m.Options ?? {};
  return parsed({
    Id: basic(m.Id, '', sdv),
    Type: basic(m.Type, '', sdv),
    ExtraData: basic(m.ExtraData, '', sdv),
    latlng: basicList(m.Latlng, 0, sdv),
    options: {
      icon: iconJSON(o.Icon ?? {}, sdv),
      draggable: basic(o.Draggable, false, sdv),
      keyboard: basic(o.Keyboard, false, sdv),
      title: basic(o.Title, '', sdv),
      alt: basic(o.Alt, '', sdv),
      zIndexOffset: basic(o.ZIndexOffset, 0, sdv),
      opacity: basic(o.Opacity, 0, sdv),
      riseOnHover: basic(o.RiseOnHover, false, sdv),
      riseOffset: basic(o.RiseOffset, 0, sdv),
    },
  }) as MarkerJSON;
}

function tooltipJSON(t: Tooltip = {}) {
  const o = t.Options ?? {};
  return {
    content: t.Content ?? '',
    options: {
      pane: o.Pane ?? 'tooltipPane',
      offset: [...(o.Offset ?? [])],
      direction: o.Direction ?? 'top',
      permanent: o.Permanent ?? false,
      sticky: o.Sticky ?? true,
      interactive: o.Interactive ?? true,
      opacity: o.Opacity ?? 0.9,
      className: o.ClassName ?? '',
    },
  };
}

function popUpJSON(p: PopUp = {}) {
  return {
    pane: p.Pane ?? 'popupPane',
    maxWidth: p.MaxWidth ?? 300,
    minWidth: p.MinWidth ?? 50,
    autoPan: p.AutoPan ?? false,
    autoPanPadding: { x: p.AutoPanPadding?.X ?? 0, y: p.AutoPanPadding?.Y ?? 0 },
    keepInView: p.KeepInView ?? false,
    closeButton: p.CloseButton ?? false,
    autoClose: p.AutoClose ?? false,
    closeOnEscapeKey: p.CloseOnEscapeKey ?? false,
    className: p.ClassName ?? '',
    interactive: p.Interactive ?? false,
    content: p.Content ?? '',
  };
}

export function markerWithWindowJSON(m: MarkerWithWindow = {}) {
  return { Marker: markerJSON(m.Marker, true), Tooltip: tooltipJSON(m.Tooltip), Popup: popUpJSON(m.Popup) };
}

export function mapOptionsJSON(m: MapOptions = {}) {
  const b = m.MaxBounds ?? {};
  return {
    center: [...(m.Center ?? [])],
    zoom: m.Zoom ?? 13,
    minZoom: m.MinZoom ?? 0,
    maxZoom: m.MaxZoom ?? 19,
    maxBounds: {
      Max_Lat: b.Max_Lat ?? 90,
      Min_Lat: b.Min_Lat ?? -90,
      Max_Long: b.Max_Long ?? 180,
      Min_Long: b.Min_Long ?? -180,
    },
    zoomSnap: m.ZoomSnap ?? 1,
    zoomDelta: m.ZoomDelta ?? 1,
    wheelPxPerZoomLevel: m.WheelPxPerZoomLevel ?? 60,
    closePopupOnClick: m.ClosePopupOnClick ?? true,
    zoomControl: m.defaultZoomControl ?? false,
    attributionControl: m.AttributionControl ?? true,
    fadeAnimation: m.FadeAnimation ?? true,
    zoomAnimation: m.ZoomAnimation ?? true,
    markerZoomAnimation: m.MarkerZoomAnimation ?? true,
    inertia: m.Inertia ?? true,
    inertiaDeceleration: m.InertiaDeceleration ?? 3000,
    inertiaMaxSpeed: m.InertiaMaxSpeed ?? 1500,
    easeLinearity: m.EaseLinearity ?? 0.25,
    worldCopyJump: m.WorldCopyJump ?? false,
    maxBoundsViscosity: m.MaxBoundsViscosity ?? 0,
    keyboard: m.Keyboard ?? true,
    keyboardPanDelta: m.KeyboardPanDelta ?? 80,
    scrollWheelZoom: m.ScrollWheelZoom ?? true,
    doubleClickZoom: m.DoubleClickZoom ?? true,
    boxZoom: m.BoxZoom ?? true,
    tap: m.Tap ?? true,
    touchZoom: m.TouchZoom ?? true,
    preferCanvas: m.PreferCanvas ?? false,
  };
}

export function zoomControlOptionsJSON(z: ZoomControlOptions = {}) {
  return {
    position: z.position ?? '',
    zoomInText: z.zoomInText ?? '',
    zoomInTitle: z.zoomInTitle ?? '',
    zoomInClass: z.zoomInClass ?? '',
    zoomOutText: z.zoomOutText ?? '',
    zoomOutTitle: z.zoomOutTitle ?? '',
    zoomOutClass: z.zoomOutClass ?? '',
    isAddGoToMyLocationButton: z.isAddGoToMyLocationButton ?? false,
    MyLocationButtonClass: z.MyLocationButtonClass ?? '',
    MyLocationButtonText: z.MyLocationButtonText ?? '',
    MyLocationButtonTitle: z.MyLocationButtonTitle ?? '',
    useCustomZoomControl: z.useCustomZoomControl ?? false,
  };
}

/** PathOptions (Leaflet.model.js PathOptionsRec :851-915) as Map_Internal_Layer_SetStyle serializes it (:2841,
    Serialize Default Values False): only the attributes that differ from their default (false, "", 0), so `setStyle`
    leaves the others as they are. */
export function pathOptionsJSON(p: PathOptions = {}): L.PathOptions {
  const sdv = false;
  return parsed({
    stroke: basic(p.stroke, false, sdv),
    color: basic(p.color, '', sdv),
    weight: basic(p.weight, 0, sdv),
    opacity: basic(p.opacity, 0, sdv),
    lineCap: basic(p.lineCap, '', sdv),
    lineJoin: basic(p.lineJoin, '', sdv),
    dashArray: basic(p.dashArray, '', sdv),
    dashOffset: basic(p.dashOffset, '', sdv),
    fill: basic(p.fill, false, sdv),
    fillColor: basic(p.fillColor, '', sdv),
    fillOpacity: basic(p.fillOpacity, 0, sdv),
    fillRule: basic(p.fillRule, '', sdv),
    bubblingMouseEvents: basic(p.bubblingMouseEvents, false, sdv),
    className: basic(p.className, '', sdv),
    interactive: basic(p.interactive, false, sdv),
    pane: basic(p.pane, '', sdv),
    attribution: basic(p.attribution, '', sdv),
  }) as L.PathOptions;
}
