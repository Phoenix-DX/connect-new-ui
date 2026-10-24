// @os-block Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2
import { OSBlock } from '@/components/ui/os/OSBlock';
import type {
  ContactByPhonePopupData,
  UI_ContactByMessage_WrapperData,
} from '@/shared/UBTConnect_Utils/lib/structures';
import type { EventCalendar } from '@/pages/LDM_MyEvents_V2/types';
import { EventCard_Box } from './EventCard_Box';
import { EventCard_Guests } from './EventCard_Guests';
import { EventCard_Info_V2 } from './EventCard_Info_V2';

export interface EventCard_V2Props {
  id?: string;
  /** Instance scope of the block's widgets. */
  scope: string;
  /** In_Event. */
  inEvent: EventCalendar;
  /** In_IsExpandable. */
  inIsExpandable: boolean;
  /** In_RightToLeft. */
  inRightToLeft?: boolean;
  /** Event EventClicked(EventHostId, EventId). */
  onEventClicked: (eventHostId: string, eventId: string) => void;
  /** Event HouseholdClicked(…, EventHostId, EventId, RecordDisabled, IsHosting, IsHouseholdDisplayed, HouseholdIdList). */
  onHouseholdClicked: (click: HouseholdClick) => void;
  onClickPhoneCall: (info: ContactByPhonePopupData) => void;
  onClickMessage: (data: UI_ContactByMessage_WrapperData, countryName: string) => void;
}

/** The HouseholdClicked event of EventCard_V2 (EventCard_V2.mvc.js view :285-300). */
export interface HouseholdClick {
  householdId: string;
  householdName: string;
  currentRowNumber: number;
  eventHostId: string;
  eventId: string;
  recordDisabled: boolean;
  isHosting: boolean;
  isHouseholdDisplayed: boolean;
  /** The HouseholderId of every guest of the event. */
  householdIdList: string[];
}

/** An LDM event card (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc.js view):
    EventCard_Box (In_EventType LDM) with EventCard_Info_V2 (CardClicked → EventClicked(EventHostId, EventId)) and
    EventCard_Guests (In_GuestCount, the guests, In_IsExpandable); HouseholdClicked adds the event's EventHostId,
    EventId, Hosting and the HouseholderId list of its guests. */
export function EventCard_V2({
  id,
  scope,
  inEvent,
  inIsExpandable,
  inRightToLeft = false,
  onEventClicked,
  onHouseholdClicked,
  onClickPhoneCall,
  onClickMessage,
}: EventCard_V2Props) {
  return (
    <OSBlock name="LDM_Blocks_V2.EventCard_V2" id={id}>
      <EventCard_Box
        id={`${scope}-$b1`}
        scope={`${scope}-b1`}
        inEventType="LDM"
        cardContents={
          <>
            <EventCard_Info_V2
              id={`${scope}-$b2`}
              scope={`${scope}-b2`}
              inEvent={inEvent}
              onCardClicked={() => {
                onEventClicked(inEvent.EventHostId, inEvent.EventId);
              }}
            />
            <EventCard_Guests
              id={`${scope}-$b3`}
              scope={`${scope}-b3`}
              inRightToLeft={inRightToLeft}
              inGuestCount={inEvent.GuestCount}
              inGuests={inEvent.Guests}
              inIsExpandable={inIsExpandable}
              onHouseholdClicked={(
                householdId,
                householdName,
                currentRowNumber,
                recordDisabled,
                isHouseholdDisplayed,
              ) => {
                onHouseholdClicked({
                  householdId,
                  householdName,
                  currentRowNumber,
                  eventHostId: inEvent.EventHostId,
                  eventId: inEvent.EventId,
                  recordDisabled,
                  isHosting: inEvent.Hosting,
                  isHouseholdDisplayed,
                  householdIdList: inEvent.Guests.map((g) => g.HouseholderId),
                });
              }}
              onClickPhoneCall={onClickPhoneCall}
              onClickMessage={onClickMessage}
            />
          </>
        }
      />
    </OSBlock>
  );
}
