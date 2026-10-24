import type { HostSurveyRoom } from '@/api/event';
import { HostSurveyPill } from '@/components/orbit/HostSurveyPill';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { LocalLabelledRecord } from '@/platform/storage/localEntities';
import { getGenderPreferenceByJSON_Name, getHouseFloorByJSON_Name } from './actions';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills
    The pills of a room: the room name, then the pills: gender preference (GenderPreference not ""; icon couple for
    "COUPLE", else host-guest; label GetGenderPreferenceByJSON_Name), beds (NumberOfBeds not null; LongIntegerToText),
    floor (Floor not ""; label GetHouseFloorByJSON_Name), Ensuite, Toilet, Shower, Basin. Pill ids b1…b7 in that
    order. */
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
    <HostSurveyPill
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
