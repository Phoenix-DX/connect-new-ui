import { useMemo, type ReactNode } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { LdmEventEmailView } from './components/LdmEventEmailView';
import { useLdmEventEmail } from './hooks/useLdmEventEmail';
import { readInputs, type EventEmailInputs } from './inputs';

/** The block ScreenBlock_Event_Email_V2: its flows (useLdmEventEmail) and its view. */
function LdmEventEmail({ id, inputs, bottomBar }: { id: string; inputs: EventEmailInputs; bottomBar: ReactNode }) {
  const flows = useLdmEventEmail(id, inputs);
  return <LdmEventEmailView id={id} {...flows} bottomBar={bottomBar} />;
}

/** The LDM "Contact Event Coordinator" route. Not captured (no-capture, user 2026-10-16): built from the compiled
    code. Inputs EventHostId, In_EventId (Long Integer), In_IsMessageGuest, In_IsContactOrganiser (Boolean), EventDate
    (Date), EventLocality (Text). The block ScreenBlock_Event_Email_V2 with the BottomBarMenu in its BottomBar (Menu and
    CommonUI_Elements empty), then CommonUI_InsideLayout. No screen action, no data action. The block has no
    OnParametersChanged, so another EventHostId or In_EventId mounts a new block.
    @origin UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2 */
export default function LDM_Email_V2() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readInputs(params), [params]);

  return (
    <>
      <LdmEventEmail
        key={`${inputs.In_EventHostId}-${inputs.In_EventId}`}
        id="$b1"
        inputs={inputs}
        bottomBar={<BottomBar id="$b2" />}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}
