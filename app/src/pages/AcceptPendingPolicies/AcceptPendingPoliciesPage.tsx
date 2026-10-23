/** @origin UBTConnect.App_Policies.AcceptPendingPolicies */
import { useRef, useState } from 'react';
import { BackNavigationHandler } from '@/shared/NavigationHandler/BackNavigationHandler';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Layout_LoginFlow } from '@/shared/UBTConnectLibrary/Layout_LoginFlow';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { jSUtils_SetStyleProperty } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { osImage } from '@/legacy/os/os-assets';
import { showCommunicationExceptionMessage } from '@/platform/feedback';
import { putCacheableObject } from '@/api/client/cache';
import { memberCache } from '@/api/member';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { allowUpcomingNavigation, replaceOnUpcomingNavigation, useNavigateBack } from '@/platform/navigation';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { getUserInformation } from '@/platform/session/userInfo';
import { getSVGMetric } from './components/actions';
import { Policy_Custom_AcceptPendingPolicies } from './components/Policy_Custom_AcceptPendingPolicies';
import { Connect_Applications, UBT_FontSize_Heading3 } from './components/staticEntities';

const TEXT_BASE_SEMIBOLD = {
  Color: UBT_Color.Neutral0,
  FontSize: UBT_FontSize.Base,
  FontWeight: UBT_FontWeight.SemiBold,
};

/** PolicyApplications input of the block: Connect, Directory, Orbit (SCR view, cached list). */
const POLICY_APPLICATIONS = [Connect_Applications.Connect, Connect_Applications.Directory, Connect_Applications.Orbit];

/** UBTConnect App_Policies.AcceptPendingPolicies (survey SCR: model :1-66, view :67-492, controller :493-809). Not
    captured (Q7 c): built from the compiled code. */
export default function AcceptPendingPolicies() {
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

  // AcceptPendingPoliciesAcceptedAll: Cache_UserInfo_Get; HasPoliciesToAccept = False; PutCacheableObject(DirectoryUser,
  // Get_MemoryCacheKey_UniqueKey, user info, 7200); App_Policies_HasPolicyToAccept = False; ReplaceOnUpcomingNavigation;
  // AllowUpcomingNavigation; PreviousScreen.
  const acceptedAll = async () => {
    const info = await getUserInformation();
    putCacheableObject(memberCache.userInfo(getClientVar('UBTConnect_Utils.UniqueCacheKey')), {
      ...info,
      HasPoliciesToAccept: false,
    });
    setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', false);
    replaceOnUpcomingNavigation();
    allowUpcomingNavigation();
    navigateBack();
  };

  return (
    <Layout_LoginFlow
      id="$b1"
      inHasOverlay={useOverlay}
      inExtendedClass="ubt-policies"
      onOnPathCalculated={defineHeight}
      onOnReady={(mainId) => {
        mainContainerRef.current = mainId;
        setMainContainer(mainId);
        defineHeight();
      }}
      placeholderContent={
        <>
          <div className="ubt-policies--content" data-container="" id="Content" style={{ textAlign: 'center' }}>
            <div className="ubt-policies--header" data-container="">
              <CustomContainer id="$b2" options={{ PaddingSize: { BottomSizeId: UBT_Size.Small } }}>
                <CustomText
                  id="$b3"
                  inText="Welcome to"
                  inTextOptions={{
                    Color: UBT_Color.Neutral0,
                    FontSize: UBT_FontSize_Heading3,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                />
              </CustomContainer>
              <img
                className="login-screen__connect-logo ThemeGrid_MarginGutter"
                data-image=""
                src={osImage('img/UBTConnect.ConnectLogoWhite.svg')}
              />
              <CustomContainer
                id="$b4"
                options={{ PaddingSize: { TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Medium } }}
              >
                <CustomText id="$b5" inTextOptions={TEXT_BASE_SEMIBOLD} inText="Connect and Directory" />
                <CustomText
                  id="$b6"
                  inTextOptions={TEXT_BASE_SEMIBOLD}
                  inText="Terms and Conditions & Privacy Policy"
                />
              </CustomContainer>
            </div>
            <Policy_Custom_AcceptPendingPolicies
              id="$b7"
              country={userCountry}
              policyApplications={POLICY_APPLICATIONS}
              contentBlockId={mainContainer}
              onAcceptedAll={acceptedAll}
              onNetworkError={showCommunicationExceptionMessage}
            />
          </div>
          <BackNavigationHandler
            id="$b8"
            onBackNavigation={(event) => {
              event.preventDefault(); // PreventNavigation
            }}
          />
        </>
      }
      placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b9" inIgnorePolicy />}
    />
  );
}
