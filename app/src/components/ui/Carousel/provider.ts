import Splide, { type Options } from '@splidejs/splide';
import type { CarouselProviderApi, SplideEventHandler } from '@/components/ui/lib/actions';
import { CarouselNavigation } from '@/components/ui/lib/staticEntities';

/* The OutSystems UI Splide provider of the Carousel (OSUI = migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js):
   OSUISplide (:18143-18428), SplideConfig (:18441-18517), AbstractCarouselConfig (:5380-5420), Carousel enums
   (:5470-5512). Ported as a small controller the React block drives (build, changeProperty, updateOnRender, dispose). */

/** Resolved InternalConfigs (OnInitialize, Carousel.mvc.js:712-760): the inputs with the record defaults. */
export interface CarouselConfig {
  navigation: string;
  height: string;
  desktop: number;
  tablet: number;
  phone: number;
  autoPlay: boolean;
  loop: boolean;
  padding: string;
  itemsGap: string;
  startingPosition: number;
}

export interface CarouselEvents {
  onInitialized: () => void;
  onSlideMoved: (index: number) => void;
}

const NAVIGATIONS: string[] = [
  CarouselNavigation.Both,
  CarouselNavigation.Arrows,
  CarouselNavigation.Dots,
  CarouselNavigation.None,
];
/** Carousel.Enum.Defaults (OSUI:5511-5512). */
const DEFAULT_HEIGHT = 'auto';
const SPACE_NONE = '0px';
const HAS_PAGINATION = 'osui-carousel--has-pagination';
const TRACK_WIDTH = '--osui-carousel-track-width';

/** validateString (OSUI:3748): a blank text takes the default. */
const validString = (value: string, fallback: string) => (value && value.trim() ? value : fallback);
/** validateInRange (Navigation, OSUI:5392-5394): an unknown value is Both. */
const validNavigation = (value: string) => (NAVIGATIONS.includes(value) ? value : CarouselNavigation.Both);

export const hasPagination = (navigation: string) => {
  const n = validNavigation(navigation);
  return n === CarouselNavigation.Dots || n === CarouselNavigation.Both;
};
const hasArrows = (navigation: string) => {
  const n = validNavigation(navigation);
  return n === CarouselNavigation.Arrows || n === CarouselNavigation.Both;
};

/** SplideConfig.getProviderConfig (OSUI:18488-18514). The device is Splide's own: `breakpoints` are max-width media
    queries (≤ 768 px → ItemsPhone, ≤ 1024 px → ItemsTablet, otherwise ItemsDesktop). Direction (:18459-18468) is RTL
    only when the body has `is-rtl` (GetIsRTL :17920, Constants.IsRTLClass :157). */
export function splideOptions(c: CarouselConfig): Options {
  return {
    arrows: hasArrows(c.navigation),
    role: 'presentation',
    breakpoints: { 768: { perPage: c.phone }, 1024: { perPage: c.tablet } },
    keyboard: 'focused',
    direction: document.body.classList.contains('is-rtl') ? 'rtl' : 'ltr',
    height: validString(c.height, DEFAULT_HEIGHT),
    type: c.loop ? 'loop' : 'slide',
    focus: 0,
    perPage: c.desktop,
    autoplay: c.autoPlay,
    padding: validString(c.padding, SPACE_NONE),
    pagination: hasPagination(c.navigation),
    gap: validString(c.itemsGap, SPACE_NONE),
    start: c.startingPosition,
    snap: true,
    dragMinThreshold: 30,
  };
}

/** _applyListRoles (OSUI:18148-18157): a non-native list gets `list`, its children `listitem`. */
function applyListRoles(listEl: Element) {
  const isNativeList = listEl.tagName === 'UL' || listEl.tagName === 'OL';
  if (isNativeList || listEl.querySelector(':scope > li, :scope > ul, :scope > ol') !== null) return;
  listEl.setAttribute('role', 'list');
  for (const item of Array.from(listEl.children)) item.setAttribute('role', 'listitem');
}

/** AbstractProviderConfiguration.mergeConfigs (OSUI:3863-3876): the extended options over the pattern's, then every
    undefined, null or empty-array option removed. */
