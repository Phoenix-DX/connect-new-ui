import { describe, expect, it } from 'vitest';
import type { EmailContactInputs } from '@/pages/EmailContact/inputs';
import {
  MESSAGE_MAX_LENGTH,
  hasUnsentText,
  initialOrbitContactFormState,
  isFilled,
  orbitContactFormIds,
  orbitContactFormReducer,
  toOrbitContactEmail,
  type OrbitContactFormAction,
  type OrbitContactFormState,
} from './orbitContactFormState';

const initial = initialOrbitContactFormState('Arrival on Friday', 2);
const apply = (state: OrbitContactFormState, ...actions: OrbitContactFormAction[]) =>
  actions.reduce(orbitContactFormReducer, state);

describe('orbitContactFormReducer', () => {
  it('OnInitialize: In_Subject and LineCount, every other variable at its default', () => {
    expect(initial).toEqual({
      subject: 'Arrival on Friday',
      userSubject: '',
      message: '',
      userFullName: '',
      isSubmitting: false,
      previousMessage: '',
      lineCount: 2,
    });
  });

  it('assigns the user name, the subject and the message', () => {
    const state = apply(
      initial,
      { type: 'userFullNameAssigned', userFullName: 'Lucía Fernández' },
      { type: 'userSubjectChanged', userSubject: 'Our arrival' },
      { type: 'messageChanged', message: 'See you on Friday.' },
    );
    expect(state).toMatchObject({
      userFullName: 'Lucía Fernández',
      userSubject: 'Our arrival',
      message: 'See you on Friday.',
    });
  });

  it('key down keeps the message; key up at MessageMaxLength puts it back', () => {
    const before = apply(initial, { type: 'messageChanged', message: 'short' }, { type: 'messageKeyDown' });
    expect(before.previousMessage).toBe('short');
    const atMax = apply(before, { type: 'messageChanged', message: 'x'.repeat(MESSAGE_MAX_LENGTH) });
    expect(apply(atMax, { type: 'messageKeyUp' }).message).toBe('short');
    const below = apply(before, { type: 'messageChanged', message: 'x'.repeat(MESSAGE_MAX_LENGTH - 1) });
    expect(orbitContactFormReducer(below, { type: 'messageKeyUp' })).toBe(below);
  });

  it('submit: IsSubmitting True, then False; a sent e-mail clears Message, In_Subject and UserSubject', () => {
    const filled = apply(
      initial,
      { type: 'userSubjectChanged', userSubject: 'Our arrival' },
      { type: 'messageChanged', message: 'See you on Friday.' },
    );
    expect(apply(filled, { type: 'submitStarted' }).isSubmitting).toBe(true);
    const sent = apply(filled, { type: 'submitStarted' }, { type: 'submitEnded' }, { type: 'sent' });
    expect(sent).toMatchObject({ isSubmitting: false, message: '', subject: '', userSubject: '', lineCount: 2 });
  });
});

describe('orbitContactFormIds', () => {
  it('prefixes the widget ids with the instance id without "$"', () => {
    expect(orbitContactFormIds('$b1')).toEqual({
      prefix: 'b1',
      form: 'b1-Form',
      inSubject: 'b1-TextArea_In_Subject',
      subject: 'b1-Input_Subject',
      message: 'b1-TextArea_Message',
    });
  });
});

describe('the rules of the flows', () => {
  it('a mandatory text is filled when it has more than spaces', () => {
    expect(isFilled('  ')).toBe(false);
    expect(isFilled(' a ')).toBe(true);
  });

  it('NavigationHandlerNavigation: the helpdesk form checks the message, the host form the subject or the message', () => {
    const subjectOnly = apply(initial, { type: 'userSubjectChanged', userSubject: 'Our arrival' });
    const messageOnly = apply(initial, { type: 'messageChanged', message: 'Hello' });
    expect(hasUnsentText(initial, true)).toBe(false);
    expect(hasUnsentText(subjectOnly, true)).toBe(false);
    expect(hasUnsentText(messageOnly, true)).toBe(true);
    expect(hasUnsentText(initial, false)).toBe(false);
    expect(hasUnsentText(subjectOnly, false)).toBe(true);
    expect(hasUnsentText(messageOnly, false)).toBe(true);
  });

  it('SendContactEmail gets the inputs, the variables and the EmailInfo (MilestoneName = In_MilestoneTitle)', () => {
    const inputs: EmailContactInputs = {
      In_IsContactHelpdesk: false,
      In_EventId: '7301',
      In_MilestoneId: '7301-1',
      In_TargetMemberId: '0',
      In_Subject: '',
      In_MilestoneTitle: 'Accommodation',
      In_EventName: 'Weekend Bible Conferences - Bahia and Azul',
      In_HostName: 'Mr Paolo & Mrs Anna Vitale',
      In_HostEmail: 'vitale.family@example.com',
      In_FormattedDateTime: 'Fri 18:00',
    };
    const state = apply(
      initialOrbitContactFormState('', 0),
      { type: 'userFullNameAssigned', userFullName: 'Lucía Fernández' },
      { type: 'userSubjectChanged', userSubject: 'Our arrival' },
      { type: 'messageChanged', message: 'See you on Friday.' },
    );
    expect(toOrbitContactEmail(inputs, state)).toEqual({
      isContactHelpdesk: false,
      eventId: '7301',
      milestoneId: '7301-1',
      targetMemberId: '0',
      subject: '',
      userSubject: 'Our arrival',
      message: 'See you on Friday.',
      emailInfo: {
        EventName: 'Weekend Bible Conferences - Bahia and Azul',
        SenderFullName: 'Lucía Fernández',
        HostName: 'Mr Paolo & Mrs Anna Vitale',
        HostEmail: 'vitale.family@example.com',
        MilestoneName: 'Accommodation',
        FormattedDateTime: 'Fri 18:00',
      },
    });
  });
});
