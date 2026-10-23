# Developer report: P5-3-message

I made the change in a prefetch worktree (base `6196a07`, before P5-3-bookmark and P5-3-note). The master applied the
diff to the main tree with `git apply --3way`. In mode `resume`, I fixed the merge result on the main tree (HEAD
`cbb79b2`) and ran the checks there. All 34 code files are staged. Nothing is committed.

## Result
status: pass
summary: Added `app/src/api/message` (types, mapper, repository, keys, hooks, barrel and 3 test files) for the 19 message calls of the inventory (`calls-by-domain.md`, section "message"). The 11 screen adapters, `Directory_EntityDetailsActions/api.ts`, `Connect2_LegacyShared/lib` and `platform/bootstrap/startup.ts` use the domain or re-export it under their old names. On the main tree I removed the unused `callAction` import that the 3-way merge with P5-3-note left. Typecheck, the tests of the changed folders, eslint, prettier and lint:arch pass.

## Files changed
app/src/api/message/types.ts (added)
app/src/api/message/mapper.ts (added)
app/src/api/message/repository.ts (added)
app/src/api/message/keys.ts (added)
app/src/api/message/hooks.ts (added)
app/src/api/message/index.ts (added)
app/src/api/message/mapper.test.ts (added)
app/src/api/message/repository.test.ts (added)
app/src/api/message/hooks.test.tsx (added)
app/src/screens/ContactByEmailLDMCoordinator/api.ts
app/src/screens/ContactByEmailLDMCoordinator/types.ts
app/src/screens/ContactByEmailMember/api.ts
app/src/screens/ContactByEmailMember/types.ts
app/src/screens/ContactByEmailOneSchoolGlobal/api.ts
app/src/screens/ContactByEmailOneSchoolGlobal/types.ts
app/src/screens/ContactByEmailOrbitHelpdesk/api.ts
app/src/screens/ContactByEmailOrbitHelpdesk/types.ts
app/src/screens/ContactByEmailOrbitHost/api.ts
app/src/screens/ContactUsDetails/api.ts
app/src/screens/ContactUsDetails/types.ts
app/src/screens/EmailContact/api.ts
app/src/screens/EmailContact/types.ts
app/src/screens/EmailTarget/api.ts
app/src/screens/EmailTarget/types.ts
app/src/screens/LDM_Email_V2/api.ts
app/src/screens/LDM_Email_V2/types.ts
app/src/screens/MessageDetail/api.ts
app/src/screens/MessageDetail/types.ts
app/src/screens/MessageList/api.ts
app/src/screens/MessageList/types.ts
app/src/shared/UBTConnect/Directory_EntityDetailsActions/api.ts (resume: line 1 fixed after the merge)
app/src/shared/Connect2_LegacyShared/lib/actions.ts
app/src/shared/Connect2_LegacyShared/lib/structures.ts
app/src/platform/bootstrap/startup.ts

34 code files: 9 added, 25 changed. No file moved or deleted. All 34 are staged (`git diff --cached --stat`: 34 files,
2643 insertions, 630 deletions).

## Commands run
Main tree (`/Users/khaitruong/Projects/connect-new/app`, HEAD `cbb79b2`), Node 24.21.0, after the fix:

- `npm run typecheck` → exit 0.
- `npx vitest run src/api/message <the 11 screen folders> src/shared/UBTConnect/Directory_EntityDetailsActions src/shared/Connect2_LegacyShared src/platform/bootstrap src/api/note src/api/bookmark --maxWorkers=2` → exit 0: 46 files, 289 tests pass.
- `npx vitest run` on the other callers of these calls (`mocks/contract`, `app/routes`, `platform/auth/provider`, `platform/session/auth`, `legacy/os/StylesheetHost`, `FixedFooter`, `Columns_Three`, `ContactByEmailForm`, `SubLayout_DirectoryDetailScreen_Section`, `App_NotificationIcon`, `HouseholdDetailsView`, `api/client`, `containers/HouseholdDetails`, `screens/MilestoneDetail`, `screens/AssembleDetail`) and on the caller folders of P5-3-bookmark and P5-3-note (`screens/Notes`, `screens/BookmarksByGroup`, `screens/MyBookmarks`, `UBTConnect_Utils/NoteListActions`, `UBTConnect_Utils/NotesSheet`, `shared/Connect2_Assemble_MUI`, `shared/UBTConnect/lib`) with `--maxWorkers=2` → exit 0: 30 files, 183 tests pass.
- `npx eslint <the 34 staged files>` → exit 0, no problems. Before the fix, the master's run reported `'callAction' is defined but never used` in `Directory_EntityDetailsActions/api.ts`.
- `npx prettier --check <the 34 staged files>` → exit 0.
- `npm run lint:arch` → exit 0. dependency-cruiser: 0 errors, 186 warnings. eslint: 0 errors, 1 warning (`components/ui/os/OSPopup/usePopupWidget.ts`, rule 4, from before this step). No warning comes from `src/api/message`. The changed files with a warning (`MessageDetail/types.ts`, `Connect2_LegacyShared/lib/actions.ts`) have the same `legacy/os` imports at HEAD. Four rule-9 warnings of HEAD are gone: `MessageList/api.ts`, `MessageList/types.ts`, `MessageDetail/api.ts` and `ContactUsDetails/api.ts` no longer import `legacy/os`.
- Fit with P5-3-bookmark and P5-3-note: `git diff 6196a07 HEAD -- app/src` and the staged files have only one file in common, `Directory_EntityDetailsActions/api.ts`. No direct call of a message action stays outside `src/api/message` (grep for the 19 action names, without tests and mocks). The barrel, the keys and the hooks follow the same pattern as `api/note` and `api/bookmark`.
- I did not run the full suite or the parity check: the brief gives both to the tester.

