import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';

/** UBTConnect App_Common.AppLogo_White (AppLogo_White.mvc.js:123-133): static image, width 155px (captured
    dom/default.html:24).
    @origin UBTConnect.App_Common.AppLogo_White */
export function AppLogo_White({ id }: { id?: string }) {
  return (
    <OSBlock name="App_Common.AppLogo_White" id={id}>
      <img data-image="" src={osImage('img/UBTConnect.ConnectLogoWhite.svg')} style={{ width: '155px' }} />
    </OSBlock>
  );
}
