import type { ReactNode } from 'react';
import type { LdmEventDetail, LdmSpecialNeedsItem } from '@/api/event';
import { ContactByMessage } from '@/components/contact/ContactByMessage';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { EventDetailSubSection } from '@/components/orbit/EventDetailSubSection';
import { OrbitErrorScreen } from '@/components/orbit/OrbitErrorScreen';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import type { LdmEventDetailFlows } from '@/pages/LDM_EventDetail_V2/hooks/useLdmEventDetail';
import {
  hasSpecialNeeds,
  isCoordinatorAvailable,
  MAX_PHOTO_HEIGHT,
  MAX_PHOTO_WIDTH,
  SQUARE_PHOTO_PX,
} from '@/pages/LDM_EventDetail_V2/hooks/ldmEventDetailState';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';
import { formatDateForEventBanner } from './actions';
import { EventDetail_Banner } from './EventDetail_Banner';
import { EventDetail_HostCard } from './EventDetail_HostCard';
import { EventDetail_ListItem } from './EventDetail_ListItem';
import { EventDetail_Section } from './EventDetail_Section';
import { EventDetail_SpecialNeeds_ListItem } from './EventDetail_SpecialNeeds_ListItem';
import { EventsDetail_Content } from './EventsDetail_Content';

/** The view of the LDM event detail, props only. Layout with the back MenuIcon and the date title (empty while
    fetching, "No Event Available" without information or on a fetch error); Content: the fetch error → ErrorScreen;
    fetching → the list-updating loader; no information → ErrorScreen; else EventsDetail_Content with the banner, the
    host card for a guest, and (Q1) the Special Needs section for a host with needs and the Guest Households section of
    a published allocation; then the two contact popups; Dialog_AccessRestrictedAction_Legacy after the Layout. The
    flows are in useLdmEventDetail.
    @origin Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2 */

