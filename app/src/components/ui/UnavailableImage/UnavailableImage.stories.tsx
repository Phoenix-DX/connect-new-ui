import type { Meta, StoryObj } from '@storybook/react-vite';
import { Type_Image, UBT_ImageCardType } from '@/lib/ubtConnectLibrary/staticEntities';
import { UnavailableImage } from './UnavailableImage';

const meta = {
  title: 'Shared/UBTConnectLibrary/Unavailable_Image',
  component: UnavailableImage,
} satisfies Meta<typeof UnavailableImage>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured: compiled view as HouseholdDetails_TimelinePhoto_List shows it for an empty gallery (TL:248-251):
    gallery card type, Household, no icon. */
export const HouseholdGallery: Story = {
  args: { inCardTypeId: UBT_ImageCardType.Gallery, typeImage: Type_Image.Household },
};
/** Not captured: compiled view with TypeImage OneSchool. */
export const OneSchool: Story = {
  args: { inCardTypeId: UBT_ImageCardType.Detail, typeImage: Type_Image.OneSchool },
};
