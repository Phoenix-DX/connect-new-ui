import { OSBlock } from '@/components/ui/os/OSBlock';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AdminNotes
    The note of the event team above a data step (HostSurvey_AdminNotes.mvc.js view): the header row (icon
    orbit-icon-bubble-warning, "Message from the Administrator.") and the note (Container Visible = In_AdminNotes not "",
    animated: not rendered when hidden). No controller logic. */
export function HostSurvey_AdminNotes({ id, inAdminNotes }: { id: string; inAdminNotes: string }) {
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_AdminNotes" id={id}>
      <div className="orbit-host-survey-admin-msg" data-container="">
        <div
          className="display-flex flex-direction-row align-items-center justify-content-flex-start"
          data-container=""
        >
          <i className="icon orbit-icon-bubble-warning" data-icon="" />
          <span className="margin-left-s color-orbit-primary-10 bold">Message from the Administrator.</span>
        </div>
        {inAdminNotes !== '' && (
          <div className="margin-top-base text-neutral-8" data-container="">
            <span data-expression="">{inAdminNotes}</span>
          </div>
        )}
      </div>
    </OSBlock>
  );
}
