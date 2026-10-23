import { useMemo, useReducer } from 'react';
import { requestPhotoUpdate } from '@/api/member';
import { Connect_Menu_Items } from '@/pages/Menu/staticEntities';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { confirmAction } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { TransitionAnimation, useOsNavigate } from '@/platform/navigation';
import { signOut } from '@/platform/session/auth';
import type { Directory_UserCurrent } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';
import type { UI_ListMenuOption, UI_MenuSection } from '@/shared/UBTConnect/Menu_List/types';
import { openInApp_OpenExternalLink } from '@/shared/UBTConnect_Utils/lib/actions';
import { initialMenuState, menuReducer, type MenuState } from './menuState';

/** The flows of the Menu screen: the result of CacheControl_UserInfo_Wrapper, OnClick_EditYourAccount, Action_Logout
    and OnClick_MenuOption. The screen has no OnReady and no data action of its own: RequestPhotoUpdate runs when the
    user confirms its row.
    @origin UBTConnect.App_Menu.Menu */

interface MenuFlows {
  /** The screen variables. */
  state: MenuState;
  /** In_MenuSection of Menu_List: a new record (HasSeparator True, no title) whenever MenuOptionList changes. */
  menuSection: UI_MenuSection;
  /** CacheControl_UserInfo_WrapperResult. */
  onUserInformation: (userInformation: Directory_UserCurrent) => void;
  /** OnClick_EditYourAccount. */
  onEditYourAccount: () => void;
  /** OnClick_MenuOption of a Menu_List row. */
  onMenuOption: (option: UI_ListMenuOption) => void;
}

export function useMenu(): MenuFlows {
  const navigate = useOsNavigate();
  // ScreenEvent_OnInitialize.
  const [state, dispatch] = useReducer(menuReducer, undefined, initialMenuState);
  const { user, isFetched } = state;

  const menuSection = useMemo(() => ({ MenuOptions: state.menuOptionList }), [state.menuOptionList]);

  const onUserInformation = (userInformation: Directory_UserCurrent) => {
    dispatch({ type: 'userInformationFetched', user: userInformation });
  };

  // Profile, once the user information has come.
  const onEditYourAccount = () => {
    if (isFetched) navigate('/UBTConnect/Profile');
  };

  /* Action_Logout: ConfirmAction(PopUp_Logout); confirmed → Connect_Logout (the shell's mock signOut(): no
     AppManager_Logout server call, shell spec 10) → HomeFeed, where the shell's signed-out gate opens Login. */
  const logout = async () => {
    const confirmed = await confirmAction('PopUp_Logout');
    if (!confirmed) return;
    await signOut();
    navigate('/UBTConnect/HomeFeed', undefined, { transition: TransitionAnimation.Fade });
  };

  // OnClick_MenuOption(Id).
  const menuOption = async (id: string) => {
    switch (id) {
      case Connect_Menu_Items.LogOut:
        await logout();
        return;
      case Connect_Menu_Items.ContactUs:
        navigate('/UBTConnect/ContactUsMenu');
        return;
      case Connect_Menu_Items.TermsAndPolicies:
        navigate('/UBTConnect/TermsAndPoliciesMenu');
        return;
      case Connect_Menu_Items.PINAndBiometrics:
        navigate('/UBTConnect/PINBiometricsMenu');
        return;
      case Connect_Menu_Items.SubscriptionAndPayments:
        if (isFetched && user)
          openInApp_OpenExternalLink(user.Directory_UserCurrent_Subscription.SubscriptionManageLink, true);
        return;
      case Connect_Menu_Items.RequestPhotoUpdate: {
        const confirmed = await confirmAction('Popup_SubmitPhotoRequest');
        if (!confirmed) return;
        await requestPhotoUpdate();
        showFeedbackMessage('Your update photo request has been submitted.', PLATFORM_MESSAGE_TYPE.success);
        return;
      }
      default:
        showFeedbackMessage(`Go to ${id}`, PLATFORM_MESSAGE_TYPE.info);
    }
  };

  // A failed flow goes to the flow handler.
  const onMenuOption = (option: UI_ListMenuOption) => {
    menuOption(option.Id ?? '').catch(raiseToFlowHandler);
  };

  return { state, menuSection, onUserInformation, onEditYourAccount, onMenuOption };
}
