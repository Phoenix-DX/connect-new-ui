import type { HostSurveyVehicle } from '@/api/event';
import { HostSurveyPill } from '@/components/orbit/HostSurveyPill';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { LocalVehicleOwner, LocalVehicleType } from '@/platform/storage/localEntities';
import { getVehicleOwnerByJSON_Name, getVehicleTypeByJSON_Name } from './actions';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills
    The pills of a vehicle (HostSurvey_VehiclePills.mvc.js view :170-327): container "orbit-host-survey-pill-cont", then
    the owner (OwnerType not ""; icon orbit-icon-host-guest, label GetVehicleOwnerByJSON_Name), the vehicle type
    (VehicleType not ""; orbit-icon-transportation-vehicle, GetVehicleTypeByJSON_Name), the registration number (not "";
    orbit-icon-license-plate) and the seats (TotalSeats not null; orbit-icon-seat, LongIntegerToText). Pill ids b1…b4
    in that order. No controller logic. */
export function HostSurvey_VehiclePills({
  id,
  inIsDisabled = false,
  inVehicleOwners,
  inHostSurvey_Vehicle: vehicle,
  inVehicleTypes,
}: {
  id: string;
  /** In_IsDisabled (default False). */
  inIsDisabled?: boolean;
  inVehicleOwners: readonly LocalVehicleOwner[];
  inHostSurvey_Vehicle: HostSurveyVehicle;
  inVehicleTypes: readonly LocalVehicleType[];
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
    <OSBlock name="Orbit_Blocks.HostSurvey_VehiclePills" id={id}>
      <div className="orbit-host-survey-pill-cont" data-container="">
        {vehicle.OwnerType !== '' &&
          pill(1, 'orbit-icon-host-guest', getVehicleOwnerByJSON_Name(vehicle.OwnerType, inVehicleOwners).Label)}
        {vehicle.VehicleType !== '' &&
          pill(
            2,
            'orbit-icon-transportation-vehicle',
            getVehicleTypeByJSON_Name(vehicle.VehicleType, inVehicleTypes).Label,
          )}
        {vehicle.RegistrationNumber !== '' && pill(3, 'orbit-icon-license-plate', vehicle.RegistrationNumber)}
        {vehicle.TotalSeats !== '0' && pill(4, 'orbit-icon-seat', vehicle.TotalSeats)}
      </div>
    </OSBlock>
  );
}
