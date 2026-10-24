## Result
status: pass
summary: components/ui/Dialog now has Dialog (one markup) and the variants ConfirmDialog (was the platform ActionConfirmationDialog), ChoiceDialog and NavigationDialog (NavigationConfirmationDialog, with Dialog_Navigation as `variant="connect"`). Dialog_AccessRestrictedAction_Legacy moved next to the platform dialog (DialogAccessRestrictedActionLegacy); DialogExitConfirmation uses Dialog. `app/dialogs.ts` connects platform and ui. 4 merges, 29 user files.
Main-tree pass (on ba5c2154, after the AssembleDetail G5 pass): VirtualMeetingUrl kept props-only (conflict resolved to HEAD); AssembleSummaryCardContainer renders the meeting-info dialog with ConfirmDialog. Old-vs-new: container 3 scenarios 0 differences against HEAD; P7-2 scenarios 37 of 38 equal (the 38th, VirtualMeetingUrl alone, changed in HEAD, not in this step).
W21 against HEAD: HomeFeed 244.39 -> 244.67 kB (+0.28), Login 184.46 -> 184.71 kB (+0.25). typecheck, lint (0 errors), format, unit suite (642 files, 3940 tests), arch baseline (0 new, 0 gone), dependency-cruiser (0 new, 6 gone) pass.

## Files changed

All paths under `app/` unless named. The merges share 6 files (marked "shared"); they are listed under merge 1.

### Merge 1: Dialog + ConfirmDialog (ActionConfirmationDialog) + ChoiceDialog on it

- added `src/components/ui/Dialog/Dialog.tsx` (shared markup: block > Root > children; popup portal; usePopupWidget; CopyClassesAcrossPortal)
- added `src/components/ui/Dialog/Dialog.test.tsx`
- added `src/components/ui/Dialog/Dialog.README.md` (the family, the triggers, the two connections of app/)
- added `src/components/ui/Dialog/dialogTriggers.ts` (port: `setDialogTriggers` sets the module bindings `useActionConfirmationTrigger` and `usePreventBackNavigationTrigger`)
- moved `src/platform/feedback/dialogs/ActionConfirmationDialog.tsx` -> `src/components/ui/Dialog/ConfirmDialog.tsx` (git mv, rewritten as the view; `@origin NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog`)
- moved `src/platform/feedback/dialogs/ActionConfirmationDialog.test.tsx` -> `src/components/ui/Dialog/ConfirmDialog.test.tsx` (git mv; the cases that need platform went to useActionConfirmation.test.tsx)
- added `src/platform/feedback/dialogs/useActionConfirmation.ts` (the trigger: `dx-show` listener, answer, PreventBackNavigation)
- added `src/platform/feedback/dialogs/useActionConfirmation.test.tsx`
- added `src/platform/feedback/dialogs/dialogViews.ts` (port: `setDialogViews` sets the module bindings `ConfirmDialogView` and `DialogView`) (shared with merges 3, 4)
- added `src/app/dialogs.ts` (`connectDialogs()`; module paths, not barrels) (shared)
- changed `src/main.tsx` (calls `connectDialogs()` before the first render) (shared)
- changed `src/test/setup.ts` (calls it in `beforeAll`, dynamic import, so the vi.mock of each test file still applies) (shared)
- changed `.storybook/preview.ts` (calls it) (shared)
- changed `src/components/ui/Dialog/index.ts` (exports Dialog, ConfirmDialog, setDialogTriggers) (shared)
- changed `src/platform/feedback/dialogs/index.ts` (ActionConfirmationDialog out; useActionConfirmation, the dialog views and DialogAccessRestrictedActionLegacy in) (shared)
- changed `src/platform/feedback/dialogs/DialogAccessRestrictedAction.tsx` (markup through `ConfirmDialogView`; compiled-line references removed; `@origin`)
- changed `src/components/ui/Dialog/ChoiceDialog.tsx` (on ConfirmDialog, no platform import; props `header`, `body`, `confirmLabel`, `dismissLabel`)
- changed `src/components/ui/Dialog/ChoiceDialog.test.tsx` (props; opens with the `dx-show` event, no platform import)
- changed `src/components/ui/Dialog/ChoiceDialog.stories.tsx`, `src/components/ui/Dialog/ChoiceDialog.README.md`
- users, ActionConfirmationDialog -> ConfirmDialog (import line and tag): `src/containers/AssembleSummaryCard/AssembleSummaryCardContainer.tsx` (main-tree pass; the prefetch changed `src/components/assemble/VirtualMeetingUrl/VirtualMeetingUrl.tsx`, which HEAD made props-only), `src/pages/AssembleDetail/components/BookmarkNoteAddEdit.tsx`, `src/pages/BookmarksByGroup/components/BookmarkNoteAddEdit.tsx`, `src/pages/BookmarksByGroup/components/BookmarkNoteDelete.tsx`, `src/pages/ContactUsDetails/components/InformationDialog.tsx`, `src/pages/HomeFeed/components/Dialog_GoExternalApp.tsx`, `src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/UpgradeSubscriptionDialog.tsx`, `src/pages/Login/LoginPage.tsx`
- users, ChoiceDialog prop names: `src/pages/Menu/MenuPage.tsx`, `src/pages/Profile/ProfilePage.tsx`
- changed `docs/refactor/arch-baseline.csv` (2 rows removed: ChoiceDialog.tsx and ChoiceDialog.test.tsx -> `@/platform/feedback/dialogs`, rule-4, P7)
- added `migration/tools/refactor/p7-2-dialog-users.py` (the script that changed the users of merges 1 to 3: import lines, tags, prop names)

