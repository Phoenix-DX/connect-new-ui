import { useSearchParams } from 'react-router';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { readInputs } from './api';
import { ScreenBlock_AdminEventDetail } from './components/ScreenBlock_AdminEventDetail';

/** UBTConnect Legacy_OrbitAdminFlow.OrbitAdminEventDetail (migration/runtime-sources/UBTConnect.Legacy_OrbitAdminFlow
    .OrbitAdminEventDetail.mvc.js: model :1-116, view :118-256, controller :258-305). Inputs In_EventId, In_EventName,
    In_EventStartDate, In_EventEndDate, In_EventLocation, In_EventTypeFriendly (opened by OrbitAdminLanding).
    ScreenBlock_AdminEventDetail with the six inputs and BottomBarMenu (default inputs) in its BottomBar, empty Menu /
    CommonUI_Elements, then CommonUI_InsideLayout. No screen logic. Not captured (user decision 2026-10-16,
    no-capture.json): built from the compiled code, reviewed by hand. */
export default function OrbitAdminEventDetail() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  return (
    <>
      <ScreenBlock_AdminEventDetail id="$b1" bottomBar={<BottomBarMenu id="$b2" />} {...inputs} />
      <CommonUI_InsideLayout id="$b3" />
    </>
  );
}
