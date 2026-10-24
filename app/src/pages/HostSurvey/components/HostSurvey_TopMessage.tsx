import { OSBlock } from '@/components/ui/os/OSBlock';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_TopMessage
    A message of the survey summary: container "padding-m margin-top-s" (+ " background-neutral-0" with a title); the
    bold title only when In_Title is not "" (Container Visible, animated: not rendered when hidden); the message in
    "font-size-s margin-top-base". */
export function HostSurvey_TopMessage({ id, inTitle, inMessage }: { id: string; inTitle: string; inMessage: string }) {
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_TopMessage" id={id}>
      <div className={`padding-m margin-top-s${inTitle !== '' ? ' background-neutral-0' : ''}`} data-container="">
        {inTitle !== '' && (
          <div className="bold" data-container="">
            <span data-expression="">{inTitle}</span>
          </div>
        )}
        <div className="font-size-s margin-top-base" data-container="">
          <span data-expression="">{inMessage}</span>
        </div>
      </div>
    </OSBlock>
  );
}
