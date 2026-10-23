import type { Meta, StoryObj } from '@storybook/react-vite';
import { clearMemoryCache, putCacheableObject } from '@/api/client/cache';
import { countryCache } from '@/api/country';
import { localityCache } from '@/api/locality';
import { memberCache } from '@/api/member';
import { mockUserInformation } from '@/platform/session/mockUser';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import { FilterSheet } from './FilterSheet';

const meta = {
  title: 'Shared/UBTConnect/FilterSheet',
  component: FilterSheet,
} satisfies Meta<typeof FilterSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Storybook has no mock API: the caches start filled (the tests use the recorded mocks). */
const fillCaches = () => {
  putCacheableObject(countryCache.allCountries('Unique', 60), {
    CountryList: { List: [{ CountryName: 'Country A', CountryCode: 'AU', Latitude: '', Longitude: '' }] },
  });
  putCacheableObject(localityCache.allLocalities('Unique', 60), {
    LocalityList: {
      List: [
        {
          LocalityId: '1',
          Name: 'Locality A',
          CountryName: 'Country A',
          CountryCode: 'AU',
          Latitude: '',
          Longitude: '',
        },
      ],
    },
  });
  putCacheableObject(memberCache.userInfo('Unique', 60), mockUserInformation());
  return clearMemoryCache;
};

/** CountryDetails/default: the locality filter of one country (HasCountries for the country cache). */
export const V1: Story = { beforeEach: fillCaches, args: { inOptions: { HasCountries: { Enable: true, Order: 1 } } } };
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
  beforeEach: fillCaches,
  args: {
    inOptions: {
      HasCountries: { Enable: true, Order: 1 },
      HasLocalities: { Enable: true, Order: 2 },
      HasSorting: { Enable: true, YesLabel: 'Newest', NoLabel: 'Oldest' },
    },
  },
};
