import { DetailLayout } from '@/components/layout';
import { useNavigateBack } from '@/platform/navigation';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CacheControl_UserInfo_Wrapper } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { Dialog_CustomChoice } from '@/shared/UBTConnect/Dialog_CustomChoice';
import { Menu_List } from '@/shared/UBTConnect/Menu_List';
import { Version } from '@/shared/UBTConnect/Version';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import {
  UBT_Color,
  UBT_Display,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_JustifyContent,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { MenuUserHeader } from './components/MenuUserHeader';
import { useMenu } from './hooks/useMenu';
import { UBT_FontSize_Heading5 } from './staticEntities';

/** @origin UBTConnect.App_Menu.Menu
    The Menu route: the detail layout (title on the left) with the user header, the Menu_List of the menu options and
    the Version as content, and the bottom bar (Menu, root page). Outside the layout: the two Dialog_CustomChoice
    (PopUp_Logout, Popup_SubmitPhotoRequest) and CacheControl_UserInfo_Wrapper, whose result fills the header and the
    subscription and photo rows. The flows are in useMenu. */
export default function Menu() {
  const navigateBack = useNavigateBack();
  const { state, menuSection, onUserInformation, onEditYourAccount, onMenuOption } = useMenu();
  const { user } = state;

  return (
    <>
      <DetailLayout
        id="$b1"
        alignTitleLeft
        onBack={navigateBack}
        headerTitle={
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
              <MenuUserHeader
                isLoading={!state.isFetched}
                memberId={user?.MemberID ?? '0'}
                photoUrl={user?.Directory_UserCurrent_Member.Photo.SignedURL ?? ''}
                fullName={user?.FullName ?? ''}
                onEditYourAccount={onEditYourAccount}
              />
              <Menu_List id="$b10" inMenuSection={menuSection} onOnClickMenuOption={onMenuOption} />
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
        commonUI={<CommonUI_InsideLayout id="$b14" />}
      />
      <Dialog_CustomChoice
        id="PopUp_Logout"
        scope="b15"
        placeholderHeader="Logout"
        placeholderBody="Are you sure you wish to logout?"
        placeholderButtonLabel="Yes"
        placeholderDismissButtonLabe="No"
      />
      <CacheControl_UserInfo_Wrapper id="$b16" onResult={onUserInformation} />
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
