# Flow report: _libraries

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 0 (this unit holds the blocks of the referenced modules; 40 blocks checked, see §4 for the rest) |
| Sources | `pack/blocks.md` (block list, flow counts, TST files), TST compiled block files (`tst_source.py`), `migration/runtime-sources/*.controller.js`, `OutSystemsUI_2_23.OutSystemsUI.js`, `app/src/...`, KB pages of `connect2-utilities` (`domains/ui-components/build/behaviour.md`, `domains/notes/build/behaviour.md`) |
| Rule | TST is the source of truth. These blocks have no DEV model in the dump, so the TST compiled code is the checklist and §6.1 stays empty. |

## 1. Summary

- Counts by verdict: match 221 · partial 5 · missing 1 · differs 9 · mock-only 4 · n/a 2 · unclear 3 (same as `checklist.json`, 245 rows: 241 of the draft plus 4 server-side rows).
- F1 (major): the subscription upgrade actions are not in React. A click on "Subscription upgrade needed" (SearchResult_Item) and on a locked recently shared member (ShareSheet) does nothing; TST opens an external link or a dialog.
- F2 (minor): the 50-recipient limit of ShareSheet shows a plain error message; TST closes it by itself (FeedbackMessage_AutoClose).
- F3 (minor): ShareSheet Action_SubmitShare does not re-raise NotRegistered; React shows "Share failed" instead.
- F4 (minor): HorizontalTagList counts a tag without `IsSelected` as selected; TST counts it as not selected.
- The three layouts do not run LayoutReady, LayoutDestroy and SkipToContent, and the favicon link is static. A recorded decision covers this (user, 2026-10-17); Q1 asks the user to confirm its scope. SetLang("") is a no-op on TST.
- Status: every shared block renders and behaves as TST for the PWA. The gaps are the two upgrade actions, two edge cases of ShareSheet, and the record defaults of three blocks that need the model files (Q2).

## 2. Blocks

One sub-section per block group. The column "OutSystems (TST)" gives the compiled behaviour; the evidence column names the checklist row and the files. The reader's "not printed" rows were re-read on TST where the row below says "judge".

### 2.1 Layouts

