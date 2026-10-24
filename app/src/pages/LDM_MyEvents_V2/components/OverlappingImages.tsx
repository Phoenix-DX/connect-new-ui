import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { styleFromCssText } from '@/shared/lib/cssText';

export interface OverlappingImagesProps {
  id?: string;
  /** Instance scope of the block's widgets ("b1-…-b3-b1"). */
  scope: string;
  /** In_ImageURLs. */
  inImageURLs: readonly string[];
  /** In_MaxDisplayImage (default 5). */
  inMaxDisplayImage?: number;
  /** In_Diameter (default "30px"). */
  inDiameter?: string;
  /** In_OverlapPercent (default 30). */
  inOverlapPercent?: number;
  /** In_ShowRemainingCount (default False). */
  inShowRemainingCount?: boolean;
  /** In_RemainingCountFontSize (default 12). */
  inRemainingCountFontSize?: number;
  /** In_IsRTL (default False). */
  inIsRTL?: boolean;
}

/** The photo shown for an empty URL (OverlappingImages.mvc.js view style expression). */
const DEFAULT_PHOTO = '/UBT_CW/img/UBT_CW.User_rectangle.png';

/** Overlapping round photos (analysis/sources/pretty/Connect2_LegacyShared.Widgets.OverlappingImages.mvc.js = OI).
    OnReady / OnParametersChanged (OI ctrl :360-395): RemainingCount = Length(In_ImageURLs) - In_MaxDisplayImage and
    ImageURLs = the first In_MaxDisplayImage URLs. ImageList (view): one `overlapping-photo-cropper` per URL whose
    style sets the diameter, the photo (or the default image) and translateX((Length - (Row + 1)) × In_OverlapPercent %)
    (RTL: (Length - (Row + 1)) × 100 - Row × (100 - In_OverlapPercent) %); the last shown photo carries "+N" when
    In_ShowRemainingCount and RemainingCount > 0.
    @origin Connect2_LegacyShared.Widgets.OverlappingImages */
export function OverlappingImages({
  id,
  scope,
  inImageURLs,
  inMaxDisplayImage = 5,
  inDiameter = '30px',
  inOverlapPercent = 30,
  inShowRemainingCount = false,
  inRemainingCountFontSize = 12,
  inIsRTL = false,
}: OverlappingImagesProps) {
  const remainingCount = inImageURLs.length - inMaxDisplayImage;
  const imageURLs = inImageURLs.slice(0, inMaxDisplayImage);
  const length = imageURLs.length;
  return (
    <OSBlock name="Widgets.OverlappingImages" id={id}>
      <OSList
        id={`${scope}-ImageList`}
        className="list list-group"
        animateItems
        disableVirtualization
        source={imageURLs}
        keyOf={(_, i) => i}
      >
        {(url, row) => {
          const shift = inIsRTL
            ? (length - (row + 1)) * 100 - row * (100 - inOverlapPercent)
            : (length - (row + 1)) * inOverlapPercent;
          return (
            <div
              className="overlapping-photo-cropper"
              data-container=""
              style={styleFromCssText(
                `width: ${inDiameter}; height: ${inDiameter}; background-image: url('${url !== '' ? url : DEFAULT_PHOTO}'); transform: translateX(${String(shift)}%);`,
              )}
            >
              {inShowRemainingCount && remainingCount > 0 && row === inMaxDisplayImage - 1 ? (
                <span
                  className="overlapping-overlay-text"
                  data-expression=""
                  style={styleFromCssText(`font-size: ${String(inRemainingCountFontSize)}px;`)}
                >
                  {`+${String(remainingCount)}`}
                </span>
              ) : null}
            </div>
          );
        }}
      </OSList>
    </OSBlock>
  );
}
