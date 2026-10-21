import type { StorybookConfig } from '@storybook/react-vite';

/* Catalog of the shared blocks (src/shared, src/shell, src/components): one story per captured state. */
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  core: { disableTelemetry: true },
};
export default config;
