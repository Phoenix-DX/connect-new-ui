import { ButtonLoading } from '@/shared/osui/ButtonLoading';
import { ActionButton } from '@/components/ui/ActionButton';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { FixedFooter } from '@/components/ui/FixedFooter';
import { UBT_Color, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { ContainerOptions } from '@/shared/UBTConnectLibrary/lib/structures';
import { UBT_Shadow_ExtraSmallTop } from '@/pages/Services/staticEntities';

export interface ServicesFooterProps {
  /** ContentContainerId: the content container that the fixed footer pads. */
  contentContainerId: string;
  /** IsLoading: a save runs. The button shows the loading state and is disabled. */
  isLoading: boolean;
  /** The "Save changes" button. */
  onSaveChanges: () => void;
}

/** ExpectedFooterHeight of the FixedFooter. */
const FOOTER_HEIGHT = 'calc(2 * var(--space-base) + var(--ubt-button-height-m))';

const FOOTER_OPTIONS: ContainerOptions = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Base },
  ShadowId: UBT_Shadow_ExtraSmallTop,
};

/** The fixed footer of Services: the "Save changes" button.
    @origin UBTConnect.App_Services.Services */
export function ServicesFooter({ contentContainerId, isLoading, onSaveChanges }: ServicesFooterProps) {
  return (
    <FixedFooter
      id="$b27"
      useBottomBar={false}
      expectedFooterHeight={FOOTER_HEIGHT}
      contentContainerId={contentContainerId}
    >
      <CustomContainer id="$b28" options={FOOTER_OPTIONS}>
        <ButtonLoading id="$b29" isLoading={isLoading}>
          <ActionButton id="$b30" buttonText="Save changes" isDisabled={isLoading} onButtonOnClick={onSaveChanges} />
        </ButtonLoading>
      </CustomContainer>
    </FixedFooter>
  );
}
