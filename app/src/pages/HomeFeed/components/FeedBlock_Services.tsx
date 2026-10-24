import type { ExternalAppPopUpInfo, ServiceItem, ServicesPage } from '@/api/service';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Carousel } from '@/components/ui/Carousel';
import { Gallery } from '@/components/ui/Gallery';
import { CarouselNavigation } from '@/components/ui/lib/staticEntities';
import { CircleButton } from '@/components/ui/CircleButton';
import { CircleButtonWithLabel } from '@/components/ui/CircleButtonWithLabel';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import {
  UBT_AvatarSize,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconsSize,
  UBT_Shape,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { UBT_IconSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { MAIN_ELEMENT_CLASS } from '@/pages/HomeFeed/hooks/feedServicesState';
import { UBT_Shadow_Small, UBT_Icons2 } from '@/pages/HomeFeed/staticEntities';
import { Dialog_GoExternalApp } from './Dialog_GoExternalApp';

export interface FeedBlock_ServicesProps {
  /** Block instance id (HomeFeed: `$b5`). */
  id: string;
  /** GetHasCustomEvents (`C2EnableCustomServices`): the settings button. */
  hasCustomEvents: boolean;
  /** Local_ServicesPerPage: the slides of the carousel. */
  pages: ServicesPage[];
  /** GetServices has data: the list keys of the fetched pages. */
  hasData: boolean;
  /** The services show as skeletons. */
  isLoading: boolean;
  /** The app that Dialog_GoExternalApp shows. */
  externalAppPopUpInfo: ExternalAppPopUpInfo;
  /** The OnPopUpReady event of Dialog_GoExternalApp. */
  onPopUpReady: (popUpId: string) => void;
  /** OnClick_ServiceSettings. */
  onClickServiceSettings: () => void;
  /** OnClick_Service. */
  onClickService: (service: ServiceItem) => void;
  /** The confirm of Dialog_GoExternalApp. */
  onGoToExternalApp: () => void;
}

/** The "Services" card of the home feed: the title, the settings button when GetHasCustomEvents, and a carousel with
    dots of the pages of services, each service a round button with its label in a skeleton. Dialog_GoExternalApp
    opens for the external apps. The flows are in useFeedServices. Captured dom/default.html (data) and
    dom/loading.html (the skeleton page).
    @origin UBTConnect.Home.FeedBlock_Services */
export function FeedBlock_Services({
  id,
  hasCustomEvents,
  pages,
  hasData,
  isLoading,
  externalAppPopUpInfo,
  onPopUpReady,
  onClickServiceSettings,
  onClickService,
  onGoToExternalApp,
}: FeedBlock_ServicesProps) {
  const scope = id.replace('$', '');
  // The runtime list keys of the capture: the skeleton page `l2-52_0` > `l2-53_i`; the fetched pages `l2-53_<p>` >
  // `l2-100_i`.
  const pageKey = (p: number) => (hasData ? `l2-53_${p + 1}` : `l2-52_${p}`);
  const itemKey = (i: number) => (hasData ? `l2-100_${i}` : `l2-53_${i}`);

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
        <ColumnsTwo
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
                onOnClick={onClickServiceSettings}
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
                          <Skeleton key={itemScope} id={`${itemScope}-$b9`} isLoading={isLoading}>
                            <CircleButtonWithLabel
                              id={`${itemScope}-$b10`}
                              borderColorId={UBT_Color.Neutral3}
                              sizeId={UBT_AvatarSize.Large_65}
                              backgroundColorId={UBT_Color.Neutral0}
                              paddingSize={isSvg ? undefined : UBT_Size.Small}
                              onOnClick={() => {
                                onClickService(service);
                              }}
                              icon={
                                <Icon
                                  id={`${itemScope}-$b11`}
                                  inIconId={service.iconId}
                                  inSizeId={isSvg ? UBT_IconSize.NonStandard_64 : UBT_IconsSize.Display_36}
                                />
                              }
                              text={<span data-expression="">{service.name}</span>}
                            />
                          </Skeleton>
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
      <Dialog_GoExternalApp
        id={`${scope}-$b12`}
        externalAppPopUpInfo={externalAppPopUpInfo}
        onOnPopUpReady={onPopUpReady}
        onGoToExternalApp={onGoToExternalApp}
      />
    </OSBlock>
  );
}
