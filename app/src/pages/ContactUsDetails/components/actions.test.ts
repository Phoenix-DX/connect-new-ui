import { describe, expect, it } from 'vitest';
import {
  emptyContactUsForm,
  get_ContactUsFormDescription,
  isEmailValid,
  isPhoneNumberValid,
  jSUtils_String_CheckNumbers,
  onChange_FormInput,
  trimContactUsForm,
} from './actions';
import { Type_ContactSubject } from './staticEntities';

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
