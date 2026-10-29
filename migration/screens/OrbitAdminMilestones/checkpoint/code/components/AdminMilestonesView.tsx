import type { ReactNode } from 'react';
import type { Milestone_Screen } from '@/api/event';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { MilestoneCard } from '@/components/orbit/MilestoneCard';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import { MenuAction_Menu } from '@/pages/OrbitAdminMilestones/staticEntities';

/** The view of the milestones of an Orbit admin event, props only: Layout_Orbit with the MenuIcon, the Orbit flag as
    title and the admin's first name in the header. The content is the OrbitLanding skeleton while fetching, then the
    Card_Milestone list of the milestones, or NoInformation_Orbit when there is none. The flows are in
    `useAdminMilestones`.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones */

const NO_MILESTONE_MESSAGE =
  'There are no event milestones available for QR scanning. Only milestones from yesterday, today or tomorrow are shown. If you have any questions, please contact your regional Orbit helpdesk.';

interface AdminMilestonesViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** UserFirstName: the header text. */
  userFirstName: string;
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** Get_AdminMilestoneList.IsDataFetched: the list or the "no milestone" line shows (when not fetching). */
  isDataFetched: boolean;
  /** Milestones. */
  milestones: Milestone_Screen[];
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Card_Milestone ClickedMilestone, with the current row of the list. */
  onMilestoneCardClicked: (milestone: Milestone_Screen) => void;
}

export function AdminMilestonesView({
  id,
  userFirstName,
  isFetchingData,
  isDataFetched,
  milestones,
  bottomBar,
  onMilestoneCardClicked,
}: AdminMilestonesViewProps) {
  const prefix = id.replace('$', '');

  /* Content: the skeleton while fetching; else, once fetched, the card list or NoInformation_Orbit. */
  const content = isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b5`} inSkeletonLoadingId={OrbitSkeletonLoading.OrbitLanding} />
  ) : !isDataFetched ? null : milestones.length > 0 ? (
    <OSList
      className="list list-group orbit-card-list"
      animateItems
      disableVirtualization
      source={milestones}
      keyOf={(m, i) => `${m.MilestoneId ?? ''}-${String(i)}`}
    >
      {(m, i) => (
        <div className="orbit-card-list-cont" data-container="">
          <MilestoneCard
            id={`${prefix}-l1-7_${String(i)}-$b3`}
            inMilestoneSummary={m}
            onClickedMilestone={() => {
              onMilestoneCardClicked(m);
            }}
          />
        </div>
      )}
    </OSList>
  ) : (
    <OrbitNoInformation id={`${prefix}-$b4`} message={NO_MILESTONE_MESSAGE} />
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones" id={id}>
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
