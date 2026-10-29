import type { EventCalendar, TimelineEventGroup } from '@/api/event';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { NetworkWarning } from '@/components/ui/NetworkWarning';
import { OrbitErrorScreen } from '@/components/orbit/OrbitErrorScreen';
import { EventDetailSubSection } from '@/components/orbit/EventDetailSubSection';
import type { ContactByPhonePopupData, UI_ContactByMessage_WrapperData } from '@/lib/ubtConnectUtils/structures';
import { EventCard_V2, type HouseholdClick } from './EventCard_V2';
import { SwipeEvents } from './SwipeEvents';

export interface MyTimeline_V2Props {
  id?: string;
  /** Instance scope of the block's widgets ("b1-b9"). */
  scope: string;
  inPastEventsData: readonly TimelineEventGroup[];
  inUpcomingEventsData: readonly EventCalendar[];
  inIsFetchingMyTimeline: boolean;
  inIsFiltering: boolean;
  inHasFetchError: boolean;
  onEventClicked: (eventHostId: string, eventId: string) => void;
  onHouseholdClicked: (click: HouseholdClick) => void;
  onClickPhoneCall: (info: ContactByPhonePopupData) => void;
  onClickMessage: (data: UI_ContactByMessage_WrapperData, countryName: string) => void;
  /** Event ScrollEnding (List_MyTimelineOnScrollEnding). */
  onScrollEnding: () => unknown;
  /** Event TryAgain. */
  onTryAgain: () => void;
  /** Event EventsSwipeUp: SwipeEventSwipeUp, a swipe up on the empty timeline (MT :738-760). */
  onEventsSwipeUp: () => unknown;
}

/** The timeline (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyTimeline_V2.mvc.js view :200-420).
    With events: MinHeight_Enforcer (`timeline-ldm-height`) with "Upcoming Event(s)" (EventDetail_SubSection with a
    bottom border, List_UpcomingEvents of EventCard_V2) when there are upcoming events, and "Past Events"
    (List_PastEvents: one `past-event-cont` per month, its CurrentMonthDate and List_PastEventsData of EventCard_V2)
    when there are past events; a card is expandable when its event has guests. Without events: NetworkWarning on a
    fetch error, else nothing while fetching, else ErrorScreen "LDMs events not available." (+ "Please try a different
    filter" while filtering) with SwipeEvents on the ErrorScreen (MT :651-690: SwipeUp raises EventsSwipeUp).
    The list-updating loader shows while fetching without a fetch error. Both lists raise ScrollEnding.
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyTimeline_V2 */
export function MyTimeline_V2({
  id,
  scope,
  inPastEventsData,
  inUpcomingEventsData,
  inIsFetchingMyTimeline,
  inIsFiltering,
  inHasFetchError,
  onEventClicked,
  onHouseholdClicked,
  onClickPhoneCall,
  onClickMessage,
  onScrollEnding,
  onTryAgain,
  onEventsSwipeUp,
}: MyTimeline_V2Props) {
  const card = (e: EventCalendar, cardScope: string, cardId: string) => (
    <EventCard_V2
      id={cardId}
      scope={cardScope}
      inEvent={e}
      inIsExpandable={e.Guests.length > 0}
      onEventClicked={onEventClicked}
      onHouseholdClicked={onHouseholdClicked}
      onClickPhoneCall={onClickPhoneCall}
      onClickMessage={onClickMessage}
    />
  );

  const hasEvents = inPastEventsData.length > 0 || inUpcomingEventsData.length > 0;
  return (
    <OSBlock name="LDM_Blocks_V2.MyTimeline_V2" id={id}>
      {hasEvents ? (
        <div className="timeline-ldm-height" data-container="" id={`${scope}-MinHeight_Enforcer`}>
          {inUpcomingEventsData.length > 0 ? (
            <EventDetailSubSection
              id={`${scope}-SubSection_UpcomingEvents`}
              inTitle={`Upcoming ${inUpcomingEventsData.length > 1 ? 'Events' : 'Event'}`}
              inHasBottomBorder
            >
              <OSList
                id={`${scope}-List_UpcomingEvents`}
                className="list list-group"
                animateItems
                disableVirtualization
                source={inUpcomingEventsData}
                keyOf={(e) => e.EventHostId}
                onScrollEnding={onScrollEnding}
              >
                {(e, i) => card(e, `${scope}-l1-${String(i)}-b2`, `${scope}-l1-${String(i)}-ListItem_UpcomingEvent`)}
              </OSList>
            </EventDetailSubSection>
          ) : null}
          {inPastEventsData.length > 0 ? (
            <EventDetailSubSection id={`${scope}-SubSection_MyTimeline`} inTitle="Past Events">
              <OSList
                id={`${scope}-List_PastEvents`}
                className="list list-group past-event-list"
                animateItems
                disableVirtualization
                source={inPastEventsData}
                keyOf={(g) => g.CurrentMonthDate}
                onScrollEnding={onScrollEnding}
              >
                {(g, gi) => (
                  <div className="past-event-cont" data-container="">
                    <div className="past-event-date" data-container="">
                      <span data-expression="">{g.CurrentMonthDate}</span>
                    </div>
                    <OSList
                      id={`${scope}-l3-${String(gi)}-List_PastEventsData`}
                      className="list list-group"
                      animateItems
                      disableVirtualization
                      source={g.EventsCalendar}
                      keyOf={(e) => e.EventHostId}
                    >
                      {(e, ei) =>
                        card(
                          e,
                          `${scope}-l3-${String(gi)}-l3-${String(ei)}-b4`,
                          `${scope}-l3-${String(gi)}-l3-${String(ei)}-ListItem_PastEvents`,
                        )
                      }
                    </OSList>
                  </div>
                )}
              </OSList>
            </EventDetailSubSection>
          ) : null}
        </div>
      ) : inHasFetchError ? (
        <NetworkWarning id={`${scope}-$b5`} onTryAgain={onTryAgain} />
      ) : inIsFetchingMyTimeline ? null : (
        <>
          <OrbitErrorScreen
            id={`${scope}-ErrorScreen`}
            inErrorMessage={
              inIsFiltering
                ? 'LDMs events not available.\r\nPlease try a different filter'
                : 'LDMs events not available.'
            }
          />
          <SwipeEvents id={`${scope}-$b7`} widgetId={`${scope}-ErrorScreen`} onSwipeUp={onEventsSwipeUp} />
        </>
      )}
      {inIsFetchingMyTimeline && !inHasFetchError ? (
        <div className="list-updating-cont" data-container="" id={`${scope}-LoadingCont`}>
          <div className="list-updating" data-container="" id={`${scope}-Loading`} />
        </div>
      ) : null}
    </OSBlock>
  );
}
