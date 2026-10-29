import { getMilestoneScanFF } from '@/api/event';
import { APP_ID } from '@/platform/navigation/paths';
import { useOsNavigate } from '@/platform/navigation';
import { milestoneDetailParams, type MilestoneDetailTarget } from './adminMilestonesState';

/** Handler_NavigateToMilestoneDetail of the screen OrbitAdminMilestones: the handler of the block event
    NavigateTo_MilestoneDetail. It calls the server action GetMilestoneScanFF. True: OrbitAdminMilestoneDetail with the
    7 inputs in the order of the original URL. False: OrbitAdminLanding.
    Flow scope (item 8): GetMilestoneScanFF is a server action (R2, no wrap). A navigation from a screen that the user
    left does not happen (R4, useOsNavigate throws OutOfContextException).
    @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones */
export function useNavigateToMilestoneDetail(): (target: MilestoneDetailTarget) => Promise<void> {
  const navigate = useOsNavigate();
  return async (target) => {
    const isScanPerMilestone = await getMilestoneScanFF(); // R2
    if (isScanPerMilestone) {
      navigate(`/${APP_ID}/OrbitAdminMilestoneDetail`, milestoneDetailParams(target));
    } else {
      navigate(`/${APP_ID}/OrbitAdminLanding`);
    }
  };
}
