# Screen spec: Photobook

## 0. Summary
`/UBTConnect/Photobook?In_HouseholdId&In_LocalityId` (UBTConnect.Directory_Photobook.Photobook.mvc.js). The screen is a full-screen photo carousel of the households of a locality. It has no layout (LayoutRuntime_Top, CommonUI_InsideLayout, SkeletonSection).
- While loading: a cyan full-screen container (dom/loading.html:86-89). Offline is the same (dom/offline.html).
- Loaded: Photobook_Carousel (23 slides in the capture, dom/default.html:87-1848). Overlay options hide after 5 s of inactivity.
- The overlay options are: info sheet, speed sheet, close, play/pause/replay, thumbnail gallery with counter "1/23" (:1849-2468).

## 1. Entry and routing
Inputs In_HouseholdId, In_LocalityId (LongInteger, default "0"; mvc.js model :96-104). Exits (Handler_ClosePhotobook
:404-460): target household ≠ 0 → ReplaceOnUpcomingNavigation, then HouseholdCarousel(In_StartingHouseholdId) with
preload CarouselPreloadedHouseholds (flag C2EnableCarousel on) else HouseholdDetails(HouseholdId); target 0 → back.

## 2. Component tree
- index.tsx → SkeletonSection $b3 → Photobook_Carousel $b4 (components/Photobook_Carousel.tsx) → Carousel_Cont →
  [Carousel_Touch_Cont → OSUI Carousel b4-Carousel_Photobook → OSList → Photobook_Item (PanZoom, UBT_LazyImage ×2,
  titles)],
- Photobook_Options_Left $b3, _Right $b4, _Player $b5,
- Photobook_Gallery $b6 (Options_Bottom, Gallery_Item, TouchEvents).
- Shared: CustomContainer, CustomText, Icon, IconText, SkeletonSection, BottomSheet, UBT_LazyImage, SanitizedHtml, Carousel, TouchEvents, OSList.

## 3. DOM and markup contract
As dom/default.html; slide ids are Splide's (splide01-slideNN). PanZoom root carries tabindex="0" and Zoomable the
identity transform (:113-115), left by the panzoom script at rest.

## 5. Data model / 6. API calls
- DataActionGetLocalityHouseholdIds (at start; controller :376-401) → UI_PhotobookHousehold list. OnAfterFetch
  (:556-583): Position = index of In_HouseholdId (0 when absent), IsLoading False. Mock: 23 fictional households with
  the captured name word lengths, locality 5+6 letters, first id 42438 (P-MOCKS, person data).
- DataActionGetHouseholdCaption (Photobook_Options_Left, on demand after the info button when the household changed).
  Mock: Q3.
- GetSignedImagesInBulk via UBT_LazyImage (Household images: shared placeholder mock). App-start calls: shell.

## 7. State and lifecycle
Screen OnInitialize (:487-530): unless restored from cache, SelectedHousehold.Id = In_HouseholdId, IsLoading True
(useViewState, P-BACK). Carousel OnInitialize (:1295-1394): PhotobookCarousel_SelectedSpeed default EightSeconds (8000,
static-entities-tst.json), autoplay off, Splide configs (speed 500, interval = speed, flickPower 400 …), StartingPosition
= SelectedHousehold.Position. OnReady: 5 s inactivity timer → IsShow False; OnDestroy clears it.

## 8. Render logic / 9. Interactions
- The options are visible if and only if IsShow. Bottom sheets exist only while IsShow.
- A click on the touch container shows the options and restarts the timer.
- Player: Play/Pause (ToggleAutoplay), Replay on the last slide.
- Sheets pause autoplay temporarily. Closing a sheet restarts autoplay (CheckForAutoplayRestart).
- Gallery thumbnail → CarouselGoTo (CR-Photobook-1).
- Slide moved → counter, current household, autoplay stops at the end.

## 11. Error handling
Data action failure → raiseToFlowHandler (screen handleError → flow handler); offline/error render stays the loading
container (passes parity).

## 13a. Feature flags
- C2EnableCarousel (GetHasCarouselEnabled): default-only, TST on (user 2026-10-14) → useFlagOn('C2EnableCarousel') in
  Handler_ClosePhotobook. App_PIN_BiometricEnabled, onToggle: not flags (user 2026-10-14). Landscape lock: none (U18).

## 14. Unclear points
- Q1 PanZoom script: resolved, ADR-7 (TST file vendored in `app/src/vendor/panzoom/`, wired in
  `components/PanZoom.tsx` with the OnReady options, PanZoom.mvc.js:367-386).
- Q2 Carousel actions: resolved, CR-Photobook-1 applied (goTo OSUI:18369, toggleDrag OSUI:18407, starting position,
  carousel_SetCurrentPosition UBTConnect.controller.js:908).
- Q3 caption mock: resolved, fictional caption per household in the skeleton caption format.
- Gallery thumbnails 16 px offset (195 vs 179): capture artifact. The build runs the compiled ScrollIntoPositionJS
  (Photobook_Gallery.mvc.js:247-252, :587, :703-727; 1×40 − (4+20) = 16); the parity reference is rebuilt from
  `dom/default.html`, which cannot hold a scroll position, so it always shows scroll 0. Exemption
  PHOTOBOOK-GALLERY-LIST-SCROLL (F4b, 2026-10-15).

## 16. Decisions to confirm
- Q1 → A, Q2 → A, Q3 → A: auto-accepted (user instruction 2026-10-15 16:59); see questions.json.
- CR-Photobook-2 applied: platform RadioGroup/RadioButton (`app/src/components/OSRadioGroup/`, W:78-188, W:347-430);
  RadioGroup_SpeedOptions 5s / 8s / 15s; SelectedSpeed resets to In_CurrentSpeed on init and input change (:762, :787).
- SetSplideEvent "moved" handler only logs to the console: not ported (NO-CONSOLE).
- Exemptions for capture artifacts (masked photos, masked title, gallery scroll) are merged into parity-exemptions.json (PHOTOBOOK-*).
- The capture-plan settle (5.5 s) handles the 5 s options timer. There is no exemption for it.

## 17. Patterns used
P-PARAMS, P-STATES, P-DATA, P-MOCKS, P-CALLS, P-BACK, P-LIST (OSList), P-OSUI (Carousel, TouchEvents, BottomSheet
actions), P-FLAGS, P-DIALOG (bottom sheets).

## 18. Builder notes
Static values not in shared entities live in components/staticEntities.ts (TST values). StartInactivityTimer does not
clear a running timer (as compiled).
