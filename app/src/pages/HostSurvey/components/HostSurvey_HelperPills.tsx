import type { HostSurveyHelper } from '@/api/event';
import { HostSurveyPill } from '@/components/orbit/HostSurveyPill';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { LocalHelperRole } from '@/platform/storage/localEntities';
import { getHelperRoleByJSON_Name } from './actions';

/** The location pill text (HelperPills view, pill $b2): LocalityName, then " (CountryName)" (CountryName alone
    without a LocalityName). */
export const helperLocationText = (h: HostSurveyHelper): string =>
  h.LocalityName + (h.CountryName !== '' ? (h.LocalityName !== '' ? ` (${h.CountryName})` : h.CountryName) : '');

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills
    The pills of a helper (HostSurvey_HelperPills.mvc.js view): container `orbit-host-survey-pill-cont`; the role pill
    (FirstName, LastName and HelperRole not ""; icon orbit-icon-person-wave; "<role label>: <first> <last>", the label by
    GetHelperRoleByJSON_Name), then the location pill (LocalityName or CountryName not ""; icon orbit-icon-location).
    Pill ids $b1, $b2. */
export function HostSurvey_HelperPills({
  id,
  inIsDisabled,
  inHelperRoles,
  inHostSurvey_Helper: h,
}: {
  id: string;
  inIsDisabled: boolean;
  inHelperRoles: readonly LocalHelperRole[];
  inHostSurvey_Helper: HostSurveyHelper;
}) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_HelperPills" id={id}>
      <div className="orbit-host-survey-pill-cont" data-container="">
        {h.FirstName !== '' && h.LastName !== '' && h.HelperRole !== '' && (
          <HostSurveyPill
            id={`${scope}-$b1`}
            inIsDisabled={inIsDisabled}
            inIconClass="orbit-icon-person-wave"
            inPillText={`${getHelperRoleByJSON_Name(h.HelperRole, inHelperRoles).Label}: ${h.FirstName} ${h.LastName}`}
          />
        )}
        {(h.LocalityName !== '' || h.CountryName !== '') && (
          <HostSurveyPill
            id={`${scope}-$b2`}
            inIsDisabled={inIsDisabled}
            inIconClass="orbit-icon-location"
            inPillText={helperLocationText(h)}
          />
        )}
      </div>
    </OSBlock>
  );
}
