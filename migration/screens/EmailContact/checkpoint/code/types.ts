import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   SendContactEmail of ScreenBlock_ContactForm (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
   ScreenBlock_ContactForm/ActionSendContactEmail), typed by the API contract. */

type SendContactEmailPath = PathOf<'Connect2_OrbitMobile_MUI', 'ActionSendContactEmail'>;
export type SendContactEmailInputsWire = ActionInputs<SendContactEmailPath>;
export type SendContactEmailWire = ActionOutputs<SendContactEmailPath>;

/* ---- Domain ---- */

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

/** What OnClick_Submit sends with SendContactEmail (CF :1228-1372): the e-mail and its OrbitEmailInformation. */
export interface OrbitContactEmail {
  isContactHelpdesk: boolean;
  eventId: string;
  milestoneId: string;
  targetMemberId: string;
  subject: string;
  userSubject: string;
  message: string;
  emailInfo: {
    EventName: string;
    SenderFullName: string;
    HostName: string;
    HostEmail: string;
    MilestoneName: string;
    FormattedDateTime: string;
  };
}
