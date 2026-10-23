import { DetailLayout } from '@/components/layout';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MenuList } from '@/components/menu/MenuList';
import { useNavigateBack } from '@/platform/navigation';
import { CacheControl_Policies } from '@/shared/UBTConnect_Utils/CacheControl_Policies';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { useTermsAndPoliciesMenu } from './hooks/useTermsAndPoliciesMenu';

/** @origin UBTConnect.App_Menu.TermsAndPoliciesMenu
    The Terms & Policies route: the detail layout (default inputs) titled "Terms & Policies", with the Menu_List of the
    two policies (no separator) in a skeleton section until the policies come, and CommonUI_InsideLayout. Beside the
    layout: CacheControl_Policies, whose result fills the policies. The screen has no input and no call of its own: the
    policies are the CacheControl_Policies call (DataActionGetCacheInfo) and the other calls of the capture are the app
    start's. The flows are in useTermsAndPoliciesMenu. */
export default function TermsAndPoliciesMenu() {
  const navigateBack = useNavigateBack();
  const { menuSection, isLoading, onPoliciesResult, onClickMenuOption } = useTermsAndPoliciesMenu();

  return (
    <>
      <DetailLayout
        id="$b1"
        onBack={navigateBack}
        headerTitle="Terms & Policies"
        content={
          <SkeletonSection id="$b2" inIsLoading={isLoading}>
            <MenuList id="$b3" inMenuSection={menuSection} onOnClickMenuOption={onClickMenuOption} />
          </SkeletonSection>
        }
        commonUI={<CommonUiLayout id="$b4" />}
      />
      <CacheControl_Policies id="$b5" onResult={onPoliciesResult} />
    </>
  );
}
