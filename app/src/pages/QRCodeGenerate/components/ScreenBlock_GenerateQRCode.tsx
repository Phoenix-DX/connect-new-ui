// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode
import { useEffect, useLayoutEffect, useMemo, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { ContactHelpdeskFooter } from '@/components/orbit/ContactHelpdeskFooter';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import {
  DirectoryAPIFilter,
  ImageSigningSize,
  OrbitSkeletonLoading,
} from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getCacheableSignedImageURL, getEventQRCode } from '@/pages/QRCodeGenerate/api';
import type { EventQRCodeData, EventQRCodeVariablesWire, QRCodeSeatItem } from '@/pages/QRCodeGenerate/types';
import { getContactHelpdeskSubject_Event } from './actions';

/* ScreenBlock_GenerateQRCode (SB = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.
   ScreenBlock_GenerateQRCode.mvc.js: model :1-179, view :180-612, controller :613-905). No capture. The QR code is
   not drawn in the browser: the server sends it as a PNG (Response.QRCodeAsBinary) and an Image widget of type Binary
   shows it (QRCodeGenerate Q1). */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (SB :281). */
const MENU_ACTION_AUTO = 'Auto';
/** ImageCache.TTL of the platform Image widget (OutSystemsReactWidgets.js Image: an object URL is revoked 120 s after
    its last user is gone). */
const IMAGE_CACHE_TTL_MS = 120_000;

const NO_QR_CODE = "Unfortunately the QR Code couldn't be generated. Please try again later.";

const EMPTY_QR_CODE_DATA: EventQRCodeData = {
  GetEventQRCodeResponse: { GuestRole: '', QrCodeImage: '', Seats: [], Tag: '' },
  QRCodeAsBinary: '',
};

/** Block variables (SB model :25-90) and the data action state the view reads. */
interface Model {
  userName: string;
  userLocation: string;
  userSignedURL: string;
  isFetchingData: boolean;
  qrCodeData: EventQRCodeData;
  /** Get_EventQRCode.IsDataFetched and Response.QRCodeAsBinary (SB :315). */
  isDataFetched: boolean;
  responseQRCodeAsBinary: string;
}

const INITIAL_MODEL: Model = {
  userName: '',
  userLocation: '',
  userSignedURL: '',
  isFetchingData: false,
  qrCodeData: EMPTY_QR_CODE_DATA,
  isDataFetched: false,
  responseQRCodeAsBinary: '',
};

/** The object URL the platform Image widget gives a Binary image (ImageCache.requestURL: URL.createObjectURL of the
    BinaryData's Blob), released after the cache TTL ("" for NullBinary()). */
function useBinaryImageURL(base64: string): string {
  const url = useMemo(() => {
    if (base64 === '') return '';
    const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    return URL.createObjectURL(new Blob([bytes]));
  }, [base64]);
  useEffect(
    () => () => {
      if (url === '') return;
      window.setTimeout(() => {
        URL.revokeObjectURL(url);
      }, IMAGE_CACHE_TTL_MS);
    },
    [url],
  );
  return url;
}

export interface ScreenBlock_GenerateQRCodeProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  In_MemberId: string;
  In_EventId: string;
  In_EventName: string;
  In_EventStartDate: string;
  In_EventEndDate: string;
  In_EventLocation: string;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
}

/** Event pass with its QR code (SB view :248-606): Layout_Orbit "orbit-detail orbit-header-center", Auto MenuIcon,
    title In_EventName. Content: the MemberQRCode skeleton while fetching; fetched with a QR image → the member card
    (photo, name, location, guest role, "Row:" + the seat allocations joined by " & ", "GMP Tag: " + Tag) and "Check into
    Event" above the QR image; otherwise NoInformation. BottomBar: ContactHelpdesk_Footer when not fetching. OnReady
    (SB :663-708): unless restored from the view cache, RefreshData (SB :749-812): IsFetchingData True; UserName and
    UserLocation from AppManager_GetCachedUserInfo; UserSignedURL = GetCacheableSignedImageURL(MemberId, Member,
    Medium); Refresh Get_EventQRCode → OnAfterFetch (SB :813-836): QRCodeData = Response; IsFetchingData False. */