Tests: ConfirmDialog.test.tsx (3), useActionConfirmation.test.tsx (5), Dialog.test.tsx (3), ChoiceDialog.test.tsx (3). The 4 old ActionConfirmationDialog cases are all kept: closed markup and "No answers False" in ConfirmDialog.test; ConfirmAction + Yes, No + back navigation, "ConfirmAction without such a dialog" in useActionConfirmation.test.
Evidence: harness scenarios VirtualMeetingUrl (prefetch; main tree: the container scenarios below), AssembleDetail/BookmarksByGroup note dialogs, InformationDialog, Dialog_GoExternalApp, UpgradeSubscriptionDialog, Login reset-password dialog, Menu x2, Profile, stacked ChoiceDialog: same DOM (closed, open, after each answer), same answers, callbacks, back-navigation results and focus.

### Merge 2: NavigationConfirmationDialog + Dialog_Navigation -> NavigationDialog

- changed `src/components/ui/Dialog/NavigationDialog.tsx` (the view of NavigationConfirmationDialog, `variant="plain"` default; Dialog_Navigation is `variant="connect"`; props `onNavigation`, `header`, `body`, `confirmLabel`, `dismissLabel`; the client actions of NavigationConfirmationDialog are its local hook `useNavigationConfirmation`: window event `dx-before-navigation`, Yes, No, plus the platform back-navigation queue through `usePreventBackNavigationTrigger`)
- changed `src/components/ui/Dialog/NavigationDialog.test.tsx` (the 7 NavigationConfirmationDialog cases + the 4 Dialog_Navigation cases + "unmounted, it no longer listens"; the back-navigation case moved to app/dialogs.test.tsx)
- changed `src/components/ui/Dialog/NavigationDialog.stories.tsx` (+ PlainCompiledView, PlainClosed from the old NavigationConfirmationDialog stories), `src/components/ui/Dialog/NavigationDialog.README.md` (both READMEs merged)
- added `src/app/dialogs.test.tsx` (NavigationDialog joined to the platform back-navigation queue by `connectDialogs`)
- deleted `src/shared/NavigationHandler/NavigationConfirmationDialog/NavigationConfirmationDialog.tsx`, `NavigationConfirmationDialog.test.tsx`, `NavigationConfirmationDialog.stories.tsx`, `README.md`, `types.ts`, `index.ts` (merged; tests replaced as above)
- users, NavigationConfirmationDialog -> NavigationDialog: `src/pages/EmailContact/components/OrbitContactFormView.tsx`, `src/pages/EmailTarget/components/HouseholdEmailView.tsx`, `src/pages/LDM_Email_V2/components/LdmEventEmailView.tsx`, `src/platform/navigation/navigationGate.test.tsx`
- users, Dialog_Navigation -> `variant="connect"` and prop names: `src/components/contact/ContactEmailForm/ContactEmailForm.tsx`, `src/pages/ContactUsDetails/ContactUsDetailsPage.tsx`, `src/pages/Profile/ProfilePage.tsx`

