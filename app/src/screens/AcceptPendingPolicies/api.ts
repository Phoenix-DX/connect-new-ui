import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import type { DeviceInfo, PendingPoliciesInputs, PendingPolicy, PolicyAcceptanceInformationWire } from './types';

const toPolicy = (w: PolicyAcceptanceInformationWire): PendingPolicy => ({
  id: w.PolicyInformation.Id,
  applicationName: w.PolicyInformation.ApplicationName,
  policyTypeName: w.PolicyInformation.PolicyTypeName,
  policyContentFilename: w.PolicyInformation.PolicyContentFilename,
  policyContentType: w.PolicyInformation.PolicyContentType,
  url: w.Url,
  isSelected: w.IsSelected,
});

/** DataActionGetPendingPolicies of the block (BLK controller getPendingPolicies$DataActRefresh): sent with the block's
    screen variables. Fetched on load and again when an input changes (OnParametersChanged → Refresh Query), so the
    inputs are the query key; IsAllSelected is sent as it is at fetch time but does not refresh. The previous data stays
    while a refresh runs (OutSystems keeps IsDataFetched True). */
export function useGetPendingPolicies(inputs: PendingPoliciesInputs, isAllSelected: () => boolean) {
  return useQuery({
    queryKey: ['AcceptPendingPolicies', 'DataActionGetPendingPolicies', inputs],
    queryFn: async () => {
      const out = await callAction('UBTConnect', 'Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies', {
        PolicyApplications: wireList(inputs.policyApplications),
        Country: inputs.country,
        ContentBlockId: inputs.contentBlockId,
        IsAllSelected: isAllSelected(),
      });
      return osList(out.Policies).map(toPolicy);
    },
    placeholderData: keepPreviousData,
    retry: false,
  });
}

/** AcceptPolicies (BLK controller acceptPolicies$ServerAction, ContinueOnClick): the selected policy ids and the
    device details of the GetDeviceInfo JS node (ClientIP is not set: default ""). */
export async function acceptPolicies(policyIds: string[], device: DeviceInfo): Promise<void> {
  await callAction('UBTConnect', 'ActionAcceptPolicies', {
    Policies: wireList(policyIds),
    DeviceDetails: {
      ClientIP: '',
      UniqueId: device.UniqueId,
      Platform: device.Platform,
      Manufacturer: device.Manufacturer,
      Model: device.Model,
    },
  });
}
