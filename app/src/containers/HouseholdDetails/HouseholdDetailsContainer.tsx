import type { ReactNode } from 'react';
import { HouseholdDetailsView } from '@/components/household';
import { ShareableObject } from '@/components/share/ShareableObject';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { EntityDetailsActionsContainer } from '@/containers/EntityDetailsActions/EntityDetailsActionsContainer';
import { Connect_Entity, Type_ShareObject } from '@/shared/UBTConnect/lib/staticEntities';
import type { HouseholdPreviewStructure, UI_HouseholdMember } from '@/shared/UBTConnect/lib/structures';
import {
  useHouseholdDetails,
  type HouseholdDetailsFlags,
  type HouseholdDetailsParameters,
} from './hooks/useHouseholdDetails';

/** Where the household details come from: the server, or the server data with the account form that the Profile
    preview edits (Preview.UsePreview). Both fetch the household by its id. */
export type HouseholdDetailsSource =
  | { kind: 'server'; householdId: string }
  | { kind: 'preview'; householdId: string; preview: HouseholdPreviewStructure };

export interface HouseholdDetailsContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  source: HouseholdDetailsSource;
  /** The two flags of the household details (the caller reads them with useHouseholdDetailsFlags). */
  flags: HouseholdDetailsFlags;
  /** isEnabled (default true): false in the Profile preview (every link and action disabled). */
  isEnabled?: boolean;
  /** In_ShowKebabMenu: the kebab menu (edit, share) and the share sheet. */
  showKebabMenu?: boolean;
  /** In_CheckVisibility: only sent to the data actions (the server decides isVisible). */
  checkVisibility?: boolean;
  /** In_IsSkeletonOnly: hides the members until it turns false. */
  isSkeletonOnly?: boolean;
  /** In_HideActions: hides the call-to-action section on the About tag. */
  hideActions?: boolean;
  /** Placeholder Placeholder_CarouselTag (inside the image tag of the card). */
  carouselTag?: ReactNode;
  /** Event HouseholdDataFetched(LocalityName, CountryName, DeceasedOrAncestry_View), after every GetHousehold. */
  onHouseholdDataFetched?: (localityName: string, countryName: string, deceasedOrAncestryView: boolean) => void;
}

const NO_PREVIEW: HouseholdPreviewStructure = {};

/** The household details with their data (container criterion 1: server data, or the Profile preview data in the
    same tree). It runs the flows of useHouseholdDetails and renders HouseholdDetailsView, with the entity actions and
    the share sheet as slots.
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */
export function HouseholdDetailsContainer({
  id,
  source,
  flags,
  isEnabled = true,
  showKebabMenu = false,
  checkVisibility = false,
  isSkeletonOnly = false,
  hideActions = false,
  carouselTag,
  onHouseholdDataFetched,
}: HouseholdDetailsContainerProps) {
  const { householdId } = source;
  const inputs: HouseholdDetailsParameters = {
    householdId,
    isEnabled,
    preview: source.kind === 'preview' ? source.preview : NO_PREVIEW,
    showKebabMenu,
    checkVisibility,
    isSkeletonOnly,
    hideActions,
  };
  const details = useHouseholdDetails(inputs, flags, { onHouseholdDataFetched });
  const { state, content } = details;

  const entityActions = (
    <EntityDetailsActionsContainer
      entityId={householdId}
      contactPopUpOverrideOptions={{ Name: content.Name ?? '' }}
      isEnabled={isEnabled}
      entityType={Connect_Entity.Household}
      enableOptions={{
        EnableNotes: content.DisplayOptions?.IsDeceased !== true,
        EnableShare: content.DisplayOptions?.IsDeceased !== true,
      }}
      onOnChangeBookmark={details.onBookmarkChange}
    />
  );
  const renderMemberActions = (member: UI_HouseholdMember) => (
    <EntityDetailsActionsContainer
      enableOptions={{
        EnableCall: member.IsDeceased !== true,
        EnableEmail: member.IsDeceased !== true,
      }}
      entityType={Connect_Entity.Member}
      isEnabled={isEnabled}
      entityId={member.Id ?? '0'}
    />
  );
  const shareSheet = (
    <ShareSheetContainer
      inShareableObjectId={householdId}
      inIsOpen={state.isShareOpen}
      inShareObjectTypeId={Type_ShareObject.MyHousehold}
      onEventClosedShareSheet={details.onShareSheetClosed}
    >
      <ShareableObject
        inShareableObject={{
          ConnectEntityTypeId: Connect_Entity.Household,
          Id: householdId,
          Title: content.Name ?? '',
          Subtitle: content.FamilyNames ?? '',
          Location: `${content.LocalityName ?? ''}, ${content.CountryName ?? ''}`,
        }}
      />
    </ShareSheetContainer>
  );

  return (
    <HouseholdDetailsView
      id={id}
      householdId={householdId}
      isEnabled={isEnabled}
      showKebabMenu={showKebabMenu}
      hideActions={hideActions}
      household={state.household}
      dataFetchStatus={state.household.dataFetchStatus}
      coordinates={state.coordinates}
      tags={state.tags}
      selectedTag={state.selectedTag}
      isBookmarked={state.isBookmarked}
      isSkeletonOnly={state.isSkeletonOnly}
      hidePhotobookActions={state.hidePhotobookActions}
      timelineImages={state.timelineImages}
      carouselTag={carouselTag}
      entityActions={entityActions}
      renderMemberActions={renderMemberActions}
      shareSheet={shareSheet}
      onTagsChanged={details.onTagsChanged}
      onEdit={details.onEdit}
      onShare={details.onShare}
      onLocalityClick={details.onLocalityClick}
      onSupperMeetingClick={details.onSupperMeetingClick}
      onPhotobookClick={details.onPhotobookClick}
      onMemberClick={details.onMemberClick}
      onNonMemberClick={details.onNonMemberClick}
      onTimelineDateSelected={details.onTimelineDateSelected}
    />
  );
}
