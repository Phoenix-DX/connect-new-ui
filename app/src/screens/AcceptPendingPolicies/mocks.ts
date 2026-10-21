import type { RequestHandler } from 'msw';
import { contractHandler } from '../../mocks/contract';
import { fixtureData } from '../../mocks/fixtures';
import { collection } from '../../mocks/store';
import type { PolicyAcceptanceInformationWire } from './types';

/* DataActionGetPendingPolicies was never recorded (the test account has no pending policy, Q7 c): two fictional
   Connect policies (Q3) whose Url, file name and content type are the recorded TST policies of CacheControl_Policies
   (fixture UBTConnect_Utils CacheControl_Policies/DataActionGetCacheInfo). AcceptPolicies is a write: it removes the
   accepted ids from the in-memory collection (P-MUTATION), so the next fetch shows the remaining ones; never the real
   server. */
interface RecordedPolicyInfo {
  Policy_Url: string;
  Policy_FileName: string;
  Policy_ContentType: string;
}
interface RecordedPolicies {
  CacheControl_Response: {
    PolicyInformation_TermsAndConditions: RecordedPolicyInfo;
    PolicyInformation_PrivacyPolicy: RecordedPolicyInfo;
  };
}

const policy = (
  id: string,
  typeId: string,
  typeName: string,
  info: RecordedPolicyInfo,
): PolicyAcceptanceInformationWire => ({
  IsSelected: false,
  Url: info.Policy_Url,
  PolicyInformation: {
    Id: id,
    ApplicationId: '1',
    ApplicationName: 'Connect',
    Name: `Connect ${typeName}`,
    PolicyContentFilename: info.Policy_FileName,
    PolicyContentType: info.Policy_ContentType,
    PolicyTypeId: typeId,
    PolicyTypeName: typeName,
    Version: 1,
  },
});

const pending = collection(
  'AcceptPendingPolicies.pending',
  () => {
    const recorded = (
      fixtureData('UBTConnect_Utils', 'CacheControl_Policies/DataActionGetCacheInfo') as RecordedPolicies
    ).CacheControl_Response;
    return [
      { Id: '7001', Row: policy('7001', '1', 'Terms and Conditions', recorded.PolicyInformation_TermsAndConditions) },
      { Id: '7002', Row: policy('7002', '2', 'Privacy Policy', recorded.PolicyInformation_PrivacyPolicy) },
    ];
  },
  'Id',
);

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies', () => ({
    Policies: { List: pending.all().map((r) => r.Row as PolicyAcceptanceInformationWire) },
  })),
  contractHandler('UBTConnect', 'ActionAcceptPolicies', ({ Policies }) => {
    for (const id of Policies.List) pending.remove(String(id));
    return {};
  }),
];
