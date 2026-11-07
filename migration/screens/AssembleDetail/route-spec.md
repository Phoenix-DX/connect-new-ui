# Route spec: AssembleDetail

Sources are readable prettier copies in `migration/sources/runtime/`. Each citation has the form `<file>:<line>`.

The screen source is `UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc.js` ("SCR", TST copy of F9, `migration/sources/runtime/`).
The other sources come from `migration/survey/survey-UBTConnect.json`: `Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail` ("SB"),
`…AssembleEventDetail` ("ED"), `…_Section`, `…__Error`, `…_AttendeeSubdivisionList_Skelet`, `…_LocalitiesList` ("LL"),
`…_LocalitySubdivisionList` ("LS"), `…_AttendeeSubdivision` ("AS"), `…_ContactList` ("CL"), `…_Contact` ("CT"),
`NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack` ("FSA"), `Connect2_LegacyShared.Utility.ShowMoreShowLessContainer`,
`.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton`, `.NewConnect_Utilities.NC_Result_Item__Tag`, `.Share.ContextMenu`,
`.MyBookmarks.BookmarkNoteAddEdit`. Assemble controller: `migration/sources/pretty/
Connect2_Assemble_MUI.controller.js` ("C").

The user decided no-capture on 2026-10-16 (`no-capture.json`: not reachable read-only with the test account). The
route was built from the compiled code.

Capture of 2026-11-06, the first one, with an account that has Assemble meetings:
- states default, loading, offline (`analysis/`; the compiled files are in `analysis/manifest.json`);
- a virtual meeting without link ("Link is not available, refer to local signal chat");
- one invited locality (collapsed), no interchange locality, no GMS local contact, no note.

The mocks answer the ids of the capture plan with the online prayer meeting of the fictional world
(`assembleWorldId`, `app/src/mocks/fictional/assemble.ts`). Fixed against the capture on 2026-11-06:
- the empty Menu placeholder, the `MeetingNotes` wrappers;
- the screen instance ids ($b3 NoteListActions, $b4 ItemCard_ActionBar, $b5 BottomBarMenu, $b6 ShareSheet, $b7 NotesSheet);
- the inline `cursor: pointer` of the locality header;
- the 40px locality badge (`ResultItemBadge`, shared) and the 44px minimum height of Note_Item_List (`NoteList`, shared).

