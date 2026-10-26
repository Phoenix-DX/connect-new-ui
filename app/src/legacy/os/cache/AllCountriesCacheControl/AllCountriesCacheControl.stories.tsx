import type { Meta, StoryObj } from '@storybook/react-vite';
import { clearMemoryCache, putCacheableObject } from '@/api/client/cache';
import { countryCache } from '@/api/country';
import { AllCountriesCacheControl } from './AllCountriesCacheControl';

const meta = {
  title: 'Shared/UBTConnect_Utils/CacheControl_AllCountries',
  component: AllCountriesCacheControl,
} satisfies Meta<typeof AllCountriesCacheControl>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryDetails/default. Storybook has no mock API, so the story starts from a cache hit (the test uses the miss path). */
export const V1: Story = {
  beforeEach: () => {
    putCacheableObject(countryCache.allCountries('Unique', 60), { CountryList: { List: [] } });
    return clearMemoryCache;
  },
};
