/** @origin UBTConnect.App_Common.CommonUI_InsideLayout */
// @os-block UBTConnect.App_Common.CommonUI_InsideLayout
import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DialogAccessRestrictedAction } from '@/platform/feedback/dialogs';
import { LockHost } from '@/platform/navigation/LockHost';
import { useCommonUiPresence } from '@/platform/feedback/dialogs';
import {
  BACK_PRIORITY,
  TransitionAnimation,
  useOsNavigate,
  useViewState,
  useWasRestoredFromCache,
  type BackNavigationEvent,
} from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';
import { getClientVar, setClientVar, useClientVar } from '@/platform/session/session';
import { ImageLoadErrorHandler } from '@/components/ui/ImageLoadErrorHandler';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { OpenLinkOnResume } from '@/platform/navigation/OpenLinkOnResume';
import { OfflineDataSync } from '@/platform/device/OfflineDataSync';
import { PolicyChecker } from '@/platform/session/PolicyChecker';

export interface CommonUiLayoutProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Block_PINUnlock In_ForceVisible (callers only pass false; LockHost does not take it). */
  inShowLockScreen?: boolean;
  inIgnorePolicy?: boolean;
  inIgnoreLockScreen?: boolean;
}

/** The per-screen shell parts every layout hosts in Placeholder_CommonUI_Inside_Layout
    (p:UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js, "CUI"): offline sync events, the lock block, the policy
    checker, the access-restricted dialog, resume links, image errors and the back handling.
    - Block_PINUnlock unless HideLockScreen (signed out, In_IgnoreLockScreen or PIN_Check.NeedRegister, CUI:532-537):
      the shell's LockHost, which applies the same conditions and runs the inactivity lock.
    - Policy_Checker when not In_IgnorePolicy and App_Policies_HasPolicyToAccept.
    - OnInitialize, unless the view comes from the cache: IsNavigateToHomeOnBack from the client variable, which is then
      cleared (CUI:515-529); with it PreventBackNavigation → HomeFeed (OnBackNavigation_RedirectHome, CUI:415-441), else
      BackNavigationHandler at -10000 → at the first entry of the tab, prevent and go to HomeFeed after 0 ms
      (OnBackNavigation_MaybeRedirectHome, CUI:556-603; Action_RedirectHome, CUI:451-470). */
export function CommonUiLayout({ id, inIgnorePolicy = false, inIgnoreLockScreen = false }: CommonUiLayoutProps) {
  useCommonUiPresence();
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const [initial] = useState(() => !restored && getClientVar('UBTConnect.IsNavigateToHomeOnBack'));
  const [isNavigateToHomeOnBack] = useViewState('CommonUI_InsideLayout.IsNavigateToHomeOnBack', initial);
  useEffect(() => {
    if (!restored) setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);
  }, [restored]);
  const hasPolicyToAccept = useClientVar('UBTConnect.App_Policies_HasPolicyToAccept');
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);

  // OnBackNavigation_RedirectHome: SlideFromLeft (CUI:427)
  const redirectHome = () => {
    navigate(PATHS.home, undefined, { transition: TransitionAnimation.SlideFromLeft });
  };
  // Action_RedirectHome: Default (CUI:460)
  const actionRedirectHome = () => {
    navigate(PATHS.home);
  };
  const maybeRedirectHome = (event: BackNavigationEvent) => {
    if (!event.isInitialLocation()) return;
    event.preventDefault();
    window.setTimeout(actionRedirectHome, 0);
  };

  return (
    <OSBlock name="App_Common.CommonUI_InsideLayout" id={id}>
      <OfflineDataSync id={childId(1)} />
      {!inIgnoreLockScreen && <LockHost />}
      {!inIgnorePolicy && hasPolicyToAccept && <PolicyChecker id={childId(3)} />}
      <DialogAccessRestrictedAction id={childId(4)} />
      <OpenLinkOnResume id={childId(5)} />
      <ImageLoadErrorHandler id={childId(6)} />
      {isNavigateToHomeOnBack ? (
        <PreventBackNavigation id={childId(7)} onBackNavigationPrevented={redirectHome} />
      ) : (
        <BackNavigationHandler id={childId(8)} priority={BACK_PRIORITY.commonUi} onBackNavigation={maybeRedirectHome} />
      )}
    </OSBlock>
  );
}
