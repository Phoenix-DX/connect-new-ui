/** @origin Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL */
// @os-block Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL
import { useId, type MouseEvent } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ActionConfirmationDialog, confirmAction } from '@/platform/feedback/dialogs';
import { OSLink } from '@/shared/lib/OSLink';
import { checkSupportedBrowserVersion, openExternalURL } from '@/shared/Connect2_LegacyShared/lib/actions';
import { VirtualMeetingDetails } from '@/components/assemble/VirtualMeetingDetails';
import { AssembleSummaryCardRow } from '@/components/assemble/AssembleSummaryCardRow';

export interface VirtualMeetingUrlProps {
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

/** Virtual meeting row and its info dialog (p:migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc.js;
    view :169-382): container `font-regular` > AssembleSummary_Card_Row with the video camera icon, the text
    ("Link is not available, refer to local signal chat" when there is no URL, else "Join with <platform>: " and a
    `[Tap here]` link, target _blank) and, when any of URL / id / passcode is set, the info icon link; then container
    `backwards-compatibility assemble-meeting-info-popup` > ActionConfirmationDialog MeetingInfo (body
    AssembleCommon_VirtualMeetingDetails, dismiss label "Close", no header or confirm label).
    MeetingInfo_Toggle (controller :405-438): ConfirmAction(MeetingInfo). LinkVirtualAddressOnClick (:439-470):
    CheckSupportedBrowserVersion, then OpenExternalURL(VirtualMeetingURL, IsApple). */
export function VirtualMeetingUrl({
  id,
  scope: scopeProp,
  virtualMeetingPlatform = '',
  virtualMeetingURL = '',
  virtualMeetingId = '',
  virtualMeetingPassword = '',
}: VirtualMeetingUrlProps) {
  const reactId = useId().replace(/:/g, '');
  const scope = scopeProp ?? (id !== undefined ? id.replace('$', '') : reactId);
  const meetingInfoId = `${scope}-MeetingInfo`;
  const meetingInfo_Toggle = () => {
    void confirmAction(meetingInfoId);
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
        <ActionConfirmationDialog
          widgetId={meetingInfoId}
          scope={meetingInfoId}
          body={
            <VirtualMeetingDetails
              virtualMeetingLink={virtualMeetingURL}
              virtualMeetingId={virtualMeetingId}
              virtualMeetingPassword={virtualMeetingPassword}
            />
          }
          dismissLabel="Close"
        />
      </div>
    </OSBlock>
  );
}
