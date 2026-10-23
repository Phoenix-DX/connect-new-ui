import type { AccountForm } from '@/pages/Profile/hooks/profileState';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { FormInput } from './FormInput';
import { FormSwitch } from './FormSwitch';
import {
  FIELD_LABEL,
  NOTE_S,
  NOTE_XS,
  PAD_BOTTOM_BASE,
  PAD_BOTTOM_S,
  PAD_TOP_BASE_BOTTOM_S,
  SECTION_PADDING,
  SECTION_TITLE,
  SWITCH_COLUMNS,
} from './formOptions';

type PersonalInformation = AccountForm['AccountForm_PersonalInformation'];

export interface PersonalInformationSectionProps {
  /** AccountForm.AccountForm_PersonalInformation. */
  personal: PersonalInformation;
  /** An input changed (the attributes that changed). */
  onChange: (patch: Partial<PersonalInformation>) => void;
  /** The switch "Display Month and Year of Birth, and Age" changed. */
  onShowAgeChange: (checked: boolean) => void;
}

/** The section Personal Information of the Profile form (the container PersonalInfo): the read-only username, the
    email, and the switch that shows the birth date and the age.
    @origin UBTConnect.App_Profile.Profile */
export function PersonalInformationSection({ personal, onChange, onShowAgeChange }: PersonalInformationSectionProps) {
  return (
    <CustomContainer id="PersonalInfo" options={SECTION_PADDING}>
      <CustomText
        id="PersonalInformation"
        inText="Personal Information"
        inTextOptions={SECTION_TITLE}
        inPaddingOptions={PAD_BOTTOM_BASE}
      />
      <CustomText
        id="PleaseNote"
        inText="Please note that all changes may take up to 48 hours to show on your profile."
        inTextOptions={NOTE_S}
        inPaddingOptions={PAD_BOTTOM_BASE}
      />
      <CustomText id="Username" inText="Username" inTextOptions={FIELD_LABEL} inPaddingOptions={PAD_BOTTOM_S} />
      <FormInput
        id="Input_Username"
        type="text"
        enabled={false}
        value={personal.Username}
        onChange={(v) => {
          onChange({ Username: v });
        }}
      />
      <CustomText id="Email" inText="Email" inTextOptions={FIELD_LABEL} inPaddingOptions={PAD_TOP_BASE_BOTTOM_S} />
      <FormInput
        id="Input_Email"
        type="email"
        enabled
        value={personal.Email}
        onChange={(v) => {
          onChange({ Email: v });
        }}
      />
      <CustomText
        id="PleaseNote2"
        inText="Please note that if you are a householder, changes to your email address will also apply to your Global Media Stream login."
        inTextOptions={NOTE_S}
        inPaddingOptions={{ TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Base }}
      />
      <Columns_Two
        id="BirthDateandAge"
        columnOptions={SWITCH_COLUMNS}
        left={
          <CustomText
            id="BirthDateandAgeText"
            inText="Display Month and Year of Birth, and Age"
            inTextOptions={FIELD_LABEL}
            inPaddingOptions={PAD_BOTTOM_S}
            fitContent
          />
        }
        right={<FormSwitch id="Switch1" checked={personal.ShowLifeCycleDates} onChange={onShowAgeChange} />}
      />
      <CustomText
        id="BirthDateandAgeNote"
        inText="Please note that changes may take up to 12 hours to show in the app."
        inTextOptions={NOTE_XS}
        inPaddingOptions={PAD_BOTTOM_BASE}
      />
    </CustomContainer>
  );
}
