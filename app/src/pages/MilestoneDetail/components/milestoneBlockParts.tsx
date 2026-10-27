import type { ReactNode } from 'react';
import type { MemberInformation, RoomInformation } from '@/api/event';
import type { MilestoneGuestItem, MilestoneMember, MilestoneSpecialNeedsItem } from '@/api/event';
import { ContactByMessage } from '@/components/contact/ContactByMessage';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { ContactHelpdeskFooter } from '@/components/orbit/ContactHelpdeskFooter';
import { MemberInformationCard } from '@/components/orbit/MemberInformationCard';
import { MilestoneHeader } from '@/components/orbit/MilestoneHeader';
import { OrbitAccordion } from '@/components/orbit/OrbitAccordion';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { SectionExpandable } from '@/components/ui/legacy/SectionExpandable';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import {
  getFormattedStringFromHelperType,
  getSkeletonLoadingIdFromMilestoneTypeId,
} from '@/pages/MilestoneDetail/hooks/accommodationHostState';
import type { MilestoneBlockInputs } from '@/pages/MilestoneDetail/hooks/milestoneBlockState';
import type { MilestoneBlockFlows } from '@/pages/MilestoneDetail/hooks/useMilestoneBlock';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { getFormattedDateTimeById } from '@/lib/orbit/actions';
import { HostInformation } from './HostInformation';

/** The parts that the views of the five milestone blocks share (ScreenBlock_MealGuest, _MealHost, _MealHelper,
    _AccommodationGuest, _AccommodationHelper): the frame (Layout_Orbit with the header, the bottom bar and the popups
    after it), the Helper/s accordion, the Special Need/s accordion and the member cards. Each part takes the instance
    aliases of its block (from the compiled view of the block).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealGuest */

/** Connect2_OrbitMobile_MUI.menuAction.auto. */
const MENU_ACTION_AUTO = 'Auto';

/** What every view of the five blocks takes: its instance id, its inputs, the wrapper's placeholders and the flows. */
export interface MilestoneBlockViewProps extends MilestoneBlockFlows {
  /** OutSystems instance id of the block (e.g. `b1-$b1`). */
  id: string;
  inputs: MilestoneBlockInputs;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
}

/** The instance aliases of the frame of a block. */
interface FrameAliases {
  footer: string;
  /** UBTConnect_Utils ContactPopup_ByPhone. */
  phone: string;
  /** Dialog_AccessRestrictedAction_Legacy "FreeSubscriptionAlert". */
  alert: string;
  /** UBTConnect_Utils ContactByMessage_Wrapper (not in MealHost). */
  message?: string;
}

/** `${prefix}-` of the instance id. */
export const prefixOf = (id: string): string => id.replace('$', '');

/** Layout_Orbit "orbit-detail" of a block: Menu, the Auto MenuIcon ($b2), MilestoneHeader ($b3) with the event and
    milestone names of the data (else the preloaded ones), the content, ContactHelpdesk_Footer when HasData and
    CommonUI_Elements; then the popups in the order of their aliases. */
