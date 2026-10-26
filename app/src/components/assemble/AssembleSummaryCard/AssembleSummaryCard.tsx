import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/lib/os-assets';
import { OSLink } from '@/components/ui/os/OSLink';
import { CardItemVisual } from '@/components/ui/CardItemVisual';
import { ResultItemCard } from '@/components/ui/ResultItemCard';
import { ResultItemMedia } from '@/components/ui/ResultItemMedia';
import { VirtualMeetingUrl, type MeetingInfoActions } from '@/components/assemble/VirtualMeetingUrl';
import { AssembleSummaryCardHeader } from '@/components/assemble/AssembleSummaryCardHeader';
import { AssembleSummaryCardRow } from '@/components/assemble/AssembleSummaryCardRow';
import {
  getAssembleEventSummaryDateTimeString,
  getAssembleEventSummaryHeaderLabel,
  getAssembleHostedAtComponents,
} from '@/lib/assemble/actions';
import { Position, ResultListType } from '@/lib/assemble/staticEntities';
import type { AssembleEventSummary } from './types';

export interface AssembleSummaryCardProps extends MeetingInfoActions {
  /** OutSystems instance id of the block. */
  id?: string;
  /** AssembleEventSummary (record; default all empty). */
  assembleEventSummary?: AssembleEventSummary;
  /** IsListItem (default False): list layout (round image on the right, header in Placeholder_2). */
  isListItem?: boolean;
  /** LinkAddressOnClick: the address link of a hall meeting was clicked, with the card's AssembleEventSummary. */
  onAddressClick?: (summary: AssembleEventSummary) => void;
}

/** Assemble event card, props only: a container > NC_Result_Item__Card with
    - Card_Visual (not IsListItem): NC_Card_Item_Visual (cover centre, Subdivision) of the PBCC / virtual image or the
      hall photo;
    - Placeholder_1 (not IsListItem): `margin-bottom-s` > header; Placeholder_2 (IsListItem): the header
      (GetAssembleEventSummaryHeaderLabel);
    - Placeholder_3: row with GetAssembleHostedAtComponents.SingleLine (`font-semi-bold text-neutral-6`, OSFillParent);
    - Placeholder_4: clock row with GetAssembleEventSummaryDateTimeString; Placeholder_6: people row with the invitee
      counts (or "Invitee numbers unavailable at the moment");
    - Placeholder_Right (IsListItem): NC_Result_Item__Image 73px round, reversed, `assemble-summary__card__header`;
    - Placeholder_Location: unless IsUnavailable, `padding-y-s border-top-s text-neutral-2 margin-top-s` with
      AssembleCommon_VirtualMeetingURL (IsVirtual; it gets the MeetingInfo actions) or a link (`onAddressClick`) to
      the place row.
    The caller gives the actions: `containers/AssembleSummaryCard` (LinkAddressOnClick, ConfirmAction and the dialog).
    @origin Connect2_Assemble_MUI.Assemble.AssembleSummaryCard */
export function AssembleSummaryCard({
  id,
  assembleEventSummary = {},
  isListItem = false,
  onAddressClick,
  onMeetingInfoToggle,
  renderMeetingInfoDialog,
}: AssembleSummaryCardProps) {
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
        <ResultItemCard
          cardVisual={
            !isListItem && (
              <CardItemVisual
                inImageCoverPositionY={Position.Center}
                inSignedURL={virtualOrHallPhoto('img/Connect2_LegacyShared.BGTAudioRecording.svg')}
                inResultType={ResultListType.Subdivision}
              />
            )
          }
          placeholder1={
            !isListItem && (
              <div className="margin-bottom-s" data-container="">
                <AssembleSummaryCardHeader headerLabel={headerLabel} />
              </div>
            )
          }
          placeholder2={isListItem && <AssembleSummaryCardHeader headerLabel={headerLabel} />}
          placeholder3={
            <AssembleSummaryCardRow
              placeholderContent={
                <span className="font-semi-bold text-neutral-6 OSFillParent" data-expression="">
                  {hostedAt.SingleLine}
                </span>
              }
            />
          }
          placeholder4={
            <AssembleSummaryCardRow
              placeholderIconLeft={<i className="icon connect-icon-time-clock fa fa-flag fa-1x" data-icon="" />}
              placeholderContent={
                <span data-expression="">{getAssembleEventSummaryDateTimeString(s.DateTime, s.IsAllDay)}</span>
              }
            />
          }
          placeholder6={
            <AssembleSummaryCardRow
              placeholderIconLeft={<i className="icon connect-icon-people fa fa-flag fa-1x" data-icon="" />}
              placeholderContent={<span data-expression="">{invitees}</span>}
            />
          }
          placeholderRight={
            isListItem && (
              <ResultItemMedia
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
                  <VirtualMeetingUrl
                    virtualMeetingURL={s.VirtualMeetingLink ?? ''}
                    virtualMeetingId={s.VirtualMeetingId ?? ''}
                    virtualMeetingPassword={s.VirtualMeetingPassword ?? ''}
                    virtualMeetingPlatform={s.VirtualMeetingTypeLabel ?? ''}
                    onMeetingInfoToggle={onMeetingInfoToggle}
                    renderMeetingInfoDialog={renderMeetingInfoDialog}
                  />
                ) : (
                  <OSLink
                    onClick={() => {
                      onAddressClick?.(s);
                    }}
                  >
                    <AssembleSummaryCardRow
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
