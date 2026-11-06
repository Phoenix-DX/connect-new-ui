import type { MilestoneRoomItem } from '@/api/event';
import { OrbitAccordion } from '@/components/orbit/OrbitAccordion';
import { SectionExpandable } from '@/components/ui/legacy/SectionExpandable';
import { OSList } from '@/components/ui/os/OSList';
import {
  BlockHostInformation,
  blockContent,
  GuestsList,
  HelpersAccordion,
  MilestoneBlockFrame,
  noInformation,
  prefixOf,
  RoomInfoRow,
  type MilestoneBlockViewProps,
} from './milestoneBlockParts';

/** The views of the guest and helper accommodation blocks, props only. The flows are in useMilestoneBlock.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest */

const ACCOMMODATION_ORGANISED =
  'This accommodation milestone is still being organised. Please check again later or contact the Orbit Helpdesk if you have any questions.';

/** ScreenBlock_AccommodationGuest: a guest of a hosted accommodation. With data: HostInformation, then the Helper/s
    accordion (cards without personal info) and the Guest/s accordion; without data → "still being organised".
    Popups: ContactPopup_ByPhone ($b14), ContactByMessage ($b15), FreeSubscriptionAlert.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest */
export function AccommodationGuestView(props: MilestoneBlockViewProps) {
  const d = props.data;
  const prefix = prefixOf(props.id);
  const hasHelpers = d.Helpers.length > 0;
  const content = blockContent(props, '12', () => {
    if (!props.hasData) return noInformation(props, '11', ACCOMMODATION_ORGANISED);
    return (
      <>
        <BlockHostInformation {...props} />
        <div className="full-width margin-top-m" data-container="">
          {hasHelpers && (
            <HelpersAccordion
              props={props}
              helpers={d.Helpers}
              aliases={{ accordion: '5', item: '6', card: '7' }}
              card={() => ({ isShowPersonalInfo: false })}
            />
          )}
          {d.Guests.length > 0 && (
            <OrbitAccordion id={`${prefix}-$b8`}>
              <SectionExpandable
                id={`${prefix}-$b9`}
                usePadding={false}
                extendedClass={`orbit-accordion-item${hasHelpers ? ' orbit-accordion-no-margin' : ''}`}
                title={<span data-expression="">Guest/s</span>}
                content={<GuestsList props={props} guests={d.Guests} listKey="l9-g" cardAlias="10" card={() => ({})} />}
              />
            </OrbitAccordion>
          )}
        </div>
      </>
    );
  });
  return (
    <MilestoneBlockFrame
      name="Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest"
      props={props}
      content={content}
      aliases={{ footer: '13', phone: '14', message: '15', alert: '16' }}
    />
  );
}

/** One room of AccommodationHelper: the room info row when a floor, type or beds is set, "Guest/s" and per
    household its member cards (Orbit admin tag, guest arrangements link). */
function RoomContent({ props, room, r }: { props: MilestoneBlockViewProps; room: MilestoneRoomItem; r: number }) {
  return (
    <>
      <RoomInfoRow info={room.RoomInformation} />
      <div className="padding-x-m padding-top-base font-size-1-1em text-neutral-6" data-container="">
        <span data-expression="">Guest/s</span>
      </div>
      <GuestsList
        props={props}
        guests={room.Guests}
        listKey={`l9-r${String(r)}g`}
        cardAlias="10"
        adminTag
        wrapCard
        card={(_g, m) => ({ inShowAdminTag: m.HasOrbitAdminRole ?? false, inHideMemberInfoLocation: false })}
        info={(_g, m) =>
          (m.HasGuestArrangements ?? false) && (
            <div
              className="margin-top-s display-flex justify-content-flex-start align-items-center"
              data-container=""
              onClick={() => {
                props.onClickGuestArrangements(m.MemberId ?? '0', m.HasGuestArrangements ?? false);
              }}
            >
              <i className="icon orbit-icon-arrangements text-neutral-6 fa fa-flag fa-1x" data-icon="" />
              <div className="orbit-member-list-item-arrangements" data-container="">
                Guest Arrangements
              </div>
            </div>
          )
        }
      />
    </>
  );
}

/** ScreenBlock_AccommodationHelper: a helper of a hosted accommodation. With data: HostInformation, then the
    Helper/s accordion (with the midday and evening meals) and the rooms accordion (one item per room); without data →
    "still being organised". Popups: FreeSubscriptionAlert, ContactPopup_ByPhone ($b16), ContactByMessage ($b17).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper */
export function AccommodationHelperView(props: MilestoneBlockViewProps) {
  const d = props.data;
  const prefix = prefixOf(props.id);
  const content = blockContent(props, '13', () => {
    if (!props.hasData) return noInformation(props, '12', ACCOMMODATION_ORGANISED);
    return (
      <>
        <BlockHostInformation {...props} />
        <div className="margin-top-m full-width display-flex flex-direction-column" data-container="">
          {d.Helpers.length > 0 && (
            <HelpersAccordion
              props={props}
              helpers={d.Helpers}
              aliases={{ accordion: '5', item: '6', card: '7' }}
              card={(m) => ({
                isShowPersonalInfo: true,
                inHouseholdLocality: m.Locality ?? '',
                inHouseholdCountryCode: m.CountryCode ?? '',
              })}
              info={(m) => (
                <>
                  {(m.MiddayMeal ?? '') !== '' && (
                    <div className="full-width font-size-s text-neutral-6" data-container="">
                      <span data-expression="">{`Midday Meal: ${m.MiddayMeal ?? ''}`}</span>
                    </div>
                  )}
                  {(m.EveningMeal ?? '') !== '' && (
                    <div className="full-width font-size-s text-neutral-6" data-container="">
                      <span data-expression="">{`Evening Meal: ${m.EveningMeal ?? ''}`}</span>
                    </div>
                  )}
                </>
              )}
            />
          )}
          {d.Rooms.length > 0 && (
            <OrbitAccordion
              id={`${prefix}-$b8`}
              inMultipleItems
              inExtendedClass={
                d.SpecialNeeds.length === 0 && d.Helpers.length === 0 ? ' orbit-accordion-no-margin' : ''
              }
            >
              <OSList
                className="list list-group"
                animateItems
                disableVirtualization
                source={d.Rooms}
                keyOf={(room, r) => `${room.RoomId}-${String(r)}`}
              >
                {(room, r) => (
                  <SectionExpandable
                    id={`${prefix}-l8-r_${String(r)}-$b9`}
                    usePadding={false}
                    extendedClass={`orbit-accordion-item${r !== 0 ? ' margin-top-s' : ''}`}
                    title={<span data-expression="">{`Room: ${room.RoomName}`}</span>}
                    content={<RoomContent props={props} room={room} r={r} />}
                  />
                )}
              </OSList>
            </OrbitAccordion>
          )}
        </div>
      </>
    );
  });
  return (
    <MilestoneBlockFrame
      name="Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper"
      props={props}
      content={content}
      aliases={{ footer: '14', alert: '15', phone: '16', message: '17' }}
    />
  );
}
