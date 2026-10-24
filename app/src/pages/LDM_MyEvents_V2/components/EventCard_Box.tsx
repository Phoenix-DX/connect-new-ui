import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface EventCard_BoxProps {
  id?: string;
  /** Instance scope of the block's widgets. */
  scope: string;
  /** In_EventType: an EventCategory (only LDM is used on this route). */
  inEventType: 'LDM' | 'Orbit' | 'Other';
  /** Placeholder CardContents. */
  cardContents?: ReactNode;
}

/** The card frame of an event (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Box.mvc.js = EB).
    OnInitialize (EB :210-225): EventColor = "#00A492" for LDM, "#002456" for Orbit, else the third colour (EB :220,
    cut in the copy; not reachable here). View (EB :140-160): `event-card-box` with "border-top: 4px solid
    EventColor" and an onClick that triggers Click_Card, which EventCard_V2 does not handle (the runtime still adds
    cursor: pointer), around the CardContents placeholder.
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Box */
export function EventCard_Box({ id, scope, inEventType, cardContents }: EventCard_BoxProps) {
  const eventColor = inEventType === 'LDM' ? '#00A492' : inEventType === 'Orbit' ? '#002456' : '';
  return (
    <OSBlock name="LDM_Blocks.EventCard_Box" id={id}>
      <div
        className="event-card-box"
        data-container=""
        style={{ cursor: 'pointer', borderTop: `4px solid ${eventColor}` }}
        // Container onclick → event Click_Card (EB :146-153), which EventCard_V2 does not bind (its EventCard_Box
        // events are only _handleError, EventCard_V2.mvc.js:176-180): the unbound event resolves (EB :236-238).
        onClick={() => undefined}
      >
        <div id={`${scope}-CardContents`}>{cardContents}</div>
      </div>
    </OSBlock>
  );
}
