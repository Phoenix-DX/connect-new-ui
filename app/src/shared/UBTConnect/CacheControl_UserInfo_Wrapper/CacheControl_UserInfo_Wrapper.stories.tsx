import type { Meta, StoryObj } from '@storybook/react-vite';
import { CACHE_TYPE, clearMemoryCache, putCacheableObject } from '../../../shell/memoryCache';
import { mockUserInformation } from '../../../shell/mockUser';
import { CacheControl_UserInfo_Wrapper } from './CacheControl_UserInfo_Wrapper';

const meta = {
  title: 'Shared/UBTConnect/CacheControl_UserInfo_Wrapper',
  component: CacheControl_UserInfo_Wrapper,
} satisfies Meta<typeof CacheControl_UserInfo_Wrapper>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default (from a cache hit: Storybook has no mock API). */
export const V1: Story = {
  beforeEach: () => {
    putCacheableObject(CACHE_TYPE.directoryUser, 'Unique', mockUserInformation(), 60);
    return clearMemoryCache;
  },
};
