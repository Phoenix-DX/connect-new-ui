# Fix note: group A (app shell)

Minor findings wave of 2026-10-27. Brief: `migration/clarify/FIX.md`. No commit.

## 1. Document title from the route title (app-wide)

Findings: App_Services F5, Bookmarks F2, Calendar F3, Directory_OneSchoolGlobal F1, Legacy_LDMEventsFlow F1,
Legacy_OrbitQRCodeFlow F1. Decisions: App_Services Q4 (a), Legacy_OrbitQRCodeFlow Q1 (a), Directory_OneSchoolGlobal
Q2 (a) (user, 2026-10-27).

- TST evidence: `OutSystemsReactView.js:2008`. `componentDidMount` writes `document.title = this.title` when the screen
  has no exception. `componentDidUpdate` writes it again only when `this.controller.isActive()`. `View.title` of a screen
  returns the screen name, for example `UBTConnect.App_Services.Services.mvc.js:137-139` returns "Services".
- Check of all route titles: `app/src/app/routes.generated.ts` has 83 rows. For each row, a script compared the
  route `title` with the `View.title` getter of the TST screen file. All 83 are equal (TransportDetail: the screen file
  `UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.mvc.js`, not the Orbit block of the same name).
- Module root: `/UBTConnect` uses the element of the HomeFeed route (`router.tsx`), so the title is "HomeFeed", the
  title of the default screen that TST shows there. A path that shows no screen (`*`, `NotMigrated` with no route) has
  no TST screen. It writes no title, and the document keeps its last title. The first title before a screen mounts
  stays "UBTConnect" (`app/index.html:6`).
- Files changed:
  - `app/src/platform/navigation/ScreenFrame.tsx:13-17, 24-27`: new optional prop `title`. A layout effect on
    `[key, title]` writes `document.title` after the screen mounts and on each route change. The screen that goes
    away keeps its frozen entry, so it does not write the title again (the `isActive()` condition of `componentDidUpdate`).
  - `app/src/app/router.tsx:11-14, 21, 26`: every route gives `title={r.title}` to its `ScreenFrame`.
  - `app/src/platform/navigation/ScreenFrame.test.tsx` (new): the title on mount, after a forward navigation and after
    a back navigation. A path with no screen keeps the title. A `ScreenFrame` with no title writes nothing.
- Tests: `npx vitest run src/app src/platform/navigation` (pass).
- Proposed verdict: `match` for App_Services-007, Bookmarks-009, Bookmarks-061, Calendar-072,
  Directory_OneSchoolGlobal-054, Legacy_LDMEventsFlow-002, Legacy_OrbitQRCodeFlow-002.

## 2. App_Common F3: Login OnReady, DeviceAwareness_InvalidDevice

Decision: App_Common Q3 (a) (user, 2026-10-27): fix the constant now; the dialog comes with the production identity
provider.

- TST evidence: `migration/knowledge/static-entities-tst.json:2643`
  (`UBTConnect.appManager_JSUtils_CustomEvents.deviceAwareness_InvalidDevice` = "DeviceAwareness_InvalidDevice").
- Files changed:
  - `app/src/pages/Login/hooks/useLogin.ts:10-12`: the constant is now "DeviceAwareness_InvalidDevice", with the
    knowledge file as its source.
  - `app/src/pages/Login/Login.test.tsx:9, 104-117`: with `?CallbackType=DeviceAwareness_InvalidDevice`, OnReady skips
    DelayedMessage_Show (the pending message stays); without it, OnReady shows and clears the message.
- Tests: `npx vitest run src/pages/Login` (pass).
- Proposed verdict: App_Common-033 and App_Common-043 stay `partial`. The CallbackType comparison now matches TST. The
  call of AppManager_HandleDeviceAwarenessPopUp (ConfirmationDialog_ResetPassword, BR-UBTCON-306) is not built, by
  decision Q3 (a).

## 3. _shared F1: GetShareType_FromEntity, IsMyHousehold

- TST evidence: `UBTConnect.controller.js:11102-11223`. Member raises InvalidAction "Share not available" first
  (:11115-11118). Then the entity cases: Locality, Household, Interchange, Supper Meetings, OneSchool Global, Feed Item.
- After all entity cases, `isMyHouseholdInLocal` gives My Household (:11162). Else InvalidAction (:11171).
- Files changed:
  - `app/src/lib/ubtConnect/actions.ts:177-201`: the TST order. Household always gives Household. Member raises
    first. My Household is the result only when no entity case matched and `isMyHousehold` is true. The function stays
    pure.
  - `app/src/lib/ubtConnect/actions.test.ts:19, 149-168`: each entity type; Household with `false` and `true`
    (Household); Country with `true` (My Household) and `false` (raises); Member with `true` and `false` (raises).
- The only caller passes `false` (`app/src/containers/EntityDetailsActions/entityDetailsActionsState.ts:83`), so no
  screen changes today.
- Tests: `npx vitest run src/lib/ubtConnect src/containers/EntityDetailsActions` (pass).
- Proposed verdict: `match` for _shared-017.

## 4. Legacy_Share F1: ConnectShare Action_Redirect transition

- TST evidence: `ConnectShare.mvc.js:461-485`. The four navigations (HouseholdDetails, OneSchoolGlobalDetails,
  FeedItemDetail, SupperMeeting_Details) use `OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None)`.
- Files changed:
  - `app/src/pages/ConnectShare/hooks/useConnectShare.ts:122-123`: `navigate(target.path, target.params,
    { transition: TransitionAnimation.None })`. `goTo` (`app/src/platform/navigation/osNavigate.ts:92-97`) puts this
    transition in the history entry, with the pending replace of ReplaceOnUpcomingNavigation.
  - `app/src/pages/ConnectShare/hooks/useConnectShare.test.tsx:9, 111-115, 121-132`: the Household redirect and the
    OneSchool Global, Feed and Supper Meeting redirects navigate with `{ transition: TransitionAnimation.None }`.
- Tests: `npx vitest run src/pages/ConnectShare` (pass).
- Proposed verdict: `match` for Legacy_Share-023, Legacy_Share-024, Legacy_Share-025, Legacy_Share-026.

## Checks

- `npx vitest run src/app src/platform/navigation src/lib/ubtConnect src/pages/Login src/pages/ConnectShare
  src/containers/EntityDetailsActions`: 34 files, 209 tests, all pass.
- `npx eslint` on the 10 changed files: 0 errors, 0 warnings.
- `npm run typecheck`: 0 errors in the files of this group. It shows 7 errors in
  `app/src/pages/BookmarksByGroup/components/BookmarkGroupView.test.tsx`, a file of another group that is in progress.
