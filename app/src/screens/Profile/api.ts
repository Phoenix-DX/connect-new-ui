import { useQuery } from '@tanstack/react-query';
import { callAction } from '@/api/client/callAction';
import type { AccountForm, CountryInfo } from './types';

/** DataActionGetCountryInfo of the screen (Profile.mvc.js:2850-2878): not fetched at start; "Refresh Query" after the
    user-info Result (:3391-3393) with the screen variable CurrentCountryCode (the only input the backend reads of the
    screen variables OutSystems sends, fixture UBTConnect/DataActionGetCountryInfo/01-c52c670a.json). The key is the
    country code; `enabled` stays False until the Result set it, as the original runs no fetch before. */
export function useGetCountryInfo(currentCountryCode: string, isRequested: boolean) {
  return useQuery({
    queryKey: ['Profile', 'DataActionGetCountryInfo', currentCountryCode],
    queryFn: async (): Promise<CountryInfo> => {
      const out = await callAction('UBTConnect', 'Profile/DataActionGetCountryInfo', {
        CurrentCountryCode: currentCountryCode,
      });
      return { addressFormat: out.AddressInfo2.AddressFormat };
    },
    enabled: isRequested,
    retry: false,
  });
}

/** Member_EditDetails_Service (Profile.mvc.js:2839-2847): UI_AccountForm and isRequireRequestCreation; no outputs. A
    write: mocked (P-MUTATION, Profile mocks.ts), never the real server. */
export async function member_EditDetails_Service(
  accountForm: AccountForm,
  isRequireRequestCreation: boolean,
): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIMember_EditDetails_Service', {
    UI_AccountForm: accountForm,
    isRequireRequestCreation,
  });
}
