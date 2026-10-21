# Questions: Services

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mocks: recorded fixture ids (answered)
- Question: The recorded answer of Services/DataActionGetServices (fixture 02-29cc7e39.json) has anonymized Id and IconId: icon classes are placeholders (captured connect-icon-orbit_text, -ldm, -assemble, -trove, -calendar, -tooltip, SVG_HR100, SVG_ElGusto, SVG_CommunityTradelink) and two services share the Id 'Irure' (Orbit, Trove), which breaks the add/remove/reorder logic (ListFilter/ListIndexOf by Id). How should the Services mock get real ids?
- Evidence: app/src/mocks/fixtures/UBTConnect/DataActionGetServices/02-29cc7e39.json; dom/default.html:87,164,241,318,399,480,581,655,729; Services.mvc.js:1440-1500 (Action_ChangeOrderLocal ListFilter/ListIndexOf on Id); HomeFeed copy 02-20169777.json was re-recorded with real ids (HomeFeed Q1)
- OutSystems MCP: not available to route agents
- Options: A: re-record Services/DataActionGetServices read-only with real Id/IconId, as for HomeFeed Q1 | B: keep the anonymized fixture and accept icon class/image differences on 9 rows (recommended: A)
- Answer (user, 2026-10-21T11:31:42): A (user, 2026-10-15): re-record DataActionGetServices of Services read-only with Id and IconId kept, HAR deleted, user reviews REVIEW.md (answered 2026-10-15T09:56:40, user) | Confirmed (user, 2026-10-21): the user reviewed the re-recorded fixture; keep it for the demo.

## Q2 [decision] behaviour: drag reorder index (answered)
- Question: Dragging a favourite to a new place in the original removes the wrong row and duplicates the dragged one: SetupList passes Sortable's 0-based OldIndex/NewIndex, and Action_ChangeOrderLocal subtracts 1 again (headless touch check: My Notes dragged before Lord's Day Meal gives My Notes, Orbit, LDM, Assemble, Trove, My Notes; My Entertaining is lost). The cancel/add icons pass 1-based orders and are correct; a suggestion dragged into Favourites lands one row higher than dropped. Keep the original arithmetic or correct the drag path?
- Evidence: SortableJS.controller.js:445-470 (Handler with evt/pendingMove 0-based indexes); SortableJS.Sortable.SortableList.mvc.js:239-261 (OnDragEnd raised unchanged); Services.mvc.js:1700-1702 (Handler_SortableListOnDragEnd passes NewIndex, OldIndex), :1433-1436 (NewOrder - 1, OldOrder - 1); app/src/screens/Services/components/actions.ts:250-251; not exercised in the capture
- OutSystems MCP: not available to route agents
- Options: A: keep as compiled (bug-compatible with TST)  |  B: correct only the drag path (pass NewIndex + 1, OldIndex + 1 to Action_ChangeOrderLocal), noted as a divergence from TST (recommended: B)
- Answer (user, 2026-10-15T10:42:02): Keep 1:1 (user, 2026-10-15): the original drag arithmetic is kept; recorded in app/docs/known-original-bugs.md; fix after the replacement

## Q3 [decision] parity: IconSVG replay (answered)
- Question: Default state, 1 pixel difference (0.48 %, worst tile 33.2 % at x=40, y=440-560): the three suggestion icons (HR100, El Gusto, Community Tradelink) are broken images in the replayed reference and real SVGs in the build. Cause: the reference replay resolves the captured src /UBTConnect/img/UBTConnectLibrary.*.svg against the dev server (<base href> = app origin, parity_check.cjs:548), which answers that path with index.html (text/html), not the SVG; the build loads /os-assets/UBTConnect/img/... (image/svg+xml). DOM, class, attr, layout and position are 0. Accept an exemption (proposed: ignoreSubtrees idRegex ^l2-37_\d+-b25-\$, states ^default$, id CAPTURE-ICONSVG-REPLAY-SERVICES), or have the foundation serve /UBTConnect/img/* from os-assets in the dev server so the reference loads the captured images?
- Evidence: migration/screens/Services/analysis/dom/default.html:583,657,731 (img src, data-rendered-size 24x24); parity/default.diff.png, default.expected.png vs default.build.png; curl localhost:5173/UBTConnect/img/UBTConnectLibrary.HR100.svg = 200 text/html 914 B, /os-assets/... = image/svg+xml; same artifact family as CAPTURE-LOGO-REPLAY*
- OutSystems MCP: not needed (replay artifact)
- Options: A: add the exemption CAPTURE-ICONSVG-REPLAY-SERVICES (Services suggestion IconSVG blocks, default state)  |  B: foundation serves /UBTConnect/img/* from os-assets in the dev server (CR), no exemption (recommended: A)
- Answer (user, 2026-10-15T10:46:52): Confirmed by the user 2026-10-15: dev server serves the original /UBTConnect/img/* (vite.config.ts originalImages); no exemption

## Q4 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: **No lock layer and no Access Restricted dialog on this screen, as the original** (CR-Services-1, user 2026-10-15):; Q1 done: ids and icons are real. Headless check (mock=real): favourites Orbit, LDM, Assemble, Trove, MyCalendar, MyNotes; Q2 open (not blocking): the original's drag reorder is wrong. SetupList passes Sortable's 0-based indexes; The default pixel difference was a reference-replay artifact (broken captured images); fixed in the dev server (Q3).; Mock semantics (write not recorded): ChangeOrder_Bulk replaces the user's current services in the collection; the next; Exceptions of Save go to the flow handler (`raiseToFlowHandler`): the App_Services flow controller is not fetched; A failed GetServices shows only the `list-error` state as captured (no toast captured in the offline state), as HomeFeed does.; Lists use the captured List markup directly: P-LIST asks for a shared OS list component, which does not exist yet
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T10:49:47): confirm (user, 2026-10-15)
