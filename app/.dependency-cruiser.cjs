/* Architecture rules for dependency-cruiser (plan v2 section 2.4, rules 3 to 10; section 4.4), plus the rule of
   refactor step P3-1 that keeps a cleaned direction (pages/). The P3-1 to P3-3 rules for src/shared/ went with the
   folder (P7-6). Every rule is an error (P9-1). The violations that remain are frozen in
   .dependency-cruiser-known-violations.json (npm run arch uses --ignore-known; build/check-arch-baselines.mjs fails
   when a row no longer occurs). The file only shrinks.
   Rule 11 (alias imports) is an ESLint rule (no-restricted-imports), not set here. */

/* Story and test files are out of the cycle rule and the folder rules (decision Q11, P3-2, 2026-10-22). A story
   renders a block in the real blocks of the captured screen, and a test uses the helpers it needs, so these files
   import across the folders on purpose: for example, the UBTConnectLibrary layout stories render the real
   BottomBarMenu of UBTConnect. Storybook is a review tool and shows the real blocks. Production code keeps every
   rule: the rules below check every file that is not a story or a test. */
const STORY_OR_TEST = '\\.(stories|test)\\.tsx?$';

/* Rule 9 (P9-1, W38): mock handlers (the folder src/mocks and the files named mocks.ts) and test helpers (the folder src/test) are not production code,
   as the stories and tests above. They may import legacy/os/ to build the wire shapes of the mock server. */
const MOCK_OR_TEST_HELPER = '^src/(mocks|test)/|(^|/)mocks\\.ts$';

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      comment: 'Rule 10: no import cycle anywhere in production code (cycles made only of production modules).',
      severity: 'error',
      from: { pathNot: STORY_OR_TEST },
      to: { circular: true, viaOnly: { pathNot: STORY_OR_TEST } },
    },
    {
      name: 'rule-3-page-not-import-page',
      comment: 'Rule 3: a page does not import another page.',
      severity: 'error',
      from: { path: '^src/pages/([^/]+)/', pathNot: STORY_OR_TEST },
      to: { path: '^src/pages/', pathNot: '^src/pages/$1/' },
    },
    {
      name: 'pages-imported-by-own-route-only',
      comment:
        'Only pages/<Route>/ imports pages/<Route>/: containers/, components/ and every other folder ' +
        'never import pages/ (P2-4 follow-up F1; rule 3 covers the other pages). app/ finds the pages with ' +
        'import.meta.glob, which dependency-cruiser does not follow.',
      severity: 'error',
      from: { pathNot: ['^src/pages/', STORY_OR_TEST] },
      to: { path: '^src/pages/' },
    },
    {
      name: 'rule-4-components-no-upward-import',
      comment: 'Rule 4: components/** does not import api/, platform/, containers/, pages/ or app/.',
      severity: 'error',
      from: { path: '^src/components/', pathNot: STORY_OR_TEST },
      to: { path: '^src/(api|platform|containers|pages|app)/' },
    },
    {
      name: 'rule-5-ui-imports-ui-lib-styles-only',
      comment: 'Rule 5: components/ui/ imports only components/ui/, lib/ and styles/.',
      severity: 'error',
      from: { path: '^src/components/ui/', pathNot: STORY_OR_TEST },
      to: { path: '^src/', pathNot: '^src/(components/ui|lib|styles)/' },
    },
    {
      name: 'rule-6-lib-imports-lib-only',
      comment: 'Rule 6: lib/ imports only lib/.',
      severity: 'error',
      from: { path: '^src/lib/', pathNot: STORY_OR_TEST },
      to: { path: '^src/', pathNot: '^src/lib/' },
    },
    {
      name: 'rule-7-api-domain-imports',
      comment: 'Rule 7: api/<domain>/ imports api/client/, lib/ and legacy/os/ only (and its own domain).',
      severity: 'error',
      from: { path: '^src/api/(?!client/)([^/]+)/', pathNot: STORY_OR_TEST },
      to: { path: '^src/', pathNot: '^src/(api/client|lib|legacy/os|api/$1)/' },
    },
    {
      name: 'rule-8-platform-no-upward-import',
      comment: 'Rule 8: platform/** does not import pages/, components/, containers/ or app/.',
      severity: 'error',
      from: { path: '^src/platform/', pathNot: STORY_OR_TEST },
      to: { path: '^src/(pages|components|containers|app)/' },
    },
    {
      name: 'rule-9-legacy-os-importers',
      comment: 'Rule 9: only platform/, api/ and app/ import legacy/os/ (it may import itself).',
      severity: 'error',
      from: { pathNot: ['^src/(platform|api|app|legacy/os)/', STORY_OR_TEST, MOCK_OR_TEST_HELPER] },
      to: { path: '^src/legacy/os/' },
    },
  ],
  options: {
    doNotFollow: { path: 'node_modules' },
    tsConfig: { fileName: 'tsconfig.json' },
    tsPreCompilationDeps: true,
    exclude: { path: '\\.d\\.ts$' },
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'require', 'node', 'default', 'types'],
      mainFields: ['module', 'main', 'types'],
    },
  },
};
