// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OrbitMilestoneType } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { TransportMilestoneType, TravelInfo } from '@/screens/TransportDetail/types';
import { transportDetails_ShowGeneralInformation } from './actions';

/* TransportDetail_TravelInfo (TI = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo
   .mvc.js: model :1-94, view :150-734; no client action). No capture: markup from the compiled view; a Container is a
   `div[data-container]` with its Style Classes, or the extended property `class` that replaces them, an Expression a
   `span[data-expression]`, an Icon `i[data-icon]` with "<style> fa fa-<icon> fa-1x" (OutSystemsReactWidgets.js). */

export interface TransportDetail_TravelInfoProps {
  /** OutSystems instance id of the block. */
  id: string;
  In_TravelIdentifier: string;
  In_TravelInfo: TravelInfo;
  In_MilestoneType: TransportMilestoneType;
}

/** One labelled value of the travel info (bold label, then the value). */
function LabelledValue({ label, value }: { label: string; value: string }) {
  return (
    <>
      <div className="bold margin-bottom-s" data-container="">
        <span data-expression="">{label}</span>
      </div>
      <div data-container="">
        <span data-expression="">{value}</span>
      </div>
    </>
  );
}

/** General travel info (TI :163-558) when TransportDetails_ShowGeneralInformation: licence-plate icon, the travel
    identifier under TravelInfoHeader (no bottom margin for a vehicle); for a flight the codeshare flight and name; for
    every type but a vehicle the booking reference (no bottom margin for a train); for a flight, train or boat the fare
    type, onboard meal and class. Then, for a vehicle (TI :559-732), the vehicle name and the driver name. */
export function TransportDetail_TravelInfo(props: TransportDetail_TravelInfoProps) {
  const { id, In_TravelIdentifier: identifier, In_TravelInfo: info, In_MilestoneType: type } = props;
  const T = OrbitMilestoneType;
  const isType = (typeId: string) => type.IsTransportMilestone && type.Id === typeId;
  const isVehicle = isType(T.Vehicle);
  const isFlight = isType(T.Flight);
  const isFlightTrainOrBoat =
    type.IsTransportMilestone && (type.Id === T.Flight || type.Id === T.Train || type.Id === T.Boat);

  return (
    <OSBlock name="Orbit_Blocks.TransportDetail_TravelInfo" id={id}>
      {transportDetails_ShowGeneralInformation(identifier, info, type) && (
        <div className="transport-detail-item" data-container="">
          <div className="orbit-transport-detail-icon" data-container="">
            <i className="icon transport-detail-icon orbit-icon-license-plate fa fa-flag fa-1x" data-icon="" />
          </div>
          <div className="transport-detail-travel-info" data-container="">
            {identifier !== '' && (
              <div className={`transport-detail-item-info${isVehicle ? '' : ' margin-bottom-m'}`} data-container="">
                <LabelledValue label={type.TravelInfoHeader} value={identifier} />
              </div>
            )}
            {isFlight && (info.CodeShareFlight !== '' || info.CodeShareName !== '') && (
              <div className="margin-bottom-m transport-detail-item-info" data-container="">
                <div className="bold margin-bottom-s" data-container="">
                  <span data-expression="">Codeshare Flight</span>
                </div>
                <div className="display-inline-flex flex-direction-row" data-container="">
                  {info.CodeShareFlight !== '' && (
                    <div data-container="">
                      <span data-expression="">{info.CodeShareFlight}</span>
                    </div>
                  )}
                  {info.CodeShareName !== '' && (
                    <div className={info.CodeShareFlight !== '' ? 'margin-left-xxl' : ''} data-container="">
                      <span data-expression="">{info.CodeShareName}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
            {!isVehicle && (
              <div className="transport-detail-item-info margin-bottom-m" data-container="">
                {info.BookingReference !== '' && (
                  <div className="bold margin-bottom-s" data-container="">
                    <span data-expression="">Booking Reference</span>
                  </div>
                )}
                {info.BookingReference !== '' && (
                  <div className={type.Id === T.Train ? '' : 'margin-bottom-s'} data-container="">
                    <span data-expression="">{info.BookingReference}</span>
                  </div>
                )}
              </div>
            )}
            {isFlightTrainOrBoat && (
              <>
                {info.FareType !== '' && (
                  <div
                    className={`transport-detail-item-info${info.OnboardMeal !== '' || info.Class !== '' ? ' margin-bottom-m' : ''}`}
                    data-container=""
                  >
                    <LabelledValue label="Fare Type" value={info.FareType} />
                  </div>
                )}
                {info.OnboardMeal !== '' && (
                  <div
                    className={`transport-detail-item-info${info.Class !== '' ? ' margin-bottom-m' : ''}`}
                    data-container=""
                  >
                    <LabelledValue label="Onboard Meal Type" value={info.OnboardMeal} />
                  </div>
                )}
                {info.Class !== '' && (
                  <div className="transport-detail-item-info" data-container="">
                    <LabelledValue label="Class" value={info.Class} />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
      {isVehicle && (
        <>
          {info.VehicleName !== '' && (
            <div className="transport-detail-item" data-container="">
              <div className="orbit-transport-detail-icon" data-container="">
                <i className="icon transport-detail-icon orbit-icon-vehicle-name fa fa-flag fa-1x" data-icon="" />
              </div>
              <div className="transport-detail-travel-info" data-container="">
                <div className="transport-detail-item-info" data-container="">
                  <LabelledValue label="Vehicle Name" value={info.VehicleName} />
                </div>
              </div>
            </div>
          )}
          {info.DriverName !== '' && (
            <div className="transport-detail-item" data-container="">
              <div className="orbit-transport-detail-icon" data-container="">
                <i className="icon transport-detail-icon orbit-icon-vehicle-seat fa fa-flag fa-1x" data-icon="" />
              </div>
              <div className="transport-detail-travel-info" data-container="">
                <div className="transport-detail-item-info" data-container="">
                  <LabelledValue label="Driver Name" value={info.DriverName} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </OSBlock>
  );
}
