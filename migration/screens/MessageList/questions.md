# Questions: MessageList

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] list (answered)
- Question: P-LIST asks for a shared OS List component (scroll ending, row keys); none exists under src/shared. Render the Messages_List markup locally in the route now (IntersectionObserver on the last row for OnScrollEnding) and let the foundation owner extract it later (CR-MessageList-1)?
- Evidence: migration/patterns/P-LIST.md; MessageListBlock.mvc.js view (OSWidgets.List onScrollEnding, virtualization 1000/1000); no data-list component in app/src/shared
- OutSystems MCP: n/a (no MCP)
- Options: A: local list now + CR-MessageList-1 | B: wait for a shared List component before ready (recommended: A)
- Answer (user, 2026-10-15T11:24:45): (user, 2026-10-15) foundation builds a shared OSList component (P-LIST); this route uses it

## Q2 [decision] swipe (answered)
- Question: MessageListBlock list items have swipe actions (left: Clear -> MarkMessageAsClear, right: Mark as Read -> MarkMessageAsRead, full swipe triggers). The capture shows both action containers empty and no swiped state. Build the handlers and mocks but leave the swipe gesture not ported (empty containers as captured) until a swiped state is captured?
- Evidence: MessageListBlock.mvc.js view :115-230 (ListItem triggerActionOnFullSwipeLeft/Right, ListItemAction Clear / Mark as Read); dom/default.html list-item-left-actions / right-actions empty
- OutSystems MCP: n/a (no MCP)
- Options: A: handlers + mocks now, gesture not ported (NotCaptured note) | B: port the OutSystems ListItem swipe gesture now (recommended: A)
- Answer (user, 2026-10-15T11:24:45): (user, 2026-10-15) port the swipe gestures (Clear / Mark as Read) from the compiled code and runtime scripts

## Q3 [decision] uncaptured blocks (answered)
- Question: MessageList_Filter (sort sheet, Filter icon) and MessageSearchHistory (search history, Search icon) are own blocks of this screen that no captured state shows. Render them as NotCaptured now (header search input and icons are built from compiled code), or build both from the compiled sources without a capture?
- Evidence: pack Gaps: MyNotifications.MessageList_Filter, UtilityFlow.MessageSearchHistory not rendered in any captured state; survey sources 20 KB / 31 KB
- OutSystems MCP: n/a (no MCP)
- Options: A: NotCaptured now, build after a capture of the search and filter states | B: build both from compiled code now (recommended: A)
- Answer (user, 2026-10-15T11:24:45): (user, 2026-10-15) build MessageList_Filter, MessageSearchHistory and the search input from the compiled views

## Q4 [decision] mock data (answered)
- Question: Some captured message titles are not masked (generic test labels such as 'Test Noti 56', 'Save draft 02:50', 'Notification 1/3/4/6'); masked ones are bullets. Reuse the unmasked labels as-is in the fictional mock (text parity) and use invented texts of the same word lengths for the masked ones?
- Evidence: dom/default.html Message_List_Item_Title rows 0, 5, 12-15; mock-fixtures.md person data rule
- OutSystems MCP: n/a (no MCP)
- Options: A: reuse unmasked test labels, invent masked ones | B: invent every title (text parity differences to accept) (recommended: A)
- Answer (user, 2026-10-15T11:24:45): (user, 2026-10-15) reuse the TST test labels (not person data) in the mock

## Q5 [decision] call order (answered)
- Question: Call parity (default): the build makes ActionGetSignedImagesInBulk after the shell's AfterInitialize, Sync_Info_GetMain and GetUserInformation; TST made it right after DataActionGetMessages, before AfterInitialize. Same calls, inputs and counts; only the interleaving of the screen's chain with the shell's app-start chain differs (the shell renders the first screen later than TST). Accept this order difference for MessageList, or ask the foundation owner to render the first screen before AfterInitialize?
- Evidence: parity/default.json diffs[kind=call]; calls.json ts 4105 GetMessages, 4370 GetSignedImagesInBulk, 5252 AfterInitialize; app/src/shell/startup.ts runAppStart
- OutSystems MCP: n/a (no MCP)
- Options: A: accept (exemption by the user) | B: shell change request (first screen earlier) (recommended: A)
- Answer (user, 2026-10-15T11:24:45): (user, 2026-10-15) accept: callOrderFree CALL-ORDER-APPSTART-RACE (count still compared)

