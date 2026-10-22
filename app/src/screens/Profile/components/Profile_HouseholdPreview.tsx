// @os-block UBTConnect.App_Profile.Profile_HouseholdPreview
import { OSBlock } from '@/components/ui/os/OSBlock';
import { HouseholdDetails_Block } from '@/shared/UBTConnect/HouseholdDetails_Block';
import type { HouseholdPreviewStructure } from '@/shared/UBTConnect/lib/structures';
import { BottomSheet } from '@/shared/UBTConnectLibrary/BottomSheet';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface Profile_HouseholdPreviewProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** HouseholdId (Long Integer as text). */
  householdId: string;
  /** Preview (HouseholdPreviewStructure). */
  preview: HouseholdPreviewStructure;
  /** Event OnInitialized(Id): the BottomSheet's Initialized id, for BottomSheetOpen. */
  onOnInitialized?: (id: string) => void;
}

const CONTENT_PADDING = { GeneralSizeId: UBT_Size.None };

/** Household preview sheet of Profile (p:migration/screens/Profile/analysis/sources/pretty/UBTConnect.App_Profile.
    Profile_HouseholdPreview.mvc.js, view :183-262): BottomSheet titled "Preview Household Profile" without content
    padding; its content is an inert container (text-align left) with HouseholdDetails_Block in preview mode (isEnabled
    False, kebab menu shown, empty carousel tag). Initialized raises OnInitialized (:206-216). */
export function Profile_HouseholdPreview({ id, householdId, preview, onOnInitialized }: Profile_HouseholdPreviewProps) {
  const scope = id?.replace('$', '') ?? 'b60';
  return (
    <OSBlock name="App_Profile.Profile_HouseholdPreview" id={id}>
      <BottomSheet
        id={`${scope}-$b1`}
        title="Preview Household Profile"
        contentPadding={CONTENT_PADDING}
        onInitialized={onOnInitialized}
        content={
          <div data-container="" inert style={{ textAlign: 'left' }}>
            <HouseholdDetails_Block
              id={`${scope}-$b2`}
              isEnabled={false}
              householdId={householdId}
              inShowKebabMenu
              preview={preview}
            />
          </div>
        }
      />
    </OSBlock>
  );
}