export function ScreenBlock_GenerateQRCode(props: ScreenBlock_GenerateQRCodeProps) {
  const { id, In_MemberId, In_EventId, In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation } = props;
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : INITIAL_MODEL),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** The block variables the data action sends (screenData.variables, see EventQRCodeVariablesWire). */
  const variables = (): EventQRCodeVariablesWire => {
    const s = m();
    return {
      UserName: s.userName,
      UserLocation: s.userLocation,
      UserSignedURL: s.userSignedURL,
      IsFetchingData: s.isFetchingData,
      In_MemberId,
      In_EventId,
      In_EventName,
      In_EventStartDate,
      In_EventEndDate,
      In_EventLocation,
    };
  };

  /* OnReady (SB :663-708), before paint as OnReady runs when the block mounts. */
  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    // RefreshData (SB :749-812)
    set({ isFetchingData: true });
    void (async () => {
      try {
        const user = appManager_GetCachedUserInfo();
        set({
          userName: `${user.FirstName} ${user.LastName}`,
          userLocation: user.Locality + (user.Locality !== '' ? `, ${user.Country}` : user.Country),
        });
        // GetCacheableSignedImageURL(IntegerToLongInteger(TextToInteger(MemberId)), Member, Medium) (SB :783)
        const memberId = String(Number.parseInt(user.MemberId, 10) || 0);
        set({
          userSignedURL: await getCacheableSignedImageURL(memberId, DirectoryAPIFilter.Member, ImageSigningSize.Medium),
        });
        const qrCodeData = await getEventQRCode(variables());
        // OnAfterFetch_Get_EventQRCode (SB :813-836)
        set({ isDataFetched: true, responseQRCodeAsBinary: qrCodeData.QRCodeAsBinary, qrCodeData });
        set({ isFetchingData: false });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnHandle_ContactHelpdesk (SB :718-748): NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Event(In_EventName,
      In_EventStartDate, In_EventEndDate, In_EventLocation), In_EventName). */
  const onHandleContactHelpdesk = () => {
    props.onNavigateToContactHelpdesk(
      getContactHelpdeskSubject_Event(In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation),
      In_EventName,
    );
  };

  const s = state;
  const prefix = id.replace('$', '');
  const response = s.qrCodeData.GetEventQRCodeResponse;
  const qrCodeImageURL = useBinaryImageURL(s.qrCodeData.QRCodeAsBinary);

  /** The pass (SB :316-509). The seat list's items are inline expressions in a row (no `position: relative`). */
  const pass = (
    <div className="orbit-qrcode-member-cont" data-container="">
      <div className="orbit-member-photo-cont" data-container="">
        <img className="orbit-member-photo" data-image="" src={s.userSignedURL === '' ? undefined : s.userSignedURL} />
      </div>
      <div className="bold font-size-1-1em full-width margin-top-base text-align-center" data-container="">
        <span data-expression="">{s.userName}</span>
      </div>
      <div className="full-width margin-top-s text-align-center" data-container="">
        <span data-expression="">{s.userLocation}</span>
      </div>
      {response.GuestRole !== '' && (
        <div className="full-width text-align-center" data-container="">
          <span className="white-space-nowrap" data-expression="">
            {response.GuestRole}
          </span>
        </div>
      )}
      {response.Seats.length > 0 && (
        <div className="display-flex" data-container="">
          <span className="white-space-nowrap">Row:</span>
          <OSList
            className="list list-group"
            animateItems
            source={response.Seats}
            keyOf={(seat: QRCodeSeatItem, i) => `${seat.MilestoneName}-${String(i)}`}
          >
            {(seat, i) => <span data-expression="">{`${i !== 0 ? ' & ' : ' '}${seat.SeatAllocation}`}</span>}
          </OSList>
        </div>
      )}
      {response.Tag !== '' && (
        <div className="full-width text-align-center" data-container="">
          <span className="white-space-nowrap" data-expression="">{`GMP Tag: ${response.Tag}`}</span>
        </div>
      )}
      {s.qrCodeData.QRCodeAsBinary !== '' && (
        <div className="full-width margin-top-xxl text-align-center" data-container="">
          <div className="font-size-0-9em" data-container="">
            Check into Event
          </div>
          <div data-container="">
            <img className="orbit-qrcode-code" data-image="" src={qrCodeImageURL} />
          </div>
        </div>
      )}
    </div>
  );

  const content: ReactNode = s.isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b4`} inSkeletonLoadingId={OrbitSkeletonLoading.MemberQRCode} />
  ) : s.isDataFetched && s.responseQRCodeAsBinary !== '' ? (
    pass
  ) : (
    <OrbitNoInformation id={`${prefix}-$b3`} message={NO_QR_CODE} />
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail orbit-header-center"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={<span data-expression="">{In_EventName}</span>}
        content={content}
        bottomBar={
          !s.isFetchingData ? <ContactHelpdeskFooter id={`${prefix}-$b5`} onClick={onHandleContactHelpdesk} /> : null
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
    </OSBlock>
  );
}