export function MilestoneBlockFrame({
  name,
  props,
  content,
  aliases,
}: {
  name: string;
  props: MilestoneBlockViewProps;
  content: ReactNode;
  aliases: FrameAliases;
}) {
  const { id, inputs, data } = props;
  const prefix = prefixOf(id);
  const after: [number, ReactNode][] = [
    [
      Number(aliases.alert),
      <DialogAccessRestrictedActionLegacy
        key="alert"
        id={`${prefix}-FreeSubscriptionAlert`}
        scope={`${prefix}-b${aliases.alert}`}
      />,
    ],
    [
      Number(aliases.phone),
      <ContactPopupByPhone
        key="phone"
        id={`${prefix}-$b${aliases.phone}`}
        inCallPopupData={props.contactByPhoneData}
        onEventCancel={props.onContactByPhoneCancel}
        onEventCall={props.onCallClicked}
      />,
    ],
  ];
  if (aliases.message !== undefined)
    after.push([
      Number(aliases.message),
      <ContactByMessage
        key="message"
        id={`${prefix}-$b${aliases.message}`}
        inContactPopupData={props.contactByMessageData}
        onEventMessageChannel={props.onContactHostByMessageCancel}
        onEventCancel={props.onContactHostByMessageCancel}
        onEventCall={props.onContactHostByMessageCancel}
        onEventEmail={props.onContactHostByMessageClickedEmail}
      />,
    ]);
  after.sort((a, b) => a[0] - b[0]);

  return (
    <OSBlock name={name} id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={
          <MilestoneHeader
            id={`${prefix}-$b3`}
            inOrbitMilestoneTypeId={inputs.In_OrbitMilestoneTypeId}
            inEventName={data.EventDetails.Name !== '' ? data.EventDetails.Name : inputs.In_PreloadEventName}
            inMilestoneName={data.MilestoneTitle !== '' ? data.MilestoneTitle : inputs.In_PreloadMilestoneName}
          />
        }
        content={content}
        bottomBar={
          props.hasData ? (
            <ContactHelpdeskFooter id={`${prefix}-$b${aliases.footer}`} onClick={props.onContactHelpdesk} />
          ) : null
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
      {after.map(([, node]) => node)}
    </OSBlock>
  );
}

/** The content of a block by its state: the skeleton ($b<skeleton>) while IsFetchingData; nothing until the data
    action answered; then `fetched()`. */
export function blockContent(
  props: MilestoneBlockViewProps,
  skeletonAlias: string,
  fetched: () => ReactNode,
): ReactNode {
  if (props.isFetchingData)
    return (
      <OrbitSkeleton
        id={`${prefixOf(props.id)}-$b${skeletonAlias}`}
        inSkeletonLoadingId={getSkeletonLoadingIdFromMilestoneTypeId(props.inputs.In_OrbitMilestoneTypeId)}
      />
    );
  if (!props.isDataFetched) return null;
  return fetched();
}

/** NoInformation_Orbit with a message. */
export const noInformation = (props: MilestoneBlockViewProps, alias: string, message: string) => (
  <OrbitNoInformation id={`${prefixOf(props.id)}-$b${alias}`} message={message} />
);

/** "Accommodation: <Host>" of a member card (Placeholder_Info), shown when the member has a host. Its click is
    OnHandle_ClickedMember(<householdId>). */
export function accommodationInfo(
  member: MilestoneMember,
  householdId: string,
  onClickedMember: (householdId: string) => void,
): ReactNode {
  if (member.Accommodation.Host === '') return null;
  return (
    <div className="full-width font-size-s text-neutral-6" data-container="">
      <span
        data-expression=""
        onClick={() => {
          onClickedMember(householdId);
        }}
      >
        {`Accommodation: ${member.Accommodation.Host}`}
      </span>
    </div>
  );
}

/** The aliases of an accordion: Accordion_Orbit, its AccordionItem and the member card inside. */
interface AccordionAliases {
  accordion: string;
  item: string;
  card: string;
}

/** What the Helper/s accordion reads of its block (the views of the five blocks and AccommodationHostView). */
type HelpersScope = Pick<
  MilestoneBlockViewProps,
  'id' | 'getSignedImageURL' | 'onClickedMember' | 'onClickedMemberPhone'
>;

/** The Helper/s accordion: per role its formatted name (GetFormattedStringFromHelperType) and the member cards. */
export function HelpersAccordion<M extends MemberInformation>({
  props,
  helpers,
  aliases,
  accordionExtendedClass = '',
  itemExtendedClass = 'orbit-accordion-item',
  cardId,
  card,
  info,
}: {
  props: HelpersScope;
  helpers: { Role: string; MemberInformation: M[] }[];
  aliases: AccordionAliases;
  /** In_ExtendedClass of Accordion_Orbit. */
  accordionExtendedClass?: string;
  itemExtendedClass?: string;
  /** The instance id of the card in row i of the helpers and row k of the members. */
  cardId?: (i: number, k: number) => string;
  /** The inputs of Card_MemberInformation that differ by block. */
  card: (m: M) => {
    isShowPersonalInfo: boolean;
    inHouseholdLocality?: string;
    inHouseholdCountryCode?: string;
  };
  /** Placeholder_Info of a member card (none: empty). */
  info?: (m: M) => ReactNode;
}) {
  const prefix = prefixOf(props.id);
  const a = aliases;
  return (
    <OrbitAccordion id={`${prefix}-$b${a.accordion}`} inExtendedClass={accordionExtendedClass}>
      <SectionExpandable
        id={`${prefix}-$b${a.item}`}
        usePadding={false}
        extendedClass={itemExtendedClass}
        title={<span data-expression="">Helper/s</span>}
        content={
          <OSList
            className="list list-group orbit-household-list"
            animateItems
            disableVirtualization
            source={helpers}
            keyOf={(h, i) => `${h.Role}-${String(i)}`}
          >
            {(h, i) => (
              <div className="orbit-household-list-item" data-container="">
                <div
                  className="padding-x-m padding-bottom-base padding-top-xs font-size-1-1em text-neutral-6"
                  data-container=""
                >
                  <span data-expression="">{getFormattedStringFromHelperType(h.Role)}</span>
                </div>
                <OSList
                  className="list list-group orbit-member-list"
                  animateItems
                  disableVirtualization
                  source={h.MemberInformation}
                  keyOf={(m, k) => `${m.MemberId ?? ''}-${String(k)}`}
                >
                  {(m, k) => (
                    <div className="orbit-member-list-item" data-container="">
                      <MemberInformationCard
                        id={
                          cardId?.(i, k) ?? `${prefix}-l${a.item}-h_${String(i)}-l${a.item}-m_${String(k)}-$b${a.card}`
                        }
                        inMemberInformation={m}
                        inDisplayDot={false}
                        inHouseholderId={m.HouseholderId ?? ''}
                        {...card(m)}
                        getSignedImageURL={props.getSignedImageURL}
                        onClickedMember={props.onClickedMember}
                        onClickedPhone={props.onClickedMemberPhone}
                        placeholderInfo={info?.(m)}
                      />
                    </div>
                  )}
                </OSList>
              </div>
            )}
          </OSList>
        }
      />
    </OrbitAccordion>
  );
}

/** The Special Need/s accordion (MealHost, MealHelper): per member a card without personal info and location, and
    the member's needs ("<Type>: <Notes>", or the one that is set). */
export function SpecialNeedsAccordion({
  props,
  specialNeeds,
  aliases,
}: {
  props: MilestoneBlockViewProps;
  specialNeeds: MilestoneSpecialNeedsItem[];
  aliases: AccordionAliases;
}) {
  const prefix = prefixOf(props.id);
  const a = aliases;
  return (
    <OrbitAccordion id={`${prefix}-$b${a.accordion}`}>
      <SectionExpandable
        id={`${prefix}-$b${a.item}`}
        usePadding={false}
        extendedClass="orbit-accordion-item"
        title={<span data-expression="">Special Need/s</span>}
        content={
          <OSList
            className="list list-group orbit-household-list"
            animateItems
            disableVirtualization
            source={specialNeeds}
            keyOf={(s: MilestoneSpecialNeedsItem, i) => `${s.MemberId}-${String(i)}`}
          >
            {(s, i) => (
              <MemberInformationCard
                id={`${prefix}-l${a.item}-s_${String(i)}-$b${a.card}`}
                inHideMemberInfoLocation
                inDisplayDot={false}
                isShowPersonalInfo={false}
                inHouseholderId={s.HouseholderId}
                inMemberInformation={{
                  HouseholderId: s.HouseholderId,
                  MemberId: s.MemberId,
                  FirstName: s.FirstName,
                  LastName: s.LastName,
                  Title: s.Title,
                  IsHouseholder: false,
                  SignedPhotoURL: s.SignedPhotoURL,
                }}
                getSignedImageURL={props.getSignedImageURL}
                onClickedMember={props.onClickedMember}
                placeholderInfo={
                  s.SpecialNeeds.length > 0 && (
                    <div className="full-width" data-container="">
                      <OSList
                        className="list list-group orbit-member-list"
                        animateItems
                        disableVirtualization
                        source={s.SpecialNeeds}
                        keyOf={(n, k) => `${n.Type}-${String(k)}`}
                      >
                        {(n) => (
                          <div className="full width text-neutral-6 margin-top-xs" data-container="">
                            <span data-expression="">
                              {`${n.Type}${n.Type !== '' && n.Notes !== '' ? `: ${n.Notes}` : n.Notes}`}
                            </span>
                          </div>
                        )}
                      </OSList>
                    </div>
                  )
                }
              />
            )}
          </OSList>
        }
      />
    </OrbitAccordion>
  );
}

/** The guest households of a list and their member cards (orbit-household-list, orbit-member-list). */
export function GuestsList({
  props,
  guests,
  listKey,
  cardAlias,
  card,
  adminTag,
  info,
  wrapCard = false,
}: {
  props: MilestoneBlockViewProps;
  guests: MilestoneGuestItem[];
  /** The prefix of the iteration ids. */
  listKey: string;
  cardAlias: string;
  /** Card inputs that differ by block. */
  card: (
    g: MilestoneGuestItem,
    m: MilestoneMember,
  ) => {
    inShowAdminTag?: boolean;
    inHideMemberInfoLocation?: boolean;
  };
  /** Placeholder_OrbitAdmin: Orbit_Blocks.OrbitAdminTag (not built: NotCaptured, as in AccommodationHost). */
  adminTag?: boolean;
  /** Placeholder_Info of a card. */
  info?: (g: MilestoneGuestItem, m: MilestoneMember) => ReactNode;
  /** A Container around the card (AccommodationHelper). */
  wrapCard?: boolean;
}) {
  const prefix = prefixOf(props.id);
  return (
    <OSList
      className="list list-group orbit-household-list"
      animateItems
      disableVirtualization
      source={guests}
      keyOf={(g, j) => `${g.HouseholderId}-${String(j)}`}
    >
      {(g, j) => (
        <div className="orbit-household-list-item" data-container="">
          <OSList
            className="list list-group orbit-member-list"
            animateItems
            disableVirtualization
            source={g.MemberInformation}
            keyOf={(m, k) => `${m.MemberId ?? ''}-${String(k)}`}
          >
            {(m, k) => {
              const node = (
                <MemberInformationCard
                  id={`${prefix}-${listKey}_${String(j)}-${listKey}m_${String(k)}-$b${cardAlias}`}
                  inHouseholderId={g.HouseholderId}
                  inMemberInformation={m}
                  isShowPersonalInfo
                  inDisplayDot={g.DisplayDot}
                  inHouseholdCountryCode={g.CountryCode}
                  inHouseholdLocality={g.Locality}
                  {...card(g, m)}
                  getSignedImageURL={props.getSignedImageURL}
                  onClickedMember={props.onClickedMember}
                  onClickedPhone={(phone, name, _localityId, memberId, photoURL) => {
                    // ClickedPhone passes the guest household's LocalityId, not the card's.
                    props.onClickedMemberPhone(phone, name, g.LocalityId, memberId, photoURL);
                  }}
                  placeholderOrbitAdmin={adminTag ? <NotCaptured name="Orbit_Blocks.OrbitAdminTag" /> : undefined}
                  placeholderInfo={info?.(g, m)}
                />
              );
              return (
                <div className="orbit-member-list-item" data-container="">
                  {wrapCard ? <div data-container="">{node}</div> : node}
                </div>
              );
            }}
          </OSList>
        </div>
      )}
    </OSList>
  );
}

/** The milestone date row: the date-time icon and GetFormattedDateTimeById(In_OrbitMilestoneTypeId, date). */
export const milestoneDate = (props: MilestoneBlockViewProps) =>
  getFormattedDateTimeById(props.inputs.In_OrbitMilestoneTypeId, props.data.MilestoneDateTime);

/** HostInformation of a block (instance $b4), wired to the host flows. */
export function BlockHostInformation(props: MilestoneBlockViewProps) {
  return (
    <HostInformation
      id={`${prefixOf(props.id)}-$b4`}
      inMilestoneTypeId={props.inputs.In_OrbitMilestoneTypeId}
      milestoneDateTime={props.data.MilestoneDateTime}
      hostInformation={props.data.HostInformation}
      captions={props.householdCaptions}
      isFetchingCaptions={props.isFetchingCaptionData}
      getSignedImageURL={props.getSignedImageURL}
      onClickedPhoneNumber={props.onClickedHostPhone}
      onNavigateToHostProfile={props.onClickedMember}
      onNavigateToEmailHost={props.onContactHostByMessage}
    />
  );
}

/** The room info row of a room (AccommodationHost, AccommodationHelper): shown when a floor, a type or beds is set;
    the floor, who the room is for and the number of beds (LongIntegerToText). */
export function RoomInfoRow({ info }: { info: RoomInformation }) {
  const beds = info.Beds === '' ? '0' : info.Beds;
  if (info.Floor === '' && info.Type === '' && beds === '0') return null;
  return (
    <div className="room-info-cont" data-container="">
      <div className="flex-center-vertical justify-content-flex-start flex-direction-row" data-container="">
        <i className="icon orbit-icon-home font-size-1-1em fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-s" data-expression="">
          {info.Floor}
        </span>
      </div>
      <div className="flex-center-vertical justify-content-center flex-direction-row" data-container="">
        <i className="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-s" data-expression="">
          {info.Type}
        </span>
      </div>
      <div className="flex-center-vertical justify-content-flex-end flex-direction-row" data-container="">
        <i className="icon orbit-icon-accommodation font-size-1-1em fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-s" data-expression="">
          {beds}
        </span>
      </div>
    </div>
  );
}
