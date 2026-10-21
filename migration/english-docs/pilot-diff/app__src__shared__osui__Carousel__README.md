### app/src/shared/osui/Carousel/README.md

**Change 1**

Before:

> Events: `Initialized(CarouselId)` → `onInitialized`, `OnSlideMoved(CarouselId, Index)` → `onOnSlideMoved`.
> Placeholder `CarouselItems` → `children` (a List widget; its items are the slides).
> 
> Behaviour ported from the OSUI Splide provider (`provider.ts`; `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js`
> OSUISplide :18143-18428, SplideConfig :18441-18517):
> 
> - Markup (:18174-18223, :18296-18308): with a List directly in the placeholder, the track is Splide's root (`splide`),
>   the placeholder its track, the List its list; without one, the `osui-carousel` root is Splide's root, the track its
>   track and the placeholder its list. Every item becomes `splide__slide`. `--osui-carousel-track-width`;
>   `osui-carousel--has-pagination` for Dots / Both.
> - Options (:18488-18514): Navigation → `arrows` (Arrows / Both) and `pagination` (Dots / Both), an unknown value is
>   Both; AutoPlay → `autoplay`; Loop → `loop` / `slide`; `perPage` ItemsDesktop with Splide `breakpoints`
>   768 → ItemsPhone, 1024 → ItemsTablet: the device is Splide's max-width media queries, not the body classes;
>   Height (blank → `auto`), Padding and ItemsGap (blank → `0px`), `start`, `role: presentation`, `keyboard: focused`,
>   `direction` (RTL with body `is-rtl`), `focus: 0`, `snap`, `dragMinThreshold: 30`.
> - Events: Initialized on the first mount only (:3590); OnSlideMoved only when the index changes (:18263-18270). List
>   roles after mount (Splide extension), waiting for a loaded List (:18159-18172, :18240-18257).
> - Lifecycle: input changes (:18328-18356) redraw for Navigation / AutoPlay / Loop / items, update the live options for
>   Height / Padding / ItemsGap, ignore StartingPosition; OnRender (every update, not the first render) redraws keeping
>   the index when the user moved or AutoPlay is on (:18413-18425); window resize (100 ms debounce, then 500 ms) refreshes
>   the width and redraws when the carousel is as wide as the window (:18224-18236); unmount destroys.

After:

> The block raises two events: `Initialized(CarouselId)` → `onInitialized` and `OnSlideMoved(CarouselId, Index)` →
> `onOnSlideMoved`. The placeholder `CarouselItems` → `children`. It holds a List widget. The items of the List are the slides.
> 
> The React app ports this behavior from the OSUI Splide provider (`provider.ts`;
> `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js` OSUISplide :18143-18428, SplideConfig :18441-18517):
> 
> - Markup (:18174-18223, :18296-18308):
>   - With a List directly in the placeholder, the track is the root of Splide (`splide`). The placeholder is its track.
>     The List is its list.
>   - Without a List, the `osui-carousel` root is the root of Splide. The track is its track. The placeholder is its list.
>   - Every item becomes `splide__slide`.
>   - The provider sets `--osui-carousel-track-width` to the width of the carousel [provider.ts:214].
>   - The provider adds `osui-carousel--has-pagination` for Dots and Both [provider.ts:169].
> - Options (:18488-18514):
>   - Navigation sets `arrows` (Arrows / Both) and `pagination` (Dots / Both). An unknown value works as Both.
>   - AutoPlay sets `autoplay`.
>   - Loop sets `loop` / `slide`.
>   - `perPage` is ItemsDesktop. The Splide `breakpoints` map 768 → ItemsPhone and 1024 → ItemsTablet. The device comes
>     from the max-width media queries of Splide, not from the body classes.
>   - Height (blank → `auto`), Padding and ItemsGap (blank → `0px`).
>   - The other options are `start`, `role: presentation`, `keyboard: focused`, `direction` (RTL with body `is-rtl`),
>     `focus: 0`, `snap` and `dragMinThreshold: 30`.
> - Events:
>   - Initialized: the block raises it on the first mount only (:3590).
>   - OnSlideMoved: the block raises it only when the index changes (:18263-18270).
>   - List roles: a Splide extension sets them after the mount. It waits for a loaded List (:18159-18172, :18240-18257).
> - Lifecycle:
>   - When an input changes (:18328-18356), the block redraws for Navigation, AutoPlay, Loop and items. It updates the live
>     options for Height, Padding and ItemsGap. It ignores StartingPosition.
>   - OnRender runs on every update, but not on the first render. It redraws and keeps the index when the user moved
>     or AutoPlay is on (:18413-18425).
>   - On a window resize, the block waits 100 ms (debounce), then 500 ms. Then it refreshes the width. It redraws when the
>     carousel is as wide as the window (:18224-18236).
>   - On unmount, the block destroys the carousel.

