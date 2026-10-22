import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CACHE_TYPE, clearMemoryCache, putCacheableObject } from '@/platform/storage/memoryCache';
import { mockUserInformation } from '@/platform/session/mockUser';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { CacheControl_UserInfo_Wrapper } from './CacheControl_UserInfo_Wrapper';
import * as stories from './CacheControl_UserInfo_Wrapper.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('CacheControl_UserInfo_Wrapper', () => {
  afterEach(() => {
    clearMemoryCache();
    setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', false);
  });
  it('sets App_Policies_HasPolicyToAccept and raises Result with Directory_UserCurrent', () => {
    const info = { ...mockUserInformation(), HasPoliciesToAccept: true };
    putCacheableObject(CACHE_TYPE.directoryUser, 'Unique', info, 60);
    const onResult = vi.fn();
    render(<CacheControl_UserInfo_Wrapper onResult={onResult} />);
    expect(onResult).toHaveBeenCalledWith(info.Directory_UserCurrent);
    expect(getClientVar('UBTConnect.App_Policies_HasPolicyToAccept')).toBe(true);
  });

  testCapturedVariants(stories, captures);
});
