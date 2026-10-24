/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone */
// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone
import { Fragment, useState, type MouseEvent, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { styleFromCssText } from '@/shared/lib/cssText';
import { OrbitCard } from '@/components/orbit/OrbitCard';
import {
  getCSSVarFromMainColor,
  getFormattedDateTime,
  getFormattedDateTimeById,
  getFormattedTime_FromDateTime,
} from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitColorShade, OrbitMilestoneType as T } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { Milestone_Screen } from './types';

export interface MilestoneCardProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_MilestoneSummary: the milestone (Milestone_ScreenRec); default empty record. */
  inMilestoneSummary?: Milestone_Screen;
  /** IsOverrideMainColorVar: a colour used instead of the milestone type's MainColorVar; default "". */
  isOverrideMainColorVar?: string;
  /** IsSetUpMeals: hides the meal card's View Guests button; default false. */
  isSetUpMeals?: boolean;
  /** Event ClickedMilestone(MilestoneSummary). */
  onClickedMilestone?: (milestoneSummary: Milestone_Screen) => void;
}

/** OutSystems NullDate() check of a DateTime ("" or 1900-01-01 = null). */
const isNull = (value: string | undefined) => !value || value.startsWith('1900-01-01');

function Info({ className, icon, children }: { className: string; icon: string; children: ReactNode }) {
  return (
    <div className={className} data-container="">
      <i className={icon} data-icon="" />
      {children}
    </div>
  );
}
const text = (value: string | undefined) => <span data-expression="">{value ?? ''}</span>;
const ICON = 'icon orbit-card-content-info-icon';
const FA = 'fa fa-flag fa-1x';

/** Orbit milestone card (Card_Milestone.mvc.js, EventDetail pretty source): a Card_Template in MainColorVar (OnInitialize
    :1068-1069: IsOverrideMainColorVar when not "", else the type's MainColorVar; computed once, no OnParametersChanged)
    with In_MilestoneTypeId = the type Id (:176-178); icon placeholder (:210-243), Title, and the content of the type (:263-944):
    transport (departure / arrival rows), meeting / meal at hall (location, seating, time), meal (host, location, time,
    View Guests unless IsSetUpMeals), accommodation (host, location, View Guests), hotel (host), break (nothing), admin
    types (description, date, times; never on TST, see OrbitMilestoneType). Card OnClick → OnHandle_ClickedMilestone
    (:972-1000); View Guests → OnClick_Button (:1030-1040); both trigger ClickedMilestone. */
