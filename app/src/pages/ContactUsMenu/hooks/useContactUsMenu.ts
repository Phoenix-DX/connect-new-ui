import { useEffect, useState } from 'react';
import type { UI_ListMenuOption, UI_MenuSection } from '@/components/menu/MenuList';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { pinCheck } from '@/platform/session/pin';
import { currentUserId } from '@/platform/session/session';
import {
  contactUsDetailsParams,
  get_ContactUsMenuSections,
  initialIgnore,
  type ContactUsMenuIgnore,
} from './contactUsMenuState';

/** The variables and the flows of the Contact Us menu: ScreenEvent_OnInitialize (the ignore variables and
    ContactUs_Menu, which the view cache keeps) and OnClick_MenuOption. The screen has no route input, no OnReady and
    no server call of its own: Get_ContactUsMenuSections is a client action. The page calls this hook.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsMenu */

interface ContactUsMenuFlows {
  /** [ContactUs_Menu] The sections of the List, one Menu_List each. */
  contactUsMenu: UI_MenuSection[];
  /** [IgnorePolices] and [IgnoreLockedScreen], the CommonUI_InsideLayout inputs. */
  ignore: ContactUsMenuIgnore;
  /** OnClick_MenuOption of a row of the Menu_List of `section`. A failed flow goes to the flow handler. */
  onClickMenuOption: (section: UI_MenuSection, option: UI_ListMenuOption) => void;
}

export function useContactUsMenu(): ContactUsMenuFlows {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  // ScreenEvent_OnInitialize, before the first render: PIN_Check, then IgnorePolices and IgnoreLockedScreen.
  const [ignore] = useState(() => initialIgnore(currentUserId() !== null, pinCheck().needRegister));
  /* IsViewRestoredFromCache (P-BACK): a restored view keeps ContactUs_Menu; otherwise ContactUs_Menu =
     Get_ContactUsMenuSections.Out_ContactUsMenuSections. The view cache keeps the variable (useViewState). */
  const [cached, setCached] = useViewState<UI_MenuSection[] | null>('ContactUs_Menu', null);
  const [contactUsMenu] = useState<UI_MenuSection[]>(() =>
    restored && cached !== null ? cached : get_ContactUsMenuSections(currentUserId() !== null),
  );
  useEffect(() => {
    setCached(contactUsMenu);
  }, [contactUsMenu, setCached]);

  // OnClick_MenuOption: ContactUsDetails with the inputs of the clicked row, transition Default.
  const onClickMenuOption = (section: UI_MenuSection, option: UI_ListMenuOption) => {
    try {
      navigate('/UBTConnect/ContactUsDetails', { ...contactUsDetailsParams(section, option.Id ?? '') });
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  return { contactUsMenu, ignore, onClickMenuOption };
}
