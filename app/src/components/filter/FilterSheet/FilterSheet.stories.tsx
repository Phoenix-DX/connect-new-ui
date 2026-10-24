import type { Meta, StoryObj } from '@storybook/react-vite';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import { FilterSheet, type FilterSheetSubscription } from './FilterSheet';

/** The BackNavigationHandler block as the caller gives it (platform/navigation): its wrapper. */
const renderBackNavigationHandler = () => <OSBlock name="NavigationHandler.BackNavigationHandler" />;

const meta = {
  title: 'Shared/UBTConnect/FilterSheet',
  component: FilterSheet,
  args: { renderBackNavigationHandler },
} satisfies Meta<typeof FilterSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

/* The results of the cache blocks, as the caller gives them (Storybook has no mock API). */
const COUNTRIES = [
  { CountryName: 'Argentina', CountryCode: 'AR' },
  { CountryName: 'Uruguay', CountryCode: 'UY' },
];
const LOCALITIES = [
  { LocalityId: '252', Name: 'Bahia Blanca', CountryCode: 'AR' },
  { LocalityId: '254', Name: 'Montevideo', CountryCode: 'UY' },
];
/** A Global subscription: every country and locality is enabled. */
const SUBSCRIPTION: FilterSheetSubscription = {
  SubscriptionID: 'SUB-4410982',
  SubscriptionType: 'Global',
  SubscriptionRegionId: '1',
  SubscriptionRegion: 'Americas',
  SubscriptionManageLink: 'https://example.com/subscription',
  SubscriptionActive: true,
  SubscribedCountries: { List: [] },
};
/** The cache blocks as the caller renders them (containers/FilterSheet): their wrappers. */
const countriesBlock = <OSBlock name="CacheControl.CacheControl_AllCountries" />;
const localitiesBlock = <OSBlock name="CacheControl.CacheControl_AllLocalities" />;
const userInfoBlock = <OSBlock name="App_Cache.CacheControl_UserInfo_Wrapper" />;

/** CountryDetails/default: the locality filter of one country (HasCountries for the country cache). */
export const V1: Story = {
  args: {
    inOptions: { HasCountries: { Enable: true, Order: 1 } },
    countries: COUNTRIES,
    userSubscription: SUBSCRIPTION,
    cacheBlocks: (
      <>
        {countriesBlock}
        {userInfoBlock}
      </>
    ),
  },
};
/** Notes/default: sort and choices, no place filters. */
export const V2: Story = {
  args: {
    inOptions: {
      HasSorting: { Enable: true, YesLabel: 'Newest', NoLabel: 'Oldest' },
      Extra_OptionChoices: [
        {
          Title: 'Read',
          YesLabel: 'Read',
          NoLabel: 'Unread',
          NoneLabel: 'All',
          SelectedChoiceId: Choice.None,
          Order: 2,
        },
      ],
    },
  },
};
/** Updates_SingleList/default: countries and localities. */
export const V3: Story = {
  args: {
    inOptions: {
      HasCountries: { Enable: true, Order: 1 },
      HasLocalities: { Enable: true, Order: 2 },
      HasSorting: { Enable: true, YesLabel: 'Newest', NoLabel: 'Oldest' },
    },
    countries: COUNTRIES,
    localities: LOCALITIES,
    userSubscription: SUBSCRIPTION,
    cacheBlocks: (
      <>
        {countriesBlock}
        {localitiesBlock}
        {userInfoBlock}
      </>
    ),
  },
};
