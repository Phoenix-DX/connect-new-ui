/**
 * F59-c (user, 2026-10-25): split four page files of over 400 lines into modules of 400 lines or less.
 *
 * Cut and paste: each output file is written header text (imports, a short comment) plus line ranges of the file at
 * HEAD (the wip(F58) commit), copied as they are (parts joined with a newline: an empty part leaves a blank line).
 * The script prints the non-blank source lines that no output uses (expected: imports, headers, the lines of a
 * function signature) and fails on a line used twice. It reads the sources at HEAD, so it can run again. Then it
 * runs prettier. The import lines of the files that import a moved name are changed by hand (list in dev.md).
 *
 *   node migration/tools/refactor/f59-c-split.ts [--dry-run]
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
const EB = 'app/src/pages/EventBooklet/hooks/';
const US = 'app/src/pages/Updates_SingleList/hooks/';
const BG = 'app/src/pages/BookmarksByGroup/components/';

const EB_ORIGIN =
  '/** @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */\n';

const splits: Split[] = [
  {
    source: EB + 'eventBookletState.ts',
    outputs: [
      {
        file: EB + 'eventBookletTypes.ts',
        parts: [
          EB_ORIGIN +
            `import type {
  EventBookletEventInfo,
  EventBookletFiltersResponse,
  EventBookletMember,
  EventBookletPaginationSettings,
  EventBookletSelectedFilters,
} from '@/api/event';
import type { LocalHelperRole } from '@/platform/storage/localEntities';
import type {
  BookletMembersByLocality,
  BookletMembersByRole,
  CurrentFilters,
  PopupFilters,
} from '@/pages/EventBooklet/types';

/* The types of the event booklet state: the variables and the assignments of the block flows. The reducer:
   eventBookletState.ts. */
`,
          [21, 104],
        ],
        exports: [],
      },
      {
        file: EB + 'eventBookletLists.ts',
        parts: [
          EB_ORIGIN +
            `import type { EventBookletMember, EventBookletSelectedFilters } from '@/api/event';
import type { LocalHelperRole } from '@/platform/storage/localEntities';
import type { DayFilter } from '@/lib/orbit/structures';
import type { BookletMembersByLocality, BookletMembersByRole } from '@/pages/EventBooklet/types';

/* The pure list helpers of the event booklet block: the grouping of the members and the filter checks. */
`,
          [182, 240],
        ],
      },
      {
        file: EB + 'eventBookletState.ts',
        parts: [
          `import type {
  EventBookletEventInfo,
  EventBookletFiltersResponse,
  EventBookletPaginationSettings,
  EventBookletSelectedFilters,
} from '@/api/event';
import type { CurrentFilters, PopupFilters } from '@/pages/EventBooklet/types';
import {
  filtersApplied,
  getHelperRoleByJSON_Name,
  groupHelpersByRole,
  groupMembersByCountry,
} from './eventBookletLists';
import type { EventBookletAction, EventBookletState } from './eventBookletTypes';
`,
          '',
          '/** The reducer, the defaults and the client actions of the event booklet block. The types: eventBookletTypes.ts;',
          '    the list helpers: eventBookletLists.ts.',
          '    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */',
          '',
          [106, 180],
          '',
          [242, 482],
        ],
      },
    ],
  },
  {
    source: EB + 'useEventBooklet.ts',
    outputs: [
      {
        file: EB + 'eventBookletDataFlows.ts',
        parts: [
          `import {
  fetchEventBookletFilters,
  fetchEventBookletGuests,
  fetchEventBookletHelpers,
  toEventBookletPaginationInput,
  toEventBookletSelectedFiltersInput,
  type EventBookletCallInputs,
  type EventBookletMember,
} from '@/api/event';
import type { EventBookletInputs } from '@/pages/EventBooklet/inputs';
import { clientVar } from '@/platform/session/session';
import { getLocalHelperRoles } from '@/platform/storage/localEntities';
import type { EventBookletAction, EventBookletState } from './eventBookletTypes';

/** The data flows of the event booklet block: the Refresh* actions with their OnAfterFetch_* tails, and the view and
    pagination resets. They read the newest variables (\`vars\`) and assign through \`write\`; useEventBooklet.ts gives
    them both. It is named as a hook (it calls none) so that the React compiler lets the view hook pass the ref-reading
    functions.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */

`,
          [80, 81],
          '',
          `export function useEventBookletDataFlows(
  write: (action: EventBookletAction) => void,
  vars: () => EventBookletState,
  parameters: { current: EventBookletInputs },
  asUnknownError: (e: unknown) => never,
) {`,
          [171, 186],
          [196, 303],
          `
  return {
    setCurrentView,
    resetPaginationSettings,
    resetData,
    onAfterFetchGetEventBookletFilters,
    refreshHelperRoles,
    refreshEventFilters,
    refreshEventGuests,
    refreshEventHelpers,
    refreshCurrentView,
  };
}
`,
        ],
      },
      {
        file: EB + 'useEventBooklet.ts',
        parts: [
          `import { useRef } from 'react';
import { UserException, exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import type { EventBookletInputs } from '@/pages/EventBooklet/inputs';
import type { PopupFilters } from '@/pages/EventBooklet/types';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import { useFlowState, type BackNavigationEvent, type IsAlive } from '@/platform/navigation';
import { checkDirectoryAccess, setBookletMaxRows } from '@/lib/orbit/actions';
import { DirectoryAPIFilter } from '@/lib/orbit/staticEntities';
import { useEventBookletDataFlows } from './eventBookletDataFlows';
import {
  canFetchNextPage,
  eventBookletReducer,
  INITIAL_EVENT_BOOKLET_STATE,
  restoreEventBookletState,
  searchInputId,
} from './eventBookletState';
import type { EventBookletAction, EventBookletState } from './eventBookletTypes';
`,
          '',
          [33, 79],
          [82, 170],
          '',
          [187, 195],
          `
  /* The Refresh* actions and the resets (eventBookletDataFlows.ts). */
  const {
    setCurrentView,
    resetPaginationSettings,
    resetData,
    onAfterFetchGetEventBookletFilters,
    refreshHelperRoles,
    refreshEventFilters,
    refreshEventGuests,
    refreshEventHelpers,
    refreshCurrentView,
  } = useEventBookletDataFlows(write, vars, parameters, asUnknownError);
`,
          [304, 494],
        ],
      },
    ],
  },
  {
    source: US + 'useUpdatesSingleList.ts',
    outputs: [
      {
        file: US + 'updatesSingleListFlows.ts',
        parts: [
          `import type { FilterUpdates, UpdateBreakpoint, UpdateItem } from '@/api/update';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import type { UpdatesSingleListState } from './updatesSingleListState';

/* The flags and the flows that useUpdatesSingleList gives the page.
   @origin UBTConnect.Directory_Updates.Updates_SingleList */

`,
          [41, 85],
        ],
      },
      {
        file: US + 'useUpdatesSingleList.ts',
        parts: [
          `import { useEffect, useRef } from 'react';
import {
  fetchUpdateDateRangeIds,
  fetchUpdatesList,
  markAllUpdateItemsAsRead,
  markUpdateItemAsRead,
  markUpdateItemAsUnread,
  type FilterUpdates,
  type UpdateItem,
} from '@/api/update';`,
          [12, 39],
          `import type { UpdatesSingleListFlags, UpdatesSingleListFlows } from './updatesSingleListFlows';`,
          [86, 408],
        ],
      },
    ],
  },
  {
    source: BG + 'BookmarkGroupView.tsx',
    outputs: [
      {
        file: BG + 'bookmarkGroupRows.tsx',
        parts: [
          `import type { Bookmark } from '@/api/bookmark';
import { ItemOptionsMenu } from '@/components/bookmark/ItemOptionsMenu';
import { ResultItemImage } from '@/components/ui/ResultItemImage';
import { osImage } from '@/lib/os-assets';
import { ResultListType } from '@/lib/legacyShared/staticEntities';
import {
  Connect_Entity,
  MyBookmarks_ObjectType,
  Type_ShareObject_SupperMeeting,
} from '@/pages/BookmarksByGroup/staticEntities';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { ScrollAnchor } from '@/platform/navigation/ScrollAnchor';
import { LegacyResultItemBadge } from './LegacyResultItemBadge';

/** The rows of the three lists of the bookmark group block (Contacts, Locations, Entities), as render functions of
    the view: no hooks, the view calls the factory at each render.
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup */

/** What the rows read from the view: the instance scope, the list, the flags and the row events. */
interface BookmarkRowsContext {
  /** The instance id of the block without \`$\`. */
  scope: string;
  items: readonly Bookmark[];
  hasBookmarkNote: boolean;
  hasExtendedShare: boolean;
  onClickBookmarkedItem: (bookmarkItemId: string, currentRowNumber: number) => void;
  onBookmarkToggle: (bookmarkId: string, currentPosition: number) => void;
  onShareItem: (
    item: Bookmark,
    shareObjectTypeId: string,
    objectId: string,
    isRecordDisabled: boolean,
    entityTypeId: string,
  ) => void;
}

`,
          [77, 85],
          '',
          `export function createBookmarkRows({
  scope,
  items,
  hasBookmarkNote,
  hasExtendedShare,
  onClickBookmarkedItem,
  onBookmarkToggle,
  onShareItem,
}: BookmarkRowsContext) {`,
          [107, 347],
          `
  return { contactRow, locationRow, entityRow };
}
`,
        ],
      },
      {
        file: BG + 'BookmarkGroupView.tsx',
        parts: [
          `import type { ReactNode } from 'react';
import type { Bookmark } from '@/api/bookmark';
import { NoBookmarks } from '@/components/bookmark/NoBookmarks';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { MyBookmarks_Group } from '@/pages/BookmarksByGroup/staticEntities';
import type { BookmarkNote } from '@/pages/BookmarksByGroup/types';
import { MenuAction } from '@/lib/legacyShared/staticEntities';
import { MessageListNoResults } from '@/components/ui/MessageListNoResults';
import { Spinner } from '@/components/ui/Spinner';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';
import { BookmarkNoteAddEdit } from './BookmarkNoteAddEdit';
import { BookmarkNoteDelete } from './BookmarkNoteDelete';
import { createBookmarkRows } from './bookmarkGroupRows';
`,
          [27, 76],
          [86, 105],
          `
  const { contactRow, locationRow, entityRow } = createBookmarkRows({
    scope,
    items,
    hasBookmarkNote,
    hasExtendedShare,
    onClickBookmarkedItem,
    onBookmarkToggle,
    onShareItem,
  });

`,
          [349, 439],
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
