import { useState } from 'react';
import type { Milestone_Screen } from '@/api/event';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { getFormattedDateTime, getLocalOrbitMilestoneTypesById } from '@/lib/orbit/actions';
import { OrbitMilestoneType } from '@/lib/orbit/staticEntities';

/** The host allocation blocks of the Host Allocation accordion item (sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks
    .HostAllocation_List.mvc.js = HL, …HostAllocation_ListItem.mvc.js = HI, …HostAllocation_HelperItem.mvc.js = HH;
    captured dom/default.html:129-196). Only this route uses them.
    @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_List */

interface HostAllocation_ListItemProps {
  id: string;
  /** In_HostAllocationItem (Milestone_ScreenRec). */
  inHostAllocationItem: Milestone_Screen;
  /** Event OnClick_View. */
  onClickView: () => void;
}

/** HostAllocation_ListItem (HI view :150-205): the milestone type's icon (extendedProperties className = "icon " +
    MainIcon) and Name, plus ": " + GetFormattedDateTime(MilestoneDateTime, no time, no weekday) when the date is set;
    "View" raises OnClick_View. */
function HostAllocation_ListItem({ id, inHostAllocationItem, onClickView }: HostAllocation_ListItemProps) {
  const type = inHostAllocationItem.OrbitMilestoneType ?? {};
  const dateTime = inHostAllocationItem.MilestoneDateTime ?? '';
  const label = `${type.Name ?? ''}${
    dateTime !== '' ? `: ${getFormattedDateTime(dateTime, false, false, false, false, false, false)}` : ''
  }`;
  return (
    <OSBlock name="Orbit_Blocks.HostAllocation_ListItem" id={id}>
      <div className="host-allocation-list-item" data-container="">
        <div className="host-allocation-list-item-left" data-container="">
          <i className={`icon ${type.MainIcon ?? ''}`} data-icon="" />
          <span className="margin-left-base" data-expression="">
            {label}
          </span>
        </div>
        <div
          className="host-allocation-list-item-right"
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={onClickView}
        >
          <span data-expression="">View</span>
        </div>
      </div>
    </OSBlock>
  );
}

interface HostAllocation_HelperItemProps {
  id: string;
  /** Event OnClick_ViewHelpers(MilestoneName). */
  onClickViewHelpers: (milestoneName: string) => void;
}

/** HostAllocation_HelperItem (HH view :81-140, ctrl :335-360): the icon of the local milestone type Helper (aggregate
    GetLocalOrbitMilestoneTypeHelper, fetched at start, :274-276) and ItemName, set to "Helper" in OnReady; "View"
    raises OnClick_ViewHelpers(ItemName). */
function HostAllocation_HelperItem({ id, onClickViewHelpers }: HostAllocation_HelperItemProps) {
  /* ItemName: "" until OnReady sets it to "Helper" (HH :348-351), i.e. before the block is first shown. */
  const itemName = 'Helper';
  const [helperType] = useState(() => getLocalOrbitMilestoneTypesById(OrbitMilestoneType.Helper)[0] ?? {});
  return (
    <OSBlock name="Orbit_Blocks.HostAllocation_HelperItem" id={id}>
      <div className="host-allocation-list-item" data-container="">
        <div className="host-allocation-list-item-left" data-container="">
          <i className={`icon ${helperType.MainIcon ?? ''}`} data-icon="" />
          <span className="margin-left-base" data-expression="">
            {itemName}
          </span>
        </div>
        <div
          className="host-allocation-list-item-right"
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={() => {
            onClickViewHelpers(itemName);
          }}
        >
          <span data-expression="">View</span>
        </div>
      </div>
    </OSBlock>
  );
}

export interface HostAllocation_ListProps {
  /** OutSystems instance id of the block (`b1-$b6`). */
  id: string;
  /** In_HostAllocationList (Milestone_ScreenList). */
  inHostAllocationList: readonly Milestone_Screen[];
  /** Event OnClick_View(MilestoneId, MilestoneTypeId, MilestoneName, HostId). */
  onClickView: (milestoneId: string, milestoneTypeId: string, milestoneName: string, hostId: string) => void;
  /** Event OnClick_ViewHelpers(MilestoneName). */
  onClickViewHelpers: (milestoneName: string) => void;
}

/** HostAllocation_List (HL view :160-205): a virtualized List (animateItems, `position: relative` as captured) of
    HostAllocation_ListItem, whose OnClick_View raises OnClick_View with the row's MilestoneId, type Id, Title and
    MilestoneInfo.HostId (HL :177), then one HostAllocation_HelperItem. */
export function HostAllocation_List({
  id,
  inHostAllocationList,
  onClickView,
  onClickViewHelpers,
}: HostAllocation_ListProps) {
  const prefix = id.replace('$', '');
  return (
    <OSBlock name="Orbit_Blocks.HostAllocation_List" id={id}>
      <OSList
        className="list list-group host-allocation-list"
        animateItems
        positionRelative
        source={inHostAllocationList}
        keyOf={(p, i) => `${p.MilestoneId ?? ''}-${String(i)}`}
      >
        {(p, i) => (
          <HostAllocation_ListItem
            id={`${prefix}-l1-142803_${String(i)}-$b1`}
            inHostAllocationItem={p}
            onClickView={() => {
              onClickView(
                p.MilestoneId ?? '',
                p.OrbitMilestoneType?.Id ?? '',
                p.Title ?? '',
                p.MilestoneInfo?.HostId ?? '0',
              );
            }}
          />
        )}
      </OSList>
      <HostAllocation_HelperItem id={`${prefix}-$b2`} onClickViewHelpers={onClickViewHelpers} />
    </OSBlock>
  );
}
