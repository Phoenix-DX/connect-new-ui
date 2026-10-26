import { describe, expect, it } from 'vitest';
import { Type_ContactSubject } from '@/pages/ContactUsDetails/staticEntities';
import { mockDirectoryUser } from '@/platform/session/mockUser';
import {
  contactUsDetailsReducer,
  countriesCallInputs,
  emptyCallPopupData,
  emptyContactUsForm,
  get_ContactUsFormDescription,
  initialContactUsDetailsState,
  isEmailValid,
  isPhoneNumberValid,
  jSUtils_String_CheckNumbers,
  localityTimezoneCallInputs,
  onChange_FormInput,
  trimContactUsForm,
  type ContactUsDetailsAction,
  type ContactUsDetailsState,
} from './contactUsDetailsState';

describe('get_ContactUsFormDescription', () => {
  it('gives the UBT One description and the default prompt (captured subject)', () => {
    const out = get_ContactUsFormDescription(Type_ContactSubject.SetupAUBTOneAccount);
    expect(out.out_FormDescription.startsWith('UBT One lets you access all your UBT applications')).toBe(true);
    expect(out.out_MessagePrompt).toBe(
      'To help us assist you better, please provide your query/ issue regarding Set up a UBT One account.',
    );
  });
  it('overrides the prompt for the general questions and feedback subjects', () => {
    expect(get_ContactUsFormDescription(Type_ContactSubject.GeneralQuestions).out_MessagePrompt).toBe(
      'To help us assist you better, please provide your question.',
    );
    expect(get_ContactUsFormDescription(Type_ContactSubject.GeneralSuggestionsFeedbackRating).out_MessagePrompt).toBe(
      'To help us improve Connect, please share your suggestions or feedback.',
    );
  });
  it('keeps an empty description for an unknown subject', () => {
    expect(get_ContactUsFormDescription('x').out_FormDescription).toBe('');
  });
});

describe('validators', () => {
  it('checks email, phone and digits like the library JS nodes', () => {
    expect(isEmailValid(' alex.example@example.com ')).toBe(true);
    expect(isEmailValid('alex@')).toBe(false);
    expect(isPhoneNumberValid('+54 291 555 0100')).toBe(true);
    expect(isPhoneNumberValid('')).toBe(false);
    expect(jSUtils_String_CheckNumbers('Alex 2')).toBe(true);
    expect(jSUtils_String_CheckNumbers('Alex')).toBe(false);
  });
});

describe('onChange_FormInput', () => {
  const form = { ...emptyContactUsForm(), FullName: 'A', Email: 'b', PhoneNumber: '1', Country: 'C', Locality: 'L' };
  it('signed in: the message decides, or a rate on the feedback subject', () => {
    expect(onChange_FormInput(true, { ...form, Message: 'hi' }, 'x', 0)).toEqual({
      isFormFilled: true,
      isAnyFilled: true,
    });
    expect(onChange_FormInput(true, form, 'x', 3)).toEqual({ isFormFilled: false, isAnyFilled: false });
    expect(onChange_FormInput(true, form, Type_ContactSubject.GeneralSuggestionsFeedbackRating, 3).isFormFilled).toBe(
      true,
    );
  });
  it('signed out: every trimmed field filled / any filled', () => {
    expect(onChange_FormInput(false, { ...form, Message: ' ' }, 'x', 0)).toEqual({
      isFormFilled: false,
      isAnyFilled: true,
    });
    expect(onChange_FormInput(false, { ...form, Message: 'm' }, 'x', 0).isFormFilled).toBe(true);
    expect(onChange_FormInput(false, emptyContactUsForm(), 'x', 0).isAnyFilled).toBe(false);
  });
  it('trims every field before sending', () => {
    expect(trimContactUsForm({ ...form, Message: ' m ' }).Message).toBe('m');
  });
});

const inputs = {
  In_ContactSubjectId: Type_ContactSubject.SetupAUBTOneAccount,
  In_ContactSubjectTitle: 'UBT One',
  In_ListMenuOptionLabel: 'Set up a UBT One account',
};
const feedback = { ...inputs, In_ContactSubjectId: Type_ContactSubject.GeneralSuggestionsFeedbackRating };
const user = mockDirectoryUser({ policies: false, expired: false, householder: true });
const run = (state: ContactUsDetailsState, ...actions: ContactUsDetailsAction[]) =>
  actions.reduce(contactUsDetailsReducer, state);

describe('initialContactUsDetailsState', () => {
  it('signed in: the description and prompt of the subject, loading until the user information comes', () => {
    const state = initialContactUsDetailsState(inputs, true, false);
    expect(state.description.startsWith('UBT One lets you access')).toBe(true);
    expect(state.messagePrompt).toContain('regarding Set up a UBT One account.');
    expect(state).toMatchObject({ isLogged: true, isLoadingMainData: true, ignorePolices: false, showRate: false });
    expect(state.contactUsForm).toEqual(emptyContactUsForm());
    expect(state.callPopupData).toEqual(emptyCallPopupData());
  });
  it('shows the rate only for the feedback subject, signed in', () => {
    expect(initialContactUsDetailsState(feedback, true, false).showRate).toBe(true);
    expect(initialContactUsDetailsState(feedback, false, true)).toMatchObject({
      showRate: false,
      isLoadingMainData: false,
      ignorePolices: true,
    });
  });
});

