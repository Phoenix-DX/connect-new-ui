// @os-block Connect2_LegacyShared.Utility.Result_Item_Badge
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface Result_Item_BadgeProps {
  /** OutSystems instance id of the block (`b1-l2-…-LocalitiesList_Item`). */
  id: string;
  /** Id prefix of the block's own elements. */
  scope: string;
  inShowDescription?: boolean;
  inShowTag?: boolean;
  inHasAction?: boolean;
  inIconURL?: string;
  inIsStaticIcon?: boolean;
  inBadgeText?: string;
  inBadgeTextColor?: string;
  inBadgeBackgroundColor?: string;
  inBackgroundColor?: string;
  inDiameter?: number;
  inHasPadding?: boolean;
  inHasBorder?: boolean;
  inIsNavigationLoading?: boolean;
  customClass?: string;
  htmlDataItem?: string;
  itemHeight?: string;
  titlePlaceholder?: ReactNode;
  descriptionPlaceholder?: ReactNode;
  tagPlaceholder?: ReactNode;
  resultItemPlaceholder?: ReactNode;
  bookmarkNote?: ReactNode;
  /** Event OnClick_Item. */
  onOnClickItem?: () => void;
}

/** Inline style text of the compiled expressions → React style (declarations "name: value;"). */
const styleOf = (text: string): Record<string, string> =>
  Object.fromEntries(
    text
      .split(';')
      .map((d) => d.trim())
      .filter((d) => d !== '')
      .map((d) => {
        const [name = '', ...value] = d.split(':');
        return [name.trim().replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()), value.join(':').trim()];
      }),
  );

/** Connect2_LegacyShared Utility.Result_Item_Badge (capture/survey-UBTConnect.json sources
    `Connect2_LegacyShared.Utility.Result_Item_Badge.mvc.js`, view internalRender; defaults from its model). Not rendered
    in any captured state (Locations group, Q2 → A pending): built from the compiled view. The visual column shows the
    badge: an icon URL (static map-marker icon or the image) or the badge text, split around "&" when longer than one
    character; the text column holds the Title, Description and Tag placeholders; Result_Item_Placeholder when
    In_HasAction; BookmarkNote below. OnClick_Result_Item raises OnClick_Item. */
export function Result_Item_Badge({
  id,
  scope,
  inShowDescription = false,
  inShowTag = false,
  inHasAction = false,
  inIconURL = '',
  inIsStaticIcon = false,
  inBadgeText = '',
  inBadgeTextColor = '',
  inBadgeBackgroundColor = '',
  inBackgroundColor = 'var(--color-neutral-0)',
  inDiameter = 70,
  inHasPadding = true,
  inHasBorder = true,
  inIsNavigationLoading = false,
  customClass = '',
  htmlDataItem = '',
  itemHeight = '',
  titlePlaceholder,
  descriptionPlaceholder,
  tagPlaceholder,
  resultItemPlaceholder,
  bookmarkNote,
  onOnClickItem,
}: Result_Item_BadgeProps) {
  const click = () => onOnClickItem?.();
  const className =
    'badge-item result-item ' +
    (inHasPadding ? ' padding-y-m padding-x-base' : ' no-padding') +
    (inHasBorder ? ' border-bottom border-bottom-neutral-4' : ' no-border') +
    (inIsNavigationLoading ? ' loading-item' : '') +
    (customClass !== '' ? ` ${customClass}` : customClass);
  const badgeColors =
    (inBadgeBackgroundColor !== '' ? `background-color: ${inBadgeBackgroundColor};` : '') +
    (inBadgeTextColor !== '' ? `color: ${inBadgeTextColor};` : '');
  const badgeStyle = styleOf(`${badgeColors}width: ${String(inDiameter)}px; height: ${String(inDiameter)}px;`);
  const amp = inBadgeText.indexOf('&');
  const visual =
    inIconURL !== '' ? (
      inIsStaticIcon ? (
        // Result_Item_Badge_StaticIcon: In_IconURL is not "" here, so its style expression gives "".
        <div className="result-badge" data-container="" id={`${scope}-Result_Item_Badge_StaticIcon`}>
          <i className="icon fa fa-map-marker fa-1x" data-icon="" />
        </div>
      ) : (
        <div className="result-badge" data-container="" id={`${scope}-Result_Item_Badge_URL`} style={badgeStyle}>
          <img data-image="" id={`${scope}-Result_Item_Icon`} src={inIconURL} />
        </div>
      )
    ) : (
      <div className="result-badge" data-container="" id={`${scope}-Result_Item_Badge`} style={badgeStyle}>
        {inBadgeText.length > 1 ? (
          <div className="display-flex align-items-baseline" data-container="">
            <span className="result-badge-text" data-expression="" id={`${scope}-Result_Item_Badge_Text_First`}>
              {inBadgeText.substring(0, Math.max(amp, 0))}
            </span>
            <span className="result-badge-text-con ThemeGrid_MarginGutter" data-expression="">
              &amp;
            </span>
            <span
              className="result-badge-text ThemeGrid_MarginGutter"
              data-expression=""
              id={`${scope}-Result_Item_Badge_Text_Last`}
            >
              {inBadgeText.slice(amp + 1, amp + 1 + (inBadgeText.length - amp + 1))}
            </span>
          </div>
        ) : (
          <span className="result-item-badge-text" data-expression="" id={`${scope}-Result_Item_Badge_Text`}>
            {inBadgeText}
          </span>
        )}
      </div>
    );
  return (
    <OSBlock name="Utility.Result_Item_Badge" id={id}>
      <div
        className={className}
        data-container=""
        data-item={htmlDataItem}
        id={`${scope}-Result_Item`}
        style={inIsNavigationLoading ? undefined : { backgroundColor: inBackgroundColor }}
      >
        <div className="result-item-top-content" data-container="">
          <div className="result-item_visual OSInline" data-container="" style={{ cursor: 'pointer' }} onClick={click}>
            {visual}
          </div>
          <div className="result-item_content" data-container="">
            <div
              className="result-item_text-content"
              data-container=""
              id={`${scope}-Result_Item_Text_Cont`}
              style={{ cursor: 'pointer', ...(itemHeight !== '' ? { height: itemHeight } : {}) }}
              onClick={click}
            >
              <div id={`${scope}-Title_Placeholder`}>{titlePlaceholder}</div>
              {inShowDescription && <div id={`${scope}-Description_Placeholder`}>{descriptionPlaceholder}</div>}
              {inShowTag && <div id={`${scope}-Tag_Placeholder`}>{tagPlaceholder}</div>}
            </div>
            {inHasAction && (
              <div className="result-item_placeholder" id={`${scope}-Result_Item_Placeholder`}>
                {resultItemPlaceholder}
              </div>
            )}
          </div>
        </div>
        <div className="result-item-bottom-content" data-container="">
          <div id={`${scope}-BookmarkNote`}>{bookmarkNote}</div>
        </div>
      </div>
    </OSBlock>
  );
}
