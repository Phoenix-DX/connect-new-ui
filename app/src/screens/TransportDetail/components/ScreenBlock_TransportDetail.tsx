// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_TransportDetail
import { useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Layout_Orbit } from '../../../shared/Connect2_LegacyShared/Layout_Orbit';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { ContactHelpdesk_Footer } from '../../../shared/Connect2_OrbitMobile_MUI/ContactHelpdesk_Footer';
import { Skeleton_Loading } from '../../../shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import { OrbitMilestoneType } from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getTransportDetail } from '../api';
import type { TransportDetails, TransportDetailVariablesWire } from '../types';
import { getContactHelpdeskSubject_Transport, getSkeletonLoadingIdFromMilestoneTypeId } from './actions';
import { TransportDetail } from './TransportDetail';

/* ScreenBlock_TransportDetail (SB = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.
   ScreenBlock_TransportDetail.mvc.js: model :1-145, view :146-388, controller :389-689). No capture. */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (SB :248). */
const MENU_ACTION_AUTO = 'Auto';

const EMPTY_LOCATION = { Location: '', Terminal: '', DateTime: '' };

/** GetTransportDetails_ScreenRec default (SB :35-37). */
const EMPTY_TRANSPORT_DETAILS: TransportDetails = {
  MilestoneType: {
    Id: '',
    Name: '',
    MainIcon: '',
    IsTransportMilestone: false,
    IconTransportDeparture: '',
    IconTransportArrival: '',
    TransportHeaderClass: '',
    TravelInfoHeader: '',
  },
  TransportDetail: {
    MilestoneId: '',
    Title: '',
    Type: '',
    TransportType: '',
    Operator: '',
    TravelIdentifier: '',
    DepartureLocation: EMPTY_LOCATION,
    ArrivalLocation: EMPTY_LOCATION,
    Stops: [],
    Seats: [],
    BaggageAllowance: { CarryOnBaggage: '', CheckedBaggage: '' },
    TripDuration: { TripDurationHours: '0', TripDurationMinutes: '0' },
    TravelInfo: {
      BookingReference: '',
      Class: '',
      CodeShareFlight: '',
      CodeShareName: '',
      DriverName: '',
      FareType: '',
      OnboardMeal: '',
      VehicleName: '',
    },
    Notes: '',
  },
};

/** Block variables (SB model :25-72) and the data action state the view reads. */
interface Model {
  title: string;
  transportDetail: TransportDetails;
  isFetchingData: boolean;
  /** Get_TransportDetail.IsDataFetched. */
  isDataFetched: boolean;
}

const INITIAL_MODEL: Model = {
  title: '',
  transportDetail: EMPTY_TRANSPORT_DETAILS,
  isFetchingData: false,
  isDataFetched: false,
};

export interface ScreenBlock_TransportDetailProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  In_MilestoneId: string;
  In_OrbitMilestoneTypeId: string;
  In_PreloadMilestoneName: string;
  In_HeaderClass: string;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
}

/** Transport milestone detail (SB view :214-382): Layout_Orbit with CustomClass "orbit-detail orbit-header-center
    orbit-transport-detail " + In_HeaderClass, the Auto MenuIcon, the Title expression; Content: the skeleton of the
    milestone type while fetching, then the TransportDetail block once fetched; BottomBar: ContactHelpdesk_Footer
    (always). OnInitialize (SB :439-478): unless restored from the view cache, Title = In_PreloadMilestoneName. OnReady
    (SB :488-522, no cache check): IsFetchingData True, Refresh Get_TransportDetail → OnAfterFetch (SB :568-603):
    TransportDetail = Response, Title = Response.TransportDetail.Title when it differs, IsFetchingData False. */
export function ScreenBlock_TransportDetail(props: ScreenBlock_TransportDetailProps) {
  const { id, In_MilestoneId, In_OrbitMilestoneTypeId, In_PreloadMilestoneName, In_HeaderClass } = props;
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () =>
      restored && saved
        ? saved
        : // OnInitialize (SB :463-468): Title = In_PreloadMilestoneName
          { ...INITIAL_MODEL, title: In_PreloadMilestoneName },
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** The block variables the data action sends (screenData.variables, see TransportDetailVariablesWire). */
  const variables = (): TransportDetailVariablesWire => {
    const s = m();
    return {
      Title: s.title,
      IsFetchingData: s.isFetchingData,
      In_MilestoneId,
      In_OrbitMilestoneTypeId,
      In_PreloadMilestoneName,
      In_HeaderClass,
    };
  };

  /* OnReady (SB :488-522), before paint as OnReady runs when the block mounts; also after a restore from the view
     cache (no FromCache check in OnReady). */
  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    set({ isFetchingData: true });
    void (async () => {
      try {
        const transportDetail = await getTransportDetail(variables());
        // OnAfterFetch_GetTransportDetail (SB :568-603)
        set({ isDataFetched: true, transportDetail });
        if (m().title !== transportDetail.TransportDetail.Title) set({ title: transportDetail.TransportDetail.Title });
        set({ isFetchingData: false });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once per mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnHandle_ContactHelpdesk (SB :523-558): TransportNumber = TravelIdentifier for a vehicle, else the booking
      reference; NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Transport(In_OrbitMilestoneTypeId,
      In_PreloadMilestoneName, DepartureLocation.DateTime, TransportNumber), In_PreloadMilestoneName). */
  const onHandleContactHelpdesk = () => {
    const t = m().transportDetail.TransportDetail;
    const transportNumber =
      In_OrbitMilestoneTypeId === OrbitMilestoneType.Vehicle ? t.TravelIdentifier : t.TravelInfo.BookingReference;
    props.onNavigateToContactHelpdesk(
      getContactHelpdeskSubject_Transport(
        In_OrbitMilestoneTypeId,
        In_PreloadMilestoneName,
        t.DepartureLocation.DateTime,
        transportNumber,
      ),
      In_PreloadMilestoneName,
    );
  };

  const s = state;
  const prefix = id.replace('$', '');

  const content: ReactNode = s.isFetchingData ? (
    <Skeleton_Loading
      id={`${prefix}-$b4`}
      inSkeletonLoadingId={getSkeletonLoadingIdFromMilestoneTypeId(In_OrbitMilestoneTypeId)}
    />
  ) : s.isDataFetched ? (
    <TransportDetail id={`${prefix}-$b3`} TransportDetail={s.transportDetail} />
  ) : null;

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_TransportDetail" id={id}>
      <Layout_Orbit
        id={`${prefix}-$b1`}
        customClass={`orbit-detail orbit-header-center orbit-transport-detail ${In_HeaderClass}`}
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={<span data-expression="">{s.title}</span>}
        content={content}
        bottomBar={<ContactHelpdesk_Footer id={`${prefix}-$b5`} onClick={onHandleContactHelpdesk} />}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
    </OSBlock>
  );
}
