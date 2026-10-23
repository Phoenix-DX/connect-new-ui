import type { Meta, StoryObj } from '@storybook/react-vite';
import { clearMemoryCache, putCacheableObject } from '@/api/client/cache';
import { localityCache } from '@/api/locality';
import { CacheControl_AllLocalities } from './CacheControl_AllLocalities';

const meta = {
  title: 'Shared/UBTConnect_Utils/CacheControl_AllLocalities',
  component: CacheControl_AllLocalities,
} satisfies Meta<typeof CacheControl_AllLocalities>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Updates_SingleList/default. Storybook has no mock API, so the story starts from a cache hit (the test uses the miss path). */
export const V1: Story = {
  beforeEach: () => {
    putCacheableObject(localityCache.allLocalities('Unique', 60), { LocalityList: { List: [] } });
    return clearMemoryCache;
  },
};
