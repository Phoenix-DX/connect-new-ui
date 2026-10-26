import type { Meta, StoryObj } from '@storybook/react-vite';
import { UNSUPPORTED_BROWSER_SCENARIO } from '@/lib/ubtConnect/unsupportedVersion';
import { UnsupportedVersionWrapper } from './UnsupportedVersionWrapper';

const meta = {
  title: 'Shared/UBTConnect/UnsupportedVersion_Wrapper',
  component: UnsupportedVersionWrapper,
} satisfies Meta<typeof UnsupportedVersionWrapper>;
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