## Q6 [decision] exemption (answered)
- Question: Style parity (all 3 states): .pull-to-refresh opacity 0 (TST) vs 1 (build). The original CSS animates it (:where(.backwards-compatibility) .pull-to-refresh: fadein-pull-to-refresh 1s, opacity 0 until 66%), so the value depends on how long after the layout mounted the style is read; the element is hidden behind the header. Add an exemption 'PullToRefresh fade-in animation phase (opacity)' like the skeleton shimmer phase?
- Evidence: parity/{default,loading,offline}.json [style] #b1-b1-b2-b1-ptr opacity 0 → 1; Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css:2926 @keyframes fadein-pull-to-refresh; css-relevant.md .pull-to-refresh
- OutSystems MCP: n/a (no MCP)
- Options: A: add the exemption (user) | B: keep it as a difference to fix in the shared PullToRefresh (recommended: A)
- Answer (user, 2026-10-15T11:24:45): (user, 2026-10-15) accept: PULL-TO-REFRESH-FADEIN-PHASE (opacity only)

## Q7 [decision] inline style (search) (answered, blocking)
- Question: The remove icon of Input_SearchMessages (search mode, built for Q3) has a Styles Editor inline style in the compiled view: 'color: #d3d3d3; padding: 10px; position: absolute; right: 0px; top: 5px;'. No captured state shows search mode, so consistency_check (AGENTS rule 21, NO-INLINE-COLOR) refuses it and route.py ready cannot pass. How should it be handled?
- Evidence: Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc.js view :483 (Icon 'remove', extendedProperties.style); consistency_check: components/ScreenBlock_MessageList.tsx inline style not in the captured DOM (color:#d3d3d3, padding:10px, right:0)
- OutSystems MCP: n/a (no MCP)
- Options: A: capture the search and filter states of MessageList (read-only UI toggles via capture steps), keep the compiled style | B: allow inline styles cited from the compiled view for states that were not captured (consistency_check change by the skill owner) | C: drop the style until such a capture exists (recommended: A)
- Answer (user, 2026-10-15T12:39:17): A, auto-accepted recommendation (user instruction 2026-10-15 11:24, 3h window): capture the search and filter states of MessageList read-only (UI toggles via capture steps), keep the compiled style

## Q8 [decision] exemption (search focus) (answered)
- Question: Search state: Input_SearchMessages border 0 (TST) vs 1px primary (build). OnClick_Search focuses the input after 200 ms (FocusCursorJS); the clone focuses it, so .form-control[data-input]:focus (Connect2_LegacyShared.ConnectMobile.css, !important) applies; the headless TST capture page was not focused, so the captured input shows the unfocused border none (:where(.backwards-compatibility) .input-search input[data-input]). Same kind as CAPTURE-UNFOCUSED-SEARCH-INPUT (Search Q4). Extend that exemption to idRegex ^b1-Input_SearchMessages$ for state ^search$ (style and pixel)?
- Evidence: parity/search.json [style] input#b1-Input_SearchMessages border 0px -> 1px, pixel hotspots y 0-40; ScreenBlock_MessageList.mvc.js :3156-3164 OnClick_Search.FocusCursorJS; bundle.css :31928
- OutSystems MCP: n/a (decision)
- Options: A: extend CAPTURE-UNFOCUSED-SEARCH-INPUT to the search state (user) | B: blur the input in the clone (diverges from compiled focus) (recommended: A)
- Answer (user, 2026-10-15T13:10:56): A, auto-accepted recommendation (user instruction 2026-10-15 11:24, 3h window)

## Q9 [decision] capture data drift (answered)
- Question: Search state: rows 0-9 have no background-blue-lightest in the new TST capture (2026-10-15: 6 unread of 19) but the mock follows the default capture of 2026-10-14 (16 unread). Only live TST data changed (messages read since, e.g. by the MessageDetail captures). Accept as capture data drift (class background-blue-lightest and background-color of .list-item in Messages_List rows, state ^search$), add a per-state mock scenario with the new read flags, or recapture every state and update the mock?
- Evidence: parity/search.json 10 [class] + 10 [style] on b1-b7-l1-36_0..9 .list-item; analysis/dom/default.html 16 x background-blue-lightest vs dom/search.html 6
- OutSystems MCP: n/a (decision)
- Options: A: exemption CAPTURE-DATA-DRIFT-MESSAGELIST-READ (user) | B: per-state mock scenario (capture-plan scenarios.search) | C: recapture all states, mock follows (recommended: A)
- Answer (user, 2026-10-15T13:10:56): A, auto-accepted recommendation (user instruction 2026-10-15 11:24, 3h window)

## Q10 [decision] exemption (animate phase) (answered)
- Question: Filter state: Animate b1-b12-Content (.animate.right-to-left.fast, 500 ms) captured mid-animation in TST (opacity 0.906, translateX 21.9px) vs finished in the build (1, 0); this also moves the Apply/Reset text in the pixel diff. Add an exemption "Animate entrance phase" (style opacity/transform and position of #b1-b12-Content, pixel of the shifted content, state ^filter$), like PULL-TO-REFRESH-FADEIN-PHASE?
- Evidence: parity/filter.json [style]/[position] #b1-b12-Content; bundle.css :8537-8556 .animate fast 500ms, :8577 right-to-left; dom/filter.html animation-delay 0ms
- OutSystems MCP: n/a (decision)
- Options: A: add the exemption (user) | B: recapture filter with a longer wait (plan waitMs) (recommended: A)
- Answer (user, 2026-10-15T13:10:56): A, auto-accepted recommendation (user instruction 2026-10-15 11:24, 3h window)

## Q11 [decision] filter radios (answered)
- Question: Filter state: TST shows both sort radios unchecked; the compiled logic checks "Newest to Oldest" (OnClick_Filter -> ToggleShowFilters -> RevertSelectedFiltersToPersistedValue: Filter_OrderDESC = not SelectedFilter_OrderASC = True; MessageList_Filter binds NewToOld_Checkbox to Filter_OrderDESC; OSWidgets.Checkbox renders checked = variable value). The clone follows the compiled code, so ::after of input.checkbox:checked is extra in the build (pseudo + pixel at the radio). Nothing in the compiled code explains TST. Keep the compiled behaviour and accept the difference, or render both radios unchecked on open as TST shows?
- Evidence: parity/filter.json [pseudo] #b1-b13-NewToOld_Checkbox ::after extra, pixel hotspots x 320-400 y 120; parity/filter.expected.png vs build.png; ScreenBlock_MessageList.mvc.js :1343, :2006-2010, :2236-2240; MessageList_Filter.mvc.js :296-335; OutSystemsReactWidgets.js :262-344
- OutSystems MCP: n/a (decision; compiled code read, no explanation)
- Options: A: keep compiled (Newest checked) + exemption for the radio (pseudo, pixel); user checks TST on a device | B: render both unchecked to match TST (recommended: A)
- Answer (user, 2026-10-15T13:10:56): A, auto-accepted recommendation (user instruction 2026-10-15 11:24, 3h window)

## Q12 [decision] call order (answered)
- Question: Filter and search states replay the same page load, so their load phase shows the same GetSignedImagesInBulk vs app-start interleaving that CALL-ORDER-APPSTART-RACE accepts for default (Q5). Widen its states from ^default$ to ^(default|filter|search)$? No calls in the filter/step2/search phases on TST or in the build.
- Evidence: parity/filter.json, parity/search.json [call] calls:load; parity-exemptions.json callOrderFree CALL-ORDER-APPSTART-RACE states ^default$; analysis/calls.json (load only)
- OutSystems MCP: n/a (decision)
- Options: A: widen the states (user) | B: keep as a difference (recommended: A)
- Answer (user, 2026-10-15T13:10:56): A, auto-accepted recommendation (user instruction 2026-10-15 11:24, 3h window)

## Q13 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Messages mock is fictional (19 rows: 16 unread, 1 urgent, 9 with a sender photo), TST test labels reused (Q4),; Messages_List uses the shared OSList / OSListItem (Q1). OnScrollEnding now follows the platform rule (scroll host,; Swipe (Q2) ported in the shared OSListItem (OutSystemsReactWidgets.js W:1392-1984), touch only; thresholds from the; Search input, MessageList_Filter (+ MessageFilterGroup, MessageFilterItem, CircledCheckbox, TwoButtonsAligned) built; Capture plan steps (Q7 A): filter (click Filter_Icon), close it (click Close_Filter_Icon, no call), search (click; MessageSearchHistory reads the shell adapter `localSearchHistory.ts` (CR-MessageList-3); empty on TST as captured.; Remove icon of the search input keeps the compiled inline style, now in the captured DOM (Q7 A).; Open decisions on the new states (recommendation A each): Q8 search input focus (exemption), Q9 capture data drift; SynchronizeNumberUnreadMessages: the shell's export (`src/shell/startup.ts`, CR-MessageList-1 applied).; DeviceHardwareId from client var `UBT_AppManager.DeviceInfo_UUID` ('' on the web).; Warning Login: B2C sign-in flow not ported; ForceInitiateLoginFlowDateTime only.; Call order on load differs only by the shell's app-start timing (Q5); PullToRefresh opacity phase (Q6).; Mock GetMessages ignores filters and search (server logic not visible); sorts by date, limits to MaxRecords.; TotalPrivate/TotalPublic count unread rows of MessageType 1 / 2. Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T13:11:27): confirm (auto-confirmed: user instruction 2026-10-15 11:24, 3h window)

## Q14 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Messages mock is fictional (19 rows: 16 unread, 1 urgent, 9 with a sender photo), TST test labels reused (Q4),; Messages_List uses the shared OSList / OSListItem (Q1). OnScrollEnding now follows the platform rule (scroll host,; Swipe (Q2) ported in the shared OSListItem (OutSystemsReactWidgets.js W:1392-1984), touch only; thresholds from the; Search input, MessageList_Filter (+ MessageFilterGroup, MessageFilterItem, CircledCheckbox, TwoButtonsAligned) built; Capture plan steps (Q7 A): filter (click Filter_Icon), close it (click Close_Filter_Icon, no call), search (click; MessageSearchHistory reads the shell adapter `localSearchHistory.ts` (CR-MessageList-3); empty on TST as captured.; Remove icon of the search input keeps the compiled inline style, now in the captured DOM (Q7 A).; Open decisions on the new states (recommendation A each): Q8 search input focus (exemption), Q9 capture data drift; SynchronizeNumberUnreadMessages: the shell's export (`src/shell/startup.ts`, CR-MessageList-1 applied).; DeviceHardwareId from client var `UBT_AppManager.DeviceInfo_UUID` ('' on the web).; Warning Login: B2C sign-in flow not ported; ForceInitiateLoginFlowDateTime only.; Call order on load differs only by the shell's app-start timing (Q5); PullToRefresh opacity phase (Q6).; Mock GetMessages ignores filters and search (server logic not visible); sorts by date, limits to MaxRecords.; TotalPrivate/TotalPublic count unread rows of MessageType 1 / 2. Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T06:56:47): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
