# Fix note: group G1 (content and legacy views)

Minor findings wave of 2026-10-27. Brief: `migration/clarify/FIX.md`. No commit.

## 1. Bookmarks F1: Supper Meeting row colours (IsMainHall)

Decision: Bookmarks Q2 (a) (user, 2026-10-27): build from the compiled expressions now.

- TST evidence: `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc.js` show:996-999
  (`Subdivision_Title.style`: color primary when IsMainHall, else neutral-10) and show:1016-1020
  (`Subdivision_Tag.Style`: background-color primary / neutral-2, color neutral-2 / neutral-6). BR-C2LEG-192.
- Files changed:
  - `app/src/pages/BookmarksByGroup/components/bookmarkGroupRows.tsx:190-191, 205-210, 219-222`: the empty
    NotCaptured marker is removed. The title and the tag get the inline colours of the two compiled expressions,
    from `details.isMainHall`.
  - `app/src/pages/BookmarksByGroup/components/BookmarkGroupView.test.tsx`: new test with a main hall row and an other
    row. It checks the three colours of each row.
- Tests: `npx vitest run src/pages/BookmarksByGroup` (pass).
- Proposed verdict: `match` for Bookmarks-114.

## 2. Home F1: FeedBlock_Updates subscription banner (#DoesntHaveAccess)

Decision: Home Q2 (a) (user, 2026-10-27): build from the compiled view now.

- TST evidence: `UBTConnect.Home.FeedBlock_Updates.mvc.js:388-537`.
  - Tree: CustomContainer (options as before, Clicked = OnClick_SubscriptionUpgrade) > Container
    (`text-align: center`) > Container `display-inline-block` (`text-align: center`) > IconText.
  - IconText: TextOptions Color BlueDark, FontSize ExtraSmall, FontWeight SemiBold; Text "Subscription upgrade
    required". Its Icon placeholder: In_ColorId BlueDark, In_SizeId NonStandard_16, In_IconId Lock.
  - Values: `migration/knowledge/static-entities-tst.json` (`UBTConnect.uBT_Color.blueDark` = "blue-dark",
    `uBT_Icons2.lock` = "connect-icon-lock", `uBT_IconsSize.nonStandard_16` = "icon-non-standard-16"). The original
    CSS has `.text-blue-dark` (`OutSystemsUI_2_23.OutSystemsUI.css`).
- Files changed:
  - `app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx:1-10, 112-141`: the NotCaptured wrapper and the plain
    text are replaced by the compiled tree, with the existing `CustomContainer`, `IconText` and `Icon`.
  - `app/src/pages/HomeFeed/staticEntities.ts:7-11`: new constant `UBT_Color_BlueDark` = "blue-dark" (TST value).
    This file is at the root of `pages/HomeFeed`, next to the components folder. It is not a hooks file of group C.
  - `app/src/pages/HomeFeed/components/FeedBlock_Updates.test.tsx`: new test of the tree (no marker, the two centred
    containers, the text classes, the lock icon classes).
- Tests: `npx vitest run src/pages/HomeFeed` (pass).
- Proposed verdict: `match` for Home-117. The state is still not captured: a capture adds only the pixels.

## 3. Home F4: open Dialog_GoExternalApp

Decision: Home Q2 (a) (user, 2026-10-27): build from the compiled view now.

- TST evidence: `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc.js`.
  - `:276-281`: in dialogBody, a Container with `text-align: center` is around the icon If.
  - `:436-450`: buttonLabel_Confirm is a CustomContainer with DisplayOptions Display flex, AlignItems center,
    JustifyContent center and FlexDirection row (values of `UBTConnect_Utils.uBT_*` in `static-entities-tst.json`).
- Files changed:
  - `app/src/pages/HomeFeed/components/Dialog_GoExternalApp.tsx:9-18, 35-36, 73-109, 137-138`: the icon If is now in
    a `div[data-container]` with `text-align: center`. The confirm label is in a `CustomContainer` with the four
    display options. The two NotCaptured wrappers are removed (`docs/guides/shared-code.md`: use NotCaptured only
    where the compiled code says nothing). The doc comment is updated.
  - `app/src/pages/HomeFeed/components/Dialog_GoExternalApp.test.tsx`: new test of the open dialog (the centred icon
    container, the flex row classes, the label and the open_new icon in `margin-left-s`).
