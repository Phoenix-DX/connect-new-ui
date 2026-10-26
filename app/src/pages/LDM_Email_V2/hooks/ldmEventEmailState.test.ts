import { describe, expect, it } from 'vitest';
import type { EventEmailCoordinatorData } from '@/api/message';
import type { AppManager_CachedUserInfoRec } from '@/platform/session/types';
import {
  ApplicationEvents_Directory_EmailHousehold,
  ApplicationEvents_LDM,
} from '@/pages/LDM_Email_V2/components/actions';
import type { EventEmailInputs } from '@/pages/LDM_Email_V2/inputs';
import {
  INITIAL_LDM_EVENT_EMAIL_STATE,
  coordinatorPhone,
  emailApplicationEventId,
  emailEventAttachment,
  emptyCoordinatorDetailsData,
  eventContactRequest,
  hasContent,
  hasTypedMessage,
  ldmEventEmailIds,
  ldmEventEmailReducer,
  restoreLdmEventEmailState,
  type LdmEventEmailAction,
  type LdmEventEmailState,
} from './ldmEventEmailState';

/* Fictional coordinator and sender of the LDM world (src/mocks/fictional/ldm.ts). */
const COORDINATOR: EventEmailCoordinatorData = {
  coordinatorDetails: {
    ...emptyCoordinatorDetailsData().coordinatorDetails,
    CoordinatorName: ' Rosa Medina ',
    CoordinatorEmail: 'rosa.medina@example.test',
    CoordinatorPhoneNumber: '+54 291 555 0144',
    LocalityName: 'Bahia Blanca',
    CountryName: 'Argentina',
    EventDate: '2026-10-03T20:00:00',
    Timezone: { TimezoneLabel: 'ART', OffsetSeconds: '-10800' },
  },
  hasContent: true,
  eventName: 'Supper at the Medina home',
  eventDateText: '2026-10-03',
};
const USER: AppManager_CachedUserInfoRec = {
  isCommunityMember: true,
  ContactBaseId: '1',
  MemberId: '2',
  FirstName: 'Julián',
  LastName: 'Vitale',
  Locality: 'Bahia Blanca',
  Country: 'Argentina',
  CountryCode: 'AR',
  UserExternalId: '3',
  Username: 'jvitale',
  Email: 'julian.vitale@example.test',
  Phone: '+54 291 555 0101',
};
const INPUTS: EventEmailInputs = {
  In_EventHostId: '88231',
  In_EventId: '70415',
  In_IsMessageGuest: false,
  In_IsContactOrganiser: false,
  EventDate: '2026-10-03',
  EventLocality: 'Bahia Blanca',
};

const apply = (state: LdmEventEmailState, ...actions: LdmEventEmailAction[]) =>
  actions.reduce(ldmEventEmailReducer, state);
const fetched = apply(
  INITIAL_LDM_EVENT_EMAIL_STATE,
  { type: 'fetchStarted' },
  { type: 'fetched', coordinator: COORDINATOR },
  { type: 'userInfoAssigned', userInfo: USER },
  { type: 'fetchEnded' },
);

