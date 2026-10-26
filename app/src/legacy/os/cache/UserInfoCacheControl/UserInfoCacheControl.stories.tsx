import type { Meta, StoryObj } from '@storybook/react-vite';
import { clearMemoryCache, putCacheableObject } from '@/api/client/cache';
import { memberCache } from '@/api/member';
import { mockUserInformation } from '@/platform/session/mockUser';
import { UserInfoCacheControl } from './UserInfoCacheControl';

const meta = {
  title: 'Shared/UBTConnect_Utils/CacheControl_UserInfo',
  component: UserInfoCacheControl,
} satisfies Meta<typeof UserInfoCacheControl>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default. Storybook has no mock API, so the story starts from a cache hit (the test uses the miss
    path). */
export const V1: Story = {
  beforeEach: () => {
    putCacheableObject(memberCache.userInfo('Unique', 60), mockUserInformation());
    return clearMemoryCache;
  },
};
