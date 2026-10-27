import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrbitNoResults } from './OrbitNoResults';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/NoResults',
  component: OrbitNoResults,
} satisfies Meta<typeof OrbitNoResults>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (EventBooklet / HostSurvey use it when a search finds nothing): built from the compiled view. */
export const Default: Story = {
  args: {
    placeholderTitle: <span data-expression="">No results found</span>,
    placeholderMessage: <span data-expression="">Try another name or clear the filters.</span>,
  },
};
