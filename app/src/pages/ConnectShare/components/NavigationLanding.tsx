import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSLink } from '@/components/ui/os/OSLink';

export interface NavigationLandingProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Reusable.NavigationLanding: a Link to the module's default screen (GetOwnerURLPath() = "/UBTConnect/", the captured
    data-original-href) with the home icon (fa-home, size Twotimes). The input IsEnabled (default True) is never set by
    its only caller (ScreenBlock_ShareDetail), so only the enabled link is built.
    @origin Connect2_LegacyShared.Reusable.NavigationLanding */
export function NavigationLanding({ id }: NavigationLandingProps) {
  return (
    <OSBlock name="Reusable.NavigationLanding" id={id}>
      <OSLink url="/UBTConnect/">
        <i className="icon fa fa-home fa-2x" data-icon="" />
      </OSLink>
    </OSBlock>
  );
}
