/* Client actions used only by AssembleDetail. C = migration/screens/AssembleEvents/analysis/sources/pretty/
   Connect2_Assemble_MUI.controller.js; FSA = migration/screens/AssembleDetail/sources/NavigationHandler.ScrollAnchors
   .FocusScrollAnchorOnBack.mvc.js. DateTimes are "yyyy-MM-ddTHH:mm:ss" wall-clock strings. */
import { hasAccessToRegion } from '../../../shared/Connect2_Assemble_MUI/lib/actions';
import { showUpgradePopUp } from '../../../shell/dialogs/subscription';
import { feedbackMessageAutoClose } from '../../../shell/feedback/feedbackMessageAutoClose';

/** OffsetDateTimeByUserUTCOffset(DateTime, IsForServer) (C:1393-1474): the clone's DateTimes travel as wall-clock text,
    so the device-offset shift and the platform's UTC conversion cancel: unchanged (as AssembleEvents). */
export function offsetDateTimeByUserUTCOffset(dateTime: string): string {
  return dateTime;
}

/** GetIANATimezone (C:674-724, JS GetTimezoneName): the device's IANA time zone. */
export function getIANATimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/** GetUnavailableEventErrorMessage (C:1095-1119). */
export function getUnavailableEventErrorMessage(): string {
  return 'This subdivision no longer exists. Please reach out to your Regional Administrator for further assistance.';
}

/** MaybeDisplaySubscriptionPopup(CountryCode, LocalityId, DialogId) (C:1292-1344): HasAccessToRegion; without access
    IsDisplayedPopup = True and App_Subscription_ShowUpgradePopUp (the shell opens the screen's access-restricted
    dialog), else False. */
export async function maybeDisplaySubscriptionPopup(countryCode: string, localityId: string): Promise<boolean> {
  if (await hasAccessToRegion(countryCode, localityId)) return false;
  await showUpgradePopUp();
  return true;
}

/** window.dx.Navigation.Storage of the original (FSA:464-472): only FocusScrollAnchorOnBack writes it in this route;
    the reader (the list's ScrollAnchor focus on back) is not part of the clone, so the value is kept here only. */
export const navigationStorage = new Map<string, { id: string; index: number }>();

/** Connect2_LegacyShared ShowUnknownErrorMessage(Message, Title) (migration/runtime-sources/Connect2_LegacyShared
    .controller.js, define "…$ShowUnknownErrorMessage"): in TST it ignores its inputs and calls
    ShowCustomFeedbackMessageAndTitle("Service Interruption", <the high-traffic text>, Info, False,
    "feedback-with-title", True, ""), shown through the shell's auto-closing feedback message. */
export function showUnknownErrorMessage(): void {
  feedbackMessageAutoClose({
    title: 'Service Interruption',
    message:
      'We’re currently experiencing unusually high traffic, which may affect access to some services.<br>\r\nOur team is working to restore full functionality as quickly as possible.<br>\r\nThank you for your patience and understanding.',
    messageType: 'info',
  });
}