function mergeConfigs(common: Options, extended: Record<string, unknown> | undefined): Options {
  return Object.fromEntries(
    Object.entries({ ...common, ...extended }).filter(
      ([, value]) => !(value === undefined || value === null || (Array.isArray(value) && value.length === 0)),
    ),
  );
}

export class CarouselProvider implements CarouselProviderApi {
  private provider: Splide | undefined;
  /** SplideConfig._providerExtendedOptions (OSUI:18516-18518), set by SetSplideConfigs. */
  private extendedOptions: Record<string, unknown> | undefined;
  /** ProviderEventsManager saved events (AbstractProviderPattern OSUI:3969-4031), by event id. */
  private readonly savedEvents = new Map<string, { eventName: string; callback: SplideEventHandler }>();
  private rebindId = 0;
  private isBuilt = false;
  private currentIndex: number | undefined;
  private blockOnRender = false;
  private hasList = false;
  private listWidget: HTMLElement | null = null;
  private providerElem: HTMLElement;
  private redrawId = 0;
  private listRolesPollId: number | undefined;
  private resizeDebounce = 0;
  private resizeTimeout = 0;
  private readonly onWindowResize = () => {
    // GlobalListenerManager WindowResize (OSUI:1498-1508): 100 ms debounce.
    window.clearTimeout(this.resizeDebounce);
    this.resizeDebounce = window.setTimeout(() => {
      this.redefineCarouselWidth();
    }, 100);
  };

  constructor(
    private readonly self: HTMLElement,
    private readonly track: HTMLElement,
    private readonly placeholder: HTMLElement,
    private config: CarouselConfig,
    private readonly events: CarouselEvents,
  ) {
    this.providerElem = self;
  }

  get index(): number | undefined {
    return this.provider?.index;
  }

  /** build (OSUI:18319-18327): resize listener, list check, classes, Splide. */
  build(): void {
    window.addEventListener('resize', this.onWindowResize);
    this.checkListWidget();
    this.setInitialCssClasses();
    this.prepareConfigs();
    this.isBuilt = true;
  }

  /** _checkListWidget (OSUI:18174-18183; GetHasListInside / ChildrenMatches :16499): with a List directly in the placeholder the track is Splide's root. */
  private checkListWidget() {
    this.hasList = Array.from(this.placeholder.children).some((child) => child.matches('.list'));
    if (this.hasList) {
      this.listWidget = this.self.querySelector<HTMLElement>('.list');
      this.providerElem = this.track;
    } else this.providerElem = this.self;
  }

  /** setInitialCssClasses (OSUI:18296-18308). */
  private setInitialCssClasses() {
    if (this.hasList) {
      this.track.classList.add('splide');
      this.placeholder.classList.add('splide__track');
      this.listWidget?.classList.add('splide__list');
    } else {
      this.self.classList.add('splide');
      this.track.classList.add('splide__track');
      this.placeholder.classList.add('splide__list');
    }
    this.togglePaginationClass();
  }

  /** _togglePaginationClass (OSUI:18271-18279). */
  private togglePaginationClass() {
    this.self.classList.toggle(HAS_PAGINATION, hasPagination(this.config.navigation));
  }

  /** _prepareCarouselItems (OSUI:18205-18223): every item of the List (or of the placeholder) is a slide. The
      original wraps a bare IMG in a new div; React owns those nodes, so an IMG only gets the class (not captured). */
  private prepareCarouselItems() {
    const target = this.hasList ? this.listWidget : this.placeholder;
    for (const item of Array.from(target?.children ?? []))
      if (!item.classList.contains('splide__slide')) item.classList.add('splide__slide');
  }

  /** prepareConfigs + _initProvider (OSUI:18280-18284, :18184-18204). */
  private prepareConfigs() {
    this.prepareCarouselItems();
    const provider = new Splide(this.providerElem, mergeConfigs(splideOptions(this.config), this.extendedOptions));
    this.provider = provider;
    // updateProviderEvents (OSUI:4032-4040): once built, the saved events are bound again to the new provider (async).
    if (this.isBuilt)
      this.rebindId = window.setTimeout(() => {
        for (const { eventName, callback } of this.savedEvents.values()) this.provider?.on(eventName, callback);
      }, 0);
    // _setOnInitializedEvent (:18258-18262): Initialized only while not built (triggerPlatformInitializedEventCallback :3590).
    provider.on('mounted', () => {
      if (!this.isBuilt) this.events.onInitialized();
    });
    // _setOnSlideMovedEvent (:18263-18270).
    provider.on('moved', (index: number) => {
      if (index !== this.currentIndex) {
        this.events.onSlideMoved(index);
        this.currentIndex = index;
      }
    });
    this.setCarouselWidth();
    provider.mount({
      OSUIListRoles: () => ({
        mount: () => {
          this.setListRoles();
        },
      }),
    });
    this.togglePaginationClass();
  }

