/**
 * F59-b (user, 2026-10-25): split two container files of over 400 lines into modules of 400 lines or less.
 *
 * Cut and paste: each output file is written header text (imports, a short comment) plus line ranges of the file at
 * HEAD, copied as they are (parts joined with a newline: a text part that ends with a newline leaves a blank line).
 * Changes to the copied lines: `export` before a declaration that another module now imports (list `exports`), and
 * the `replaceAll` list of an output (one local name that became a prop of a sub-view). The script prints the
 * non-blank source lines that no output uses (expected: imports, headers, the lines of a function signature) and
 * fails on a line used twice. It reads the sources at HEAD, so it can run again. Then it runs prettier.
 *
 *   node migration/tools/refactor/f59-b-split.ts [--dry-run]
 *
 * Erasable TypeScript syntax only, so Node 24 runs this file directly.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const appDir = path.join(repoRoot, 'app');

type Range = [number, number];
type Part = string | Range;
interface Output {
  file: string;
  parts: Part[];
  exports?: string[];
  replaceAll?: [string, string][];
}
interface Split {
  source: string;
  outputs: Output[];
}

const dryRun = process.argv.includes('--dry-run');
const EDA = 'app/src/containers/EntityDetailsActions/';
const SS = 'app/src/containers/ShareSheet/';

const EDA_ORIGIN = '/** @origin UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions */\n';
const SS_ORIGIN = '/** @origin UBTConnect_Utils.CW_Share.ShareSheet */\n';

