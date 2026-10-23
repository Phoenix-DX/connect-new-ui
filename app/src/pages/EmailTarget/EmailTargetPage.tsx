import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { ValidationServiceProvider } from '@/components/ui/os/OSValidation';
import { HouseholdEmailView } from './components/HouseholdEmailView';
import { onEmailLDMEventParticipant } from './hooks/emailTargetState';
import { useHouseholdEmail } from './hooks/useHouseholdEmail';
import { readEmailTargetInputs } from './inputs';

/** Instance id of ScreenBlock_Household_Email on the screen. */
const BLOCK_ID = '$b1';

/** @origin UBTConnect.Legacy_LDMEventsFlow.EmailTarget
    The e-mail to a household of the LDM events flow. Not captured (no-capture, user 2026-10-16) and no screen links
    here: built from the compiled code. ScreenBlock_Household_Email with BottomBarMenu in its BottomBar (its Menu and
    CommonUI_Elements placeholders stay empty), then CommonUI_InsideLayout. No data action. The flows of the block are
    in useHouseholdEmail; its EmailSubmitted event runs OnEmailLDMEventParticipant_Handler. */
export default function EmailTarget() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readEmailTargetInputs(params), [params]);
  const email = useHouseholdEmail(
    BLOCK_ID,
    {
      inHouseholdFirstName: inputs.In_HouseholdFirstName,
      emailTo: inputs.EmailTo,
      contactBusinessType: inputs.ContactBusinessType,
      initialEmailSubject: inputs.InitialEmailSubject,
    },
    () => {
      onEmailLDMEventParticipant(inputs);
    },
  );

  return (
    <>
      <ValidationServiceProvider service={email.validation}>
        <HouseholdEmailView
          id={BLOCK_ID}
          inHouseholdFullName={inputs.In_HouseholdFullName}
          title={email.title}
          subject={email.subject}
          message={email.message}
          isSending={email.isSending}
          bottomBar={<BottomBar id="$b2" />}
          onSubjectChange={email.onSubjectChange}
          onMessageChange={email.onMessageChange}
          onSubmit={email.onSubmit}
          onNavigation={email.onNavigation}
        />
      </ValidationServiceProvider>
      <CommonUiLayout id="$b3" />
    </>
  );
}
