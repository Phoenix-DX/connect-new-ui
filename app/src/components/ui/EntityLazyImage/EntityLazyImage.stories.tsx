import type { Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/legacy/os/os-assets';
import { UBT_ImageSize } from '@/lib/ubtConnectUtils/staticEntities';
import { EntityLazyImage } from './EntityLazyImage';

const meta = { title: 'Shared/UBTConnect_Utils/UBT_LazyImage', component: EntityLazyImage } satisfies Meta<
  typeof EntityLazyImage
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryDetails/default: a country flag (ImageURL given, no signed-image request) */
export const V1: Story = {
  args: {
    imageURL: osImage('img/UBTConnect.ConnectLogo.svg'),
    imageSize: { Height: UBT_ImageSize.Small_40, Width: UBT_ImageSize.Square },
    extendedClass: 'country-flag',
    inBorderRadius: 'circle',
  },
};
