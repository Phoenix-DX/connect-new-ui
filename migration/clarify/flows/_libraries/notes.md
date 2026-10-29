# _libraries: reader notes (stage 1)

Unit: referenced library blocks (TST compiled code). Rows: 241 in `draft.json`, verdict empty, verified "pack".
The pack is only `pack/blocks.md` (block list). There is no DEV model of these blocks, so "pack elements" = block names.

## TST presence check
- Pack elements absent on TST: none. All 40 blocks of scope have a TST file (`tst_source.py show <file>`).
  `Dialog_Navigation` is not in `blocks.md`; its TST file is `UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc.js`.
- TST elements absent in the pack: not applicable (blocks.md has no element list).
- Blocks read (TST and React): CustomContainer, Icon, CustomText, SkeletonSection, IconText, Columns_Two, Columns_Three,
  Layout_DetailPage, Layout_MainPages, Layout_MainPages_FixedTitle, Layout_LoginFlow, UBT_LazyImage, Button (ConnectPatterns),
  Button (CW_Common = React ActionButton), Input, BackNavigationHandler, PreventBackNavigation, ScrollAnchor,
  ImageCard_LazyLoading, ImageCard__Content, HorizontalTagList, ButtonLoading, FixedFooter, BottomSheet (OSUI and Connect),
  ShareSheet, EmptyList, AddressPopup_Wrapper, NotesSheet, NoteListActions, Dialog_Navigation, CircleButton, Gallery, Carousel,
  ShareableObject_Generic, ContactPopup_ByPhone, StaticInput, Statistics_ListItem, SelectionOption_List, SearchResult_Item, BlankSlate.
- Blocks with fewer than 3 flows and not named by the judges (about 60 in blocks.md) were not read: budget and scope.

## React name map (block -> React file)
- Input -> components/ui/Input; EmptyList -> components/ui/EmptyState; SkeletonSection -> components/ui/Skeleton;
  UBT_LazyImage -> components/ui/EntityLazyImage; ImageCard_LazyLoading -> components/ui/ImageCard;
  ImageCard__Content -> components/ui/ImageCardContent; Columns_Two/Three -> components/ui/ColumnsTwo/ColumnsThree;
  Button (CW_Common) -> components/ui/ActionButton; BottomSheet (Connect) -> components/ui/ConnectBottomSheet;
  Layout_MainPages -> components/layout/MainLayout; _FixedTitle -> MainLayoutFixedTitle; Layout_DetailPage -> DetailLayout;
  Layout_LoginFlow -> LoginLayout; ShareSheet -> containers/ShareSheet; NoteListActions -> containers/NoteListActions.

## Not found in React (5 rows)
- ButtonLoading OnDestroy (-071); Gallery OnDestroy (-235): no unmount handler (CSS-only ports).
- ShareSheet Handler_OnClickExternalOption (-116) and Action_SetExternalShareOptions (-117): React README (`containers/ShareSheet/README.md:78-84`) says
  the "Shared To" section renders only when AppManager_GetIsNative is true; the PWA is not native.
- SearchResult_Item OnClick_UpgradeSubscription (-193): comment `SearchResultItem.tsx:117` says not ported.

## Facts for the judge (not verdicts)
- The three layouts Layout_DetailPage, Layout_MainPages, Layout_MainPages_FixedTitle: TST OnReady calls LayoutReady, SetScrollEvents, SetLang(""),
  AddFavicon("favicon.png"); OnDestroy calls LayoutDestroy; the skip link calls SkipToContent. React files have only the scroll events;
  the skip link only does preventDefault. Layout_LoginFlow has none of these in TST either.
- Layout_LoginFlow: TST renders LayoutRuntime_Top when In_IsCommonBlock is False (checked in the text); React is the same.
- Layout_DetailPage back arrow: React `onBack` is a required prop; TST goes to the PreviousScreen destination itself.
- ImageCard_LazyLoading: TST computes border/spacing/text options once at OnInitialize; React recomputes them on each render.
  DIV_AvatarListWrapper stays in the DOM with Visible false in OS; React removes it.
- Input: TST widget has `maxLength: 50` and extended maxLength = In_Options.MaxLength; React uses only MaxLength.
- AddressPopup_Wrapper: TST OnReady has `if((true))`, so IsMapsAvailable stays False; React uses a fixed false.
- ShareSheet: README lists known gaps (upgrade popup, FeedbackMessage_AutoClose, IsSubmitting, NotRegistered re-raise, ExternalShare action).
- BottomSheet (OSUI): provider JS (OutSystemsUI.js) behaviour is not in the block file; React cites runtime-sources lines 4913-5136; not compared.

## Pack gaps / unread stretches
- `c2.py` (my extractor in scratch) prints only some lines of the TST text: many Options records, style expressions, If conditions
  and block arguments are cut. Rows say "not printed" where this limits the comparison. The judge can re-check with `tst_source.py show <file>` at the cited lines.
- Not read in React: `containers/ShareSheet/components/ShareSheetFirstStep.tsx` and `ShareSheetSearchStep.tsx` (two rows say "not read in this pass");
  `platform/navigation/hooks.ts` (useBackHandler, usePreventBackNavigation); jsNodes.ts of ConnectBottomSheet (bindDragToOpen etc.);
  ContactPopup, AddressPopup, NavigationConfirmationDialog, TagToggle, PullToRefresh blocks (referenced, not in scope).
- Not read in TST: ShareSheet lines 1892-2070 (view tail), BottomSheet Connect drag JS 1090-1215 line by line,
  ModelRec default values (ButtonOptionsRec, SearchInputRec, ContainerOptionsRec, Carousel records) in the module models.
- Mock files: ShareSheet `containers/ShareSheet/mocks.ts` (GetAvailableMembers/GetRecentlyShared/CS_ShareObject/CS_CreateShareProfileLink);
  NotesSheet `components/note/NotesSheet/mocks.ts`; NoteListActions `containers/NoteListActions/mocks.ts`; EntityLazyImage `components/ui/EntityLazyImage/mocks.ts`.
  Not opened in this pass (names from the directory listing).
