import type { ContactEmailPageConfig } from '@/components/contact/ContactEmailForm';
import type { ContactByEmailMemberInputs } from './inputs';

/** The config of the page (decision Q6): Layout_DetailPage not primary, titled If(In_IsHousehold, "Contact the " +
    In_HouseholdHeaderName + " household", "Contact Member"); the form with the placeholders "Add a subject" and
    "Add a message", an input subject (no In_Subject).
    @origin UBTConnect.ContactFlow.ContactByEmailMember */
export function contactByEmailMemberConfig(inputs: ContactByEmailMemberInputs): ContactEmailPageConfig {
  return {
    title: inputs.In_IsHousehold ? `Contact the ${inputs.In_HouseholdHeaderName} household` : 'Contact Member',
    isPrimaryColor: false,
    form: { inSubjectPlaceholder: 'Add a subject', inMessagePlaceholder: 'Add a message' },
  };
}
