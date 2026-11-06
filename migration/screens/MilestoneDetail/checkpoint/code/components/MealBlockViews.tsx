import { OrbitAccordion } from '@/components/orbit/OrbitAccordion';
import { SectionExpandable } from '@/components/ui/legacy/SectionExpandable';
import {
  accommodationInfo,
  BlockHostInformation,
  blockContent,
  GuestsList,
  HelpersAccordion,
  milestoneDate,
  MilestoneBlockFrame,
  noInformation,
  prefixOf,
  SpecialNeedsAccordion,
  type MilestoneBlockViewProps,
} from './milestoneBlockParts';

/** The views of the three meal blocks, props only. The flows are in useMilestoneBlock.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealGuest */

const NO_GUESTS =
  'No guests have been allocated to this milestone yet. Please check again later or contact the Orbit Helpdesk if you have any questions.';
const MEAL_ORGANISED =
  'This meal milestone is still being organised. Please check again later or contact the Orbit Helpdesk if you have any questions.';
const MEAL_ORGANISED_LATER = 'This meal milestone is still being organised. Please check back for later updates.';

/** "Accommodation: <Host>" of a helper card. The compiled click reads the first guest's first member
    (`MealData.Guests.Current.MemberInformation.Current` outside the guests list), not the helper (as compiled). */
const helperAccommodationInfo = (props: MilestoneBlockViewProps) => (m: Parameters<typeof accommodationInfo>[0]) =>
  accommodationInfo(
    m,
    props.data.Guests[0]?.MemberInformation[0]?.Accommodation.HouseholderId ?? '0',
    props.onClickedMember,
  );

/** The guests accordion of MealGuest and MealHelper: Accordion_Orbit "border-bottom-neutral-4" with a Container
    (shown with guests) and the AccordionItem "Guest/s", expanded. */
function MealGuestsAccordion({
  props,
  accordion,
  item,
  card,
  adminTag,
}: {
  props: MilestoneBlockViewProps;
  accordion: string;
  item: string;
  card: string;
  adminTag: boolean;
}) {
  const prefix = prefixOf(props.id);
  const guests = props.data.Guests;
  return (
    <OrbitAccordion id={`${prefix}-$b${accordion}`} inExtendedClass="border-bottom-neutral-4">
      {guests.length > 0 && (
        <div data-container="">
          <SectionExpandable
            id={`${prefix}-$b${item}`}
            usePadding={false}
            extendedClass="orbit-accordion-item"
            isExpanded
            title="Guest/s"
            content={
              <GuestsList
                props={props}
                guests={guests}
                listKey={`l${item}-g`}
                cardAlias={card}
                adminTag={adminTag}
                card={(_g, m) => (adminTag ? { inShowAdminTag: m.HasOrbitAdminRole ?? false } : {})}
                info={
                  adminTag
                    ? (_g, m) => accommodationInfo(m, m.Accommodation.HouseholderId, props.onClickedMember)
                    : undefined
                }
              />
            }
          />
        </div>
      )}
    </OrbitAccordion>
  );
}

/** ScreenBlock_MealGuest: a guest of a hosted meal. With data, meals and guests: HostInformation, the Helper/s
    accordion (cards without personal info) and the guests accordion; no guests → "No guests …"; no meals or no data
    → "still being organised". Popups: ContactPopup_ByPhone ($b16), FreeSubscriptionAlert, ContactByMessage ($b18).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealGuest */
export function MealGuestView(props: MilestoneBlockViewProps) {
  const d = props.data;
  const content = blockContent(props, '14', () => {
    if (!props.hasData) return noInformation(props, '13', MEAL_ORGANISED);
    if (!d.Meals) return noInformation(props, '12', MEAL_ORGANISED);
    if (d.Guests.length === 0) return noInformation(props, '11', NO_GUESTS);
    return (
      <>
        <BlockHostInformation {...props} />
        {d.Helpers.length > 0 && (
          <HelpersAccordion
            props={props}
            helpers={d.Helpers}
            aliases={{ accordion: '5', item: '6', card: '7' }}
            card={() => ({ isShowPersonalInfo: false })}
          />
        )}
        <MealGuestsAccordion props={props} accordion="8" item="9" card="10" adminTag={false} />
      </>
    );
  });
  return (
    <MilestoneBlockFrame
      name="Orbit_ScreenBlocks.ScreenBlock_MealGuest"
      props={props}
      content={content}
      aliases={{ footer: '15', phone: '16', alert: '17', message: '18' }}
    />
  );
}

/** ScreenBlock_MealHost: the hosting household of a meal. With data, meals and guests or helpers: the date and
    "Allocated: <n>", the Special Need/s, Helper/s and Guest/s accordions; no guests and no helpers → "No guests …";
    no meals → "… check back for later updates."; no data → "still being organised". No host and no message popup.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHost */
