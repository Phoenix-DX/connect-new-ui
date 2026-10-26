/** @origin UBTConnect.App_Common.UnsupportedVersion_Browser */
// @os-block UBTConnect.App_Common.UnsupportedVersion_Browser
import { OSBlock } from '@/components/ui/os/OSBlock';
import { UnsupportedVersion } from '@/components/version/UnsupportedVersion';

export interface UnsupportedVersionBrowserProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Expression of the message (survey:UBTConnect.App_Common.UnsupportedVersion_Browser.mvc.js:148). */
const MESSAGE =
  'We have noticed you are using an unsupported browser version.' +
  '\r\n' +
  '\r\n' +
  'We recommend you upgrade to the latest version.';

/** Compiled view (survey:…UnsupportedVersion_Browser.mvc.js:112-162): UnsupportedVersion with class
    `unsupported-card--webview`, no button, the message as an expression. */
export function UnsupportedVersionBrowser({ id }: UnsupportedVersionBrowserProps) {
  return (
    <OSBlock name="App_Common.UnsupportedVersion_Browser" id={id}>
      <UnsupportedVersion inExtendedClass="unsupported-card--webview" inHideButton>
        <span data-expression="">{MESSAGE}</span>
      </UnsupportedVersion>
    </OSBlock>
  );
}
