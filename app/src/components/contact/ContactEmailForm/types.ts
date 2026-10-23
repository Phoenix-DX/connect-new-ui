import type { ContactEmailFormProps } from './ContactEmailForm';

/* The pattern of the 5 ContactByEmail pages (decision Q6, no container): each page has a config object
   (`ContactEmailPageConfig`, in `pages/<Route>/config.ts`) and one submit hook that returns `ContactEmailFormSubmit`
   (in `pages/<Route>/hooks/`). The page renders Layout_DetailPage > ContactEmailForm > a contact card
   (ContactPersonCard or ContactHeaderCard). */

/** The form inputs that a ContactByEmail page fixes. */
export type ContactEmailFormSettings = Pick<
  ContactEmailFormProps,
  'inSubjectPlaceholder' | 'inMessagePlaceholder' | 'inSubject' | 'inUseDynamicTextAreaSubject' | 'inMessageLabel'
>;

/** The config object of one ContactByEmail page: what the 5 pages set differently. */
export interface ContactEmailPageConfig {
  /** Text of the Layout_DetailPage title (Placeholder HeaderTitle). */
  title: string;
  /** In_IsPrimaryColor of Layout_DetailPage. */
  isPrimaryColor: boolean;
  /** The form inputs of the screen. */
  form: ContactEmailFormSettings;
}

/** What the submit hook of a ContactByEmail page gives to the form: IsLoading, the platform step of
    OnClick_SubmitForm (AllowUpcomingNavigation) and the handler of Event_SubmitForm (the screen's Handler_SubmitForm). */
export type ContactEmailFormSubmit = Required<
  Pick<ContactEmailFormProps, 'isLoading' | 'onBeforeSubmitForm' | 'onEventSubmitForm'>
>;
