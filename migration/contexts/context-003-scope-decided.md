# context-003 · Scope decided by journey rounds (Phase 1 done)

Date: 2026-10-14 · Phase: 1 done · Status: current

## Result
- Every screen decided on the board: **41 build (Cx 3455), 42 skip, 0 undecided**; `route.py plan` lists the 41.
- Done in rounds from the user journey ([scope-plan.md](../scope-plan.md)): V1 entry → V2 HomeFeed → V3a–e one step
  from HomeFeed → V4a–c deeper (rounds 4 and 5 merged) → V6 ConnectShare → V7 no way in.
- Decision log, skip list with "revisit when", items for later phases: [scope-review.md](../scope-review.md).
- Sitemap regenerated with the real decisions (`migration/sitemap.md` / `.html`).

## Decisions (user, 2026-10-14)
- D3 (a): Splash, Login, PIN screens and the PIN lock built with mock sign-in; real B2C not migrated.
- D8 (b): Feed CMS iframe and `embed-entertaining.js` become same-size mock pages; real embed pluggable later.
- D11 (c): Notifications and MessageList both built; the bell picks by flag `C2NewNotifications`.
- **Orbit, Assemble and LDM are separate apps** → `skip:external` (12 Orbit + 2 Orbit contact forms, 3 Assemble,
  6 LDM + 1 LDM contact form). Entry points in Connect open the external app through a configurable URL. D1 closed.
- D2 (a): only the bookmarks branch TST uses (MyBookmarks → BookmarksByGroup); other branches `skip:variant`.
- Map `skip:variant` (`C2EnableMaps` false on TST). D10 (a): ConnectShare built. D4–D6: `skip:dead`.
- New skip label `skip:external`; every skip can be reopened (scope-plan.md § "Reopen a skipped screen").

## Facts learned
- 19 per-user flag helpers `UBTConnect_Utils.GetHas…`, TST values read read-only with `migration/tools/flag_probe.cjs`:
  [knowledge/feature-flag-helpers.md](../knowledge/feature-flag-helpers.md). The survey saw only one of them.
- Hidden variant pairs found that way: bell (Notifications / MessageList), Directory tab (CountryList / Locality_Details),
  households (HouseholdCarousel / HouseholdDetails).
- LDM's UI and data live in the Orbit module (`Connect2_OrbitMobile_MUI.LDM_*`, endpoints under that module).
- ConnectShare rewrite confirmed in TST `UBTConnect.controller.js`.

## Files changed
- `migration/board.md` (+ `screens/*/notes.md` history), `scope-review.md`, `scope-plan.md` (label `skip:external`,
  reopen step with `status=todo`), `sitemap.md` / `.html`, `tools/sitemap.py` (colours from the board).
- New: `migration/tools/flag_probe.cjs`, `migration/tools/check_mermaid.cjs`, `knowledge/feature-flag-helpers.md`,
  `knowledge/flag-values-tst.json`.

## Open issues
- Carried to Phases 2–4: scope-review.md § "Handover to the next phases" (AcceptPendingPolicies data, Notifications capture
  by URL, 19 flags vs `flags.py scan`, external app URLs and LDM target app, mock embeds, native features on web,
  third-party libraries SortableJS / Leaflet / PanZoom).

## Next
- Assign build waves on the board (Wave column): W1 entry + shell, W2 HomeFeed, W3 home & messages + directory,
  W4 menu & contact, W5 bookmarks, W6 sharing (Orbit/Assemble/LDM waves no longer needed).
- Phase 2: `batch_capture.cjs init-plan` for the 41 build screens, fill route parameters with test-account ids, capture.
