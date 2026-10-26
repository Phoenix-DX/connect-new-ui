import { useRef, useState } from 'react';
import { putCacheableObject } from '@/api/client/cache';
import { memberCache } from '@/api/member';
import { allowUpcomingNavigation, replaceOnUpcomingNavigation, useNavigateBack } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { clientVar } from '@/platform/session/session';
import { getUserInformation } from '@/platform/session/userInfo';
import { jSUtils_SetStyleProperty } from '@/lib/jsUtils';
import { getSVGMetric } from '@/pages/AcceptPendingPolicies/actions';

/** @origin UBTConnect.App_Policies.AcceptPendingPolicies
    The variables and the flows of the screen: OnInitialize (UserCountry), the layout events (OnReady, DefineHeight)
    and the handler of the block event AcceptedAll. The page calls this hook. */

/** The screen state and its handlers. */
export interface AcceptPendingPoliciesState {
  /** UseOverlay (default True): the curved background of the layout. */
  useOverlay: boolean;
  /** UserCountry: the country code of the cached user information (OnInitialize). */
  userCountry: string;
  /** MainContainer: the id of the layout's Main container, once the layout is ready; "" before. */
  mainContainer: string;
  /** DefineHeight (the layout event OnPathCalculated). */
  defineHeight: () => void;
  /** The layout event OnReady(MainId): MainContainer = MainId, then DefineHeight. */
  onLayoutReady: (mainId: string) => void;
  /** AcceptPendingPoliciesAcceptedAll (the block event AcceptedAll). */
  acceptedAll: () => Promise<void>;
}

export function useAcceptPendingPolicies(): AcceptPendingPoliciesState {
  const [useOverlay] = useState(true);
  // OnInitialize: UserCountry = AppManager_GetCachedUserInfo.UserInformation.CountryCode.
  const [userCountry] = useState(() => appManager_GetCachedUserInfo().CountryCode);
  const [mainContainer, setMainContainer] = useState('');
  const mainContainerRef = useRef('');
  const navigateBack = useNavigateBack();

  // DefineHeight: GetSVGMetric → --current-svg-height on MainContainer (OS DecimalToText of the result).
  const defineHeight = () => {
    const metric = getSVGMetric();
    jSUtils_SetStyleProperty(
      mainContainerRef.current,
      '--current-svg-height',
      `${String(metric.HeightWithoutCurve)}px`,
    );
  };

  const onLayoutReady = (mainId: string) => {
    mainContainerRef.current = mainId;
    setMainContainer(mainId);
    defineHeight();
  };

  // AcceptPendingPoliciesAcceptedAll: Cache_UserInfo_Get; HasPoliciesToAccept = False; PutCacheableObject(DirectoryUser,
  // Get_MemoryCacheKey_UniqueKey, user info, 7200); App_Policies_HasPolicyToAccept = False; ReplaceOnUpcomingNavigation;
  // AllowUpcomingNavigation; PreviousScreen.
  const acceptedAll = async () => {
    const info = await getUserInformation();
    putCacheableObject(memberCache.userInfo(clientVar.uniqueCacheKey.get()), {
      ...info,
      HasPoliciesToAccept: false,
    });
    clientVar.hasPolicyToAccept.set(false);
    replaceOnUpcomingNavigation();
    allowUpcomingNavigation();
    navigateBack();
  };

  return { useOverlay, userCountry, mainContainer, defineHeight, onLayoutReady, acceptedAll };
}
