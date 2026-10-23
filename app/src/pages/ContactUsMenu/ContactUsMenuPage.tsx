/** @origin UBTConnect.App_Menu_ContactUs.ContactUsMenu */
import { useEffect, useState } from 'react';
import { OSList } from '@/components/ui/os/OSList';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MenuList } from '@/components/menu/MenuList';
import { SectionSeparator } from '@/shared/UBTConnect/SectionSeparator';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { UBT_Color, UBT_FontSize, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { pinCheck } from '@/platform/session/pin';
import { currentUserId } from '@/platform/session/session';
import { get_ContactUsMenuSections } from './components/actions';
import type { ContactUsDetailsParams, UI_MenuSection } from './types';

/** Runtime key of the sections List in the captures (`l1-37_<n>`, dom/default.html:44, 253, 321). */
const LIST_KEY = '37';

/** UBTConnect App_Menu_ContactUs.ContactUsMenu (p:UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc.js: model :1-67,
    view :69-322, controller :324-512). Layout_DetailPage "Contact Us" with an intro text, the List of Menu_List
    sections built on the client (Get_ContactUsMenuSections) and a closing SectionSeparator. No server call of its own
    (:341). */
export default function ContactUsMenu() {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  /* ScreenEvent_OnInitialize (:343-394), run before the first render:
     PIN_Check; IgnorePolices = GetUserId = NullIdentifier or PIN_Check.NeedRegister (:367-368);
     IgnoreLockedScreen = GetUserId <> NullIdentifier and PIN_Check.NeedRegister (:370-371). */
  const [ignore] = useState(() => {
    const needRegister = pinCheck().needRegister;
    const signedIn = currentUserId() !== null;
    return { polices: !signedIn || needRegister, lockedScreen: signedIn && needRegister };
  });
  /* IsViewRestoredFromCache (:373-380, P-BACK): a restored view keeps ContactUs_Menu; otherwise ContactUs_Menu =
     Get_ContactUsMenuSections.Out_ContactUsMenuSections (:385-389). The view cache keeps the variable (useViewState). */
  const [cached, setCached] = useViewState<UI_MenuSection[] | null>('ContactUs_Menu', null);
  const [contactUsMenu] = useState<UI_MenuSection[]>(() =>
    restored && cached !== null ? cached : get_ContactUsMenuSections(currentUserId() !== null),
  );
  useEffect(() => {
    setCached(contactUsMenu);
  }, [contactUsMenu, setCached]);

  /* OnClick_MenuOption(Event_ListMenuOptionId) (:411-441), from the clicked section's Menu_List (:243-256):
     ListIndexOf(current section MenuOptions, Id = Event_ListMenuOptionId), then ContactUsDetails with the row's Id
     (TextToIdentifier, as Text), the section title and the row's Label, transition Default. */
  const onClick_MenuOption = (section: UI_MenuSection, eventListMenuOptionId: string) => {
    const options = section.MenuOptions ?? [];
    const position = options.findIndex((p) => (p.Id ?? '') === eventListMenuOptionId);
    const row = options[position] ?? {};
    const params: ContactUsDetailsParams = {
      In_ContactSubjectId: row.Id ?? '',
      In_ContactSubjectTitle: section.SectionTitle ?? '',
      In_ListMenuOptionLabel: row.Label ?? '',
    };
    navigate('/UBTConnect/ContactUsDetails', { ...params });
  };

  return (
    <Layout_DetailPage
      id="$b1"
      placeholderHeaderTitle="Contact Us"
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
                    try {
                      onClick_MenuOption(section, option.Id ?? '');
                    } catch (error) {
                      raiseToFlowHandler(error);
                    }
                  }}
                />
              )}
            </OSList>
          </div>
          <SectionSeparator id="$b4" />
        </>
      }
      placeholderCommonUIInsideLayout={
        <CommonUiLayout id="$b5" inIgnorePolicy={ignore.polices} inIgnoreLockScreen={ignore.lockedScreen} />
      }
    />
  );
}
