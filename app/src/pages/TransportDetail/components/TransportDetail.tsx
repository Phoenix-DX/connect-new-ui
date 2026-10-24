// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail
import { useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { getFormattedDateTimeById } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitMilestoneType } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { SeatItem, StopItem, TransportDetails, TransportLocation } from '@/pages/TransportDetail/types';
import { getFormattedTime_FromTime, getFormattedTimeDifference } from './actions';
import { TransportDetail_TravelInfo } from './TransportDetail_TravelInfo';

/* TransportDetail (TD = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc.js: model :1-100,
   view :130-1432, controller :1433-1546). No capture: markup from the compiled view (Container = div[data-container]
   with its Style Classes or the extended `class` that replaces them; Expression = span[data-expression]; Icon =
   i[data-icon] "<style> fa fa-<icon> fa-1x", or only the extended `class`; OutSystemsReactWidgets.js). Both Lists are
   virtualized with rows stacked vertically (no `disable-virtualization`), hence `position: relative`. */

export interface TransportDetailProps {
  /** OutSystems instance id of the block. */
  id: string;
  TransportDetail: TransportDetails;
}

/** An icon of the platform Icon widget (icon "flag", size 1x) with its Style Classes. */
const FlagIcon = ({ style }: { style: string }) => <i className={`${style} fa fa-flag fa-1x`} data-icon="" />;

