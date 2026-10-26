/** The route inputs of ContactUsDetails, all Text, from the query string by their original names. ContactUsMenu
    (OnClick_MenuOption) sends them. The screen reads them once, at OnInitialize.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
export interface ContactUsDetailsInputs {
  /** The subject (the Type_ContactSubject Id is the subject text): the description, the message prompt and the rate. */
  In_ContactSubjectId: string;
  /** The header title. */
  In_ContactSubjectTitle: string;
  /** The label above the description. */
  In_ListMenuOptionLabel: string;
}

/** The screen inputs with their OutSystems default (""). */
export function readContactUsDetailsInputs(params: URLSearchParams): ContactUsDetailsInputs {
  return {
    In_ContactSubjectId: params.get('In_ContactSubjectId') ?? '',
    In_ContactSubjectTitle: params.get('In_ContactSubjectTitle') ?? '',
    In_ListMenuOptionLabel: params.get('In_ListMenuOptionLabel') ?? '',
  };
}
