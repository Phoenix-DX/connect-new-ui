import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const relativeParentPattern = {
  regex: '^\\.\\./',
  message: 'Rule 11: import across folders with the @/ alias, not with ../.',
};

/* One lint configuration for the whole app (stack item "lint"). Type-checked strict rules: they catch wire-format
   mistakes (any, unchecked indexes, floating promises) before they reach a review. */
export default tseslint.config(
  {
    ignores: [
      'dist',
      'dist-demo',
      'storybook-static',
      'coverage',
      'public',
      'src/api/schema.d.ts',
      'src/vendor/**/*.js',
      'src/shared/osui/*/vendor/**/*.js',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  reactHooks.configs.flat.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      // numbers in template literals are common in OutSystems-derived markup (ids, counts)
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    },
  },
  // Plan v2 §2.4 rule 11 is an error (P1-4); rule 4 stays a warning until Phase 9 turns it into an error.
  // A later block that sets the same rule replaces this one, so the components block repeats the relative pattern.
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: { 'no-restricted-imports': ['error', { patterns: [relativeParentPattern] }] },
  },
  // The alias codemod skips src/sw (built by vite-plugin-pwa, build/pwa.ts), so it keeps relative imports.
  { files: ['src/sw/**/*.ts'], rules: { 'no-restricted-imports': 'off' } },
  {
    files: ['src/components/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'warn',
        {
          patterns: [
            relativeParentPattern,
            {
              regex: '^@/(api|platform|pages|containers|app)(/|$)',
              message: 'Rule 4: components/** does not import api/, platform/, pages/, containers/ or app/.',
            },
          ],
        },
      ],
    },
  },
  { files: ['eslint.config.js'], extends: [tseslint.configs.disableTypeChecked] },
  // dependency-cruiser config (CommonJS, read by the CLI)
  {
    files: ['.dependency-cruiser.cjs'],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: { globals: globals.node, sourceType: 'commonjs' },
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
  // Node scripts of the demo build (copied into dist-demo/ or run after the build)
  {
    files: ['build/**/*.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: { globals: globals.node },
  },
);
