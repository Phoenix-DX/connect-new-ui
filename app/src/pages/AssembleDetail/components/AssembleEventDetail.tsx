import { OSBlock } from '@/components/ui/os/OSBlock';
import { AssembleSummarySkeleton } from '@/components/assemble/AssembleSummarySkeleton';
import { AssembleSummaryCardContainer } from '@/containers/AssembleSummaryCard';
import { NC_Card_Item_Text__Skeleton } from '@/shared/Connect2_LegacyShared/NC_Card_Item_Text__Skeleton';
import { isMeetingNotFound } from '@/pages/AssembleDetail/hooks/assembleEventDetailState';
import {
  useAssembleEventDetail,
  type AssembleEventDetailEvents,
  type AssembleEventDetailParameters,
} from '@/pages/AssembleDetail/hooks/useAssembleEventDetail';
import type { AssembleEventContactEvents } from '@/pages/AssembleDetail/hooks/useAssembleEventContact';
import type {
  AttendeeSubdivisionEvents,
  AttendeeSubdivisionFlags,
} from '@/pages/AssembleDetail/hooks/useAttendeeSubdivision';
import { AssembleEventDetail__Error } from './AssembleEventDetail__Error';
import { AssembleEventDetail_AttendeeSubdivisionList_Skelet } from './AssembleEventDetail_AttendeeSubdivisionList_Skelet';
import { AssembleEventDetail_ContactList } from './AssembleEventDetail_ContactList';
import { AssembleEventDetail_LocalitiesList } from './AssembleEventDetail_LocalitiesList';
import { AssembleEventDetail_Section } from './AssembleEventDetail_Section';
import { NC_Result_Item__Image__Skeleton } from './NC_Result_Item__Image__Skeleton';
import { ShowMoreShowLessContainer } from './ShowMoreShowLessContainer';

export interface AssembleEventDetailProps
  extends AssembleEventDetailEvents, AssembleEventContactEvents, AttendeeSubdivisionEvents {
  /** OutSystems instance id of the block. */
  id: string;
  /** SeriesId, EventId, Start. */
  inputs: AssembleEventDetailParameters;
  /** The flags of the halls, read by the page. */
  flags: AttendeeSubdivisionFlags;
}

const MEETING_NOT_FOUND_SUBTITLE =
  'This meeting might have been deleted or rescheduled, tap the Assemble icon on the bottom bar to refresh the page.';

/** IsNotFound or IsUnavailable → AssembleEventDetail__Error "Meeting not found" with the search-off icon. Otherwise
    `assemble-detail-content` > DIV_DetailCard (the detail header skeleton until the first fetch, then
    AssembleSummaryCard with its actions, not a list item) and DIV_Content (`padding-x-base`) with three sections:
    - Section_MeetingNotes ("Meeting Note"; ShowMoreShowLessContainer of the notes, 3 lines);
    - Section_Attendees ("Meeting Attendees": two attendee skeletons while loading; the "Host Locality" and
      "Interchange Meetings" localities);
    - Section_GSMContacts (" GMS Local Contact": a round image skeleton while loading; the contact list).
    The flows are in useAssembleEventDetail.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail */
