import type { BusinessLinkItem } from '@/api/locality';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { UBT_Color, UBT_Icons2, UBT_IconsSize } from '@/shared/UBTConnect/lib/staticEntities';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import {
  UBT_Color as Library_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { useScreenController_NavigateToPage } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { openInApp_OpenExternalLink } from '@/shared/UBTConnect_Utils/lib/actions';

export interface External_LinkProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_Link (BusinessLinkItemRec). */
  inLink: BusinessLinkItem;
  /** IsEnabled (default True). */
  isEnabled?: boolean;
  /** IconVisible (default True). */
  iconVisible?: boolean;
}

/** FontSize local variable (model :13-15): UBT_FontSize Small. */
const FONT_SIZE = UBT_FontSize.Small;

/** UBTJavaScriptUtils CheckIOsPlatform (migration/shell/sources/UBTJavaScriptUtils.controller.js:1-60, JS node
    GetPlatformIOS_PreventSwipe :61-80): navigator.platform holds "iphone", "ipad" or "ipod" (lower case). */
function checkIOsPlatform(): boolean {
  // eslint-disable-next-line @typescript-eslint/no-deprecated -- the original reads navigator.platform (JS :63-68)
  const platform = navigator.platform.toLowerCase();
  return platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod');
}

/** UBTConnect.App_Common_Blocks.External_Link (analysis/sources/pretty/UBTConnect.App_Common_Blocks.External_Link.mvc.js;
    only OneSchoolGlobalDetails uses it, catalog/blocks.md:199). View: IconText (text In_Link.Text, spacing xs, text
    primary when enabled else neutral 7, font size FontSize, regular, underlined) with the Icon OpenNew (same colour,
    NonStandard_16, visible IconVisible). Clicked → LinkClicked (:284-318): on iOS Navigate to In_Link.Link (runtime
    navigateTo: an external URL loads the page), otherwise OpenInApp_OpenExternalLink(In_Link.Link, False).
    @origin UBTConnect.App_Common_Blocks.External_Link */
export function External_Link({ id, inLink, isEnabled = true, iconVisible = true }: External_LinkProps) {
  const navigateToPage = useScreenController_NavigateToPage();
  const color = isEnabled ? UBT_Color.Primary : Library_Color.Neutral7;
  const linkClicked = () => {
    if (checkIOsPlatform()) navigateToPage(inLink.link, false);
    else openInApp_OpenExternalLink(inLink.link, false);
  };
  return (
    <OSBlock name="App_Common_Blocks.External_Link" id={id}>
      <IconText
        text={inLink.text}
        spacingSize={UBT_Size.ExtraSmall}
        textOptions={{ Color: color, FontSize: FONT_SIZE, FontWeight: UBT_FontWeight.Regular, IsUnderlined: true }}
        onClicked={linkClicked}
      >
        <Icon
          inColorId={color}
          inSizeId={UBT_IconsSize.NonStandard_16}
          inVisible={iconVisible}
          inIconId={UBT_Icons2.OpenNew}
        />
      </IconText>
    </OSBlock>
  );
}
