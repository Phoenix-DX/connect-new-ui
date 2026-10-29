import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import type { HostSurveyStepProperties } from '@/pages/HostSurvey/hooks/hostSurveyState';
import type { LocalHostSurveyStep } from '@/platform/storage/localEntities';
import { HostSurvey_AdminNotes } from './HostSurvey_AdminNotes';
import { HostSurvey_StepHeader } from './HostSurvey_StepHeader';

/** A step of the navigation list with the note of the event team (TextLocalHostSurveyStepRecord: AdminNote,
    LocalHostSurveyStep). */
interface HostSurveyNavigationStep {
  AdminNote: string;
  LocalHostSurveyStep: LocalHostSurveyStep;
}

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_NavigationItem
    The list of the data steps on the navigation step (HostSurvey_NavigationItem.mvc.js). OnInitialize only:
    HostSurveySteps_Data = In_HostSurveySteps filtered on IsDataStep (a useState initialiser: a later change of the
    inputs does not filter again, as in TST). Each row: "padding-m margin-top-xs background-neutral-0" with the
    HostSurvey_StepHeader (`$b1`, step length = the number of data steps), the AdminNotes (`$b2`, Container Visible =
    AdminNote not "") and the chevron container whose click raises NavigateTo_Step(Id). The List has no
    `disable-virtualization`, so its virtualized scroll viewer writes `position: relative` (OSList positionRelative). */
export function HostSurvey_NavigationItem({
  id,
  inHostSurveySteps,
  inStepProperties,
  onNavigateToStep,
}: {
  id: string;
  inHostSurveySteps: readonly HostSurveyNavigationStep[];
  inStepProperties: HostSurveyStepProperties;
  /** Event NavigateTo_Step(HostSurveyStepId). */
  onNavigateToStep: (hostSurveyStepId: number) => void;
}) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  const [dataSteps] = useState(() => inHostSurveySteps.filter((s) => s.LocalHostSurveyStep.IsDataStep));
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_NavigationItem" id={id}>
      <OSList
        className="list list-group"
        animateItems
        positionRelative
        source={dataSteps}
        keyOf={(s) => s.LocalHostSurveyStep.Id}
      >
        {(step, i) => (
          <div className="padding-m margin-top-xs background-neutral-0" data-container="">
            <HostSurvey_StepHeader
              id={`${scope}-l1_${String(i)}-$b1`}
              inLocalHostStepSurvey={step.LocalHostSurveyStep}
              inStepLength={dataSteps.length}
              inStepProperties={inStepProperties}
              inCurrentRowNumber={i}
            />
            {step.AdminNote !== '' && (
              <div className="margin-top-s" data-container="">
                <HostSurvey_AdminNotes id={`${scope}-l1_${String(i)}-$b2`} inAdminNotes={step.AdminNote} />
              </div>
            )}
            <div
              className="margin-top-m text-align-right font-size-s color-neutral-9"
              data-container=""
              onClick={() => {
                onNavigateToStep(step.LocalHostSurveyStep.Id);
              }}
            >
              <i className="icon orbit-icon-arrow" data-icon="" />
            </div>
          </div>
        )}
      </OSList>
    </OSBlock>
  );
}
