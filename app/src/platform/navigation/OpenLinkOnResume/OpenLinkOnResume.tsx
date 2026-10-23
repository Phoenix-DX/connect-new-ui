/** @origin UBTConnect.Legacy_Share.HandleOnResumeOpenLink */
// @os-block UBTConnect.Legacy_Share.HandleOnResumeOpenLink
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface OpenLinkOnResumeProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Wraps two Cordova plugin blocks that render nothing (captured with 0 nodes). Their events (Android app link on
    resume, deeplink open) come only from the native app; the handler (Action_ProcessURL: store the resume link with
    SetResumeLoginLink when signed out / locked / registering, else navigate,
    p:UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc.js:235-313, 353-364) never runs on the web. The resume link
    itself is the shell's (`src/shell/resume.ts`, decision U14: plugins later). */
export function OpenLinkOnResume({ id }: OpenLinkOnResumeProps) {
  return (
    <OSBlock name="Legacy_Share.HandleOnResumeOpenLink" id={id}>
      <OSBlock name="AndroidAppLinks.AndroidAppLinkOnResumeHandler" />
      <OSBlock name="EventfulDeeplinksPlugin.DeeplinkHandlerCentral" />
    </OSBlock>
  );
}
