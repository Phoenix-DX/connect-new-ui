# Flow report: zDEV_Directory_CommunityBusinessBlocks

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 2 (built: 1, CommunityBusinessDetails_CoomingSoon; not built: CommunityBusinessDetails, board `skip:dead`) |
| Own blocks | CommunityBusinessCard_Content_Block, ComunityBusinessDetails_Block (no built screen uses them; no React file) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB pages (`pack/kb.md`), TST compiled code (`tst_source.py`) |
| TST file names | `CoomingSoon.mvc.js` = `UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc.js`; the other TST files keep their last two parts |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 18 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 26 · unclear 0 (same as `checklist.json`).
- No finding. The built screen is a static placeholder. React renders the same layout, input, icon and text as TST.
- The reader found no React link to the screen. The links exist: `MyBookmarksPage.tsx:41` and
  `BookmarksByGroupPage.tsx:54` open it for a community business that is not OneSchool Global, as TST does.
- The 13 block rows and the 10 service-action rows are `n/a`. TST never renders the two own blocks, and the
  service actions are reached only through the skip screen or the dead block.
- Status: a user opens a bookmarked community business and sees "Comming soon" in React, as on TST. No user can
  reach CommunityBusinessDetails on TST, so React does not build it.

## 2. Screens

### 2.1 CommunityBusinessDetails_CoomingSoon

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 002 | roles / access | Registered, UBTOne_User; QueryString | `MEMBER_ROUTE` (access `member`): a signed-out user goes to Login | `match` | `app/src/app/routes.ts:40`; `RouteGuard.tsx:40`; TST `CoomingSoon.mvc.js:265-267` calls `checkRegistered()` only. §6.1 |
| 003 | route path | `/UBTConnect/CommunityBusinessDetails_CoomingSoon` | same path, input `In_CommunityBusinessId` | `match` | `app/src/app/routes.generated.ts:37` |
| 007 | lifecycle | none | no hook, no effect | `match` | `CommunityBusinessDetails_CoomingSoonPage.tsx:12-34`; TST handlers are all null |

**Data**

| Id | Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 004 | input `In_CommunityBusinessId` | Long Integer, mandatory, QueryString | read from the query string, default `'0'`, never used | `match` | `inputs.ts:11-17`; `Page.tsx:15-17`. TST attr `mandatory=true` (`CoomingSoon.mvc.js:12`; `OutSystems.js:7` attribute constructor `this.mandatory=r`). TST `setInputs` sets the value only when the URL has it (`CoomingSoon.mvc.js:59-61`); else the Long Integer default 0 stays |
| 005 | local variables | none | none | `match` | `Page.tsx:12-34`; TST VariablesRecord holds the input only |
| 006 | server and data actions | none | none | `match` | `Page.tsx:8-11`; TST controller has no data, client or server action |

**UI tree**

| Id | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 008 | `Layout_MainPages` | no arguments | `MainLayout` with its defaults | `match` | `Page.tsx:20-32`; `migration/app-shell.spec.md:96` |
| 009 | `Placeholder_Header_Title` | empty | no title prop; `.header-title` text is empty | `match` | `MainLayout.tsx:130`; TST placeholder Empty |
| 010 | `StaticInput` in `Placeholder_Header_Input` | no arguments | `<StaticInput id="$b2" />` with the default prompt | `match` | `Page.tsx:23`; `StaticInput.tsx:19-24`. TST `UBTConnectLibrary.ConnectPatterns.StaticInput.mvc.js:12-13` has the same default prompt |
| 011 | `StaticInput` `Click_Input` | no handler | no `onClickInput`; a click does nothing | `match` | `Page.tsx:22-23`; TST binds `_handleError` only |
| 012 | `BlankSlate` | no arguments, FullHeight True | `BlankSlate`, class `blank-slate large` | `match` | `Page.tsx:25-30`; `BlankSlate.tsx:23-26` |
| 013 | icon | `ellipsis-h`, size Twotimes, style `icon` | `icon fa fa-ellipsis-h fa-2x` | `match` | `Page.tsx:28` |
| 014 | content text | "Comming soon" | "Comming soon" | `match` | `Page.tsx:29`. The typo is on TST too |
| 015 | `Actions` placeholder | empty | no actions | `match` | `CoomingSoon.test.tsx:60` |
| 016 | `Bottom`, `Placeholder_CommonUI_Inside_Layout` | empty: no bottom bar, no CommonUI | `useNoCommonUi()`; empty footer | `match` | `Page.tsx:14`; TST placeholders Empty. BR-UBTCON-310 applies only to screens that embed CommonUI |

