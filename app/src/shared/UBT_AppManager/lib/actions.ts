/* Client actions of UBT_AppManager used by the shared blocks, ported 1:1 from UBT_AppManager.controller.js
   (copy in migration/screens/SupperMeeting_Details/analysis/sources/raw/). The PIN storage actions (PIN_Get, PIN_Set,
   AppManager_SetPIN_*) are the shell's `src/shell/pin.ts`. */

/** OutSystems TextToInteger: the leading integer of the text, 0 when there is none. */
function textToInteger(text: string): number {
  const n = Number.parseInt(text, 10);
  return Number.isNaN(n) ? 0 : n;
}

export interface PIN_ValidateRulesOut {
  IsValid: boolean;
  Message: string;
}

/** PIN_ValidateRules (:8211-8339): a 4-digit PIN must not be a calendar year (1801-2098), contain 3 repeating digits
    or 3 consecutive digits (ascending or descending). */
export function pIN_ValidateRules(pinCode: string): PIN_ValidateRulesOut {
  const digit1 = textToInteger(pinCode.substring(0, 1));
  const digit2 = textToInteger(pinCode.substring(1, 2));
  const digit3 = textToInteger(pinCode.substring(2, 3));
  const digit4 = textToInteger(pinCode.substring(3, 4));
  const value = textToInteger(pinCode);
  if (value > 1800 && value < 2099) return { IsValid: false, Message: 'PIN must not contain any calendar year.' };
  if (
    (digit1 === digit2 && digit2 === digit3) ||
    (digit1 === digit2 && digit2 === digit4) ||
    (digit1 === digit3 && digit3 === digit4) ||
    (digit2 === digit3 && digit3 === digit4)
  ) {
    return { IsValid: false, Message: 'PIN must not contain any 3 repeating numbers.' };
  }
  if (
    (digit1 === digit2 + 1 && digit2 === digit3 + 1) ||
    (digit2 === digit3 + 1 && digit3 === digit4 + 1) ||
    (digit1 === digit2 - 1 && digit2 === digit3 - 1) ||
    (digit2 === digit3 - 1 && digit3 === digit4 - 1)
  ) {
    return { IsValid: false, Message: 'PIN must not contain any 3 consecutive numbers.' };
  }
  return { IsValid: true, Message: '' };
}
