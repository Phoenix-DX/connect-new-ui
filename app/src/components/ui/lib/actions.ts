import type { SplideConfigs } from './structures';

/* OutSystems UI client actions used by the shared blocks. A pattern registers itself under its widget id (the block
   root id) and its generated unique id: the provider finds a pattern by either. */
interface Openable {
  open: () => void;
  close: () => void;
}

const bottomSheets = new Map<string, Openable>();

/** BottomSheetCreate / BottomSheetDestroy: makes the pattern reachable by BottomSheetOpen / BottomSheetClose. */
export function registerBottomSheet(ids: readonly string[], pattern: Openable): () => void {
  for (const id of ids) bottomSheets.set(id, pattern);
  return () => {
    for (const id of ids) if (bottomSheets.get(id) === pattern) bottomSheets.delete(id);
  };
}

/** BottomSheetOpen(WidgetId): opens the bottom sheet (no change when it is already open). The ErrorMessage output is
    read by no caller: not returned. An unknown id does nothing. */
export function bottomSheetOpen(widgetId: string): void {
  bottomSheets.get(widgetId)?.open();
}

/** BottomSheetClose(WidgetId): closes the bottom sheet (no change when it is already closed). */
export function bottomSheetClose(widgetId: string): void {
  bottomSheets.get(widgetId)?.close();
}

/* ---- Wave 4E: Carousel provider API (CarouselDisableOnRender, SetSplideConfigs, SetSplideEvent, UnsetSplideEvent;
   OutSystemsUI_2_23.controller.js and the CarouselAPI of runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js). ---- */

/** Splide event handler (`moved` passes newIndex, previousIndex, destinationIndex). */
export type SplideEventHandler = (...args: number[]) => void;

/** What the Carousel actions reach on a built Carousel (its Splide provider, `osui/Carousel/provider.ts`). */
export interface CarouselProviderApi {
  toggleOnRender: (blockOnRender: boolean) => void;
  setProviderConfigs: (providerConfigs: Record<string, unknown>) => void;
  setProviderEvent: (eventName: string, callback: SplideEventHandler, eventId: string) => void;
  /** Throws for an unknown event id (FailProviderEventRemoval, OSUI:4019-4031). */
  unsetProviderEvent: (eventId: string) => void;
  goTo: (index: number) => void;
  toggleDrag: (hasDrag: boolean) => void;
  /** The provider's StartingPosition config (`_configs.StartingPosition`), read by the next redraw. */
  setStartingPosition: (index: number) => void;
}

const carousels = new Map<string, CarouselProviderApi>();

/** CarouselCreate / CarouselDestroy: makes the Carousel reachable by its widget id (GetCarouselItemById). */
export function registerCarousel(widgetId: string, pattern: CarouselProviderApi): () => void {
  carousels.set(widgetId, pattern);
  return () => {
    if (carousels.get(widgetId) === pattern) carousels.delete(widgetId);
  };
}

/** CreateApiResponse (OSUI:3155-): the API catches every error and answers IsSuccess False. */
function apiResponse(widgetId: string, callback: (pattern: CarouselProviderApi) => void): boolean {
  const pattern = carousels.get(widgetId);
  if (pattern === undefined) return false;
  try {
    callback(pattern);
    return true;
  } catch {
    return false;
  }
}

/** CarouselDisableOnRender(WidgetId) (controller :3334-3432, CarouselAPI :13336-13346): OnRender no longer redraws
    the carousel. Returns Success. */
export function carouselDisableOnRender(widgetId: string): boolean {
  return apiResponse(widgetId, (pattern) => {
    pattern.toggleOnRender(true);
  });
}

/** Record defaults of SplideConfigsRec: JSON Serialize with serializeDefaultValues False drops them
    (OutSystems.js JSONUtils, `y`: a value equal to its default gives null; mergeConfigs OSUI:3863-3876 removes null). */
const SPLIDE_CONFIGS_DEFAULTS: Required<SplideConfigs> = {
  role: '',
  label: '',
  labelledby: '',
  rewind: 'unset',
  speed: 0,
  rewindSpeed: 0,
  rewindByDrag: 'unset',
  width: '',
  fixedWidth: '',
  fixedHeight: '',
  autoWidth: 'unset',
  perMove: 0,
  clones: 0,
  cloneStatus: 'unset',
  paginationDirection: '',
  easing: '',
  noDrag: '',
  flickPower: 0,
  flickMaxPages: 0,
  waitForTransition: 'unset',
  arrowPath: '',
  interval: 0,
  pauseOnHover: 'unset',
  pauseOnFocus: 'unset',
  resetProgress: 'unset',
  lazyLoad: '',
  preloadPages: 0,
  wheel: 'unset',
  wheelMinThreshold: 0,
  wheelSleep: 0,
  releaseWheel: 'unset',
  slideFocus: 'unset',
  focusableNodes: '',
  isNavigation: 'unset',
  trimSpace: '',
  updateOnMove: 'unset',
  mediaQuery: '',
  live: 'unset',
  destroy: '',
  omitEnd: 'unset',
};

