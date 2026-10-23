import { describe, expect, it } from 'vitest';
import { toAcceptPoliciesInputs, toPendingPolicies, type PolicyAcceptanceInformationWire } from './mapper';

/** A fictional pending policy as the server sends it: every field. */
const policyWire = (id: string, typeName: string, isSelected = false): PolicyAcceptanceInformationWire => ({
  IsSelected: isSelected,
  Url: `https://policies.example.org/connect/${id}.pdf`,
  PolicyInformation: {
    Id: id,
    ApplicationId: '1',
    ApplicationName: 'Connect',
    Name: `Connect ${typeName}`,
    PolicyContentFilename: `${id}.pdf`,
    PolicyContentType: 'application/pdf',
    PolicyTypeId: '1',
    PolicyTypeName: typeName,
    Version: 3,
  },
});

describe('policy mapper', () => {
  it('toPendingPolicies keeps the order and the fields that the block reads', () => {
    const policies = toPendingPolicies({
      Policies: { List: [policyWire('7001', 'Terms and Conditions'), policyWire('7002', 'Privacy Policy', true)] },
    });
    expect(policies).toEqual([
      {
        id: '7001',
        applicationName: 'Connect',
        policyTypeName: 'Terms and Conditions',
        policyContentFilename: '7001.pdf',
        policyContentType: 'application/pdf',
        url: 'https://policies.example.org/connect/7001.pdf',
        isSelected: false,
      },
      expect.objectContaining({ id: '7002', policyTypeName: 'Privacy Policy', isSelected: true }),
    ]);
  });

  it('toPendingPolicies answers an empty list for an empty answer', () => {
    expect(toPendingPolicies({ Policies: { List: [] } })).toEqual([]);
  });

  it('toAcceptPoliciesInputs wraps the ids and sends the device details with ClientIP ""', () => {
    const inputs = toAcceptPoliciesInputs(['7001', '7002'], {
      UniqueId: 'b2f1c0de-0000-4000-8000-000000000001',
      Platform: 'Web',
      Manufacturer: '',
      Model: '',
    });
    expect(inputs).toEqual({
      Policies: { List: ['7001', '7002'] },
      DeviceDetails: {
        ClientIP: '',
        UniqueId: 'b2f1c0de-0000-4000-8000-000000000001',
        Platform: 'Web',
        Manufacturer: '',
        Model: '',
      },
    });
  });
});
