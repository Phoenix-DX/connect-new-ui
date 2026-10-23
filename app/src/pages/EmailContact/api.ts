import type { EmailContactInputs } from './types';

/* EmailContact has no data action (screen and ScreenBlock_ContactForm: `dataFetchActionNames = []`, CF :895). Its only
   server call is SendContactEmail, on the Submit button (CF :1228-1372). CF = analysis/sources/Connect2_OrbitMobile_MUI.
   Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc.js. SendContactEmail → IsSuccess (server action of
   Connect2_OrbitMobile_BL through `Connect2_OrbitMobile_MUI/ActionSendContactEmail`) is a write, mocked (P-MUTATION),
   never the real server; EmailInfo's SenderEmail and TargetHelpdeskEmail stay "" (the block does not set them). It is
   in the domain api/message; this module keeps the name that the screen uses. */
export { sendContactFormEmail as sendContactEmail } from '@/api/message';

/** Long Integer input: "0" for an absent or empty value. */
const longInteger = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** Screen inputs from the query string with the original names (P-PARAMS; S model :12-61, :110-152). Boolean as
    OutSystems writes it ("True" / "False"). */
export function readInputs(params: URLSearchParams): EmailContactInputs {
  const text = (name: string) => params.get(name) ?? '';
  return {
    In_IsContactHelpdesk: text('In_IsContactHelpdesk').toLowerCase() === 'true',
    In_EventId: longInteger(params.get('In_EventId')),
    In_MilestoneId: text('In_MilestoneId'),
    In_TargetMemberId: longInteger(params.get('In_TargetMemberId')),
    In_Subject: text('In_Subject'),
    In_MilestoneTitle: text('In_MilestoneTitle'),
    In_EventName: text('In_EventName'),
    In_HostName: text('In_HostName'),
    In_HostEmail: text('In_HostEmail'),
    In_FormattedDateTime: text('In_FormattedDateTime'),
  };
}
