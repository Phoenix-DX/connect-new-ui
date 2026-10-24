// @os-block Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_Info_V2
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import type { EventCalendar } from '@/pages/LDM_MyEvents_V2/types';
import { formatEventDate } from './actions';

export interface EventCard_Info_V2Props {
  id?: string;
  /** Instance scope of the block's widgets. */
  scope: string;
  /** In_Event. */
  inEvent: EventCalendar;
  /** Event CardClicked. */
  onCardClicked: () => void;
}

/** The event lines of an LDM card (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_Info_V2
    .mvc.js view): the LDM logo and EventName, the clock and FormatDateTime(TextToDate(EventDate), "dddd, d MMMM
    yyyy"), the host icon with, when EventHostId > 0, NameLocation (HostFullName / "(" + HostLocality + ")"), else
    HostFullName alone. A click anywhere triggers CardClicked (OnClick_CardInfo). */
export function EventCard_Info_V2({ id, scope, inEvent, onCardClicked }: EventCard_Info_V2Props) {
  return (
    <OSBlock name="LDM_Blocks_V2.EventCard_Info_V2" id={id}>
      <div className="event-card-info-cont" data-container="" style={{ cursor: 'pointer' }} onClick={onCardClicked}>
        <div className="event-card-info-item event-card-info-title" data-container="">
          <img className="small-icon" data-image="" src={osImage('img/Connect2_OrbitMobile_MUI.LDM_Logo.svg')} />
          <span className="margin-left-s" data-expression="">
            {inEvent.EventName}
          </span>
        </div>
        <div className="event-card-info-item event-card-info-date" data-container="">
          <img className="small-icon" data-image="" src={osImage('img/Connect2_OrbitMobile_MUI.event_clock.svg')} />
          <span className="margin-left-s" data-expression="">
            {formatEventDate(inEvent.EventDate)}
          </span>
        </div>
        <div className="event-card-info-item" data-container="">
          <img data-image="" src={osImage('img/Connect2_OrbitMobile_MUI.event_host_24px.svg')} />
          {Number(inEvent.EventHostId) > 0 ? (
            <div className="event-card-info-item-name-location" data-container="" id={`${scope}-NameLocation`}>
              <div data-container="">
                <span className="" data-expression="">
                  {inEvent.HostFullName}
                </span>
              </div>
              <div data-container="">
                <span className="" data-expression="">
                  {`(${inEvent.HostLocality})`}
                </span>
              </div>
            </div>
          ) : (
            <span className="margin-left-s" data-expression="">
              {inEvent.HostFullName}
            </span>
          )}
        </div>
      </div>
    </OSBlock>
  );
}
