import { afterEach, describe, expect, it } from 'vitest';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { ApplicationEvents_Orbit } from '@/pages/OrbitAdminEventDetail/staticEntities';
import { deserializeQRCodeInformation, onApplicationEvent_Orbit } from './adminEventDetailActions';

/* The client actions of the scan flow, without React. */
let removeSink: (() => void) | null = null;
afterEach(() => {
  removeSink?.();
  removeSink = null;
});

describe('deserializeQRCodeInformation', () => {
  it('reads the event id, the member id and the milestone id of a member QR code', () => {
    expect(deserializeQRCodeInformation('{"eventid":7301,"id":9101,"milestoneid":""}')).toEqual({
      EventId: '7301',
      MemberId: '9101',
      MilestoneId: '',
    });
  });

  it('reads the JSON names in any case and numeric texts', () => {
    expect(deserializeQRCodeInformation('{"EventId":"7301","ID":" 9101 ","MilestoneId":12}')).toEqual({
      EventId: '7301',
      MemberId: '9101',
      MilestoneId: '12',
    });
  });

  it('an empty text and missing fields give the default record', () => {
    expect(deserializeQRCodeInformation('')).toEqual({ EventId: '0', MemberId: '0', MilestoneId: '' });
    expect(deserializeQRCodeInformation('{}')).toEqual({ EventId: '0', MemberId: '0', MilestoneId: '' });
  });

  it('a text that is not JSON or a field that is not a number fails as the JSON deserializer', () => {
    expect(() => deserializeQRCodeInformation('WIFI:S:Hall-Guests;T:WPA;;')).toThrow(
      /^Failed to deserialize JSON to QRCodeInformation/,
    );
    expect(() => deserializeQRCodeInformation('{"eventid":"abc","id":1}')).toThrow(
      'Failed to deserialize JSON to QRCodeInformation: eventid',
    );
  });
});

describe('onApplicationEvent_Orbit', () => {
  it('logs the audit event with its id and the JSON of the payload', () => {
    const entries: LogEntry[] = [];
    removeSink = addLogSink((entry) => entries.push(entry));
    onApplicationEvent_Orbit('QRCodeScanned', { EventId: '7301', ScannedMemberId: '9101' });
    expect(entries).toEqual([
      expect.objectContaining({
        level: 'info',
        message: 'ApplicationEvent',
        data: {
          EventId: ApplicationEvents_Orbit.QRCodeScanned,
          Payload: '{"EventId":"7301","ScannedMemberId":"9101"}',
        },
      }),
    ]);
  });
});
