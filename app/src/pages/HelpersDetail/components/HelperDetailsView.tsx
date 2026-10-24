import type { ReactNode } from 'react';
import type { HelperItem } from '@/api/event';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
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
  getFormattedStringFromHelperType,
  getSkeletonLoadingIdFromMilestoneTypeId,
} from '@/pages/HelpersDetail/hooks/helperDetailsActions';
import type { HelperDetailsFlows } from '@/pages/HelpersDetail/hooks/useHelperDetails';
import type { MemberInformation } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';
import { SectionExpandable } from '@/components/ui/legacy/SectionExpandable';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';

/** The view of the helpers of a hosting household, props only. The flows are in `useHelperDetails`.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction that the block gives MenuIcon__UpdatedOSUI. */
const MENU_ACTION_AUTO = 'Auto';

export interface HelperDetailsViewProps extends HelperDetailsFlows {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** In_PreloadEventName: the event name of the header. */
  preloadEventName: string;
  /** In_PreloadMilestoneName: the milestone name of the header. */
  preloadMilestoneName: string;
  /** In_OrbitMilestoneTypeId: the milestone type of the header and of the skeleton. */
  orbitMilestoneTypeId: string;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
}

/** Layout_Orbit (CustomClass "orbit-detail") with the Auto MenuIcon and the MilestoneHeader of the preloaded names.
    Content: the skeleton while IsFetchingData; otherwise, with helpers, an accordion with one item per role (the
    formatted role and its member cards); without helpers, once fetched, NoInformation "There is no Helper available.".
    BottomBar: ContactHelpdesk_Footer when there are helpers and no fetch runs. After the layout: the legacy
    access-restricted dialog and ContactPopup_ByPhone. */
export function HelperDetailsView(props: HelperDetailsViewProps) {
  const { id, helperData, isFetchingData, isDataFetched, orbitMilestoneTypeId } = props;
  const prefix = id.replace('$', '');
  const hasHelpers = helperData.Helpers.length > 0;

  /** The helper accordion: one DEPRECATED_AccordionItem per role ("orbit-accordion-item", " margin-top-s" after the
      first, no padding; title GetFormattedStringFromHelperType(Role)) with the member cards of the role
      (Is_ShowPersonalInfo, no dot, In_HouseholderId of the member). The item ids follow the block aliases (not
      captured). */
  const helpersAccordion = (
    <div className="full-width margin-top-m" data-container="">
      <OrbitAccordion id={`${prefix}-$b4`} inExtendedClass="" inMultipleItems>
        <OSList
          className="list list-group"
          animateItems
          disableVirtualization
          source={helperData.Helpers}
          keyOf={(h: HelperItem, i) => `${h.Role}-${String(i)}`}
        >
          {(h, i) => (
            <SectionExpandable
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
                      <MemberInformationCard
                        id={`${prefix}-l6_${String(i)}-l9_${String(k)}-$b6`}
                        inMemberInformation={mi}
                        isShowPersonalInfo
                        inDisplayDot={false}
                        inHouseholderId={mi.HouseholderId ?? ''}
                        getSignedImageURL={props.getSignedImageURL}
                        onClickedMember={props.onClickedMember}
                        onClickedPhone={props.onClickedMemberPhone}
                      />
                    </div>
                  )}
                </OSList>
              }
            />
          )}
        </OSList>
      </OrbitAccordion>
    </div>
  );

  const content: ReactNode = isFetchingData ? (
    <OrbitSkeleton
      id={`${prefix}-$b8`}
      inSkeletonLoadingId={getSkeletonLoadingIdFromMilestoneTypeId(orbitMilestoneTypeId)}
    />
  ) : hasHelpers ? (
    helpersAccordion
  ) : isDataFetched ? (
    <OrbitNoInformation id={`${prefix}-$b7`} message="There is no Helper available." />
  ) : null;

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_HelperDetails" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={
          <MilestoneHeader
            id={`${prefix}-$b3`}
            inEventName={props.preloadEventName}
            inMilestoneName={props.preloadMilestoneName}
            inOrbitMilestoneTypeId={orbitMilestoneTypeId}
          />
        }
        content={content}
        bottomBar={
          hasHelpers && !isFetchingData ? (
            <ContactHelpdeskFooter id={`${prefix}-$b9`} onClick={props.onContactHelpdesk} />
          ) : null
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
      <DialogAccessRestrictedActionLegacy id={`${prefix}-FreeSubscriptionAlert`} scope={`${prefix}-b10`} />
      <ContactPopupByPhone
        id={`${prefix}-$b11`}
        inCallPopupData={props.contactByPhoneData}
        onEventCancel={props.onContactByPhoneCancel}
        onEventCall={props.onCallClicked}
      />
    </OSBlock>
  );
}