- Note: the component is in `app/src/pages/HomeFeed/components/`, not in `components/` or `platform/feedback/dialogs/`.
- Tests: `npx vitest run src/pages/HomeFeed` (pass).
- Proposed verdict: `match` for Home-105.

## 4. Legacy_AssembleFlow F1: DIV_StickyBottom `animate: true`

- TST evidence: `Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc.js:505-510` and
  `Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc.js:455` give `animate: true` to the Container.
  The TST runtime does not use this property:
  - `migration/runtime-sources/OutSystemsReactWidgets.js`, module `OutSystems/ReactWidgets/Container` (offset about
    9.9k): `render` creates the `div[data-container]` only when `props.visible` is true, else it returns null. It
    never reads `props.animate`. The imported `AnimatedGroup` is shadowed by a local `n` (the class), so it is not
    used. `skipRenderWhenHidden` is false.
  - `migration/runtime-sources/OutSystemsReactView.js` (`ifWidget`, offset about 187k): the If helper also ignores its
    `animate` argument.
  - So on TST the bar shows and hides at once, with no transition. React mounts and unmounts the bar in the same way.
- Files changed (comments only, no behaviour change):
  - `app/src/pages/Assemble_BrowseByCountry/components/AssembleFilterView.tsx:152-154`: the comment "its show/hide
    animation is not reproduced" now gives the runtime evidence.
  - `app/src/pages/AssembleEvents/components/Assemble_FilterSheet.tsx:13-15`: the same for the doc comment.
- Tests: `npx vitest run src/pages/AssembleEvents src/pages/Assemble_BrowseByCountry src/containers/FilterSheet`
  (pass). The current tests already check that the bar is absent without a country.
- Proposed verdict: `match` for Legacy_AssembleFlow-151 and Legacy_AssembleFlow-152 (the runtime does not animate).
- Note for the project: the same runtime fact applies to every Container or If with `animate: true`. Other comments
  that say "animation not reproduced" (for example `AssembleSummary_List__Header.tsx:19`) can get the same evidence.

## 5. Legacy_MyNotificationsFlow F4: Close_Filter_Icon calls ToggleShowFilters

- TST evidence: `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc.js:566-588` (Close_Filter_Icon
  OnClick = `toggleShowFilters$Action`) and `:2584-2600` (ToggleShowFilters: RevertSelectedFiltersToPersistedValue,
  then ShowFilters = not ShowFilters).
- Files changed:
  - `app/src/pages/MessageList/components/MessageListView.tsx:45-46, 107, 205`: new view event
    `onToggleShowFilters`. Close_Filter_Icon calls it, not `onCloseSearchAndFilter`. The back arrow
    (Close_Search_Icon) keeps OnClick_CloseSearchAndFilter.
  - `app/src/pages/MessageList/hooks/useMessageList.ts:327`: `onToggleShowFilters: toggleShowFilters` (the existing
    ToggleShowFilters flow). FocusCursor no longer runs on this click.
  - `app/src/pages/MessageList/components/MessageListView.test.tsx`: the icon raises `onToggleShowFilters`; the back
    arrow raises `onCloseSearchAndFilter`.
  - `app/src/pages/MessageList/MessageList.test.tsx`: new page test. An unsaved sort is reverted and the filters
    close.
- Tests: `npx vitest run src/pages/MessageList` (pass).
- Proposed verdict: `match` for Legacy_MyNotificationsFlow-053.

## 6. Legacy_MyNotificationsFlow F5: NotificationDetailBlock summary and urgent icon

- TST evidence: `Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc.js:405-432` (If Summary <> "":
  Container SummaryContainer > Expression, class `OSFillParent`, style `color: #605f5f; font-size: 14px;`) and
  `:450-480` (If IsUrgent: Container `margin-bottom: 5px; text-align: center;` > Icon Message_List_Item_Icon,
  `icon alert-text fa-33`, icon exclamation, size FontSize, the inline style of the list icon). The runtime adds
  `gridProperties.classes` to the class and no margin-left (`OutSystemsReactView.js`, `fillWithBuiltinProperties`).
