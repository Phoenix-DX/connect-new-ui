/* Structures of the Leaflet module (Leaflet.model.js, copy in migration/screens/BrowseDirectory/analysis/sources/raw/).
   Field names exactly as in OutSystems, all optional (an omitted field has the OutSystems default, see lib/json.ts,
   which also holds the JSON names the JS nodes read). Decimal and Long Integer → number. */

export interface TileLayerOptions {
  MinZoom?: number;
  MaxZoom?: number;
  MaxNativeZoom?: number;
  Subdomains?: string[];
  ErrorTileUrl?: string;
  Tms?: boolean;
  ZoomOffset?: number;
  ZoomReverse?: boolean;
  DetectRetina?: boolean;
  Attribution?: string;
  noWrap?: boolean;
  KeepBuffer?: number;
  UpdateWhenIdle?: boolean;
  EnableParentTileFallback?: boolean;
}

export interface TileLayer {
  /** Default "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png". */
  Url?: string;
  Options?: TileLayerOptions;
}

export interface Icon {
  iconUrl?: string;
  iconRetinaUrl?: string;
  iconSize?: number[];
  iconAnchor?: number[];
  popupAnchor?: number[];
  tooltipAnchor?: number[];
  shadowUrl?: string;
  shadowRetinaUrl?: string;
  shadowSize?: number[];
  shadowAnchor?: number[];
  className?: string;
  crossOrigin?: string;
  isTextIcon?: boolean;
}

export interface TooltipOptions {
  Pane?: string;
  Offset?: number[];
  Direction?: string;
  Permanent?: boolean;
  Sticky?: boolean;
  Interactive?: boolean;
  Opacity?: number;
  ClassName?: string;
}

export interface Tooltip {
  Content?: string;
  Options?: TooltipOptions;
}

export interface MarkerOptions {
  Icon?: Icon;
  Draggable?: boolean;
  Keyboard?: boolean;
  Title?: string;
  Alt?: string;
  ZIndexOffset?: number;
  Opacity?: number;
  RiseOnHover?: boolean;
  RiseOffset?: number;
}

export interface Marker {
  Id?: string;
  Type?: string;
  ExtraData?: string;
  Latlng?: number[];
  Options?: MarkerOptions;
}

export interface Offset {
  X?: number;
  Y?: number;
}

export interface PopUp {
  Pane?: string;
  MaxWidth?: number;
  MinWidth?: number;
  AutoPan?: boolean;
  AutoPanPadding?: Offset;
  KeepInView?: boolean;
  CloseButton?: boolean;
  AutoClose?: boolean;
  CloseOnEscapeKey?: boolean;
  ClassName?: string;
  Interactive?: boolean;
  Content?: string;
}

export interface MarkerWithWindow {
  Marker?: Marker;
  Tooltip?: Tooltip;
  Popup?: PopUp;
}

export interface MaxBounds {
  Max_Lat?: number;
  Min_Lat?: number;
  Max_Long?: number;
  Min_Long?: number;
}

export interface MapOptions {
  Center?: number[];
  Zoom?: number;
  MinZoom?: number;
  MaxZoom?: number;
  MaxBounds?: MaxBounds;
  ZoomSnap?: number;
  ZoomDelta?: number;
  WheelPxPerZoomLevel?: number;
  ClosePopupOnClick?: boolean;
  defaultZoomControl?: boolean;
  AttributionControl?: boolean;
  FadeAnimation?: boolean;
  ZoomAnimation?: boolean;
  MarkerZoomAnimation?: boolean;
  Inertia?: boolean;
  InertiaDeceleration?: number;
  InertiaMaxSpeed?: number;
  EaseLinearity?: number;
  WorldCopyJump?: boolean;
  MaxBoundsViscosity?: number;
  Keyboard?: boolean;
  KeyboardPanDelta?: number;
  ScrollWheelZoom?: boolean;
  DoubleClickZoom?: boolean;
  BoxZoom?: boolean;
  Tap?: boolean;
  TouchZoom?: boolean;
  PreferCanvas?: boolean;
}

export interface MapVisibleBoundaries {
  MaxLat: number;
  MinLat: number;
  MaxLong: number;
  MinLong: number;
}

export interface ZoomControlOptions {
  position?: string;
  zoomInText?: string;
  zoomInTitle?: string;
  zoomInClass?: string;
  zoomOutText?: string;
  zoomOutTitle?: string;
  zoomOutClass?: string;
  isAddGoToMyLocationButton?: boolean;
  MyLocationButtonClass?: string;
  MyLocationButtonText?: string;
  MyLocationButtonTitle?: string;
  useCustomZoomControl?: boolean;
}

export interface PathOptions {
  stroke?: boolean;
  color?: string;
  weight?: number;
  opacity?: number;
  lineCap?: string;
  lineJoin?: string;
  dashArray?: string;
  dashOffset?: string;
  fill?: boolean;
  fillColor?: string;
  fillOpacity?: number;
  fillRule?: string;
  bubblingMouseEvents?: boolean;
  className?: string;
  interactive?: boolean;
  pane?: string;
  attribution?: string;
}

export interface GeoJSONFeature {
  FeatureJSON?: string;
  Id?: string;
  Type?: string;
  ExtraData?: string;
  PathOptions?: PathOptions;
}