export function MilestoneCard({
  id,
  inMilestoneSummary = {},
  isOverrideMainColorVar = '',
  isSetUpMeals = false,
  onClickedMilestone,
}: MilestoneCardProps) {
  const type = inMilestoneSummary.OrbitMilestoneType ?? {};
  const info = inMilestoneSummary.MilestoneInfo ?? {};
  const typeId = type.Id ?? '';
  const milestoneDateTime = inMilestoneSummary.MilestoneDateTime ?? '';
  const [mainColorVar] = useState(() =>
    isOverrideMainColorVar !== '' ? isOverrideMainColorVar : (type.MainColorVar ?? ''),
  );
  const shade7 = getCSSVarFromMainColor(mainColorVar, OrbitColorShade.Color7);

  /** OnHandle_ClickedMilestone (:985-1000): only with a MilestoneId; skips when MilestoneId = AccommodationHotel — the
      original compares the MilestoneId (not the type Id), so hotel cards still trigger ClickedMilestone (bug kept). */
  const onHandleClickedMilestone = () => {
    const milestoneId = inMilestoneSummary.MilestoneId ?? '';
    if (milestoneId === '') return;
    if (milestoneId === T.AccommodationHotel) return;
    onClickedMilestone?.(inMilestoneSummary);
  };
  /** OnClick_Button (:1030-1040): nothing for a host meal while setting up meals, else ClickedMilestone. The platform
      Button stops the click (OutSystemsReactWidgets.js Button.handleClick), so the card's OnClick does not follow. */
  const onClickButton = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (typeId === T.MealHost && isSetUpMeals) return;
    onClickedMilestone?.(inMilestoneSummary);
  };
  const viewGuests = (
    <div className="orbit-card-content-button-cont" data-container="">
      <button
        className="btn btn-orbit-card"
        data-button=""
        style={styleFromCssText(`color: ${shade7}; border: 1px solid ${shade7};`)}
        type="button"
        onClick={onClickButton}
      >
        View Guests
      </button>
    </div>
  );
  const time = (
    <Info className="orbit-card-content-info" icon={`${ICON} orbit-icon-date-time ${FA}`}>
      {text(getFormattedTime_FromDateTime(milestoneDateTime))}
    </Info>
  );

  let content: ReactNode[] = [];
  if (type.IsTransportMilestone === true) {
    const start = info.MilestoneStartDateTime ?? '';
    const end = info.MilestoneEndDateTime ?? '';
    const typeText = inMilestoneSummary.Type ?? '';
    content = [
      !isNull(start) && (
        <Info
          key="departure"
          className={`orbit-card-content-info${!isNull(end) ? ' margin-bottom-m' : ''}`}
          icon={`${ICON} ${type.IconTransportDeparture ?? ''}`}
        >
          <div className="orbit-card-content-info-text" data-container="">
            <span className="bold margin-bottom-base" data-expression="">
              {getFormattedDateTimeById(typeText, start)}
            </span>
            {text(info.DepartureLocation)}
          </div>
        </Info>
      ),
      !isNull(end) && (
        <Info key="arrival" className="orbit-card-content-info" icon={`${ICON} ${type.IconTransportArrival ?? ''}`}>
          <div className="orbit-card-content-info-text" data-container="">
            <span className="bold margin-bottom-base" data-expression="">
              {getFormattedDateTimeById(typeText, end)}
            </span>
            {text(info.ArrivalLocation)}
          </div>
        </Info>
      ),
    ];
  }
  if (typeId === T.MeetingGuest || typeId === T.MeetingHost || typeId === T.MealAtHall) {
    const seating = info.Seating ?? '';
    content.push(
      (info.Location ?? '') !== '' && (
        <Info
          key="location"
          className={`orbit-card-content-info${seating !== '' || !isNull(milestoneDateTime) ? ' margin-bottom-m' : ''}`}
          icon={`${ICON} orbit-icon-location ${FA}`}
        >
          {text(info.Location)}
        </Info>
      ),
      seating !== '' && (
        <Info
          key="seating"
          className={`orbit-card-content-info${!isNull(milestoneDateTime) ? ' margin-bottom-m' : ''}`}
          icon={`${ICON} orbit-icon-seat ${FA}`}
        >
          {text(seating)}
        </Info>
      ),
      !isNull(milestoneDateTime) && <Fragment key="time">{time}</Fragment>,
    );
  }
  if (typeId === T.MealGuest || typeId === T.MealHost || typeId === T.MealHelper) {
    content.push(
      (info.MilestoneHost ?? '') !== '' && (
        <Info
          key="host"
          className="orbit-card-content-info margin-bottom-m"
          icon={`${ICON} orbit-icon-host-guest ${FA}`}
        >
          {text(info.MilestoneHost)}
        </Info>
      ),
      (info.Location ?? '') !== '' && (
        <Info
          key="location"
          className={`orbit-card-content-info${!isNull(milestoneDateTime) ? ' margin-bottom-m' : ''}`}
          icon={`${ICON} orbit-icon-location ${FA}`}
        >
          {text(info.Location)}
        </Info>
      ),
      !isNull(milestoneDateTime) && (
        <Info
          key="time"
          className="orbit-card-content-info margin-bottom-m"
          icon={`${ICON} orbit-icon-date-time ${FA}`}
        >
          {text(getFormattedTime_FromDateTime(milestoneDateTime))}
        </Info>
      ),
      !isSetUpMeals && <Fragment key="button">{viewGuests}</Fragment>,
    );
  }
  if (typeId === T.AccommodationGuest || typeId === T.AccommodationHost || typeId === T.AccommodationHelper) {
    content.push(
      (info.MilestoneHost ?? '') !== '' && (
        <Info
          key="host"
          className="orbit-card-content-info margin-bottom-m"
          icon={`${ICON} orbit-icon-host-guest ${FA}`}
        >
          {text(info.MilestoneHost)}
        </Info>
      ),
      (info.Location ?? '') !== '' && (
        <Info
          key="location"
          className="orbit-card-content-info margin-bottom-m"
          icon={`${ICON} orbit-icon-location ${FA}`}
        >
          {text(info.Location)}
        </Info>
      ),
      <Fragment key="button">{viewGuests}</Fragment>,
    );
  }
  if (typeId === T.AccommodationHotel && (info.MilestoneHost ?? '') !== '') {
    content.push(
      <Info key="hotel" className="orbit-card-content-info" icon={`${ICON} orbit-icon-hotel ${FA}`}>
        {text(info.MilestoneHost)}
      </Info>,
    );
  }
  // The Admin* identifiers are undefined on TST (see OrbitMilestoneType), so this branch never renders there.
  const adminTypeIds: readonly (string | undefined)[] = [
    T.AdminMeeting,
    T.AdminMeal,
    T.AdminMealAtHall,
    T.AdminAccommodation,
    T.AdminTransportVehicle,
    T.AdminBreak,
  ];
  const isAdmin = adminTypeIds.some((admin) => typeId === admin);
  if (isAdmin) {
    const start = info.MilestoneStartDateTime ?? '';
    const end = info.MilestoneEndDateTime ?? '';
    content.push(
      (info.Description ?? '') !== '' && (
        <Info key="description" className="orbit-card-content-info" icon={`${ICON} orbit-icon-window ${FA}`}>
          {text(info.Description)}
        </Info>
      ),
      !isNull(milestoneDateTime) && (
        <Info key="date" className="orbit-card-content-info" icon={`${ICON} orbit-icon-date-time ${FA}`}>
          {text(getFormattedDateTime(milestoneDateTime, false, false, false, false, false, false))}
        </Info>
      ),
      // Style "orbit-card-content-info" + "margin-top-m" without a space, as compiled (:892-894).
      !isNull(start) && !isNull(end) && (
        <Info
          key="times"
          className={`orbit-card-content-info${!isNull(milestoneDateTime) ? 'margin-top-m' : ''}`}
          icon={`${ICON} orbit-icon-date-time ${FA}`}
        >
          {text(`${getFormattedTime_FromDateTime(start)} - ${getFormattedTime_FromDateTime(end)}`)}
        </Info>
      ),
    );
  }

  return (
    <OSBlock name="Orbit_Blocks.Card_Milestone" id={id}>
      <OrbitCard
        inMainColorVar={mainColorVar}
        inMilestoneTypeId={typeId}
        onOnClick={onHandleClickedMilestone}
        placeholderIcon={
          <div
            className="orbit-card-icon-cont"
            data-container=""
            style={styleFromCssText(
              `background-color: ${getCSSVarFromMainColor(mainColorVar, OrbitColorShade.Color2)};`,
            )}
          >
            <i
              className={`icon orbit-card-icon ${type.MainIcon ?? ''}`}
              data-icon=""
              style={styleFromCssText(`color: ${shade7};`)}
            />
          </div>
        }
        placeholderTitle={text(inMilestoneSummary.Title)}
        placeholderContent={content}
      />
    </OSBlock>
  );
}
