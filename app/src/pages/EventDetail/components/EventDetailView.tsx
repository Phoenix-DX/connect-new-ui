import type { ReactNode } from 'react';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { ContactHelpdeskFooter } from '@/components/orbit/ContactHelpdeskFooter';
import { HostSurveyPill } from '@/components/orbit/HostSurveyPill';
import { MilestoneCard } from '@/components/orbit/MilestoneCard';
import { OrbitAccordion } from '@/components/orbit/OrbitAccordion';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { eventDateRange } from '@/pages/EventDetail/hooks/eventDetailActions';
import type { EventDetailState } from '@/pages/EventDetail/hooks/eventDetailState';
import type { EventDetailHandlers } from '@/pages/EventDetail/hooks/useEventDetail';
import { MenuAction_Auto, OrbitEventType, SurveyStatus } from '@/pages/EventDetail/staticEntities';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import { SectionExpandable } from '@/components/ui/legacy/SectionExpandable';
import { ItemNotesSection } from '@/containers/ItemNotesSection';
import { EventDateSelection } from './EventDateSelection';
import { HostAllocation_List } from './HostAllocation_List';

/** The view of the event detail, props only. The flows are in `useEventDetail`.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail */

const NO_ITINERARY = 'Your itinerary will be available once it has been published by the event organiser.';
const NO_LONGER_AVAILABLE = 'The Event is no longer available for you.';
/** ItemNotesSection of the event (ScreenBlock_EventDetail.mvc.js:805-860): category TextToIdentifier("Orbit Event"),
    ActionBarOptions ShowAddNote and IsAddNoteEnabled True (the action bar reads only ShowAddNote). */
const NOTE_CATEGORY_ORBIT_EVENT = 'Orbit Event';
const EVENT_NOTES_ACTIONS = { showUnbookmark: false, showAddNote: true, showShare: false };

export interface EventDetailViewProps extends EventDetailHandlers {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** In_EventName: the title when it is not empty (else EventDetails.EventName). */
  inEventName: string;
  /** In_FromNotification: an unavailable event then shows "no longer available". */
  inFromNotification: boolean;
  /** In_EventId: In_ItemId of the notes section (LongIntegerToText(In_EventId)). */
  inEventId: string;
  /** GetHasOrbitHostSurvey (flag mobileOrbitHostSurvey): the host survey link and pill. */
  hasOrbitHostSurvey: boolean;
  /** GetHasOrbitEventBooklet (flag mobileOrbitEventBooklet): the "View Event Guest List" row. */
  hasOrbitEventBooklet: boolean;
  /** The block variables and the data action outputs. */
  state: EventDetailState;
}

/** Layout_Orbit (CustomClass "orbit-detail orbit-header-center") with the Auto MenuIcon, the event name as title
    (In_EventName, else EventDetails.EventName) and, when not fetching, the QR code and documents icons in HeaderRight.
    Content: the skeleton while fetching; an unavailable event shows NoInformation; else the info rows, the host survey
    (host events), the Host Allocation accordion (survey Confirmed), Itinerary, EventDateSelection and the milestone
    cards of the selected day, or without milestones the accordion (helpers and Confirmed) or NoInformation.
    BottomBar: ContactHelpdesk_Footer when the event has milestones. */