export function MealHostView(props: MilestoneBlockViewProps) {
  const d = props.data;
  const prefix = prefixOf(props.id);
  const hasSpecialNeeds = d.SpecialNeeds.length > 0;
  const hasHelpers = d.Helpers.length > 0;
  const content = blockContent(props, '17', () => {
    if (!props.hasData) return noInformation(props, '16', MEAL_ORGANISED);
    if (!d.Meals) return noInformation(props, '15', MEAL_ORGANISED_LATER);
    if (d.Guests.length === 0 && !hasHelpers) return noInformation(props, '14', NO_GUESTS);
    return (
      <div className="full-width display-flex flex-direction-column" data-container="">
        <div className="font-size-0-9em padding-x-m padding-y-m" data-container="">
          <div className="flex-center-vertical" data-container="">
            <i className="icon orbit-icon-date-time fa fa-flag fa-1x" data-icon="" />
            <span className="margin-left-base" data-expression="">
              {milestoneDate(props)}
            </span>
          </div>
          {/* Visible when LongIntegerToText(AllocatedGuests) <> "": the text of a Long Integer is never "". */}
          <div className="flex-center-vertical margin-top-m" data-container="">
            <i className="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon="" />
            <span className="margin-left-base" data-expression="">
              {`Allocated: ${d.AllocatedGuests === '' ? '0' : d.AllocatedGuests}`}
            </span>
          </div>
        </div>
        {hasSpecialNeeds && (
          <SpecialNeedsAccordion
            props={props}
            specialNeeds={d.SpecialNeeds}
            aliases={{ accordion: '4', item: '5', card: '6' }}
          />
        )}
        {hasHelpers && (
          <HelpersAccordion
            props={props}
            helpers={d.Helpers}
            aliases={{ accordion: '7', item: '8', card: '9' }}
            itemExtendedClass={`orbit-accordion-item${hasSpecialNeeds ? ' orbit-accordion-no-margin' : ''}`}
            card={() => ({ isShowPersonalInfo: true })}
            info={helperAccommodationInfo(props)}
          />
        )}
        {d.Guests.length > 0 && (
          <OrbitAccordion id={`${prefix}-$b10`}>
            <SectionExpandable
              id={`${prefix}-$b11`}
              usePadding={false}
              isExpanded
              extendedClass={`orbit-accordion-item${hasHelpers || hasSpecialNeeds ? ' orbit-accordion-no-margin' : ''}`}
              title={<span data-expression="">Guest/s</span>}
              content={
                <GuestsList
                  props={props}
                  guests={d.Guests}
                  listKey="l11-g"
                  cardAlias="12"
                  adminTag
                  card={(_g, m) => ({ inShowAdminTag: m.HasOrbitAdminRole ?? false })}
                  info={(_g, m) => accommodationInfo(m, m.Accommodation.HouseholderId, props.onClickedMember)}
                />
              }
            />
          </OrbitAccordion>
        )}
      </div>
    );
  });
  return (
    <MilestoneBlockFrame
      name="Orbit_ScreenBlocks.ScreenBlock_MealHost"
      props={props}
      content={content}
      aliases={{ footer: '18', alert: '19', phone: '20' }}
    />
  );
}

/** ScreenBlock_MealHelper: a helper of a hosted meal. With data: HostInformation, the Special Need/s (from the
    data action's response) and Helper/s accordions and the guests accordion; no data → "still being organised".
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper */
export function MealHelperView(props: MilestoneBlockViewProps) {
  const d = props.data;
  const content = blockContent(props, '16', () => {
    if (!props.hasData) return noInformation(props, '15', MEAL_ORGANISED);
    return (
      <div className="full-width display-flex flex-direction-column" data-container="">
        <BlockHostInformation {...props} />
        {d.SpecialNeeds.length > 0 && (
          <SpecialNeedsAccordion
            props={props}
            specialNeeds={d.SpecialNeeds}
            aliases={{ accordion: '5', item: '6', card: '7' }}
          />
        )}
        {d.Helpers.length > 0 && (
          <HelpersAccordion
            props={props}
            helpers={d.Helpers}
            aliases={{ accordion: '8', item: '9', card: '10' }}
            card={(m) => ({
              isShowPersonalInfo: true,
              inHouseholdLocality: m.Locality ?? '',
              inHouseholdCountryCode: m.CountryCode ?? '',
            })}
            info={helperAccommodationInfo(props)}
          />
        )}
        <MealGuestsAccordion props={props} accordion="11" item="12" card="13" adminTag />
      </div>
    );
  });
  return (
    <MilestoneBlockFrame
      name="Orbit_ScreenBlocks.ScreenBlock_MealHelper"
      props={props}
      content={content}
      aliases={{ footer: '17', phone: '18', alert: '19', message: '20' }}
    />
  );
}
