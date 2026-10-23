/* Static entity values this screen uses that the shared tables do not have. Values of TST
   (migration/knowledge/static-entities-tst.json: `UBTConnect.type_ContactSubject`, `UBTConnect.uBT_Color`,
   `UBTConnect.uBT_Icons2`). */

/** UBTConnect Type_ContactSubject: the Id is the subject text (Text identifier). "General Questions " keeps the
    trailing space of TST. */
export const Type_ContactSubject = {
  SetupAUBTOneAccount: 'Set up a UBT One account',
  LoginWithUBTOne: 'Log in with UBT One',
  SubscriptionsAndPayments: 'Subscriptions and Payments',
  HouseholdDetailsAndProfile: 'Household Details & Profile',
  CommunityEvents: 'Community Events',
  GeneralQuestions: 'General Questions ',
  GeneralSuggestionsFeedbackRating: 'General Suggestions, Feedback & Rating',
  GeneralQuestionsOrSuggestions: 'General Questions or Suggestions',
} as const;

/** UBT_Color values missing from the shared table (Dialog_Information body, P:1380-1392). */
export const UBT_Color_Local = {
  GreenLightest: 'green-lightest',
  GreenDarker: 'green-darker',
} as const;

/** UBT_Icons2 values missing from the shared table (Dialog_Information icon P:1391; contact checkbox P:1153-1156). */
export const UBT_Icons2_Local = {
  Mail: 'connect-icon-mail',
  Checkbox: 'connect-icon-checkbox',
  CheckboxOutlineBlank: 'connect-icon-checkbox_outline_blank',
} as const;