Tests: NavigationDialog.test.tsx (11), app/dialogs.test.tsx (1), navigationGate.test.tsx (cases unchanged).
Evidence: harness scenarios ContactEmailForm (real form, made dirty), ContactUsDetails, Profile, labels, not-prevented, EmailContact, EmailTarget, LDM_Email_V2, already-prevented: same DOM, same `defaultPrevented`, resume calls, `dx-navigation-cancelled-by-user` count and back-navigation results.

### Merge 3: Dialog_AccessRestrictedAction_Legacy -> next to the platform dialog

- added `src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (`@origin ...Dialog_AccessRestrictedAction_Legacy`; its block element around DialogAccessRestrictedAction, id `<scope>-$b1`, In_ExtendedClass `connect-legacy-compatibily-containter`; the block element is the OSBlock markup written out, because platform/ may not import components/)
- added `src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.test.tsx` (replaces the deleted legacy test: captured v1, nested class and ids, ConfirmAction on the instance id, default scope)
- moved `src/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy/Dialog_AccessRestrictedAction_Legacy.stories.tsx` -> `src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.stories.tsx`
- moved `.../Dialog_AccessRestrictedAction_Legacy/__captures__/v1.html` -> `src/platform/feedback/dialogs/__captures__/v1.html`
- moved `.../Dialog_AccessRestrictedAction_Legacy/README.md` -> `src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.README.md` (rewritten)
- deleted `src/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy/Dialog_AccessRestrictedAction_Legacy.tsx`, `Dialog_AccessRestrictedAction_Legacy.test.tsx`, `index.ts`
- users (import line and tag, same props): `src/pages/AssembleDetail/components/AssembleEventDetail_AttendeeSubdivision.tsx`, `src/pages/AssembleDetail/components/AssembleEventDetail_Contact.tsx`, `src/pages/AssembleEvents/components/Assemble_FilterSheet.tsx`, `src/pages/Assemble_BrowseByCountry/components/AssembleFilterView.tsx`, `src/pages/BookmarksByGroup/components/BookmarkGroupView.tsx`, `src/pages/ConnectShare/ConnectSharePage.tsx`, `src/pages/EventBooklet/EventBookletPage.tsx`, `src/pages/GuestArrangements/components/GuestArrangementsView.tsx`, `src/pages/HelpersDetail/components/HelperDetailsView.tsx`, `src/pages/LDM_EventDetail_V2/components/LdmEventDetailView.tsx`, `src/pages/LDM_MyEvents_V2/components/LdmMyEventsView.tsx`, `src/pages/MilestoneDetail/components/AccommodationHostView.tsx`, `src/pages/MyBookmarks/components/MyBookmarksView.tsx`

Tests: DialogAccessRestrictedActionLegacy.test.tsx 4 (the 3 old legacy cases + default scope); DialogAccessRestrictedAction.test.tsx unchanged (4).
Evidence: harness scenarios CommonUI and LegacyShareObject instances and the 13 legacy call sites (their id and scope): same DOM closed and open (showUpgradePopUp and confirmAction), same App_SubscriptionPopUp behaviour, same `window.open` call on Upgrade, same back-navigation result.

### Merge 4: DialogExitConfirmation on Dialog

- changed `src/platform/navigation/DialogExitConfirmation.tsx` (the markup is Dialog through `DialogView`, root class `dx-exit-confirmation-dialog`; `@origin UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation`, `// @os-block` of ExitConfirmationDialog kept)

Tests: DialogExitConfirmation.test.tsx unchanged, passes.
Evidence: harness scenarios Exit `$b11` (HomeFeed) and `$b10` (Login): same DOM closed and open, same back-navigation results, same `window.close` call on Yes.

### Outside the merges

- prefetch only: `.dependency-cruiser.cjs` (prettier re-wrap of one line). Not in the main-tree patch: HEAD is already formatted.
- written `migration/refactor/handoffs/P7-2/dev.md`
- Scratch, not in the repo (`/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/p72/`): harness (`harness.common.tsx`, `scenarios.tsx`, `adapter.old.tsx`, `adapter.new.tsx`; results `old.json`, `new3.json`), browser check `smoke.mjs`, bundle tools `make_base.py` (copy of the base tree), `chunkstats.mjs`, `compare.py`, results `stats-before.json`, `stats-final.json`, `cmp-final.txt`.

## Commands run

