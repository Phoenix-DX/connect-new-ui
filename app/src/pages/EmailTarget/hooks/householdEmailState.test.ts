import { afterEach, describe, expect, it, vi } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import type { AppManager_CachedUserInfoRec } from '@/platform/session/types';
import {
  ApplicationEvents_Directory_EmailHousehold,
  emailHouseholdEventAttachment,
  headerText,
  householdEmailIds,
  isFilled,
  scheduleFeedbackMessageAfterTransition,
  userContactRequest,
  zOnApplicationEvent_Wrapper,
} from './householdEmailState';

/* Fictional sender. */
const user: AppManager_CachedUserInfoRec = {
  isCommunityMember: true,
  ContactBaseId: '',
  MemberId: '4102',
  FirstName: 'Ingrid',
  LastName: 'Holm',
  Locality: 'Uppsala',
  Country: 'Sweden',
  CountryCode: 'SE',
  UserExternalId: '',
  Username: '',
  Email: 'ingrid.holm@example.org',
  Phone: '+46 18 555 0142',
};

afterEach(() => {
  vi.useRealTimers();
  resetFeedbackMessages();
});

describe('householdEmailState', () => {
  it('householdEmailIds: the widget ids from the block instance id', () => {
    expect(householdEmailIds('$b1')).toEqual({
      scope: 'b1',
      form: 'b1-Email_Form',
      subject: 'b1-Email_Subject',
      message: 'b1-TextArea_Message',
    });
  });

  it('headerText: School for OneSchool Global, Store for Campus&Co, else Member', () => {
    expect(headerText('OneSchool Global')).toBe('School');
    expect(headerText('Campus&Co')).toBe('Store');
    expect(headerText('')).toBe('Member');
    expect(headerText('oneschool global')).toBe('Member');
  });

  it('isFilled: Trim(value) <> ""', () => {
    expect(isFilled(' a ')).toBe(true);
    expect(isFilled('   ')).toBe(false);
    expect(isFilled('')).toBe(false);
  });

  it('userContactRequest: the inputs, the fields and the sender, with an empty phone', () => {
    expect(
      userContactRequest(
        { emailTo: 'mara.lindqvist@example.org', inHouseholdFirstName: 'Mara' },
        { subject: 'Supper meeting', message: 'See you on Sunday.' },
        user,
      ),
    ).toEqual({
      EmailTo: 'mara.lindqvist@example.org',
      ContactMember: 'Mara',
      FirstNameSender: 'Ingrid',
      LastNameSender: 'Holm',
      Subject: 'Supper meeting',
      Message: 'See you on Sunday.',
      FirstName: 'Mara',
      EmailFrom: 'ingrid.holm@example.org',
      SenderPhone: '',
      SenderLocality: 'Uppsala',
      SenderCountry: 'Sweden',
    });
  });

  it('emailHouseholdEventAttachment: EmailTo and "LastName, FirstName"', () => {
    expect(emailHouseholdEventAttachment('mara.lindqvist@example.org', user)).toBe(
      '{"EmailTo":"mara.lindqvist@example.org","NameOfSender":"Holm, Ingrid"}',
    );
  });

  it('zOnApplicationEvent_Wrapper logs the event without the attachment', () => {
    const logs: LogEntry[] = [];
    const stop = addLogSink((entry) => logs.push(entry));
    zOnApplicationEvent_Wrapper(ApplicationEvents_Directory_EmailHousehold, '{"EmailTo":"x"}');
    stop();
    expect(logs.map((entry) => [entry.message, entry.data])).toEqual([
      ['ApplicationEvent', { EventId: ApplicationEvents_Directory_EmailHousehold, HasAttachment: true }],
    ]);
  });

  it('scheduleFeedbackMessageAfterTransition shows the success message after 500 ms', () => {
    vi.useFakeTimers();
    scheduleFeedbackMessageAfterTransition('Your message has been sent.');
    vi.advanceTimersByTime(499);
    expect(getFeedbackMessage()).toBeNull();
    vi.advanceTimersByTime(1);
    expect(getFeedbackMessage()).toMatchObject({ message: 'Your message has been sent.', type: 1 });
  });
});
