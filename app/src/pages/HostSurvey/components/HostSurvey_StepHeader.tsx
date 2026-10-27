import { HostSurveyPill } from '@/components/orbit/HostSurveyPill';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { HostSurveyStepProperties, StepProperties } from '@/pages/HostSurvey/hooks/hostSurveyState';
import { HostSurveyStep, type LocalHostSurveyStep } from '@/platform/storage/localEntities';

/** OnInitialize and OnParametersChanged of HostSurvey_StepHeader: CurrentStepProperties.IsEdit = the IsEdit of the
    step's properties (accommodation, meal, helper, vehicle; False for the other steps); TrySave and HasData False. */
function stepHeaderProperties(step: LocalHostSurveyStep, properties: HostSurveyStepProperties): StepProperties {
  const isEdit =
    step.Id === HostSurveyStep.accommodation
      ? properties.Accommodation.IsEdit
      : step.Id === HostSurveyStep.meal
        ? properties.Meals.IsEdit
        : step.Id === HostSurveyStep.helper
          ? properties.Helpers.IsEdit
          : step.Id === HostSurveyStep.vehicle
            ? properties.Vehicles.IsEdit
            : false;
  return { IsEdit: isEdit, TrySave: false, HasData: false };
}

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader
    The header of a data step (HostSurvey_StepHeader.mvc.js view): "Step <In_CurrentRowNumber + 1> of <In_StepLength>",
    the HeaderLabel of the step, and the status pill (HostSurvey_PillItem `$b1`, small icon): "Pending" (warning icon,
    orange) while the step is in edit, else "Completed" (check icon, green). */
export function HostSurvey_StepHeader({
  id,
  inCurrentRowNumber,
  inLocalHostStepSurvey,
  inStepLength,
  inStepProperties,
}: {
  id: string;
  inCurrentRowNumber: number;
  inLocalHostStepSurvey: LocalHostSurveyStep;
  inStepLength: number;
  inStepProperties: HostSurveyStepProperties;
}) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  const { IsEdit } = stepHeaderProperties(inLocalHostStepSurvey, inStepProperties);
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_StepHeader" id={id}>
      <div className="orbit-host-survey-header" data-container="">
        <div className="text-neutral-8 font-size-xs" data-container="">
          <span className="bold" data-expression="">
            {`Step ${String(inCurrentRowNumber + 1)} of ${String(inStepLength)}`}
          </span>
        </div>
        <div
          className="display-flex flex-direction-row align-items-center justify-content-space-between"
          data-container=""
        >
          <div data-container="">
            <span className="font-size-base color-orbit-primary-8 bold" data-expression="">
              {inLocalHostStepSurvey.HeaderLabel}
            </span>
          </div>
          <HostSurveyPill
            id={`${scope}-$b1`}
            inIsSmallIcon
            inIconClass={
              IsEdit ? 'orbit-icon-circle-warning color-orbit-orange-8' : 'orbit-icon-circle-check color-orbit-green-6'
            }
            inExtendedStyle={
              IsEdit
                ? 'background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);\n'
                : 'background-color: var(--orbit-green-2); color: var(--orbit-green-6);\n'
            }
            inPillText={IsEdit ? 'Pending' : 'Completed'}
          />
        </div>
      </div>
    </OSBlock>
  );
}
