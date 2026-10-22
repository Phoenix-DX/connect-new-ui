// @os-block Connect2_LegacyShared.Utility.LabelWithCopyIcon
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AlignCenter } from '../../osui/AlignCenter';

export interface LabelWithCopyIconProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** AttributeValue (default ""): the text a click on the icon copies. */
  attributeValue?: string;
  /** Placeholder Placeholder_Label. */
  placeholderLabel?: ReactNode;
  /** Placeholder Placeholder_Icon (clickable: copies AttributeValue). */
  placeholderIcon?: ReactNode;
  /** Placeholder Placeholder_Value (under the label row). */
  placeholderValue?: ReactNode;
}

/** Label, copy icon and value (p:migration/blocks/sources/Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc.js;
    view :127-230): container `font-size-s` > AlignCenter (inputs left at their defaults) with Placeholder_Label
    (`font-semi-bold`, OSInline) and Placeholder_Icon (`margin-left-s line-height-1`, OSInline, click → cursor pointer),
    then a plain container with Placeholder_Value. Placeholder_IconOnClick (controller :253-287) runs the JS node
    CopyAttributeToClipboard (:313-317): `navigator.clipboard.writeText(AttributeValue)`, not awaited. */
export function LabelWithCopyIcon({
  id,
  attributeValue = '',
  placeholderLabel,
  placeholderIcon,
  placeholderValue,
}: LabelWithCopyIconProps) {
  const placeholderIconOnClick = () => {
    void navigator.clipboard.writeText(attributeValue);
  };
  return (
    <OSBlock name="Utility.LabelWithCopyIcon" id={id}>
      <div className="font-size-s" data-container="">
        <AlignCenter>
          <div className="font-semi-bold OSInline">{placeholderLabel}</div>
          <div
            className="margin-left-s line-height-1 OSInline"
            style={{ cursor: 'pointer' }}
            onClick={placeholderIconOnClick}
          >
            {placeholderIcon}
          </div>
        </AlignCenter>
        <div data-container="">
          <div>{placeholderValue}</div>
        </div>
      </div>
    </OSBlock>
  );
}
