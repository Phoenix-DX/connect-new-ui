import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

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
  { files: ['eslint.config.js'], extends: [tseslint.configs.disableTypeChecked] },
  // Node scripts of the demo build (copied into dist-demo/ or run after the build)
  {
    files: ['build/**/*.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: { globals: globals.node },
  },
);
