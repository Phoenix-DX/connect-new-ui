import type { Meta, StoryObj } from '@storybook/react-vite';
import { CACHE_TYPE, clearMemoryCache, putCacheableObject } from '@/platform/storage/memoryCache';
import { mockUserInformation } from '@/platform/session/mockUser';
import { CacheControl_UserInfo } from './CacheControl_UserInfo';

const meta = {
  title: 'Shared/UBTConnect_Utils/CacheControl_UserInfo',
  component: CacheControl_UserInfo,
} satisfies Meta<typeof CacheControl_UserInfo>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default. Storybook has no mock API, so the story starts from a cache hit (the test uses the miss
    path). */
export const V1: Story = {
  beforeEach: () => {
    putCacheableObject(CACHE_TYPE.directoryUser, 'Unique', mockUserInformation(), 60);
    return clearMemoryCache;
  },
};
