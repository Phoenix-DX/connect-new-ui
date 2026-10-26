import { describe, expect, it } from 'vitest';
import type { EventDocumentItem } from '@/api/event';
import type { ViewDocumentsInputs } from '@/pages/ViewDocuments/inputs';
import {
  eventDocumentsCallInputs,
  getContactHelpdeskSubject_Event,
  INITIAL_VIEW_DOCUMENTS_STATE,
  viewDocumentsReducer,
  withDocumentViewed,
} from './viewDocumentsState';

/* The pure parts of ScreenBlock_ViewDocuments. Fictional documents of an event. */
const doc = (name: string, isViewed = false): EventDocumentItem => ({
  DocumentURL: `https://example.com/docs/${name.toLowerCase().replace(/ /g, '-')}.pdf`,
  DocumentName: name,
  LastUpdatedOn: '',
  LastUpdatedBy: 'Event Office',
  IsViewed: isViewed,
});
const DOCS = [doc('Conference Programme'), doc('Hall Map'), doc('Hall Map')];
const INPUTS: ViewDocumentsInputs = {
  In_MemberId: '55',
  In_EventId: '7301',
  In_EventName: 'Spring Conference',
  In_EventStartDate: '2026-11-06T09:00:00',
  In_EventEndDate: '2026-11-08T17:00:00',
  In_EventLocation: 'Main Hall',
};

describe('viewDocumentsState', () => {
  it('starts with no documents and nothing fetched', () => {
    expect(INITIAL_VIEW_DOCUMENTS_STATE).toEqual({
      eventDocuments: [],
      isFetchingData: false,
      isLoadingDocument: false,
      isDataFetched: false,
      hasResponseDocuments: false,
    });
  });

  it('the reducer assigns the given variables only', () => {
    const next = viewDocumentsReducer(INITIAL_VIEW_DOCUMENTS_STATE, { isFetchingData: true });
    expect(next).toEqual({ ...INITIAL_VIEW_DOCUMENTS_STATE, isFetchingData: true });
    expect(INITIAL_VIEW_DOCUMENTS_STATE.isFetchingData).toBe(false);
  });

  it('the data action sends the block variables and the inputs', () => {
    const state = { ...INITIAL_VIEW_DOCUMENTS_STATE, isFetchingData: true };
    expect(eventDocumentsCallInputs(state, INPUTS)).toEqual({
      IsFetchingData: true,
      IsLoadingDocument: false,
      In_MemberId: '55',
      In_EventId: '7301',
      In_EventName: 'Spring Conference',
      In_EventLocation: 'Main Hall',
      In_EventStartDate: '2026-11-06T09:00:00',
      In_EventEndDate: '2026-11-08T17:00:00',
    });
  });

  describe('withDocumentViewed (Action_OpenDoc)', () => {
    it('marks the first document with that name as viewed', () => {
      const next = withDocumentViewed(DOCS, 'Hall Map');
      expect(next?.map((d) => d.IsViewed)).toEqual([false, true, false]);
      expect(DOCS[1]?.IsViewed).toBe(false);
    });

    it('matches the name with the PDF extension (AddExtensionToFile adds "pdf" without a dot)', () => {
      expect(withDocumentViewed(DOCS, 'Conference Programmepdf')?.map((d) => d.IsViewed)).toEqual([true, false, false]);
    });

    it('gives null when no document matches', () => {
      expect(withDocumentViewed(DOCS, 'Unknown.pdf')).toBeNull();
      expect(withDocumentViewed([], 'Hall Map')).toBeNull();
    });
  });

  describe('getContactHelpdeskSubject_Event', () => {
    const start = '2026-11-06T09:00:00';
    const end = '2026-11-08T17:00:00';
    const subject = getContactHelpdeskSubject_Event('Spring Conference', start, end, 'Main Hall');

    it('name - location - start - end', () => {
      expect(subject).toMatch(/^Spring Conference - Main Hall - .+ - .+$/);
      expect(subject).toContain('6 Nov');
      expect(subject).toContain('8 Nov');
    });

    it('drops the separators of the parts that are not set', () => {
      expect(getContactHelpdeskSubject_Event('Spring Conference', '', '', '')).toBe('Spring Conference');
      expect(getContactHelpdeskSubject_Event('Spring Conference', '', '', 'Main Hall')).toBe(
        'Spring Conference - Main Hall',
      );
      expect(getContactHelpdeskSubject_Event('', '', '', 'Main Hall')).toBe('Main Hall');
      expect(getContactHelpdeskSubject_Event('', start, end, '')).toBe(
        subject.replace('Spring Conference - Main Hall - ', ''),
      );
    });

    it('needs both dates to show them', () => {
      expect(getContactHelpdeskSubject_Event('Spring Conference', start, '', 'Main Hall')).toBe(
        'Spring Conference - Main Hall',
      );
      expect(getContactHelpdeskSubject_Event('Spring Conference', '', end, '')).toBe('Spring Conference');
    });
  });
});
