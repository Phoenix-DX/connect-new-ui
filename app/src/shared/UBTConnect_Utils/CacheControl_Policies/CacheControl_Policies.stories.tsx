import type { Meta, StoryObj } from '@storybook/react-vite';
import { CACHE_TYPE, clearMemoryCache, putCacheableObject } from '../../../shell/memoryCache';
import { CacheControl_Policies } from './CacheControl_Policies';

const meta = {
  title: 'Shared/UBTConnect_Utils/CacheControl_Policies',
  component: CacheControl_Policies,
} satisfies Meta<typeof CacheControl_Policies>;
export default meta;
type Story = StoryObj<typeof meta>;

/** PINUnlock/default. Storybook has no mock API, so the story starts from a cache hit (the test uses the miss path). */
export const V1: Story = {
  beforeEach: () => {
    putCacheableObject(CACHE_TYPE.policies, 'Unique', {}, 60);
    return clearMemoryCache;
  },
};
