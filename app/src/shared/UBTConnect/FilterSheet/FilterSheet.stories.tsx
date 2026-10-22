import type { Meta, StoryObj } from '@storybook/react-vite';
import { CACHE_TYPE, clearMemoryCache, putCacheableObject } from '@/platform/storage/memoryCache';
import { mockUserInformation } from '@/platform/session/mockUser';
import { Choice } from '../lib/staticEntities';
import { FilterSheet } from './FilterSheet';

const meta = {
  title: 'Shared/UBTConnect/FilterSheet',
  component: FilterSheet,
} satisfies Meta<typeof FilterSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Storybook has no mock API: the caches start filled (the tests use the recorded mocks). */
const fillCaches = () => {
  putCacheableObject(
    CACHE_TYPE.allCountries,
    'Unique',
    { CountryList: { List: [{ CountryName: 'Country A', CountryCode: 'AU', Latitude: '', Longitude: '' }] } },
    60,
  );
  putCacheableObject(
    CACHE_TYPE.allLocalities,
    'Unique',
    {
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
    },
    60,
  );
  putCacheableObject(CACHE_TYPE.directoryUser, 'Unique', mockUserInformation(), 60);
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
