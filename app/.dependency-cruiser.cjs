/* Architecture rules for dependency-cruiser (plan v2 section 2.4, rules 3 to 10; section 4.4).
   no-circular is an error. The folder rules are warnings until Phase 9 turns them into errors. The target folders
   (pages/, containers/, platform/, legacy/os/) do not exist before Phase 1: the regexes apply when they appear.
   Rule 11 (alias imports) is an ESLint rule (no-restricted-imports), not set here. */

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      comment: 'Rule 10: no import cycle anywhere.',
      severity: 'error',
      from: {},
      to: { circular: true },
    },
    {
      name: 'rule-3-page-not-import-page',
      comment: 'Rule 3: a page does not import another page.',
      severity: 'warn',
      from: { path: '^src/pages/([^/]+)/' },
      to: { path: '^src/pages/', pathNot: '^src/pages/$1/' },
    },
    {
      name: 'rule-4-components-no-upward-import',
      comment: 'Rule 4: components/** does not import api/, platform/, containers/, pages/ or app/.',
      severity: 'warn',
      from: { path: '^src/components/' },
      to: { path: '^src/(api|platform|containers|pages|app)/' },
    },
    {
      name: 'rule-5-ui-imports-ui-lib-styles-only',
      comment: 'Rule 5: components/ui/ imports only components/ui/, lib/ and styles/.',
      severity: 'warn',
      from: { path: '^src/components/ui/' },
      to: { path: '^src/', pathNot: '^src/(components/ui|lib|styles)/' },
    },
    {
      name: 'rule-6-lib-imports-lib-only',
      comment: 'Rule 6: lib/ imports only lib/.',
      severity: 'warn',
      from: { path: '^src/lib/' },
      to: { path: '^src/', pathNot: '^src/lib/' },
    },
    {
      name: 'rule-7-api-domain-imports',
      comment: 'Rule 7: api/<domain>/ imports api/client/, lib/ and legacy/os/ only (and its own domain).',
      severity: 'warn',
      from: { path: '^src/api/(?!client/)([^/]+)/' },
      to: { path: '^src/', pathNot: '^src/(api/client|lib|legacy/os|api/$1)/' },
    },
    {
      name: 'rule-8-platform-no-upward-import',
      comment: 'Rule 8: platform/** does not import pages/, components/, containers/ or app/.',
      severity: 'warn',
      from: { path: '^src/platform/' },
      to: { path: '^src/(pages|components|containers|app)/' },
    },
    {
      name: 'rule-9-legacy-os-importers',
      comment: 'Rule 9: only platform/, api/ and app/ import legacy/os/ (it may import itself).',
      severity: 'warn',
      from: { pathNot: '^src/(platform|api|app|legacy/os)/' },
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
