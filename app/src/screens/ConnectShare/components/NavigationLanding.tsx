// @os-block Connect2_LegacyShared.Reusable.NavigationLanding
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSLink } from '../../../shared/lib/OSLink';

export interface NavigationLandingProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Reusable.NavigationLanding (p:Connect2_LegacyShared.Reusable.NavigationLanding.mvc.js, view :131-160): a Link to
    the module's default screen (GetOwnerURLPath() = "/UBTConnect/", captured data-original-href) with the home icon
    (fa-home, size Twotimes). Input IsEnabled (default True, model :13-15) is never set by its only caller
    (ScreenBlock_ShareDetail), so only the enabled link is built. */
export function NavigationLanding({ id }: NavigationLandingProps) {
  return (
    <OSBlock name="Reusable.NavigationLanding" id={id}>
      <OSLink url="/UBTConnect/">
        <i className="icon fa fa-home fa-2x" data-icon="" />
      </OSLink>
    </OSBlock>
  );
}
