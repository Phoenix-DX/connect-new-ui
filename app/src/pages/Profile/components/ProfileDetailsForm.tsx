import type { ReactNode } from 'react';
import { OSForm } from '@/components/ui/os/OSValidation';
import type { AccountForm } from '@/pages/Profile/hooks/profileState';
import { SectionSeparator } from '@/components/ui/SectionSeparator';
import { ContactInformationSection } from './ContactInformationSection';
import { IdentificationSection } from './IdentificationSection';
import { PersonalInformationSection } from './PersonalInformationSection';

export interface ProfileDetailsFormProps {
  /** AccountForm: the form that the inputs edit. */
  accountForm: AccountForm;
  /** AccountFormOriginal: the identification inputs show its values. */
  accountFormOriginal: AccountForm;
  /** isHouseholder: the address section shows, and the home number can be edited. */
  isHouseholder: boolean;
  /** The switches of the mobile and the work number show (householder or spouse). */
  showContactSwitches: boolean;
  /** The address section of the householder, after its separator. */
  addressSection?: ReactNode;
  onCopyAccountNumber: () => void;
  onPersonalChange: (patch: Partial<AccountForm['AccountForm_PersonalInformation']>) => void;
  onContactChange: (patch: Partial<AccountForm['AccountForm_ContactInformation']>) => void;
  onShowAgeChange: (checked: boolean) => void;
}

/** The form DetailsForm of the Profile screen: the sections Identification, Personal Information, the address
    section (householder only) and Contact Information, each after a section separator.
    @origin UBTConnect.App_Profile.Profile */
export function ProfileDetailsForm({
  accountForm,
  accountFormOriginal,
  isHouseholder,
  showContactSwitches,
  addressSection,
  onCopyAccountNumber,
  onPersonalChange,
  onContactChange,
  onShowAgeChange,
}: ProfileDetailsFormProps) {
  const identification = accountFormOriginal.AccountForm_IdentificationInformation;
  return (
    <OSForm id="DetailsForm" style='"form card" OSFillParent'>
      <IdentificationSection
        memberId={identification.MemberId}
        accountNumber={identification.AccountNumber}
        onCopyAccountNumber={onCopyAccountNumber}
      />
      <SectionSeparator id="$b18" />
      <PersonalInformationSection
        personal={accountForm.AccountForm_PersonalInformation}
        onChange={onPersonalChange}
        onShowAgeChange={onShowAgeChange}
      />
      {isHouseholder && (
        <>
          <SectionSeparator id="$b28" />
          {addressSection}
        </>
      )}
      <SectionSeparator id="$b37" />
      <ContactInformationSection
        contact={accountForm.AccountForm_ContactInformation}
        isHouseholder={isHouseholder}
        showSwitches={showContactSwitches}
        onChange={onContactChange}
      />
    </OSForm>
  );
}
