// @os-block UBTConnect.App_Common.AppLogo_White
import { OSBlock } from '../../../components/OSBlock';
import { osImage } from '../../../lib/os-assets';

/** UBTConnect App_Common.AppLogo_White (AppLogo_White.mvc.js:123-133): static image, width 155px (captured
    dom/default.html:24). */
export function AppLogo_White({ id }: { id?: string }) {
  return (
    <OSBlock name="App_Common.AppLogo_White" id={id}>
      <img data-image="" src={osImage('img/UBTConnect.ConnectLogoWhite.svg')} style={{ width: '155px' }} />
    </OSBlock>
  );
}
