// @os-block Connect2_Assemble_MUI.Assemble.AssembleSummaryCard
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { UserException } from '@/legacy/os/os-exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { pageRedirect } from '@/platform/feedback/pageRedirect';
import { generateScreenURL } from '@/platform/navigation';
import { OSLink } from '@/shared/lib/OSLink';
import { NC_Card_Item_Visual } from '@/shared/Connect2_LegacyShared/NC_Card_Item_Visual';
import { NC_Result_Item__Card } from '@/shared/Connect2_LegacyShared/NC_Result_Item__Card';
import { NC_Result_Item__Image } from '@/shared/Connect2_LegacyShared/NC_Result_Item__Image';
import { navigateToMaps } from '@/shared/Connect2_LegacyShared/lib/actions';
import { MapNavigationRedirect } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { AssembleCommon_VirtualMeetingURL } from '@/shared/Connect2_Assemble_MUI/AssembleCommon_VirtualMeetingURL';
import { AssembleSummaryCard__Header } from '@/shared/Connect2_Assemble_MUI/AssembleSummaryCard__Header';
import { AssembleSummary_Card_Row } from '@/shared/Connect2_Assemble_MUI/AssembleSummary_Card_Row';
import {
  getAssembleEventSummaryDateTimeString,
  getAssembleEventSummaryHeaderLabel,
  getAssembleHostedAtComponents,
} from '@/shared/Connect2_Assemble_MUI/lib/actions';
import { Position, ResultListType } from '@/shared/Connect2_Assemble_MUI/lib/staticEntities';
import type { AssembleEventSummary } from './types';

export interface AssembleSummaryCardProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** AssembleEventSummary (record; default all empty). */
  assembleEventSummary?: AssembleEventSummary;
  /** IsListItem (default False): list layout (round image on the right, header in Placeholder_2). */
  isListItem?: boolean;
}

/** LinkAddressOnClick (p:AssembleSummaryCard.mvc.js controller :649-787): no formatted address → Info message "Map is
    not available"; else NavigateToMaps and, by its redirect: AndroidBrowser → `geo:0,0?q=<address>`; IPhoneBrowser →
    `comgooglemapsurl://?q=<address>`; any other id (also the offline 0) → `https://www.google.com/maps/dir/?api=1`
    with api=1 and query=<address>. AndroidNative (Cordova app launcher LaunchWithData of Google Maps) cannot happen
    without Cordova (CheckAppLauncherPlugin is False) and is not ported. Errors: "application not found for uri." →
    UserException GoogleMapsNotInstalled "Please install and enable Google Maps", else UnknownError with the message.
    The original runs as an async flow; nothing on the browser path waits, so the port is synchronous. */
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

/** Assemble event card (p:migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc.js; view
    :141-626): a container > NC_Result_Item__Card with
    - Card_Visual (not IsListItem): NC_Card_Item_Visual (cover centre, Subdivision) of the PBCC / virtual image or the
      hall photo;
    - Placeholder_1 (not IsListItem): `margin-bottom-s` > header; Placeholder_2 (IsListItem): the header
      (GetAssembleEventSummaryHeaderLabel);
    - Placeholder_3: row with GetAssembleHostedAtComponents.SingleLine (`font-semi-bold text-neutral-6`, OSFillParent);
    - Placeholder_4: clock row with GetAssembleEventSummaryDateTimeString; Placeholder_6: people row with the invitee
      counts (or "Invitee numbers unavailable at the moment");
    - Placeholder_Right (IsListItem): NC_Result_Item__Image 73px round, reversed, `assemble-summary__card__header`;
    - Placeholder_Location: unless IsUnavailable, `padding-y-s border-top-s text-neutral-2 margin-top-s` with
      AssembleCommon_VirtualMeetingURL (IsVirtual) or a link (LinkAddressOnClick) to the place row. */
