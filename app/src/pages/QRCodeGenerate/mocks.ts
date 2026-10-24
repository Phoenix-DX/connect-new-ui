import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { ORBIT_EVENT_PASSES } from '@/mocks/fictional/orbit';

/* DataActionGet_EventQRCode was never recorded (no capture, no-capture.json): fictional answers from the shared Orbit
   world (src/mocks/fictional/orbit.ts ORBIT_EVENT_PASSES, QRCodeGenerate Q1) in the contract's shape. The server
   renders the QR image: QRCodeAsBinary is a PNG (base64), here the one stored with the pass.
   Scenarios:
   - real: the pass of In_MemberId for In_EventId (event 7301, member 990001: role Host, GMP tag, the rows of the two
     seated meetings and the QR image); no pass → empty texts and NullBinary() ("Unfortunately the QR Code couldn't be
     generated. …").
   - empty (no seat row), loading (never answers: skeleton), error (HTTP 500): contractHandler. */

const MODULE = 'Connect2_OrbitMobile_MUI';

/** DataActionGet_EventQRCode of ScreenBlock_GenerateQRCode, typed by the API contract (shape from
    Connect2_OrbitMobile_BL.GetEventQRCode_ScreenRec). */
type GetEventQRCodeWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode'>
>;

/** The answer for event `eventId` and member `memberId`. */
export function eventQRCodeAnswer(eventId: string, memberId: string): GetEventQRCodeWire {
  const pass = ORBIT_EVENT_PASSES.find((p) => p.EventId === eventId && p.MemberId === memberId);
  return {
    Response: {
      GetEventQRCodeResponse: {
        GuestRole: pass?.GuestRole ?? '',
        QrCodeImage: pass?.payload ?? '',
        // The seat list as OutSystems wraps a list.
        Seats: { List: (pass?.Seats ?? []).map((s) => ({ ...s })) },
        Tag: pass?.Tag ?? '',
      },
      QRCodeAsBinary: pass?.qrCodePngBase64 ?? '',
    },
  };
}

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode', ({ In_EventId, In_MemberId }) =>
    eventQRCodeAnswer(In_EventId ?? '', In_MemberId ?? ''),
  ),
];