**Layout_DetailPage** (14 flows; `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js` → `components/layout/DetailLayout`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | In_AlignTitleLeft false, In_IsPrimaryColor true, In_ExtendedClass "", In_EnableAccessibilityFeatures false, In_InitializeNavigationHandler true | same defaults | match | 026; `DetailLayout.tsx:45-49`, TST:22-46 |
| If In_InitializeNavigationHandler → LayoutRuntime_Top | block rendered when true | `{initializeNavigationHandler && <LayoutRuntime_Top/>}` | match | 027; `DetailLayout.tsx:78` |
| wrapper class | `layout layout-side layout-native ios-bounce ubt-layout-detail` + primary + ExtendedClass + ` has-accessible-features` | same expression | match | 028; judge: TST:231 = `DetailLayout.tsx:80` token for token |
| skip link | `data-showskipcontent` from the input; click → OutSystemsUI SkipToContent(MainContentWrapper) | attribute same; click only prevents default | differs | 029; decision `knowledge/auto-decisions-2026-10-16.md:115` (user, 2026-10-17); TST effect: focus moves to the content; Q1 |
| back icon | Icon arrowLeftAlt / inherit / base_24 → OnClick_BackNavigation (PreviousScreen) | same Icon, `onBack` prop (required) | match | 030; the destination is in the caller |
| header placeholders | header-title + align class (OSInline), header-right, header-top-content ph | same classes | match | 031; `DetailLayout.tsx:108-115` |
| content, bottom, CommonUI placeholders | content-middle, footer ph, Placeholder_CommonUI_Inside_Layout | same | match | 032; `DetailLayout.tsx:117-127` |
| OnReady | LayoutReady, SetScrollEvents, SetLang(""), AddFavicon("favicon.png"), OnReady event | scroll events and OnReady event only | differs | 033; LayoutReady = device classes, FixInputs, OSUI start-up (`OutSystemsUI_2_23.controller.js:15248`); AddFavicon result static in `app/index.html:11`; SetLang("") is a no-op (`OutSystemsUI.js:3199`); decision as row 029; Q1 |
| OnDestroy | RemoveScrollEvents, ClearTimeout, LayoutDestroy | scroll cleanup only | differs | 034; LayoutDestroy = `LayoutPrivate.Dispose` (`controller.js:15214`), no user effect; same decision |

**Layout_MainPages** (3 flows; → `components/layout/MainLayout`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs and locals | UsePullToRefresh false, ExtendedClass "", EnableAccessibilityFeatures false, isGrayBackground false, AddHeaderGap true, IsHeaderScrolled | same; `isHeaderScrolled` state | match | 218; `MainLayout.tsx:57-77` |
| wrapper class | `... ubt-layout-main hide-header-on-scroll` + ExtendedClass + accessibility + gray | same | match | 219; judge: TST:235-237 depends on the same inputs |
| header rows | title Columns_Two; search Columns_Two with SpacingSize If(AddHeaderGap, base, none) | same | match | 220; `MainLayout.tsx:120-147` |
| HeaderContent style | `header-top-content ph` + PrimaryGradientRadial class while IsHeaderScrolled | same | match | 221; judge: TST:475-477 |
| structure | LayoutRuntime_Top, skip link, sticky observer, PullToRefresh, content, footer, offline-data-sync, CommonUI | same | match | 222; `MainLayout.tsx:95-167` |
| OnReady | LayoutReady, SetMainScroll + SetScrollShadow, SetLang(""), AddFavicon | scroll only | differs | 223; as Layout_DetailPage; Q1 |
| OnDestroy | scroll cleanup, LayoutDestroy | scroll cleanup | differs | 224; as Layout_DetailPage |
| OnHeaderScrolled, OnPullToRefresh, SkipToContentOnClick | three handlers | first two match; skip link prevents default only | differs | 225; SkipToContent as row 029; Q1 |

**Layout_MainPages_FixedTitle** (3 flows; → `components/layout/MainLayoutFixedTitle`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs and locals | UsePullToRefresh, ExtendedClass, EnableAccessibilityFeatures, isGrayBackground; IsHeaderScrolled | same; callback instead of a local | match | 130; `MainLayoutFixedTitle.tsx:60-65` |
| wrapper class | `... ubt-layout-main layout-sticky-title hide-header-on-scroll` + ExtendedClass + accessibility + gray | same | match | 131; judge: TST:221-223 |
| header rows | LayoutRuntime_Top, skip link, sticky observer, title and search Columns_Two, header content | same; COLUMNS = ReduceLast / Base / Center | match | 132; `MainLayoutFixedTitle.tsx:95-150` |
| If UsePullToRefresh → PullToRefresh | OnPullToRefresh event | same | match | 133 |
| content, footer, offline-data-sync, CommonUI | same structure | same | match | 134 |
| OnReady | LayoutReady, SetMainFixedScroll + SetScrollShadow, SetLang(""), AddFavicon | scroll only | differs | 135; as Layout_DetailPage; Q1 |
| OnDestroy | scroll cleanup, LayoutDestroy | scroll cleanup | differs | 136 |
| OnHeaderScrolled | IsHeaderScrolled = input; event | callback | match | 137 |
| SkipToContentOnClick | SkipToContent(MainContentWrapper) | prevents default only | differs | 138; as row 029; Q1 |

**Layout_LoginFlow** (3 flows; → `components/layout/LoginLayout`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | In_HasOverlay false, In_ExtendedClass "", In_IsCommonBlock false | same | match | 205 |
| If not In_IsCommonBlock → LayoutRuntime_Top | the false callback holds the block | `{!inIsCommonBlock && <LayoutRuntimeTop/>}` | match | 206; reader checked the callbacks, TST:169-185 |
| main container class | `ubt-layout--login ` + ExtendedClass | same | match | 207 |
| If In_HasOverlay → SVG background | SVG_Background_LoginWrapper, OnPathCalculated event | same | match | 208 |
| header, content, CommonUI placeholders | three containers | same | match | 209 |
| OnReady2 | trigger OnReady(Main id) | `ready.current?.(mainId)` | match | 210; this layout has no LayoutReady, SetLang, AddFavicon or LayoutDestroy on TST |

### 2.2 Inputs and lists

**Input** (9 flows; `UBTConnectLibrary.ConnectPatterns.Input.mvc.js` → `components/ui/Input`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| In_Options (SearchInputRec), SearchString, In_ExtendedClasses | record defaults from the module model | `withDefaults`: IsEnabled true, MaxLength 50, SearchPrompt "Search", ValidationMessage "Required", Debounce -1, BorderRadius SoftRounded | unclear | 161; the model file `UBTConnectLibrary.model.js` is not in the local sources; Q2 |
| root container | `ubt-search-input` | same | match | 162 |
| left icon If SearchString = "" | Icon search / inherit / medium_20 | same | match | 163 |
| right icon If SearchString <> "" | Icon cancelFill → OnClick_ClearString(True) | same | match | 164 |
| Input_Search constraints | enabled, mandatory, widget maxLength 50 + extended maxLength = In_Options.MaxLength, type search, prompt | aria-required, disabled, maxLength = MaxLength, placeholder, type search | match | 165; the extended attribute replaces the literal at run time; the default is Q2 |
| autocomplete | If(EnableAutocompleteHTML, "on", "off") | same | match | 166 |
| input class | `form-control ` + ExtendedClasses + border-radius class, OSFillParent | same | match | 167 |
| OnChange | under "Is Mandatory?": Valid, ValidationMessage; debounce or Event_OnChange | same | match | 168; judge: TST:455-462 |
| OnClick_ClearString(Focus) | clear, focus, Event_ClearString | same | match | 169 |
| OnReady | clearStringAction attribute, SearchString = InitalString, If FocusOnReady → focus, Event_OnReady | same | match | 170; judge: TST:597 |
| OnDestroy | debounce timer cleared | `clearTimeout` on unmount | match | 171 |
| OnParametersChanged | replace when (InitalString <> "" and <> SearchString) or IsSyncValueWithInput; Valid and ValidationMessage with IsForceInvalid | same | match | 172; judge: TST:665, 676; `Input.tsx:122-132` |
| OnKeyup | Enter → blur, Event_Submit | same | match | 173 |
| Event_OnFocus | onfocus → event | same | match | 174 |

**StaticInput** (3 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | In_Prompt "Search for households. entities, news", In_ExtendedClasses "" | same text | match | 159 |
| container, icon, text | `ubt-static-input ` + classes, click → Click_Input; Icon search / inherit / medium_20; text block | same with TextEllipsis | match | 160; the block name at TST:205 was not confirmed |

**HorizontalTagList** (7 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs and locals | `ubt-tag-list`, In_TagToggleList, IsSingleSelection, IsMandatorySelection, HorizontalPadding, ExtendedClasses, isEnabled | same | match | 048 |
| list style | FormatClasses("list list-group list-horizontal--gap-xs", Main, ExtendedClasses) + padding-x | same | match | 049; judge: TST:231-235 |
| TagToggle arguments | Tag = row; isEnabled = isEnabled and row.Enabled | same | match | 050; judge: TST:257 |
| single selection, same index | no event | early return | match | 051 |
| tag not enabled | no event | early return | match | 052 |
| mandatory selection guard | ListFilter(IsSelected); end when not more than one selected | `filter(IsSelected ?? true).length > 1` | partial | 053; F4: an undefined IsSelected counts as selected in React |
| toggle, SelectedTagId, clear loop, Changed | loop clears rows with Identifier <> SelectedTagId; event with the list | same | partial | 054; judge: TST:382-386; F4 on the `?? true` default |

**SelectionOption_List** (3 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | item list, isMultiselect, Item_StyleOptions, LastItem_StyleOptions, IconSizeId nonStandard_16 | same | match | 179 |
| list and per-row options | `list list-group ubt-options-list`; last row gets the merged options | `useMemo` merge | match | 180 |
| row icon | multiselect: checkboxFill primary / checkboxOutlineBlank neutral5; single: radioChecked primary / radioUnchecked neutral5 | same | match | 181; judge: TST:517-560 |
| row left | If IconId <> "" or CountryCode <> "": IconText with Icon or flag LazyImage; else CustomText | same | match | 182; judge: TST:307 |
| SelectionOption_ItemOptionOnChange | not enabled → NotEnabledOnClick; multiselect toggles; single select sets by Id; OnSelectionChange(selected, clickedId) | same | match | 183; judge: TST:657 |
| OnReady / OnParametersChanged | Merge_StyleOptions | `useMemo` | match | 184 |

**Statistics_ListItem** (3 flows; → `components/directory/StatisticsListItem`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | `ubt-statistics-item`, StatisticsOptions, ExtendedClasses, HighlightWords, ShowSubtitle, HasActionsMenu, HideBorder | same | match | 175 |
| outer CustomContainer | border size If(HideBorder, none, small), radius, background, padding | same | match | 176; background and padding values not compared |
| click → Event_Clicked | container click | same | match | 177 |
| If ShowSubtitle | subtitle + title CustomTexts, else title | same | match | 178; text option values not compared |
| statistics list | per row: IconText with Icon or CustomText; value CustomText | same | match | 185 |
| avatar | If AvatarURL <> "": AvatarImage large_65 | same | match | 186 |
| DIV_Actions | $if(In_HasActionsMenu) → CustomContainer `ubt-statistics-action-menu` | same | match | 187; judge: TST:701, 738 |

**SearchResult_Item** (3 flows; `UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js` → `components/search/SearchResultItem`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | SearchResult, SearchTerm, ImageHeightId, ImageWidthId, ShowSubscriptionWarning, ImageURL, TitleFontSize extraSmall, LocationTopPadding small | same | match | 188 |
| OnInitialize image sizes | Member: Square / Medium_60 / Rounded; else Auto / ListThumbnail_104 / Soft; caller overrides | same | match | 189; KB BR-C2UTL-336 |
| outer container and click | CustomContainer → OnClick(SearchResult); two Columns_Two | same | match | 190 |
| UBT_LazyImage arguments | Id, shape, size, type, ImageURL | same | match | 191 |
| title | CustomText with highlight | same | match | 192 |
| OnClick_UpgradeSubscription | App_Subscription_NavigateToUpgrade | no handler | missing | 193; F1; `UBTConnect_Utils.controller.js:1` (web action: external link after ConfirmAction) |
| warning or details | If ShowSubscriptionWarning: IconText "Subscription upgrade needed" (blueDark, infoFill); else AdditionalInformation If <> "", Location If <> "" | same | match | 203; judge: TST:450, 441-449, 510, 553 |
| Placeholder_Actions | right column | `children` | match | 204 |

**EmptyList** (5 flows; → `components/ui/EmptyState`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| input IconId, two placeholders | IconId "" | same | match | 119 |
| CustomContainer and CircleButton | padding small; border neutral3 small, radius large; flex center center; CircleButton small_40 primary / primary; Icon neutral0 base_24 | same | match | 120; judge: TST:143-232 |
| title and text classes | `font-semi-bold font-size-base text-neutral-9 margin-bottom-xs`; `font-regular font-size-s text-neutral-10` | same | match | 121 |

**BlankSlate** (3 flows; OutSystemsUI)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | FullHeight true, ExtendedClass "" | same | match | 211 |
| container class | `blank-slate` + ` large` + ExtendedClass | same | match | 212 |
| placeholders | icon, description, actions with `placeholder-empty` classes | same, `role="status"` from the OSUI widgets | match | 213 |

**SkeletonSection** (25 flows; → `components/ui/Skeleton`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | In_IsLoading, In_ExtendedClass, In_IsActiveWhileLoading | same | match | 015 |
| placeholder style | ExtendedClass + skeleton class while loading | same | match | 016 |
| OnReady / OnParametersChanged | If not IsActiveWhileLoading and IsLoading → ToggleAttribute(inert) | `inert = isLoading && !isActiveWhileLoading` | match | 017; judge: TST:243-249; the else branch at TST:250 was not read |

### 2.3 Sheets and dialogs

**BottomSheet (OutSystemsUI)** (6 flows; → `components/ui/BottomSheet`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | Shape softRounded, ShowHandler true, ExtendedClass "" | same | match | 077 |
| structure | `osui-bottom-sheet`, header top-bar, content, overlay | same | match | 078 |
| OnInitialize | provider create, callbacks | `registerBottomSheet` | match | 079 |
| OnReady, Initialized, OnToggle | provider init; events | events on change of isOpen | match | 080 |
| OnParametersChanged | Shape, ShowHandler, ExtendedClass updates | class and CSS variable from props | match | 081 |
| OnDestroy | provider destroy | body class and gestures removed | match | 082 |
| provider behaviour | Escape, focus trap, drag, has-scroll (`OutSystemsUI.js:4913-5136`) | Escape, drag, hasScroll | match | 083; not compared line by line |

**BottomSheet (ConnectPatterns)** (→ `components/ui/ConnectBottomSheet`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs (16) | defaults as the reader listed | same; Local_isOpen and HideContentWhenClosed as state | match | 084 |
| BottomSheet_Internal classes and Shape | class chain; Shape rounded | same; `Shape.Rounded` | match | 085; judge: TST:319 |
| top bar | If ShowHeader: Columns_Three with back link, title CustomText (neutral10 / small / semiBold), close link | same | match | 086; judge: TST:508-510 |
| content and footer | If not HideContentWhenClosed | same | match | 087 |
| OnReady | footer height and handler offset CSS variables; CloseOnClick; transition listener | `jsNodes.ts` closeOnClick, addTransitionListener | match | 088 |
| BottomSheet_InternalOnToggle | Local_isOpen, OnToggle, hide content, RemoveInert when IsNotInertWhenClosed and closed | same | match | 089; judge: TST:721 |
| BottomSheet_InternalInitialized | drag-to-open when ShowHeader; Initialized | `bindDragToOpen` (60 px, 0.3 px/ms) | match | 090; `jsNodes.ts:52-104` cites TST:1123-1211 |
| CloseOnClick | MaybeHideContentWhenClosed, close, OnClose, RemoveInert | same | match | 091 |
| OnBack link | event | same | match | 092 |

**ShareSheet** (5 flows; `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` → `containers/ShareSheet`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | In_IsOpen, ShareObjectTypeId, ShareableObjectId, IsLegacy, UpdateType, UpdateDate | same | match | 095 |
| root If IsOpen → BottomSheet | classes with full-height and ` connect-share-sheet--legacy`; FooterHeight; ShowBackButton = IsSearchStep | same | match | 096; judge: TST:321 |
| sheet events | Initialized, OnClose, OnToggle, OnBack | same | match | 097 |
| content | processing class; first step or search step | same | match | 098 |
| footer | Send (disabled without selection) or Cancel, both small | same | match | 099; judge: TST:1762, 1805 |
| PreventBackNavigation while open | event → Handler_OnBack | same | match | 100 |
| first step | search Input, Recently Shared list (hidden when fetched and empty), "Shared To" (native only) | `ShareSheetFirstStep.tsx` same; no "Shared To" | match | 101; judge: TST:691; BR-C2UTL-340 |
| search step | selected members, results with lock / checkbox icons, EmptyList texts, "Results" / "Recently shared" | `ShareSheetSearchStep.tsx` same | match | 102; judge: TST:1438, 1448 |
| OnInitialize | skeleton list; HasNativeShare; external options | skeleton list | match | 103; native part n/a (rows 116, 117) |
| OnParametersChanged | open: reset, BottomSheetOpen, refresh; close: delay and BottomSheetClose | same | match | 104 |
| Handler_BottomSheetInitialized / OnToggle | id; close when toggled off | same | match | 105 |
| Action_ResetAndCloseSheetState | event, clear lists, reset, scroll top | same | match | 106 |
| Action_ResetLocalVariables | seven locals | five locals; IsSubmitting and ShareId have no visible effect | match | 107 |
| Handler_OnBack | search step → back to first step; else close | same | match | 108 |
| Handler_SearchOnFocus | IsSearchStep = True | same | match | 109 |
| ClearString / Submit | Trim; If term <> "": IsSearching, skeleton, fetch | same | match | 110; judge: TST:2824-2830 |
| Handler_OnClickRecentMember | disabled → App_Subscription_ShowUpgradePopUp; else share | disabled → nothing | partial | 111; F1; `UBTConnect_Utils.controller.js:46` |
| Handler_SearchResultItemOnSelect | FeedbackMessage_AutoClose at 50; select or remove | plain error message at 50 | partial | 112; F2; text same (TST:2926) |
| Handler_SelectedListItemOnClick | remove from the selection | same | match | 113 |
| Handler_OnClickSend | distinct householders of both lists | same | match | 114 |
| Action_SubmitShare | CS_ShareObject; "<Type> has been shared."; NotRegistered re-raise; "Share failed. Please try again." | same messages; no re-raise | partial | 115; F3; TST:3122, 3127-3136, 3148 |
| Handler_OnClickExternalOption | CS_CreateShareProfileLink, ExternalShare | – | n/a | 116; native only: HasNativeShare = AppManager_GetIsNative (TST:3238); BR-C2UTL-340; ADR-1; U14 |
| Action_SetExternalShareOptions | ShareVia, CopyLink, CanLaunchWithData for WhatsApp, Signal, Outlook | – | n/a | 117; native only, as row 116 |
| GetAvailableMembers, GetRecentlyShared | data actions and OnAfterFetch | two queries; `isSelected` derived | match | 118 |
| server side | four service actions | MSW handlers `containers/ShareSheet/mocks.ts` | mock-only | 242; BR-C2UTL-338, 339 |

**NotesSheet** (5 flows; `UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js` → `components/note/NotesSheet`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs and locals | In_IsOpen, ExtendedClasses, In_ItemId, In_NoteCategoryId, In_Notes; BottomSheetId, IsEditing, IsSheetOpen | same | match | 141 |
| If IsSheetOpen → BottomSheet | Title "Note", ShowHeader true, FooterHeight "72px"; NoteListActions content; AddNote footer when not editing | same | match | 142; judge: TST:209-213; BR-C2UTL-326 |
| If IsSheetOpen → BackNavigationHandler | empty handler | same | match | 143; judge: TST:372 |
| OnParametersChanged | open: flush, BottomSheetOpen; close: DelaySetIsOpen, BottomSheetClose | same | match | 144; judge: TST:707-712 |
| BottomSheet_Initialized | id; pending open | same | match | 145 |
| OnEditingStateChanged / OnSaveEditNote | IsEditing; On_NotesChanged | same | match | 146 |
| OnAddNoteRequested success | AddNote; local note; Total + 1; new note first; event; feedback | same | match | 147; judge: TST:525; BR-C2UTL-325 |
| OnAddNoteRequested failure | feedback add false; UserException same; others go up | same | match | 148 |
| On_NoteDeleted | re-raised event | same | match | 149 |
| server side | AddNote | MSW handler `components/note/NotesSheet/mocks.ts` | mock-only | 243 |

**NoteListActions** (3 flows; → `containers/NoteListActions`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs and locals | In_ItemId, In_NoteCategoryId, Notes, In_ShowPreviewOnly, In_SearchString; EditingNoteId, NotesData | same | match | 194 |
| OnInitialize / OnParametersChanged | NotesData = Notes | state reset on a change of the inputs | match | 195 |
| Note_Item_List arguments and events | five events | same | match | 196 |
| OnEditingRequested / OnCancelEditRequested | EditingNoteId; On_EditingStateChanged | same | match | 197; the trigger lines were not read; NotesSheet handles the event |
| OnSaveEditRequested success | UpdateNote; EditedAt; local note; list update; OnSaveEditNote; feedback | same | match | 198; TST:326, 496; K3 |
| OnSaveEditRequested not found / failure | Delete_LocalNoteByNoteId, ListRemove; feedback | same | match | 199 |
| OnSaveEditRequested UserException | feedback edit false | same | match | 200 |
| OnDeleteNoteRequested | DeleteNoteByNoteId; local delete; On_NoteDeleted(NoteId, IsLastNoteDeleted); feedback | same; IsLastNoteDeleted = length is 1 | match | 201; TST:357, 709; the expression at TST:722-726 was not read; K2 |
| On_ShowAllNotesRequested | re-raised event | same | match | 202 |
| server side | UpdateNote, DeleteNoteByNoteId | MSW handlers `containers/NoteListActions/mocks.ts` | mock-only | 244 |

**Dialog_Navigation** (UBTConnect `App_Common_Blocks_PopupDialogs`; not in `blocks.md`, kept from the draft; → `components/ui/Dialog/NavigationDialog` variant `connect`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | ConfirmLabel "Yes", DIsmissLabel "No" | same | match | 150 |
| structure and options | NavigationConfirmationDialog; header CustomContainer (margin-bottom base, neutral10 semiBold, `text-align-center`); body (margin-bottom medium, neutral10) | same | match | 151; judge: TST:199-262 |
| OnNavigation → Event_OnBackNavigation | re-raised event | `useNavigationConfirmation` | match | 152; NavigationConfirmationDialog is owned by App_Common_Blocks_PopupDialogs |

**AddressPopup_Wrapper** (5 flows; → `components/contact/AddressPopupWrapper`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs and locals | FontSize small, In_Address, IsEnabled, IconVisible, In_Coordinates; IsLocationPopupOpen, IsMapsAvailable, MapsPackageName | same; no MapsPackageName | match | 122 |
| address CustomText | inline icon locationOnFill (NonStandard_16, ExtraSmall) when visible and not blank; colour primary or neutral7; regular, underlined | same | match | 123; judge: TST:204-228; BR-C2UTL-315 |
| AddressPopup arguments | ContactPopupData ("Open Location", ShowPopup), ShowGoogleMaps = IsMapsAvailable | same | match | 124 |
| OnClick_Address | "Has Coordinates" (always true) → toggle | same | match | 125; BR-C2UTL-312 |
| Handler_CopyAddress | clipboard, toggle | same | match | 126 |
| ToggleLocationPopup, Cancel | toggle | same | match | 127 |
| OnReady | `if((true))` skips the maps probe | `isMapsAvailable` fixed false | match | 128; TST:490; BR-C2UTL-311 |
| Handler_OpenInMapsOrGoogleMaps | empty address → "Map is not available"; coordinates or cleaned text; native geo: URI; web maps.google.com | same | match | 129; judge: TST:594, 601, 607; BR-C2UTL-313, 314 |

**ContactPopup_ByPhone** (3 flows; → `components/contact/ContactPopupByPhone`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | ContactPopupButtons (local), In_CallPopupData, In_ImageSizeId extraLarge_100 | derived buttons | match | 226 |
| Action_SetContactPopupButtons | "Call" default; Phone → "0" Call; else Mobile "1" callFill, Home "2" homeFill, Work "3" enterprise | same | match | 227; judge: TST:309-351 |
| OnInitialize / OnParametersChanged | rebuild the buttons | `useMemo` on the data | match | 228; the If at TST:422-433 was not read |
| OnClick_CallButton | Event_Call(Number); navigate to `tel:` + Number | same | match | 229; judge: TST:394 |
| ContactPopup arguments, Cancel | three inputs; Event_Cancel | same | match | 230; ContactPopup itself not read |

### 2.4 Cards and images

**UBT_LazyImage** (13 flows; `UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js` → `components/ui/EntityLazyImage`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | ImageURL, EntityId, EntityType, ImageSize, ExtendedClass, In_BorderRadius, In_HighRes, HasErrorMessage | same | match | 037 |
| SkeletonSection + LazyImage | loading until fetched | same | match | 038 |
| ExtendedClass for Member | `inline-block ubt-avatar-image` + class | same | match | 039 |
| OnInitialize fallback | colours, sizes, message "Sorry, no photo available", icon by type | same | match | 040 |
| OnInitialize size switch | nine height cases, then width | HEIGHT and WIDTH maps | match | 041; judge: TST:437-500 |
| image size id | Large / Medium / Small; If not In_HighRes → Medium | same | match | 042; judge: TST:673-676; BR-C2UTL-350 |
| border radius, Member | caller radius; Member: circle, small border, neutral3 | same | match | 043; BR-C2UTL-351 |
| OnReady | AlreadyHasURL, HasData, IsValidType → Cache_SignedImageURL_Get | `needsSignedUrl` | match | 044; judge: TST:740-746; BR-C2UTL-349 |
| OnParametersChanged | If EntityId <> LocalEntityId: reset, OnInitialize, OnReady | same | match | 045; judge: TST:822 |
| server side | GetSignedImagesInBulk | MSW handler `components/ui/EntityLazyImage/mocks.ts` | mock-only | 245 |

**ImageCard_LazyLoading** (7 flows; → `components/ui/ImageCard`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs and locals | `ubt-image-card`; CardTypeId, ItemsPerRow, ShowAvatarList, ExtendedClass, IsBookmarked, BookmarkModifier | same | match | 059 |
| OnInitialize | border, spacing, text options by CardTypeId (once) | computed on each render | match | 060; no OnParametersChanged on TST; no caller changes the type |
| outer CustomContainer | classes; Options neutral0, BorderOptions, TextOptions; click | same | match | 061; judge: TST:239-262 |
| ImageWrapper classes | bookmarked class, modifier, position-relative | same | match | 062 |
| placeholders | lazy-image placeholder, image tag | same | match | 063 |
| DIV_AvatarListWrapper | Visible = ShowAvatarList | conditional render | match | 064; a hidden Container is not in the DOM |
| content CustomContainer | spacing and text options, type class | same | match | 065 |

**ImageCard__Content** (6 flows; → `components/ui/ImageCardContent`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | `image-card-content`; In_Title, In_Subtitle, In_ShowSubtitle | same | match | 075 |
| structure | top placeholder, title wrappers, $if(ShowSubtitle) CustomContainer, bottom placeholder | same | match | 076; judge: TST:210; the subtitle Options record was not compared |

**ShareableObject_Generic** (3 flows; → `components/share/ShareableObject`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs and locals | ImageWidth auto, BorderRadius medium (locals), In_ShareableObject | constants | match | 214 |
| UBT_LazyImage arguments | radius, SignedURL, type, Id, size | same | match | 215 |
| text container click | Event_OnClick | same | match | 216 |
| title, subtitle, location | $if(Subtitle <> ""), $if(Location <> "") with homePinFill neutral7 small_12 | same | match | 217; judge: TST:255, 297 |

**Gallery** (4 flows; OutSystemsUI)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | RowItemsDesktop 4, Tablet 3, Phone 1, ItemsGap base, ExtendedClass | same | match | 231 |
| placeholder | `osui-gallery` + ExtendedClass + CSS variables from the provider | class and `--gallery-*` variables from the captures | match | 232 |
| OnInitialize / OnReady | provider create and init; Initialized | Initialized after mount | match | 233 |
| OnParametersChanged | five property updates | recomputed on render | match | 234 |
| OnDestroy | GalleryDestroy | no provider instance | match | 235; same end state |

**Carousel** (3 flows; OutSystemsUI → `components/ui/Carousel`, Splide per ADR-3)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | Navigation both, Height "auto", ItemsPerSlide, OptionalConfigs, ExtendedClass | same; record defaults 1/1/1, autoPlay true, loop true | unclear | 236; the OutSystemsUI model is not in the local sources; Q2 |
| structure | `osui-carousel` > track > content; previews under $if(false) | same; `--has-pagination` class | match | 237 |
| OnInitialize / OnReady | CarouselCreate, CarouselInitialize; Initialized | `CarouselProvider.build()` | match | 238; ADR-3 (`stack.md:141`) |
| OnSlideMoved | event (CarouselId, Index) | same | match | 239 |
| OnParametersChanged | ten property updates | `changeProperty(config)` | match | 240 |
| OnRender / OnDestroy | CarouselUpdateOnRender; CarouselDestroy | `updateOnRender`; `dispose` | match | 241 |

### 2.5 Navigation handlers

**BackNavigationHandler** (8 flows; NavigationHandler → `platform/navigation/BackNavigationHandler`, `hooks.ts`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | DestroyCallback, Priority 0 | priority, onBackNavigation | match | 055 |
| OnInitialize | register with window.dx.Navigation.BeforeBackNavigation | `useBackHandler(priority, handler, enabled)` | match | 056; React skips the registration without a handler; no user effect |
| TriggerBackNavigation | BackNavigation event | callback | match | 057 |
| OnDestroy | DestroyCallback | cleanup returned by `addBackHandler` | match | 058; `hooks.ts:16-21` |

**PreventBackNavigation** (3 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| BackNavigationHandler at LockScreenBackNavigationPriority | If(false) wrapper, else branch renders | `usePreventBackNavigation(true, ...)`, BACK_PRIORITY.lockScreen | match | 157 |
| PreventBackNavigation action | PreventNavigation(event); BackNavigationPrevented | `event.preventDefault(); onPrevented?.(event)` | match | 158; `hooks.ts:28-37` |

**ScrollAnchor** (2 flows; read because App_Notifications and Directory_Updates depend on it)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| input Id | "" | `idIn` | match | 139 |
| container attribute | `data-dx-scroll-anchor-id` = Id | same | match | 140; judge: TST:136 |

### 2.6 Patterns

**CustomContainer** (32 flows; → `components/ui/CustomContainer`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | MainContainerClass `ubt-custom-container`, ExtendedClasses, Options | same | match | 001 |
| Content style | class chain of the three inputs | `formatClasses(...)` | match | 002; expression body not compared line by line |
| onClick → Clicked | container click | same | match | 003 |
| OnReady height / width | GetStyle_SizeOptions when options set | same | match | 004, 005 |
| OnReady background | image; else colour when "Valid opacity?" (Opacity > 0) | same; `getStyle_Opacity` returns "" unless 0 < opacity < 1 | match | 006; judge: TST:284; `lib/ubtConnectLibrary/actions.ts:166-168` |
| OnParametersChanged → OnReady | re-run | computed on render | match | 007 |

**Icon** (28 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | In_IconId, In_ColorId Neutral9, In_SizeId, In_Visible true, In_ExtendedClasses; `ubt-icon` | same | match | 008 |
| container | visible, click, class chain | same | match | 009 |
| If IconId has "SVG_" → IconSVG | same | `includes('SVG_')` | match | 010 |

**CustomText** (24 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | ten inputs with record defaults | same | match | 011; undefined records accepted by the helpers |
| class chain | text classes, ExtendedClasses, fit-content, padding, justify, no-wrap | same | match | 012; order not compared |
| click → Clicked | same | same | match | 013 |
| If_HasHighlightWords | HighlightSearch(StopWords "and in", classes) else inline icon + text | same | match | 014; judge: TST:330 |

**IconText** (23 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | eight inputs | same | match | 018 |
| DIV_IconText click | Clicked | same | match | 019 |
| Columns_Two options | ReduceFirst / ReduceLast, RowReverse, SpacingSize, VerticalAlign center | same | match | 020; judge: TST:273 |
| placeholders | Icon; CustomText; subtext If <> "" | same; one extra div around the icon | match | 021 |

**Columns_Two** (18 flows) and **Columns_Three** (6 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | `ubt-columns`, ColumnOptions, ExtendedClasses | same | match | 022, 093 |
| Columns2 / Columns3 | GutterSize from SpacingSize, class chain | same | match | 023, 094 |
| column styles | `--left --column` + `--fixed-width` when size > 0 | same | match | 024; judge: TST:207 |
| OnReady column sizes | SetLocalVariable_ColumnSize | inline style | match | 025, 094 |

**Button (ConnectPatterns)** (→ `components/ui/Button`) and **Button (CW_Common)** (→ `components/ui/ActionButton`)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| ConnectPatterns inputs | `ubt-button`; In_ButtonOptions, In_ExtendedClass, In_IsDisabled | same; defaults Medium / Primary / Grow for the record | unclear | 035; the ButtonOptionsRec defaults need the model file; Q2 |
| ConnectPatterns button | `btn ` + FormatClasses(ExtendedClass, FormatClasses(Main, GetClasses_Button)); content class; click | same | match | 036; judge: TST:185-188 |
| CW_Common inputs | nine inputs | same | match | 046 |
| CW_Common structure | Button wrapper, spinner container, IconText with Icon | same | match | 047 |

**CircleButton** (4 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | `ubt-icon-button`; six inputs | same | match | 153 |
| container classes and click | chain with avatar size and loading class; OSInline; Action_OnClick = trigger OnClick | same | match | 154; judge: TST:373-392 |
| CustomContainer options | background, padding, border, circle, cyanDarker, skeleton element | same | match | 155 |
| placeholders | Icon, Badge | same | match | 156 |

**ButtonLoading** (7 flows; OutSystemsUI)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | Internal_Configs, IsLoading, ShowLabelOnLoading, ExtendedClass | same | match | 066 |
| wrapper | `osui-btn-loading` OSInline; provider adds state classes and aria | classes and aria from the captures | match | 067 |
| OnInitialize / OnReady | provider create, init, Initialized event | spinner aria-hidden, Initialized | match | 068, 069 |
| OnParametersChanged | provider property updates | class names on render | match | 070 |
| OnDestroy | ButtonLoadingDestroy | no provider instance | match | 071; same end state |

**FixedFooter** (7 flows)

| Element | OutSystems (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | `ubt-fixed-footer`; useBottomBar, ExpectedFooterHeight, ContentContainerId | same | match | 072 |
| container | class with `--no-bottom-bar` | same | match | 073 |
| OnReady | CSS variable and class on the content container | same, once | match | 074 |

## 3. Blocks of the flow

This unit has no own screens or blocks; §2 holds the library blocks. The reader's React name map is in `notes.md`.

## 4. Shared blocks and actions

Blocks of `pack/blocks.md` used by fewer than 3 flows were not checked in this pass (budget). The screen flows that use them keep the check of their use.

Not checked (fewer than 3 flows), 2 flows:

```
CircleButton_WithLabel, Layout_HomePage, SharePopup, Update_ListItem, Badge, ScreenBlock_EventDetail, DynamicTextArea,
ItemCard_ActionBar, CircleButton_IconPrimary, TextArea_WithCounter, LayoutRuntime_Top, CacheControl_Policies,
CacheControl_AllLocalities, CacheControl, NavigationHandler, SeeMoreSection, Horizontal_Filter_TagList, ItemCard_WithNotes,
NonMember_ListItem, ComingSoon, Dialog_AccessRestrictedAction, ActionConfirmationDialog
```

Not checked (fewer than 3 flows), 1 flow:

```
SubLayout_Section, Dialog_GoExternalApp, Embedded_FeedCMS, HandleDownload, Layout_MainPages_Upgrade, Notification_ListItem,
ImageCard__Content__Tag, ComingSoon_V2, LeafletMap, SubHeader_MainPages, Timer, Embedded_MyEntertaining, HorizontalDot_List,
CustomScrollList, Input_Underlined, SearchSheet_Entity_UnderDev, Separator, LocalityContact_ListItem, RangeSlider, IconBadge,
PanZoom, SanitizedHtml, TouchEvents, ImageCard, PopupMenu, StopPropagationHelper, CacheControl_AllCountries, BottomSheetAnchor,
FloatingContent, LeafletMap_Updated, NegativeMargin, Sidebar, EmptyListBorderless, TagContent, HouseholdMember_ListItem,
UBT_LazyImage_List, EventCard, PinUnlock_MobileWrapper, Pincode_Register, ExpandableSection, Skeleton_TextBlock,
AndroidAppLinkOnResumeHandler, DeeplinkHandlerCentral, Dialog_AccessRestrictedAction_Legacy, ExitConfirmationDialog,
NavigationConfirmationDialog, SortableList, SortableList_Draggable, Animate, AppManager_Events, ApplicationLoadEvents,
BottomBarItem, HandleImageLoadError, LoadingDots, OfflineDataSyncCore, ProgressBar, PullToRefresh, SVG_Background_Custom, Tile,
KebabButtonMenu, MemberRelation_ListItem, CacheControl_AllSubdivisions, DropdownSearch, InputWithIcon, InputCounter, ActionsMenu,
ContactByMessage_Wrapper, CacheControl_UserInfo
```

The `ScreenBlock_*` blocks of `Connect2_OrbitMobile_MUI`, `Connect2_Assemble_MUI` and `Connect2_LegacyShared` are the screen bodies of the Legacy_* flows. Their reports check them:

```
ScreenBlock_AdminEventDetail, ScreenBlock_AdminLanding, ScreenBlock_AdminMilestoneDetail, ScreenBlock_AdminMilestones,
ScreenBlock_Event_Email, ScreenBlock_Household_Email, ScreenBlock_MyEvents, ScreenBlock_ContactForm, ScreenBlock_EventBooklet,
ScreenBlock_GuestArrangements, ScreenBlock_HelperDetails, ScreenBlock_HostSurvey, ScreenBlock_MilestoneWrapper,
ScreenBlock_OrbitLanding, ScreenBlock_PassportScan, ScreenBlock_TransportDetail, ScreenBlock_ViewDocuments, Assemble_FilterSheet,
ScreenBlock_AssembleDetail, ScreenBlock_AssembleEvents, ScreenBlock_Assemble_Filter, ScreenBlock_GenerateQRCode,
ScreenBlock_ShareDetail, ScreenBlock_ShareObject, ScreenBlock_MessageDetail, ScreenBlock_MessageList, ScreenBlock_EventDetail_V2,
ScreenBlock_Event_Email_V2, ScreenBlock_MyEvents_V2
```

- ScrollAnchor (2 flows): the judges of App_Notifications and Directory_Updates asked for it, so §2.5 holds its rows.
- Dialog_Navigation is a UBTConnect block (App_Common_Blocks_PopupDialogs), not a library block; its rows stay in the checklist, its owner is that flow's report.
- NavigationConfirmationDialog, ContactPopup, AddressPopup, TagToggle, PullToRefresh, LayoutRuntime_Top: referenced by the blocks above, not read here.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | major | SearchResult_Item OnClick_UpgradeSubscription; ShareSheet Handler_OnClickRecentMember | TST runs App_Subscription_NavigateToUpgrade (Cache_UserInfo_Get, Cache_UserInfo_Invalidate, OpenInApp_OpenExternalLink after ConfirmAction; `UBTConnect_Utils.controller.js:1`) on the warning and App_Subscription_ShowUpgradePopUp (`:46`) on a locked recent member. React does nothing on both taps. Both are web actions, not native only. No decision recorded. | `components/search/SearchResultItem/SearchResultItem.tsx:117`; `containers/ShareSheet/useShareSheet.ts:136-140` | Port the two client actions from `UBTConnect_Utils.controller.js` (external link with the confirm dialog; the upgrade popup), or record a decision to keep them out (Q3). |
| F2 | minor | ShareSheet Handler_SearchResultItemOnSelect | At 50 recipients TST shows "You can select up to 50 recipients only." with FeedbackMessage_AutoClose; React shows a plain error message that stays open. | `containers/ShareSheet/useShareSheet.ts:142-149` | Port FeedbackMessage_AutoClose (`UBTJavaScriptUtils.controller.js`) or close the message after the same delay. |
| F3 | minor | ShareSheet Action_SubmitShare | TST re-raises NotRegistered to the flow handler (`ShareSheet.mvc.js:3127-3136`); React shows "Share failed. Please try again." for every error. | `containers/ShareSheet/useShareSheet.ts:123-133` | Pass a NotRegistered error to `raiseToFlowHandler` before the generic message. |
| F4 | minor | HorizontalTagList TagToggleToggle | React reads `IsSelected ?? true`: a tag without `IsSelected` counts as selected in the mandatory-selection guard and the single-selection clear. On TST the Boolean defaults to False. | `components/ui/HorizontalTagList/HorizontalTagList.tsx:54, 57` | Use `?? false`. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| all blocks of this unit | no DEV model in the dump (`pack/blocks.md` holds names only) | the compiled files named in `pack/blocks.md` | TST | `notes.md` |

### 6.2 KB pages vs TST (for the KB owner)

| Id | KB text | TST evidence | File |
|---|---|---|---|
| K1 | BR-C2UTL-342: "At most five members can be picked from search results: the empty checkbox disappears once five are selected" | The limit is 50: `feedbackMessage_AutoClose("", "You can select up to 50 recipients only.", ...)` (`ShareSheet.mvc.js:2926`); BR-C2UTL-328 of the same page says 50. React uses 50. | `connect2-utilities/domains/ui-components/build/behaviour.md` |
| K2 | BR-C2UTL-323: "Deleting a note from the note list never reaches the server: a constant mockup switch reports success without deleting" | NoteListActions calls the server action DeleteNoteByNoteId (`NoteListActions.mvc.js:357, 709`) and reads its Success output. React calls it too (mock-only here). | `connect2-utilities/domains/notes/build/behaviour.md` |
| K3 | BR-C2UTL-324: "Saving an edited note from the note list never reaches the server: the edit is applied to the in-memory list only" | NoteListActions calls the server action UpdateNote (`NoteListActions.mvc.js:326, 496`), then updates the list and the local note. React calls it too. | `connect2-utilities/domains/notes/build/behaviour.md` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | The favicon row of `migration/knowledge/auto-decisions-2026-10-16.md:115` (confirmed by you on 2026-10-17, option A) says "the other OSUI layout helpers stay unported". Does that decision cover LayoutReady, LayoutDestroy and SkipToContent in the three layouts (rows 029, 033, 034, 135, 136, 138, 223-225)? TST effects: LayoutReady sets the body device classes and runs FixInputs and the OSUI start-up once per app start (`OutSystemsUI_2_23.controller.js:15248`); SkipToContent moves the focus to the main content when the skip link is used; LayoutDestroy only disposes listeners. SetLang("") is a no-op on TST (`OutSystemsUI.js:3199`). | Nine rows are `differs` on this decision. Without it they are `missing`, and the skip link is an accessibility gap when `EnableAccessibilityFeatures` is on. | (a) confirm: the decision covers the three helpers, rows stay `differs`; (b) port SkipToContent only (one focus call in the three layouts); (c) port LayoutReady and SkipToContent | (b): SkipToContent is small and has a user effect for keyboard users; the device classes come from `platform/device/device.ts`. |
| Q2 | The record defaults of ButtonOptionsRec (row 035), SearchInputRec (row 161) and the OSUI Carousel records (row 236) are in `UBTConnectLibrary.model.js` and `OutSystemsUI_2_23.model.js`, which are not in `migration/runtime-sources`. React cites `UBTConnectLibrary.model.js:1477-1516` for the Input defaults. Fetch the two model files? | Three rows stay `unclear` without them. A wrong default changes the button size and type, the input max length, and whether a carousel auto-plays. | (a) fetch both files under the standing approval for TST static files (`feedback-fetch-static-scripts`), log them in `runtime-sources.md`, re-check the three rows; (b) keep the React defaults and record them as a decision | (a): the files are static scripts and the check is short (as App_Menu_ContactUs Q3). |
| Q3 | F1: port App_Subscription_NavigateToUpgrade and App_Subscription_ShowUpgradePopUp (`UBTConnect_Utils.controller.js:1, 46`), or keep the subscription upgrade out of the mock phase? | The warning row and the locked recent member are dead taps in React. Home Q2 (2026-10-27) builds the subscription banner from the TST view, so the upgrade path is in scope there. | (a) port both actions now (confirm dialog + external link; the upgrade popup); (b) record a decision to keep them out until the production phase | (a): the actions are short and both blocks already render the trigger. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 45 | 38 | 0 | 0 | 0 | 4 | 0 | 3 |
| ui | 93 | 92 | 0 | 0 | 1 | 0 | 0 | 0 |
| actions | 54 | 44 | 5 | 1 | 2 | 0 | 2 | 0 |
| validations | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 52 | 46 | 0 | 0 | 6 | 0 | 0 | 0 |
| strings | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 245 | 221 | 5 | 1 | 9 | 4 | 2 | 3 |
