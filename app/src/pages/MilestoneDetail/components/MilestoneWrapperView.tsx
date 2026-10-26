import type { ReactNode } from 'react';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { AccommodationHostInputs } from '@/pages/MilestoneDetail/hooks/accommodationHostState';
import type { MilestoneWrapperBody } from '@/pages/MilestoneDetail/hooks/milestoneWrapperState';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';

/** What the wrapper gives the block of the accommodation host: its instance id, its inputs and its placeholders. */
export interface AccommodationHostSlot {
  id: string;
  inputs: AccommodationHostInputs;
  menu: ReactNode;
  commonUIElements: ReactNode;
}

export interface MilestoneWrapperViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** The part of the block that shows (useMilestoneWrapper). */
  body: MilestoneWrapperBody;
  /** In_EventName: the title of the Failed layout. */
  eventName: string;
  /** Placeholder Menu_AccomodationHost (the other types' placeholders are not built: Q5). */
  menuAccomodationHost?: ReactNode;
  /** Placeholder CommonUI_Elements_AccomodationHost. */
  commonUIElementsAccomodationHost?: ReactNode;
  /** ScreenBlock_AccommodationHost, which the page renders with its own flows. */
  renderAccommodationHost: (slot: AccommodationHostSlot) => ReactNode;
}

/** The milestone detail by type, props only:
    - the skeleton (Skeleton_Loading MilestoneWrapper);
    - the Failed layout: Layout_Orbit "orbit-detail" titled In_EventName ("Event not found" when empty) with
      NoInformation_Orbit "This Event could not be found. …";
    - the block of the milestone type: meal guest / host / helper → ScreenBlock_MealGuest / MealHost / MealHelper;
      accommodation guest / host / helper → ScreenBlock_AccommodationGuest / AccommodationHost / AccommodationHelper.
      Only ScreenBlock_AccommodationHost was captured: the other blocks render <NotCaptured> (Q5);
    - any other type renders nothing.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper */
export function MilestoneWrapperView({
  id,
  body,
  eventName,
  menuAccomodationHost,
  commonUIElementsAccomodationHost,
  renderAccommodationHost,
}: MilestoneWrapperViewProps) {
  const prefix = id.replace('$', '');

  let content: ReactNode = null;
  switch (body.kind) {
    case 'skeleton':
      content = <OrbitSkeleton id={`${prefix}-$b9`} inSkeletonLoadingId={OrbitSkeletonLoading.MilestoneWrapper} />;
      break;
    case 'failed':
      content = (
        <OrbitLayout
          id={`${prefix}-$b7`}
          customClass="orbit-detail"
          menu={<div id={`${prefix}-Menu_Failed`} />}
          title={<span data-expression="">{eventName !== '' ? eventName : 'Event not found'}</span>}
          content={
            <OrbitNoInformation
              id={`${prefix}-$b8`}
              message="This Event could not be found. Please check again later or contact the Orbit Helpdesk if you have any questions."
            />
          }
          commonUIElements={<div id={`${prefix}-CommonUI_Elements_Failed`} />}
        />
      );
      break;
    case 'accommodationHost':
      content = renderAccommodationHost({
        id: `${prefix}-$b5`,
        inputs: body.inputs,
        menu: <div id={`${prefix}-Menu_AccomodationHost`}>{menuAccomodationHost}</div>,
        commonUIElements: (
          <div id={`${prefix}-CommonUI_Elements_AccomodationHost`}>{commonUIElementsAccomodationHost}</div>
        ),
      });
      break;
    case 'notCaptured':
      content = <NotCaptured name={`ScreenBlock_MilestoneWrapper: milestone type ${body.milestoneTypeId} (Q5)`} />;
      break;
    case 'none':
      break;
  }

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper" id={id}>
      {content}
    </OSBlock>
  );
}