- Files changed:
  - `app/src/pages/MessageDetail/components/NotificationDetailBlock.tsx:132-137`: SummaryContainer with the
    `span.OSFillParent` and its inline style, in place of the marker.
  - `app/src/pages/MessageDetail/components/NotificationDetailBlock.tsx:146-165`: the urgent icon in its centred
    container. The icon is the same as `MessageListItem.tsx:123-140` (captured there, same compiled style).
  - `app/src/pages/MessageDetail/components/NotificationDetailBlock.test.tsx`: tests of the summary (tag, class,
    style, container id), of no summary, and of the urgent icon.
  - `app/src/pages/MessageDetail/components/MessageDetailView.test.tsx`: the urgent test checks the icon, not the
    marker.
- Tests: `npx vitest run src/pages/MessageDetail` (pass).
- Proposed verdict: `match` for Legacy_MyNotificationsFlow-141 and Legacy_MyNotificationsFlow-142.

## 7. Legacy_Share F2: OnInitialize ends before the block starts

- TST evidence: `UBTConnect.Legacy_Share.LegacyShareObject.mvc.js:271-287` (async OnInitialize:
  GetUserInformation_Wrapper, then User_AgeVisibility = DisplayAge) and `:353` (onInitializeEventHandler). The
  runtime creates the view only after the async OnInitialize ends. So ScreenBlock_ShareObject starts with the final
  User_AgeVisibility: its OnReady (`ScreenBlock_ShareObject.mvc.js:1044`) sends it to GetHouseholdDetails, and
  OnParametersChanged (`:932-944`) does not fire.
- Files changed:
  - `app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx:11, 30-114`: the block and its flows
    (`useShareObject`, `ShareObjectView`) move to a local component `ShareObjectBlock`. The page renders nothing until
    OnInitialize ends (`userAgeVisibility` is null until then), as `ConnectSharePage.tsx` does. Then it mounts the
    block with the value. GetHouseholdDetails gets the user's DisplayAge, and GetShareObjectTypeById is fetched once.
  - `app/src/pages/LegacyShareObject/LegacyShareObject.test.tsx`: new test with a user whose DisplayAge is True (MSW
    override of `UBTConnect_Utils/ActionGetUserInformation`). GetHouseholdDetails and GetShareObjectTypeById are each
    called once with `User_AgeVisibility: true`. The test fails on the old page code (checked). Two tests now wait for
    the first block content, because nothing renders before OnInitialize ends.
- Tests: `npx vitest run src/pages/LegacyShareObject` (pass).
- Proposed verdict: `match` for Legacy_Share-051, Legacy_Share-057 (the double fetch) and Legacy_Share-059.

## Checks

- `npx vitest run src/pages/BookmarksByGroup src/pages/HomeFeed src/pages/AssembleEvents src/pages/Assemble_BrowseByCountry src/containers/FilterSheet src/pages/MessageList src/pages/MessageDetail src/pages/LegacyShareObject`:
  43 files, 302 tests, all pass.
- `npx eslint` on the 18 changed files: 0 problems.
- `npm run typecheck`: pass.

## Legacy_Share F2, follow-up by the orchestrator (2026-10-27)

- The parity sweep after the wave showed LegacyShareObject with structure diffs in the loading and offline states.
- Cause: a failed `GetUserInformation_Wrapper` left the page blank. The runtime creates the view after a handled
  OnInitialize error (`OutSystems.js` ControllerFactory). Only an unhandled error result leaves the screen without a
  view. User_AgeVisibility keeps its default False.
- Change: `LegacyShareObjectPage.tsx` OnInitialize catch: `raiseToFlowHandler`, then the view with `false`. New test
  "a failed OnInitialize goes to the flow handler and the view is still created".
- The loading state (the mock never answers, the clone has no request timeout) got the exemption
  `CAPTURE-LOADING-FETCH-TIMEOUT-LEGACYSHAREOBJECT-ONINITIALIZE` (`migration/parity-exemptions.json`), same family as
  the other loading-timeout entries. `route.py parity LegacyShareObject`: clean in the three states.
