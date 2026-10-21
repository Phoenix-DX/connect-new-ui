/** Screen inputs (p:UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js model :15-27, setInputs :73-80). */
export interface ContactByEmailOneSchoolGlobalInputs {
  In_EmailTo: string;
  In_ContactName: string;
}

/** Connect_Communication_CS UI_ContactByEmailFormRec: the screen variable ContactByEmailForm (model :12-14), filled by
    OnInitialize (contact) and Handler_SubmitForm (subject and message). */
export interface ContactByEmailFormRecord {
  contactMember: string;
  emailTo: string;
  firstName: string;
  subject: string;
  message: string;
}

/** Wire shape of UI_ContactByEmailFormRec (openapi `Connect_Communication_CS__UI_ContactByEmailForm`). */
export interface UI_ContactByEmailFormWire {
  ContactMember: string;
  EmailTo: string;
  FirstName: string;
  Message: string;
  Subject: string;
}
