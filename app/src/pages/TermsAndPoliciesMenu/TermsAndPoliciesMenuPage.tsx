/** @origin UBTConnect.App_Menu.TermsAndPoliciesMenu */
import { useMemo } from 'react';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { UBT_Icons2 } from '@/shared/UBTConnect/lib/staticEntities';
import { Menu_List, type UI_ListMenuOption, type UI_MenuSection } from '@/shared/UBTConnect/Menu_List';
import { CacheControl_Policies } from '@/shared/UBTConnect_Utils/CacheControl_Policies';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { useViewState } from '@/platform/navigation';
import { openPolicy, POLICY_NOT_FOUND } from './components/actions';
import { UBT_Icons2_Contacts } from './components/staticEntities';
import type { LocalCacheControl_Policies } from './types';

/** Screen variables TermsAndConditionsName and PrivacyPolicyName (default values, SCR model). */
const TERMS_AND_CONDITIONS_NAME = 'Terms and Conditions';
const PRIVACY_POLICY_NAME = 'Privacy Policy';

/** ScreenEvent_OnInitialize, view not restored (SCR controller `_screenEvent_OnInitialize$Action`): ListClear
    MenuOptionList, then ListAppend {IconId UBT_Icons2.Contacts, Label TermsAndConditionsName} and ListAppend2
    {IconId UBT_Icons2.BookClosed, Label PrivacyPolicyName}; the other fields keep the UI_ListMenuOption defaults. */
const MENU_OPTIONS: UI_ListMenuOption[] = [
  { IconId: UBT_Icons2_Contacts, Label: TERMS_AND_CONDITIONS_NAME },
  { IconId: UBT_Icons2.BookClosed, Label: PRIVACY_POLICY_NAME },
];

const NOT_FETCHED: LocalCacheControl_Policies = { CacheControl_Policies: null, isFetched: false };

/** UBTConnect App_Menu.TermsAndPoliciesMenu (p:UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js: model, view
    `internalRender`, controller). Layout_DetailPage (default inputs) titled "Terms & Policies"; content SkeletonSection
    (In_IsLoading = not LocalCacheControl_Policies.isFetched) around Menu_List (HasSeparator False, MenuOptions =
    MenuOptionList); CommonUI_InsideLayout; CacheControl_Policies beside the layout. No call of its own
    (`dataFetchActionNames = []`). */
export default function TermsAndPoliciesMenu() {
  /* OnInitialize (P-BACK): IsViewRestoredFromCache → the variables keep their cached values (useViewState restores
     them); otherwise MenuOptionList is rebuilt (MENU_OPTIONS) and LocalCacheControl_Policies keeps its default. */
  const [menuOptionList] = useViewState<UI_ListMenuOption[]>('MenuOptionList', MENU_OPTIONS);
  const [localPolicies, setLocalPolicies] = useViewState<LocalCacheControl_Policies>(
    'LocalCacheControl_Policies',
    NOT_FETCHED,
  );
  /* In_MenuSection: {HasSeparator False, MenuOptions = MenuOptionList} (view, cached on MenuOptionList). */
  const menuSection = useMemo<UI_MenuSection>(
    () => ({ HasSeparator: false, MenuOptions: menuOptionList }),
    [menuOptionList],
  );

  /* OnClick_MenuOption (SCR controller `_onClick_MenuOption$Action`): the row label picks the policy for OpenPolicy
     with "This policy couldn't be found."; any other label does nothing. */
  const onClickMenuOption = (option: UI_ListMenuOption) => {
    const policies = localPolicies.CacheControl_Policies;
    if (option.Label === TERMS_AND_CONDITIONS_NAME) {
      openPolicy(policies?.PolicyInformation_TermsAndConditions, POLICY_NOT_FOUND);
    } else if (option.Label === PRIVACY_POLICY_NAME) {
      openPolicy(policies?.PolicyInformation_PrivacyPolicy, POLICY_NOT_FOUND);
    }
  };

  return (
    <>
      <Layout_DetailPage
        id="$b1"
        placeholderHeaderTitle="Terms & Policies"
        content={
          <SkeletonSection id="$b2" inIsLoading={!localPolicies.isFetched}>
            <Menu_List id="$b3" inMenuSection={menuSection} onOnClickMenuOption={onClickMenuOption} />
          </SkeletonSection>
        }
        placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b4" />}
      />
      {/* CacheControl_PoliciesResult (SCR controller): LocalCacheControl_Policies = {response, isFetched True}. */}
      <CacheControl_Policies
        id="$b5"
        onResult={(response) => {
          setLocalPolicies({ CacheControl_Policies: response, isFetched: true });
        }}
      />
    </>
  );
}
