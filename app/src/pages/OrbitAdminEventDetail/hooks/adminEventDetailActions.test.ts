import { afterEach, describe, expect, it } from 'vitest';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { ApplicationEvents_Orbit } from '@/pages/OrbitAdminEventDetail/staticEntities';
import { onApplicationEvent_Orbit, textToIntegerToLongInteger } from './adminEventDetailActions';

/* The client actions of the scan flow, without React. */
let removeSink: (() => void) | null = null;
afterEach(() => {
  removeSink?.();
  removeSink = null;
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

describe('textToIntegerToLongInteger (EB:1018)', () => {
  it('keeps an id in the Integer range', () => {
    expect(textToIntegerToLongInteger('9101')).toBe('9101');
    expect(textToIntegerToLongInteger('2147483647')).toBe('2147483647');
    expect(textToIntegerToLongInteger('-2147483648')).toBe('-2147483648');
  });

  it('gives 0 for an id outside the Integer range, where TextToLongInteger keeps it', () => {
    expect(textToIntegerToLongInteger('2147483648')).toBe('0');
    expect(textToIntegerToLongInteger('-2147483649')).toBe('0');
  });

  it('gives 0 for a text that is not an integer', () => {
    expect(textToIntegerToLongInteger('')).toBe('0');
    expect(textToIntegerToLongInteger('12a')).toBe('0');
    expect(textToIntegerToLongInteger('1.5')).toBe('0');
  });
});
