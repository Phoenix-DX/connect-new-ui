/** Screen inputs of ContactByEmailLDMCoordinator with their OutSystems defaults (S = runtime-sources/UBTConnect.ContactFlow
    .ContactByEmailLDMCoordinator.mvc.js, model :21-56, set from the URL :97-123). In_EventDate is "YYYY-MM-DD", "" for
    the null date. */
export interface ContactByEmailLDMCoordinatorInputs {
  In_AvatarURL: string;
  In_ContactName: string;
  In_EmailTo: string;
  In_Subject: string;
  In_EventDate: string;
  In_EventLocality: string;
}

/** Connect_Communication_CS.UI_ContactByEmailFormRec (screen local ContactByEmailForm, S model :15-17), a domain type
    of api/message. */
export type { ContactByEmailForm } from '@/api/message';
