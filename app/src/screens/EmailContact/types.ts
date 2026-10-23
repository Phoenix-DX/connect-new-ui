/** Screen inputs of EmailContact with their OutSystems defaults (S = analysis/sources/UBTConnect.Legacy_OrbitEventsFlow.
    EmailContact.mvc.js, model :12-61). Long Integers stay text ("0" = null). */
export interface EmailContactInputs {
  In_IsContactHelpdesk: boolean;
  In_EventId: string;
  In_MilestoneId: string;
  In_TargetMemberId: string;
  In_Subject: string;
  In_MilestoneTitle: string;
  In_EventName: string;
  In_HostName: string;
  In_HostEmail: string;
  In_FormattedDateTime: string;
}

/* What OnClick_Submit sends with SendContactEmail (CF :1228-1372), the e-mail and its OrbitEmailInformation, is the
   domain type OrbitContactEmail of api/message. */
