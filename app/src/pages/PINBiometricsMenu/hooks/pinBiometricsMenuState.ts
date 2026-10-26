import type { UI_ListMenuOption } from '@/components/menu/MenuList';
import { UBT_Icons2_Fingerprint, UBT_Icons2_Password } from '@/pages/PINBiometricsMenu/staticEntities';

/** The screen variables of the PIN & Biometrics menu and its OnInitialize list, as pure code.
    @origin UBTConnect.App_Menu.PINBiometricsMenu */

/** [ChangePinName] The label of the Change PIN row and the key of its click. The screen never changes it. */
export const CHANGE_PIN_NAME = 'Change PIN';

/** [BiometricLoginName] The label of the Biometric Login row and the key of its click. The screen never changes it. */
export const BIOMETRIC_LOGIN_NAME = 'Biometric Login';

/** [MenuOptionList] ScreenEvent_OnInitialize on a view that is not restored from the cache: ListClear, the Change PIN
    row, then the Biometric Login row when a fingerprint reader is available. The Biometric Login row has a switch with
    the value of App_PIN_BiometricEnabled. */
export function initialMenuOptionList(
  fingerprintReaderAvailable: boolean,
  biometricEnabled: boolean,
): UI_ListMenuOption[] {
  const list: UI_ListMenuOption[] = [{ IconId: UBT_Icons2_Password, Label: CHANGE_PIN_NAME }];
  if (fingerprintReaderAvailable) {
    list.push({
      IconId: UBT_Icons2_Fingerprint,
      Label: BIOMETRIC_LOGIN_NAME,
      LabelDescription: 'Sign in with Fingerprint or Face Recognition authentication',
      useSwitch: true,
      SwitchValue: biometricEnabled,
    });
  }
  return list;
}
