import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_Item
    An item of a survey list (HostSurvey_Item.mvc.js view): the title row (bold In_Title, Placeholder_Status when
    In_HasPlaceholder), the actions (Edit: Container Visible = In_HasEdit, icon orbit-icon-edit, event Click_Edit;
    Delete: Container Visible = In_HasDelete, " margin-left-m" after an Edit, icon orbit-icon-delete, event
    Click_Delete; animated containers, not rendered when hidden), then Placeholder_Content. */
export function HostSurvey_Item({
  id,
  inTitle,
  inHasEdit = false,
  inHasDelete = false,
  inHasPlaceholder,
  placeholderStatus,
  placeholderContent,
  onClickEdit,
  onClickDelete,
}: {
  id: string;
  inTitle: string;
  /** In_HasEdit (default False). */
  inHasEdit?: boolean;
  /** In_HasDelete (default False). */
  inHasDelete?: boolean;
  inHasPlaceholder: boolean;
  placeholderStatus?: ReactNode;
  placeholderContent?: ReactNode;
  /** Event Click_Edit. */
  onClickEdit?: () => void;
  /** Event Click_Delete. */
  onClickDelete?: () => void;
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
          >
            {inHasEdit && (
              <div
                className="display-flex flex-direction-row align-items-center justify-content-flex-end"
                data-container=""
                onClick={onClickEdit}
              >
                <i className="icon orbit-icon-edit" data-icon="" />
                <span className="margin-left-s">Edit</span>
              </div>
            )}
            {inHasDelete && (
              <div
                className={`display-flex align-items-center justify-content-flex-end${inHasEdit ? ' margin-left-m' : ''}`}
                data-container=""
                onClick={onClickDelete}
              >
                <i className="icon orbit-icon-delete" data-icon="" />
                <span className="margin-left-s" data-expression="">
                  Delete
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="orbit-host-survey-item-content" id={`${scope}-Placeholder_Content`}>
          {placeholderContent}
        </div>
      </div>
    </OSBlock>
  );
}
