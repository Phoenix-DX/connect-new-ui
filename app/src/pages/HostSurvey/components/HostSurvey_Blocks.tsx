import type { ReactNode } from 'react';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { HostSurvey_PillItem } from '@/shared/Connect2_OrbitMobile_MUI/HostSurvey_PillItem';
import type { HostSurveyMeal, HostSurveyRoom } from '@/pages/HostSurvey/types';
import { getFormattedDate_Survey, getGenderPreferenceByJSON_Name, getHouseFloorByJSON_Name } from './actions';
import type { LocalLabelledRecord } from '@/platform/storage/localEntities';

/* The screen-specific Orbit blocks of HostSurvey that the captured summary renders. Sources (P = analysis/sources/
   pretty/Connect2_OrbitMobile_MUI.<block>.mvc.js): Orbit_Blocks.HostSurvey_TopMessage, HostSurvey_Item,
   HostSurvey_AccommodationPills, HostSurvey_MealPills, Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New. */

/** Orbit_Blocks.HostSurvey_TopMessage (P view :153-205): container "padding-m margin-top-s" (+ " background-neutral-0"
    with a title); the bold title only when In_Title is not "" (Container Visible, animated: not rendered when
    hidden); the message in "font-size-s margin-top-base". */
export function HostSurvey_TopMessage({ id, inTitle, inMessage }: { id: string; inTitle: string; inMessage: string }) {
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_TopMessage" id={id}>
      <div className={`padding-m margin-top-s${inTitle !== '' ? ' background-neutral-0' : ''}`} data-container="">
        {inTitle !== '' && (
          <div className="bold" data-container="">
            <span data-expression="">{inTitle}</span>
          </div>
        )}
        <div className="font-size-s margin-top-base" data-container="">
          <span data-expression="">{inMessage}</span>
        </div>
      </div>
    </OSBlock>
  );
}

/** Orbit_Blocks.HostSurvey_Item (P view :181-356): title row (bold title, Placeholder_Status when In_HasPlaceholder),
    the Edit / Delete actions (Containers Visible = In_HasEdit / In_HasDelete; not rendered when hidden), then
    Placeholder_Content. The summary passes In_HasEdit and In_HasDelete False, so their events (Edit/Delete, only used
    by the data steps) are not wired here. */
export function HostSurvey_Item({
  id,
  inTitle,
  inHasPlaceholder,
  placeholderStatus,
  placeholderContent,
}: {
  id: string;
  inTitle: string;
  inHasPlaceholder: boolean;
  placeholderStatus?: ReactNode;
  placeholderContent?: ReactNode;
}) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_Item" id={id}>
      <div className="orbit-host-survey-item" data-container="">
        <div
          className="full-width display-flex flex-direction-row align-items-flex-start justify-content-space-between margin-bottom-m"
          data-container=""
        >
          <div
            className="display-flex flex-direction-row align-items-center justify-content-flex-start"
            data-container=""
          >
            <div className="bold" data-container="">
              <span data-expression="">{inTitle}</span>
            </div>
            {inHasPlaceholder && (
              <div className="margin-left-m" id={`${scope}-Placeholder_Status`}>
                {placeholderStatus}
              </div>
            )}
          </div>
          <div
            className="display-flex flex-direction-row align-items-center justify-content-flex-end color-orbit-primary-7 font-size-s bold"
            data-container=""
          />
        </div>
        <div className="orbit-host-survey-item-content" id={`${scope}-Placeholder_Content`}>
          {placeholderContent}
        </div>
      </div>
    </OSBlock>
  );
}

/** Orbit_Blocks.HostSurvey_AccommodationPills (P view :173-450): the room name, then the pills: gender preference
    (GenderPreference not ""; icon couple for "COUPLE", else host-guest; label GetGenderPreferenceByJSON_Name), beds
    (NumberOfBeds not null; LongIntegerToText), floor (Floor not ""; label GetHouseFloorByJSON_Name), Ensuite, Toilet,
    Shower, Basin. Pill ids b1…b7 in that order. */
