# context-005 · Phase 3: catalog, tiers, feature flags

Date: 2026-10-14 · Phase: 3 done · Status: current

## Result
- `catalog.py`: 491 blocks on live screens: 129 shared + 18 OutSystems UI (`osui`) = **147 in the foundation queue**
  (`catalog/foundation-queue.md`), 108 own, 236 dead. 72 actions in `catalog/actions.md` (MCP asked per route, cached
  in `knowledge/actions/`). `board.py tier`: all 41 build screens `wait` (each needs a queued block; expected).
- `flags.py scan` (rule fixed: no plain "toggle", `getHas…` detected): 26 entries touch build routes, all decided.
  24 other live entries touch only skipped screens (record twins in `UBTConnect_Utils`, Orbit/LDM/Calendar): left open,
  they gate nothing. `flags.py export` waits for the scaffold (`app/` does not exist yet).

## Decisions (user, 2026-10-14)
- 18 real flags (19 entries), key = OutSystems record name, value = TST test account (`knowledge/flag-values-tst.json`):
  - `C2NewNotifications`: **both** branches, default off, reference none (only the navigation target of the bell and
    MessageDetail changes: Notifications / MessageList, `App_NotificationIcon.mvc.js:253-260`; both screens captured).
  - All others **default-only** at the TST value: C2NewBookmarks off, mobileDirectoryBookmarkNote off (2 entries),
    C2EnableC1DirectoryView on, C2EnableCarousel on, C2EnableMaps off, C2EnableFeed on, C2EnableCustomServices on,
    C2ExtendedShare on, mobileDirectoryUpdateFeedDeceasedProfile on, mobilePhotobook on, C2NewLDM on, mobileAssemble on,
    mobileOrbitAccess on, mobileOrbitHostSurvey on, WalletAccess off (constant), C2EnableSearchByBirthday on,
    mobileStudentInformation on.
- 7 false positives (`branches none`, behaviour still built as in the original): connect_LaunchDarkly_PermissionCheck,
  App_PIN_BiometricEnabled, registeredCallbackEvents.onToggle, getFlagURLByCountryCode, map_GeoJSON_Feature_Add,
  key LeafletMap, refreshUpdatesAndFlags.
- MCP status of all 26: `unavailable` (MCP is on DEV and cannot read per-user flags); facts from TST compiled code and
  `flag_probe`, source recorded per entry.

## Facts learned
- default-only (P-FLAGS): the route reads the flag with `useFlag` at the branch point and the other branch renders
  nothing; adding it later = `flags.py decide … --branches both`, export, reopen the routes of `flags.py route`, build.
  The other branch has no TST capture (per-user flag) and may lead to a skipped screen (needs a scope decision first).
- The user asked whether decisions can be changed later: yes, `flags.py decide` overwrites; scans keep decisions.

## Next
- Phase 4: `stack.py init`, `stack.py questions`; one decision session. Carry-over items: scope-review.md § "Handover to the next
  phases" (external app URLs, LDM target app, mock embeds, local placeholder images, biometrics on web, exit dialog,
  push, deep links, SortableJS / Leaflet / PanZoom, Mobile app type) + Leaflet map in BrowseDirectory / CountryDetails.
