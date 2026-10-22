import { useMemo, useState } from 'react';
import { Menu_List } from '@/shared/UBTConnect/Menu_List';
import type { UI_MenuSection } from '@/shared/UBTConnect/Menu_List';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { UBT_Icons2_Fingerprint, UBT_Icons2_Password } from './components/staticEntities';
import type { UI_ListMenuOption } from './types';

/** Screen variables ChangePinName / BiometricLoginName (p:UBTConnect.App_Menu.PINBiometricsMenu.mvc.js:16-21): never
    changed, the row labels and the keys of the click handler. */
const CHANGE_PIN_NAME = 'Change PIN';
const BIOMETRIC_LOGIN_NAME = 'Biometric Login';

/** UBT_AppManager AppManager_GetPIN_FingerprintReaderAvailable: Available = client var
    PIN_FingerprintReaderAvailable_IsPersistent (UBT_AppManager.controller.js:1825), set True only by the native
    fingerprint check (UBT_AppManager_Mobile.controller.js:225). No reader in a browser: biometric unlock hidden on the
    web (decision U13, migration/app-shell.spec.md:293, 323; the capture shows only the Change PIN row). */
const appManager_GetPIN_FingerprintReaderAvailable = (): boolean => false;

/** ScreenEvent_OnInitialize when the view is not restored from cache (:266-291): ListClear, the Change PIN row, then the
    Biometric Login row (switch = App_PIN_BiometricEnabled) when a fingerprint reader is available. */
function initializeMenuOptionList(): UI_ListMenuOption[] {
  const list: UI_ListMenuOption[] = [{ IconId: UBT_Icons2_Password, Label: CHANGE_PIN_NAME }];
  if (appManager_GetPIN_FingerprintReaderAvailable()) {
    list.push({
      IconId: UBT_Icons2_Fingerprint,
      Label: BIOMETRIC_LOGIN_NAME,
      LabelDescription: 'Sign in with Fingerprint or Face Recognition authentication',
      useSwitch: true,
      SwitchValue: getClientVar('UBTConnect.App_PIN_BiometricEnabled'),
    });
  }
  return list;
}

/** UBTConnect App_Menu.PINBiometricsMenu (p:UBTConnect.App_Menu.PINBiometricsMenu.mvc.js; view :67-215, controller
    :216-416). No input, no data action (:63, 233).
    - Layout_DetailPage (primary, title centred) titled "PIN & Biometrics" (:148-158); header right, header content,
      bottom and CommonUI placeholders empty (:157-158, 205-206): no CommonUI, so `useNoCommonUi()` (shell guide).
    - Content: Menu_List with In_MenuSection {HasSeparator False, MenuOptions = MenuOptionList} (:159-203), recomputed
      when MenuOptionList changes (getCachedValue, :163-171).
    - OnInitialize (:235-301): IsViewRestoredFromCache → keep the cached MenuOptionList (P-BACK); else build it. */
export default function PINBiometricsMenu() {
  useNoCommonUi();
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  // OnInitialize runs once before the first render; a restored view keeps the cached list (:261-264).
  const [initialMenuOptionList] = useState(() => (restored ? [] : initializeMenuOptionList()));
  const [menuOptionList] = useViewState<UI_ListMenuOption[]>('MenuOptionList', initialMenuOptionList);
  const inMenuSection = useMemo<UI_MenuSection>(
    () => ({ HasSeparator: false, MenuOptions: menuOptionList }),
    [menuOptionList],
  );

  // OnClick_MenuOption (:315-350): ChangePin → /UBTConnect/PINChange (Default transition); Biometric Login → toggle
  // App_PIN_BiometricEnabled; any other label does nothing.
  const onClickMenuOption = (option: UI_ListMenuOption) => {
    if (option.Label === CHANGE_PIN_NAME) {
      navigate(`/${APP_ID}/PINChange`);
    } else if (option.Label === BIOMETRIC_LOGIN_NAME) {
      setClientVar('UBTConnect.App_PIN_BiometricEnabled', !getClientVar('UBTConnect.App_PIN_BiometricEnabled'));
    }
  };

  return (
    <Layout_DetailPage
      id="$b1"
      placeholderHeaderTitle="PIN & Biometrics"
      content={<Menu_List id="$b2" inMenuSection={inMenuSection} onOnClickMenuOption={onClickMenuOption} />}
    />
  );
}
