/* Static entity values this screen uses that the shared static entities do not have. Values are the TST records
   (migration/knowledge/static-entities-tst.json) and match the capture. */

/** UBTConnect / UBTConnect_Utils Connect_Menu_Items: Id = label (static-entities-tst.json `UBTConnect.connect_Menu_Items`;
    captured labels dom/default.html:139-403). */
export const Connect_Menu_Items = {
  PINAndBiometrics: 'PIN & Biometrics',
  ContactUs: 'Contact Us',
  SubscriptionAndPayments: 'Subscription and Payments',
  RequestPhotoUpdate: 'Request Photo Update',
  TermsAndPolicies: 'Terms & Policies',
  LogOut: 'Log out',
} as const;

/** UBTConnect_Utils UBT_Icons records of Menu_GetList (static-entities-tst.json `UBTConnect_Utils.uBT_Icons`; captured
    dom/default.html:127-391). */
export const UBT_Icons_Menu = {
  Password: 'connect-icon-password',
  Help: 'connect-icon-help',
  ShoppingBasket: 'connect-icon-shopping_basket',
  ImageGallery: 'connect-icon-image_gallery',
  BookOpen: 'connect-icon-book_open',
  Logout: 'connect-icon-logout',
} as const;

/** UBTConnect UBT_FontSize.Heading5 ("font-size-" + Id): TST value `h5`, captured `font-size-h5` (title,
    dom/default.html:23). */
export const UBT_FontSize_Heading5 = 'h5';
