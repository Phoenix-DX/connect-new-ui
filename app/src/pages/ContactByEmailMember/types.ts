/** Screen inputs of ContactByEmailMember with their OutSystems defaults (mvc.js model :15-118, set from the URL
    :160-224). Long Integers stay strings ("0" by default); In_LDMEventDate is "" for the null date. */
export interface ContactByEmailMemberInputs {
  In_AvatarURL: string;
  In_ContactName: string;
  In_ContactSurname: string;
  In_ContactLocality: string;
  In_ContactCountry: string;
  In_EmailTo: string;
  In_EntityType: string;
  In_EntityId: string;
  In_LDMEventDate: string;
  In_LDMEventLocality: string;
  In_AuditEventId: string;
  In_OrbitEventTitle: string;
  In_OrbitEventId: string;
  In_OrbitMilestoneId: string;
  In_IsHousehold: boolean;
  In_HouseholdHeaderName: string;
}

/** Connect_Communication_CS.UI_ContactByEmailFormRec (screen local ContactByEmailForm, mvc.js model :9-11), a domain
    type of api/message. */
export type { ContactByEmailForm } from '@/api/message';
