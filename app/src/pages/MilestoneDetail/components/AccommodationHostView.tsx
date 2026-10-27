import type { ReactNode } from 'react';
import type { AccommodationData, RoomItem } from '@/api/event';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { ContactHelpdeskFooter } from '@/components/orbit/ContactHelpdeskFooter';
import { MemberInformationCard } from '@/components/orbit/MemberInformationCard';
import { MilestoneHeader } from '@/components/orbit/MilestoneHeader';
import { OrbitAccordion } from '@/components/orbit/OrbitAccordion';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import {
  getSkeletonLoadingIdFromMilestoneTypeId,
  type AccommodationHostInputs,
} from '@/pages/MilestoneDetail/hooks/accommodationHostState';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { getFormattedDateTimeById } from '@/lib/orbit/actions';
import { styleFromCssText } from '@/lib/cssText';
import { SectionExpandable } from '@/components/ui/legacy/SectionExpandable';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';
import { HelpersAccordion, RoomInfoRow } from './milestoneBlockParts';

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI. */
const MENU_ACTION_AUTO = 'Auto';

const NO_GUESTS =
  'No guests have been allocated to this milestone yet. Please check again later or contact the Orbit Helpdesk if you have any questions.';
const BEING_ORGANISED =
  'This accommodation milestone is still being organised. Please check again later or contact the Orbit Helpdesk if you have any questions.';

export interface AccommodationHostViewProps {
  /** OutSystems instance id of the block (`b1-$b5`). */
  id: string;
  /** The inputs of the block. */
  inputs: AccommodationHostInputs;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** AccommodationData. */
  accommodationData: AccommodationData;
  isFetchingData: boolean;
  /** GetAccommodationHost.IsDataFetched. */
  isDataFetched: boolean;
  /** GetAccommodationHost.HasData. */
  hasData: boolean;
  hasDocument: boolean;
  /** The data of the call popup. */
  contactByPhoneData: ContactByPhonePopupData;
  /** The photo source of the member cards. */
  getSignedImageURL: (entityId: string, type: string, size: string) => Promise<string>;
  /** The document icon. */
  onClickOpenDocument: () => void;
  /** The "Guest Arrangements" link of a guest. */
  onClickGuestArrangements: (memberId: string, hasGuestArrangements: boolean) => void;
  /** Event ClickedMember of a member card. */
  onClickedMember: (householdId: string) => void;
  /** Event ClickedPhone of a member card. */
  onClickedMemberPhone: (
    phoneNumber: string,
    callName: string,
    localityId: string,
    memberId: string,
    signedPhotoURL: string,
  ) => void;
  /** Event Cancel of the call popup. */
  onContactByPhoneCancel: () => void;
  /** Event Call of the call popup. */
  onCallClicked: () => void;
  /** The ContactHelpdesk_Footer. */
  onContactHelpdesk: () => void;
}

/** Accommodation of a hosting household, props only. Layout_Orbit (CustomClass "orbit-detail") with the Auto
    MenuIcon, the MilestoneHeader (event and milestone names from the data, else the preloaded ones) and, with rooms,
    the document icon when HasDocument.
    - Content: skeleton while fetching; once fetched, with data: rooms → "Accommodation Allocation" and the date, the
      Helper/s accordion (helpers) and the rooms accordion (one item per room: floor, type, beds, Guest/s and the
      guests' member cards); no rooms but helpers → the title and the Helper/s accordion; neither → NoInformation (no
      guests); without data → NoInformation (being organised).
    - BottomBar: ContactHelpdesk_Footer with data.
    - After the layout: the legacy access-restricted dialog, HandleDownload (no markup; its events are in
      useAccommodationHost) and ContactPopup_ByPhone.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost */
