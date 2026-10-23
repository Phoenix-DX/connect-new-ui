import { describe, expect, it } from 'vitest';
import { BIOMETRIC_LOGIN_NAME, CHANGE_PIN_NAME, initialMenuOptionList } from './pinBiometricsMenuState';

const changePinRow = { IconId: 'connect-icon-password', Label: 'Change PIN' };

describe('PINBiometricsMenu OnInitialize', () => {
  it('the screen variables are the two row labels', () => {
    expect([CHANGE_PIN_NAME, BIOMETRIC_LOGIN_NAME]).toEqual(['Change PIN', 'Biometric Login']);
  });

  it('without a fingerprint reader (the web): only the Change PIN row', () => {
    expect(initialMenuOptionList(false, true)).toEqual([changePinRow]);
    expect(initialMenuOptionList(false, false)).toEqual([changePinRow]);
  });

  it('with a fingerprint reader: the Biometric Login row, with a switch at App_PIN_BiometricEnabled', () => {
    const biometricRow = {
      IconId: 'connect-icon-fingerprint',
      Label: 'Biometric Login',
      LabelDescription: 'Sign in with Fingerprint or Face Recognition authentication',
      useSwitch: true,
    };
    expect(initialMenuOptionList(true, true)).toEqual([changePinRow, { ...biometricRow, SwitchValue: true }]);
    expect(initialMenuOptionList(true, false)).toEqual([changePinRow, { ...biometricRow, SwitchValue: false }]);
  });

  it('builds a new list on each call', () => {
    expect(initialMenuOptionList(false, true)).not.toBe(initialMenuOptionList(false, true));
  });
});
