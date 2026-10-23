/** Screen inputs of EmailTarget with their OutSystems defaults (S = runtime-sources/UBTConnect.Legacy_LDMEventsFlow
    .EmailTarget.mvc.js, model :12-65, set from the URL :106-146). EventDate is "YYYY-MM-DD", "" for the null date. */
export interface EmailTargetInputs {
  In_HouseholdFirstName: string;
  In_HouseholdFullName: string;
  EmailTo: string;
  ContactBusinessType: string;
  InitialEmailSubject: string;
  EmailHost: boolean;
  IsFromLDM: boolean;
  EventDate: string;
  EventLocality: string;
}

/* UBT_Email.UserContactRequest, the input of UserContactUser (H :800-815), is a domain type of api/message. */
