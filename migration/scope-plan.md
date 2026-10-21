# Scope plan: decide the scope by user journey

Date 2026-10-14 · Approved by the user: go from the entrance (Splash, Login, PIN) → HomeFeed → then deeper step by step.
Decide everything first, then build (option a). Evidence for each screen: [scope-review.md](scope-review.md). Diagram: [sitemap.md](sitemap.md) / `sitemap.html`.
The depth comes from the TST navigation diagram (`migration/tools/sitemap.py`): step 1 from HomeFeed includes the tabs of the bottom bar.

## Principles

- Each round covers one slice of the app. Decide a round fully before the next round. You can stop or change session between two rounds.
- Decide a group of variants (D1, D2) and D9 **once for the whole family**, at the first appearance. Later rounds only apply the decision again.
- No skip is permanent (see "Reopen a skipped screen"). Do not capture, spec or build any screen until round 7 is decided.
- TST is the source of truth. DEV (OutSystems MCP) is only a reference (CLAUDE.md).

## The rounds

| Round | Slice | Screens | Decision raised first |
|---|---|---|---|
| 1 | Entrance | Splash, Login, PINRegister, PINUnlock, AcceptPendingPolicies, InvalidPermissions | D3 (entrance part); shell: PIN lock layer, policy checker |
| 2 | HomeFeed | HomeFeed | D8 (Feed CMS iframe); shell: logo, bottom bar |
| 3a | From HomeFeed: home and messages | Services, Notes, Notifications, MessageList, MyEntertaining, Search, Updates_SingleList | D8 (MyEntertaining embed) |
| 3b | From HomeFeed: directory | CountryList, Locality_Details, HouseholdCarousel, HouseholdDetails | |
| 3c | From HomeFeed: programs | OrbitLanding, OrbitAdminLanding, AssembleEvents, LDM_MyEvents, LDM_MyEvents_V2 | **D9** (Orbit/Assemble), then **D1** (the whole LDM family) |
| 3d | Bottom bar | Bookmarks, MyBookmarks, New_MyBookmarks, Menu | **D2** (the whole Bookmarks family, with ShareObject, CoomingSoon) |
| 3e | Share from HomeFeed | LegacyShareObject | |
| 4 | Step 2 (25 screens) | Deep directory, MessageDetail, Orbit/Assemble detail, LDM_EventDetail*, BookmarksByGroup*, Profile, TermsAndPoliciesMenu, ContactUsMenu, PINBiometricsMenu, ContactByEmail… | D3 (part inside Menu) |
| 5 | Step 3–4 (17 screens) | PINChange, FeedItemDetail, BrowseCountries, ShareObject, LDM_Email*, ContactUsDetails, ContactByEmail…, Orbit detail, GuestArrangements | |
| 6 | Entrance through a share link | ConnectShare | **D10** |
| 7 | No way in (13 screens) | D4, D5, D6 | confirm `skip:dead` once |

Rounds 4–5 mostly apply the decisions that exist. Ask only about the screens that are still open.

## How each round works

1. Claude presents the round:
   - each screen (role, where it opens from, where it leads), the evidence, the options and the recommendation;
   - the information the user must give (for example the flag value on PROD);
   - the effect on later rounds.
2. The user answers, or asks for more checks (TST; DEV MCP for reference).
3. Claude records the result:
   - `python3 $SK/board.py set <Screen> decision=build|skip reason="V<n> · D<k> · <label> · <reason> (user, <date>)"`;
   - the decision log in `scope-review.md`;
   - run `python3 migration/tools/sitemap.py` again (colors follow the real decisions).
4. Checkpoint: `migration/contexts/INDEX.md` § Now = "Round n finished, next is round n+1".

## Skip labels

| Label | Meaning |
|---|---|
| `skip:dead` | No way in on TST (also by deep link; checked in the source too) |
| `skip:variant` | A variant that PROD does not use |
| `skip:later` | In use, but built later |
| `skip:external` | Belongs to a separate app (Orbit, Assemble…); Connect only opens that app (added 2026-10-14) |

For each skipped screen, also record the **condition to look at it again** in the section "Skipped screens" of
`scope-review.md`. Example: "if PROD turns off `C2NewLDM`". To see the list, run `python3 $SK/board.py show --decision skip`.

## Reopen a skipped screen

A skipped screen has no capture, spec or code, so a reopen needs no cleanup. The history of changes is in
`migration/screens/<Screen>/notes.md`.

1. `python3 $SK/board.py set <Screen> decision=build status=todo reason="reopen · <reason> (user, <date>)"` (a skip sets
   status `-`; `status=todo` puts the screen back in the queue).
2. `python3 $SK/catalog.py …`, `python3 $SK/board.py tier …`, `python3 $SK/flags.py scan …`: find what the shared blocks and new flags need.
3. `node $SK/batch_capture.cjs init-plan …` adds the screen to the capture plan. Then capture.
4. A shared block that does not exist yet goes to a foundation batch (change request). Do not change it in the route.
5. `python3 $SK/route.py start <Screen>` as for every route; run the sitemap again.

## After round 7 (option a: decide everything, then build)

Phase 2 capture plan (build screens only) → Phase 3 catalog, flags → Phase 4 stack (one session) → Phase 5 foundation →
route loop by wave. Record the waves in the Wave column of the board:

| Wave | Content |
|---|---|
| W1 | Shell + entrance (round 1) |
| W2 | HomeFeed (round 2) |
| W3 | Home and messages, directory (rounds 3a, 3b, the matching part of rounds 4–5) |
| W4 | Menu, profile, contact |
| W5 | Bookmarks |
| W6 | LDM |
| W7 | Orbit, Assemble |
| W8 | Share, ConnectShare |
| Last | Screens reopened from skip |
