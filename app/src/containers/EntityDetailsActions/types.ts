/** @origin UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions */
import type { ActionsMenuEnableOptions } from '@/lib/ubtConnectLibrary/structures';
import type { ContactPopUp_OverrideOptions } from '@/lib/ubtConnectUtils/structures';

export interface EntityDetailsActionsContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** IsEnabled (default true). */
  isEnabled?: boolean;
  /** EntityType: Connect_Entity identifier. */
  entityType?: string;
  /** EntityId (Long Integer as text; "0" = none). */
  entityId?: string;
  /** ContactPopUp_OverrideOptions: image and name shown in the popups. */
  contactPopUpOverrideOptions?: ContactPopUp_OverrideOptions;
  /** EnableOptions: ActionsMenu enable flags (record default). */
  enableOptions?: ActionsMenuEnableOptions;
  /** useViewDetails: adds "View details" for households, supper meetings and schools. */
  useViewDetails?: boolean;
  /** In_LocalityId (Text, default ""): with an interchange, the notes item id is "<In_LocalityId>:<EntityId>". */
  inLocalityId?: string;
  /** Event ViewDetails_OnClick. */
  onViewDetailsOnClick?: () => void;
  /** Event OnChange_Bookmark(IsBookmarked). */
  onOnChangeBookmark?: (isBookmarked: boolean) => void;
  /** Event Event_MenuEdit: declared by the block, never raised (no flow triggers it). */
  onEventMenuEdit?: () => void;
}
