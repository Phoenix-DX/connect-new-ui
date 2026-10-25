/**
 * F59-a (user, 2026-10-25): split four component files of over 400 lines into modules of 400 lines or less.
 *
 * Cut and paste: each output file is written header text (imports, a short comment) plus line ranges of the file at
 * HEAD, copied as they are (parts joined with a newline: a text part that ends with a newline leaves a blank line).
 * Changes to the copied lines:
 * - `export` before a declaration that another module of the split now imports (list `exports`);
 * - connect2Feed.ts: the module-level `let` variables become fields of one shared record `sdk` (ts-morph renames each
 *   reference), because an ES module cannot assign another module's variable;
 * - the `replace` list of an output (one type written with the alias of the moved type, so no second legacy importer).
 * The script prints the non-blank source lines that no output uses (expected: replaced imports and headers) and fails
 * on a line used twice. It reads the sources at HEAD, so it can run again. Then it runs prettier on the outputs.
 *
 *   node migration/tools/refactor/f59-a-split.ts [--dry-run]
 *
 * Erasable TypeScript syntax only, so Node 24 runs this file directly.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const appDir = path.join(repoRoot, 'app');
const require = createRequire(path.join(appDir, 'package.json'));
const { Project, SyntaxKind } = require('ts-morph');

type Range = [number, number];
type Part = string | Range | { from: string; lines: Range };
interface Output {
  file: string;
  parts: Part[];
  exports?: string[];
  replace?: [string, string][];
}
interface Split {
  source: string;
  transform?: (text: string) => string;
  outputs: Output[];
}

const dryRun = process.argv.includes('--dry-run');

/** Module-level `let` variables → `<record>.<name>` at every reference (the declarations themselves are not copied). */
function letsToRecord(record: string) {
  return (text: string): string => {
    const project = new Project({ useInMemoryFileSystem: true, compilerOptions: { strict: true } });
    const sf = project.createSourceFile('/source.ts', text);
    const edits: { start: number; end: number; text: string }[] = [];
    for (const statement of sf.getVariableStatements()) {
      if (statement.getDeclarationKind() !== 'let') continue;
      for (const declaration of statement.getDeclarations()) {
        const nameNode = declaration.getNameNode();
        const name = nameNode.getText();
        for (const ref of nameNode.findReferencesAsNodes()) {
          if (ref === nameNode || ref.getSourceFile() !== sf) continue;
          if (ref.getParent()?.getKind() === SyntaxKind.ShorthandPropertyAssignment)
            throw new Error(`shorthand property ${name} at ${String(ref.getStartLineNumber())}`);
          edits.push({ start: ref.getStart(), end: ref.getEnd(), text: `${record}.${name}` });
        }
      }
    }
    edits.sort((a, b) => b.start - a.start);
    let out = text;
    for (const edit of edits) out = out.slice(0, edit.start) + edit.text + out.slice(edit.end);
    console.log(`  ${String(edits.length)} references renamed to ${record}.<name>`);
    return out;
  };
}

const C2F = 'app/src/components/feed/FeedCms/';
const FS = 'app/src/components/filter/FilterSheet/';
const OSL = 'app/src/components/ui/os/OSList/';
const DDS = 'app/src/components/ui/DropdownSearch/';

