// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails
import { useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { Layout_Orbit } from '../../../shared/Connect2_LegacyShared/Layout_Orbit';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import {
  getCacheableMemberContactList,
  getCacheableTimezoneInfo,
} from '../../../shared/Connect2_LegacyShared/lib/actions';
import { Accordion_Orbit } from '../../../shared/Connect2_OrbitMobile_MUI/Accordion_Orbit';
import { Card_MemberInformation } from '../../../shared/Connect2_OrbitMobile_MUI/Card_MemberInformation';
import { ContactHelpdesk_Footer } from '../../../shared/Connect2_OrbitMobile_MUI/ContactHelpdesk_Footer';
import { MilestoneHeader } from '../../../shared/Connect2_OrbitMobile_MUI/MilestoneHeader';
import { NoInformation_Orbit } from '../../../shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit';
import { Skeleton_Loading } from '../../../shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import { checkDirectoryAccess } from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';
import { DirectoryAPIFilter, ImageSigningSize } from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { MemberInformation } from '../../../shared/Connect2_OrbitMobile_MUI/lib/structures';
import { DEPRECATED_AccordionItem } from '../../../shared/osui/DEPRECATED_AccordionItem';
import { ContactPopup_ByPhone } from '../../../shared/UBTConnect_Utils/ContactPopup_ByPhone';
import type { ContactByPhonePopupData } from '../../../shared/UBTConnect_Utils/ContactPopup_ByPhone/types';
import { Dialog_AccessRestrictedAction_Legacy } from '../../../shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getCacheableSignedImageURL, getHelperDetails } from '../api';
import type { HelperData, HelperDetailsVariablesWire, HelperItem } from '../types';
import {
  getContactHelpdeskSubject_Event,
  getFormattedStringFromHelperType,
  getSkeletonLoadingIdFromMilestoneTypeId,
  onApplicationEvent_CallMember,
  onApplicationEvent_ViewHousehold,
} from './actions';

/* ScreenBlock_HelperDetails (HB = analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.
   ScreenBlock_HelperDetails.mvc.js: model :1-172, view :229-705, controller :706-1500). */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (HB :275). */
const MENU_ACTION_AUTO = 'Auto';

const EMPTY_HELPER_DATA: HelperData = {
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' },
  Helpers: [],
};

/** Block variables (HB model :25-80) and the data action state the view reads. */
interface Model {
  helperData: HelperData;
  isFetchingData: boolean;
  isFetchingPhoneData: boolean;
  contactByPhoneData: ContactByPhonePopupData;
  /** GetHelperDetails.IsDataFetched. */
  isDataFetched: boolean;
}

const INITIAL_MODEL: Model = {
  helperData: EMPTY_HELPER_DATA,
  isFetchingData: false,
  isFetchingPhoneData: false,
  contactByPhoneData: {},
  isDataFetched: false,
};

export interface ScreenBlock_HelperDetailsProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  In_EventId: string;
  In_PreloadEventName: string;
  In_PreloadMilestoneName: string;
  In_OrbitMilestoneTypeId: string;
  In_HostId: string;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateTo_HouseholdDetail(HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
}

/** Helpers of a hosting household (HB). Layout_Orbit (CustomClass "orbit-detail", HB :244) with the Auto MenuIcon
    (HB :275) and the MilestoneHeader of the preloaded names (HB :297-301). Content (HB :324-580): the skeleton while
    fetching; otherwise, with helpers, an accordion with one item per role (formatted role, member cards); without
    helpers, once fetched, NoInformation "There is no Helper available.". BottomBar: ContactHelpdesk_Footer with
    helpers (HB :585-610). After the layout: the legacy access-restricted dialog and ContactPopup_ByPhone (HB :640-690).
    OnReady (HB :871-928): a view restored from the cache does nothing (P-BACK); else OrbitMilestoneType =
    GetLocalOrbitMilestoneTypeById(In_OrbitMilestoneTypeId) and RefreshData (IsFetchingData, GetHelperDetails →
    OnAfterFetch_GetHelperHost: HelperData, IsFetchingData False). */
export function ScreenBlock_HelperDetails(props: ScreenBlock_HelperDetailsProps) {
  const { id, In_EventId, In_PreloadEventName, In_PreloadMilestoneName, In_OrbitMilestoneTypeId, In_HostId } = props;
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () =>
      restored && saved
        ? {
            ...saved,
            contactByPhoneData: {
              ...saved.contactByPhoneData,
              ContactPopupData: { ...saved.contactByPhoneData.ContactPopupData, ShowPopup: false },
            },
          }
        : INITIAL_MODEL,
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** The block variables the data action sends (screenData.variables, see HelperDetailsVariablesWire). */
  const variables = (): HelperDetailsVariablesWire => {
    const s = m();
    return {
      IsFetchingData: s.isFetchingData,
      IsFetchingPhoneData: s.isFetchingPhoneData,
      In_EventId,
      In_PreloadEventName,
      In_PreloadMilestoneName,
      In_OrbitMilestoneTypeId,
      In_HostId,
    };
  };

  /* OnReady (HB :871-928). Run before paint, as OnReady runs when the block mounts. */
  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    /* OrbitMilestoneType = GetLocalOrbitMilestoneTypeById(In_OrbitMilestoneTypeId) (HB :900-906) only travels as a
       block variable, left out with the record variables (types.ts HelperDetailsVariablesWire). */
    // RefreshData (HB :1309-1342)
    set({ isFetchingData: true });
    void (async () => {
      try {
        const helperData = await getHelperDetails(variables());
        // OnAfterFetch_GetHelperHost (HB :757-785)
        set({ isDataFetched: true, helperData });
        set({ isFetchingData: false });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnHandle_ClickedMember(HouseholdId, Type = DirectoryAPIFilter.Member) (HB :1226-1290, view :470-478):
      CheckDirectoryAccess; with access NavigateTo_HouseholdDetail, then OnApplicationEvent_ViewHousehold; without it
      App_Subscription_ShowUpgradePopUp. */
  const onHandleClickedMember = (householdId: string) => {
    void (async () => {
      try {
        const hasAccess = await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member);
        if (hasAccess) {
          props.onNavigateToHouseholdDetail(householdId);
          onApplicationEvent_ViewHousehold(householdId, In_EventId);
        } else {
          await showUpgradePopUp();
        }
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
  };

  /** BuildMemberCallData(Phone, SignedPhotoURL, LocalityId, MemberId, CallName) (HB :963-1100): the popup opens
      loading with the name and photo; GetCacheableMemberContactList([MemberId]). An empty list: Phone, IsLoading
      False, GetCacheableTimezoneInfo(LocalityId) → TimezoneName = TimezoneAbreviation, TimezoneOffset = OffsetSeconds,
      Locality and CountryName = CountryName. Otherwise (Phone is not set, as compiled): the signed photo when ImageURL
      is "", then from the first contact Locality = LocalityName, Mobile / Home / Work phone, TimezoneName =
      Timezone.TimezoneLabel, TimezoneOffset = Timezone.OffsetSeconds and CountryName. Then IsFetchingTimezone and
      IsLoading False. */
  const buildMemberCallData = async (
    phone: string,
    signedPhotoURL: string,
    localityId: string,
    memberId: string,
    callName: string,
  ) => {
    const popup = (patch: Partial<NonNullable<ContactByPhonePopupData['ContactPopupData']>>) => {
      const d = m().contactByPhoneData;
      set({ contactByPhoneData: { ...d, ContactPopupData: { ...d.ContactPopupData, ...patch } } });
    };
    popup({ Name: callName, ImageURL: signedPhotoURL, ShowPopup: true, IsFetchingTimezone: true, IsLoading: true });
    const contacts = await getCacheableMemberContactList([memberId]);
    const first = contacts[0];
    if (first === undefined) {
      set({ contactByPhoneData: { ...m().contactByPhoneData, Phone: phone } });
      popup({ IsLoading: false });
      const tz = await getCacheableTimezoneInfo(localityId);
      popup({
        TimezoneName: tz.TimezoneAbreviation,
        TimezoneOffset: Number(tz.OffsetSeconds),
        Locality: tz.CountryName,
        CountryName: tz.CountryName,
      });
    } else {
      if ((m().contactByPhoneData.ContactPopupData?.ImageURL ?? '') === '') {
        popup({
          ImageURL: await getCacheableSignedImageURL(memberId, DirectoryAPIFilter.Member, ImageSigningSize.Small),
        });
      }
      const d = m().contactByPhoneData;
      set({
        contactByPhoneData: {
          ...d,
          MobilePhone: first.MobilePhoneNumber,
          HomePhone: first.HomePhoneNumber,
          WorkPhone: first.WorkPhoneNumber,
          ContactPopupData: {
            ...d.ContactPopupData,
            Locality: first.LocalityName,
            TimezoneName: first.Timezone.TimezoneLabel,
            TimezoneOffset: Number(first.Timezone.OffsetSeconds),
            CountryName: first.CountryName,
          },
        },
      });
    }
    popup({ IsFetchingTimezone: false, IsLoading: false });
  };

  /** OnHandle_ClickedMemberPhone(PhoneNumber, CallName, LocalityId, MemberId, SignedPhotoURL) (HB :786-830): with a
      phone number, BuildMemberCallData. */
  const onHandleClickedMemberPhone = (
    phoneNumber: string,
    callName: string,
    localityId: string,
    memberId: string,
    signedPhotoURL: string,
  ) => {
    if (phoneNumber === '') return;
    void buildMemberCallData(phoneNumber, signedPhotoURL, localityId, memberId, callName).catch(raiseToFlowHandler);
  };

  /** OnHandle_ContactByPhone_Cancel (HB :938-962): ShowPopup False. */
  const onHandleContactByPhoneCancel = () => {
    const d = m().contactByPhoneData;
    set({ contactByPhoneData: { ...d, ContactPopupData: { ...d.ContactPopupData, ShowPopup: false } } });
  };

  /** OnHandle_CallClicked(CalledNumber) (HB :1174-1216): OnApplicationEvent_CallMember, then
      OnHandle_ContactByPhone_Cancel. */
  const onHandleCallClicked = () => {
    onApplicationEvent_CallMember(In_EventId);
    onHandleContactByPhoneCancel();
  };

  /** OnHandle_ContactHelpdesk (HB :1143-1173): NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Event(
      In_PreloadEventName, EventDetails.StartDate, EventDetails.EndDate, EventDetails.Location), In_PreloadEventName). */
  const onHandleContactHelpdesk = () => {
    const e = m().helperData.EventDetails;
    props.onNavigateToContactHelpdesk(
      getContactHelpdeskSubject_Event(In_PreloadEventName, e.StartDate, e.EndDate, e.Location),
      In_PreloadEventName,
    );
  };

  const s = state;
  const prefix = id.replace('$', '');
  const hasHelpers = s.helperData.Helpers.length > 0;

  /** The helper accordion (HB :325-520): one DEPRECATED_AccordionItem per role ("orbit-accordion-item", " margin-top-s"
      after the first, no padding; title GetFormattedStringFromHelperType(Role)) with the role's member cards
      (Is_ShowPersonalInfo, no dot, In_HouseholderId of the member). Item ids follow the block aliases (not captured). */
  const helpersAccordion = (
    <div className="full-width margin-top-m" data-container="">
      <Accordion_Orbit id={`${prefix}-$b4`} inExtendedClass="" inMultipleItems>
        <OSList
          className="list list-group"
          animateItems
          disableVirtualization
          source={s.helperData.Helpers}
          keyOf={(h: HelperItem, i) => `${h.Role}-${String(i)}`}
        >
          {(h, i) => (
            <DEPRECATED_AccordionItem
              id={`${prefix}-l6_${String(i)}-$b5`}
              usePadding={false}
              extendedClass={`orbit-accordion-item${i !== 0 ? ' margin-top-s' : ''}`}
              title={<span data-expression="">{getFormattedStringFromHelperType(h.Role)}</span>}
              content={
                <OSList
                  className="list list-group orbit-household-list"
                  animateItems
                  disableVirtualization
                  source={h.MemberInformation}
                  keyOf={(mi: MemberInformation, k) => `${mi.MemberId ?? ''}-${String(k)}`}
                >
                  {(mi, k) => (
                    <div data-container="">
                      <Card_MemberInformation
                        id={`${prefix}-l6_${String(i)}-l9_${String(k)}-$b6`}
                        inMemberInformation={mi}
                        isShowPersonalInfo
                        inDisplayDot={false}
                        inHouseholderId={mi.HouseholderId ?? ''}
                        getSignedImageURL={getCacheableSignedImageURL}
                        onClickedMember={onHandleClickedMember}
                        onClickedPhone={onHandleClickedMemberPhone}
                      />
                    </div>
                  )}
                </OSList>
              }
            />
          )}
        </OSList>
      </Accordion_Orbit>
    </div>
  );

  const content: ReactNode = s.isFetchingData ? (
    <Skeleton_Loading
      id={`${prefix}-$b8`}
      inSkeletonLoadingId={getSkeletonLoadingIdFromMilestoneTypeId(In_OrbitMilestoneTypeId)}
    />
  ) : hasHelpers ? (
    helpersAccordion
  ) : s.isDataFetched ? (
    <NoInformation_Orbit id={`${prefix}-$b7`} message="There is no Helper available." />
  ) : null;

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_HelperDetails" id={id}>
      <Layout_Orbit
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={
          <MilestoneHeader
            id={`${prefix}-$b3`}
            inEventName={In_PreloadEventName}
            inMilestoneName={In_PreloadMilestoneName}
            inOrbitMilestoneTypeId={In_OrbitMilestoneTypeId}
          />
        }
        content={content}
        bottomBar={
          hasHelpers && !s.isFetchingData ? (
            <ContactHelpdesk_Footer id={`${prefix}-$b9`} onClick={onHandleContactHelpdesk} />
          ) : null
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
      <Dialog_AccessRestrictedAction_Legacy id={`${prefix}-FreeSubscriptionAlert`} scope={`${prefix}-b10`} />
      <ContactPopup_ByPhone
        id={`${prefix}-$b11`}
        inCallPopupData={s.contactByPhoneData}
        onEventCancel={onHandleContactByPhoneCancel}
        onEventCall={onHandleCallClicked}
      />
    </OSBlock>
  );
}
