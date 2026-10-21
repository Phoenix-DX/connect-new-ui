# CR-OneSchoolGlobalDetails-1: shared Directory_EntityDetailsActions / ShareSheet popup differences on this route

- Status: applied
- Raised by: OneSchoolGlobalDetails, 2026-10-15
- Blocks: `src/shared/UBTConnect/Directory_EntityDetailsActions`, the ShareSheet popup (`src/shared/UBTConnect_Utils/ShareSheet`,
  `src/shared/UBTConnectLibrary/Popup` or the OSUI popup it uses)
- Same causes as CR-HouseholdDetails-1 items 1 and 4 (`migration/change-requests/CR-HouseholdDetails-1.md`); this CR
  only adds the evidence of this route, so both are fixed once.
- Other routes using them: every route with Directory_EntityDetailsActions (HouseholdDetails, HouseholdCarousel, …)

## 1. Actions menu stays a skeleton in the default state (= CR-HouseholdDetails-1 #1)
- Evidence: `migration/screens/OneSchoolGlobalDetails/parity/default.json`: class `extra .ubt-skeleton-section` on
  `div#b14-b1-Placeholder_LoadingSection` (Directory_EntityDetailsActions `$b14`) and ~40 style / 5 pseudo
  differences inside the menu; pixel hotspots at y ≈ 520 (the menu row). TST `dom/default.html:188-232` shows the
  loaded menu (Placeholder_LoadingSection class "").
- Expected change: as CR-HouseholdDetails-1 #1 (reactive `useClientVar` for Bookmarks_IsSynched / Notes_IsSynched).

## 2. `aria-hidden` on `#reactContainer` and `html.popup-disable-scroll` while the ShareSheet popup is mounted (= CR-HouseholdDetails-1 #4)
- Evidence: all three states: attr `div#reactContainer aria-hidden: true → ∅` (`parity/default.json`, `loading.json`,
  `offline.json`); `loading.json` and `offline.json` also: `html: missing .popup-disable-scroll` (captured html class
  `popup-disable-scroll` in `analysis/states.json` for loading and offline, "" for default). The ShareSheet portal
  (`portal-class > popup-backdrop > popup-dialog.connect-share-portal`) is in all three captures
  (`dom/default.html:814-822`).
- Expected change: the shared popup sets/removes `aria-hidden` on `#reactContainer` and the `popup-disable-scroll`
  html class as the OutSystems Popup widget does (check the runtime source before porting).

## Workaround in the route until applied
None possible in `src/screens/OneSchoolGlobalDetails` (both inside shared blocks); the route composes them unchanged.

## Resolution (foundation owner)
Foundation owner, 2026-10-15:
- Same changes as CR-HouseholdDetails-1 §1 and §4 (`useClientVar`; `components/OSPopup/usePopupWidget.ts` sets aria-hidden and html `popup-disable-scroll` as the Popup widget, including the removal by closed popups on update).
- Parity 2026-10-15: loading 0, offline 0, default class 1 left (not analysed).
