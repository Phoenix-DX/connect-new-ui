/* Architecture rules for dependency-cruiser (plan v2 section 2.4, rules 3 to 10; section 4.4), plus the rules of the
   refactor steps that keep a cleaned direction (P3-1: pages/ and shared/; P3-2: the three UBTConnect modules; P3-3:
   shared/osui, Connect2_LegacyShared and UBTConnect, Connect2_Assemble_MUI and Connect2_MyBookmarks_MUI).
   no-circular is an error. The folder rules are warnings until Phase 9 turns them into errors. The target folders
   (pages/, containers/, platform/, legacy/os/) do not exist before Phase 1: the regexes apply when they appear.
   Rule 11 (alias imports) is an ESLint rule (no-restricted-imports), not set here. */

/* Story and test files are out of the cycle rule and the folder rules (decision Q11, P3-2, 2026-10-22). A story
   renders a block in the real blocks of the captured screen, and a test uses the helpers it needs, so these files
   import across the folders on purpose: for example, the UBTConnectLibrary layout stories render the real
   BottomBarMenu of UBTConnect. Storybook is a review tool and shows the real blocks. Production code keeps every
   rule: the rules below check every file that is not a story or a test. */
const STORY_OR_TEST = '\\.(stories|test)\\.tsx?$';

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
      severity: 'warn',
      from: { path: '^src/pages/([^/]+)/', pathNot: STORY_OR_TEST },
      to: { path: '^src/pages/', pathNot: '^src/pages/$1/' },
    },
    {
      name: 'pages-imported-by-own-route-only',
      comment:
        'Only pages/<Route>/ imports pages/<Route>/: containers/, components/, shared/, screens/ and every other folder ' +
        'never import pages/ (P2-4 follow-up F1; rule 3 covers the other pages). app/ finds the pages with ' +
        'import.meta.glob, which dependency-cruiser does not follow.',
      severity: 'warn',
      from: { pathNot: ['^src/pages/', STORY_OR_TEST] },
      to: { path: '^src/pages/' },
    },
    {
      name: 'shared-no-import-of-screens-or-app',
      comment:
        'P3-1: shared/ does not import screens/ or app/. Values come through props or a platform/ module or context.',
      severity: 'warn',
      from: { path: '^src/shared/', pathNot: STORY_OR_TEST },
      to: { path: '^src/(screens|app)/' },
    },
    {
      name: 'ubtconnect-library-no-import-of-utils-or-ubtconnect',
      comment:
        'P3-2: the three UBTConnect modules import in one direction: UBTConnect, then UBTConnect_Utils, then ' +
        'UBTConnectLibrary. shared/UBTConnectLibrary/ does not import shared/UBTConnect_Utils/ or shared/UBTConnect/ ' +
        '(its stories may: decision Q11, see STORY_OR_TEST).',
      severity: 'warn',
      from: { path: '^src/shared/UBTConnectLibrary/', pathNot: STORY_OR_TEST },
      to: { path: '^src/shared/(UBTConnect|UBTConnect_Utils)/' },
    },
    {
      name: 'ubtconnect-utils-no-import-of-ubtconnect',
      comment: 'P3-2: shared/UBTConnect_Utils/ does not import shared/UBTConnect/ (same direction as the rule above).',
      severity: 'warn',
      from: { path: '^src/shared/UBTConnect_Utils/', pathNot: STORY_OR_TEST },
      to: { path: '^src/shared/UBTConnect/' },
    },
    {
      name: 'osui-no-import-of-app-modules',
      comment:
        'P3-3: shared/osui/ is generic UI (OutSystems UI patterns). It does not import the app modules in shared/ ' +
        '(UBTConnect, UBTConnectLibrary, UBTConnect_Utils, Connect2_*, ...); it may import shared/lib/. Its stories ' +
        'and tests may (decision Q11, see STORY_OR_TEST).',
      severity: 'warn',
      from: { path: '^src/shared/osui/', pathNot: STORY_OR_TEST },
      to: { path: '^src/shared/', pathNot: '^src/shared/(osui|lib)/' },
    },
    {
      name: 'legacyshared-no-import-of-ubtconnect',
      comment:
        'P3-3: shared/UBTConnect/ imports shared/Connect2_LegacyShared/, so shared/Connect2_LegacyShared/ does not ' +
        'import shared/UBTConnect/ (its stories may: decision Q11).',
      severity: 'warn',
      from: { path: '^src/shared/Connect2_LegacyShared/', pathNot: STORY_OR_TEST },
      to: { path: '^src/shared/UBTConnect/' },
    },
    {
      name: 'mybookmarks-no-import-of-assemble',
      comment:
        'P3-3: shared/Connect2_Assemble_MUI/ imports shared/Connect2_MyBookmarks_MUI/ (the legacy bookmark mocks), so ' +
        'shared/Connect2_MyBookmarks_MUI/ does not import shared/Connect2_Assemble_MUI/.',
      severity: 'warn',
      from: { path: '^src/shared/Connect2_MyBookmarks_MUI/', pathNot: STORY_OR_TEST },
      to: { path: '^src/shared/Connect2_Assemble_MUI/' },
    },
    {
      name: 'rule-4-components-no-upward-import',
      comment: 'Rule 4: components/** does not import api/, platform/, containers/, pages/ or app/.',
      severity: 'warn',
      from: { path: '^src/components/', pathNot: STORY_OR_TEST },
      to: { path: '^src/(api|platform|containers|pages|app)/' },
    },
    {
      name: 'rule-5-ui-imports-ui-lib-styles-only',
      comment: 'Rule 5: components/ui/ imports only components/ui/, lib/ and styles/.',
      severity: 'warn',
      from: { path: '^src/components/ui/', pathNot: STORY_OR_TEST },
      to: { path: '^src/', pathNot: '^src/(components/ui|lib|styles)/' },
    },
    {
      name: 'rule-6-lib-imports-lib-only',
      comment: 'Rule 6: lib/ imports only lib/.',
      severity: 'warn',
      from: { path: '^src/lib/', pathNot: STORY_OR_TEST },
      to: { path: '^src/', pathNot: '^src/lib/' },
    },
    {
      name: 'rule-7-api-domain-imports',
      comment: 'Rule 7: api/<domain>/ imports api/client/, lib/ and legacy/os/ only (and its own domain).',
      severity: 'warn',
      from: { path: '^src/api/(?!client/)([^/]+)/', pathNot: STORY_OR_TEST },
      to: { path: '^src/', pathNot: '^src/(api/client|lib|legacy/os|api/$1)/' },
    },
    {
      name: 'rule-8-platform-no-upward-import',
      comment: 'Rule 8: platform/** does not import pages/, components/, containers/ or app/.',
      severity: 'warn',
      from: { path: '^src/platform/', pathNot: STORY_OR_TEST },
      to: { path: '^src/(pages|components|containers|app)/' },
    },
    {
      name: 'rule-9-legacy-os-importers',
      comment: 'Rule 9: only platform/, api/ and app/ import legacy/os/ (it may import itself).',
      severity: 'warn',
      from: { pathNot: ['^src/(platform|api|app|legacy/os)/', STORY_OR_TEST] },
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
