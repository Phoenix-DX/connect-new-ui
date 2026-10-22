// @os-block UBTConnect.Home.FeedBlock_Services
import { useCallback, useMemo, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { useFlagOn } from '@/platform/flags/flags';
import { confirmAction } from '@/platform/feedback/dialogs';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { Carousel } from '@/shared/osui/Carousel';
import { Gallery } from '@/shared/osui/Gallery';
import { CarouselNavigation } from '@/shared/osui/lib/staticEntities';
import { CircleButton } from '@/shared/UBTConnectLibrary/CircleButton';
import { CircleButton_WithLabel } from '@/shared/UBTConnectLibrary/CircleButton_WithLabel';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import {
  UBT_AvatarSize,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons,
  UBT_IconsSize,
  UBT_Shape,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { openInApp_OpenExternalLink } from '@/shared/UBTConnect_Utils/lib/actions';
import { UBT_IconSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { useGetServices } from '@/screens/HomeFeed/api';
import type { ExternalAppPopUpInfo, ServiceItem, ServicesData, ServicesPage } from '@/screens/HomeFeed/types';
import { Dialog_GoExternalApp } from './Dialog_GoExternalApp';
import { Connect_Services, UBT_Icons2, UBT_Shadow_Small } from './staticEntities';

const MAIN_ELEMENT_CLASS = 'ubt-services-carousel';
const EMPTY_SERVICE: ServiceItem = { id: '', iconId: '', name: '', order: 0 };
const EMPTY_POPUP_INFO: ExternalAppPopUpInfo = { appName: '', packageName: '', iconId: '' };
/** OnInitialize (Services.mvc.js:820-835): one page of five empty services, shown as skeletons until the fetch. */
const INITIAL_PAGES: ServicesPage[] = [{ pageNumber: 1, serviceItems: Array.from({ length: 5 }, () => EMPTY_SERVICE) }];

/** OnAfterFetch_GetServices (Services.mvc.js:836-900): optional "Add Service" item, then pages of ItemPerPage items. */
function toPages(data: ServicesData, itemPerPage: number, forceAddService: boolean): ServicesPage[] {
  const list = data.services.map((s) => ({ id: s.id, iconId: s.iconId, name: s.label, order: s.order }));
  if (forceAddService) {
    // AddCircle icon id not captured (ForceAddService is False on HomeFeed).
    list.push({ id: '', iconId: '', name: 'Add Service', order: list.length + 1 });
  }
  const pages: ServicesPage[] = [];
  for (let i = 0, page = 1; i < list.length; i += itemPerPage, page++) {
    pages.push({ pageNumber: page, serviceItems: list.slice(i, i + itemPerPage) });
  }
  return pages;
}

export interface FeedBlock_ServicesProps {
  /** Block instance id (HomeFeed: `$b5`). */
  id: string;
  itemPerPage?: number;
  forceAddService?: boolean;
}

/** UBTConnect Home.FeedBlock_Services (p:UBTConnect.Home.FeedBlock_Services.mvc.js view :188-660): "Services" card
    with the settings button (GetHasCustomEvents) and a Dots carousel of service pages; Dialog_GoExternalApp for the
    external apps. Captured dom/default.html:130-433 (data), dom/loading.html (skeleton page). */
export function FeedBlock_Services({ id, itemPerPage = 6, forceAddService = false }: FeedBlock_ServicesProps) {
  const scope = id.replace('$', '');
  const navigate = useOsNavigate();
  const hasCustomEvents = useFlagOn('C2EnableCustomServices'); // GetHasCustomEvents (default-only, on)
  const hasNewLDM = useFlagOn('C2NewLDM'); // GetHasNewLDM (default-only, on)
  const [externalAppPopUpId, setExternalAppPopUpId] = useState('');
  const [popUpInfo, setPopUpInfo] = useState<ExternalAppPopUpInfo>(EMPTY_POPUP_INFO);
  const services = useGetServices(() => ({
    mainElementClass: MAIN_ELEMENT_CLASS,
    servicesPerPage: INITIAL_PAGES,
    // fetched at start, before Dialog_GoExternalApp's OnReady and any click: both still empty
    externalAppPopUpId: '',
    externalAppPopUpInfo: EMPTY_POPUP_INFO,
    itemPerPage,
    forceAddService,
  }));
  const pages = useMemo(
    () => (services.data ? toPages(services.data, itemPerPage, forceAddService) : INITIAL_PAGES),
    [services.data, itemPerPage, forceAddService],
  );
  const isLoading = !services.isSuccess || services.isError; // not IsDataFetched or HasFetchError
  // Runtime list keys of the capture: skeleton page `l2-52_0` > `l2-53_i`; fetched pages `l2-53_<p>` > `l2-100_i`.
  const pageKey = (p: number) => (services.data ? `l2-53_${p + 1}` : `l2-52_${p}`);
  const itemKey = (i: number) => (services.data ? `l2-100_${i}` : `l2-53_${i}`);

  const onPopUpReady = useCallback((popUpId: string) => {
    setExternalAppPopUpId(popUpId);
  }, []);

  // OnClick_Service (Services.mvc.js:940-1090), Connect_Services ids = TST values (components/staticEntities.ts).
  const onClickService = async (selected: ServiceItem) => {
    const go = (screen: string) => {
      navigate(`/${APP_ID}/${screen}`);
    };
    const S = Connect_Services;
    const is = (record: string) => selected.id === record;
    if (is(S.Orbit)) {
      go('OrbitLanding');
      return;
    }
    if (is(S.LDM)) {
      if (hasNewLDM) {
        go('LDM_MyEvents_V2');
        return;
      } // off branch (LDM_MyEvents) not built: default-only
      return undefined;
    }
    if (is(S.MyCalendar)) {
      go('MyEntertaining');
      return;
    }
    if (is(S.Assemble)) {
      go('AssembleEvents');
      return;
    }
    if (is(S.OrbitAdmin)) {
      go('OrbitAdminLanding');
      return;
    }
    if (is(S.MyNotes)) {
      go('Notes');
      return;
    }
    const data = services.data;
    let info: ExternalAppPopUpInfo;
    if (is(S.Trove)) {
      info = { appName: 'Trove', packageName: data?.externalPackagesTrove ?? '', iconId: UBT_Icons2.Trove };
    } else if (is(S.HR100)) {
      info = { appName: 'HR100', packageName: data?.externalPackagesHR100 ?? '', iconId: UBT_Icons.SVG_HR100 };
    } else if (is(S.CommunityTradelink)) {
      info = {
        appName: 'Community Tradelink',
        packageName: data?.externalPackagesCommunityTradelink ?? '',
        iconId: UBT_Icons.SVG_CommunityTradelink,
      };
    } else if (is(S.ElGusto)) {
      // ExternalLink = GetServices.ExternalLinks_ElGusto; OpenInApp_OpenExternalLink(ExternalLink, False)
      // (FeedBlock_Services.mvc.js:1042-1046; shared since CR-HomeFeed-1).
      openInApp_OpenExternalLink(data?.externalLinksElGusto ?? '', false);
      return undefined;
    } else if (is(S.OneSchoolGlobal)) {
      feedbackMessageAutoClose({
        title: 'Coming soon',
        message: 'This feature will be coming soon.',
        messageType: 'info',
        encodedHtml: true,
        extendedClass: '',
        delayMs: 0,
        useDebounce: false,
      });
      return undefined;
    } else {
      return undefined;
    }
    setPopUpInfo(info);
    // ConfirmAction(ExternalAppPopUp_Id) (raw FeedBlock_Services.mvc.js:1064-1066): Dialog_GoExternalApp's confirm runs
    // GoToExternalApp → OpenInApp_OpenApp(PackageName) (CR-HomeFeed-1).
    await confirmAction(externalAppPopUpId);
    return undefined;
  };

  return (
    <OSBlock name="Home.FeedBlock_Services" id={id}>
      <CustomContainer
        id={`${scope}-DIV_Services`}
        extendedClasses={MAIN_ELEMENT_CLASS}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0, Opacity: 0.87 },
          PaddingSize: { GeneralSizeId: UBT_Size.Small },
          BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Large } },
          DisplayOptions: {},
          ShadowId: UBT_Shadow_Small,
        }}
      >
        <Columns_Two
          id={`${scope}-$b2`}
          extendedClasses="padding-x-s"
          columnOptions={{
            ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
            SpacingSize: UBT_Size.Small,
            VerticalAlign: UBT_VerticalAlign.Center,
          }}
          left={
            <CustomText
              id={`${scope}-$b3`}
              extendedClasses="margin-left-s"
              inTextOptions={{ FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold }}
              inText="Services"
            />
          }
          right={
            hasCustomEvents ? (
              <CircleButton
                id={`${scope}-$b4`}
                sizeId={UBT_AvatarSize.ExtraSmall_32}
                borderColorId={UBT_Color.Neutral3}
                backgroundColorId={UBT_Color.Neutral0}
                onOnClick={() => {
                  navigate(`/${APP_ID}/Services`);
                }} // OnClick_ServiceSettings
                icon={
                  <Icon
                    id={`${scope}-$b5`}
                    inColorId={UBT_Color.Neutral7}
                    inIconId={UBT_Icons2.Settings}
                    inSizeId={UBT_IconSize.Base_24}
                  />
                }
              />
            ) : null
          }
        />
        <CustomContainer id={`${scope}-$b6`} options={{ MarginSize: { TopSizeId: UBT_Size.ExtraSmall } }}>
          <Carousel
            id={`${scope}-Carousel_Services`}
            extendedClass={MAIN_ELEMENT_CLASS}
            navigation={CarouselNavigation.Dots}
            itemsPerSlide={{ Desktop: 1, Tablet: 1, Phone: 1 }}
            optionalConfigs={{ AutoPlay: false, Loop: false, Padding: 'var(--space-s)', StartingPosition: 0 }}
          >
            <div
              className={`list list-group ${MAIN_ELEMENT_CLASS}__list OSFillParent`}
              data-animation-disabled=""
              data-list=""
              data-virtualization-disabled=""
            >
              {pages.map((page, p) => {
                const pageScope = `${scope}-${pageKey(p)}`;
                return (
                  <Gallery
                    key={pageScope}
                    id={`${pageScope}-$b8`}
                    rowItemsTablet={3}
                    rowItemsPhone={3}
                    rowItemsDesktop={3}
                    extendedClass={`${MAIN_ELEMENT_CLASS}__gallery`}
                  >
                    <div
                      className={`list list-group ${MAIN_ELEMENT_CLASS}__list-items OSFillParent`}
                      data-animation-disabled=""
                      data-list=""
                      data-virtualization-disabled=""
                    >
                      {page.serviceItems.map((service, i) => {
                        const itemScope = `${pageScope}-${itemKey(i)}`;
                        const isSvg = service.iconId.includes('SVG_');
                        return (
                          <SkeletonSection key={itemScope} id={`${itemScope}-$b9`} inIsLoading={isLoading}>
                            <CircleButton_WithLabel
                              id={`${itemScope}-$b10`}
                              borderColorId={UBT_Color.Neutral3}
                              sizeId={UBT_AvatarSize.Large_65}
                              backgroundColorId={UBT_Color.Neutral0}
                              paddingSize={isSvg ? undefined : UBT_Size.Small}
                              onOnClick={() => void onClickService(service)}
                              icon={
                                <Icon
                                  id={`${itemScope}-$b11`}
                                  inIconId={service.iconId}
                                  inSizeId={isSvg ? UBT_IconSize.NonStandard_64 : UBT_IconsSize.Display_36}
                                />
                              }
                              text={<span data-expression="">{service.name}</span>}
                            />
                          </SkeletonSection>
                        );
                      })}
                    </div>
                  </Gallery>
                );
              })}
            </div>
          </Carousel>
        </CustomContainer>
      </CustomContainer>
      <Dialog_GoExternalApp id={`${scope}-$b12`} externalAppPopUpInfo={popUpInfo} onOnPopUpReady={onPopUpReady} />
    </OSBlock>
  );
}