describe('ldmEventEmailReducer', () => {
  it('OnInitialize: the defaults; a restored view starts from them too', () => {
    expect(INITIAL_LDM_EVENT_EMAIL_STATE).toEqual({
      message: '',
      subject: '',
      userInfo: null,
      isFetching: false,
      callPopupData: {},
      coordinator: null,
      hasFetchError: false,
    });
    expect(restoreLdmEventEmailState()).toBe(INITIAL_LDM_EVENT_EMAIL_STATE);
  });

  it('a fetch: IsFetching, the outputs, the Subject "<event name> - <date>", UserInfo', () => {
    expect(apply(INITIAL_LDM_EVENT_EMAIL_STATE, { type: 'fetchStarted' }).isFetching).toBe(true);
    expect(fetched).toMatchObject({
      coordinator: COORDINATOR,
      subject: 'Supper at the Medina home - 2026-10-03',
      userInfo: USER,
      isFetching: false,
      hasFetchError: false,
    });
  });

  it('a failed fetch sets HasFetchError and keeps IsFetching; a later fetch clears the error', () => {
    const failed = apply(INITIAL_LDM_EVENT_EMAIL_STATE, { type: 'fetchStarted' }, { type: 'fetchFailed' });
    expect(failed).toMatchObject({ hasFetchError: true, isFetching: true });
    expect(apply(failed, { type: 'fetched', coordinator: COORDINATOR }).hasFetchError).toBe(false);
  });

  it('"Has null eventId?": Out_HasContent False on the record defaults', () => {
    const state = apply(INITIAL_LDM_EVENT_EMAIL_STATE, { type: 'noContent' });
    expect(state.coordinator).toEqual({ ...emptyCoordinatorDetailsData(), hasContent: false });
    expect(hasContent(state)).toBe(false);
    expect(hasContent(INITIAL_LDM_EVENT_EMAIL_STATE)).toBe(true);
  });

  it('the message: changed, then cleared', () => {
    const typed = apply(fetched, { type: 'messageChanged', message: 'We bring dessert.' });
    expect(typed.message).toBe('We bring dessert.');
    expect(apply(typed, { type: 'messageCleared' }).message).toBe('');
  });

  it('the call popup of the coordinator opens and closes', () => {
    const open = apply(fetched, { type: 'callPopupOpened', imageURL: '/img/ldm-logo.svg' });
    expect(open.callPopupData).toEqual({
      Phone: '+54 291 555 0144',
      ContactPopupData: {
        ImageURL: '/img/ldm-logo.svg',
        IsAvatarImage: false,
        Name: 'Rosa Medina',
        Locality: 'Bahia Blanca',
        TimezoneName: 'ART',
        TimezoneOffset: -10800,
        ShowPopup: true,
        DisplayContactNumber: '+54 291 555 0144',
        CountryName: 'Argentina',
      },
    });
    const closed = apply(open, { type: 'callPopupClosed' });
    expect(closed.callPopupData.ContactPopupData).toMatchObject({ ShowPopup: false, Name: 'Rosa Medina' });
    expect(closed.callPopupData.Phone).toBe('+54 291 555 0144');
  });
});

describe('ldmEventEmailState rules', () => {
  it('the widget ids of the block instance', () => {
    expect(ldmEventEmailIds('$b1')).toEqual({
      scope: 'b1',
      form: 'b1-ContactOrganiser_Form',
      inputFrom: 'b1-Input_From',
      inputTo: 'b1-Input_To',
      subject: 'b1-TextArea_Subject',
      message: 'b1-TextArea_Message',
    });
  });

  it('a typed message is one with a character other than spaces', () => {
    expect(hasTypedMessage({ ...fetched, message: '   ' })).toBe(false);
    expect(hasTypedMessage({ ...fetched, message: ' Hi ' })).toBe(true);
  });

  it('the coordinator phone is "" before the fetch', () => {
    expect(coordinatorPhone(INITIAL_LDM_EVENT_EMAIL_STATE)).toBe('');
    expect(coordinatorPhone(fetched)).toBe('+54 291 555 0144');
  });

  it('EventContact gets the coordinator as the recipient and the cached user as the sender', () => {
    expect(eventContactRequest({ ...fetched, message: 'We bring dessert.' })).toEqual({
      EmailTo: 'rosa.medina@example.test',
      ContactMember: ' Rosa Medina ',
      FirstNameSender: 'Julián',
      LastNameSender: 'Vitale',
      Subject: 'Supper at the Medina home - 2026-10-03',
      Message: 'We bring dessert.',
      FirstName: ' Rosa Medina ',
      EmailFrom: 'julian.vitale@example.test',
      SenderPhone: '+54 291 555 0101',
      SenderLocality: 'Bahia Blanca',
      SenderCountry: '',
    });
    expect(eventContactRequest(INITIAL_LDM_EVENT_EMAIL_STATE)).toMatchObject({ EmailTo: '', FirstNameSender: '' });
  });

  it('the EmailEvent attachment: EmailTo and "LastName, FirstName"', () => {
    expect(JSON.parse(emailEventAttachment(fetched))).toEqual({
      EmailTo: 'rosa.medina@example.test',
      NameOfSender: 'Vitale, Julián',
    });
    expect(JSON.parse(emailEventAttachment(INITIAL_LDM_EVENT_EMAIL_STATE))).toEqual({
      EmailTo: '',
      NameOfSender: ', ',
    });
  });

  it('the application event: guest message, else contact organiser, else the household e-mail', () => {
    expect(emailApplicationEventId({ ...INPUTS, In_IsMessageGuest: true, In_IsContactOrganiser: true })).toBe(
      ApplicationEvents_LDM.HostMessageGuest,
    );
    expect(emailApplicationEventId({ ...INPUTS, In_IsContactOrganiser: true })).toBe(
      ApplicationEvents_LDM.ContactEventOrganiser,
    );
    expect(emailApplicationEventId(INPUTS)).toBe(ApplicationEvents_Directory_EmailHousehold);
  });
});