export function AssembleSummaryCard({ id, assembleEventSummary = {}, isListItem = false }: AssembleSummaryCardProps) {
  const s = assembleEventSummary;
  const headerLabel = getAssembleEventSummaryHeaderLabel(s);
  const hostedAt = getAssembleHostedAtComponents(
    s.IsVirtual ?? false,
    s.HostingLocation ?? '',
    s.LocalityName ?? '',
    s.CountryName ?? '',
    s.IsUnavailable ?? false,
  );
  const brothers = s.BrothersCount ?? 0;
  const sisters = s.SistersCount ?? 0;
  // Placeholder_6 expression (view :441)
  const invitees = s.IsUnavailable
    ? 'Invitee numbers unavailable at the moment'
    : String(brothers + sisters) +
      (brothers + sisters === 1 ? ' Attendee' : ' Attendees') +
      ' • Brothers: ' +
      String(brothers) +
      ' • Sisters: ' +
      String(sisters);
  const virtualOrHallPhoto = (pbccImage: string) =>
    s.IsPBCC
      ? osImage(pbccImage)
      : s.IsVirtual
        ? osImage('img/Connect2_LegacyShared.VirtualMeeting.svg')
        : (s.HostingSubdivisionHallPhotoSignedURL ?? '');
  return (
    <OSBlock name="Assemble.AssembleSummaryCard" id={id}>
      <div data-container="">
        <NC_Result_Item__Card
          cardVisual={
            !isListItem && (
              <NC_Card_Item_Visual
                inImageCoverPositionY={Position.Center}
                inSignedURL={virtualOrHallPhoto('img/Connect2_LegacyShared.BGTAudioRecording.svg')}
                inResultType={ResultListType.Subdivision}
              />
            )
          }
          placeholder1={
            !isListItem && (
              <div className="margin-bottom-s" data-container="">
                <AssembleSummaryCard__Header headerLabel={headerLabel} />
              </div>
            )
          }
          placeholder2={isListItem && <AssembleSummaryCard__Header headerLabel={headerLabel} />}
          placeholder3={
            <AssembleSummary_Card_Row
              placeholderContent={
                <span className="font-semi-bold text-neutral-6 OSFillParent" data-expression="">
                  {hostedAt.SingleLine}
                </span>
              }
            />
          }
          placeholder4={
            <AssembleSummary_Card_Row
              placeholderIconLeft={<i className="icon connect-icon-time-clock fa fa-flag fa-1x" data-icon="" />}
              placeholderContent={
                <span data-expression="">{getAssembleEventSummaryDateTimeString(s.DateTime, s.IsAllDay)}</span>
              }
            />
          }
          placeholder6={
            <AssembleSummary_Card_Row
              placeholderIconLeft={<i className="icon connect-icon-people fa fa-flag fa-1x" data-icon="" />}
              placeholderContent={<span data-expression="">{invitees}</span>}
            />
          }
          placeholderRight={
            isListItem && (
              <NC_Result_Item__Image
                inResultType={ResultListType.Subdivision}
                showPlaceholderForImage={false}
                customClass="assemble-summary__card__header"
                inIsReverseImageAndContent
                inImageHeight={73}
                inSignedURL={virtualOrHallPhoto('img/Connect2_LegacyShared.BGTAudioRecordingSquare.png')}
                inIsRoundImage
              />
            )
          }
          placeholderLocation={
            !s.IsUnavailable && (
              <div className="padding-y-s border-top-s text-neutral-2 margin-top-s" data-container="">
                {s.IsVirtual ? (
                  <AssembleCommon_VirtualMeetingURL
                    virtualMeetingURL={s.VirtualMeetingLink ?? ''}
                    virtualMeetingId={s.VirtualMeetingId ?? ''}
                    virtualMeetingPassword={s.VirtualMeetingPassword ?? ''}
                    virtualMeetingPlatform={s.VirtualMeetingTypeLabel ?? ''}
                  />
                ) : (
                  <OSLink
                    onClick={() => {
                      linkAddressOnClick(s);
                    }}
                  >
                    <AssembleSummary_Card_Row
                      placeholderIconLeft={
                        <i
                          className="text-primary icon connect-icon-place margin-right-xs font-size-base fa fa-flag fa-1x"
                          data-icon=""
                        />
                      }
                      placeholderContent={
                        <span className="text-primary white-space-normal font-regular" data-expression="">
                          {s.HostingSubdivisionFormattedAddress ?? ''}
                        </span>
                      }
                    />
                  </OSLink>
                )}
              </div>
            )
          }
        />
      </div>
    </OSBlock>
  );
}
