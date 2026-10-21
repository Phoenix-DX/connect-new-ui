/** Route inputs of UBTConnect.App_Menu_ContactUs.ContactUsMenu: none (model `setInputs` is empty,
    ContactUsMenu.mvc.js:64). The screen has no server data of its own (route-spec.md "Data"); its model is
    ContactUs_Menu (UI_MenuSection list, :10-12), IgnorePolices and IgnoreLockedScreen (:13-18). */
export type { UI_ListMenuOption, UI_MenuSection } from '../../shared/UBTConnect/Menu_List';

/** Inputs of ContactUsDetails sent by OnClick_MenuOption (ContactUsMenu.mvc.js:437-441), all Text. */
export interface ContactUsDetailsParams {
  In_ContactSubjectId: string;
  In_ContactSubjectTitle: string;
  In_ListMenuOptionLabel: string;
}