  /** _setCarouselWidth (OSUI:18237-18239). */
  private setCarouselWidth() {
    this.track.style.setProperty(TRACK_WIDTH, `${String(this.self.offsetWidth)}px`);
  }

  /** _redefineCarouselWidth (OSUI:18224-18236). */
  private redefineCarouselWidth() {
    window.clearTimeout(this.resizeTimeout);
    this.resizeTimeout = window.setTimeout(() => {
      this.provider?.refresh();
      this.setCarouselWidth();
      if (this.self.offsetWidth >= window.innerWidth) {
        this.redraw();
        this.setCarouselWidth();
      } else this.setListRoles();
    }, 500);
  }

  /** _setListRoles (OSUI:18240-18257): a `tabpanel` slide holding an image or a list loses its role; then the list roles. */
  private setListRoles() {
    for (const slide of Array.from(this.self.querySelectorAll('.splide__slide')))
      if (slide.getAttribute('role') === 'tabpanel' && slide.querySelector('img, ul, ol, li'))
        slide.removeAttribute('role');
    if (this.hasList && this.listWidget) this.applyListRolesWhenReady(this.listWidget);
    else {
      const splideList = this.self.querySelector('.splide__list');
      if (splideList) applyListRoles(splideList);
    }
  }

  /** _applyListRolesWhenReady (OSUI:18159-18172): waits (100 ms polls) for a loaded, non-empty List. */
  private applyListRolesWhenReady(listEl: HTMLElement) {
    if (this.listRolesPollId !== undefined) {
      window.clearTimeout(this.listRolesPollId);
      this.listRolesPollId = undefined;
    }
    if (!listEl.classList.contains('list-loading') && listEl.children.length > 0) applyListRoles(listEl);
    else
      this.listRolesPollId = window.setTimeout(() => {
        this.listRolesPollId = undefined;
        this.applyListRolesWhenReady(listEl);
      }, 100);
  }

  /** AbstractProviderPattern.redraw (OSUI:3951-3956, _handleRedraw :3945-3950): async destroy and re-create. */
  private redraw() {
    window.clearTimeout(this.redrawId);
    this.redrawId = window.setTimeout(() => {
      if (this.provider !== undefined) {
        this.provider.destroy();
        this.prepareConfigs();
      }
    }, 0);
  }

  /** changeProperty (OSUI:18328-18356): StartingPosition is ignored once built; Navigation, AutoPlay, Loop and the
      items per device redraw; Height, Padding and ItemsGap update the live options. OnRender is blocked meanwhile. */
  changeProperty(next: CarouselConfig): void {
    const previous = this.config;
    // OnParametersChanged only calls the Change*Property actions of the inputs that changed.
    if ((Object.keys(next) as (keyof CarouselConfig)[]).every((k) => previous[k] === next[k])) return;
    this.config = { ...next, startingPosition: previous.startingPosition };
    if (!this.isBuilt) return;
    this.blockOnRender = true;
    const changed = (key: keyof CarouselConfig) => previous[key] !== next[key];
    if (changed('startingPosition'))
      console.warn('Carousel: changes to StartingPosition do not affect the carousel. Use CarouselGoTo.');
    if (
      ['navigation', 'autoPlay', 'loop', 'desktop', 'tablet', 'phone'].some((k) => changed(k as keyof CarouselConfig))
    )
      this.redraw();
    if (this.provider) {
      if (changed('height')) this.provider.options = { height: next.height };
      if (changed('padding')) this.provider.options = { padding: next.padding };
      if (changed('itemsGap')) this.provider.options = { gap: next.itemsGap };
    }
    window.setTimeout(() => {
      this.blockOnRender = false;
    }, 0);
  }

