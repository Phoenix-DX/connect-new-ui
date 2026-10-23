/** Screen inputs (p:UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js model :15-27, setInputs :73-80). */
export interface ContactByEmailOneSchoolGlobalInputs {
  In_EmailTo: string;
  In_ContactName: string;
}

/** Connect_Communication_CS UI_ContactByEmailFormRec: the screen variable ContactByEmailForm (model :12-14), filled by
    OnInitialize (contact) and Handler_SubmitForm (subject and message). A domain type of api/message. */
export type { ContactByEmailForm as ContactByEmailFormRecord } from '@/api/message';
