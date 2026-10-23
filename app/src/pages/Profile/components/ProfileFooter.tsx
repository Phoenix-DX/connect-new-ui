import { SHADOW_EXTRA_SMALL_TOP } from '@/pages/Profile/staticEntities';
import { ButtonLoading } from '@/shared/osui/ButtonLoading';
import { Button } from '@/shared/UBTConnect_Utils/Button';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { FixedFooter } from '@/shared/UBTConnectLibrary/FixedFooter';
import { UBT_ButtonType, UBT_Color, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface ProfileFooterProps {
  /** MainContainerId: the content container of the layout, which the fixed footer pads. */
  contentContainerId: string;
  /** isLoading_Submit: both buttons are disabled and Save shows the loading state. */
  isLoadingSubmit: boolean;
  /** HasChanges: Save is enabled. */
  hasChanges: boolean;
  /** The Close button. */
  onClose: () => void;
  /** The Save button. */
  onSave: () => void;
}

const FOOTER_OPTIONS = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Base },
  ShadowId: SHADOW_EXTRA_SMALL_TOP,
};

/** The fixed footer of the Profile screen: the buttons Close and Save.
    @origin UBTConnect.App_Profile.Profile */
export function ProfileFooter({
  contentContainerId,
  isLoadingSubmit,
  hasChanges,
  onClose,
  onSave,
}: ProfileFooterProps) {
  return (
    <FixedFooter
      id="$b49"
      contentContainerId={contentContainerId}
      useBottomBar={false}
      expectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))"
    >
      <CustomContainer id="$b50" options={FOOTER_OPTIONS}>
        <Columns_Two
          id="$b51"
          columnOptions={{ SpacingSize: UBT_Size.Small }}
          left={
            <Button
              id="$b52"
              isDisabled={isLoadingSubmit}
              buttonOptions={{ UBT_ButtonTypeId: UBT_ButtonType.Secondary }}
              buttonText="Close"
              onButtonOnClick={onClose}
            />
          }
          right={
            <ButtonLoading id="$b53" isLoading={isLoadingSubmit}>
              <Button
                id="$b54"
                isDisabled={!hasChanges || isLoadingSubmit}
                buttonOptions={{ UBT_ButtonTypeId: UBT_ButtonType.Primary }}
                buttonText="Save"
                onButtonOnClick={onSave}
              />
            </ButtonLoading>
          }
        />
      </CustomContainer>
    </FixedFooter>
  );
}