**Change 2**

Before:

> jsdom has no layout: `testLayout.ts` emulates the captured widths (342 / 390 px) and rewrites jsdom's serialization of
> the slide width calc to the browser's (same value).

After:

> jsdom has no layout. `testLayout.ts` emulates the captured widths (342 / 390 px). It also rewrites the jsdom serialization
> of the slide width calc to the form of the browser. The value is the same.

**Change 3**

Before:

> - Arrows, AutoPlay, Loop and the tablet / desktop breakpoints are ported from the provider but not captured (all four
>   captures are phone-sized with Dots or None).
> - A bare `<img>` item is wrapped in a new slide `div` by the original (:18205-18223); React owns those nodes, so here
>   it only gets the slide class.

After:

> - The React app ports Arrows, AutoPlay, Loop and the tablet / desktop breakpoints from the OSUI provider, but no capture shows them. All four
>   captures are phone-sized with Dots or None.
> - The original wraps a bare `<img>` item in a new slide `div` (:18205-18223). React owns those nodes. So here the item
>   only gets the slide class.

**Change 4**

Before:

> The Carousel registers its provider under its widget id (`id`, or a generated one) for the OSUI actions of
> `osui/lib/actions.ts`: CarouselDisableOnRender (`toggleOnRender`), SetSplideConfigs (extended Splide options merged over
> the pattern's at the next build, then a redraw; OSUI:18402-18406, mergeConfigs :3863-3876), SetSplideEvent /
> UnsetSplideEvent (events saved by id and bound again after each redraw; Splide 4.1.3 `off` removes every handler of the
> event). Additive: blocks that call none of them behave as before.
> 
> CR-Photobook-1 (2026-10-15): CarouselGoTo (`carouselGoTo`, Splide `go`, OSUI:18369-18371) and CarouselToggleDrag
> (`carouselToggleDrag`, live `drag` option, OSUI:18407-18409; a later redraw restores Splide's default) answer Success
> like the others; `setCarouselStartingPosition` writes the StartingPosition config read by the next redraw (used by
> UBTConnect `carousel_SetCurrentPosition`, `shared/UBTConnect/lib/actions.ts`).

After:

> The Carousel registers its provider under its widget id (`id`, or a generated one). The OSUI actions of
> `osui/lib/actions.ts` use this id:
> 
> - CarouselDisableOnRender (`toggleOnRender`).
> - SetSplideConfigs: the block merges the extended Splide options over the options of the pattern at the next build. Then it
>   redraws (OSUI:18402-18406, mergeConfigs :3863-3876).
> - SetSplideEvent / UnsetSplideEvent: the block saves the events by id. It binds them again after each redraw. Splide 4.1.3
>   `off` removes every handler of the event.
> 
> These actions only add behavior. Blocks that call none of them work as before.
> 
> CR-Photobook-1 (2026-10-15) covers these actions:
> 
> - CarouselGoTo (`carouselGoTo`, Splide `go`, OSUI:18369-18371).
> - CarouselToggleDrag (`carouselToggleDrag`, live `drag` option, OSUI:18407-18409). A later redraw restores the default of
>   Splide.
> 
> Both actions answer Success, like the other actions.
> 
> `setCarouselStartingPosition` writes the StartingPosition config. The next redraw reads this config. UBTConnect
> `carousel_SetCurrentPosition` uses it (`shared/UBTConnect/lib/actions.ts`).

