# ShareSheet

OutSystems: `UBTConnect_Utils.CW_Share.ShareSheet` · pack `migration/blocks/UBTConnect_Utils.CW_Share.ShareSheet.md`
· compiled source `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect_Utils.CW_Share.ShareSheet.mvc.js`

| Input                | Type            | Prop                  | Default |
| -------------------- | --------------- | --------------------- | ------- |
| In_IsOpen            | Boolean         | `inIsOpen`            | `false` |
| In_ShareObjectTypeId | Text            | `inShareObjectTypeId` | `''`    |
| In_ShareableObjectId | Long Integer    | `inShareableObjectId` | `''`    |
| In_IsLegacy          | Boolean         | `inIsLegacy`          | `false` |
| In_UpdateType        | Text            | `inUpdateType`        | `''`    |
| In_UpdateDate        | Date (ISO text) | `inUpdateDate`        | `''`    |

The block raises one event: `Event_ClosedShareSheet` → `onEventClosedShareSheet`. The block has one placeholder:
`Placeholder_ShareableObject` → `children`.

- Root: while the sheet stays closed, the block renders only its root. When IsOpen is on, the block renders two parts:
  - ConnectPatterns.BottomSheet, with classes, a footer height, the title "Share " + type, and a back button on the
    search step (:316-345).
  - PreventBackNavigation (→ OnBack).
- OnParametersChanged (:2133-2209): when In_IsOpen changes, the block opens or closes the sheet.
  - Open: the block renders the sheet and resets the local variables [ShareSheet.tsx, Action_ResetLocalVariables].
    Then it runs BottomSheetOpen with the id from Initialized.
  - Close: the block runs BottomSheetClose. Then it sets IsOpen = False on `transitionend` (`jsNodes.ts` DelaySetIsOpen).
  - As in OutSystems, when In_IsOpen is True at the first render, nothing happens.
- First step of the sheet:
  - It shows the shareable object (bordered container), a dummy search Input and the recently shared section.
  - When the user sets the focus on the Input, the sheet goes to the search step.
- Search step of the sheet:
  - It shows a focused Input and the search list.
  - When the user clears the Input or submits a search, the block sets SearchTerm and IsSearching.
- Footer of the sheet:
  - On the first step, the footer has a Cancel button. Cancel raises Event_ClosedShareSheet.
  - On the search step, the footer has a Send button [ShareSheet.tsx, `footer`].
- Closing: OnToggle closed and OnClose run Action_ResetAndCloseSheetState. This action raises the event,
  resets the state and runs ScrollTop.
- OnBack (Handler_OnBack :3265-3309): on the search step, the sheet goes back to the first step. On the first step,
  OnBack runs Action_ResetAndCloseSheetState.
- Processing: ShareSheet_IsSharing adds the class `connect-share-sheet__content--processing`.

The block uses these calls (`src/api/share/shareSheet.ts` and `src/api/member/`, mocks in `mocks.ts`):

- DataActionGetRecentlyShared runs each time the sheet opens (`useRecentlySharedQuery`).
- DataActionGetAvailableMembers runs on each submitted search. It lives in `src/api/member/` (`useAvailableMembersQuery`). A reopened sheet shows the skeleton while the call runs (`gcTime: 0`).
- ActionCS_ShareObject runs in two cases:
  - The user clicks Send. The call uses the HouseholderIds of the selected members.
  - The user clicks a recently shared member.
  - After the call, the block resets the state and closes the sheet. Then it shows "<Type> has been shared."
    ("Household profile has been shared." for a household, TST publish of 2026-10-29).
  - Errors: NotRegistered goes to the flow handler; the user exception CommunicationError and a CommunicationException
    go to the flow handler as the user exception CommunicationError; any other non-system error shows "Share failed.
    Please try again."
  - When the call fails with NotRegistered or a system exception, the error goes to the flow handler. Any other
    failure shows "Share failed. Please try again."
- ActionCS_CreateShareProfileLink (`cs_CreateShareProfileLink`).

Mocks:

- No one recorded these calls, and no fixture exists.
- The mocks use six fictional members. The names are plausible (from `src/mocks/fictional/content.ts`). The members have no
  image URL. The first three members are recently shared.
- Shares answer success. The link answers ShareId 1 and an empty URL.

Selection and loading:

- The user can select at most 50 members. When the user tries to select more, the block shows "You can select up to 50
  recipients only." with FeedbackMessage_AutoClose: the message closes by itself.
- The list of the selected members shows above the results.
- While a list loads, the block shows a skeleton of five "Loading Name" rows.

Subscription:

- A click on a disabled recently shared member runs App_Subscription_ShowUpgradePopUp (`showUpgradePopUp` of
  `platform/feedback/dialogs`). It opens the Access Restricted dialog that the current screen stored, else nothing.
- "Subscription upgrade needed" of a SearchResult_Item runs App_Subscription_NavigateToUpgrade (`navigateToUpgrade`).
  The sheet gives it to the block as `onClickUpgradeSubscription`.

## Captured variants (1; 1 tested)

| Capture | Source                   | What it shows      |
| ------- | ------------------------ | ------------------ |
| v1      | BookmarksByGroup/default | closed: empty root |

The story `Open` (no capture) shows the first step. Tests with `it` cover these cases: loading, lists, search, selection,
Send, recent-member share, the two subscription clicks and the link action.

## Not captured / not settled

- The external share section ("Shared To": Share via, Copy link, WhatsApp / Signal / Outlook) renders only when
  AppManager_GetIsNative is true.
  - The React app runs as a browser PWA (`src/platform/device/deviceContext.ts`, `isNativeDevice: false`). So the block does not
    render this section.
  - In the original app, a click on an option (Handler_OnClickExternalOption) calls CS_CreateShareProfileLink
    (ported in `src/api/share/shareSheet.ts`). Then it runs the ExternalShare client action (native share / clipboard).
  - The React app does not port the ExternalShare client action.
- IsSubmitting of Action_SubmitShare disables Send while CS_ShareObject runs (TST publish of 2026-10-29, P2-Q1 a).
- The captures do not contain the List widget attributes (`animateItems`, `disable-virtualization`). The block renders
  only `data-list`.
- These static values come from the original CSS: `connect-icon-lock`, `connect-icon-checkbox_fill`,
  `connect-icon-checkbox_outline_blank`, `connect-icon-remove-fill`, `ubt-avatar-image-sb` (SmallBase_48).

## Files

- `ShareSheetContainer.tsx`: the view (root, bottom sheet, footer).
- `useShareSheet.ts`: the state, the effects, the queries and the handlers.
- `shareSheetState.ts`: pure helpers of the state.
- `types.ts`: the props interface and `ShareSheetParams`. `index.ts` re-exports the props type.
- `components/ShareSheetFirstStep.tsx`, `components/ShareSheetSearchStep.tsx`: the two steps of the sheet.
- `jsNodes.ts`, `mocks.ts`: the ported JavaScript nodes and the mocks.
