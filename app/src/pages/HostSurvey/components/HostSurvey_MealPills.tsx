import type { HostSurveyMeal } from '@/api/event';
import { HostSurveyPill } from '@/components/orbit/HostSurveyPill';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { getFormattedDate_Survey } from './actions';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills
    The pills of a meal: the day (EventDate not null; GetFormattedDate_Survey) and the capacity
    "CP <comfortable>, SCP <stretch>" when both are set. */
export function HostSurvey_MealPills({
  id,
  inIsDisabled,
  inHostSurvey_Meal: meal,
}: {
  id: string;
  inIsDisabled: boolean;
  inHostSurvey_Meal: HostSurveyMeal;
}) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_MealPills" id={id}>
      <div className="orbit-host-survey-pill-cont" data-container="">
        {meal.EventDate !== '' && (
          <HostSurveyPill
            id={`${scope}-$b1`}
            inIsDisabled={inIsDisabled}
            inIconClass="orbit-icon-meeting"
            inPillText={getFormattedDate_Survey(meal.EventDate)}
          />
        )}
        {meal.ComfortableCapacity !== '' && meal.StretchCapacity !== '' && (
          <HostSurveyPill
            id={`${scope}-$b2`}
            inIsDisabled={inIsDisabled}
            inIconClass="orbit-icon-capacity"
            inPillText={`CP ${meal.ComfortableCapacity}, SCP ${meal.StretchCapacity}`}
          />
        )}
      </div>
    </OSBlock>
  );
}
