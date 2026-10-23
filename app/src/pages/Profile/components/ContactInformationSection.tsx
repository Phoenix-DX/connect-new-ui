import type { AccountForm } from '@/pages/Profile/hooks/profileState';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { FormInput } from './FormInput';
import { FormSwitch } from './FormSwitch';
import {
  FIELD_LABEL,
  NOTE_XS,
  PAD_BOTTOM_BASE,
  PAD_TOP_BASE_BOTTOM_S,
  SECTION_PADDING,
  SECTION_TITLE,
  SWITCH_COLUMNS,
  SWITCH_ROW_PADDING,
} from './formOptions';

type ContactInformation = AccountForm['AccountForm_ContactInformation'];

export interface ContactInformationSectionProps {
  /** AccountForm.AccountForm_ContactInformation. */
  contact: ContactInformation;
  /** isHouseholder: only the householder can edit the home number. */
  isHouseholder: boolean;
  /** The switches Display mobile / work number and their notes (householder or spouse). */
  showSwitches: boolean;
  /** An input or a switch changed (the attributes that changed). */
  onChange: (patch: Partial<ContactInformation>) => void;
}

/** The section Contact Information of the Profile form (the container ContactInfo): the home, mobile and work numbers;
    for the householder and the spouse, a switch and a note that show or hide the mobile and the work number.
    @origin UBTConnect.App_Profile.Profile */
export function ContactInformationSection({
  contact,
  isHouseholder,
  showSwitches,
  onChange,
}: ContactInformationSectionProps) {
  return (
    <CustomContainer id="ContactInfo" options={SECTION_PADDING}>
      <CustomText
        id="ContactInformation"
        inText="Contact Information"
        inTextOptions={SECTION_TITLE}
        inPaddingOptions={PAD_BOTTOM_BASE}
      />
      <CustomText
        id="HomeNumber"
        inText="Home Number"
        inTextOptions={FIELD_LABEL}
        inPaddingOptions={PAD_TOP_BASE_BOTTOM_S}
      />
      <FormInput
        id="HomeNumber2"
        type="tel"
        enabled={isHouseholder}
        value={contact.HomeNumber}
        onChange={(v) => {
          onChange({ HomeNumber: v });
        }}
      />
      <CustomContainer id="MobileNumber_Container" options={SWITCH_ROW_PADDING}>
        <Columns_Two
          id="MobileNumber"
          columnOptions={SWITCH_COLUMNS}
          left={<CustomText id="MobileNumberText" inText="Mobile Number" inTextOptions={FIELD_LABEL} />}
          right={
            showSwitches && (
              <FormSwitch
                id="Switch2"
                checked={contact.ShowMobileNumber}
                onChange={(checked) => {
                  onChange({ ShowMobileNumber: checked });
                }}
              />
            )
          }
        />
      </CustomContainer>
      <FormInput
        id="Input_MobileNumber"
        type="tel"
        enabled
        value={contact.MobileNumber}
        onChange={(v) => {
          onChange({ MobileNumber: v });
        }}
      />
      {showSwitches && (
        <CustomText
          id="MobileNumber_Note"
          inText={`${contact.ShowMobileNumber ? 'Display' : 'Hide'} mobile number on your profile.`}
          inTextOptions={NOTE_XS}
          inPaddingOptions={{ TopSizeId: UBT_Size.ExtraSmall }}
        />
      )}
      <CustomContainer id="WorkNumberContainer" options={SWITCH_ROW_PADDING}>
        <Columns_Two
          id="WorkNumber"
          columnOptions={SWITCH_COLUMNS}
          left={<CustomText id="WorkNumberText" inText="Work Number" inTextOptions={FIELD_LABEL} />}
          right={
            showSwitches && (
              <FormSwitch
                id="Switch3"
                checked={contact.ShowWorkNumber}
                onChange={(checked) => {
                  onChange({ ShowWorkNumber: checked });
                }}
              />
            )
          }
        />
      </CustomContainer>
      <FormInput
        id="Input_WorkNumber"
        type="tel"
        enabled
        value={contact.WorkNumber}
        onChange={(v) => {
          onChange({ WorkNumber: v });
        }}
      />
      {showSwitches && (
        <CustomText
          id="WorkNumber_Note"
          inText={`${contact.ShowWorkNumber ? 'Display' : 'Hide'} work number on your profile.`}
          inTextOptions={NOTE_XS}
          inPaddingOptions={{ TopSizeId: UBT_Size.ExtraSmall, BottomSizeId: UBT_Size.Base }}
        />
      )}
    </CustomContainer>
  );
}
