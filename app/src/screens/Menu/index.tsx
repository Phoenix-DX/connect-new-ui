import { useMemo, useState } from 'react';
import { signOut } from '@/platform/session/auth';
import { confirmAction } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { TransitionAnimation, useOsNavigate } from '@/platform/navigation';
import { OSLink } from '@/shared/lib/OSLink';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CacheControl_UserInfo_Wrapper } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper';
import type { Directory_UserCurrent } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { Dialog_CustomChoice } from '@/shared/UBTConnect/Dialog_CustomChoice';
import { Menu_List } from '@/shared/UBTConnect/Menu_List';
import { Version } from '@/shared/UBTConnect/Version';
import { openInApp_OpenExternalLink } from '@/shared/UBTConnect_Utils/lib/actions';
import { Connect_BottomBar_Items, Connect_Entity, UBT_ImageSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_Display,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_JustifyContent,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { requestPhotoUpdate } from './api';
import { applyUserInformation, menu_GetList, toMenuOptionList } from './components/actions';
import { Connect_Menu_Items, UBT_FontSize_Heading5 } from './components/staticEntities';
import type { MenuModel } from './types';

/** UBTConnect App_Menu.Menu (p:UBTConnect.App_Menu.Menu.mvc.js: model :1-70, view :72-705, controller :707-1100).
    Layout_DetailPage (title left) with the signed-in user's header (avatar, name, "Edit your account"), the Menu_List of
    Menu_GetList, the Version and the bottom bar (Menu, root page); outside the layout the two Dialog_CustomChoice
    (PopUp_Logout, Popup_SubmitPhotoRequest) and CacheControl_UserInfo_Wrapper, whose Result fills the header and the
    subscription / photo rows. No OnReady, no data action of its own; RequestPhotoUpdate runs on its row's confirm. */
export default function Menu() {
  const navigate = useOsNavigate();
  /* ScreenEvent_OnInitialize (:881-919): MenuOptionList from Menu_GetList; the user record stays the default until the
     cache answers (isFetched False). */
  const [model, setModel] = useState<MenuModel>(() => ({
    menuOptionList: toMenuOptionList(menu_GetList()),
    user: null,
    isFetched: false,
  }));
  const user = model.user;

  /* In_MenuSection (view :440-449): a new record (HasSeparator True, no title) whenever MenuOptionList changes. */
  const menuSection = useMemo(() => ({ MenuOptions: model.menuOptionList }), [model.menuOptionList]);

  /* CacheControl_UserInfo_WrapperResult (:795-880). */
  const cacheControl_UserInfo_WrapperResult = (userInformation: Directory_UserCurrent) => {
    setModel((m) => ({
      menuOptionList: applyUserInformation(m.menuOptionList, userInformation),
      user: userInformation,
      isFetched: true,
    }));
  };

  /* OnClick_EditYourAccount (:920-948): Profile once the user information is fetched. */
  const onClick_EditYourAccount = () => {
    if (model.isFetched) navigate('/UBTConnect/Profile');
  };

  /* Action_Logout (:747-794): ConfirmAction(PopUp_Logout); confirmed → Connect_Logout (the shell's mock signOut(): no
     AppManager_Logout server call, shell spec 10) → HomeFeed, where the shell's signed-out gate opens Login. */
  const action_Logout = async () => {
    const confirmed = await confirmAction('PopUp_Logout');
    if (!confirmed) return;
    await signOut();
    navigate('/UBTConnect/HomeFeed', undefined, { transition: TransitionAnimation.Fade }); // Menu.mvc.js:773
  };

  /* OnClick_MenuOption(Id) (:949-1045). */
  const onClick_MenuOption = async (id: string) => {
    switch (id) {
      case Connect_Menu_Items.LogOut:
        await action_Logout();
        return;
      case Connect_Menu_Items.ContactUs:
        navigate('/UBTConnect/ContactUsMenu');
        return;
      case Connect_Menu_Items.TermsAndPolicies:
        navigate('/UBTConnect/TermsAndPoliciesMenu');
        return;
      case Connect_Menu_Items.PINAndBiometrics:
        navigate('/UBTConnect/PINBiometricsMenu');
        return;
      case Connect_Menu_Items.SubscriptionAndPayments:
        if (model.isFetched && user)
          openInApp_OpenExternalLink(user.Directory_UserCurrent_Subscription.SubscriptionManageLink, true);
        return;
      case Connect_Menu_Items.RequestPhotoUpdate: {
        const confirmed = await confirmAction('Popup_SubmitPhotoRequest');
        if (!confirmed) return;
        await requestPhotoUpdate();
        showFeedbackMessage('Your update photo request has been submitted.', PLATFORM_MESSAGE_TYPE.success);
        return;
      }
      default:
        showFeedbackMessage(`Go to ${id}`, PLATFORM_MESSAGE_TYPE.info);
    }
  };

  return (
    <>
      <Layout_DetailPage
        id="$b1"
        inAlignTitleLeft
        placeholderHeaderTitle={
          <CustomText
            id="$b2"
            inText="Menu"
            inTextOptions={{
              Color: UBT_Color.Neutral0,
              FontSize: UBT_FontSize_Heading5,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
          />
        }
        content={
          <CustomContainer
            id="$b3"
            extendedClasses="full-height"
            options={{
              DisplayOptions: {
                Display: UBT_Display.Flex,
                JustifyContent: UBT_JustifyContent.SpaceBetween,
                FlexDirection: UBT_FlexDirection.Column,
              },
            }}
          >
            <div data-container="">
              <SkeletonSection id="$b4" inIsLoading={!model.isFetched}>
                <CustomContainer
                  id="Header"
                  options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } }}
                >
                  <Columns_Two
                    id="$b6"
                    columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, SpacingSize: UBT_Size.Base }}
                    left={
                      <UBT_LazyImage
                        id="$b7"
                        entityId={user?.MemberID ?? '0'}
                        imageSize={{ Height: UBT_ImageSize.Small_40, Width: UBT_ImageSize.Square }}
                        entityType={Connect_Entity.Member}
                        imageURL={user?.Directory_UserCurrent_Member.Photo.SignedURL ?? ''}
                      />
                    }
                    right={
                      <>
                        <div data-container="">
                          <CustomText
                            id="$b8"
                            inText={user?.FullName ?? ''}
                            inTextOptions={{
                              Color: UBT_Color.Neutral9,
                              FontSize: UBT_FontSize.Base,
                              FontWeight: UBT_FontWeight.SemiBold,
                            }}
                          />
                        </div>
                        <OSLink onClick={onClick_EditYourAccount}>
                          <CustomText
                            id="$b9"
                            inText="Edit your account"
                            inTextOptions={{
                              Color: UBT_Color.Primary,
                              FontSize: UBT_FontSize.ExtraSmall,
                              FontWeight: UBT_FontWeight.SemiBold,
                              IsUnderlined: true,
                            }}
                          />
                        </OSLink>
                      </>
                    }
                  />
                </CustomContainer>
              </SkeletonSection>
              <Menu_List
                id="$b10"
                inMenuSection={menuSection}
                onOnClickMenuOption={(option) => {
                  onClick_MenuOption(option.Id ?? '').catch(raiseToFlowHandler);
                }}
              />
            </div>
            <CustomContainer
              id="$b11"
              options={{
                MarginSize: { VerticalSizeId: UBT_Size.Small },
                TextOptions: { Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.DoubleExtraSmall },
                DisplayOptions: { Display: UBT_Display.Flex, JustifyContent: UBT_JustifyContent.Center },
              }}
            >
              <Version id="$b12" />
            </CustomContainer>
          </CustomContainer>
        }
        bottom={<BottomBarMenu id="$b13" activeItem={Connect_BottomBar_Items.Menu} isRootPage />}
        placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b14" />}
      />
      <Dialog_CustomChoice
        id="PopUp_Logout"
        scope="b15"
        placeholderHeader="Logout"
        placeholderBody="Are you sure you wish to logout?"
        placeholderButtonLabel="Yes"
        placeholderDismissButtonLabe="No"
      />
      <CacheControl_UserInfo_Wrapper id="$b16" onResult={cacheControl_UserInfo_WrapperResult} />
      <Dialog_CustomChoice
        id="Popup_SubmitPhotoRequest"
        scope="b17"
        placeholderHeader={<span data-expression="">Photo Request?</span>}
        placeholderBody={<span data-expression="">Are you sure you wish to request a photo update?</span>}
        placeholderButtonLabel="Submit"
        placeholderDismissButtonLabe="Cancel"
      />
    </>
  );
}
