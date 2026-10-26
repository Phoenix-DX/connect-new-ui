import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useNavigateBack } from '@/platform/navigation';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { HostSurveyView } from './components/HostSurveyView';
import { useHostSurvey } from './hooks/useHostSurvey';
import { readHostSurveyInputs } from './inputs';

/** @origin UBTConnect.Legacy_OrbitEventsFlow.HostSurvey
    The host survey of an Orbit event: CommonUI_InsideLayout, then ScreenBlock_HostSurvey (instance `$b2`) with the
    five inputs; its placeholders Menu and CommonUI_Elements stay empty. The block's variables and flows are in
    useHostSurvey, its view in HostSurveyView. OnHandle_NavigateTo_Back, the NavigateTo_Back event of the block: back
    to the previous screen. */
export default function HostSurvey() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readHostSurveyInputs(params), [params]);
  const navigateBack = useNavigateBack();
  const { onBackNavigation, ...view } = useHostSurvey(inputs, {
    onNavigateToBack: () => {
      navigateBack();
    },
  });
  return (
    <>
      <CommonUiLayout id="$b1" />
      <HostSurveyView
        id="$b2"
        inputs={inputs}
        {...view}
        backNavigationHandler={<BackNavigationHandler id="b2-$b43" onBackNavigation={onBackNavigation} />}
      />
    </>
  );
}
