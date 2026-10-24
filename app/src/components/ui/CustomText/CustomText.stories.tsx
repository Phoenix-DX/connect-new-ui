import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomText } from './CustomText';

const meta = { title: 'Shared/UBTConnectLibrary/CustomText', component: CustomText } satisfies Meta<typeof CustomText>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = { args: { inText: 'Home', inTextOptions: { Color: 'neutral-6', FontSize: 'xs' } } };
/** BookmarksByGroup/default */
export const V2: Story = { args: { inText: 'Bookmarks', inTextOptions: { Color: 'primary', FontSize: 'xs' } } };
/** BrowseCountries/default */
export const V3: Story = { args: { inText: 'Argentina', inTextOptions: { FontWeight: 'semi-bold', FontSize: 'h6' } } };
/** BrowseCountries/default */
export const V4: Story = {
  args: { inText: 'Localities', inTextOptions: { Color: 'neutral-8', FontWeight: 'regular', FontSize: 'xxs' } },
};
/** HouseholdCarousel/default: highlighted words (names are mock data) */
export const V5: Story = {
  args: {
    inText: 'Married to Alexa Morgan see household members for more',
    inTextOptions: { Color: 'cyan-darkest', FontSize: 'xs' },
    inHighlightWords: 'Alexa Morgan',
    inHighlightOptions: { Color: 'cyan-darkest', FontWeight: 'semi-bold', FontSize: 'xs' },
  },
};
/** CountryDetails/default: inline icon (text masked in the capture; mock value) */
export const V6: Story = {
  args: {
    inText: '3',
    inTextOptions: { Color: 'neutral-7', FontSize: 's' },
    inlineIcon: { IconId: 'connect-icon-house_fill', IconColorId: 'orange', IconSizeId: 'icon-non-standard-16' },
  },
};
/** HouseholdDetails/loading: padding options */
export const V7: Story = {
  args: {
    inText: 'Sorry, no photo available',
    inTextOptions: { Color: 'neutral-7', FontWeight: 'regular', FontSize: 's' },
    inPaddingOptions: { TopSizeId: 'base' },
  },
};