/** SetSplideConfigs JSON (controller :26712-26716) + NormalizeSplideConfigs (OSUI:18535,
    AbstractNormalizeProviderConfigs): the fields that differ from the record default, "true" / "false" texts (any case,
    trimmed) as booleans. */
export function splideProviderConfigs(providerConfigs: SplideConfigs): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(providerConfigs) as [keyof SplideConfigs, string | number | undefined][]) {
    if (value === undefined || value === SPLIDE_CONFIGS_DEFAULTS[key]) continue;
    const text = typeof value === 'string' ? value.toLowerCase().trim() : undefined;
    out[key] = text === 'true' || text === 'false' ? text === 'true' : value;
  }
  return out;
}

/** SetSplideConfigs(WidgetId, ProviderConfigs) (controller :26692-26812): extends the Splide options and redraws
    (OSUISplide.setProviderConfigs OSUI:18402-18406). Returns Success. */
export function setSplideConfigs(widgetId: string, providerConfigs: SplideConfigs): boolean {
  return apiResponse(widgetId, (pattern) => {
    pattern.setProviderConfigs(splideProviderConfigs(providerConfigs));
  });
}

let splideEventCount = 0;

/** SetSplideEvent(WidgetId, EventName, Handler) (controller :26813-26946, CarouselAPI :13481-13494): binds a Splide
    event, kept across redraws. Returns SplideEventId ("" when it failed) and Success. */
export function setSplideEvent(
  widgetId: string,
  eventName: string,
  handler: SplideEventHandler,
): { SplideEventId: string; Success: boolean } {
  splideEventCount += 1;
  const eventId = `splide-event-${String(splideEventCount)}`;
  const Success = apiResponse(widgetId, (pattern) => {
    pattern.setProviderEvent(eventName, handler, eventId);
  });
  return { SplideEventId: Success ? eventId : '', Success };
}

/** UnsetSplideEvent(WidgetId, EventId) (controller :33261-33371, CarouselAPI :13495-13505): unbinds an event set by
    SetSplideEvent. An unknown id (e.g. an event name) fails with Success False and changes nothing. */
export function unsetSplideEvent(widgetId: string, eventId: string): boolean {
  return apiResponse(widgetId, (pattern) => {
    pattern.unsetProviderEvent(eventId);
  });
}

/** CarouselGoTo(WidgetId, ItemIndex) (controller raw :3647, CarouselAPI.GoTo OSUI:13387-13397): moves the carousel to
    the item (Splide `go`). Returns Success (False for an unknown or unbuilt carousel; the ErrorMessage is not read). */
export function carouselGoTo(widgetId: string, index: number): boolean {
  return apiResponse(widgetId, (pattern) => {
    pattern.goTo(index);
  });
}

/** CarouselToggleDrag(WidgetId, HasDrag) (controller raw :4085, CarouselAPI.ToggleDrag OSUI:13437-13447): enables or
    disables dragging the slides (Splide `drag` option). Returns Success. */
export function carouselToggleDrag(widgetId: string, hasDrag: boolean): boolean {
  return apiResponse(widgetId, (pattern) => {
    pattern.toggleDrag(hasDrag);
  });
}

/** Sets the StartingPosition config of a registered Carousel (GetCarouselItemById(id)._configs.StartingPosition), as
    UBTConnect Carousel_SetCurrentPosition does. Throws for an unknown carousel (`undefined._configs`), like the JS. */
export function setCarouselStartingPosition(widgetId: string, index: number): void {
  const pattern = carousels.get(widgetId);
  if (pattern === undefined) throw new Error(`Carousel ${widgetId} not found`);
  pattern.setStartingPosition(index);
}

/** ScrollToElement(WidgetId, IsSmooth, OffSet, ElementParentClass, ScrollDelay) (OutSystemsUI_2_23.controller.js
    ScrollToElementJS :22104-22112 → OutSystemsUI.js Utils.ScrollToElement): after ScrollDelay ms, scrolls the active
    screen (or the closest ElementParentClass ancestor, else the iOS bounce content) to the element's top + OffSet, less
    the header height when the header is fixed (`fixed-header` / `layout-native:not(.hide-header-on-scroll) .header`). */
export function scrollToElement(
  elementId: string,
  isSmooth = true,
  offSet = 0,
  elementParentClass = '',
  scrollDelay = 0,
): void {
  const elementToScrollTo = document.getElementById(elementId);
  window.setTimeout(() => {
    if (!elementToScrollTo) return;
    const isHeaderFixed =
      document.querySelector('.fixed-header') ??
      document.querySelector('.layout-native:not(.hide-header-on-scroll) .header');
    const isIosBounce = document.querySelector('.ios .ios-bounce:not(.hide-header-on-scroll) .content');
    let scrollableElement = document.querySelector('.active-screen');
    if (elementParentClass !== '') {
      const parent = elementToScrollTo.closest(`.${elementParentClass}`);
      if (parent) scrollableElement = parent;
    } else if (isIosBounce) scrollableElement = isIosBounce;
    if (!scrollableElement) return;
    let top = scrollableElement.scrollTop + elementToScrollTo.getBoundingClientRect().top + offSet;
    if (isHeaderFixed) top = -(document.querySelector<HTMLElement>('.header')?.offsetHeight ?? 0) + top;
    scrollableElement.scrollTo({ top, left: 0, behavior: isSmooth ? 'smooth' : 'auto' });
  }, scrollDelay);
}

