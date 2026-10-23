import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useFlag } from '@/platform/flags';
import { OrbitContactFormView } from './components/OrbitContactFormView';
import { useEmailContact } from './hooks/useEmailContact';
import { useOrbitContactForm } from './hooks/useOrbitContactForm';
import { readEmailContactInputs } from './inputs';

/** The instance id of ScreenBlock_ContactForm on the screen. */
const CONTACT_FORM_ID = '$b1';

/** @origin UBTConnect.Legacy_OrbitEventsFlow.EmailContact
    The Orbit contact route: the e-mail to the Orbit helpdesk of an event (In_IsContactHelpdesk) or to a host. The
    screen renders ScreenBlock_ContactForm with the screen inputs (In_MilestoneName = In_MilestoneTitle; Menu and
    CommonUI_Elements empty, BottomBar = BottomBarMenu), then CommonUI_InsideLayout. No built screen links to it
    (EmailContact Q2: review URLs). The screen reads the flag mobileOrbitAccess (GetHasOrbitAccess, default-only on).
    The block flows are in hooks/useOrbitContactForm.ts, the screen action OnHandle_Submitted in
    hooks/useEmailContact.ts. */
export default function EmailContact() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readEmailContactInputs(params), [params]);
  const hasOrbitAccess = useFlag('mobileOrbitAccess');
  const screen = useEmailContact({ hasOrbitAccess });
  const form = useOrbitContactForm(CONTACT_FORM_ID, inputs, { onSubmitted: screen.onSubmitted });
  return (
    <>
      <OrbitContactFormView
        id={CONTACT_FORM_ID}
        validation={form.validation}
        isContactHelpdesk={inputs.In_IsContactHelpdesk}
        hostName={inputs.In_HostName}
        subject={form.state.subject}
        lineCount={form.state.lineCount}
        userSubject={form.state.userSubject}
        message={form.state.message}
        isSubmitting={form.state.isSubmitting}
        bottomBar={<BottomBar id="$b2" />}
        onUserSubjectChange={form.onUserSubjectChange}
        onUserSubjectBlur={form.onUserSubjectBlur}
        onMessageChange={form.onMessageChange}
        onMessageBlur={form.onMessageBlur}
        onMessageKeyDown={form.onMessageKeyDown}
        onMessageKeyUp={form.onMessageKeyUp}
        onSubmitClick={form.onSubmitClick}
        onNavigation={form.onNavigation}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}
