import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useFlagOn } from '@/platform/flags/flags';
import { TransportDetailView } from './components/TransportDetailView';
import { useContactHelpdeskNavigation } from './hooks/useContactHelpdeskNavigation';
import type { TransportDetailBlockInputs } from './hooks/transportDetailState';
import { useTransportDetail, type TransportDetailEvents } from './hooks/useTransportDetail';
import { readTransportDetailInputs } from './inputs';

/** ScreenBlock_TransportDetail on the screen: its flows (useTransportDetail) and its view. The hook runs here, at the
    place of the block, so a change of the block state renders only the block. */
function TransportDetailBlock({
  onNavigateToContactHelpdesk,
  ...inputs
}: TransportDetailBlockInputs & TransportDetailEvents) {
  const flows = useTransportDetail(inputs, { onNavigateToContactHelpdesk });
  return <TransportDetailView id="$b1" headerClass={inputs.In_HeaderClass} {...flows} />;
}

/** @origin UBTConnect.Legacy_OrbitEventsFlow.TransportDetail
    The detail of a transport milestone. No capture (no-capture.json, user 2026-10-16): built from the compiled code.
    ScreenBlock_TransportDetail (In_PreloadMilestoneName = In_MilestoneName; Menu and CommonUI_Elements empty), then
    CommonUI_InsideLayout. The block event NavigateTo_ContactHelpdesk goes to OnHandle_ContactHelpdesk
    (useContactHelpdeskNavigation), which reads GetHasOrbitAccess (the flag mobileOrbitAccess). */
export default function TransportDetail() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readTransportDetailInputs(params), [params]);
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  const onNavigateToContactHelpdesk = useContactHelpdeskNavigation(inputs, hasOrbitAccess);

  return (
    <>
      <TransportDetailBlock
        In_MilestoneId={inputs.In_MilestoneId}
        In_OrbitMilestoneTypeId={inputs.In_OrbitMilestoneTypeId}
        In_PreloadMilestoneName={inputs.In_MilestoneName}
        In_HeaderClass={inputs.In_HeaderClass}
        onNavigateToContactHelpdesk={onNavigateToContactHelpdesk}
      />
      <CommonUiLayout id="$b2" />
    </>
  );
}
