import type { Meta, StoryObj } from '@storybook/react-vite';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DirectoryLegendSheet } from './DirectoryLegendSheet';

/** A stand-in for the PreventBackNavigation block that the page gives (platform/navigation): its wrapper and its
    nested BackNavigationHandler. */
function PreventBackNavigationStandIn() {
  return (
    <OSBlock name="NavigationHandler.PreventBackNavigation">
      <OSBlock name="NavigationHandler.BackNavigationHandler" />
    </OSBlock>
  );
}

const meta = {
  title: 'Shared/UBTConnect/Directory_LegendBottomSheet',
  component: DirectoryLegendSheet,
  args: { preventBackNavigation: PreventBackNavigationStandIn },
} satisfies Meta<typeof DirectoryLegendSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryDetails/default (pack: wrapper only): closed sheet (the screen passes ShowLocalities False). */
export const V1: Story = { args: { showLocalities: false } };
/** CountryDetails/default: closed sheet, Supper Meetings line (ShowLocalities False). */
export const V2: Story = { args: { showLocalities: false } };
/** CountryList/default: closed sheet, Localities line (no input: ShowLocalities default True). */
export const V3: Story = { args: {} };