describe('contactUsDetailsReducer', () => {
  const signedIn = initialContactUsDetailsState(inputs, true, false);

  it('the user information fills the form and the country phone; the time zone goes to the call popup', () => {
    const state = run(
      signedIn,
      { type: 'userInformationFetched', user },
      { type: 'timezoneFetched', timezone: { timezoneName: 'ART', timezoneOffset: -180 } },
    );
    expect(state.isLoadingMainData).toBe(false);
    expect(state.contactUsForm).toEqual({
      FullName: user.FullName,
      Email: user.Email,
      PhoneNumber: user.HomeNumber,
      Country: 'Argentina',
      Locality: 'Bahia Blanca',
      Message: '',
    });
    expect(state.countryPhone).toBe('+54 11 555 0100');
    expect(state.timezone).toEqual({ timezoneName: 'ART', timezoneOffset: -180 });
    expect(state.callPopupData.ContactPopupData).toMatchObject({ TimezoneName: 'ART', TimezoneOffset: -180 });
  });

  it('a message change runs OnChange_FormInput', () => {
    const typed = run(signedIn, {
      type: 'messageChanged',
      message: 'Hello',
      contactSubjectId: inputs.In_ContactSubjectId,
    });
    expect(typed).toMatchObject({ isFormFilled: true, isAnyFilled: true });
    expect(typed.contactUsForm.Message).toBe('Hello');
    const cleared = run(typed, { type: 'messageChanged', message: '', contactSubjectId: inputs.In_ContactSubjectId });
    expect(cleared).toMatchObject({ isFormFilled: false, isAnyFilled: false });
  });

  it('the submit trims the form and sets isSubmiting; the reset empties the form and the flags', () => {
    const typed = run(signedIn, {
      type: 'messageChanged',
      message: '  Hello  ',
      contactSubjectId: inputs.In_ContactSubjectId,
    });
    const started = run(typed, { type: 'submitStarted' }, { type: 'formFilledCleared' });
    expect(started.contactUsForm.Message).toBe('Hello');
    expect(started).toMatchObject({ isSubmiting: true, isFormFilled: false, isAnyFilled: true });
    expect(run(started, { type: 'submitEnded' }).isSubmiting).toBe(false);
    const reset = run(started, { type: 'formReset' });
    expect(reset.contactUsForm).toEqual(emptyContactUsForm());
    expect(reset).toMatchObject({ isFormFilled: false, isAnyFilled: false });
  });

  it('the Support Team link opens the call popup with the country phone; Cancel closes it', () => {
    const opened = run(
      signedIn,
      { type: 'userInformationFetched', user },
      { type: 'timezoneFetched', timezone: { timezoneName: 'ART', timezoneOffset: -180 } },
      { type: 'supportTeamClicked', imageUrl: '/logo.png' },
    );
    expect(opened.callPopupData.Phone).toBe('+54 11 555 0100');
    expect(opened.callPopupData.ContactPopupData).toMatchObject({
      ImageURL: '/logo.png',
      Name: 'Support Team',
      TimezoneName: 'ART',
      TimezoneOffset: -180,
      Locality: 'Bahia Blanca',
      CountryName: 'Argentina',
      DisplayContactNumber: '+54 11 555 0100',
      IsAvatarImage: false,
      TitleTerminator: '?',
      ShowPopup: true,
    });
    const closed = run(opened, { type: 'callPopupClosed' });
    expect(closed.callPopupData.ContactPopupData.ShowPopup).toBe(false);
    expect(closed.callPopupData.Phone).toBe('+54 11 555 0100');
  });

  it('toggles the "contacted about my feedback" check box and keeps the countries', () => {
    const state = run(
      signedIn,
      { type: 'wantToBeContactedToggled' },
      { type: 'countriesFetched', countries: [{ code: 'AR', name: 'Argentina' }] },
    );
    expect(state.userWantToBeContacted).toBe(true);
    expect(state.countries).toEqual([{ code: 'AR', name: 'Argentina' }]);
    expect(run(state, { type: 'wantToBeContactedToggled' }).userWantToBeContacted).toBe(false);
  });
});

describe('call inputs', () => {
  it('GetCountriesNames sends the screen variables of OnReady', () => {
    const state = initialContactUsDetailsState(inputs, false, true);
    expect(countriesCallInputs(state, inputs)).toEqual({
      isLogged: false,
      isLoadingMainData: false,
      IgnorePolices: true,
      ...inputs,
    });
  });
  it('GetLocalityTimezone sends the screen variables after the user information, in their order', () => {
    const state = run(initialContactUsDetailsState(inputs, true, false), { type: 'userInformationFetched', user });
    const body = localityTimezoneCallInputs(state, inputs);
    expect(Object.keys(body)).toEqual([
      'IsFormFilled',
      'IsAnyFilled',
      'isLogged',
      'CountryPhone',
      'isSubmiting',
      'Rate_SelectedRate',
      'Rate_ShowRate',
      'Rate_UserWantToBeContacted',
      'CallPopupData',
      'isLoadingMainData',
      'IgnorePolices',
      'In_ContactSubjectId',
      'In_ContactSubjectTitle',
      'In_ListMenuOptionLabel',
    ]);
    expect(body).toMatchObject({
      IsFormFilled: false,
      IsAnyFilled: false,
      isLogged: true,
      CountryPhone: '+54 11 555 0100',
      isSubmiting: false,
      Rate_SelectedRate: 0,
      Rate_ShowRate: false,
      Rate_UserWantToBeContacted: false,
      isLoadingMainData: false,
      IgnorePolices: false,
    });
    expect(body.CallPopupData).toEqual(emptyCallPopupData());
  });
});