const splits: Split[] = [
  {
    source: FS + 'FilterSheet.tsx',
    outputs: [
      {
        file: FS + 'types.ts',
        parts: [
          `import type { CacheControl_AllCountriesRec as AllCountries } from '@/legacy/os/cache/AllCountriesCacheControl';
import type {
  CacheControl_AllLocalities as AllLocalities,
  Directory_UserCurrent,
} from '@/lib/ubtConnectUtils/structures';
import type { Filter_Common_Control_Choice, Filter_Common_Control_List } from '@/lib/ubtConnect/structures';
`,
          { from: FS + 'types.ts', lines: [1, 6] },
          '',
          [45, 61],
        ],
      },
      {
        file: FS + 'filterSheetState.ts',
        parts: [
          `/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet */
import type { CacheControl_AllLocalities as AllLocalities } from '@/lib/ubtConnectUtils/structures';
import type { Filter_Common_Control_List, FilterSheetCountry, FilterSheetSubscription, OptionControl } from './types';

/* The constants, the helpers and the variables record of the FilterSheet block. The actions: filterSheetActions.ts. */
`,
          [103, 133],
        ],
        exports: [
          'SUBSTATE_MAIN',
          'SUBSTATE_LOCALITIES',
          'SUBSTATE_COUNTRIES',
          'SORTBY_TITLE',
          'sameId',
          'clone',
          'same',
          'emptyControl',
          'isFetched',
          'byOrder',
          'Vars',
        ],
        replace: [
          [
            "countries: { list: AllCountries['CountryList']['List']; isFetched: boolean };",
            'countries: { list: FilterSheetCountry[]; isFetched: boolean };',
          ],
        ],
      },
      {
        file: FS + 'filterSheetActions.ts',
        parts: [
          `/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet */
import type { CacheControl_AllLocalities as AllLocalities } from '@/lib/ubtConnectUtils/structures';
import type { SelectionOption_Item } from '@/lib/ubtConnectLibrary/structures';
import { bottomSheetClose } from '@/components/ui/lib/actions';
import { app_CommonFilter_CheckCountry, app_CommonFilter_DefineOptionNames } from '@/lib/ubtConnect/actions';
import { Choice, Connect_Subscription_Plan } from '@/lib/ubtConnect/staticEntities';
import {
  byOrder,
  clone,
  same,
  sameId,
  SORTBY_TITLE,
  SUBSTATE_COUNTRIES,
  SUBSTATE_LOCALITIES,
  SUBSTATE_MAIN,
  type Vars,
} from './filterSheetState';
import type {
  Filter_Common,
  Filter_Common_Control_List,
  Filter_Common_Options,
  FilterSheetBackNavigationEvent,
  FilterSheetSubscription,
} from './types';
`,
          [135, 381],
        ],
        exports: ['createActions'],
      },
      {
        file: FS + 'useFilterSheet.ts',
        parts: [
          `/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet */
import { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import { Connect_Subscription_Plan } from '@/lib/ubtConnect/staticEntities';
import { createActions } from './filterSheetActions';
import { emptyControl, SUBSTATE_MAIN, type Vars } from './filterSheetState';
import type {
  Filter_Common,
  Filter_Common_Options,
  FilterSheetCountry,
  FilterSheetLocality,
  FilterSheetSubscription,
} from './types';
`,
          [383, 413],
          `
/** The props of FilterSheet that its state reads. */
interface FilterSheetStateProps {
  inOptions: Filter_Common_Options;
  inStartFilter: Filter_Common;
  countries: FilterSheetCountry[] | undefined;
  localities: FilterSheetLocality[] | undefined;
  userSubscription: FilterSheetSubscription | undefined;
  onLoaded: ((showSubscriptionOnClick: boolean) => void) | undefined;
}

/** The state of the FilterSheet block: its model (one per block), \`run\` (an action, then a render) and the flows of
    the inputs: OnInitialize and OnParametersChanged, and the Result handlers of the three cache blocks. */
export function useFilterSheet({
  inOptions,
  inStartFilter,
  countries,
  localities,
  userSubscription,
  onLoaded,
}: FilterSheetStateProps) {`,
          [439, 491],
          `  return { model, actions, run, rerender };
}
`,
        ],
      },
      {
        file: FS + 'FilterSheet.tsx',
        parts: [
          [1, 2],
          "import type { ReactNode } from 'react';",
          [4, 4],
          [10, 31],
          "import type { ContainerOptions } from '@/lib/ubtConnectLibrary/structures';",
          [34, 35],
          `import { isFetched, same, SORTBY_TITLE, SUBSTATE_COUNTRIES, SUBSTATE_LOCALITIES, SUBSTATE_MAIN } from './filterSheetState';
import type {
  Filter_Common,
  Filter_Common_Control_Choice,
  Filter_Common_Control_List,
  Filter_Common_Options,
  FilterSheetBackNavigationEvent,
  FilterSheetCountry,
  FilterSheetLocality,
  FilterSheetSubscription,
} from './types';
import { useFilterSheet } from './useFilterSheet';
`,
          [63, 102],
          [415, 438],
          `  const { model, actions, run, rerender } = useFilterSheet({
    inOptions,
    inStartFilter,
    countries,
    localities,
    userSubscription,
    onLoaded,
  });`,
          [492, 695],
        ],
      },
    ],
  },
  {
    source: C2F + 'connect2Feed.ts',
    transform: letsToRecord('sdk'),
    outputs: [
      {
        file: C2F + 'connect2FeedState.ts',
        parts: [
          `/* Connect2Feed embed SDK port (connect2Feed.ts): the configuration and the private variables of the SDK. */
`,
          [7, 79],
          `/** The private variables of the SDK (its closure in the original), in one record that the modules of the port
    share. */
interface Connect2FeedState {
  config: Connect2FeedConfig;
  iframe: HTMLIFrameElement | null;
  isReady: boolean;
  pendingToken: string | null;
  itemIframes: Record<string, HTMLIFrameElement | undefined>;
  itemHandlers: Record<string, ((event: MessageEvent) => void) | undefined>;
  preloadIframe: HTMLIFrameElement | null;
  configureResolve: (() => void) | null;
  configurePromise: Promise<void> | null;
  configureTimeout: ReturnType<typeof setTimeout> | null;
  hasEmittedComplete: boolean;
  isConfigured: boolean;
}

export const sdk: Connect2FeedState = {
  config: defaults(),
  iframe: null,
  isReady: false,
  pendingToken: null,
  itemIframes: {},
  itemHandlers: {},
  preloadIframe: null,
  configureResolve: null,
  configurePromise: null,
  configureTimeout: null,
  hasEmittedComplete: false,
  isConfigured: false,
};
`,
          [93, 100],
        ],
        exports: ['defaults', 'baseUrl', 'mergeConfig'],
      },
      {
        file: C2F + 'connect2FeedIframe.ts',
        parts: [
          `import { baseUrl, sdk } from './connect2FeedState';

/* Connect2Feed embed SDK port (connect2Feed.ts): the feed iframe and its URL, the token identity, the auth and theme
   messages, and the removal of stale or outdated iframes. */
`,
          [102, 207],
          [369, 426],
        ],
        exports: [
          'addPreconnect',
          'markIdentity',
          'createIframe',
          'authMessage',
          'themeMessage',
          'sendToken',
          'refreshToken',
          'setTheme',
          'isIframeAttached',
          'discardForFeedIdChange',
          'discardForIdentityChange',
          'resetStaleState',
        ],
      },
      {
        file: C2F + 'connect2FeedMessages.ts',
        parts: [
          `import { baseUrl, sdk, type FeedMessage } from './connect2FeedState';
import { authMessage, themeMessage } from './connect2FeedIframe';

/* Connect2Feed embed SDK port (connect2Feed.ts): the messages of the feed iframe. */
`,
          [208, 309],
        ],
        exports: ['handleMessage', 'resendAuth'],
      },
      {
        file: C2F + 'connect2FeedItems.ts',
        parts: [
          `import { baseUrl, sdk, type FeedMessage } from './connect2FeedState';
import { authMessage, isIframeAttached, themeMessage } from './connect2FeedIframe';

/* Connect2Feed embed SDK port (connect2Feed.ts): the feed item iframes and their messages. */
`,
          [468, 608],
        ],
        exports: ['openFeedItem', 'closeFeedItem'],
      },
      {
        file: C2F + 'connect2Feed.ts',
        parts: [
          [1, 6],
          `/* The port is split by concern: connect2FeedState.ts (configuration, private variables), connect2FeedIframe.ts (the
   feed iframe), connect2FeedMessages.ts (its messages) and connect2FeedItems.ts (feed item iframes). */
import {
  addPreconnect,
  buildEmbedUrl,
  createIframe,
  discardForFeedIdChange,
  discardForIdentityChange,
  isIframeAttached,
  markIdentity,
  refreshToken,
  resetStaleState,
  sendToken,
  setTheme,
} from './connect2FeedIframe';
import { closeFeedItem, openFeedItem } from './connect2FeedItems';
import { handleMessage, resendAuth } from './connect2FeedMessages';
import {
  baseUrl,
  defaults,
  mergeConfig,
  sdk,
  type Connect2FeedConfig,
  type Connect2FeedUserConfig,
} from './connect2FeedState';
`,
          [311, 368],
          [428, 467],
          [610, 652],
        ],
      },
    ],
  },
  {
    source: OSL + 'OSListItem.tsx',
    outputs: [
      {
        file: OSL + 'Swipeable.tsx',
        parts: [
          `import { Component, type MouseEvent, type ReactNode, type TouchEvent } from 'react';

/* OutSystems platform ListItem widget (OSWidgets.ListItem), ported from OutSystemsReactWidgets.js: the touch tracking
   of the content. Line references \`W:<n>\`: see OSListItem.tsx. */
`,
          [35, 116],
        ],
        exports: ['Swipeable'],
      },
      {
        file: OSL + 'ListItemSwipeable.tsx',
        parts: [
          `import {
  Component,
  createRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  type RefObject,
  type TouchEvent,
} from 'react';
import { Swipeable } from './Swipeable';

/* OutSystems platform ListItem widget (OSWidgets.ListItem), ported from OutSystemsReactWidgets.js: the ListItem with
   action placeholders. Line references \`W:<n>\`: see OSListItem.tsx. */
`,
          [118, 470],
        ],
        exports: ['ListItemSwipeable'],
      },
      {
        file: OSL + 'OSListItem.tsx',
        parts: [
          `import { useRef, type MouseEvent, type ReactNode } from 'react';
import { ListItemSwipeable } from './ListItemSwipeable';`,
          [11, 14],
          `   migration/runtime-sources/OutSystemsReactWidgets.js). The swipe: ListItemSwipeable.tsx and Swipeable.tsx. */`,
          [16, 34],
          [472, 574],
        ],
      },
    ],
  },
  {
    source: DDS + 'provider.ts',
    outputs: [
      {
        file: DDS + 'providerConfig.ts',
        parts: [
          `/* OutSystems UI Dropdown Search provider glue for Virtual Select, ported from
   migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js ("U"): the configs AbstractVirtualSelectConfig
   (U:20193-20339), Enum (U:20353-20399) and VirtualSelectSearchConfig (U:20528-20569). The provider: provider.ts. */
`,
          [9, 60],
          [75, 219],
        ],
        exports: ['CssClass'],
      },
      {
        file: DDS + 'provider.ts',
        parts: [
          [1, 2],
          `import {
  CssClass,
  providerConfig,
  type DropdownOptionJson,
  type DropdownSearchConfig,
  type DropdownSearchProperty,
  type DropdownVariant,
} from './providerConfig';

/* OutSystems UI Dropdown Search provider glue for Virtual Select, ported from
   migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js ("U"): Providers.OSUI.Dropdown.VirtualSelect
   AbstractVirtualSelect (U:19923-20179) and Search.OSUIVirtualSelectSearch (U:20485-20511). The configs:
   providerConfig.ts. */
`,
          [61, 74],
          [221, 412],
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
  const sourceText = split.transform ? split.transform(atHead(split.source)) : atHead(split.source);
  const lines = new Map<string, string[]>([[split.source, sourceText.split('\n')]]);
  const used = new Map<string, number[]>();
  const linesOf = (file: string): string[] => {
    let l = lines.get(file);
    if (!l) {
      l = atHead(file).split('\n');
      lines.set(file, l);
    }
    return l;
  };
  const take = (file: string, [from, to]: Range): string => {
    const all = linesOf(file);
    const counts = used.get(file) ?? new Array<number>(all.length).fill(0);
    used.set(file, counts);
    for (let i = from; i <= to; i += 1) {
      if (all[i - 1] === undefined) throw new Error(`${file}: no line ${String(i)}`);
      counts[i - 1] = (counts[i - 1] ?? 0) + 1;
      if ((counts[i - 1] ?? 0) > 1) throw new Error(`${file}: line ${String(i)} used twice`);
    }
    return all.slice(from - 1, to).join('\n');
  };
  for (const output of split.outputs) {
    let text = output.parts
      .map((part) =>
        typeof part === 'string' ? part : Array.isArray(part) ? take(split.source, part) : take(part.from, part.lines),
      )
      .join('\n');
    for (const [find, replacement] of output.replace ?? []) {
      if (text.split(find).length !== 2) throw new Error(`${output.file}: "${find}" not found once`);
      text = text.replace(find, replacement);
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
      fs.writeFileSync(path.join(repoRoot, output.file), text);
      written.push(output.file);
    }
  }
  for (const [file, counts] of used) {
    const all = linesOf(file);
    const skipped = all
      .map((line, i) => ({ line, n: i + 1 }))
      .filter(({ line, n }) => line.trim() !== '' && (counts[n - 1] ?? 0) === 0);
    for (const { line, n } of skipped) console.log(`  not copied ${file}:${String(n)}: ${line}`);
  }
}

if (!dryRun && written.length > 0) {
  execFileSync(
    path.join(appDir, 'node_modules/.bin/prettier'),
    ['--write', ...written.map((f) => path.join(repoRoot, f))],
    {
      cwd: appDir,
      stdio: 'inherit',
    },
  );
}
