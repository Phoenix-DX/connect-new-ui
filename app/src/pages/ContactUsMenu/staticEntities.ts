/* Static entity values this screen uses that the shared tables do not have. Values of TST
   (migration/knowledge/static-entities-tst.json, `UBTConnect.type_ContactSubject` and `UBTConnect.uBT_Icons2`). */

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

/** UBTConnect UBT_Icons2 values missing from the shared table (captured `connect-icon-ubt`, `-person_add`,
    `-shopping_basket`, `-account_circle`, `-person_play`, `-book_open`, `-tooltip`, dom/default.html:71-395). */
export const UBT_Icons2_Local = {
  UBT: 'connect-icon-ubt',
  PersonAdd: 'connect-icon-person_add',
  ShoppingBasket: 'connect-icon-shopping_basket',
  AccountCircle: 'connect-icon-account_circle',
  PersonPlay: 'connect-icon-person_play',
  BookOpen: 'connect-icon-book_open',
  Tooltip: 'connect-icon-tooltip',
} as const;
