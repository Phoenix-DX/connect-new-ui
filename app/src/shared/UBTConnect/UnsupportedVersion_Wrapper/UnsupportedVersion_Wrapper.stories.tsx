import type { Meta, StoryObj } from '@storybook/react-vite';
import { UNSUPPORTED_BROWSER_SCENARIO } from '@/shared/UBTConnect/lib/actions';
import { UnsupportedVersion_Wrapper } from './UnsupportedVersion_Wrapper';

const meta = {
  title: 'Shared/UBTConnect/UnsupportedVersion_Wrapper',
  component: UnsupportedVersion_Wrapper,
} satisfies Meta<typeof UnsupportedVersion_Wrapper>;
export default meta;
type Story = StoryObj<typeof meta>;

/** TST: no minimum versions, so the wrapper is empty (not captured). */
export const Supported: Story = {};
/** Mock scenario `?mock=unsupported-browser` (decision U16; not captured). */
export const UnsupportedBrowser: Story = {
  beforeEach: () => {
    sessionStorage.setItem('mock:mock', UNSUPPORTED_BROWSER_SCENARIO);
    return () => {
      sessionStorage.removeItem('mock:mock');
    };
  },
};