- old-vs-new harness (vitest, jsdom), run on the base before any change (`adapter.old.tsx`) and on the final tree (`adapter.new.tsx`), files copied to `src/__p72__/` for each run and deleted after -> 38 scenarios (one per call site), 366 recorded states (container DOM, body portals, `<html>` classes, active element, answers, callbacks, back-navigation and navigation results, `window.open` / `window.close`): 0 differences (also 0 after the first draft)
- `npm --prefix app run typecheck` -> exit 0
- `cd app && npx vitest run` -> 641 files, 3934 tests pass (base: 639 files, 3925 tests; +2 files, +9 tests, no case lost)
- first draft: 5 failures in flowState.test and PinUnlockContentContainer.test, because a static import of `app/dialogs` in `src/test/setup.ts` loaded modules before the vi.mock of those files. Fixed: dynamic import in `beforeAll`, and `app/dialogs.ts` imports module paths, not the barrels
- `cd app && npx eslint .` -> 0 errors, 78 warnings (all rule 4, all in the baseline)
- `python3 migration/tools/refactor/arch_baseline.py check` -> 0 new, 2 gone (ChoiceDialog.tsx, ChoiceDialog.test.tsx); rows deleted; then 77 warnings, 77 rows, 0 new, 0 gone. `arch_baseline_selfcheck.py` -> ok
- `npm --prefix app run arch` (dependency-cruiser) -> 274 warnings, 0 errors (base 280): 0 new, 6 gone (ChoiceDialog rule-4/rule-5 -> platform, NavigationDialog rule-5 -> shared NavigationConfirmationDialog, ActionConfirmationDialog rule-8 x2, DialogExitConfirmation rule-8 -> OSPopup); no cycle
- `npm --prefix app run format:check` -> all files pass
- `npm --prefix app run build && node app/build/bundle-report.mjs` -> exit 0; HomeFeed 751.43 kB raw, 244.63 kB gzip; Login 601.37 kB raw, 184.69 kB gzip (W21 section)
- `vite preview --port 5176` (started, then stopped) + Chrome headless (`p72/smoke.mjs`) -> Login, HomeFeed, Menu, ConnectShare render every dialog block (Exit, ResetPassword, AccessRestricted, GoExternalApp, both ChoiceDialogs, the legacy block); on Menu the logout ChoiceDialog opens (portal `portal-class connect-dialog-popup connect-dialog-popup--custom-choice`, `<html class="popup-disable-scroll">`) and closes on No. No page error. ConnectShare without a share key logs one HTTP 500 from the mock API; the base build logs the same.
- `python3 migration/tools/ste_lint.py` on the 4 READMEs -> 0 errors
- `python3 migration/tools/refactor/p7-2-dialog-users.py` -> 29 user files changed (13 legacy, 8 confirm, 4 navigation plain incl. the navigationGate test, 3 navigation connect, 2 choice; ProfilePage is in two groups)

### W21 first load (decision W21: a step adds 0.3 kB gzip or less to HomeFeed and to Login)

Measured with `bundle-report.mjs` (same totals as `p72/chunkstats.mjs`, which also lists the modules of each first-load chunk). Base = a copy of the tree before the step (`p72/make_base.py`), built the same way: 244.41 / 184.46 kB, the base numbers of the first report.

| Build | HomeFeed gzip | Login gzip |
| --- | --- | --- |
| base | 244.41 kB | 184.46 kB |
| first draft (first report) | 244.92 kB (+0.51) | 184.97 kB (+0.51) |
| final | 244.63 kB (+0.22) | 184.69 kB (+0.23) |

What entered the first-load chunks in the first draft (rendered module size, entry chunk): `platform/navigation/useNavigationConfirmation.ts` 1244 B and `shared/NavigationHandler/lib/actions.ts` 301 B (before: in the route chunks of the NavigationDialog users), the `legacy` branch of DialogAccessRestrictedAction +442 B (before: in the route chunks of the 13 legacy screens), the two ports with wrapper functions (dialogTriggers 474 B, dialogViews 510 B), Dialog 3127 B, ConfirmDialog 978 B, useActionConfirmation 1085 B, app/dialogs 149 B; out: ActionConfirmationDialog 4289 B.

