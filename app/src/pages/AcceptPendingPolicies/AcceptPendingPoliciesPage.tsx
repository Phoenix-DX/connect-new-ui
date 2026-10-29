import { osImage } from '@/lib/os-assets';
import { showCommunicationExceptionMessage } from '@/platform/feedback';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { LoginLayout } from '@/components/layout/LoginLayout';
import { PendingPoliciesForm } from './components/PendingPoliciesForm/PendingPoliciesForm';
import { PoliciesHeader } from './components/PoliciesHeader/PoliciesHeader';
import { useAcceptPendingPolicies } from './hooks/useAcceptPendingPolicies';
import { usePendingPoliciesForm } from './hooks/usePendingPoliciesForm';
import { Connect_Applications } from './staticEntities';

/** PolicyApplications input of the block: TextToIdentifier of Connect_Applications Connect, Directory, Orbit (the TST
    GUID texts; AcceptPendingPolicies.mvc.js:374-386, cached list). */
const POLICY_APPLICATIONS = [Connect_Applications.Connect, Connect_Applications.Directory, Connect_Applications.Orbit];

/** @origin UBTConnect.App_Policies.AcceptPendingPolicies
    The route of the pending policies: the sign-in layout with the overlay (class ubt-policies), the header and the
    pending policies form as content, a back handler that prevents the back navigation, and CommonUI_InsideLayout
    without the policy checker. The screen flows are in hooks/useAcceptPendingPolicies.ts, the block flows in
    hooks/usePendingPoliciesForm.ts. Not captured (Q7 c): built from the compiled code. */
export default function AcceptPendingPolicies() {
  const screen = useAcceptPendingPolicies();
  const form = usePendingPoliciesForm(
    { policyApplications: POLICY_APPLICATIONS, country: screen.userCountry, contentBlockId: screen.mainContainer },
    { onAcceptedAll: screen.acceptedAll, onNetworkError: showCommunicationExceptionMessage },
  );

  return (
    <LoginLayout
      id="$b1"
      inHasOverlay={screen.useOverlay}
      inExtendedClass="ubt-policies"
      onOnPathCalculated={screen.defineHeight}
      onOnReady={screen.onLayoutReady}
      placeholderContent={
        <>
          <div className="ubt-policies--content" data-container="" id="Content" style={{ textAlign: 'center' }}>
            <PoliciesHeader logoSrc={osImage('img/UBTConnect.ConnectLogoWhite.svg')} />
            <PendingPoliciesForm
              id="$b7"
              rows={form.rows}
              isAllSelected={form.isAllSelected}
              contentBlockId={screen.mainContainer}
              onToggle={form.toggleCheckBox}
              onToggleAll={form.toggleSelectAllCheckBox}
              onContinue={() => {
                void form.continueOnClick();
              }}
              onPolicyClick={form.onClickPolicy}
            />
          </div>
          <BackNavigationHandler
            id="$b8"
            onBackNavigation={(event) => {
              event.preventDefault(); // PreventNavigation
            }}
          />
        </>
      }
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b9" inIgnorePolicy />}
    />
  );
}
