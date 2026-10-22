import type { Meta, StoryObj } from '@storybook/react-vite';
import { CACHE_TYPE, clearMemoryCache, putCacheableObject } from '@/platform/storage/memoryCache';
import { CacheControl_AllCountries } from './CacheControl_AllCountries';

const meta = {
  title: 'Shared/UBTConnect_Utils/CacheControl_AllCountries',
  component: CacheControl_AllCountries,
} satisfies Meta<typeof CacheControl_AllCountries>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryDetails/default. Storybook has no mock API, so the story starts from a cache hit (the test uses the miss path). */
export const V1: Story = {
  beforeEach: () => {
    putCacheableObject(CACHE_TYPE.allCountries, 'Unique', { CountryList: { List: [] } }, 60);
    return clearMemoryCache;
  },
};
