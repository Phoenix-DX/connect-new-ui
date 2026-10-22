// @os-block Connect2_Assemble_MUI.Assemble.AssembleEventDetail
// @os-block Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section
// @os-block Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error
// @os-block Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet
import { useEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { AssembleSummaryCard } from '../../../shared/Connect2_Assemble_MUI/AssembleSummaryCard';
import { AssembleSummaryDetailHeader_Skeleton } from '../../../shared/Connect2_Assemble_MUI/AssembleSummaryDetailHeader_Skeleton';
import { NC_Card_Item_Text__Skeleton } from '../../../shared/Connect2_LegacyShared/NC_Card_Item_Text__Skeleton';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getAssembleEvent } from '../api';
import type { AssembleDetailInputs, GetAssembleEventResult } from '../types';
import { getIANATimezone, offsetDateTimeByUserUTCOffset, showUnknownErrorMessage } from './actions';
import { AssembleEventDetail_ContactList, type EmailContactArgs } from './AssembleEventDetail_Contacts';
import { AssembleEventDetail_LocalitiesList, type AttendeeNavigation } from './AssembleEventDetail_Localities';
import { NC_Result_Item__Image__Skeleton, ShowMoreShowLessContainer } from './LegacySharedBlocks';

/* Sources: migration/screens/AssembleDetail/sources/Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc.js (ED),
   …_Section.mvc.js (SE), …__Error.mvc.js (ER), …_AttendeeSubdivisionList_Skelet.mvc.js (SK). */

const scopeOf = (id: string) => id.replace(/\$/g, '');

/** Assemble.AssembleEventDetail_Section (SE view :208-346): AssembleDetailSection (visible IsVisible) > Section_Header
    (`section-header margin-top-base`: a ThemeGrid_Width7 text skeleton while IsLoading, else Placeholder_Header), then
    Placeholder_Content__Loading or Placeholder_Content. */
export function AssembleEventDetail_Section({
  id,
  isLoading,
  isVisible,
  header,
  contentLoading,
  content,
}: {
  id: string;
  isLoading: boolean;
  isVisible: boolean;
  header?: ReactNode;
  contentLoading?: ReactNode;
  content?: ReactNode;
}) {
  const scope = scopeOf(id);
  return (
    <OSBlock name="Assemble.AssembleEventDetail_Section" id={id}>
      {isVisible && (
        <div data-container="" id={`${scope}-AssembleDetailSection`}>
          <div className="section-header margin-top-base" data-container="" id={`${scope}-Section_Header`}>
            {isLoading ? (
              <div className="ThemeGrid_Width7" data-container="">
                <NC_Card_Item_Text__Skeleton id={`${scope}-$b1`} />
              </div>
            ) : (
              <div id={`${scope}-Placeholder_Header`}>{header}</div>
            )}
          </div>
          {isLoading ? (
            <div id={`${scope}-Placeholder_Content__Loading`}>{contentLoading}</div>
          ) : (
            <div id={`${scope}-Placeholder_Content`}>{content}</div>
          )}
        </div>
      )}
    </OSBlock>
  );
}

/** Assemble.AssembleEventDetail__Error (ER view :193-304): DIV_CustomErrorScreen (`nc-error-screen-info text-align-center
    assemble-details-error`) > the Icon placeholder (`assemble-details-error__icon`, OSInline), the Title (`heading3`)
    and the Subtitle (`font-size-s`, `padding-x-base`). */
export function AssembleEventDetail__Error({
  id,
  title,
  subtitle,
  icon,
}: {
  id: string;
  title: string;
  subtitle: string;
  icon?: ReactNode;
}) {
  const scope = scopeOf(id);
  return (
    <OSBlock name="Assemble.AssembleEventDetail__Error" id={id}>
      <div
        className="nc-error-screen-info text-align-center assemble-details-error"
        data-container=""
        id={`${scope}-DIV_CustomErrorScreen`}
      >
        <div className="text-align-center" data-container="">
          <div className="assemble-details-error__icon OSInline" id={`${scope}-Icon`}>
            {icon}
          </div>
        </div>
        <div className="assemble-details-error__title" data-container="">
          <span className="heading3" data-expression="">
            {title}
          </span>
        </div>
        <div className="assemble-details-error__subtitle padding-x-base" data-container="">
          <span className="font-size-s" data-expression="">
            {subtitle}
          </span>
        </div>
      </div>
    </OSBlock>
  );
}

/** Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet (SK view :210-330, OnInitialize :366-466: SkeletonList of
    SkeletonListLength items): a ThemeGrid_Width4 `margin-bottom-base` text skeleton, then a `list list-group
    margin-bottom-s` List of round image skeletons in `padding-bottom-s` rows. */
export function AssembleEventDetail_AttendeeSubdivisionList_Skelet({
  id,
  skeletonListLength,
}: {
  id: string;
  skeletonListLength: number;
}) {
  const scope = scopeOf(id);
  const skeletonList = Array.from({ length: skeletonListLength }, (_, i) => i);
  return (
    <OSBlock name="Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet" id={id}>
      <div className="margin-bottom-base ThemeGrid_Width4" data-container="">
        <NC_Card_Item_Text__Skeleton id={`${scope}-$b1`} />
      </div>
      <OSList className="list list-group margin-bottom-s" animateItems source={skeletonList} keyOf={(i) => i}>
        {(i) => (
          <div className="padding-bottom-s" data-container="">
            <NC_Result_Item__Image__Skeleton id={`${scope}-$b2-${String(i)}`} inIsRoundImage />
          </div>
        )}
      </OSList>
    </OSBlock>
  );
}