  /** updateOnRender (OSUI:18413-18425), from the block's OnRender (CarouselUpdateOnRender, Carousel.mvc.js:832-847). */
  updateOnRender(): void {
    if (!this.blockOnRender) {
      this.setInitialCssClasses();
      if (this.provider) {
        if (this.currentIndex !== undefined || this.config.autoPlay) this.config.startingPosition = this.provider.index;
        this.redraw();
      }
    } else if (this.hasList && this.listWidget) this.applyListRolesWhenReady(this.listWidget);
  }

  /** toggleOnRender (OSUI:18410-18412): CarouselDisableOnRender blocks the OnRender redraw. */
  toggleOnRender(blockOnRender: boolean): void {
    this.blockOnRender = blockOnRender;
  }

  /** setProviderConfigs (OSUISplide OSUI:18402-18406): keeps the extended options (normalized by SetSplideConfigs) and
      redraws, so they apply to the new provider. */
  setProviderConfigs(providerConfigs: Record<string, unknown>): void {
    this.extendedOptions = providerConfigs;
    this.redraw();
  }

  /** setProviderEvent (AbstractProviderPattern OSUI:4006-4018, _handleProviderEventsAPI :3912-3935): binds the event
      on the provider (Splide `on`) and saves it for later redraws; without a provider yet it is only saved. */
  setProviderEvent(eventName: string, callback: SplideEventHandler, eventId: string): void {
    this.provider?.on(eventName, callback);
    this.savedEvents.set(eventId, { eventName, callback });
  }

  /** unsetProviderEvent (AbstractProviderPattern OSUI:4019-4031): an unknown event id throws (OSUI:3904-3906). */
  unsetProviderEvent(eventId: string): void {
    const event = this.savedEvents.get(eventId);
    if (event === undefined) throw new Error('OSUI-GEN-11002: The event with this eventId does not exist'); // OSUI:254-257
    // Splide 4.1.3 `off(events)` takes no callback (_handleProviderEventsAPI passes one, ignored): every handler of
    // that event bound through `on` is removed.
    this.provider?.off(event.eventName);
    this.savedEvents.delete(eventId);
  }

  /** The live Splide instance: the OSUI methods below read `this.provider` directly, so a call before the build throws
      (CreateApiResponse then answers Success False). */
  private requireProvider(): Splide {
    if (this.provider === undefined) throw new Error('Carousel: the provider is not built');
    return this.provider;
  }

  /** goTo (OSUISplide OSUI:18369-18371), from CarouselAPI.GoTo (OSUI:13387-13397): Splide `go(index)`. */
  goTo(index: number): void {
    this.requireProvider().go(index);
  }

  /** toggleDrag (OSUISplide OSUI:18407-18409), from CarouselAPI.ToggleDrag (OSUI:13437-13447): sets the live Splide
      `drag` option. Not kept in the configs: a later redraw builds Splide with its default drag again (as OSUI). */
  toggleDrag(hasDrag: boolean): void {
    this.requireProvider().options = { drag: hasDrag };
  }

  /** Writes the StartingPosition config directly (UBTConnect Carousel_SetCurrentPosition.SetCurrentPositionJS:
      `GetCarouselItemById(id)._configs.StartingPosition = index`), bypassing changeProperty (which ignores it once
      built): the next redraw (OnRender, resize, configs) starts on that slide. */
  setStartingPosition(index: number): void {
    this.config.startingPosition = index;
  }

  /** `_eventOnResize` taken out of the GlobalListenerManager WindowResize handlers (UBTConnect
      RemoveCarouselOnResizeHandler): a resize no longer redefines the carousel width; a pending debounce does not run it. */
  removeOnResizeHandler(): void {
    window.clearTimeout(this.resizeDebounce);
    window.removeEventListener('resize', this.onWindowResize);
  }

  /** dispose (OSUI:18357-18368) and unsetCallbacks (:18309-18314). */
  dispose(): void {
    window.clearTimeout(this.rebindId);
    if (this.listRolesPollId !== undefined) window.clearTimeout(this.listRolesPollId);
    window.clearTimeout(this.redrawId);
    window.clearTimeout(this.resizeDebounce);
    window.clearTimeout(this.resizeTimeout);
    window.removeEventListener('resize', this.onWindowResize);
    if (this.isBuilt) this.provider?.destroy(true);
    this.provider = undefined;
  }
}
