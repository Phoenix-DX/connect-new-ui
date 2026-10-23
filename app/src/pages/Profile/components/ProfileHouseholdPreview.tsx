import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { BottomSheet } from '@/shared/UBTConnectLibrary/BottomSheet';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface ProfileHouseholdPreviewProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event OnInitialized(Id): the BottomSheet's Initialized id, for BottomSheetOpen. */
  onOnInitialized?: (id: string) => void;
  /** HouseholdDetails_Block in preview mode, with the instance id that it gets in this block. A component does not
      render a container, so the page gives it. */
  renderHousehold: (id: string) => ReactNode;
}

const CONTENT_PADDING = { GeneralSizeId: UBT_Size.None };

/** The household preview sheet of Profile: a BottomSheet titled "Preview Household Profile" without content padding.
    Its content is an inert container (text-align left) with HouseholdDetails_Block in preview mode (isEnabled False,
    kebab menu shown, empty carousel tag). Initialized raises OnInitialized.
    @origin UBTConnect.App_Profile.Profile_HouseholdPreview */
export function ProfileHouseholdPreview({ id, onOnInitialized, renderHousehold }: ProfileHouseholdPreviewProps) {
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
            {renderHousehold(`${scope}-$b2`)}
          </div>
        }
      />
    </OSBlock>
  );
}