/* ---- Dropdown API (CR-EventBooklet-2): OutSystems.OSUI.Patterns.DropdownAPI of
   migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js (OSUI:13765-13966) and the client actions of
   OutSystemsUI_2_23.controller.js (CT) that call it. The Dropdown Search / Tags blocks register their Virtual Select
   provider (`osui/DropdownSearch/provider.ts`) under their generated unique id (the `name` of the `osui-dropdown-*`
   element) and their widget id (the block root id), like DropdownAPI.Create / Dispose. ---- */

/** What the Dropdown client actions reach on a built Dropdown (AbstractVirtualSelect, OSUI:20075-20178). */
export interface DropdownProviderApi {
  clear: (silentOnChangedEvent: boolean) => void;
  close: () => void;
  togglePopup: (isEnabled: boolean) => void;
  validation: (isValid: boolean, validationMessage: string) => void;
}

interface DropdownEntry {
  widgetId: string;
  pattern: DropdownProviderApi;
}

/** _dropdownItemsMap (OSUI:13767): patterns by unique id. */
const dropdowns = new Map<string, DropdownEntry>();

/** DropdownAPI.Create / Dispose (OSUI:13801-13843): reachable by its unique id or its widget id until disposed. */
export function registerDropdown(uniqueId: string, widgetId: string, pattern: DropdownProviderApi): () => void {
  dropdowns.set(uniqueId, { widgetId, pattern });
  return () => {
    if (dropdowns.get(uniqueId)?.pattern === pattern) dropdowns.delete(uniqueId);
  };
}

/** GetDropdownById (OSUI:13859-13862) → MapOperation.FindInMap (OSUI:3420-3436): the pattern under that unique id,
    else the last one whose unique id or widget id equals it (equalsToID, OSUI:3624-3626); throws when none. */
function getDropdownById(dropdownId: string): DropdownProviderApi {
  let found = dropdowns.get(dropdownId)?.pattern;
  if (found === undefined)
    for (const [uniqueId, entry] of dropdowns)
      if (dropdownId === uniqueId || dropdownId === entry.widgetId) found = entry.pattern;
  if (found === undefined) throw new Error(`The Dropdown with id:'${dropdownId}' was not found`);
  return found;
}

/** CreateApiResponse (OSUI:3155-3175): every error is caught; IsSuccess False. Returns Success (the callers read
    neither Success nor ErrorMessage). */
function dropdownApiResponse(dropdownId: string, callback: (pattern: DropdownProviderApi) => void): boolean {
  try {
    callback(getDropdownById(dropdownId));
    return true;
  } catch {
    return false;
  }
}

/** DropdownClear(WidgetId, SilentOnChangedEvent = True) (CT:8015-8131, ClearDropdownJS CT:8123-8130 →
    DropdownAPI.Clear OSUI:13779-13789): unselects every option; with SilentOnChangedEvent no OnChanged. */
export function dropdownClear(widgetId: string, silentOnChangedEvent = true): boolean {
  return dropdownApiResponse(widgetId, (pattern) => {
    pattern.clear(silentOnChangedEvent);
  });
}

/** DropdownClearValidation(WidgetId) (CT:8132-8234, ValidationDropdownJS CT:8229-8233 → DropdownAPI.SetValidation
    (WidgetId, true, '') OSUI:13944-13954): removes the not-valid state and its error message. */
export function dropdownClearValidation(widgetId: string): boolean {
  return dropdownApiResponse(widgetId, (pattern) => {
    pattern.validation(true, '');
  });
}

/** DropdownTogglePopup(WidgetId, EnablePopup) (CT:10387-10494, TogglePopupJS CT:10495-10500 → DropdownAPI.TogglePopup
    OSUI:13821-13831): the dropbox as a popup (True) or below the field (False); redraws when it changes. */
export function dropdownTogglePopup(widgetId: string, enablePopup: boolean): boolean {
  return dropdownApiResponse(widgetId, (pattern) => {
    pattern.togglePopup(enablePopup);
  });
}

/** DropdownAPI.Close(dropdownId) (OSUI:13790-13800; also the client action DropdownClose, CT:8235-8340): closes the
    dropbox when it is open. */
export function dropdownClose(dropdownId: string): boolean {
  return dropdownApiResponse(dropdownId, (pattern) => {
    pattern.close();
  });
}
