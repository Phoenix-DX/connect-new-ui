import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_Item
    An item of a summary section: the title row (bold title, Placeholder_Status when In_HasPlaceholder), the Edit /
    Delete actions (Containers Visible = In_HasEdit / In_HasDelete; not rendered when hidden), then
    Placeholder_Content. The summary passes In_HasEdit and In_HasDelete False, so their events (Edit/Delete, only used
    by the data steps) are not wired here. */
export function HostSurvey_Item({
  id,
  inTitle,
  inHasPlaceholder,
  placeholderStatus,
  placeholderContent,
}: {
  id: string;
  inTitle: string;
  inHasPlaceholder: boolean;
  placeholderStatus?: ReactNode;
  placeholderContent?: ReactNode;
}) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_Item" id={id}>
      <div className="orbit-host-survey-item" data-container="">
        <div
          className="full-width display-flex flex-direction-row align-items-flex-start justify-content-space-between margin-bottom-m"
          data-container=""
        >
          <div
            className="display-flex flex-direction-row align-items-center justify-content-flex-start"
            data-container=""
          >
            <div className="bold" data-container="">
              <span data-expression="">{inTitle}</span>
            </div>
            {inHasPlaceholder && (
              <div className="margin-left-m" id={`${scope}-Placeholder_Status`}>
                {placeholderStatus}
              </div>
            )}
          </div>
          <div
            className="display-flex flex-direction-row align-items-center justify-content-flex-end color-orbit-primary-7 font-size-s bold"
            data-container=""
          />
        </div>
        <div className="orbit-host-survey-item-content" id={`${scope}-Placeholder_Content`}>
          {placeholderContent}
        </div>
      </div>
    </OSBlock>
  );
}
