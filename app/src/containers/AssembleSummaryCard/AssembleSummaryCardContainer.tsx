import {
  AssembleSummaryCard,
  type AssembleEventSummary,
  type AssembleSummaryCardProps,
} from '@/components/assemble/AssembleSummaryCard';
import type { MeetingInfoDialogSlot } from '@/components/assemble/VirtualMeetingUrl';
import { ConfirmDialog } from '@/components/ui/Dialog';
import { confirmAction } from '@/platform/feedback/dialogs';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { UserException } from '@/platform/feedback/flowErrors';
import { pageRedirect } from '@/platform/feedback/pageRedirect';
import { generateScreenURL } from '@/platform/navigation';
import { navigateToMaps } from '@/lib/legacyShared/actions';
import { MapNavigationRedirect } from '@/lib/legacyShared/staticEntities';

/** The inputs of AssembleSummaryCard. The container gives the actions. */
export type AssembleSummaryCardContainerProps = Omit<
  AssembleSummaryCardProps,
  'onAddressClick' | 'onMeetingInfoToggle' | 'renderMeetingInfoDialog'
>;

/** LinkAddressOnClick of AssembleSummaryCard.
    - No formatted address: the Info message "Map is not available".
    - Else NavigateToMaps, and by its redirect: AndroidBrowser → `geo:0,0?q=<address>`; IPhoneBrowser →
      `comgooglemapsurl://?q=<address>`; any other id (also the offline 0) → `https://www.google.com/maps/dir/?api=1`
      with api=1 and query=<address>.
    - AndroidNative (the Cordova app launcher LaunchWithData of Google Maps) cannot happen without Cordova
      (CheckAppLauncherPlugin is False) and is not ported.
    - Errors: "application not found for uri." → UserException GoogleMapsNotInstalled "Please install and enable
      Google Maps", else UnknownError with the message.
    The original runs as an async flow. Nothing on the browser path waits, so the port is synchronous. */
export function linkAddressOnClick(summary: AssembleEventSummary): void {
  try {
    const address = summary.HostingSubdivisionFormattedAddress ?? '';
    if (address === '') {
      showFeedbackMessage('Map is not available', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    const redirect = navigateToMaps();
    if (redirect === MapNavigationRedirect.AndroidBrowser) {
      pageRedirect(generateScreenURL('geo:0,0', { q: address }));
      return;
    }
    if (redirect === MapNavigationRedirect.AndroidNative) return; // LaunchWithData: Cordova only (see above)
    if (redirect === MapNavigationRedirect.IPhoneBrowser) {
      pageRedirect(generateScreenURL('comgooglemapsurl://', { q: address }));
      return;
    }
    pageRedirect(generateScreenURL('https://www.google.com/maps/dir/?api=1', { api: '1', query: address }));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.toLowerCase() === 'application not found for uri.')
      throw new UserException('Please install and enable Google Maps', 'Connect2_Assemble_MUI.GoogleMapsNotInstalled');
    throw new UserException(message, 'Connect2_Assemble_MUI.UnknownError');
  }
}

/** MeetingInfo_Toggle of AssembleCommon_VirtualMeetingURL: ConfirmAction(MeetingInfo). */
function meetingInfoToggle(dialogId: string): void {
  void confirmAction(dialogId);
}

/** The MeetingInfo dialog of AssembleCommon_VirtualMeetingURL: ConfirmDialog (ActionConfirmationDialog, connected to
    ConfirmAction by app/dialogs.ts) with the id, the body and the dismiss label of the slot (no header, no confirm
    label). */
function renderMeetingInfoDialog({ dialogId, body, dismissLabel }: MeetingInfoDialogSlot) {
  return <ConfirmDialog widgetId={dialogId} scope={dialogId} body={body} dismissLabel={dismissLabel} />;
}

/** AssembleSummaryCard with its actions: LinkAddressOnClick on the address link, and the MeetingInfo dialog and
    its ConfirmAction for the virtual meeting row. AssembleDetail and AssembleEvents render it.
    @origin Connect2_Assemble_MUI.Assemble.AssembleSummaryCard */
export function AssembleSummaryCardContainer(props: AssembleSummaryCardContainerProps) {
  return (
    <AssembleSummaryCard
      {...props}
      onAddressClick={linkAddressOnClick}
      onMeetingInfoToggle={meetingInfoToggle}
      renderMeetingInfoDialog={renderMeetingInfoDialog}
    />
  );
}
