import { ICON_CONTENT_COPY } from '@/pages/Profile/staticEntities';
import { InputWithIcon } from '@/components/ui/InputWithIcon';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { UBT_Color } from '@/lib/ubtConnectLibrary/staticEntities';
import { FormInput } from './FormInput';
import {
  FIELD_LABEL,
  PAD_BOTTOM_BASE,
  PAD_BOTTOM_S,
  PAD_TOP_BASE_BOTTOM_S,
  SECTION_PADDING,
  SECTION_TITLE,
} from './formOptions';

export interface IdentificationSectionProps {
  /** AccountFormOriginal.AccountForm_IdentificationInformation.MemberId. */
  memberId: string;
  /** AccountFormOriginal.AccountForm_IdentificationInformation.AccountNumber. */
  accountNumber: string;
  /** The copy icon of the account number. */
  onCopyAccountNumber: () => void;
}

/** The section Identification of the Profile form (the container IdentificationInfo): the ContactBase ID and the UBT
    account number, both read only, the account number with a copy icon.
    @origin UBTConnect.App_Profile.Profile */
export function IdentificationSection({ memberId, accountNumber, onCopyAccountNumber }: IdentificationSectionProps) {
  return (
    <CustomContainer id="IdentificationInfo" options={SECTION_PADDING}>
      <CustomText
        id="Identification"
        inText="Identification"
        inTextOptions={SECTION_TITLE}
        inPaddingOptions={PAD_BOTTOM_BASE}
      />
      <CustomText
        id="ContactBaseID"
        inText="ContactBase ID"
        inTextOptions={FIELD_LABEL}
        inPaddingOptions={PAD_BOTTOM_S}
      />
      <FormInput id="Input_ContactBaseId" type="text" enabled={false} value={memberId} />
      <CustomText
        id="UBTAccountNumber"
        inText="UBT Account Number"
        inTextOptions={FIELD_LABEL}
        inPaddingOptions={PAD_TOP_BASE_BOTTOM_S}
      />
      <InputWithIcon
        id="$b16"
        alignIconRight
        icon={
          <Icon id="$b17" inIconId={ICON_CONTENT_COPY} inColorId={UBT_Color.Neutral7} onClick={onCopyAccountNumber} />
        }
        input={<FormInput id="Input_UBTAccountNumber" type="text" enabled={false} value={accountNumber} />}
      />
    </CustomContainer>
  );
}
