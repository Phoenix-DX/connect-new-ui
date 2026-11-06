/** @origin UBTConnectLibrary.ConnectPatterns.Unavailable_Image */
// @os-block UBTConnectLibrary.ConnectPatterns.Unavailable_Image
import { CircleButton } from '@/components/ui/CircleButton';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { formatClasses, getClasses_BackgroundImageSize } from '@/lib/ubtConnectLibrary/actions';
import {
  Type_Image,
  UBT_AlignItems,
  UBT_AvatarSize,
  UBT_Color,
  UBT_Display,
  UBT_IconSize,
  UBT_JustifyContent,
} from '@/lib/ubtConnectLibrary/staticEntities';

/** The local variable MainContainerClass (Unavailable_Image.mvc.js:12-14). */
const MAIN_CONTAINER_CLASS = 'ubt-image-unavailable';

interface UnavailableImageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** TypeImage (Type_Image): OneSchool shows "Sorry, no photo available", anything else "Household image missing". */
  typeImage?: string;
  /** In_CardTypeId (UBT_ImageCardType): the size classes of the background box. */
  inCardTypeId?: string;
  /** IconId: the icon in the circle button ("" when not passed). */
  iconId?: string;
}

/** A missing image (live TST of 2026-11-05, UBTConnectLibrary.ConnectPatterns.Unavailable_Image.mvc.js:171-326): a
    flex CustomContainer, centred both ways (:171-183), holding the background box "ubt-image-unavailable__background-
    image" + GetClasses_BackgroundImageSize(In_CardTypeId, 0) (:206-210) with a primary CircleButton (small_40,
    :234-238) around the Icon (base_24, neutral0, :256-261), the title by TypeImage (:286-313) and the text "This image
    is being updated and coming soon." (:315-326). */
export function UnavailableImage({ id, typeImage = '', inCardTypeId = '', iconId = '' }: UnavailableImageProps) {
  return (
    <OSBlock name="ConnectPatterns.Unavailable_Image" id={id}>
      <CustomContainer
        options={{
          DisplayOptions: {
            Display: UBT_Display.Flex,
            AlignItems: UBT_AlignItems.Center,
            JustifyContent: UBT_JustifyContent.Center,
          },
        }}
      >
        <div
          className={formatClasses(
            `${MAIN_CONTAINER_CLASS}__background-image`,
            getClasses_BackgroundImageSize(inCardTypeId, 0),
          )}
          data-container=""
        >
          <div className="text-align-center ubt-unavailable-image" data-container="">
            <CircleButton
              borderColorId={UBT_Color.Primary}
              backgroundColorId={UBT_Color.Primary}
              sizeId={UBT_AvatarSize.Small_40}
              icon={<Icon inSizeId={UBT_IconSize.Base_24} inIconId={iconId} inColorId={UBT_Color.Neutral0} />}
            />
          </div>
          <div className="text-align-center" data-container="">
            <div data-container="">
              {typeImage === Type_Image.OneSchool ? 'Sorry, no photo available' : 'Household image missing'}
            </div>
            <div data-container="">
              <span className="font-size-xs text-neutral-7">This image is being updated and coming soon.</span>
            </div>
          </div>
        </div>
      </CustomContainer>
    </OSBlock>
  );
}
