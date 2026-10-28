#!/usr/bin/env node
// Gate for the flow scope (item 8, design A §7.1, migration/clarify/review/item8-solution.md; user 2026-10-28).
// A flow awaits a data action or a query refetch through `flow.fetch(…)` (R1): after the unmount, the answer and the
// failure are dropped and nothing after the await runs. This script lists every `await fetchX(…)` (a function whose
// name starts with `fetch`) and every `await x.refetch(…)` in the hooks of src/pages and src/containers that is not
// `await flow.fetch(…)`. A known exception goes on ALLOWED with its reason; a stale ALLOWED row fails too. A row is
// keyed on the callee (a module or server action: not wrapped anywhere, R2) or on `file | callee` (a local name).
// Usage: node build/check-flow-fetch.mjs (from app/)
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import ts from 'typescript';

const appDir = resolve(import.meta.dirname, '..');
const roots = ['src/pages', 'src/containers'];

const MODULE = 'a module client action (R2: it runs after the unmount)';
const SERVER = 'a server or service action, callAction path without a screen (R2, item8-solution.md §2.5)';
/** Known exceptions with the reason. */
const ALLOWED = new Map([
  ['fetchAssembleEventContacts', `GetCacheableMemberContactList, ${MODULE}`],
  ['fetchUserSubdivision', `GetCacheableUserInfo, ${MODULE}`],
  ['fetchUserSubdivisionId', `GetCacheableUserInfo, ${MODULE}`],
  ['fetchSubscribedCountries', `the subscribed countries, ${MODULE}`],
  ['fetchBookmarkById', `GetBookmarkById (Connect2_MyBookmarks_MUI), ${MODULE}`],
  ['fetchLegacySignedImageURL', `GetCacheableSignedImageURL (Connect2_LegacyShared), ${MODULE}`],
  ['fetchShareDetails', `Get_ShareDetails, ${SERVER}; inside OnInitializeSharingScreen, ${MODULE}`],
  ['fetchHouseholdCoordinatesById', `GetHouseholdCoordinates, ${SERVER}`],
  ['fetchHouseholdShareCard', `GetHouseholdDetails, ${SERVER}`],
  ['fetchCommunityBusinessShareCard', `Get_UI_CommunityBusinessShareCard, ${SERVER}`],
  ['fetchUserIdToken', `AppManager_Get_UserIdToken, ${SERVER}`],
  ['fetchNotePills', `Get_NotePills_ByNoteCategoryIds, ${SERVER}`],
  ['fetchMember', `GetMemberByMemberId, ${SERVER}`],
  ['fetchScanEventQRCode', `GetScanEventQRCode, ${SERVER}`],
  ['src/pages/AssembleEvents/hooks/useAssembleFilterSheet.ts | fetchCountries', 'an own action (flow.own, R3)'],
  ['src/pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts | fetchCountries', 'an own action (flow.own, R3)'],
  ['src/pages/BookmarksByGroup/hooks/useBookmarkGroup.ts | fetchBookmarks', 'a local refresh: flow.fetch is inside'],
  ['src/pages/EventBooklet/hooks/eventBookletDataFlows.ts | fetch', 'the parameter `fetch` is flow.fetch'],
  // Data actions in two hooks outside the item 8 inventory, with no flow scope yet: item8-S5a.md, question Q1.
  ['src/pages/ContactUsDetails/hooks/useContactUsDetails.ts | fetchLocalityTimezone', 'open: item8-S5a.md Q1'],
  [
    'src/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton.ts | fetchEventFilterLocalities',
    'open: item8-S5a.md Q1',
  ],
]);

/** The .ts and .tsx files under a `hooks` folder, without the tests. */
function* hookFiles(dir, inHooks = false) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* hookFiles(path, inHooks || entry.name === 'hooks');
    else if (inHooks && /\.tsx?$/.test(entry.name) && !/\.(test|stories)\.tsx?$/.test(entry.name)) yield path;
  }
}

/** The callee text of the awaited call when it is a fetch* function or a refetch, else null. */
function fetchCallee(expression, file) {
  let e = expression;
  while (ts.isParenthesizedExpression(e) || ts.isAsExpression(e) || ts.isNonNullExpression(e)) e = e.expression;
  if (!ts.isCallExpression(e)) return null;
  const callee = e.expression;
  const name = ts.isIdentifier(callee) ? callee.text : ts.isPropertyAccessExpression(callee) ? callee.name.text : '';
  const text = callee.getText(file);
  if (text === 'flow.fetch') return null;
  return name.startsWith('fetch') || name === 'refetch' ? text : null;
}

const found = [];
for (const root of roots) {
  for (const path of hookFiles(resolve(appDir, root))) {
    const rel = relative(appDir, path).split(sep).join('/');
    const file = ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true);
    const visit = (node) => {
      if (ts.isAwaitExpression(node)) {
        const callee = fetchCallee(node.expression, file);
        if (callee !== null) {
          const line = file.getLineAndCharacterOfPosition(node.getStart(file)).line + 1;
          found.push({ key: `${rel} | ${callee}`, where: `${rel}:${line}`, callee });
        }
      }
      ts.forEachChild(node, visit);
    };
    visit(file);
  }
}

const allowed = (f) => ALLOWED.has(f.key) || ALLOWED.has(f.callee);
const reported = found.filter((f) => !allowed(f));
const stale = [...ALLOWED.keys()].filter((key) => !found.some((f) => f.key === key || f.callee === key));
for (const f of reported) console.error(`${f.where}: await ${f.callee}(…) is not wrapped in flow.fetch(…) (R1)`);
for (const key of stale) console.error(`stale ALLOWED row (no longer found): ${key}`);
if (reported.length > 0 || stale.length > 0) {
  console.error(
    'check-flow-fetch: wrap the data action or the refetch in flow.fetch(…), or add the call to ALLOWED in ' +
      'build/check-flow-fetch.mjs with its reason (docs/guides/page-template.md).',
  );
  process.exit(1);
}
console.log(`check-flow-fetch: ok (${found.length} awaits on the allowed list, ${ALLOWED.size} rows)`);