export function AccommodationHostView(props: AccommodationHostViewProps) {
  const { id, inputs, accommodationData: a, getSignedImageURL, onClickedMember, onClickedMemberPhone } = props;
  const prefix = id.replace('$', '');
  const hasRooms = a.Rooms.length > 0;
  const hasHelpers = a.Helpers.length > 0;
  const noSpecialNeeds = a.SpecialNeedsCount === 0;

  /** "Accommodation Allocation" and the formatted milestone date. */
  const allocationTitle = (
    <div className="full-width padding-x-m margin-bottom-m display-flex flex-direction-column" data-container="">
      <div className="full-width bold color-orbit-primary-7" data-container="">
        Accommodation Allocation
      </div>
      <div className="full-width flex-center-vertical flex-direction-row margin-top-m" data-container="">
        <i className="icon orbit-icon-date-time fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-base" data-expression="">
          {getFormattedDateTimeById(inputs.In_OrbitMilestoneTypeId, a.MilestoneDateTime)}
        </span>
      </div>
    </div>
  );

  /** The Helper/s accordion (with rooms, and in its own instance without rooms): per role its formatted name and
      member cards with the midday / evening meals. */
  const helpersAccordion = (accordion: string, item: string, card: string) => (
    <HelpersAccordion
      props={props}
      helpers={a.Helpers}
      aliases={{ accordion, item, card }}
      accordionExtendedClass={noSpecialNeeds ? ' orbit-accordion-no-margin' : ''}
      cardId={(i, k) => `${prefix}-l${item}-15_${String(i)}-l${item}-19_${String(k)}-$b${card}`}
      card={() => ({ isShowPersonalInfo: true })}
      info={(mi) => (
        <>
          {(mi.MiddayMeal ?? '') !== '' && (
            <div className="full-width font-size-s text-neutral-6" data-container="">
              <span data-expression="">{`Midday Meal: ${mi.MiddayMeal ?? ''}`}</span>
            </div>
          )}
          {(mi.EveningMeal ?? '') !== '' && (
            <div className="full-width font-size-s text-neutral-6" data-container="">
              <span data-expression="">{`Evening Meal: ${mi.EveningMeal ?? ''}`}</span>
            </div>
          )}
        </>
      )}
    />
  );

  /** One room: the room info row when a floor, type or beds is set, "Guest/s" and per household its
      member cards (Orbit admin tag, guest arrangements link). */
  const roomContent = (room: RoomItem, r: number) => {
    return (
      <>
        <RoomInfoRow info={room.RoomInformation} />
        <div className="padding-x-m padding-top-base font-size-1-1em text-neutral-6" data-container="">
          <span data-expression="">Guest/s</span>
        </div>
        <OSList
          className="list list-group orbit-household-list"
          animateItems
          disableVirtualization
          source={room.Guests}
          keyOf={(g, j) => `${g.HouseholderId}-${String(j)}`}
        >
          {(g, j) => (
            <div className="orbit-household-list-item" data-container="">
              <OSList
                className="list list-group orbit-member-list"
                animateItems
                disableVirtualization
                source={g.MemberInformation}
                keyOf={(mi, k) => `${mi.MemberId ?? ''}-${String(k)}`}
              >
                {(mi, k) => (
                  <div className="orbit-member-list-item" data-container="">
                    <div data-container="">
                      <MemberInformationCard
                        id={`${prefix}-l5-142864_${String(r)}-l5-${String(142865 + 2 * r)}_${String(j)}-l5-${String(142866 + 2 * r)}_${String(k)}-$b9`}
                        inHouseholderId={g.HouseholderId}
                        inHouseholdCountryCode={g.CountryCode}
                        inShowAdminTag={mi.HasOrbitAdminRole ?? false}
                        inHideMemberInfoLocation={false}
                        inMemberInformation={mi}
                        isShowPersonalInfo
                        inDisplayDot={g.DisplayDot}
                        inHouseholdLocality={g.Locality}
                        getSignedImageURL={getSignedImageURL}
                        onClickedPhone={(phone, name, _localityId, memberId, photoURL) => {
                          // ClickedPhone passes the guest household's LocalityId, not the card's.
                          onClickedMemberPhone(phone, name, g.LocalityId, memberId, photoURL);
                        }}
                        onClickedMember={onClickedMember}
                        placeholderOrbitAdmin={<NotCaptured name="Orbit_Blocks.OrbitAdminTag" />}
                        placeholderInfo={
                          (mi.HasGuestArrangements ?? false) && (
                            <div
                              className="margin-top-s display-flex justify-content-flex-start align-items-center"
                              data-container=""
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                props.onClickGuestArrangements(mi.MemberId ?? '0', mi.HasGuestArrangements ?? false);
                              }}
                            >
                              <i
                                className="icon orbit-icon-arrangements text-neutral-6 fa fa-flag fa-1x"
                                data-icon=""
                              />
                              <div className="orbit-member-list-item-arrangements" data-container="">
                                Guest Arrangements
                              </div>
                            </div>
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </OSList>
            </div>
          )}
        </OSList>
      </>
    );
  };

  const content: ReactNode = props.isFetchingData ? (
    <OrbitSkeleton
      id={`${prefix}-$b16`}
      inSkeletonLoadingId={getSkeletonLoadingIdFromMilestoneTypeId(inputs.In_OrbitMilestoneTypeId)}
    />
  ) : !props.isDataFetched ? null : !props.hasData ? (
    <OrbitNoInformation id={`${prefix}-$b15`} message={BEING_ORGANISED} />
  ) : hasRooms ? (
    <div className="full-width margin-top-m" data-container="">
      {allocationTitle}
      {hasHelpers && helpersAccordion('4', '5', '6')}
      <OrbitAccordion
        id={`${prefix}-$b7`}
        inExtendedClass={noSpecialNeeds && !hasHelpers ? ' orbit-accordion-no-margin' : ''}
        inMultipleItems
      >
        <OSList
          className="list list-group"
          animateItems
          disableVirtualization
          source={a.Rooms}
          keyOf={(room, r) => `${room.RoomId}-${String(r)}`}
        >
          {(room, r) => (
            <SectionExpandable
              id={`${prefix}-l5-142864_${String(r)}-$b8`}
              usePadding={false}
              extendedClass={`orbit-accordion-item${r !== 0 ? ' margin-top-s' : ''}`}
              title={<span data-expression="">{`Room: ${room.RoomName}`}</span>}
              content={roomContent(room, r)}
            />
          )}
        </OSList>
      </OrbitAccordion>
    </div>
  ) : hasHelpers ? (
    <div className="full-width margin-top-m" data-container="">
      {allocationTitle}
      {helpersAccordion('11', '12', '13')}
    </div>
  ) : (
    <OrbitNoInformation id={`${prefix}-$b14`} message={NO_GUESTS} />
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_AccommodationHost" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={
          <MilestoneHeader
            id={`${prefix}-$b3`}
            inOrbitMilestoneTypeId={inputs.In_OrbitMilestoneTypeId}
            inEventName={a.EventDetails.Name !== '' ? a.EventDetails.Name : inputs.In_PreloadEventName}
            inMilestoneName={a.MilestoneTitle !== '' ? a.MilestoneTitle : inputs.In_PreloadMilestoneName}
          />
        }
        headerRight={
          !props.isFetchingData && props.hasData && hasRooms && props.hasDocument ? (
            <div
              className="display-flex align-items-center align-content-center"
              data-container=""
              style={styleFromCssText('cursor: pointer; line-height: initial;')}
              onClick={props.onClickOpenDocument}
            >
              <i className="icon orbit-icon-file-doc padding-none font-size-1-5em fa fa-flag fa-1x" data-icon="" />
            </div>
          ) : null
        }
        content={content}
        bottomBar={
          props.hasData ? <ContactHelpdeskFooter id={`${prefix}-$b17`} onClick={props.onContactHelpdesk} /> : null
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
      <DialogAccessRestrictedActionLegacy id={`${prefix}-FreeSubscriptionAlert`} scope={`${prefix}-b18`} />
      {/* FileTransfer.HandleDownload: no markup; its events are wired by useAccommodationHost. */}
      <OSBlock name="FileTransfer.HandleDownload" id={`${prefix}-$b19`} />
      <ContactPopupByPhone
        id={`${prefix}-$b20`}
        inCallPopupData={props.contactByPhoneData}
        onEventCancel={props.onContactByPhoneCancel}
        onEventCall={props.onCallClicked}
      />
    </OSBlock>
  );
}
