import type { ContactEmailPageConfig } from '@/components/contact/ContactEmailForm';
import type { ContactByEmailOrbitHelpdeskInputs } from './inputs';

/** The config of the page (decision Q6): Layout_DetailPage primary, titled "Email"; the form with the placeholders
    "Add a subject" and "Add a message", the fixed subject In_Subject and the dynamic subject text area.
    @origin UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk */
export function contactByEmailOrbitHelpdeskConfig(inputs: ContactByEmailOrbitHelpdeskInputs): ContactEmailPageConfig {
  return {
    title: 'Email',
    isPrimaryColor: true,
    form: {
      inSubjectPlaceholder: 'Add a subject',
      inMessagePlaceholder: 'Add a message',
      inSubject: inputs.In_Subject,
      inUseDynamicTextAreaSubject: true,
    },
  };
}
