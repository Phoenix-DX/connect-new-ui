import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { readInputs } from './api';
import { addAuditEventDetailEvent, ApplicationEvents_LDM } from './components/actions';
import { ScreenBlock_Household_Email } from './components/ScreenBlock_Household_Email';

/** UBTConnect Legacy_LDMEventsFlow.EmailTarget (runtime-sources/UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc.js = S:
    model :1-147, view :148-301, controller :302-392). Not captured (no-capture, user 2026-10-16) and no screen links
    here: built from the compiled code. ScreenBlock_Household_Email ($b1) with BottomBarMenu in its BottomBar (Menu and
    CommonUI_Elements empty), then CommonUI_InsideLayout (S view :216-255). No data action. */
export default function EmailTarget() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readInputs(params), [params]);

  return (
    <>
      <ScreenBlock_Household_Email
        key={params.toString()}
        id="$b1"
        inHouseholdFirstName={inputs.In_HouseholdFirstName}
        inHouseholdFullName={inputs.In_HouseholdFullName}
        emailTo={inputs.EmailTo}
        contactBusinessType={inputs.ContactBusinessType}
        initialEmailSubject={inputs.InitialEmailSubject}
        bottomBar={<BottomBar id="$b2" />}
        onEmailSubmitted={() => {
          // OnEmailLDMEventParticipant_Handler (S :320-360): IsFromLDM → AddAuditEventDetailEvent(EmailHost ?
          // MyTimelineHostEmailed : MyTimelineGuessEmailed, 0, "", EventDate, EventLocality).
          if (inputs.IsFromLDM)
            addAuditEventDetailEvent(
              inputs.EmailHost
                ? ApplicationEvents_LDM.MyTimelineHostEmailed
                : ApplicationEvents_LDM.MyTimelineGuessEmailed,
              inputs.EventDate,
              inputs.EventLocality,
            );
        }}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}
