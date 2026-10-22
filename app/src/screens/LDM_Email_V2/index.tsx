import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { readInputs } from './api';
import { ScreenBlock_Event_Email_V2 } from './components/ScreenBlock_Event_Email_V2';

/** UBTConnect Legacy_LDMEventsFlow_V2.LDM_Email_V2 (runtime-sources/UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2
    .mvc.js = S: model :1-120, view :121-234, controller :235-290). Not captured (no-capture, user 2026-10-16): built from
    the compiled code. Inputs EventHostId, In_EventId (Long Integer), In_IsMessageGuest, In_IsContactOrganiser (Boolean),
    EventDate (Date), EventLocality (Text). ScreenBlock_Event_Email_V2 with BottomBarMenu in its BottomBar (Menu and
    CommonUI_Elements empty), then CommonUI_InsideLayout (S view :151-231). No screen action, no data action. A change of
    the inputs mounts a new block (the block has no OnParametersChanged). */
export default function LDM_Email_V2() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readInputs(params), [params]);

  return (
    <>
      <ScreenBlock_Event_Email_V2
        key={`${inputs.In_EventHostId}-${inputs.In_EventId}`}
        id="$b1"
        inputs={inputs}
        bottomBar={<BottomBarMenu id="$b2" />}
      />
      <CommonUI_InsideLayout id="$b3" />
    </>
  );
}
