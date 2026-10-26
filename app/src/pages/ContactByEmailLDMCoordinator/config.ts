import type { ContactEmailPageConfig } from '@/components/contact/ContactEmailForm';
import type { ContactByEmailLDMCoordinatorInputs } from './inputs';

/** The config of the page (decision Q6): Layout_DetailPage primary, titled "Email"; the form with the placeholders
    "Add a subject" and "Add a message" and the fixed subject In_Subject (an input, not a dynamic text area).
    @origin UBTConnect.ContactFlow.ContactByEmailLDMCoordinator */
export function contactByEmailLDMCoordinatorConfig(inputs: ContactByEmailLDMCoordinatorInputs): ContactEmailPageConfig {
  return {
    title: 'Email',
    isPrimaryColor: true,
    form: {
      inSubjectPlaceholder: 'Add a subject',
      inMessagePlaceholder: 'Add a message',
      inSubject: inputs.In_Subject,
    },
  };
}
