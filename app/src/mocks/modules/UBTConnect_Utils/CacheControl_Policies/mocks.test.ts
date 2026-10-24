import { expect, test, vi } from 'vitest';
import { callAction } from '@/api/client/callAction';

test('CacheControl_Policies GetCacheInfo: answers with the real call inputs and no "no recorded call" warning', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  const out = await callAction('UBTConnect_Utils', 'CacheControl_Policies/DataActionGetCacheInfo', {
    CacheKey: 'e3b0c442-98fc-4c14-9afb-f4c8996fb924',
    CacheTypeId: 'Policies',
    TimeToLiveSeconds: 7200,
  });
  expect(out.CacheControl_Response.PolicyInformation_PrivacyPolicy.Policy_ContentType).toBe('application/pdf');
  expect(out.CacheControl_Response.PolicyInformation_TermsAndConditions.Policy_Url).toMatch(/^https:/);
  expect(warn).not.toHaveBeenCalled();
  warn.mockRestore();
});