## Deviations from the brief
- Scope follows the inventory (`app/docs/refactor/calls-by-domain.md`, section "message"). Three groups go to `api/message` because the inventory lists them there:
  - the two ContactUsDetails data actions (GetCountriesNames and GetLocalityTimezone);
  - GetMemberContactByCacheKey;
  - DataActionFetchContactDetails.

  Two calls in the same files stay in the screens because the inventory lists them under "notification": Wrapper_NotificationOpened (MessageDetail) and Wrapper_MarkAllAsReadNotifications (MessageList). DataActionFetchNotes in `Directory_EntityDetailsActions/api.ts` is in `api/note` (P5-3-note).
- Merge with P5-3-note in `Directory_EntityDetailsActions/api.ts`: the 3-way apply kept `callAction` in the import of line 1, but neither re-export uses it. Line 1 is now `import type { ActionInputs, PathOf } from '@/api/client/callAction';`. The file keeps the `EntityDetailsActionsVariables` type and has two re-exports: `fetchEntityContactDetails as fetchContactDetails` from `@/api/message` and `fetchEntityNotes as fetchNotes` from `@/api/note`.
- The domain has one type for the e-mail form, `ContactByEmailForm`, and one mapper, `toOrbitContactEmailInputs`. Three screens used their own copies before:
  - ContactByEmailOneSchoolGlobal sent the In_UI_ContactByEmailForm attributes in a different order.
  - ContactByEmailOrbitHelpdesk and EmailContact sent the EmailInfo attributes in a different order.

  The attribute names and values do not change. Only the key order in the JSON body changes. The call check compares only the top-level input names, which are the same.
- `sendContactEmail` (UBTConnect) now returns IsSuccess, as `sendContactFormEmail` does. ContactByEmailOrbitHelpdesk awaits the call and ignores the value, so the behavior does not change. ContactByEmailOrbitHost keeps its own wrapper with the same signature. The wrapper builds the e-mail and calls the domain function.
- `fetchEntityContactDetails` drops LocalityId: no code in `src` reads it. The domain keeps the other ten outputs.
- A few types existed only for the old call code. They now live in the domain, and I removed them from the screen `types.ts` files instead of re-exporting them, because no file uses them:
  - `UI_ContactByEmailFormWire`;
  - the `SendContactEmail*Wire` types (EmailContact);
  - `GetCoordinatorDetailsWire` and `CoordinatorDetails` (LDM_Email_V2);
  - `GetLocalityTimezoneInputWire` and `SendContactUsMessageInputWire` (ContactUsDetails);
  - `UserContactRequest` (EmailTarget);
  - `OrbitContactEmail` (ContactByEmailOrbitHelpdesk, EmailContact);
  - `GetMessageInstanceResult`;
  - `MessageItem`.

  `MessageList/types.ts` keeps `MessageWire`, because its `mocks.ts` uses it.
- Hooks: the domain has 8 query hooks for the data actions and 9 mutation hooks for the sends and the message marks. No screen calls them yet: the flows still call the repository functions. They use `staleTime: 0`, `gcTime: 0` and no retry by default. GetNumberUnreadMessages and GetMemberContactByCacheKey are server-action reads and have no hook, as in `api/event`.
- I did not update the documents; that is the documenter's work. Two lines of `app/src/api/README.md` are now out of date: line 39 ("GetNumberUnreadMessages (P5-3) are not in `app/`") and line 64 ("DataActionFetchContactDetails stays in `Directory_EntityDetailsActions/api.ts` for the message domain"). Line 23 of `Directory_EntityDetailsActions/README.md` still points DataActionFetchContactDetails to `api.ts`, which now re-exports it from `api/message`.
- Process: in the prefetch worktree I rewrote `MessageDetail/api.ts` and `MessageDetail/types.ts` once with a shell heredoc (`cat > file`), not with the Write tool. The content is the same as with Write. I then edited the files with the Edit tool and prettier.

## Questions for the user
none
