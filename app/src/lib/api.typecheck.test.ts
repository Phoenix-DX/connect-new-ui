import { expectTypeOf, test } from 'vitest';
import type { ActionInputs, ActionOutputs } from './api';

// Contract typing smoke test: owned data actions resolve to their own endpoint types.
type UserInfo = '/api/UBTConnect_Utils/CacheControl_UserInfo/DataActionGetCacheInfo';
type Countries = '/api/UBTConnect_Utils/CacheControl_AllCountries/DataActionGetCacheInfo';

test('same-named data actions of different owners have distinct, non-empty types', () => {
  expectTypeOf<ActionOutputs<UserInfo>>().not.toBeNever();
  expectTypeOf<ActionOutputs<Countries>>().not.toBeNever();
  expectTypeOf<ActionInputs<UserInfo>>().toBeObject();
});
