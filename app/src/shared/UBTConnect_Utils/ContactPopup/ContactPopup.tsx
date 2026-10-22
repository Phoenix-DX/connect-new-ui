// @os-block UBTConnect_Utils.CW_CTA_PopUps.ContactPopup
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { NotCaptured } from '@/app/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';
import { PreventBackNavigation } from '@/shared/NavigationHandler/PreventBackNavigation';
import { Button } from '@/shared/UBTConnectLibrary/Button';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { LazyImage } from '@/shared/UBTConnectLibrary/LazyImage';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import {
  UBT_ButtonSize,
  UBT_ButtonType,
  UBT_Color,
  UBT_FlexBehavior,
  UBT_FontSize as UBT_FontSize_Library,
  UBT_FontWeight,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import {
  UBT_FontSize,
  UBT_IconSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Shape,
} from '@/shared/UBTConnect_Utils/lib/staticEntities';
import type { ContactPopupButton, ContactPopupData } from './types';

export interface ContactPopupProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ContactPopupData: ShowPopup opens the popup; title, timezone, image, number and loading state. */
  inContactPopupData?: ContactPopupData;
  /** In_ContactPopupButtons: one button per record (the first one primary). */
  inContactPopupButtons?: ContactPopupButton[];
  /** In_ImageSizeId: UBT_ImageSize identifier of the image height (default ExtraLarge_100). */
  inImageSizeId?: string;
  /** Event Event_Clicked (Event_Id, Event_RowNumber). */
  onEventClicked?: (eventId: string, eventRowNumber: number) => void;
  /** Event Event_Cancel: the Cancel button, or a prevented back navigation while the popup shows. */
  onEventCancel?: () => void;
}

/** OnInitialize (ContactPopup.mvc.js:1003-1020): two "Loading" call buttons shown while In_ContactPopupData.IsLoading. */
const SKELETON_BUTTONS: ContactPopupButton[] = [
  { UBT_IconId: UBT_Icons.CallFill, Label: 'Loading' },
  { UBT_IconId: UBT_Icons.CallFill, Label: 'Loading' },
];

/* Compiled view: ContactPopup.mvc.js:178-890 (ContactUsDetails copy). Only the closed state is captured (an empty root,
   ContactUsDetails/default); the open popup follows the compiled view inside the OutSystems Popup widget markup captured
   on HouseholdDetails/default (dom:1392-1398: portal-class wrapper in <body>, backdrop, dialog, content). */