Inline styles come from the compiled views cited here (LegacySharedBlocks: ShowMoreShowLessContainer `text-align: right;`, NC_Result_Item__Image__Skeleton
`min-width` / `height` / `width` / `border-radius`).

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/AssembleDetail?EventId=<Text>&SeriesId=<Text>&Start=<DateTime>&AssembleEventTypeTile=<Text>` [SCR :219-248] |
| Tier | lite |
| Captured | 2026-11-06 (default, loading, offline; phone 390x844); before, built from the compiled code only |
| Shared/shell components used | CommonUI_InsideLayout, BottomBarMenu, ShareSheet, ShareableObject_Generic, Layout, MenuIcon__UpdatedOSUI, NewConnectContent, AssembleSummaryCard, AssembleSummaryDetailHeader_Skeleton, NC_Card_Item_Text__Skeleton, NC_Result_Item__Image, NC_Result_Item_Badge, ItemOptionsMenu, InputCounter, Person_Contact_Options, ContactPopup_ByPhone, ContactByMessage_Wrapper, Dialog_AccessRestrictedAction_Legacy, ScrollAnchor, BackNavigationHandler, shell ActionConfirmationDialog / confirmAction / showUpgradePopUp, OSList |
| Screen-specific components | `components/`: ScreenBlock_AssembleDetail + FocusScrollAnchorOnBack, AssembleEventDetail (+ Section, __Error, AttendeeSubdivisionList_Skelet), AssembleEventDetail_Localities (LocalitiesList, LocalitySubdivisionList, AttendeeSubdivision), AssembleEventDetail_Contacts (ContactList, Contact), LegacySharedBlocks (the five Connect2_LegacyShared "own" blocks), actions.ts |

## Specification
### Structure
- Screen: CommonUI_InsideLayout; ScreenBlock_AssembleDetail (SeriesId, Start, AssembleEventTypeTile, EventId; BottomBar =
  BottomBarMenu, CommonUI_Elements empty); ShareSheet (Household, In_IsOpen = IsShareOpen, never set True) [SCR :382-634].
- SB: Layout with the back MenuIcon, title = AssembleDetailsPreloading…AssembleEventType.Title, NewConnectContent >
  AssembleEventDetail + FocusScrollAnchorOnBack (ListIndex CurrentItemPosition -1, ScrollAnchorId PreloadedFromListIndex)
  [SB :356-747].
- ED: `$if(IsNotFound or IsUnavailable)` → __Error with the `connect-icon-search-off` icon [ED :436-487]. The texts are:
  - title: "Meeting not found"
  - subtitle: "This meeting might have been deleted or rescheduled, tap the Assemble icon on the bottom bar to refresh the page."
- ED, else branch: `assemble-detail-content` > DIV_DetailCard (detail header skeleton while `not IsDataFetched and
  EventId = ""`, else AssembleSummaryCard IsListItem False) and DIV_Content `padding-x-base` [ED :488-1585].
  - DIV_Content holds Section_MeetingNotes ("Meeting Note", ShowMoreShowLess 3 lines, "Read more" / "Show less").
  - DIV_Content holds Section_Attendees ("Meeting Attendees"). While loading, it shows two attendee skeletons of 2.
    With content, it shows the "Host Locality" and "Interchange Meetings" LocalitiesLists.
  - DIV_Content holds Section_GSMContacts (" GMS Local Contact"). While loading, it shows a round image skeleton. With content, it shows ContactList.
- Attendee and contact blocks: as described in each component's doc comment (LL :210-476, LS :233-605, AS :424-1375,
  CL :255-390, CT :317-805).

### Data
| Call | Kind | Trigger | Inputs | Outputs used | Server side | Mock scenarios |
|---|---|---|---|---|---|---|
| `Connect2_Assemble_MUI` `AssembleEventDetail/DataActionGetAssembleEvent` | data action (on demand) | ED OnReady unless restored with data [ED :1784-1889] | EventId, SeriesId, Start, DeviceTimezone, IsDataFetched | AssembleEvent, IsNotFound | fictional (`mocks/fictional/assemble.ts` assembleEventOf) | real, notfound, unavailable, error, loading |
| `Connect2_LegacyShared` `ActionGetMemberContactByCacheKey` (GetCacheableMemberContactList) | server action (shared lib) | CL OnReady [CL :574-626] | CacheKey of the GSM ids | MemberContactList | shared Connect2_LegacyShared mock (Orbit cast 880101/880102) | shared |
| `Connect2_LegacyShared` `ActionGetBulkSubdivisions_V2` (GetCacheableSubdivision_V2) | server action | AS OnReady [AS :1748-1806] | SubdivisionId | households, locality, country | in contract after CR-AssembleDetail-1 (applied, foundation F15, 2026-10-16) [CR-AssembleDetail-1.md; questions.md Q1] | – |
| Connect2_Assemble_MUI AddBookmark / DeleteBookmarkByBookmarkId (ToggleBookmarkItem) | server actions | AS bookmark [AS :2020-2054; C:1493-1613] | object type Contact, id, group Contacts, note | – | in contract after CR-AssembleDetail-2 (applied, foundation F15, 2026-10-16) [CR-AssembleDetail-2.md; questions.md Q2] | – |

### Behaviour
| Element / lifecycle | Event | Logic | Navigates to (params) |
|---|---|---|---|
| SB | OnInitialize | not restored: GetPreloadObject → AssembleDetailsPreloading; empty title → AssembleEventTypeTile [SB :796-1081] | – |
| ED | OnInitialize / OnReady / OnAfterFetch | DeviceTimezone = GetIANATimezone; fetch; IsUnavailable → ShowUnknownErrorMessage (TST: "Service Interruption" message); else DateTime offset (unchanged in the clone), null → Start, UpdateTitle, IsDataFetched [ED :1728-2052] | – |
| hall / locality headers | click | toggle IsSelected (collapsed at start) [LS :656-701, AS :1853-1900] | – |
| household row | click | MaybeDisplaySubscriptionPopup; SetPreloadObject(row ids); NavigateTo_HouseholdCarousel → screen: carousel flag and id in the preloaded list → HouseholdCarousel, else HouseholdDetails [AS :1462-1608, SCR :885-1108] | `/UBTConnect/HouseholdCarousel?In_StartingHouseholdId` or `/UBTConnect/HouseholdDetails?HouseholdId` |
| ContextMenu | bookmark / share to Connect | see AS doc comment; share without C2ExtendedShare → LegacyShareObject [AS :1901-2277, SCR :736-852] | `/UBTConnect/LegacyShareObject?In_ShareObjectTypeId&In_ObjectId` |
| GMS contact | item / call / e-mail | HasAccessToRegion → household or upgrade popup; call / e-mail popups; e-mail → GetNameAndSurname_ByFullName → ContactByEmailMember [CT :858-1560, SCR :1143-1259] | `/UBTConnect/HouseholdDetails`, `/UBTConnect/ContactByEmailMember` (In_EntityId, In_EntityType Member, In_ContactName, In_ContactLocality, In_AuditEventId, In_ContactCountry, In_EmailTo, In_ContactSurname, In_AvatarURL) |
| FocusScrollAnchorOnBack | back | store {id, index} as dx-entering-scroll-anchor [FSA :464-472] | – |

### States
| State | Condition | Captured | Scenario |
|---|---|---|---|
| loading | before the first fetch | 2026-11-06 | `?latency=` |
| default | meeting found (the ids of the capture plan, or an EventId of AssembleEvents) | 2026-11-06 | real |
| offline | data action fails → flow handler | 2026-11-06 | error |
| not found | IsNotFound | not captured | notfound / unknown EventId |
| unavailable | IsUnavailable | not captured | unavailable |

## Patterns used
- P-PARAMS (`api.ts readInputs`, original names; Start comes from `dateTimeParam`)
- P-DATA (`api.ts` adapters)
- P-CALLS (same phases as the compiled OnReady chains)
- P-MOCKS (`mocks.ts`, shared Assemble world)
- P-STATES
- P-BACK (`useViewState`, `useWasRestoredFromCache`)
- P-FLAGS (`useFlagOn`: C2EnableCarousel, C2ExtendedShare, mobileDirectoryBookmarkNote)
- P-LIST (`OSList`)
- P-DIALOG (shell ActionConfirmationDialog / confirmAction)

## Feature flags
- C2EnableCarousel (GetHasCarouselEnabled), C2ExtendedShare (GetHasExtendedShare), mobileDirectoryBookmarkNote
  (GetHasBookmarNote → Connect_LaunchDarkly_PermissionCheck, UBTConnect_Utils.controller.js): read with `useFlagOn`,
  values from the flag store as decided for the other routes.

## Unclear points
- Q1 (decision, answered A, auto-accepted 2026-10-16 [questions.md Q1]): GetCacheableSubdivision_V2 was not in the contract.
  CR-AssembleDetail-1 is applied (foundation F15, 2026-10-16). OnReady now fetches the hall households and sets CountryCode and
  LocalityId; the `<NotCaptured>` is removed (HasAccessToRegion decides the upgrade dialog) [CR-AssembleDetail-1.md].
- Q2 (decision, answered A, auto-accepted 2026-10-16 [questions.md Q2]): ToggleBookmarkItem server actions were not in the contract.
  CR-AssembleDetail-2 is applied (foundation F15, 2026-10-16). The ContextMenu bookmark now calls ToggleBookmarkItem; the `<NotCaptured>` is removed [CR-AssembleDetail-2.md].
- BookmarkNoteAddEdit's TextArea OnFocus JS (it handles the Enter key) is not ported (no visible effect in the mock).
- The shared ItemOptionsMenu raises no OnShareToOthers / OnSendGift, so the external share (ShareEntity_ByURL) is not
  reachable; the screen handler ignores `In_IsExternalSharing = True`.

## Decisions to confirm
- Built from the compiled code (no-capture, 2026-10-16); captured and checked by parity since 2026-11-06.
- Mock world: `mocks/fictional/assemble.ts` extended with meeting details. The details are:
  - the invited halls of the locality
  - the interchange locality for Gospel Preaching / Ministry Meeting (hall meetings only)
  - two GMS contacts of the Orbit cast for the Bahia Blanca hall meetings (a virtual meeting has none)
  - one one-off online prayer meeting of the Bahia Blanca halls (the shape of the capture of 2026-11-06). The ids
    of the capture plan are translated to it (`assembleWorldId`)
- Parity differences exempted on 2026-11-06 (rules `CAPTURE-2026-11-06-ASSEMBLEDETAIL-*`, masked-text family):
  - default: the `margin-left` of the three `Placeholder_Icon_Right` of the summary card rows, and the width of the
    empty `Description_Placeholder` of the locality row. Both follow the width of masked user text. The parity masks
    the text itself, not the computed width of the siblings.
  - offline: the header title is empty in the build (`::after` of the empty expression). The parity opens the route
    by URL without the preload object that the AssembleEvents list sets. The capture went through the list (`via` in
    `analysis/states.json`), so TST shows the preloaded meeting type title.
- Q1 → A, Q2 → A (answered, auto-accepted 2026-10-16 [questions.md Q1, Q2]).
- Sync 2026-11-07, extended exemption: CAPTURE-2026-11-06-ASSEMBLEDETAIL-OFFLINE-EMPTY-TITLE now also covers the kinds text, layout and position, and the rule CAPTURE-2026-11-06-ASSEMBLEDETAIL-OFFLINE-EMPTY-TITLE-PIXEL covers the pixels of the header title tile (user, Q9 a). The new capture shows the title "Reading" unmasked. TST keeps it offline from the AssembleEvents preload; the parity opens the route by URL, so React shows an empty title [parity-exemptions.json].
- Sync 2026-11-07, mock override (follow-up): `mocks.ts` of the screen overrides the shared `mocks/fictional/assemble.ts` for the EventId of the capture plan and for the contact CacheKey 880901. The shared file is unchanged. A follow-up must decide whether the shared world takes this meeting.
- Sync 2026-11-07, known limit: an opened hall shows no households, because the shared GetBulkSubdivisions_V2 mock does not know the hall ids of the new meeting. The capture shows the halls collapsed, so their households and their count (mock: 2 + 1) are not captured.

## Changes 2026-11-07 (TST sync)
- TST files changed: none (brief "Changed TST files: -"). The fresh capture shows another event.
- New reference: the in-person event of account global#10, captured 2026-11-07. User decision Q7-old "c then a": the 20 cards of the test accounts have no virtual meeting. It shows the title "Reading", the address row (Link_Address) and an "Interchange Meetings" locality list, and no virtual-meeting row [analysis/dom/default.html, diff of the brief].
- New calls in the capture: ActionGetMemberContactByCacheKey, then ActionGetSignedPhotosInBulk (expected 4 calls, actual 9) [analysis/calls.json]. React made no code change for them: the OnReady of AssembleEventDetail_ContactList and the photo load already call them [hooks/useAssembleEventContactList.ts, components/ui/ResultItemImage/useLoadPhotoAsync.ts]. The old mock meeting was virtual and had no contact, so they did not run. Call parity: 0.
- Contact-block markup fix: FreeSubscriptionAlert, ContactPopup_ByPhone and ContactByMessage_Wrapper are now inside Div_EventContacts__Content__HostContact, as captured [analysis/dom/default.html; AssembleEventDetail_Contact.mvc.js view :163-378; app/src/pages/AssembleDetail/components/AssembleEventDetail_Contact.tsx]. The old capture did not show it.
- React mocks: the page mock answers the EventId of the capture plan with this in-person meeting (fictional values of the captured lengths). Every other EventId still answers the world's meeting, including the virtual one [app/src/pages/AssembleDetail/mocks.ts].
- Evidence: parity default, loading, offline: all counts 0 (offline uses the exemptions below) [test.md].

## Change requests
- CR-AssembleDetail-1: GetCacheableSubdivision_V2 / ActionGetBulkSubdivisions_V2 (contract + shared lib + mock).
- CR-AssembleDetail-2: Connect2_Assemble_MUI ToggleBookmarkItem with AddBookmark / DeleteBookmarkByBookmarkId.

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default (2026-11-06) | real | 0 | 0 | 0 | 3 (masked-text widths) | 1 (masked-text width) | ignoreSubtrees, CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED |
| loading (2026-11-06) | loading | 0 | 0 | 0 | 0 | 0 | ignoreSubtrees |
| offline (2026-11-06) | error | 0 | 0 | 0 | 0 (1 pseudo: empty title) | 0 | ignoreSubtrees, CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED |

## Server-side notes
- DataActionGetAssembleEvent must authorize the meeting for the signed-in user (region subscription); the client only
  shows the upgrade dialog (HasAccessToRegion) and hides nothing else.