Trim (no behavior change; harness 0 differences after it):
- NavigationDialog keeps its navigation listener itself (DOM events of the window, as `components/ui/PopupMenu` does). `app/dialogs.ts` connects only `usePreventBackNavigation`, already in the entry. `platform/navigation/useNavigationConfirmation.ts` (added by the draft) is gone; the hook code and the NavigationHandler lib are in the route chunks again.
- Dialog_AccessRestrictedAction_Legacy is a module of its own (`DialogAccessRestrictedActionLegacy.tsx`) next to the platform dialog, not a prop of it: only the legacy screens load it.
- The two ports are module bindings (`export let`, set by `connectDialogs`) instead of wrapper functions and components.

Final first-load chunks against the base: the same chunk set (HomeFeed 40, Login 12).

| Chunk | Base gzip / raw | Final gzip / raw |
| --- | --- | --- |
| entry `index-*.js` | 172680 / 573549 B | 173109 / 574278 B (+429 gzip) |
| `DialogExitConfirmation-*.js` | 980 / 2623 B | 772 / 1583 B (-208 gzip) |
| HomeFeed: 31 other chunks; Login: 11 other chunks | same raw size | +4 B / +8 B gzip in total (import names of the entry chunk) |

Modules of the entry chunk that changed (rendered size): in `components/ui/Dialog/Dialog.tsx` 3127, `ConfirmDialog.tsx` 978, `dialogTriggers.ts` 344, `platform/feedback/dialogs/useActionConfirmation.ts` 1085, `dialogViews.ts` 251, `app/dialogs.ts` 148, `main.tsx` +18; changed `DialogAccessRestrictedAction.tsx` 2464 -> 2457; out `platform/feedback/dialogs/ActionConfirmationDialog.tsx` 4289. In the route chunks: `DialogExitConfirmation.tsx` 3753 -> 1990, `Dialog_GoExternalApp.tsx` 4030 -> 4019 (HomeFeedPage), `LoginPage.tsx` 2232 -> 2221. Full lists: `p72/stats-before.json`, `p72/stats-final.json`, `p72/cmp-final.txt`.

### Main-tree pass (mode resume, main tree on ba5c2154 "refactor(P7-1)")

The master applied the prefetch patch in the main tree. Since the prefetch, the AssembleDetail G5 pass made
`components/assemble/VirtualMeetingUrl` and `AssembleSummaryCard` props-only and added
`containers/AssembleSummaryCard/AssembleSummaryCardContainer.tsx`, which rendered the meeting-info dialog with the
platform ActionConfirmationDialog through the `renderMeetingInfoDialog` slot.

Files changed in this pass (staged with `git add`):

- `app/src/components/assemble/VirtualMeetingUrl/VirtualMeetingUrl.tsx`: merge conflict resolved to the props-only version (the slot, no platform import); the ConfirmDialog edit of the prefetch is dropped. The file is now the same as in HEAD.
- `app/src/containers/AssembleSummaryCard/AssembleSummaryCardContainer.tsx`: `renderMeetingInfoDialog` renders ConfirmDialog (`@/components/ui/Dialog`, connected by `app/dialogs.ts`) with the same props (`widgetId`, `scope`, `body`, `dismissLabel`); `confirmAction` still from `@/platform/feedback/dialogs`.
- `app/src/containers/AssembleSummaryCard/README.md`, `app/src/components/assemble/VirtualMeetingUrl/README.md`: the dialog is ConfirmDialog.
- `migration/refactor/handoffs/P7-2/dev.md`: this section and the Result.

Commands and results:

- Old-vs-new harness for the container (`p72/container.scenarios.tsx`): old = HEAD (`git archive HEAD app` into the scratchpad), new = main tree. AssembleDetail card (`b2-$b7`), AssembleEvents list item (`b4-l1-0-$b6`) and two list items (second icon): closed, open by the info icon (ConfirmAction), Close, open again and back while open (prevented, closes), back when closed (not prevented). 3 scenarios, 15 recorded states, 0 differences.
- P7-2 harness in the main tree (`p72/scenarios.tsx`, `adapter.new.tsx`) against the prefetch base: 37 of 38 scenarios equal. The VirtualMeetingUrl scenario differs because HEAD made the component props-only (no dialog without the slot); its dialog is now tested through the container above.
- `npm --prefix app run build` (typecheck + vite build) -> exit 0
- `cd app && npx vitest run` -> 642 files, 3940 tests pass
- `cd app && npx eslint .` -> 0 errors, 72 warnings (all in the baseline); `npx eslint src/containers/AssembleSummaryCard src/components/assemble/VirtualMeetingUrl` -> no warning
- `npm --prefix app run format:check` -> all files pass
- `python3 migration/tools/refactor/arch_baseline.py check` -> 71 warnings, 71 rows, 0 new, 0 gone; `arch_baseline_selfcheck.py` -> ok
- dependency-cruiser, HEAD copy -> main tree: 275 -> 269 warnings, 0 errors, 0 new, 6 gone (the same 6 as in the prefetch)
- W21, first load gzip (`p72/chunkstats.mjs` on the HEAD copy; `bundle-report.mjs` on the main-tree build): HomeFeed 244.39 -> 244.67 kB (+0.28), Login 184.46 -> 184.71 kB (+0.25). The container is in the AssembleDetail and AssembleEvents chunks, not in a first-load chunk. Gzip of chunks with the same raw size moves by about 20 B between builds (the hash names of the entry chunk), so the HomeFeed margin to +0.3 kB is small.

