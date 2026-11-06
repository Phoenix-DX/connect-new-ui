import type { ReactNode } from 'react';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { MilestoneBlockKind } from '@/api/event';
import type { AccommodationHostInputs } from '@/pages/MilestoneDetail/hooks/accommodationHostState';
import type { MilestoneWrapperBody } from '@/pages/MilestoneDetail/hooks/milestoneWrapperState';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';

/** What the wrapper gives the block of the accommodation host: its instance id, its inputs and its placeholders. */
export interface AccommodationHostSlot {
  id: string;
  inputs: AccommodationHostInputs;
  menu: ReactNode;
  commonUIElements: ReactNode;
}

/** What the wrapper gives one of the five other milestone blocks: the same as AccommodationHost, and the block. */
export interface MilestoneBlockSlot extends AccommodationHostSlot {
  block: MilestoneBlockKind;
}

/** The instance alias of each block in the wrapper and the names of the placeholders that the wrapper passes it
    (MealHelper and AccommodationHelper get empty placeholders: block:601-602, :983-984). */
const BLOCK_SLOTS: Readonly<Record<MilestoneBlockKind, { alias: string; placeholders?: string }>> = {
  mealGuest: { alias: '1', placeholders: 'MealGuest' },
  mealHost: { alias: '2', placeholders: 'MealHost' },
  mealHelper: { alias: '3' },
  accommodationGuest: { alias: '4', placeholders: 'AccommodationGuest' },
  accommodationHelper: { alias: '6' },
};

export interface MilestoneWrapperViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** The part of the block that shows (useMilestoneWrapper). */
  body: MilestoneWrapperBody;
  /** In_EventName: the title of the Failed layout. */
  eventName: string;
  /** Placeholder Menu_AccomodationHost. */
  menuAccomodationHost?: ReactNode;
  /** Placeholder CommonUI_Elements_AccomodationHost. */
  commonUIElementsAccomodationHost?: ReactNode;
  /** Placeholders CommonUI_Elements_MealGuest, _MealHost and _AccommodationGuest (the screen fills each one; the Menu_
      placeholders stay empty). */
  commonUIElements?: Partial<Record<MilestoneBlockKind, ReactNode>>;
  /** ScreenBlock_AccommodationHost, which the page renders with its own flows. */
  renderAccommodationHost: (slot: AccommodationHostSlot) => ReactNode;
  /** One of the five other milestone blocks, which the page renders with its own flows. */
  renderMilestoneBlock: (slot: MilestoneBlockSlot) => ReactNode;
}

/** The milestone detail by type, props only:
    - the skeleton (Skeleton_Loading MilestoneWrapper);
    - the Failed layout: Layout_Orbit "orbit-detail" titled In_EventName ("Event not found" when empty) with
      NoInformation_Orbit "This Event could not be found. …";
    - the block of the milestone type: meal guest / host / helper → ScreenBlock_MealGuest / MealHost / MealHelper;
      accommodation guest / host / helper → ScreenBlock_AccommodationGuest / AccommodationHost / AccommodationHelper
      (decision Q3 of Legacy_OrbitEventsFlow: all six built);
    - any other type renders nothing.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper */
export function MilestoneWrapperView({
  id,
  body,
  eventName,
  menuAccomodationHost,
  commonUIElementsAccomodationHost,
  commonUIElements,
  renderAccommodationHost,
  renderMilestoneBlock,
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
    case 'milestoneBlock': {
      const slot = BLOCK_SLOTS[body.block];
      const names = slot.placeholders;
      content = renderMilestoneBlock({
        block: body.block,
        id: `${prefix}-$b${slot.alias}`,
        inputs: body.inputs,
        menu: names === undefined ? undefined : <div id={`${prefix}-Menu_${names}`} />,
        commonUIElements:
          names === undefined ? undefined : (
            <div id={`${prefix}-CommonUI_Elements_${names}`}>{commonUIElements?.[body.block]}</div>
          ),
      });
      break;
    }
    case 'none':
      break;
  }

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper" id={id}>
      {content}
    </OSBlock>
  );
}
