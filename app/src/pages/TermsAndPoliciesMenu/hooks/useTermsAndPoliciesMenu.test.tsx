import type { ReactNode } from 'react';
import { act, renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Policies } from '@/api/app';
import { UBT_Icons2 } from '@/lib/ubtConnect/staticEntities';
import { openPolicy, POLICY_NOT_FOUND } from '@/lib/ubtConnectUtils/actions';
import { UBT_Icons2_Contacts } from '@/pages/TermsAndPoliciesMenu/staticEntities';
import { PRIVACY_POLICY_NAME, TERMS_AND_CONDITIONS_NAME, useTermsAndPoliciesMenu } from './useTermsAndPoliciesMenu';

vi.mock('@/lib/ubtConnectUtils/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnectUtils/actions')>()),
  openPolicy: vi.fn(),
}));

/* The flows of the TermsAndPoliciesMenu screen, with OpenPolicy replaced by a spy. useViewState needs a router. */
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const policyDocument = (name: string) => ({
  Policy_Url: `https://policies.example.test/${name}.pdf`,
  Policy_FileName: `${name}.pdf`,
  Policy_ContentType: 'application/pdf',
});
const policies: Policies = {
  PolicyInformation_TermsAndConditions: policyDocument('terms'),
  PolicyInformation_PrivacyPolicy: policyDocument('privacy'),
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('useTermsAndPoliciesMenu', () => {
  it('starts with the two policy rows, no separator, loading; the policies result ends the loading', () => {
    const { result } = renderHook(() => useTermsAndPoliciesMenu(), { wrapper });
    expect(result.current.menuSection).toEqual({
      HasSeparator: false,
      MenuOptions: [
        { IconId: UBT_Icons2_Contacts, Label: TERMS_AND_CONDITIONS_NAME },
        { IconId: UBT_Icons2.BookClosed, Label: PRIVACY_POLICY_NAME },
      ],
    });
    expect(result.current.isLoading).toBe(true);

    act(() => {
      result.current.onPoliciesResult(policies);
    });
    expect(result.current.isLoading).toBe(false);
  });

  it('keeps the same In_MenuSection record while MenuOptionList does not change', () => {
    const { result } = renderHook(() => useTermsAndPoliciesMenu(), { wrapper });
    const before = result.current.menuSection;
    act(() => {
      result.current.onPoliciesResult(policies);
    });
    expect(result.current.menuSection).toBe(before);
  });

  it('a row opens its policy; before the result the policy is undefined; another label does nothing', () => {
    const { result } = renderHook(() => useTermsAndPoliciesMenu(), { wrapper });
    result.current.onClickMenuOption({ Label: TERMS_AND_CONDITIONS_NAME });
    expect(openPolicy).toHaveBeenLastCalledWith(undefined, POLICY_NOT_FOUND);

    act(() => {
      result.current.onPoliciesResult(policies);
    });
    result.current.onClickMenuOption({ Label: TERMS_AND_CONDITIONS_NAME });
    expect(openPolicy).toHaveBeenLastCalledWith(policies.PolicyInformation_TermsAndConditions, POLICY_NOT_FOUND);
    result.current.onClickMenuOption({ Label: PRIVACY_POLICY_NAME });
    expect(openPolicy).toHaveBeenLastCalledWith(policies.PolicyInformation_PrivacyPolicy, POLICY_NOT_FOUND);
    result.current.onClickMenuOption({ Label: 'Cookies' });
    expect(openPolicy).toHaveBeenCalledTimes(3);
  });
});
