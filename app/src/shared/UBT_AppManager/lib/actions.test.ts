import { describe, expect, it } from 'vitest';
import { pIN_ValidateRules } from './actions';

describe('pIN_ValidateRules', () => {
  it('accepts a PIN that breaks no rule', () => {
    expect(pIN_ValidateRules('1357')).toEqual({ IsValid: true, Message: '' });
  });
  it.each([
    ['1984', 'PIN must not contain any calendar year.'],
    ['2098', 'PIN must not contain any calendar year.'],
    ['7779', 'PIN must not contain any 3 repeating numbers.'],
    ['5055', 'PIN must not contain any 3 repeating numbers.'],
    ['1234', 'PIN must not contain any 3 consecutive numbers.'],
    ['9876', 'PIN must not contain any 3 consecutive numbers.'],
    ['0456', 'PIN must not contain any 3 consecutive numbers.'],
  ])('rejects %s', (pin, message) => {
    expect(pIN_ValidateRules(pin)).toEqual({ IsValid: false, Message: message });
  });
  it('checks the year as a number (1800 and 2099 are allowed by the rule)', () => {
    expect(pIN_ValidateRules('1800').Message).not.toBe('PIN must not contain any calendar year.');
    expect(pIN_ValidateRules('2099').IsValid).toBe(true);
  });
});
