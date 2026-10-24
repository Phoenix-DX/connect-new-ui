import { useId, type MouseEvent, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSLink } from '@/components/ui/os/OSLink';
import { checkSupportedBrowserVersion, openExternalURL } from '@/lib/legacyShared/actions';
import { VirtualMeetingDetails } from '@/components/assemble/VirtualMeetingDetails';
import { AssembleSummaryCardRow } from '@/components/assemble/AssembleSummaryCardRow';

/** What the MeetingInfo dialog slot gets: the dialog id (the id that MeetingInfo_Toggle opens), the body and the
    dismiss label. The caller renders the dialog (ActionConfirmationDialog) with them. */
export interface MeetingInfoDialogSlot {
  /** `<scope>-MeetingInfo`: the widget id and the id prefix of the dialog. */
  dialogId: string;
  /** AssembleCommon_VirtualMeetingDetails with the link, the meeting id and the passcode. */
  body: ReactNode;
  /** "Close". The dialog has no header and no confirm label. */
  dismissLabel: string;
}

/** The MeetingInfo actions that the caller gives AssembleCommon_VirtualMeetingURL (and AssembleSummaryCard passes on). */
export interface MeetingInfoActions {
  /** MeetingInfo_Toggle: the info icon was clicked; open the dialog with this id (ConfirmAction). */
  onMeetingInfoToggle?: (dialogId: string) => void;
  /** Renders the MeetingInfo dialog in the `backwards-compatibility assemble-meeting-info-popup` container. */
  renderMeetingInfoDialog?: (slot: MeetingInfoDialogSlot) => ReactNode;
}

export interface VirtualMeetingUrlProps extends MeetingInfoActions {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Id prefix of the block's own elements (the MeetingInfo dialog is `<scope>-MeetingInfo`); defaults to `id`
      without `$`, or a React id when there is none. */
  scope?: string;
  /** VirtualMeetingPlatform (default ""): "Join with <platform>: ". */
  virtualMeetingPlatform?: string;
  /** VirtualMeetingURL (default ""). */
  virtualMeetingURL?: string;
  /** VirtualMeetingId (default ""). */
  virtualMeetingId?: string;
  /** VirtualMeetingPassword (default ""). */
  virtualMeetingPassword?: string;
}

/** Virtual meeting row and its info dialog, props only. Container `font-regular` > AssembleSummary_Card_Row with the
    video camera icon, the text ("Link is not available, refer to local signal chat" when there is no URL, else
    "Join with <platform>: " and a `[Tap here]` link, target _blank) and, when any of URL / id / passcode is set, the
    info icon link; then container `backwards-compatibility assemble-meeting-info-popup` with the MeetingInfo dialog
    slot (body AssembleCommon_VirtualMeetingDetails, dismiss label "Close").
    - MeetingInfo_Toggle: `onMeetingInfoToggle` with the dialog id (the caller runs ConfirmAction).
    - LinkVirtualAddressOnClick: CheckSupportedBrowserVersion, then OpenExternalURL(VirtualMeetingURL, IsApple).
    @origin Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL */
export function VirtualMeetingUrl({
  id,
  scope: scopeProp,
  virtualMeetingPlatform = '',
  virtualMeetingURL = '',
  virtualMeetingId = '',
  virtualMeetingPassword = '',
  onMeetingInfoToggle,
  renderMeetingInfoDialog,
}: VirtualMeetingUrlProps) {
  const reactId = useId().replace(/:/g, '');
  const scope = scopeProp ?? (id !== undefined ? id.replace('$', '') : reactId);
  const meetingInfoId = `${scope}-MeetingInfo`;
  const meetingInfo_Toggle = () => {
    onMeetingInfoToggle?.(meetingInfoId);
  };
  const linkVirtualAddressOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // a Link without URL only runs its OnClick (as OSLink)
    openExternalURL(virtualMeetingURL, checkSupportedBrowserVersion().IsApple);
  };
  return (
    <OSBlock name="Assemble.AssembleCommon_VirtualMeetingURL" id={id}>
      <div className="font-regular" data-container="">
        <AssembleSummaryCardRow
          placeholderIconLeft={<i className="icon connect-icon-video-camera fa fa-flag fa-1x" data-icon="" />}
          placeholderContent={
            <>
              <span className="display-inline inline" data-expression="">
                {virtualMeetingURL === ''
                  ? 'Link is not available, refer to local signal chat'
                  : 'Join with ' + virtualMeetingPlatform + ': '}
              </span>
              {virtualMeetingURL !== '' && (
                <a data-link="" href="#" target="_blank" onClick={linkVirtualAddressOnClick}>
                  <span className="break-word font-regular" data-expression="">
                    [Tap here]
                  </span>
                </a>
              )}
            </>
          }
          placeholderIconRight={
            (virtualMeetingURL !== '' || virtualMeetingId !== '' || virtualMeetingPassword !== '') && (
              <OSLink onClick={meetingInfo_Toggle}>
                <i
                  className="icon connect-icon-info-fill margin-right-none margin-left-auto line-height-1 text-neutral-6 font-size-base fa fa-info-circle fa-1x"
                  data-icon=""
                />
              </OSLink>
            )
          }
        />
      </div>
      <div className="backwards-compatibility assemble-meeting-info-popup" data-container="">
        {renderMeetingInfoDialog?.({
          dialogId: meetingInfoId,
          body: (
            <VirtualMeetingDetails
              virtualMeetingLink={virtualMeetingURL}
              virtualMeetingId={virtualMeetingId}
              virtualMeetingPassword={virtualMeetingPassword}
            />
          ),
          dismissLabel: 'Close',
        })}
      </div>
    </OSBlock>
  );
}
