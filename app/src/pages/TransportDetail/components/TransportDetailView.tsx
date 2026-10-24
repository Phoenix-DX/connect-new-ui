import type { ReactNode } from 'react';
import type { TransportDetails } from '@/api/event';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { ContactHelpdeskFooter } from '@/components/orbit/ContactHelpdeskFooter';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { TransportDetail } from './TransportDetail';

/** The view of a transport milestone, props only. Layout_Orbit with the CustomClass "orbit-detail orbit-header-center
    orbit-transport-detail " + In_HeaderClass, the Auto MenuIcon and the Title; Content: the skeleton of the milestone
    type while IsFetchingData, else the TransportDetail block once Get_TransportDetail is fetched; BottomBar:
    ContactHelpdesk_Footer (always). The flows are in `useTransportDetail`.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_TransportDetail */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI. */
const MENU_ACTION_AUTO = 'Auto';

export interface TransportDetailViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** In_HeaderClass: added to the CustomClass of the layout. */
  headerClass: string;
  /** Title: the header title. */
  title: string;
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** Get_TransportDetail.IsDataFetched: the transport shows. */
  isDataFetched: boolean;
  /** TransportDetail: the answer of Get_TransportDetail. */
  transportDetail: TransportDetails;
  /** The skeleton of the milestone type. */
  skeletonLoadingId: number;
  /** The click of ContactHelpdesk_Footer. */
  onContactHelpdesk: () => void;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
}

export function TransportDetailView(props: TransportDetailViewProps) {
  const { id, headerClass, title, isFetchingData, isDataFetched, transportDetail, skeletonLoadingId } = props;
  const prefix = id.replace('$', '');

  const content: ReactNode = isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b4`} inSkeletonLoadingId={skeletonLoadingId} />
  ) : isDataFetched ? (
    <TransportDetail id={`${prefix}-$b3`} TransportDetail={transportDetail} />
  ) : null;

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_TransportDetail" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass={`orbit-detail orbit-header-center orbit-transport-detail ${headerClass}`}
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={<span data-expression="">{title}</span>}
        content={content}
        bottomBar={<ContactHelpdeskFooter id={`${prefix}-$b5`} onClick={props.onContactHelpdesk} />}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
    </OSBlock>
  );
}