export function ContactPopup({
  id,
  inContactPopupData = {},
  inContactPopupButtons = [],
  inImageSizeId = UBT_ImageSize.ExtraLarge_100,
  onEventClicked,
  onEventCancel,
}: ContactPopupProps) {
  const [skeletonButtonList] = useState(SKELETON_BUTTONS);
  const data = inContactPopupData;
  const showPopup = data.ShowPopup ?? false;
  usePopupWidget(showPopup); // OSWidgets.Popup ShowPopup = ContactPopupData.ShowPopup
  const showTimezone = data.ShowTimezone ?? false;
  const isLoading = data.IsLoading ?? false;
  const imageURL = data.ImageURL ?? '';
  const actionName = data.ActionName ?? '';
  const displayContactNumber = data.DisplayContactNumber ?? '';
  // :282: ActionName + If(ActionName <> "", " ", "") + Name + TitleTerminator
  const title = actionName + (actionName !== '' ? ' ' : '') + (data.Name ?? '') + (data.TitleTerminator ?? '');
  // :644: the skeleton list while loading
  const buttons = isLoading ? skeletonButtonList : inContactPopupButtons;
  const cancel = () => {
    onEventCancel?.();
  };

  const content = (
    <div className="text-align-center" data-container="">
      <CustomContainer options={{ PaddingSize: {} }}>
        <div data-container="">
          <CustomContainer
            options={{
              PaddingSize: { TopSizeId: UBT_Size.Small, BottomSizeId: showTimezone ? '' : UBT_Size.Base },
              TextOptions: {
                Color: UBT_Color.Neutral10,
                FontSize: UBT_FontSize.Heading6,
                FontWeight: UBT_FontWeight.SemiBold,
              },
            }}
          >
            <span data-expression="">{title}</span>
          </CustomContainer>
          {showTimezone &&
            ((data.IsFetchingTimezone ?? false) ? (
              <SkeletonSection inIsLoading>
                <span data-expression="">Fetching the user Timezone</span>
              </SkeletonSection>
            ) : (
              <CustomContainer
                options={{
                  PaddingSize: { BottomSizeId: UBT_Size.Base },
                  TextOptions: {
                    Color: UBT_Color.Neutral7,
                    FontSize: UBT_FontSize_Library.DoubleExtraSmall,
                    FontWeight: UBT_FontWeight.SemiBold,
                  },
                }}
              >
                {/* TargetTimeLabel = GetTargetTimeLabel(TimezoneName, TimezoneOffset, CountryName or Locality)
                    (:930-945): UBTConnectLibrary GetTargetTimeLabel is in no available source. */}
                <NotCaptured name="ContactPopup target time label (UBTConnectLibrary GetTargetTimeLabel not available)" />
              </CustomContainer>
            ))}
        </div>
        {(data.ShowImage ?? false) && (
          <SkeletonSection inIsLoading={isLoading && imageURL === ''}>
            {(data.IsAvatarImage ?? false) ? (
              <div className="ubt-object-fit-avatar-img" data-container="">
                <UBT_LazyImage
                  imageSize={{ Height: inImageSizeId, Width: UBT_ImageSize.Square }}
                  imageURL={imageURL}
                  inBorderRadius={UBT_Shape.Circle}
                  entityId={data.EntityId ?? '0'}
                  entityType={data.EntityTypeId ?? ''}
                />
              </div>
            ) : (
              <div data-container="">
                <div className="OSInline" data-container="">
                  <LazyImage
                    fallbackOptions={{ IconId: UBT_Icons.ImageGallery }}
                    inBorderOptions={{ BorderRadius: UBT_Shape.None }}
                    inImageSize={{ Height: inImageSizeId }}
                    imageURL={imageURL}
                  />
                </div>
              </div>
            )}
          </SkeletonSection>
        )}
        {displayContactNumber !== '' && (
          <CustomContainer
            options={{
              PaddingSize: { TopSizeId: UBT_Size.Base },
              TextOptions: { FontSize: UBT_FontSize.Heading6, FontWeight: UBT_FontWeight.SemiBold },
            }}
          >
            <span data-expression="">{displayContactNumber}</span>
          </CustomContainer>
        )}
        <SkeletonSection inIsLoading={isLoading}>
          <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Medium } }}>
            <div className="list list-group list--gap-s OSFillParent" data-list="">
              {buttons.map((button, row) => (
                <Button
                  key={row}
                  inExtendedClass="ubt-skeleton-section__element"
                  inButtonOptions={{
                    UBT_ButtonSizeId: UBT_ButtonSize.Medium,
                    // :669: the first row is primary, the others "Scondary" (UBT_ButtonType record name)
                    UBT_ButtonTypeId: row === 0 ? UBT_ButtonType.Primary : UBT_ButtonType.Secondary,
                    UBT_FlexBehavior: UBT_FlexBehavior.Grow,
                  }}
                  onEventOnClick={() => onEventClicked?.(inContactPopupButtons[row]?.Id ?? '', row)}
                >
                  {(button.UBT_IconId ?? '') !== '' ? (
                    <IconText spacingSize={UBT_Size.Small} text={button.Label ?? ''} textOptions={{}}>
                      <Icon inSizeId={UBT_IconSize.Medium_20} inIconId={button.UBT_IconId} />
                    </IconText>
                  ) : (
                    <span data-expression="">{button.Label}</span>
                  )}
                </Button>
              ))}
            </div>
            <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small } }}>
              <Button
                inButtonOptions={{
                  UBT_ButtonSizeId: UBT_ButtonSize.Medium,
                  UBT_ButtonTypeId: UBT_ButtonType.Tertiary,
                  UBT_FlexBehavior: UBT_FlexBehavior.Grow,
                }}
                onEventOnClick={cancel}
              >
                Cancel
              </Button>
            </CustomContainer>
          </CustomContainer>
        </SkeletonSection>
      </CustomContainer>
    </div>
  );

  return (
    <OSBlock name="CW_CTA_PopUps.ContactPopup" id={id}>
      {showPopup &&
        createPortal(
          <div className="portal-class" style={{ display: 'inline' }}>
            <div>
              <div className="popup-backdrop" data-popup-backdrop="">
                <div
                  aria-modal="true"
                  className="popup-dialog popup-dialog ubt-contact-by-phone-popup connect-legacy-compatibily-containter"
                  data-popup=""
                  role="dialog"
                >
                  <div className="popup-content">{content}</div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
      {/* :876-890: PreventBackNavigation while the popup shows; a prevented back raises Event_Cancel. */}
      {showPopup && <PreventBackNavigation onBackNavigationPrevented={cancel} />}
    </OSBlock>
  );
}
