import { callAction, type ActionOutputs, type PathOf } from '@/api/client/callAction';

/* The call of PassportScan (TST publish of 2026-10-27): the data action GetConfigs of the block
   ScreenBlock_PassportScan, module OrbitPassportScanC2 (ScreenBlock_PassportScan.mvc.js:315-355, outputs :9-28).
   The operation comes from the contract (regenerated for I10-6); the module timeout is in SERVER_REQUEST_TIMEOUT
   (OrbitPassportScanC2.controller.js `defaultTimeout = 10`). */

/** Output of DataActionGetConfigs: all Text. */
type PassportScanConfigsWire = ActionOutputs<
  PathOf<'OrbitPassportScanC2', 'ScreenBlock_PassportScan/DataActionGetConfigs'>
>;

/** The configuration of the Orbit Passport embed (InitializePassportScanJS parameters). */
export interface PassportScanConfigs {
  /** The B2C id token that signs the portal in. */
  token: string;
  baseURL: string;
  b2CTenant: string;
  b2CClientId: string;
  b2CPolicy: string;
  tokenType: string;
}

/** The inputs of the block, sent as its screen variables (LongInteger as text). */
interface PassportScanConfigsInputs {
  TargetMemberId: string;
  LoginMemberId: string;
}

const toPassportScanConfigs = (wire: PassportScanConfigsWire): PassportScanConfigs => ({
  token: wire.Token,
  baseURL: wire.BaseURL,
  b2CTenant: wire.B2CTenant,
  b2CClientId: wire.B2CClientId,
  b2CPolicy: wire.B2CPolicy,
  tokenType: wire.TokenType,
});

/** DataActionGetConfigs of ScreenBlock_PassportScan (fetch at start, and again on OnAuthExpired). */
export async function fetchPassportScanConfigs(inputs: PassportScanConfigsInputs): Promise<PassportScanConfigs> {
  const { TargetMemberId, LoginMemberId } = inputs;
  const wire = await callAction('OrbitPassportScanC2', 'ScreenBlock_PassportScan/DataActionGetConfigs', {
    TargetMemberId,
    LoginMemberId,
  });
  return toPassportScanConfigs(wire);
}
