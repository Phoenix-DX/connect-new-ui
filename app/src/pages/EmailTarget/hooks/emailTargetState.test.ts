import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { readEmailTargetInputs } from '@/pages/EmailTarget/inputs';
import { ApplicationEvents_LDM, addAuditEventDetailEvent, onEmailLDMEventParticipant } from './emailTargetState';

let logs: LogEntry[] = [];
let stop: () => void = () => undefined;
const events = () => logs.filter((entry) => entry.message === 'ApplicationEvent').map((entry) => entry.data);

beforeEach(() => {
  logs = [];
  stop = addLogSink((entry) => logs.push(entry));
});
afterEach(() => {
  stop();
});

describe('emailTargetState', () => {
  it('addAuditEventDetailEvent logs the event id and whether the date and the locality are set', () => {
    addAuditEventDetailEvent(ApplicationEvents_LDM.MyTimelineGuessEmailed, '', 'Uppsala');
    expect(events()).toEqual([
      { EventId: ApplicationEvents_LDM.MyTimelineGuessEmailed, HasDate: false, HasLocality: true },
    ]);
  });

  it('onEmailLDMEventParticipant: nothing when the screen is not opened from LDM', () => {
    onEmailLDMEventParticipant(readEmailTargetInputs(new URLSearchParams('EmailHost=True&EventDate=2026-11-08')));
    expect(events()).toEqual([]);
  });

  it('onEmailLDMEventParticipant: the host event when EmailHost, else the guest event', () => {
    onEmailLDMEventParticipant(
      readEmailTargetInputs(
        new URLSearchParams('IsFromLDM=True&EmailHost=True&EventDate=2026-11-08&EventLocality=Uppsala'),
      ),
    );
    onEmailLDMEventParticipant(readEmailTargetInputs(new URLSearchParams('IsFromLDM=true')));
    expect(events()).toEqual([
      { EventId: ApplicationEvents_LDM.MyTimelineHostEmailed, HasDate: true, HasLocality: true },
      { EventId: ApplicationEvents_LDM.MyTimelineGuessEmailed, HasDate: false, HasLocality: false },
    ]);
  });
});
