import { useMemo, useState } from 'react';
import type { UI_ListMenuOption, UI_MenuSection } from '@/components/menu/MenuList';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { clientVar } from '@/platform/session/session';
import { BIOMETRIC_LOGIN_NAME, CHANGE_PIN_NAME, initialMenuOptionList } from './pinBiometricsMenuState';

/** The flows of the PIN & Biometrics menu: OnInitialize (the rows, which the view cache keeps) and
    OnClick_MenuOption. The screen has no input, no OnReady and no data action.
    @origin UBTConnect.App_Menu.PINBiometricsMenu */

/** UBT_AppManager AppManager_GetPIN_FingerprintReaderAvailable: the client variable
    PIN_FingerprintReaderAvailable_IsPersistent, which only the native fingerprint check sets to True. A browser has no
    fingerprint reader, so the biometric unlock is hidden on the web (decision U13, migration/app-shell.spec.md; the
    capture shows only the Change PIN row). */
const appManager_GetPIN_FingerprintReaderAvailable = (): boolean => false;

interface PINBiometricsMenuFlows {
  /** In_MenuSection of Menu_List: no separator and the rows; a new record whenever MenuOptionList changes. */
  menuSection: UI_MenuSection;
  /** OnClick_MenuOption of a Menu_List row. */
  onMenuOption: (option: UI_ListMenuOption) => void;
}

export function usePINBiometricsMenu(): PINBiometricsMenuFlows {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  // OnInitialize runs once before the first render. A view restored from the cache keeps its cached rows.
  const [initial] = useState(() =>
    restored
      ? []
      : initialMenuOptionList(appManager_GetPIN_FingerprintReaderAvailable(), clientVar.biometricEnabled.get()),
  );
  const [menuOptionList] = useViewState<UI_ListMenuOption[]>('MenuOptionList', initial);
  const menuSection = useMemo<UI_MenuSection>(
    () => ({ HasSeparator: false, MenuOptions: menuOptionList }),
    [menuOptionList],
  );

  /* OnClick_MenuOption: Change PIN opens PINChange (default transition); Biometric Login toggles
     App_PIN_BiometricEnabled; another label does nothing. */
  const onMenuOption = (option: UI_ListMenuOption) => {
    if (option.Label === CHANGE_PIN_NAME) {
      navigate(`/${APP_ID}/PINChange`);
    } else if (option.Label === BIOMETRIC_LOGIN_NAME) {
      clientVar.biometricEnabled.set(!clientVar.biometricEnabled.get());
    }
  };

  return { menuSection, onMenuOption };
}
