import type { ContactEmailPageConfig } from '@/components/contact/ContactEmailForm';
import type { ContactByEmailOrbitHostInputs } from './inputs';

/** The config of the page (decision Q6): Layout_DetailPage not primary, titled "Contact the " + In_Surname +
    " household"; the form with the placeholders "Add a subject" and "Add a message" and a dynamic subject text area.
    The form has no In_Subject: the subject starts empty (In_Subject is sent as Subject, the form's text as
    UserSubject).
    @origin UBTConnect.ContactFlow.ContactByEmailOrbitHost */
export function contactByEmailOrbitHostConfig(inputs: ContactByEmailOrbitHostInputs): ContactEmailPageConfig {
  return {
    title: `Contact the ${inputs.In_Surname} household`,
    isPrimaryColor: false,
    form: {
      inSubjectPlaceholder: 'Add a subject',
      inMessagePlaceholder: 'Add a message',
      inUseDynamicTextAreaSubject: true,
    },
  };
}
