import type { UserContactRequest } from '@/api/message';
import { showFeedbackMessage } from '@/platform/feedback';
import { log } from '@/platform/log/log';
import type { AppManager_CachedUserInfoRec } from '@/platform/session/types';

/** The records, the client actions and the JavaScript nodes of ScreenBlock_Household_Email, and the pure parts of
    its flows. Values are the TST values (migration/knowledge/static-entities-tst.json). Local copies: no import across
    routes (CR-LDM_EventDetail_V2-1).
    @origin Connect2_LegacyShared.Email.ScreenBlock_Household_Email */

/** Connect2_LegacyShared.applicationEvents_Directory.emailHousehold (zOnApplicationEvent_Wrapper2). */
export const ApplicationEvents_Directory_EmailHousehold = 'f3fa3922-32a5-4eeb-bfb6-939a4e8697bd';

/** Connect2_LegacyShared.communityBusinessType records that OnInitialize compares ContactBusinessType with. */
export const CommunityBusinessType = { OneSchoolGlobal: 'OneSchool Global', CampusCo: 'Campus&Co' } as const;

/** The element ids of the block's widgets, from the block instance id (`$b1` gives `b1-Email_Form`, ...). */
export interface HouseholdEmailIds {
  /** The instance id without `$`: the prefix of the ids of the widgets and of the nested blocks. */
  scope: string;
  form: string;
  subject: string;
  message: string;
}

export function householdEmailIds(blockId: string): HouseholdEmailIds {
  const scope = blockId.replace('$', '');
  return {
    scope,
    form: `${scope}-Email_Form`,
    subject: `${scope}-Email_Subject`,
    message: `${scope}-TextArea_Message`,
  };
}

/** OnInitialize HeaderText: "School" for OneSchool Global, "Store" for Campus&Co, else the default "Member". */
export function headerText(contactBusinessType: string): string {
  if (contactBusinessType === CommunityBusinessType.OneSchoolGlobal) return 'School';
  if (contactBusinessType === CommunityBusinessType.CampusCo) return 'Store';
  return 'Member';
}

/** Trim(value) <> "": the test of OnChange_InputSubject, OnChange_InputMessage and OnSubmit_Email. */
export const isFilled = (value: string): boolean => value.trim() !== '';

/** The UserContactRequest of OnSubmit_Email: the inputs, the fields and the cached user information. */
export function userContactRequest(
  inputs: { emailTo: string; inHouseholdFirstName: string },
  fields: { subject: string; message: string },
  user: AppManager_CachedUserInfoRec,
): UserContactRequest {
  return {
    EmailTo: inputs.emailTo,
    ContactMember: inputs.inHouseholdFirstName,
    FirstNameSender: user.FirstName,
    LastNameSender: user.LastName,
    Subject: fields.subject,
    Message: fields.message,
    FirstName: inputs.inHouseholdFirstName,
    EmailFrom: user.Email,
    SenderPhone: '',
    SenderLocality: user.Locality,
    SenderCountry: user.Country,
  };
}

/** The AttachmentJSON of the EmailHousehold application event: EmailHouseholdEvent {EmailTo, NameOfSender =
    LastName + ", " + FirstName}. */
export function emailHouseholdEventAttachment(emailTo: string, user: AppManager_CachedUserInfoRec): string {
  return JSON.stringify({ EmailTo: emailTo, NameOfSender: `${user.LastName}, ${user.FirstName}` });
}

/** zOnApplicationEvent_Wrapper(EventId, AttachmentJSON) of Connect2_LegacyShared. Not wired (U17): logged without the
    attachment (an e-mail and the sender's name). */
export function zOnApplicationEvent_Wrapper(eventId: string, attachmentJSON: string): void {
  log.info('ApplicationEvent', { EventId: eventId, HasAttachment: attachmentJSON !== '' });
}

/** ScheduleFeedbackMessageAfterTransition JS node: after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}
