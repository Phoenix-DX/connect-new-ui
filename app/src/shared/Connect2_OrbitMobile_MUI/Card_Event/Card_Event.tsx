// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event
import { OSBlock } from '../../../components/OSBlock';
import { styleFromCssText } from '../../lib/cssText';
import { Card_Template } from '../Card_Template';
import { getCSSVarFromMainColor, getFormattedDateTime } from '../lib/actions';
import { OrbitColorShade } from '../lib/staticEntities';
import type { Event_Screen } from './types';

export interface Card_EventProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_EventSummary: the event (Event_ScreenRec); default empty record. */
  inEventSummary?: Event_Screen;
  /** Event ClickedEvent(EventSummary). */
  onClickedEvent?: (eventSummary: Event_Screen) => void;
}

/** Orbit event card (Card_Event.mvc.js, OrbitLanding pretty source, view :141-301): a Card_Template in the event
    type's MainColorVar; icon placeholder = `orbit-card-icon-cont` (shade 2) with the type's MainIcon (shade 7,
    :180-215); title = Title; content = start - end dates (GetFormattedDateTime(…, False, True, False, True, False,
    False), :253-258) and EventLocation. Card_Template's OnClick triggers ClickedEvent(In_EventSummary) (:150-160). */
export function Card_Event({ id, inEventSummary = {}, onClickedEvent }: Card_EventProps) {
  const eventType = inEventSummary.OrbitEventType ?? {};
  const eventInfo = inEventSummary.EventInfo ?? {};
  const mainColor = eventType.MainColorVar ?? '';
  const dateText = (value: string | undefined) =>
    getFormattedDateTime(value ?? '', false, true, false, true, false, false);
  return (
    <OSBlock name="Orbit_Blocks.Card_Event" id={id}>
      <Card_Template
        inMainColorVar={mainColor}
        onOnClick={() => onClickedEvent?.(inEventSummary)}
        placeholderIcon={
          <div
            className="orbit-card-icon-cont"
            data-container=""
            style={styleFromCssText(`background-color: ${getCSSVarFromMainColor(mainColor, OrbitColorShade.Color2)};`)}
          >
            <i
              className={`icon orbit-card-icon ${eventType.MainIcon ?? ''}`}
              data-icon=""
              style={styleFromCssText(`color: ${getCSSVarFromMainColor(mainColor, OrbitColorShade.Color7)};`)}
            />
          </div>
        }
        placeholderTitle={<span data-expression="">{inEventSummary.Title ?? ''}</span>}
        placeholderContent={
          <>
            <div className="orbit-card-content-info margin-bottom-m" data-container="">
              <i className="icon orbit-icon-date-time orbit-card-content-info-icon fa fa-flag fa-1x" data-icon="" />
              <span data-expression="">{`${dateText(eventInfo.StartEventDate)} - ${dateText(eventInfo.EndEventDate)}`}</span>
            </div>
            <div className="orbit-card-content-info" data-container="">
              <i className="icon orbit-icon-location orbit-card-content-info-icon fa fa-flag fa-1x" data-icon="" />
              <span data-expression="">{eventInfo.EventLocation ?? ''}</span>
            </div>
          </>
        }
      />
    </OSBlock>
  );
}
