# Flow report: Directory_CommonBlocks

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Blocks on DEV | 4 (built: 2): Directory_EmptyState, Directory_EntityDetailsActions. Not built: Directory_CommunityNumbers and Directory_CommunityNumbers__Number (DEV only, no TST file). No screens. |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/components/directory/DirectoryEmptyState/*`, `app/src/containers/EntityDetailsActions/*`, KB pages of `pack/kb.md`, TST compiled code (`eda.js` = Directory_EntityDetailsActions.mvc.js, `es.js` = Directory_EmptyState.mvc.js) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 106 · partial 3 · missing 0 · differs 0 · mock-only 13 · n/a 29 · unclear 0 (same as `checklist.json`).
- F1 (minor): CheckRestored is not ported. On Back, React fetches the contact details again and shows the skeleton.
- F2 (minor): React fetches again only when EntityId changes. TST fetches on every input change.
- F3 (minor): on NotRegistered, React disables all actions before it raises. TST only raises.
- The server side of FetchContactDetails and FetchNotes is a mock (13 rows `mock-only`).
- Status: a user can bookmark, unbookmark, call, e-mail, share and add notes as on TST. The community numbers card is DEV only.

## 2. Blocks

### 2.1 Directory_EmptyState

All 7 rows (017-023) and the strings (row 148) match: `components/directory/DirectoryEmptyState/DirectoryEmptyState.tsx:19-33`, TST `es.js:184`, `:221`.

### 2.2 Directory_EntityDetailsActions

**Identity and data**

| Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block (row 024) | 6 inputs, 3 events, OnReady + OnParametersChanged | container + hook | match | `EntityDetailsActionsContainer.tsx:23`, `useEntityDetailsActions.ts:33` |
| inputs and events (rows 025-032, 034) | IsEnabled, EntityType, EntityId, overrides, EnableOptions, useViewDetails; EntityExtraDataJSON on TST only | same props | match | TST `eda.js:161`, `:2706` |
| Event_MenuEdit (row 033) | declared, never triggered | none | n/a | dead in the model (`eda.js:2357`) |
| local variables (rows 035-049) | 14 variables, plus the C2 variables on TST | React state | match | `useEntityDetailsActions.ts:46-82`; TST passes FetchNotes.Notes to NotesSheet (`eda.js:938`) |
| FetchContactDetails, FetchNotes (rows 050, 056-057) | OnDemand data actions | contract calls | match | `useEntityDetailsActions.ts:157-220` |
| per-type switch and server actions (rows 051-055, 062-069) | Member, OneSchoolGlobal, Subdivision, Household | server side in the mock | mock-only | `containers/EntityDetailsActions/mocks.ts:45-49`, `:144-185` |
| client variables (rows 074-075) | Bookmarks_IsSynched, Notes_IsSynched in the skeleton | useClientVar | match | `useEntityDetailsActions.ts:244-246` |

**Lifecycle and logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| CheckRestored (row 076) | ends OnReady when the view comes from cache or history | always runs | partial | F1; TST `eda.js:1679`, `:2430-2432` |
| OnReady switch and options (rows 077-087) | menu options per entity type; InvalidAction messages | same | match | `entityDetailsActionsState.ts:34-83` |
| bookmark step (rows 088-090) | C2 path behind GetHasNewBookmarks | same | match | flag true on TST; legacy path n/a (row 150) |
| OnParametersChanged (row 091) | Action_UpdateContactDetails on every change | effect on entityId, isFetchContacts | partial | F2; TST `eda.js:1157-1166` |
| update, overrides, refresh (rows 092-099, 104-105) | guard, async refresh, OneSchoolGlobal image, name override | same | match | `useEntityDetailsActions.ts:73-220` |
| refresh errors (rows 100-101) | HandleFetchError, then RaiseError or RaiseCommunicationError | HandleFetchError, then raiseToFlowHandler | match | `legacy/os/exceptions.ts:69-81` |
| NotRegistered (row 102) | raise the typed exception only | HandleFetchError first | partial | F3; TST `eda.js:1204-1222` |
| disabled raise nodes (row 103) | [DISABLED] | none | n/a | dead in the model |
| shared client actions (rows 070-073) | GetBookmarkCategoryId_ByEntityTypeId and 3 more | `lib/ubtConnect/actions.ts` | n/a | owned by the _shared unit |

**Block actions**

| Action | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Handle_Bookmark (rows 106-114) | C2 toggle, flip, OnChange_Bookmark, 3 handlers | same | match | `useEntityDetailsActions.ts:278-297`; TST If is `&& true` (`eda.js:1410`, bug B4) |
| call, mail, mail page (rows 115-120) | popups and navigation | same, without Yield() | match | TST `eda.js:529-555`, `:2018-2019` |
| share (rows 121, 124) | ShowSharePopup | same | match | `EntityDetailsActionsContainer.tsx:82-84`, `:164-166` |
| SharePopup paths (rows 122-123, 138) | Connect or Others share | SharePopup only without extended share | n/a | flag off on TST: getHasExtendedShare is true |
| notes (rows 125-128, 143-144) | open, close, change, delete | same | match | TST deletes from FetchNotes.Notes (`eda.js:1566-1583`) |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| skeleton and ActionsMenu (rows 129-136) | args, options, event wiring | same | match | `EntityDetailsActionsContainer.tsx:64-94`; TST `eda.js:346`, `:375-378` |
| contact popups (row 137) | ContactPopup_ByPhone args | same | match | TST `eda.js:635-668` |
| ShareSheet popup (rows 139-141) | extended share and HasShare | same | match | TST `eda.js:832`, `:891` |
| If False around NotesSheet (row 142) | constant condition | NotesSheet always | n/a | dead in the model (true branch) |
| NotesSheet wrapper (row 145) | DEV popup wrapper | no wrapper | match | DEV only (§6.1) |

**Strings**: rows 146-147 match. Row 149 ("No change today") is DEV only.

### 2.3 Directory_CommunityNumbers and Directory_CommunityNumbers__Number (not built)

No board line names these blocks; the CountryList and HomeFeed reports treat them as DEV only (no TST file). On DEV the card shows "COMMUNITY BY THE NUMBERS" with the member count and the daily change. Three sub-numbers follow: households, localities and countries. A build needs the two blocks, the statistics input and the SVG icons. Rows 001-016 and 149 are `n/a`.

## 3. Blocks of the flow

All own blocks are in §2. ActionsMenu, ContactByMessage_Wrapper, ContactPopup_ByPhone, SharePopup, ShareSheet, NotesSheet and SkeletonSection are referenced blocks. §2 checks their arguments. Their logic is not checked here (shared).

## 4. Shared blocks and actions

| Element | React location | Verdict |
|---|---|---|
| GetBookmarkCategoryId_ByEntityTypeId, GetNameAndSurname_ByFullName | `lib/ubtConnect/actions.ts:198`, `:212` | checked in the report of the _shared unit |
| GetShareType_FromEntity, ToggleBookmarkItem_C2 | `lib/ubtConnect/actions.ts:177`, `:249` | checked in the report of the _shared unit |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | minor | Directory_EntityDetailsActions, OnReady CheckRestored (row 076) | TST skips the set-up when the view comes from cache or history. React always runs it, so Back shows the skeleton and fetches again. | `app/src/containers/EntityDetailsActions/entityDetailsActionsState.ts:72-73` | Port CheckRestored with the view cache helper of `app-shell.spec.md` U19 (P-BACK). | fixed 2026-10-27 (`fixes/E-directory.md`) |
| F2 | minor | Directory_EntityDetailsActions, OnParametersChanged (row 091) | TST fetches the contact details on every input change. React fetches only when EntityId or isFetchContacts changes. | `app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts:184-220` | Add the other inputs to the effect, or record a decision. | fixed 2026-10-27 (`fixes/E-directory.md`) |
| F3 | minor | Directory_EntityDetailsActions, Action_AsyncRefresh_ContactDetails (row 102) | On NotRegistered and on a system exception, React disables all actions before it raises. TST raises without HandleFetchError. | `app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts:200-215` | Split the handler by exception kind, as TST. | fixed 2026-10-27 (`fixes/E-directory.md`) |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| Directory_CommunityNumbers, __Number (rows 001-016) | 2 blocks | no file | TST (no card) | `tst_source.py`: no file matches |
| input EntityExtraDataJSON (row 034) | absent | input, sent to the data action | TST | `eda.js:161`, `:262-263`, `:2706` |
| legacy bookmark path (rows 049, 150-151) | C2 only | If GetHasNewBookmarks with a legacy branch; C2 variables | TST (both branches) | `eda.js:375`, `:378`, `:1410`, `:1870`, `:1898`, `:1908` |
| notes list (rows 048, 128) | EntityNotes and a for-each copy on delete | FetchNotes.Notes, ListIndexOf and ListRemove | TST (one notes state) | `eda.js:938`, `:1566-1583` |
| NotesSheet wrapper (row 145) | popup-dialog connect-share-portal | no wrapper | TST | `eda.js:832` (ShareSheet popup only) |

### 6.2 KB pages vs TST

None.

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 37 | 29 | 0 | 0 | 0 | 8 | 0 | 0 |
| ui | 23 | 9 | 0 | 0 | 0 | 0 | 14 | 0 |
| actions | 31 | 27 | 0 | 0 | 0 | 0 | 4 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 53 | 35 | 3 | 0 | 0 | 5 | 10 | 0 |
| strings | 5 | 4 | 0 | 0 | 0 | 0 | 1 | 0 |
| **total** | **151** | **106** | **3** | **0** | **0** | **13** | **29** | **0** |