## Deviations from the brief

- Branch: the worktree is on `rf/prefetch-P7-fff324fa`, as the master ordered (prefetch); not `refactor/architecture`.
- Size: the step changes 72 files (with 29 user files and 15 deleted or moved files), over the 40-file guide of a change step. The plan splits it into merges; each merge above is 31 files or fewer. The master cannot commit per merge from one tree: 6 files are shared (listed under merge 1).
- "The host that renders the dialogs moves to app/" (duplicates.md): no host moved. `app/dialogs.ts` connects at start (main.tsx; also the test setup and the Storybook preview): ConfirmDialog gets ConfirmAction and the back-navigation queue, NavigationDialog the back-navigation queue (`setDialogTriggers`), and the platform dialogs get the markup (`setDialogViews`). CommonUiHost stays in platform. Without this, ChoiceDialog, NavigationDialog and ContactEmailForm cannot reach platform, and the platform dialogs cannot reach components/ui.
- NavigationConfirmationDialog trigger: the move-map note asks for `platform/navigation/useNavigationConfirmation.ts`. The navigation listener (window events, Yes, No) is in NavigationDialog.tsx and only the back-navigation queue comes from platform. Reason: W21 (it put 1.5 kB of code into the entry chunk; see the W21 section).
- Dialog_AccessRestrictedAction_Legacy: not merged into DialogAccessRestrictedAction as a prop (first draft) but moved next to it as `DialogAccessRestrictedActionLegacy` in `src/platform/feedback/dialogs/`, so that the app start does not load it (W21). Its block element is the OSBlock markup written out (platform/ may not import components/; no new rule-8 warning). The move-map target of the row (`src/platform/feedback/DialogAccessRestrictedAction.tsx`) names the platform dialog; for the documenter: set the target to `src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx`, and set the status of the 4 dialog rows (Dialog_CustomChoice, Dialog_Navigation, NavigationConfirmationDialog, Dialog_AccessRestrictedAction_Legacy).
- Ports as module bindings (`export let`, set once by `connectDialogs`): fewer bytes than wrapper functions (W21). A dialog that renders before `connectDialogs()` throws "connectDialogs() not run".
- Dialog props: no wrapper class (the wrapper is outside the dialog block in every user, so the callers keep it); added `blockName`, `blockId`, `idPrefix` and `children`, because the three base dialogs differ in block name, ids and Root content.
- Prop names: ChoiceDialog and NavigationDialog take `header`, `body`, `confirmLabel`, `dismissLabel` (the same as ConfirmDialog) instead of the OutSystems placeholder names; the READMEs map them. 5 call sites changed for this (Menu x2, Profile x2, ContactUsDetails, ContactEmailForm).
- Test placement: the cases that need platform (confirmAction, the back queue) are in `useActionConfirmation.test.tsx` and `app/dialogs.test.tsx`, so no components/** test imports platform/ (the ChoiceDialog test row of the baseline is gone).
- `@os-block` lines kept for the merged blocks (Dialog_Navigation, ExitConfirmationDialog) next to the one `@origin` tag, because the catalog and docs tools find built blocks by these tags. Compiled-line references are removed from the rewritten files.
- Not changed: the presets (Dialog_GoExternalApp, InformationDialog, UpgradeSubscriptionDialog, bookmark note dialogs) only switch to ConfirmDialog; in the main tree VirtualMeetingUrl is props-only (HEAD) and AssembleSummaryCardContainer gives it `confirmAction` and ConfirmDialog.

## Questions for the user
none
