import type { ReactNode } from 'react';
import type { AdminEventItem, Event_Screen } from '@/api/event';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OrbitEventCard } from '@/components/orbit/OrbitEventCard';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { OSPopupWidget } from '@/components/ui/os/OSPopup';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { eventFilterLabelOf } from '@/pages/OrbitAdminLanding/hooks/adminLandingState';
import { MenuAction_Menu } from '@/pages/OrbitAdminLanding/staticEntities';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';

/** The view of the Orbit admin landing, props only: Layout_Orbit with the back MenuIcon, the Orbit flag as title, and
    in the header the admin's first name and the filter and sort headers (label and caret). The content is the
    OrbitLanding skeleton while fetching, then the Card_Event list of the admin events, or NoInformation_Orbit when
    there is none; after it, RootPlaceholder_Filters and RootPlaceholder_Sort with the Popup widgets. An open popup
    (Popup_OrbitLanding_Filters / _Sort) is not captured for this route: NotCaptured. The flows are in
    `useAdminLanding`.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding */

const NO_ADMIN_EVENT_MESSAGE =
  'There are no events currently where QR scanning is required. If you have any questions, please contact your regional Orbit helpdesk.';

export interface AdminLandingViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** UserFirstName: the header text. */
  userFirstName: string;
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** Get_AdminEventsList.IsDataFetched: the list or the "no event" line shows (when not fetching). */
  isDataFetched: boolean;
  /** EventsSummary: the admin events. */
  eventsSummary: AdminEventItem[];
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Card_Event ClickedEvent(EventSummary), with the TypeFriendly of the card's row. */
  onEventCardClicked: (eventSummary: Event_Screen, eventTypeFriendly: string) => void;
  /** EventFilter: the label of the filter header. */
  eventFilter: number;
  /** Popup_FiltersOpened. */
  popupFiltersOpened: boolean;
  /** Popup_SortByOpened. */
  popupSortByOpened: boolean;
  /** The click on the filter header (OnToggle_FilterPopup). */
  onToggleFilterPopup: () => void;
  /** The click on the sort header (OnToggle_SortPopup). */
  onToggleSortPopup: () => void;
}

/** A caret icon: up while its popup is open, else down. */
const Caret = ({ up }: { up: boolean }) => (
  <i className={`icon fa fa-caret-${up ? 'up' : 'down'} fa-1x`} data-icon="" />
);

export function AdminLandingView({
  id,
  userFirstName,
  isFetchingData,
  isDataFetched,
  eventsSummary,
  bottomBar,
  onEventCardClicked,
  eventFilter,
  popupFiltersOpened,
  popupSortByOpened,
  onToggleFilterPopup,
  onToggleSortPopup,
}: AdminLandingViewProps) {
  const prefix = id.replace('$', '');

  /* Content: the skeleton while fetching; else, once fetched, the card list or NoInformation_Orbit. */
  const events = isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b5`} inSkeletonLoadingId={OrbitSkeletonLoading.OrbitLanding} />
  ) : !isDataFetched ? null : eventsSummary.length > 0 ? (
    <OSList
      className="list list-group orbit-card-list"
      animateItems
      disableVirtualization
      source={eventsSummary}
      keyOf={(p, i) => `${p.event.EventId ?? ''}-${String(i)}`}
    >
      {(p, i) => (
        <div className="orbit-card-list-cont" data-container="">
          <OrbitEventCard
            id={`${prefix}-l1-7_${String(i)}-$b3`}
            inEventSummary={p.event}
            onClickedEvent={(eventSummary) => {
              onEventCardClicked(eventSummary, p.typeFriendly);
            }}
          />
        </div>
      )}
    </OSList>
  ) : (
    <OrbitNoInformation id={`${prefix}-$b4`} message={NO_ADMIN_EVENT_MESSAGE} />
  );
  /* Then the two popup roots. A closed Popup widget renders nothing (only its page effects). */
  const content = (
    <>
      {events}
      <div data-container="" id={`${prefix}-RootPlaceholder_Filters`}>
        <div
          className="backwards-compatibility orbit-landing-filters__popup-backdrop"
          data-container=""
          id={`${prefix}-Root_Filters`}
        >
          <OSPopupWidget showPopup={popupFiltersOpened} />
          {popupFiltersOpened && <NotCaptured name="Popup_Filters (Orbit_Blocks.Popup_OrbitLanding_Filters)" />}
        </div>
      </div>
      <div data-container="" id={`${prefix}-RootPlaceholder_Sort`}>
        <div
          className="backwards-compatibility orbit-landing-filters__popup-backdrop"
          data-container=""
          id={`${prefix}-Root_Sort`}
        >
          <OSPopupWidget showPopup={popupSortByOpened} />
          {popupSortByOpened && <NotCaptured name="Popup_Sort (Orbit_Blocks.Popup_OrbitLanding_Sort)" />}
        </div>
      </div>
    </>
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MenuAction_Menu} />}
        title={<i className="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon="" />}
        headerContent={
          <>
            <div className="orbit-admin-header-cont" data-container="">
              <div className="orbit-admin-header-text-cont" data-container="">
                <span className="orbit-admin-header-text" data-expression="">
                  {userFirstName}
                </span>
              </div>
            </div>
            <div className="orbit-landing-filters-cont" data-container="">
              <div
                className="orbit-landing-filters justify-content-flex-start"
                data-container=""
                style={{ cursor: 'pointer' }}
                onClick={onToggleFilterPopup}
              >
                <span className="bold color-orbit-primary-7 text-no-wrap margin-right-s" data-expression="">
                  {eventFilterLabelOf(eventFilter)}
                </span>
                <Caret up={popupFiltersOpened} />
              </div>
              <div
                className="orbit-landing-filters justify-content-flex-end"
                data-container=""
                style={{ cursor: 'pointer' }}
                onClick={onToggleSortPopup}
              >
                <span className="bold color-orbit-primary-7 text-no-wrap margin-right-s">Sort By</span>
                <Caret up={popupSortByOpened} />
              </div>
            </div>
          </>
        }
        content={content}
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
