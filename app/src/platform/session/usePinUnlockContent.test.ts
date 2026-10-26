import { describe, expect, it } from 'vitest';
import { pinUnlockErrorFeedback } from './usePinUnlockContent';

describe('pinUnlockErrorFeedback (Event_Pincode_PinUnlockError)', () => {
  it('maps the two known errors and keeps any other text', () => {
    expect(pinUnlockErrorFeedback('Pin does not match')).toEqual({
      message: 'Your current PIN is not correct!',
      navigateToPINRegister: false,
    });
    expect(pinUnlockErrorFeedback('User not found')).toEqual({
      message: 'No matching user. Please Register a PIN',
      navigateToPINRegister: true,
    });
    expect(pinUnlockErrorFeedback('User not logged in.')).toEqual({
      message: 'User not logged in.',
      navigateToPINRegister: false,
    });
  });
});