**Screen actions**: none on DEV and TST. Row 007 covers the lifecycle.

**Validations**: none. The screen has no input widget.

**Business logic**

| Id | Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 017 | links into the screen | MyBookmarks and BookmarksByGroup: OneSchool Global opens OneSchoolGlobalDetails, else this screen with `In_CommunityBusinessId` | same | `match` | `MyBookmarksPage.tsx:37-43`; `BookmarksByGroupPage.tsx:49-58`; TST `MyBookmarks.mvc.js:476-487`, `BookmarksByGroup.mvc.js:349-360`; BR-UBTCON-619; Bookmarks report rows 015, 017, 063 |
| 044 | links from New_MyBookmarks, New_BookmarksByGroup | always this screen | screens not built | `n/a` | board `skip:variant` (`migration/board.md:76-77`); TST `New_MyBookmarks.mvc.js:397-398`, `New_BookmarksByGroup.mvc.js:356-357` |
| 018 | role `UBTOne_User`, lock meta | roles Registered, UBTOne_User | access `member`, lock `enforce` | `match` | TST checks `checkRegistered()` only (`CoomingSoon.mvc.js:265-267`). The lock meta is the app-start PIN check of the shell (`RouteGuard.tsx:41`; `app-shell.spec.md:364` U3): checked in the App_PIN report |

**Strings**: the screen has one string, "Comming soon" (row 043, `match`). The other 20 strings of `strings.md` belong to
shared blocks.

### 2.2 CommunityBusinessDetails (not built)

Board: `skip`, "V7 · skip:dead · zDEV flow; live links open CoomingSoon; revisit if TST links the real screen" (user,
2026-10-14; `migration/board.md:54`).

The DEV screen uses `Layout_DetailPage` with `BottomBarMenu` and
`CommonUI_InsideLayout`. Its title is the local variable `CommunityBusinessName`. The screen action
`Handler_CommunityBusinessFetched(BusinessName)` sets it, and no widget calls the action.

The decision holds on TST:
no TST screen links `/UBTConnect/CommunityBusinessDetails`. Only the URL map of `UBTConnect.pwaServiceWorker.js:1331`
names it. KB `directory-locality.md:119` also says "has no caller".

A build needs the detail layout, the bottom bar and
a caller that fills the title. Row 001 is `n/a`.

## 3. Blocks of the flow

No built screen uses the two own blocks. Each row is `n/a`.

### 3.1 CommunityBusinessCard_Content_Block (dead on TST)

The only host is `Locality_LocalityContacts` (TST `Locality_LocalityContacts.mvc.js:257`). TST never renders that
block: the Locality Contacts tab of `Locality_Details` shows `ComingSoon` only (`Locality_Details.mvc.js:986-990`;
BR-UBTCON-796, BR-UBTCON-807). The Directory_Locality report marks the host `n/a` (§3.7, rows 214 and 275).

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 019 | block, input `CommunityBusinessCardContent`, 3 events | used by `Locality_LocalityContacts` | not built | `n/a` | dead on TST; Directory_Locality report §3.7 |
| 020 | `LocalityContact_ListItem` arguments | bookmarked class, contact name and role | not built | `n/a` | same |
| 021 | `IconText` text | country, local time, time zone | not built | `n/a` | same |
| 022 | `Directory_EntityDetailsActions` #CallAndEmailMenuItem | null id and type | not built | `n/a` | same |
| 023 | `LocalityContact_ListItemEvent_OnClickCard` | empty action | not built | `n/a` | dead in the model; dead on TST |
| 024 | `Event_OnClick_Bookmark`, `_Call`, `_Email` | raised to the host | not built | `n/a` | dead on TST |
| 025 | structure `CommunityBusiness_Card_Content` | 8 attributes | none | `n/a` | dead on TST |

### 3.2 ComunityBusinessDetails_Block (dead in the model)