const splits: Split[] = [
  {
    source: EDA + 'EntityDetailsActionsContainer.tsx',
    outputs: [
      {
        file: EDA + 'types.ts',
        parts: [
          EDA_ORIGIN +
            `import type { ActionsMenuEnableOptions } from '@/lib/ubtConnectLibrary/structures';
import type { ContactPopUp_OverrideOptions } from '@/lib/ubtConnectUtils/structures';
`,
          [43, 66],
        ],
      },
      {
        file: EDA + 'entityDetailsActionsState.ts',
        parts: [
          EDA_ORIGIN +
            `import { UserException } from '@/legacy/os/os-exceptions';
import type { ActionsMenuOptions } from '@/lib/ubtConnectLibrary/structures';
import type { ContactPopupData } from '@/lib/ubtConnectUtils/structures';
import { get_NoteCategoryId_ByEntityTypeId, getShareType_FromEntity } from '@/lib/ubtConnect/actions';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import type { fetchContactDetails } from './api';

/* The pure start-up state of the block: the contact defaults and the OnReady set-up of each entity type. The flows:
   useEntityDetailsActions.ts. */
`,
          [68, 140],
        ],
        exports: ['ContactDetails', 'CONTACT_POPUP_DATA_DEFAULT', 'onReadyInit'],
      },
      {
        file: EDA + 'useEntityDetailsActions.ts',
        parts: [
          EDA_ORIGIN +
            `import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { osImage } from '@/lib/os-assets';
import { NotRegisteredException, UserException, isInstanceOf } from '@/legacy/os/os-exceptions';
import { useOsNavigate } from '@/platform/navigation/osNavigate';
import { exceptionMessage, isCommunicationException, isSystemException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { get_LocalBookmarkByObjectId, getLocalBookmarkByObjectId } from '@/platform/storage/localEntities';
import { useClientVar } from '@/platform/session/session';
import { ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT } from '@/lib/ubtConnectLibrary/actions';
import type { ActionsMenuEnableOptions, ActionsMenuOptions, Notes } from '@/lib/ubtConnectLibrary/structures';
import { getHasExtendedShare, getHasNewBookmarks } from '@/lib/ubtConnectUtils/actions';
import type { ContactPopupData } from '@/lib/ubtConnectUtils/structures';
import {
  bookmarkServerActions,
  getBookmarkCategoryId_ByEntityTypeId,
  getBookmarkType_FromEntity,
  getNameAndSurname_ByFullName,
  toggleBookmarkItem_C2,
  type BookmarkServerActions,
} from '@/lib/ubtConnect/actions';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { fetchContactDetails, fetchNotes, type EntityDetailsActionsVariables } from './api';
import { CONTACT_POPUP_DATA_DEFAULT, onReadyInit, type ContactDetails } from './entityDetailsActionsState';
import type { EntityDetailsActionsContainerProps } from './types';

/** The state, the effects and the handlers of the block (OnReady, OnParametersChanged, Handle_*); the view is
    EntityDetailsActionsContainer.tsx. */
export function useEntityDetailsActions({
`,
          [148, 156],
          `}: EntityDetailsActionsContainerProps) {`,
          [158, 421],
          `  return {
    isEnabled,
    entityType,
    entityId,
    onViewDetailsOnClick,
    navigate,
    options,
    localEnableOptions,
    showIconLabels,
    shareType,
    noteCategoryId,
    isLoaded,
    isLoading,
    isBookmarked,
    isBookmarked_C2,
    hasNewBookmarks,
    hasExtendedShare,
    details,
    contact,
    overrideImageURL,
    shareSheetImageURL,
    notes,
    setNotes,
    showEmailPopUp,
    showCallPopUp,
    setShowCallPopUp,
    showSharePopup,
    setShowSharePopup,
    showNotesSheet,
    setShowNotesSheet,
    popupData,
    handleMail,
    handleMailPage,
    onClickBookmark,
    handlerAddNotes,
  };
}
`,
        ],
      },
      {
        file: EDA + 'EntityDetailsActionsContainer.tsx',
        parts: [
          `/** @origin UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions */
// @os-block UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSPopupWidget } from '@/components/ui/os/OSPopup';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { ActionsMenu } from '@/components/ui/ActionsMenu';
import { Skeleton } from '@/components/ui/Skeleton';
import { ContactByMessage } from '@/components/contact/ContactByMessage';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { NotesSheet } from '@/components/note/NotesSheet';
import { ShareableObject } from '@/components/share/ShareableObject';
import { SharePopup } from '@/components/share/SharePopup';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { CONTACT_POPUP_DATA_DEFAULT } from './entityDetailsActionsState';
import type { EntityDetailsActionsContainerProps } from './types';
import { useEntityDetailsActions } from './useEntityDetailsActions';
`,
          [142, 145],
          `export function EntityDetailsActionsContainer(props: EntityDetailsActionsContainerProps) {
  const { id } = props;
  const {
    isEnabled,
    entityType,
    entityId,
    onViewDetailsOnClick,
    navigate,
    options,
    localEnableOptions,
    showIconLabels,
    shareType,
    noteCategoryId,
    isLoaded,
    isLoading,
    isBookmarked,
    isBookmarked_C2,
    hasNewBookmarks,
    hasExtendedShare,
    details,
    contact,
    overrideImageURL,
    shareSheetImageURL,
    notes,
    setNotes,
    showEmailPopUp,
    showCallPopUp,
    setShowCallPopUp,
    showSharePopup,
    setShowSharePopup,
    showNotesSheet,
    setShowNotesSheet,
    popupData,
    handleMail,
    handleMailPage,
    onClickBookmark,
    handlerAddNotes,
  } = useEntityDetailsActions(props);
`,
          [422, 570],
        ],
      },
    ],
  },
  {
    source: SS + 'ShareSheetContainer.tsx',
    outputs: [
      {
        file: SS + 'types.ts',
        parts: [
          SS_ORIGIN +
            `import type { ReactNode } from 'react';
`,
          [45, 61],
          `
/** The input of useShareSheet: the props of the container with their defaults applied. */
export type ShareSheetParams = Required<
  Pick<
    ShareSheetContainerProps,
    'inIsOpen' | 'inShareObjectTypeId' | 'inShareableObjectId' | 'inUpdateType' | 'inUpdateDate'
  >
> &
  Pick<ShareSheetContainerProps, 'onEventClosedShareSheet'>;
`,
        ],
      },
      {
        file: SS + 'shareSheetState.ts',
        parts: [
          SS_ORIGIN +
            `import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';

/* The constants, the local variables and the list helpers of the ShareSheet block. The flows: useShareSheet.ts. */

`,
          [63, 92],
        ],
        exports: ['Locals', 'RESET', 'SEARCH_PROMPT', 'SKELETON', 'MAX_RECIPIENTS', 'horizontalList', 'lastPadding'],
      },
      {
        file: SS + 'useShareSheet.ts',
        parts: [
          SS_ORIGIN +
            `import { useEffect, useId, useRef, useState } from 'react';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { bottomSheetClose, bottomSheetOpen } from '@/components/ui/lib/actions';
import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import { useAvailableMembersQuery } from '@/api/member';
import { csShareObject, useRecentlySharedQuery } from '@/api/share';
import { getUserInformation } from '@/platform/session/userInfo';
import { delaySetIsOpen, scrollToTop, shareSheet_IsSharing } from './jsNodes';
import { MAX_RECIPIENTS, RESET, SKELETON, type Locals } from './shareSheetState';
import type { ShareSheetParams } from './types';

/** The state, the effects and the handlers of the block (OnParametersChanged, Handler_*, Action_*); the view is
    ShareSheetContainer.tsx. */
export function useShareSheet({
  inIsOpen,
  inShareObjectTypeId,
  inShareableObjectId,
  inUpdateType,
  inUpdateDate,
  onEventClosedShareSheet,
}: ShareSheetParams) {
`,
          [106, 242],
          `  return {
    sheetBlockId,
    isOpen,
    isOpenRef,
    onClosed,
    onInitialized,
    resetAndCloseSheetState,
    onBack,
    onSearchFocus,
    onClearString,
    onSubmit,
    sharingRecentMemberId: locals.sharingRecentMemberId,
    isSearchStep,
    isSearching,
    searchTerm,
    selectedMembers,
    recentFetched,
    availableFetched,
    recentlyShared,
    searchResultItemList,
    isSelected,
    onClickRecentMember,
    onSelect,
    onClickSelected,
    onClickSend,
    isSharing,
  };
}
`,
        ],
      },
      {
        file: SS + 'components/ShareSheetFirstStep.tsx',
        parts: [
          SS_ORIGIN +
            `import type { ReactNode } from 'react';
import { CircleButtonWithLabel } from '@/components/ui/CircleButtonWithLabel';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Input } from '@/components/ui/Input';
import { Skeleton } from '@/components/ui/Skeleton';
import { Shape, UBT_Color as LibraryColor } from '@/lib/ubtConnectLibrary/staticEntities';
import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import {
  Connect_Entity,
  UBT_AvatarSize,
  UBT_Color,
  UBT_FontSize,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/lib/ubtConnectUtils/staticEntities';
import { ShareSheetSection } from '@/components/share/ShareSheetSection';
import { ShareSheetSectionTitle } from '@/components/share/ShareSheetSectionTitle';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { horizontalList, lastPadding, SEARCH_PROMPT } from '@/containers/ShareSheet/shareSheetState';

interface ShareSheetFirstStepProps {
  searchTerm: string;
  recentFetched: boolean;
  recentlyShared: SearchResult[];
  sharingRecentMemberId: string;
  onSearchFocus: () => void;
  onClickRecentMember: (item: SearchResult) => void;
  /** Placeholder_ShareableObject. */
  children?: ReactNode;
}

/** The first step of the sheet: the shareable object, the search box and the recently shared members. */
export function ShareSheetFirstStep({
  searchTerm,
  recentFetched,
  recentlyShared,
  sharingRecentMemberId,
  onSearchFocus,
  onClickRecentMember,
  children,
}: ShareSheetFirstStepProps) {
  return (
`,
          [283, 365],
          `  );
}
`,
        ],
        replaceAll: [['locals.sharingRecentMemberId', 'sharingRecentMemberId']],
      },
      {
        file: SS + 'components/ShareSheetSearchStep.tsx',
        parts: [
          SS_ORIGIN +
            `import { CircleButtonWithLabel } from '@/components/ui/CircleButtonWithLabel';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { EmptyState } from '@/components/ui/EmptyState';
import { Icon } from '@/components/ui/Icon';
import { Input } from '@/components/ui/Input';
import { Skeleton } from '@/components/ui/Skeleton';
import { Shape, UBT_Display } from '@/lib/ubtConnectLibrary/staticEntities';
import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import {
  Connect_Entity,
  UBT_AvatarSize,
  UBT_Color,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_IconSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Size,
} from '@/lib/ubtConnectUtils/staticEntities';
import { SearchResultItem } from '@/components/search/SearchResultItem';
import { ShareSheetSection } from '@/components/share/ShareSheetSection';
import { ShareSheetSectionTitle } from '@/components/share/ShareSheetSectionTitle';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { horizontalList, lastPadding, SEARCH_PROMPT } from '@/containers/ShareSheet/shareSheetState';

interface ShareSheetSearchStepProps {
  searchTerm: string;
  isSearching: boolean;
  recentFetched: boolean;
  availableFetched: boolean;
  selectedMembers: SearchResult[];
  searchResultItemList: SearchResult[];
  isSelected: (item: SearchResult) => boolean;
  onSearchFocus: () => void;
  onClearString: () => void;
  onSubmit: (submitted: string) => void;
  onClickSelected: (item: SearchResult) => void;
  onSelect: (item: SearchResult, select: boolean) => void;
}

/** The search step of the sheet: the search box, the selected members and the result list. */
export function ShareSheetSearchStep({
  searchTerm,
  isSearching,
  recentFetched,
  availableFetched,
  selectedMembers,
  searchResultItemList,
  isSelected,
  onSearchFocus,
  onClearString,
  onSubmit,
  onClickSelected,
  onSelect,
}: ShareSheetSearchStepProps) {
  return (
`,
          [368, 497],
          `  );
}
`,
        ],
      },
      {
        file: SS + 'ShareSheetContainer.tsx',
        parts: [
          `/** @origin UBTConnect_Utils.CW_Share.ShareSheet */
// @os-block UBTConnect_Utils.CW_Share.ShareSheet
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { ConnectBottomSheet } from '@/components/ui/ConnectBottomSheet';
import { CustomContainer } from '@/components/ui/CustomContainer';
import {
  UBT_ButtonSize,
  UBT_ButtonType,
  UBT_Color as LibraryColor,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { ActionButton } from '@/components/ui/ActionButton';
import { UBT_Color, UBT_Shape, UBT_Size } from '@/lib/ubtConnectUtils/staticEntities';
import { ShareSheetFirstStep } from './components/ShareSheetFirstStep';
import { ShareSheetSearchStep } from './components/ShareSheetSearchStep';
import type { ShareSheetContainerProps } from './types';
import { useShareSheet } from './useShareSheet';

`,
          [93, 105],
          `  const {
    sheetBlockId,
    isOpen,
    isOpenRef,
    onClosed,
    onInitialized,
    resetAndCloseSheetState,
    onBack,
    onSearchFocus,
    onClearString,
    onSubmit,
    sharingRecentMemberId,
    isSearchStep,
    isSearching,
    searchTerm,
    selectedMembers,
    recentFetched,
    availableFetched,
    recentlyShared,
    searchResultItemList,
    isSelected,
    onClickRecentMember,
    onSelect,
    onClickSelected,
    onClickSend,
    isSharing,
  } = useShareSheet({
    inIsOpen,
    inShareObjectTypeId,
    inShareableObjectId,
    inUpdateType,
    inUpdateDate,
    onEventClosedShareSheet,
  });
`,
          [243, 281],
          `                {!isSearchStep && (
                  <ShareSheetFirstStep
                    searchTerm={searchTerm}
                    recentFetched={recentFetched}
                    recentlyShared={recentlyShared}
                    sharingRecentMemberId={sharingRecentMemberId}
                    onSearchFocus={onSearchFocus}
                    onClickRecentMember={onClickRecentMember}
                  >
                    {children}
                  </ShareSheetFirstStep>
                )}
                {isSearchStep && (
                  <ShareSheetSearchStep
                    searchTerm={searchTerm}
                    isSearching={isSearching}
                    recentFetched={recentFetched}
                    availableFetched={availableFetched}
                    selectedMembers={selectedMembers}
                    searchResultItemList={searchResultItemList}
                    isSelected={isSelected}
                    onSearchFocus={onSearchFocus}
                    onClearString={onClearString}
                    onSubmit={onSubmit}
                    onClickSelected={onClickSelected}
                    onSelect={onSelect}
                  />
                )}
`,
          [499, 530],
        ],
      },
    ],
  },
];

