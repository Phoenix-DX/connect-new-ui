import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_ImageCardType } from '../../UBTConnectLibrary/lib/staticEntities';
import { HouseholdDetails_TimelinePhoto } from './HouseholdDetails_TimelinePhoto';

const meta = {
  title: 'Shared/UBTConnect/HouseholdDetails_TimelinePhoto',
  component: HouseholdDetails_TimelinePhoto,
} satisfies Meta<typeof HouseholdDetails_TimelinePhoto>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (no screen loaded the block): compiled view, a selected gallery photo with a label. The image URL is a
    neutral placeholder (person photos are never mocked). */
export const CompiledView: Story = {
  args: {
    inBackgroundURL: 'data:image/gif;base64,R0lGODlhAQABAAAAACw=',
    label: '2024',
    date: '2024-01-01 00:00:00',
    inCardTypeId: UBT_ImageCardType.Gallery,
    isSelected: true,
  },
};
