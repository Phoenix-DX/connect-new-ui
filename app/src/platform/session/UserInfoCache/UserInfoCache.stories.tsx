import type { Meta, StoryObj } from '@storybook/react-vite';
import { clearMemoryCache, putCacheableObject } from '@/api/client/cache';
import { memberCache } from '@/api/member';
import { mockUserInformation } from '@/platform/session/mockUser';
import { UserInfoCache } from './UserInfoCache';

const meta = {
  title: 'Shared/UBTConnect/CacheControl_UserInfo_Wrapper',
  component: UserInfoCache,
} satisfies Meta<typeof UserInfoCache>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default (from a cache hit: Storybook has no mock API). */
export const V1: Story = {
  beforeEach: () => {
    putCacheableObject(memberCache.userInfo('Unique', 60), mockUserInformation());
    return clearMemoryCache;
  },
};