export function HostSurvey_AccommodationPills({
  id,
  inIsDisabled,
  inHostSurvey_Room: room,
  inHouseFloors,
  inGenderPreferences,
}: {
  id: string;
  inIsDisabled: boolean;
  inHostSurvey_Room: HostSurveyRoom;
  inHouseFloors: readonly LocalLabelledRecord[];
  inGenderPreferences: readonly LocalLabelledRecord[];
}) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  const pill = (n: number, iconClass: string, text: string) => (
    <HostSurvey_PillItem
      id={`${scope}-$b${String(n)}`}
      inIsDisabled={inIsDisabled}
      inIconClass={iconClass}
      inPillText={text}
    />
  );
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_AccommodationPills" id={id}>
      <div className="margin-bottom-base" data-container="">
        <span data-expression="">{room.Name}</span>
      </div>
      <div className="orbit-host-survey-pill-cont" data-container="">
        {room.GenderPreference !== '' &&
          pill(
            1,
            room.GenderPreference === 'COUPLE' ? 'orbit-icon-couple' : 'orbit-icon-host-guest',
            getGenderPreferenceByJSON_Name(room.GenderPreference, inGenderPreferences).Label,
          )}
        {room.NumberOfBeds !== '0' && pill(2, 'orbit-icon-accommodation', room.NumberOfBeds)}
        {room.Floor !== '' && pill(3, 'orbit-icon-home', getHouseFloorByJSON_Name(room.Floor, inHouseFloors).Label)}
        {room.HasEnsuite && pill(4, 'orbit-icon-amenity-ensuite', 'Ensuite')}
        {room.HasToilet && pill(5, 'orbit-icon-amenity-toilet', 'Toilet')}
        {room.HasShower && pill(6, 'orbit-icon-amenity-shower', 'Shower')}
        {room.HasBasin && pill(7, 'orbit-icon-amenity-basin', 'Basin')}
      </div>
    </OSBlock>
  );
}

/** Orbit_Blocks.HostSurvey_MealPills (P view :158-228): the day (EventDate not null; GetFormattedDate_Survey) and the
    capacity "CP <comfortable>, SCP <stretch>" when both are set. */
export function HostSurvey_MealPills({
  id,
  inIsDisabled,
  inHostSurvey_Meal: meal,
}: {
  id: string;
  inIsDisabled: boolean;
  inHostSurvey_Meal: HostSurveyMeal;
}) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_MealPills" id={id}>
      <div className="orbit-host-survey-pill-cont" data-container="">
        {meal.EventDate !== '' && (
          <HostSurvey_PillItem
            id={`${scope}-$b1`}
            inIsDisabled={inIsDisabled}
            inIconClass="orbit-icon-meeting"
            inPillText={getFormattedDate_Survey(meal.EventDate)}
          />
        )}
        {meal.ComfortableCapacity !== '' && meal.StretchCapacity !== '' && (
          <HostSurvey_PillItem
            id={`${scope}-$b2`}
            inIsDisabled={inIsDisabled}
            inIconClass="orbit-icon-capacity"
            inPillText={`CP ${meal.ComfortableCapacity}, SCP ${meal.StretchCapacity}`}
          />
        )}
      </div>
    </OSBlock>
  );
}

/** Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New (P view :181-…): an OSWidgets.Popup "popup-dialog
    orbit-popup-new" shown by In_ShowPopUp. Every popup of ScreenBlock_HostSurvey opens from the data steps (Cancel,
    Delete, NoInfo, ReturnNavigation, ReturnBack), which no capture shows (HostSurvey Q2): closed, the block renders its
    empty wrapper as captured (dom/default.html:692-701); open, a NotCaptured marker. */
export function Orbit_ConfirmationPopUp_New({ id, inShowPopUp }: { id: string; inShowPopUp: boolean }) {
  return (
    <OSBlock name="Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New" id={id}>
      {inShowPopUp && <NotCaptured name={`Orbit_ConfirmationPopUp_New ${id} (host survey data steps, Q2)`} />}
    </OSBlock>
  );
}