/** A detail row (TD "transport-detail-item"): the icon column, then the info column with its bold label. */
function DetailItem({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="transport-detail-item" data-container="">
      <div className="orbit-transport-detail-icon" data-container="">
        {icon}
      </div>
      <div className="transport-detail-item-info" data-container="">
        <div className="bold margin-bottom-s" data-container="">
          <span data-expression="">{label}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

/** A value container (optional class) with its expression. */
const Value = ({ className, text }: { className?: string; text: string }) => (
  <div className={className} data-container="">
    <span data-expression="">{text}</span>
  </div>
);

/** Transport details of a milestone (TD view :143-1426): operator, type, departure, arrival, baggage allowance, the
    travel info block, trip duration (a vehicle: the departure-arrival difference; other types: TripDuration), the
    stops, the seats (when one has a seat number) and the notes. OnReady (TD :1451-1495): HasSeatInfo = True at the
    first seat with a seat number. */
export function TransportDetail({ id, TransportDetail: input }: TransportDetailProps) {
  const { MilestoneType: type, TransportDetail: t } = input;
  const T = OrbitMilestoneType;
  const prefix = id.replace('$', '');

  /* OnReady (TD :1451-1495): HasSeatInfo (initially False) = True at the first seat with a number. OnReady runs once,
     when the block mounts, before paint (the screen block mounts it after the fetch): the mount value. */
  const [hasSeatInfo] = useState(() => t.Seats.some((s) => s.SeatNumber !== ''));

  const formatted = (dateTime: string) => getFormattedDateTimeById(type.Id, dateTime);
  const hasLocation = (l: TransportLocation) => l.Location !== '' || l.Terminal !== '' || l.DateTime !== '';
  const isVehicle = type.IsTransportMilestone && type.Id === T.Vehicle;
  const isFlight = type.IsTransportMilestone && type.Id === T.Flight;
  const dep = t.DepartureLocation;
  const arr = t.ArrivalLocation;
  const baggage = t.BaggageAllowance;
  const hours = t.TripDuration.TripDurationHours;
  const minutes = t.TripDuration.TripDurationMinutes;

  /** Departure / arrival row (TD :306-443, :443-580): icon of the milestone type, location, terminal and date. */
  const locationItem = (l: TransportLocation, label: string, iconClass: string) =>
    hasLocation(l) && (
      <DetailItem icon={<i className={`icon ${iconClass}`} data-icon="" />} label={label}>
        {l.Location !== '' && <Value className="margin-bottom-s" text={l.Location} />}
        {l.Terminal !== '' && <Value className="margin-bottom-s" text={l.Terminal} />}
        {l.DateTime !== '' && <Value text={formatted(l.DateTime)} />}
      </DetailItem>
    );

  /** A stop (TD :910-1270): title, stopover arrival and departure terminals, stop duration. The class of the arrival
      part reads the transport's own departure terminal and date (TD :1019-1025), as compiled. */
  const stopRow = (stop: StopItem) => (
    <div className="transport-detail-list-item" data-container="">
      <DetailItem icon={<FlagIcon style="icon orbit-icon-stops" />} label="Stops">
        <div data-container="">
          {stop.Title !== '' && <Value className={isFlight ? 'margin-bottom-m' : ''} text={stop.Title} />}
          {(stop.ArrivalLocation.Terminal !== '' || stop.ArrivalLocation.DateTime !== '') && (
            <div className={dep.Terminal !== '' || dep.DateTime !== '' ? 'margin-bottom-m' : ''} data-container="">
              <div className="bold margin-bottom-s" data-container="">
                <span data-expression="">Stopover Arrival Terminal</span>
              </div>
              {stop.ArrivalLocation.Terminal !== '' && (
                <Value className="margin-bottom-s" text={stop.ArrivalLocation.Terminal} />
              )}
              {stop.ArrivalLocation.DateTime !== '' && <Value text={formatted(stop.ArrivalLocation.DateTime)} />}
            </div>
          )}
          {(stop.DepartureLocation.Terminal !== '' || stop.DepartureLocation.DateTime !== '') && (
            <div data-container="">
              <div className="bold margin-bottom-s" data-container="">
                <span data-expression="">Stopover Departure Terminal</span>
              </div>
              {stop.DepartureLocation.Terminal !== '' && (
                <Value className="margin-bottom-s" text={stop.DepartureLocation.Terminal} />
              )}
              {stop.DepartureLocation.DateTime !== '' && <Value text={formatted(stop.DepartureLocation.DateTime)} />}
            </div>
          )}
        </div>
      </DetailItem>
      {/* Visible when TimeToText(StopDurationTime) <> "" (TD :1192): TimeToText always gives "HH:mm:ss". The value
          shows only with a stop title (TD :1249), as compiled. */}
      <DetailItem icon={<FlagIcon style="icon orbit-icon-timelapse" />} label="Stop Duration">
        {stop.Title !== '' && <Value text={getFormattedTime_FromTime(stop.StopDurationTime)} />}
      </DetailItem>
    </div>
  );

  /** A seat (TD :1349-1378): "<departure> → <arrival>: " when the transport has stops, then the seat number. */
  const seatRow = (seat: SeatItem) =>
    seat.SeatNumber !== '' && (
      <Value text={`${t.Stops.length === 0 ? '' : `${seat.Departure} → ${seat.Arrival}: `}${seat.SeatNumber}`} />
    );

  return (
    <OSBlock name="Orbit_Blocks.TransportDetail" id={id}>
      <div className="transport-detail-cont" data-container="">
        {t.Operator !== '' && (
          <DetailItem icon={<FlagIcon style="icon orbit-icon-operator" />} label="Operator">
            <Value text={t.Operator} />
          </DetailItem>
        )}
        {t.TransportType !== '' && (
          <DetailItem icon={<i className={`icon ${type.MainIcon}`} data-icon="" />} label="Type">
            <Value text={t.TransportType} />
          </DetailItem>
        )}
        {locationItem(dep, 'Departure Location', type.IconTransportDeparture)}
        {locationItem(arr, 'Arrival Location', type.IconTransportArrival)}
        {baggage.CarryOnBaggage !== '' && baggage.CheckedBaggage !== '' && (
          <DetailItem icon={<FlagIcon style="icon orbit-icon-baggage" />} label="Baggage Allowance">
            <Value
              className={baggage.CheckedBaggage !== '' ? 'margin-bottom-s' : ''}
              text={`Carry-on: ${baggage.CarryOnBaggage}`}
            />
            <Value text={`Checked: ${baggage.CheckedBaggage}`} />
          </DetailItem>
        )}
        <TransportDetail_TravelInfo
          id={`${prefix}-$b1`}
          In_TravelIdentifier={t.TravelIdentifier}
          In_MilestoneType={type}
          In_TravelInfo={t.TravelInfo}
        />
        {/* If_IsVehicle (TD :704-884). */}
        {isVehicle
          ? (dep.DateTime !== '' || arr.DateTime !== '') && (
              <DetailItem icon={<FlagIcon style="icon orbit-icon-timelapse" />} label="Trip Duration">
                <Value text={getFormattedTimeDifference(dep.DateTime, arr.DateTime)} />
              </DetailItem>
            )
          : (hours !== '0' || minutes !== '0') && (
              <DetailItem icon={<FlagIcon style="icon orbit-icon-timelapse" />} label="Trip Duration">
                <Value text={`${hours}h ${minutes === '0' ? '00' : minutes}m`} />
              </DetailItem>
            )}
        {t.Stops.length > 0 && (
          <div data-container="">
            <OSList
              className="list list-group transport-detail-list"
              animateItems
              positionRelative
              source={t.Stops}
              keyOf={(s: StopItem, i) => `${s.Title}-${String(i)}`}
            >
              {(stop) => stopRow(stop)}
            </OSList>
          </div>
        )}
        {hasSeatInfo && t.Seats.length > 0 && (
          <DetailItem icon={<FlagIcon style="icon orbit-icon-flight-seat" />} label="Seats">
            <OSList
              className="list list-group transport-detail-list"
              animateItems
              positionRelative
              source={t.Seats}
              keyOf={(s: SeatItem, i) => `${s.Departure}-${s.Arrival}-${String(i)}`}
            >
              {(seat) => seatRow(seat)}
            </OSList>
          </DetailItem>
        )}
        {t.Notes !== '' && (
          <div data-container="">
            <div className="bold margin-bottom-s color-orbit-primary-7" data-container="">
              <span data-expression="">Notes</span>
            </div>
            <Value text={t.Notes} />
          </div>
        )}
      </div>
    </OSBlock>
  );
}
