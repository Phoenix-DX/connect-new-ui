import type { ContactEmailPageConfig } from '@/components/contact/ContactEmailForm';

/** The config of the page (decision Q6): Layout_DetailPage primary, titled "Email"; the form with the placeholders
    "Add a subject" and "Add a message", no In_Subject and the subject as a DynamicTextArea. The screen inputs change
    none of these values, so the config is a constant.
    @origin UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal */
export const contactByEmailOneSchoolGlobalConfig: ContactEmailPageConfig = {
  title: 'Email',
  isPrimaryColor: true,
  form: {
    inSubjectPlaceholder: 'Add a subject',
    inMessagePlaceholder: 'Add a message',
    inSubject: '',
    inUseDynamicTextAreaSubject: true,
  },
};