No screen or block of DEV uses it. On TST, no file renders it: only the file list of `UBTConnect.pwaServiceWorker.js:1146`
names its script. KB `directory-locality.md:120-121` says "has no caller". Type note: the service action types
`CommunityBusinessId` as Text, and the block input is Long Integer (`pack/data.md`). This has no effect because nothing
calls the block.

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 026 | block, inputs `CommunityBusinessId`, `LocalityId` | no host | not built | `n/a` | dead in the model |
| 027 | data action `GetCommunityBusinessDetails` | OnDemand, no caller | none | `n/a` | dead in the model |
| 028 | `Get_LocalityCommunityBusinessDetails` | Connect_Geography_CS | no repository, no mock | `n/a` | dead in the model; type note above |
| 029 | local variables | `IsCommunityBusinessLoading`, card content | none | `n/a` | dead in the model |
| 030 | `SkeletonSection`, `SubLayout_DirectoryDetailScreen` | loading section | none | `n/a` | dead in the model |
| 031 | `GetCommunityBusinessDetailsOnAfterFetch` | empty action | none | `n/a` | dead in the model |

## 4. Shared blocks and actions

The built screen uses `Layout_MainPages`, `StaticInput` and `BlankSlate` (rows 008 to 016). TST renders no other
shared block on it. The shared items of `pack/data.md` and `pack/actions.md` come from the skip screen
(`BottomBarMenu`, `CommonUI_InsideLayout`) and from the Card block (`Directory_EntityDetailsActions`).

| Id | Item | React | Verdict | Note |
|---|---|---|---|---|
| 032 | `AddBookmark2` | `api/bookmark/repository.ts:108` | `n/a` | not reached from the built screen; checked in the Bookmarks and Directory_CommonBlocks reports |
| 033 | `DeleteBookmarkByBookmarkId2` | `api/bookmark/repository.ts:119` | `n/a` | same |
| 034 | `GetHouseholdDetails` | `api/household/repository.ts:135` | `n/a` | same; Directory_CommonBlocks |
| 035 | `GetNotesByItemId` | none | `n/a` | same; Directory_CommonBlocks |
| 036 | `GetSubdivisionLocation_BySubdivisionId` | none | `n/a` | same; Directory_CommonBlocks |
| 037 | `Get_Core_LocalityTimezone` | none | `n/a` | same; Directory_CommonBlocks |
| 038 | `Get_OneSchoolGlobalDetails` | fixture only | `n/a` | same; Directory_CommonBlocks |
| 039 | `Get_UI_UpdateItems_UnreadCount_All` | `api/update/repository.ts:70` | `n/a` | same; App_Common (`BottomBarMenu`) |
| 040 | `Member_ContactDetails_Service` | none | `n/a` | same; Directory_CommonBlocks |
| 041 | 9 client variables | the built screen reads and writes none | `n/a` | owned by App_Common and App_PIN, see their reports |
| 042 | 19 module client actions | hits per `pack/app.md` | `n/a` | owned by _shared and App_Common, see their reports |

## 5. Findings

No finding.

## 6. DEV vs TST differences

### 6.1 Elements

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| CoomingSoon roles | Registered, UBTOne_User | `checkPermissions` calls `checkRegistered()` only | TST (access `member`) | `CoomingSoon.mvc.js:265-267`; row 002, 018 |
| Host of CommunityBusinessCard_Content_Block | Locality Contacts tab behind a LaunchDarkly check | the tab shows `ComingSoon` only | TST (block not built) | `Locality_Details.mvc.js:986-990`; Directory_Locality report §6.1 |

### 6.2 KB pages vs TST

| Id | KB text | DEV and TST | File |
|---|---|---|---|
| K1 | "`CommunityBusinessDetails(CommunityBusinessId, BusinessName)`": two screen inputs | DEV has one input, `CommunityBusinessId`; `BusinessName` is the input of `Handler_CommunityBusinessFetched`. TST `setInputs` reads `CommunityBusinessId` only (`CommunityBusinessDetails.mvc.js:62`) | `ui/directory-locality.md:119` |

## 7. Questions for the user

No question.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 5 | 2 | 0 | 0 | 0 | 0 | 3 | 0 |
| data | 17 | 3 | 0 | 0 | 0 | 0 | 14 | 0 |
| ui | 13 | 9 | 0 | 0 | 0 | 0 | 4 | 0 |
| actions | 4 | 1 | 0 | 0 | 0 | 0 | 3 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 4 | 2 | 0 | 0 | 0 | 0 | 2 | 0 |
| strings | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 44 | 18 | 0 | 0 | 0 | 0 | 26 | 0 |