export interface LdmEventDetailViewProps extends LdmEventDetailFlows {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Placeholder BottomBar (the screen's BottomBarMenu). */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
}

/** One list of special needs (Dietary, Mobility or Other) of the Special Needs section. */
function SpecialNeedsList({
  scope,
  needKey,
  items,
}: {
  scope: string;
  needKey: 'Dietary' | 'Mobility' | 'Other';
  items: LdmSpecialNeedsItem[];
}) {
  return (
    <OSList
      id={`${scope}-List_${needKey}`}
      className="list list-group event-detail-list"
      animateItems
      source={items}
      keyOf={(n) => `${n.Memberid}-${n.Name}`}
    >
      {(n, row) => (
        <EventDetail_SpecialNeeds_ListItem
          id={`${scope}-SpecialNeeds_ListItem_${needKey}`}
          scope={`${scope}-SpecialNeeds_ListItem_${needKey}`}
          maxPhotoPx={SQUARE_PHOTO_PX}
          inGuestURL={n.SignedUrl}
          inHasBottomBorder={row < items.length - 1}
          title={
            <span className="bold font-size-0-9em" data-expression="">
              {n.FullName}
            </span>
          }
          info={
            <>
              <div className="font-size-0-8em text-neutral-7" data-container="">
                <span data-expression="">{n.Name}</span>
              </div>
              <div className="font-size-0-8em text-neutral-7" data-container="">
                <span data-expression="">{n.Notes}</span>
              </div>
            </>
          }
        />
      )}
    </OSList>
  );
}

/** EventsDetail_Content of a fetched meal: the banner, the host card for a guest and the host's sections. */
function EventContent({
  scope,
  event,
  coordinatorAvailable,
  minBannerHeight,
  flows,
}: {
  scope: string;
  event: LdmEventDetail;
  coordinatorAvailable: boolean;
  minBannerHeight: number;
  flows: LdmEventDetailFlows;
}) {
  const host = event.Host;
  const guests = event.Guests;
  const needs = event.SpecialNeeds;
  return (
    <EventsDetail_Content
      id={`${scope}-$b3`}
      scope={`${scope}-b3`}
      inMinBannerHeight={minBannerHeight}
      banner={
        <EventDetail_Banner
          id={`${scope}-$b4`}
          inImageURL={host.SignedHallPhoto}
          inEventLocation={host.EventLocalityName}
          inAdults={host.Adults}
          inChildren={host.Children}
          inIsCoordinatorAvailable={coordinatorAvailable}
          inIsHost={host.Hosting}
          inEventDate={host.EventDate}
          inMinHeight={minBannerHeight}
          onContactOrganiser={flows.onContactOrganiser}
          onSetContainerHeight={flows.onSetBannerHeight}
        />
      }
      guestView={
        !host.Hosting ? (
          <EventDetail_HostCard
            id={`${scope}-$b5`}
            scope={`${scope}-b5`}
            inHostURL={host.SignedURL}
            inHostEmail={host.Email}
            inIsHost={host.Hosting}
            inAddress={host.FormattedAddress}
            maxPhotoHeight={MAX_PHOTO_HEIGHT}
            inIsAssigned={host.IsPublished}
            inHostName={host.HouseholderName}
            maxPhotoWidth={MAX_PHOTO_WIDTH}
            inPhone={host.Phone}
            householdDisplay={host.HouseholdDisplay}
            onHostInformation={flows.onHostInformation}
            onNavigateToEmailHousehold={flows.onContactHostMessage}
            onCallPhone={flows.onContactHostCall}
            onAddress={flows.onHostAddress}
          />
        ) : null
      }
      content={
        <>
          {host.Hosting && hasSpecialNeeds(needs) ? (
            <EventDetail_Section
              id={`${scope}-Detail_SpecialNeeds`}
              scope={`${scope}-b6`}
              inIsHost={host.Hosting}
              inTitle="Special Needs"
            >
              {needs.Diet.length > 0 ? (
                <EventDetailSubSection id={`${scope}-SubSection_Dietary`} inTitle="Dietary" inHasBottomBorder>
                  <SpecialNeedsList scope={scope} needKey="Dietary" items={needs.Diet} />
                </EventDetailSubSection>
              ) : null}
              {needs.Mobility.length > 0 ? (
                <EventDetailSubSection id={`${scope}-SubSection_Mobility`} inTitle="Mobility" inHasBottomBorder>
                  <SpecialNeedsList scope={scope} needKey="Mobility" items={needs.Mobility} />
                </EventDetailSubSection>
              ) : null}
              {needs.Other.length > 0 ? (
                <EventDetailSubSection id={`${scope}-SubSection_Other`} inTitle="Other" inHasBottomBorder>
                  <SpecialNeedsList scope={scope} needKey="Other" items={needs.Other} />
                </EventDetailSubSection>
              ) : null}
            </EventDetail_Section>
          ) : null}
          {host.IsPublished && guests.length > 0 ? (
            <EventDetail_Section
              id={`${scope}-Detail_GuestsHouseholds`}
              scope={`${scope}-b13`}
              inTitle="Guest Households"
              inIsHost={host.Hosting}
              inHasBottomBorder
            >
              <OSList
                id={`${scope}-List_Guests`}
                className="list list-group event-detail-list"
                animateItems
                source={guests}
                keyOf={(g) => g.EventGuestID}
              >
                {(g, row) => (
                  <EventDetail_ListItem
                    id={`${scope}-ListItem_Guests`}
                    scope={`${scope}-b14`}
                    inMaxPhotoWidth={MAX_PHOTO_WIDTH}
                    isHosting={host.Hosting}
                    guest={g}
                    inMaxPhotoHeight={MAX_PHOTO_HEIGHT}
                    inHasBottomBorder={row < guests.length - 1}
                    onClickMessage={(data) => {
                      flows.onGuestMessage(data);
                    }}
                    onClicked={(displayed) => {
                      flows.onGuestClicked(g, displayed);
                    }}
                    onClickPhoneCall={flows.onGuestPhoneCall}
                  />
                )}
              </OSList>
            </EventDetail_Section>
          ) : null}
        </>
      }
    />
  );
}

export function LdmEventDetailView({ id, bottomBar, commonUIElements, ...flows }: LdmEventDetailViewProps) {
  const { state } = flows;
  const scope = id.replace('$', '');
  const host = state.event?.Host;

  const content = (() => {
    if (state.hasEventFetchError)
      return <OrbitErrorScreen id={`${scope}-$b16`} inErrorMessage="No event information." inMatchMainContentHeight />;
    if (state.isFetching)
      return (
        <div className="list-updating-cont" data-container="" id={`${scope}-MarkReadLoading`}>
          <div className="list-updating" data-container="" />
        </div>
      );
    if (!state.hasInformation || !host || !state.event)
      return <OrbitErrorScreen id={`${scope}-$b15`} inErrorMessage="No event information." inMatchMainContentHeight />;
    return (
      <EventContent
        scope={scope}
        event={state.event}
        coordinatorAvailable={isCoordinatorAvailable(state)}
        minBannerHeight={state.minBannerHeight}
        flows={flows}
      />
    );
  })();

  return (
    <OSBlock name="LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
        title={
          <div className="text-align-center" data-container="">
            {!state.isFetching ? (
              <span data-expression="">
                {!state.hasInformation || state.hasEventFetchError
                  ? 'No Event Available'
                  : formatDateForEventBanner(host?.EventDate ?? '')}
              </span>
            ) : null}
          </div>
        }
        content={
          <>
            {content}
            <ContactPopupByPhone
              id={`${scope}-$b17`}
              inCallPopupData={state.contactByPhoneData}
              onEventCall={flows.onCloseContactByPhone}
              onEventCancel={flows.onCloseContactByPhone}
            />
            <ContactByMessage
              id={`${scope}-$b18`}
              inContactPopupData={state.contactByMessageData}
              onEventCancel={flows.onCloseContactByMessage}
              onEventEmail={flows.onContactByMessageEmail}
              onEventMessageChannel={flows.onCloseContactByMessage}
              onEventCall={flows.onCloseContactByMessage}
            />
          </>
        }
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
      <DialogAccessRestrictedActionLegacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b19`} />
    </OSBlock>
  );
}