export function EventDetailView({
  id,
  inEventName,
  inFromNotification,
  inEventId,
  hasOrbitHostSurvey,
  hasOrbitEventBooklet,
  state: s,
  onClickGenerateQRCode,
  onClickOpenDocuments,
  onClickViewEventBooklet,
  onClickNavigateToHostSurvey,
  onHandleClickedMilestone,
  onHandleHostAllocationView,
  onHandleViewHelpers,
  onHandleContactHelpdesk,
  onHandleClickedDate,
  onHandleNotesChanged,
  onHandleNoteDeleted,
}: EventDetailViewProps) {
  const prefix = id.replace('$', '');
  const e = s.eventDetails;
  const status = s.localSurveyStatus[0];
  const isConfirmed = status?.Id === SurveyStatus.Confirmed;

  /** The Host Allocation accordion (with milestones, and without milestones when the event has helpers). */
  const accordion = (a: string, item: string, list: string) => (
    <OrbitAccordion id={`${prefix}-$b${a}`} inColoredContent>
      <SectionExpandable
        id={`${prefix}-$b${item}`}
        isExpanded={false}
        usePadding={false}
        extendedClass="orbit-accordion-item"
        title={<span data-expression="">Host Allocation</span>}
        content={
          <HostAllocation_List
            id={`${prefix}-$b${list}`}
            inHostAllocationList={s.hostAllocation}
            onClickView={onHandleHostAllocationView}
            onClickViewHelpers={onHandleViewHelpers}
          />
        }
      />
    </OrbitAccordion>
  );

  /** Host survey row of a host event: Sent or Confirmed with the HostSurvey flag → "Complete / View Host Survey" and
      the status pill; otherwise the "Host Survey" tag. */
  const tag = (
    <div className="orbit-host-survey-link" data-container="">
      <span className="font-size-1-1em color-orbit-primary-7 bold" data-expression="">
        Host Survey
      </span>
      <div className="orbit-host-survey-link-tag" data-container="">
        <span data-expression="">{status?.Label ?? ''}</span>
      </div>
    </div>
  );
  const isSent = status?.Id === SurveyStatus.Sent;
  const hostSurvey: ReactNode =
    e.EventType !== OrbitEventType.EventHost || status === undefined ? null : hasOrbitHostSurvey &&
      (isSent || isConfirmed) ? (
      <div
        className="full-width padding-m display-flex align-items-center justify-content-space-between"
        data-container=""
      >
        <div
          className="orbit-host-survey-link-new"
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={onClickNavigateToHostSurvey}
        >
          <span className="white-space-nowrap" data-expression="">
            {`${isSent ? 'Complete' : 'View'} Host Survey`}
          </span>
          <i className="icon margin-left-m font-size-1-25em fa fa-angle-right fa-1x" data-icon="" />
        </div>
        <HostSurveyPill
          id={`${prefix}-$b4`}
          inIconClass={
            isSent ? 'orbit-icon-circle-warning color-orbit-orange-8' : 'orbit-icon-circle-check color-orbit-green-6'
          }
          inIsSmallIcon
          inPillText={status.Label}
          inExtendedStyle={
            isSent
              ? 'background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);'
              : 'background-color: var(--orbit-green-2); color: var(--orbit-green-6);'
          }
        />
      </div>
    ) : (
      tag
    );

  /** The accordion of a day with milestones: survey Confirmed. */
  const dayAccordion: ReactNode = isConfirmed ? accordion('5', '6', '7') : null;

  const noInformation = (alias: string) => (
    <OrbitNoInformation
      id={`${prefix}-$b${alias}`}
      message={inFromNotification && s.isEventUnavailable ? NO_LONGER_AVAILABLE : NO_ITINERARY}
      isUrgent={s.isEventUnavailable}
    />
  );

  /** Without milestones: once fetched, the accordion (helpers and Confirmed) or the separator and NoInformation. */
  const noMilestones: ReactNode = !(s.isEventDetailsFetched && !s.isFetchingData) ? null : s.responseHelpers &&
    isConfirmed ? (
    accordion('10', '11', '12')
  ) : (
    <>
      <div className="orbit-separator" data-container="" />
      {noInformation('13')}
    </>
  );

  const info = (
    <div className="font-size-0-9em padding-x-m padding-y-m" data-container="">
      <div className="flex-center-vertical" data-container="">
        <i className="icon orbit-icon-date-time fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-base" data-expression="">
          {eventDateRange(e.EventStartDate, e.EventEndDate)}
        </span>
      </div>
      {(e.OrbitEventType.Id === OrbitEventType.EventHost || e.OrbitEventType.Id === OrbitEventType.EventAdmin) && (
        <>
          <div className="flex-center-vertical margin-top-m" data-container="">
            <i className="icon orbit-icon-location fa fa-flag fa-1x" data-icon="" />
            <span className="margin-left-base" data-expression="">
              {e.Location}
            </span>
          </div>
          <div className="flex-center-vertical margin-top-m" data-container="">
            <i className="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon="" />
            <span className="margin-left-base" data-expression="">
              {e.OrbitEventType.Type}
            </span>
          </div>
        </>
      )}
      <div className="flex-center-vertical margin-top-m" data-container="">
        <i className="icon orbit-icon-window fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-base" data-expression="">
          {e.TypeOfEvent}
        </span>
      </div>
      {hasOrbitEventBooklet && e.IsBookletVisible && (
        <div
          className="flex-center-vertical margin-top-m color-orbit-primary-7"
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={onClickViewEventBooklet}
        >
          <i className="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon="" />
          <span className="margin-left-base">View Event Guest List</span>
          <i className="icon orbit-icon-arrow margin-left-base fa fa-flag fa-1x" data-icon="" />
        </div>
      )}
      {s.hasQRCode && (
        <div className="flex-center-vertical margin-top-m" data-container="">
          <i className="icon fa fa-qrcode fa-1x" data-icon="" />
          <div
            className={`orbit-generate-qrcode-button${s.hasScanned ? ' orbit-generate-qrcode-button-disabled' : ''} OSInline`}
            data-container=""
            style={{ cursor: 'pointer' }}
            onClick={onClickGenerateQRCode}
          >
            <i className="icon fa fa-camera fa-1x" data-icon="" />
            <span className="orbit-generate-qrcode-button-text" data-expression="">
              {s.hasScanned ? 'QR CODE GENERATED' : 'GENERATE QR CODE'}
            </span>
          </div>
        </div>
      )}
      <div className="orbit-event-notes" data-container="">
        <ItemNotesSection
          id={`${prefix}-$b3`}
          actionBarOptions={EVENT_NOTES_ACTIONS}
          inNoteCategoryId={NOTE_CATEGORY_ORBIT_EVENT}
          inItemId={inEventId}
          inNotes={s.eventNotes}
          onOnNoteDeleted={(noteId) => {
            onHandleNoteDeleted(noteId);
          }}
          onOnNotesChanged={onHandleNotesChanged}
        />
      </div>
    </div>
  );

  const content: ReactNode = s.isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b15`} inSkeletonLoadingId={OrbitSkeletonLoading.EventDetail} />
  ) : s.isEventUnavailable ? (
    s.isEventDetailsFetched ? (
      noInformation('14')
    ) : null
  ) : (
    <>
      {info}
      {hostSurvey}
      {s.responseMilestones.length > 0 ? (
        <>
          {dayAccordion}
          <div className="padding-x-m padding-y-m bold color-orbit-primary-7 font-size-1-1em" data-container="">
            <span data-expression="">Itinerary</span>
          </div>
          <EventDateSelection id={`${prefix}-$b8`} inDateList={s.dateFilters} onClickedDate={onHandleClickedDate} />
          <OSList
            className="list list-group orbit-card-list"
            animateItems
            disableVirtualization
            source={e.Milestones}
            keyOf={(p, i) => `${p.MilestoneId ?? ''}-${String(i)}`}
          >
            {(p, i) => (
              <div className="orbit-card-list-cont" data-container="">
                <MilestoneCard
                  id={`${prefix}-l1-142797_${String(i)}-$b9`}
                  inMilestoneSummary={p}
                  isOverrideMainColorVar=""
                  isSetUpMeals={!e.Meals}
                  onClickedMilestone={onHandleClickedMilestone}
                />
              </div>
            )}
          </OSList>
        </>
      ) : (
        noMilestones
      )}
    </>
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_EventDetail" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail orbit-header-center"
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MenuAction_Auto} />}
        title={<span data-expression="">{inEventName !== '' ? inEventName : e.EventName}</span>}
        headerRight={
          s.isFetchingData ? null : (
            <div
              className="display-flex flex-direction-row align-content-space-evenly align-items-center padding-left-base"
              data-container=""
            >
              {s.responseMilestones.length > 0 && s.hasQRCode && !s.hasScanned && (
                <div
                  className="display-flex align-items-center align-content-center"
                  data-container=""
                  style={{ cursor: 'pointer' }}
                  onClick={onClickGenerateQRCode}
                >
                  <i className="icon padding-none font-size-1-5em fa fa-qrcode fa-1x" data-icon="" />
                </div>
              )}
              {s.hasDocuments && (
                <div
                  className="display-flex align-items-center align-content-center"
                  data-container=""
                  style={{ cursor: 'pointer' }}
                  onClick={onClickOpenDocuments}
                >
                  <i
                    className={`icon orbit-icon-paper-clip padding-none font-size-1-5em${
                      s.responseMilestones.length > 0 && s.hasQRCode && !s.hasScanned ? ' margin-left-base' : ''
                    }`}
                    data-icon=""
                  />
                </div>
              )}
            </div>
          )
        }
        content={content}
        bottomBar={
          s.responseMilestones.length > 0 && !s.isFetchingData ? (
            <ContactHelpdeskFooter id={`${prefix}-$b16`} onClick={onHandleContactHelpdesk} />
          ) : null
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
