import { useMemo } from 'react';
import type { Policies } from '@/api/app';
import type { UI_ListMenuOption, UI_MenuSection } from '@/components/menu/MenuList';
import { useViewState } from '@/platform/navigation';
import { UBT_Icons2 } from '@/shared/UBTConnect/lib/staticEntities';
import { openPolicy, POLICY_NOT_FOUND } from '@/shared/UBTConnect_Utils/lib/actions';
import { UBT_Icons2_Contacts } from '@/pages/TermsAndPoliciesMenu/staticEntities';

/** @origin UBTConnect.App_Menu.TermsAndPoliciesMenu
    The variables and the flows of the screen: OnInitialize (MenuOptionList), the result of CacheControl_Policies and
    OnClick_MenuOption. The screen has no route input and no call of its own: the policies come from the shared
    CacheControl_Policies block (domain api/app). The page calls this hook. */

/** Screen variables TermsAndConditionsName and PrivacyPolicyName (default values). */
export const TERMS_AND_CONDITIONS_NAME = 'Terms and Conditions';
export const PRIVACY_POLICY_NAME = 'Privacy Policy';

/** ScreenEvent_OnInitialize, view not restored: ListClear MenuOptionList, then ListAppend {IconId UBT_Icons2.Contacts,
    Label TermsAndConditionsName} and ListAppend2 {IconId UBT_Icons2.BookClosed, Label PrivacyPolicyName}; the other
    fields keep the UI_ListMenuOption defaults. */
const MENU_OPTIONS: UI_ListMenuOption[] = [
  { IconId: UBT_Icons2_Contacts, Label: TERMS_AND_CONDITIONS_NAME },
  { IconId: UBT_Icons2.BookClosed, Label: PRIVACY_POLICY_NAME },
];

/** Screen variable LocalCacheControl_Policies (UBTConnect CacheControl_PoliciesBooleanRecord): the
    CacheControl_Policies Result and whether it arrived. `CacheControl_Policies` is null while the record default holds
    (every Policy_Url ""). */
interface LocalCacheControl_Policies {
  CacheControl_Policies: Policies | null;
  isFetched: boolean;
}

const NOT_FETCHED: LocalCacheControl_Policies = { CacheControl_Policies: null, isFetched: false };

/** The screen state and its handlers. */
export interface TermsAndPoliciesMenuState {
  /** In_MenuSection of Menu_List: {HasSeparator False, MenuOptions = MenuOptionList}, the same record while
      MenuOptionList does not change. */
  menuSection: UI_MenuSection;
  /** Not LocalCacheControl_Policies.isFetched: the rows stay in the skeleton section. */
  isLoading: boolean;
  /** CacheControl_PoliciesResult: LocalCacheControl_Policies = {Result, isFetched True}. */
  onPoliciesResult: (policies: Policies) => void;
  /** OnClick_MenuOption of a Menu_List row. */
  onClickMenuOption: (option: UI_ListMenuOption) => void;
}

export function useTermsAndPoliciesMenu(): TermsAndPoliciesMenuState {
  /* OnInitialize (P-BACK): IsViewRestoredFromCache → the variables keep their cached values (useViewState restores
     them); otherwise MenuOptionList is rebuilt (MENU_OPTIONS) and LocalCacheControl_Policies keeps its default. */
  const [menuOptionList] = useViewState<UI_ListMenuOption[]>('MenuOptionList', MENU_OPTIONS);
  const [localPolicies, setLocalPolicies] = useViewState<LocalCacheControl_Policies>(
    'LocalCacheControl_Policies',
    NOT_FETCHED,
  );
  const menuSection = useMemo<UI_MenuSection>(
    () => ({ HasSeparator: false, MenuOptions: menuOptionList }),
    [menuOptionList],
  );

  const onPoliciesResult = (policies: Policies) => {
    setLocalPolicies({ CacheControl_Policies: policies, isFetched: true });
  };

  /* OnClick_MenuOption: the row label picks the policy for OpenPolicy with "This policy couldn't be found."; any other
     label does nothing. */
  const onClickMenuOption = (option: UI_ListMenuOption) => {
    const policies = localPolicies.CacheControl_Policies;
    if (option.Label === TERMS_AND_CONDITIONS_NAME) {
      openPolicy(policies?.PolicyInformation_TermsAndConditions, POLICY_NOT_FOUND);
    } else if (option.Label === PRIVACY_POLICY_NAME) {
      openPolicy(policies?.PolicyInformation_PrivacyPolicy, POLICY_NOT_FOUND);
    }
  };

  return { menuSection, isLoading: !localPolicies.isFetched, onPoliciesResult, onClickMenuOption };
}
