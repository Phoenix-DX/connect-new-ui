import { ButtonLoading } from '@/shared/osui/ButtonLoading';
import { Button } from '@/shared/UBTConnect_Utils/Button';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { FixedFooter } from '@/shared/UBTConnectLibrary/FixedFooter';
import { UBT_Color, UBT_Shadow, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface ContactUsDetailsFooterProps {
  /** ContentContainerId: the content container that the fixed footer pads. */
  contentContainerId: string;
  /** isSubmiting: Send shows the loading state. */
  isSubmiting: boolean;
  /** Not IsFormFilled, or isLoadingMainData: Send is disabled. */
  isDisabled: boolean;
  /** The Send button. */
  onSend: () => void;
}

/** ExpectedFooterHeight of the FixedFooter. */
const FOOTER_HEIGHT = 'calc(2 * var(--space-base) + var(--ubt-button-height-m))';

const FOOTER_OPTIONS = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Base },
  ShadowId: UBT_Shadow.ExtraSmallTop,
};

/** The fixed footer of ContactUsDetails: the Send button.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
export function ContactUsDetailsFooter({
  contentContainerId,
  isSubmiting,
  isDisabled,
  onSend,
}: ContactUsDetailsFooterProps) {
  return (
    <FixedFooter
      id="$b15"
      expectedFooterHeight={FOOTER_HEIGHT}
      contentContainerId={contentContainerId}
      useBottomBar={false}
    >
      <CustomContainer id="$b16" options={FOOTER_OPTIONS}>
        <ButtonLoading id="$b17" isLoading={isSubmiting}>
          <Button id="$b18" buttonText="Send" isDisabled={isDisabled} onButtonOnClick={onSend} />
        </ButtonLoading>
      </CustomContainer>
    </FixedFooter>
  );
}