const headCache = new Map<string, string>();
function atHead(file: string): string {
  let text = headCache.get(file);
  if (text === undefined) {
    text = execFileSync('git', ['show', `HEAD:${file}`], { cwd: repoRoot, encoding: 'utf8' });
    headCache.set(file, text);
  }
  return text;
}

const written: string[] = [];
for (const split of splits) {
  console.log(split.source);
  const all = atHead(split.source).split('\n');
  const counts = new Array<number>(all.length).fill(0);
  const take = ([from, to]: Range): string => {
    for (let i = from; i <= to; i += 1) {
      if (all[i - 1] === undefined) throw new Error(`${split.source}: no line ${String(i)}`);
      counts[i - 1] = (counts[i - 1] ?? 0) + 1;
      if ((counts[i - 1] ?? 0) > 1) throw new Error(`${split.source}: line ${String(i)} used twice`);
    }
    return all.slice(from - 1, to).join('\n');
  };
  for (const output of split.outputs) {
    let text = output.parts.map((part) => (typeof part === 'string' ? part : take(part))).join('\n');
    for (const [find, replacement] of output.replaceAll ?? []) {
      if (!text.includes(find)) throw new Error(`${output.file}: "${find}" not found`);
      text = text.split(find).join(replacement);
    }
    for (const name of output.exports ?? []) {
      const pattern = new RegExp(`^(function|const|class|interface|type) ${name}\\b`, 'gm');
      const hits = text.match(pattern) ?? [];
      if (hits.length !== 1) throw new Error(`${output.file}: declaration ${name} found ${String(hits.length)} times`);
      text = text.replace(pattern, (m) => `export ${m}`);
    }
    text = text.replace(/\n*$/, '\n');
    console.log(`  -> ${output.file} (${String(text.split('\n').length - 1)} lines before prettier)`);
    if (!dryRun) {
      fs.mkdirSync(path.dirname(path.join(repoRoot, output.file)), { recursive: true });
      fs.writeFileSync(path.join(repoRoot, output.file), text);
      written.push(output.file);
    }
  }
  all.forEach((line, i) => {
    if (line.trim() !== '' && counts[i] === 0) console.log(`  not copied ${split.source}:${String(i + 1)}: ${line}`);
  });
}

if (!dryRun && written.length > 0) {
  execFileSync(
    path.join(appDir, 'node_modules/.bin/prettier'),
    ['--write', ...written.map((f) => path.join(repoRoot, f))],
    { cwd: appDir, stdio: 'inherit' },
  );
}
