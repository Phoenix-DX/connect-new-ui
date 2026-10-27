import type { ReactNode } from 'react';
import { ContactByMessage } from '@/components/contact/ContactByMessage';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DEFAULT_DATE_RANGE_IN_MONTHS } from '@/pages/LDM_MyEvents_V2/hooks/ldmMyEventsState';
import type { LdmMyEventsFlows } from '@/pages/LDM_MyEvents_V2/hooks/useLdmMyEvents';
import { MenuAction } from '@/lib/legacyShared/staticEntities';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';
import { MyEvents_MyTimelineFilterButton } from './MyEvents_MyTimelineFilterButton';
import { MyTimeline_V2 } from './MyTimeline_V2';

export interface LdmMyEventsViewProps extends LdmMyEventsFlows {
  /** OutSystems instance id of the block. */
  id: string;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateToMyCalendar: the My calendar flag icon. */
  onMyCalendarClick: () => void;
}

/** The LDM "My Timeline" block. A layout (extended class `my-events`) with the back icon and "My Timeline" on the left
    of the header, the filter button and the My calendar flag on the right, and in the content the MyTimeline_V2 block,
    Dialog_AccessRestrictedAction_Legacy and the two contact popups (by phone, by message). The filter icon is greyed
    while the timeline fetches; its container has the `my-events-popup-aura` class while filtering. CurrentEventView is
    always MyTimeline, so the calendar views of the block (Popover_DateSelector, EventCalendarWeekMonth, MonthCalendar,
    DayCalendar, Agenda_V2) never render. The flows are in useLdmMyEvents.
    @origin Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2 */
export function LdmMyEventsView({
  id,
  bottomBar,
  commonUIElements,
  onMyCalendarClick,
  state,
  onScrollEnding,
  onEventClicked,
  onHouseholdClicked,
  onPhoneCall,
  onMessage,
  onTryAgain,
  onSwipeUp,
  onMyTimelineFilter,
  onResetFilters,
  onContactByPhoneClose,
  onContactByMessageClose,
  onContactByMessageEmail,
}: LdmMyEventsViewProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        extendedClasses="my-events"
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={
          <div data-container="" style={{ alignItems: 'center', display: 'flex' }}>
            <div data-container="" style={{ flex: '1 0 20%' }}>
              {/* MenuAction Auto of the Orbit module: rendered as the back icon. */}
              <MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Back} />
            </div>
            <div
              className="month-header ThemeGrid_Width1"
              data-container=""
              style={{ marginLeft: '20px', flex: '1 0 80%' }}
            >
              My Timeline
            </div>
          </div>
        }
        headerRight={
          <div className="flex-center-vertical full-width flex-horizontal-right event-view" data-container="">
            <div className={`margin-x-base${state.isFiltering ? ' my-events-popup-aura' : ''}`} data-container="">
              <MyEvents_MyTimelineFilterButton
                id={`${scope}-$b4`}
                scope={`${scope}-b4`}
                inHasLoaded={!state.isFetchingMyTimeline}
                inIsShowing
                inDefaultDateRangeInMonths={DEFAULT_DATE_RANGE_IN_MONTHS}
                onFilter={onMyTimelineFilter}
                onResetFilters={onResetFilters}
              />
            </div>
            <i
              className="icon menu-icon-my-calendar font-size-1-5em fa fa-flag fa-2x"
              data-icon=""
              onClick={onMyCalendarClick}
            />
          </div>
        }
        content={
          <>
            <MyTimeline_V2
              id={`${scope}-MyTimeline_V2`}
              scope={`${scope}-b9`}
              inPastEventsData={state.pastEventsData}
              inUpcomingEventsData={state.upcomingEventsData}
              inIsFetchingMyTimeline={state.isFetchingMyTimeline}
              inIsFiltering={state.isFiltering}
              inHasFetchError={state.hasFetchError}
              onEventClicked={onEventClicked}
              onHouseholdClicked={onHouseholdClicked}
              onClickPhoneCall={onPhoneCall}
              onClickMessage={onMessage}
              onScrollEnding={onScrollEnding}
              onTryAgain={onTryAgain}
              onEventsSwipeUp={onSwipeUp}
            />
            <DialogAccessRestrictedActionLegacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b12`} />
            <ContactPopupByPhone
              id={`${scope}-$b13`}
              inCallPopupData={state.contactByPhoneData}
              onEventCancel={onContactByPhoneClose}
              onEventCall={onContactByPhoneClose}
            />
            <ContactByMessage
              id={`${scope}-$b14`}
              inContactPopupData={state.contactByMessageData}
              onEventEmail={onContactByMessageEmail}
              onEventCall={onContactByMessageClose}
              onEventMessageChannel={onContactByMessageClose}
              onEventCancel={onContactByMessageClose}
            />
          </>
        }
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
