// @os-block UBTConnect.App_Policies.Policy_Checker
import { useEffect, useRef } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { resetReplaceOnUpcomingNavigation, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getClientVar } from '@/platform/session/session';

export interface Policy_CheckerProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Empty block (survey:UBTConnect.App_Policies.Policy_Checker.mvc.js:120). OnInitialize: with
    App_Policies_HasPolicyToAccept (set from GetUserInformation's HasPoliciesToAccept; `?mockuser=policies`),
    ResetReplaceOnUpcomingNavigation, then AcceptPendingPolicies (:157-163). */
export function Policy_Checker({ id }: Policy_CheckerProps) {
  const navigate = useOsNavigate();
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    if (getClientVar('UBTConnect.App_Policies_HasPolicyToAccept')) {
      resetReplaceOnUpcomingNavigation();
      navigate(`/${APP_ID}/AcceptPendingPolicies`);
    }
  }, [navigate]);
  return <OSBlock name="App_Policies.Policy_Checker" id={id} />;
}
