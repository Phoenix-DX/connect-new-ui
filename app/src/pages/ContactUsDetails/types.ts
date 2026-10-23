import type { ContactUsCallInputs } from '@/api/message';

/** Route inputs of UBTConnect.App_Menu_ContactUs.ContactUsDetails, all Text (model setInputs, ContactUsDetails.mvc.js:
    166-180), sent by ContactUsMenu OnClick_MenuOption. */
export interface ContactUsDetailsInputs {
  In_ContactSubjectId: string;
  In_ContactSubjectTitle: string;
  In_ListMenuOptionLabel: string;
}

/* The form the screen sends (Connect_Communication_CS UI_ContactUsForm, screen variable ContactUsForm, :53-55), the
   output of DataAction_GetLocalityTimezone (:4-21) and a row of DataAction_GetCountriesNames.Countries
   (Connect_Geography_CS CS_CountryName, :23-42) are domain types of api/message; this module keeps the names that the
   screen uses. */
export type { ContactUsForm as UI_ContactUsForm, CountryName, LocalityTimezone } from '@/api/message';

/** UBTConnect_Utils ContactByPhonePopupData, the screen variable CallPopupData (:86-88), complete as OutSystems sends it. */
export type CallPopupData = NonNullable<ContactUsCallInputs['CallPopupData']>;
