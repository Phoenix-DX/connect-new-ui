# CR-Photobook-1: OSUI Carousel provider API — CarouselGoTo, CarouselToggleDrag, set StartingPosition

- Status: done (F4b, 2026-10-15; awaiting orchestrator review)
- Raised by: Photobook, 2026-10-15
- Block: `OutSystemsUI_2_23.Interaction.Carousel` → `app/src/shared/osui/Carousel/provider.ts`, `app/src/shared/osui/lib/actions.ts`
- Other routes using it (catalog/blocks.md): HomeFeed, HouseholdCarousel, SupperMeeting_Carousel, Photobook
- Related question: Photobook Q2

## Evidence
- `migration/screens/Photobook/analysis/sources/pretty/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js`:
  `carouselToggleDrag$Action(idService.getId("Carousel_Photobook"), false|true)` (Handler_ZoomIn :707, ToggleAutoplay,
  Handler_MinZoomReached :1191), `carouselGoTo$Action(..., 0)` (Handler_ReplayCarousel :832), `carouselGoTo$Action(...,
  Event_SelectedHousehold.Position)` (Handler_ClickedGalleryItem), `UBTConnectController.carousel_SetCurrentPosition$Action`
  (Carousel_OnSlideMoved).
- UBTConnect.controller.js `Carousel_SetCurrentPosition.SetCurrentPositionJS`:
  `CarouselAPI.GetCarouselItemById(id)._configs.StartingPosition = index`.

## Expected change
Exported actions by widget id, answering Success like the existing ones: `carouselGoTo(widgetId, index)` (Splide `go`),
`carouselToggleDrag(widgetId, isEnabled)` (OSUI toggleDrag: Splide `drag` option), and a way to set the provider's
`StartingPosition` config (used by the next redraw) for Carousel_SetCurrentPosition.

## Workaround in the route until applied
`Photobook_Carousel.tsx` marks the call sites (comments "CR-Photobook-1") and calls nothing: thumbnail click and Replay do
not move the carousel; drag stays enabled. No markup is affected (no NotCaptured needed).

## Resolution (foundation owner)
- Change: `app/src/shared/osui/Carousel/provider.ts` gains `goTo(index)` (OSUISplide.goTo OSUI:18369-18371, Splide `go`),
  `toggleDrag(hasDrag)` (OSUI:18407-18409, live `options = { drag }`, not kept across redraws as in OSUI) and
  `setStartingPosition(index)` (writes the config the next redraw reads; changeProperty still ignores it once built).
  `app/src/shared/osui/lib/actions.ts`: `CarouselProviderApi` + exported `carouselGoTo(widgetId, index)` and
  `carouselToggleDrag(widgetId, hasDrag)` (CarouselAPI.GoTo / ToggleDrag OSUI:13387-13447, controller raw :3647 / :4085;
  Success false for an unknown or unbuilt carousel), `setCarouselStartingPosition(widgetId, index)` (throws for an
  unknown id). `app/src/shared/UBTConnect/lib/actions.ts`: `carousel_SetCurrentPosition(widgetId, position)`
  (UBTConnect.controller.js:908, SetCurrentPositionJS; errors only logged, as the JS catch). Photobook_Carousel calls
  them at :707 / :832 / :1144 / :1150 / :1189 / :1241 / :1632 (failure logs not ported, NO-CONSOLE).
  DOM tests: `Carousel.test.tsx` (go-to moves the list transform, toggle-drag follows `splide--draggable`, starting
  position used by the next OnRender redraw, unknown ids). Existing carousel tests unchanged and passing.
- Regression parity run on: 2026-10-15 after the last change — Photobook default 345 differences (all masked-photo /
  gallery-scroll capture artifacts, see proposed-exemptions.json), loading 0, offline 0; Updates_SingleList clean;
  HomeFeed clean; SupperMeeting_Carousel default style 52 / pseudo 6, loading class 4, offline 0 (fewer than the
  baseline of 12:19); HouseholdCarousel default 95 (baseline 113; the 15 new ones are household member-list rows
  l1-1371, no carousel path), loading/offline as baseline except fewer class diffs. FeedItemDetail: no captured
  states (parity cannot run).
