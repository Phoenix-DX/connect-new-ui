import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useFlag } from '@/platform/flags';
import { ViewDocumentsView } from './components/ViewDocumentsView';
import { useViewDocuments } from './hooks/useViewDocuments';
import { readViewDocumentsInputs } from './inputs';

/** @origin UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments
    The documents of an Orbit event: ScreenBlock_ViewDocuments (its Menu and CommonUI_Elements placeholders are
    empty), then CommonUI_InsideLayout. No capture (built from the compiled code). A document opens in a new tab; the
    footer "Contact Orbit Helpdesk" opens ContactByEmailOrbitHelpdesk with Orbit access (flag mobileOrbitAccess), else
    shows the no-access message and HomeFeed. The flows are in useViewDocuments. */
export default function ViewDocuments() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readViewDocumentsInputs(params), [params]);
  const hasOrbitAccess = useFlag('mobileOrbitAccess');
  const { state, onDocumentClick, onContactHelpdesk } = useViewDocuments(inputs, { hasOrbitAccess });

  return (
    <>
      <ViewDocumentsView
        id="$b1"
        eventName={inputs.In_EventName}
        documents={state.eventDocuments}
        isFetchingData={state.isFetchingData}
        isLoadingDocument={state.isLoadingDocument}
        isDataFetched={state.isDataFetched}
        hasResponseDocuments={state.hasResponseDocuments}
        onDocumentClick={onDocumentClick}
        onContactHelpdesk={onContactHelpdesk}
      />
      <CommonUiLayout id="$b2" />
    </>
  );
}
