import { DetailLayout } from '@/components/layout';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MenuList } from '@/components/menu/MenuList';
import { OSList } from '@/components/ui/os/OSList';
import { useNavigateBack } from '@/platform/navigation';
import { SectionSeparator } from '@/components/ui/SectionSeparator';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_FontSize, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { useContactUsMenu } from './hooks/useContactUsMenu';

/** Runtime key of the sections List in the captures (`l1-37_<n>`). */
const LIST_KEY = '37';

/** @origin UBTConnect.App_Menu_ContactUs.ContactUsMenu
    The Contact Us route: the detail layout (default inputs) titled "Contact Us", with an intro text, the List of the
    Menu_List sections built on the client and a closing SectionSeparator as content, and CommonUI_InsideLayout with
    the two ignore variables. The screen has no input and no server call of its own: the calls of the capture are the
    app start's. The flows are in useContactUsMenu. */
export default function ContactUsMenu() {
  const navigateBack = useNavigateBack();
  const { contactUsMenu, ignore, onClickMenuOption } = useContactUsMenu();

  return (
    <DetailLayout
      id="$b1"
      onBack={navigateBack}
      headerTitle="Contact Us"
      content={
        <>
          <CustomContainer
            id="$b2"
            options={{
              PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
              TextOptions: { Color: UBT_Color.Neutral10, FontSize: UBT_FontSize.Small },
            }}
          >
            <span data-expression="">
              Please select the most relevant category so our Customer Care Team can direct your request to the right
              team.
            </span>
          </CustomContainer>
          <div className="contact-us-menu" data-container="">
            <OSList
              className="list list-group"
              animateItems
              positionRelative
              source={contactUsMenu}
              keyOf={(_s, i) => `${LIST_KEY}_${i}`}
            >
              {(section, i) => (
                <MenuList
                  id={`l1-${LIST_KEY}_${i}-$b3`}
                  inMenuSection={section}
                  onOnClickMenuOption={(option) => {
                    onClickMenuOption(section, option);
                  }}
                />
              )}
            </OSList>
          </div>
          <SectionSeparator id="$b4" />
        </>
      }
      commonUI={<CommonUiLayout id="$b5" inIgnorePolicy={ignore.polices} inIgnoreLockScreen={ignore.lockedScreen} />}
    />
  );
}
