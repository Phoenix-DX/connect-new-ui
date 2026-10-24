import type { ReactNode } from 'react';
import type { AdminEventItem, Event_Screen } from '@/api/event';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OrbitEventCard } from '@/components/orbit/OrbitEventCard';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { MenuAction_Menu } from '@/pages/OrbitAdminLanding/staticEntities';
import { OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';

/** The view of the Orbit admin landing, props only: Layout_Orbit with the back MenuIcon, the Orbit flag as title and
    the admin's first name in the header. The content is the OrbitLanding skeleton while fetching, then the Card_Event
    list of the admin events, or NoInformation_Orbit when there is none. The flows are in `useAdminLanding`.
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
}

export function AdminLandingView({
  id,
  userFirstName,
  isFetchingData,
  isDataFetched,
  eventsSummary,
  bottomBar,
  onEventCardClicked,
}: AdminLandingViewProps) {
  const prefix = id.replace('$', '');

  /* Content: the skeleton while fetching; else, once fetched, the card list or NoInformation_Orbit. */
  const content = isFetchingData ? (
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

  return (
    <OSBlock name="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MenuAction_Menu} />}
        title={<i className="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon="" />}
        headerContent={
          <div className="orbit-admin-header-cont" data-container="">
            <div className="orbit-admin-header-text-cont" data-container="">
              <span className="orbit-admin-header-text" data-expression="">
                {userFirstName}
              </span>
            </div>
          </div>
        }
        content={content}
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
