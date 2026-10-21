import type { ActionInputs, PathOf } from '../../lib/api';

type In<A extends string> = ActionInputs<PathOf<'UBTConnect', A>>;

/** Route inputs of UBTConnect.App_Menu_ContactUs.ContactUsDetails, all Text (model setInputs, ContactUsDetails.mvc.js:
    166-180), sent by ContactUsMenu OnClick_MenuOption. */
export interface ContactUsDetailsInputs {
  In_ContactSubjectId: string;
  In_ContactSubjectTitle: string;
  In_ListMenuOptionLabel: string;
}

/** Connect_Communication_CS UI_ContactUsForm (screen variable ContactUsForm, :53-55): the form the screen sends. */
export type UI_ContactUsForm = In<'ServiceAPISendContactUsMessage'>['In_ContactUsForm'];

/** Output of DataAction_GetLocalityTimezone (:4-21). */
export interface LocalityTimezone {
  timezoneName: string;
  timezoneOffset: number;
}

/** Connect_Geography_CS CS_CountryName, a row of DataAction_GetCountriesNames.Countries (:23-42). */
export interface CountryName {
  code: string;
  name: string;
}

/** UBTConnect_Utils ContactByPhonePopupData, the screen variable CallPopupData (:86-88), complete as OutSystems sends it. */
export type CallPopupData = NonNullable<GetLocalityTimezoneInputWire['CallPopupData']>;

/** Wire shapes (api.ts and mocks.ts only). */
export type GetLocalityTimezoneInputWire = In<'ContactUsDetails/DataActionDataAction_GetLocalityTimezone'>;
export type SendContactUsMessageInputWire = In<'ServiceAPISendContactUsMessage'>;