export function AssembleEventDetail({
  id,
  inputs,
  flags,
  onUpdateTitle,
  onEmailContact,
  onNavigateToHousehold,
  ...attendeeEvents
}: AssembleEventDetailProps) {
  const scope = id.replace(/\$/g, '');
  const { isDataFetched, getAssembleEvent: data } = useAssembleEventDetail(id, inputs, { onUpdateTitle });

  if (isMeetingNotFound(data))
    return (
      <OSBlock name="Assemble.AssembleEventDetail" id={id}>
        <AssembleEventDetail__Error
          id={`${scope}-$b1`}
          title="Meeting not found"
          subtitle={MEETING_NOT_FOUND_SUBTITLE}
          icon={<i className="icon connect-icon-search-off fa fa-flag fa-2x" data-icon="" />}
        />
      </OSBlock>
    );

  const event = data?.AssembleEvent;
  const summary = event?.AssembleEventSummary;
  const notes = summary?.Notes ?? '';
  const attendees = event?.AssembleAttendeeSubdivisionList ?? [];
  const special = event?.AssembleSpecialAttendeeSubdivisionList ?? [];
  const guests = event?.AssembleAttendeeSpecialGuestList ?? [];
  const contacts = event?.GSMContactList ?? [];
  const attendee = { flags, ...attendeeEvents };

  return (
    <OSBlock name="Assemble.AssembleEventDetail" id={id}>
      <div className="assemble-detail-content" data-container="">
        <div data-container="" id={`${scope}-DIV_DetailCard`}>
          {!isDataFetched && (summary?.EventId ?? '') === '' ? (
            <AssembleSummarySkeleton
              id={`${scope}-$b2`}
              placeholderImage={<NC_Card_Item_Text__Skeleton id={`${scope}-$b3`} />}
              placeholderSubtitleTop={
                <div className="ThemeGrid_Width9" data-container="">
                  <NC_Card_Item_Text__Skeleton id={`${scope}-$b4`} extendedClass="border-radius-bottom-none" />
                </div>
              }
              placeholderTitle={
                <div className="ThemeGrid_Width9" data-container="">
                  <NC_Card_Item_Text__Skeleton
                    id={`${scope}-$b5`}
                    extendedClass="border-radius-top-none border-radius-bottom-none"
                  />
                </div>
              }
              placeholderSubtitleBottom={
                <div className="ThemeGrid_Width9" data-container="">
                  <NC_Card_Item_Text__Skeleton id={`${scope}-$b6`} extendedClass="border-radius-top-none" />
                </div>
              }
            />
          ) : (
            <AssembleSummaryCardContainer id={`${scope}-$b7`} assembleEventSummary={summary} isListItem={false} />
          )}
        </div>
        <div className="padding-x-base" data-container="" id={`${scope}-DIV_Content`}>
          <AssembleEventDetail_Section
            id={`${scope}-Section_MeetingNotes`}
            isLoading={!isDataFetched}
            isVisible={notes !== '' || !isDataFetched}
            header={
              <div data-container="" id={`${scope}-DIV_MeetingNotes__Title`}>
                Meeting Note
              </div>
            }
            contentLoading={
              <div className="padding-y-s" data-container="">
                <NC_Card_Item_Text__Skeleton id={`${scope}-$b9`} />
              </div>
            }
            content={
              <div className="margin-top-xs" data-container="" id={`${scope}-Div_EventNotes__Content`}>
                <ShowMoreShowLessContainer
                  id={`${scope}-$b10`}
                  sectionHeaderId={`${scope}-DIV_MeetingNotes__Title`}
                  maximumNumberOfLines={3}
                  placeholderContent={<span data-expression="">{notes}</span>}
                  showMoreLabel="Read more"
                  showLessLabel="Show less"
                />
              </div>
            }
          />
          <AssembleEventDetail_Section
            id={`${scope}-Section_Attendees`}
            isVisible={!isDataFetched || attendees.length > 0 || special.length > 0 || guests.length > 0}
            isLoading={!isDataFetched}
            header="Meeting Attendees"
            contentLoading={
              <div className="padding-y-s" data-container="">
                <AssembleEventDetail_AttendeeSubdivisionList_Skelet id={`${scope}-$b12`} skeletonListLength={2} />
                <AssembleEventDetail_AttendeeSubdivisionList_Skelet id={`${scope}-$b13`} skeletonListLength={2} />
              </div>
            }
            content={
              <>
                {attendees.length > 0 && (
                  <div data-container="" id={`${scope}-DIV_SubdivisionAttendee__Content`}>
                    <AssembleEventDetail_LocalitiesList
                      id={`${scope}-$b14`}
                      assembleAttendeeSubdivisionList={attendees}
                      header="Host Locality"
                      {...attendee}
                    />
                  </div>
                )}
                {special.length > 0 && (
                  <div data-container="" id={`${scope}-DIV_SubdivisionSpecialAttendee__Content`}>
                    <AssembleEventDetail_LocalitiesList
                      id={`${scope}-$b15`}
                      assembleAttendeeSubdivisionList={special}
                      header="Interchange Meetings"
                      {...attendee}
                    />
                  </div>
                )}
              </>
            }
          />
          <AssembleEventDetail_Section
            id={`${scope}-Section_GSMContacts`}
            isVisible={contacts.length > 0 || !isDataFetched}
            isLoading={!isDataFetched}
            header=" GMS Local Contact"
            contentLoading={
              <div className="padding-y-s" data-container="">
                <NC_Result_Item__Image__Skeleton id={`${scope}-$b17`} inIsRoundImage />
              </div>
            }
            content={
              <div className="margin-top-xs" data-container="" id={`${scope}-Div_EventContacts__Content`}>
                <AssembleEventDetail_ContactList
                  id={`${scope}-$b18`}
                  assembleEventContactIdList={contacts}
                  onEmailContact={onEmailContact}
                  onNavigateToHousehold={onNavigateToHousehold}
                />
              </div>
            }
          />
        </div>
      </div>
    </OSBlock>
  );
}