export interface AssembleEventDetailProps extends AttendeeNavigation {
  id: string;
  inputs: Pick<AssembleDetailInputs, 'EventId' | 'SeriesId' | 'Start'>;
  onNavigateToHousehold: (householdId: string) => void;
  onEmailContact: (args: EmailContactArgs) => void;
  onUpdateTitle: (title: string) => void;
}

const MEETING_NOT_FOUND_SUBTITLE =
  'This meeting might have been deleted or rescheduled, tap the Assemble icon on the bottom bar to refresh the page.';

/** Assemble.AssembleEventDetail (ED view :420-1590, controller :1596-2183). IsNotFound or IsUnavailable → __Error
    "Meeting not found" with the search-off icon; else `assemble-detail-content` > DIV_DetailCard (the detail header
    skeleton until the first fetch, then AssembleSummaryCard, not a list item) and DIV_Content (`padding-x-base`) with
    three sections: Section_MeetingNotes ("Meeting Note"; ShowMoreShowLess of the notes, 3 lines), Section_Attendees
    ("Meeting Attendees": two attendee skeletons while loading; "Host Locality" and "Interchange Meetings" localities)
    and Section_GSMContacts (" GMS Local Contact": round image skeleton while loading; the contact list).
    OnInitialize: DeviceTimezone = GetIANATimezone. OnReady: restored from cache with data → nothing; else
    GetAssembleEvent (on demand) and GetAssembleEvent_OnAfterFetch: IsUnavailable → ShowUnknownErrorMessage
    (GetUnavailableEventErrorMessage); else DateTime = OffsetDateTimeByUserUTCOffset(DateTime), the null DateTime →
    Start; UpdateTitle(event type title); IsDataFetched = True. EventNotFound is never raised by this block. */
export function AssembleEventDetail({
  id,
  inputs,
  onNavigateToHousehold,
  onEmailContact,
  onUpdateTitle,
  ...nav
}: AssembleEventDetailProps) {
  const scope = scopeOf(id);
  const fromCache = useWasRestoredFromCache();
  const [deviceTimezone] = useViewState(`${scope}-DeviceTimezone`, getIANATimezone());
  const [isDataFetched, setIsDataFetched] = useViewState(`${scope}-IsDataFetched`, false);
  const [data, setData] = useViewState<GetAssembleEventResult | null>(`${scope}-GetAssembleEvent`, null);

  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    if (fromCache && data !== null) return;
    void (async () => {
      const result = await getAssembleEvent({
        ...inputs,
        DeviceTimezone: deviceTimezone,
        IsDataFetched: isDataFetched,
      });
      const summary = result.AssembleEvent.AssembleEventSummary;
      if (summary.IsUnavailable) {
        setData(result);
        // ShowUnknownErrorMessage(GetUnavailableEventErrorMessage, GetUnavailableEventErrorMessage) (ED :1945-1966).
        showUnknownErrorMessage();
        return;
      }
      const converted = offsetDateTimeByUserUTCOffset(summary.DateTime);
      const dateTime = converted === '' ? inputs.Start : converted;
      setData({
        ...result,
        AssembleEvent: { ...result.AssembleEvent, AssembleEventSummary: { ...summary, DateTime: dateTime } },
      });
      onUpdateTitle(summary.AssembleEventType?.Title ?? '');
      setIsDataFetched(true);
    })().catch(raiseToFlowHandler);
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const event = data?.AssembleEvent;
  const summary = event?.AssembleEventSummary;
  if (data !== null && (data.IsNotFound || summary?.IsUnavailable))
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

  const notes = summary?.Notes ?? '';
  const attendees = event?.AssembleAttendeeSubdivisionList ?? [];
  const special = event?.AssembleSpecialAttendeeSubdivisionList ?? [];
  const guests = event?.AssembleAttendeeSpecialGuestList ?? [];
  const contacts = event?.GSMContactList ?? [];

  return (
    <OSBlock name="Assemble.AssembleEventDetail" id={id}>
      <div className="assemble-detail-content" data-container="">
        <div data-container="" id={`${scope}-DIV_DetailCard`}>
          {!isDataFetched && (summary?.EventId ?? '') === '' ? (
            <AssembleSummaryDetailHeader_Skeleton
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
            <AssembleSummaryCard id={`${scope}-$b7`} assembleEventSummary={summary} isListItem={false} />
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
                      {...nav}
                    />
                  </div>
                )}
                {special.length > 0 && (
                  <div data-container="" id={`${scope}-DIV_SubdivisionSpecialAttendee__Content`}>
                    <AssembleEventDetail_LocalitiesList
                      id={`${scope}-$b15`}
                      assembleAttendeeSubdivisionList={special}
                      header="Interchange Meetings"
                      {...nav}
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
