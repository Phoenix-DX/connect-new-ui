/** @origin Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card */
// @os-block Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface ResultItemCardProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** CustomClass (default ""): appended after `nc-result-item-card`. */
  customClass?: string;
  /** HtmlDataItem: value of the card's `data-item` attribute (default ""). */
  htmlDataItem?: string;
  /** Placeholder Card_Visual. */
  cardVisual?: ReactNode;
  /** Placeholders Placeholder_1 … Placeholder_6 (text column, in this order). */
  placeholder1?: ReactNode;
  placeholder2?: ReactNode;
  placeholder3?: ReactNode;
  placeholder4?: ReactNode;
  placeholder5?: ReactNode;
  placeholder6?: ReactNode;
  /** Placeholder Placeholder_Right (badge column). */
  placeholderRight?: ReactNode;
  /** Placeholder Placeholder_Location (under the text row). */
  placeholderLocation?: ReactNode;
  /** Event OnClick_Item (the whole card). */
  onOnClickItem?: () => void;
}

/** Result card (p:migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc.js view
    :170-330, controller OnClick_Result_Item :319-352): `nc-result-item-card <CustomClass>` with `data-item`, the visual
    (`margin-bottom-s`), then `padding-x-base` with a flex row of Placeholder_1…6 (`flex1`) and Placeholder_Right, and
    Placeholder_Location below. A click on the card raises OnClick_Item. */
export function ResultItemCard({
  id,
  customClass = '',
  htmlDataItem = '',
  cardVisual,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  placeholder5,
  placeholder6,
  placeholderRight,
  placeholderLocation,
  onOnClickItem,
}: ResultItemCardProps) {
  return (
    <OSBlock name="NewConnect_Utilities.NC_Result_Item__Card" id={id}>
      <div
        className={`nc-result-item-card ${customClass}`}
        data-container=""
        data-item={htmlDataItem}
        style={{ cursor: 'pointer' }}
        onClick={() => onOnClickItem?.()}
      >
        <div className="margin-bottom-s" data-container="">
          <div>{cardVisual}</div>
        </div>
        <div className="padding-x-base" data-container="">
          <div className="display-flex justify-content-space-between align-content-center" data-container="">
            <div className="flex1" data-container="">
              <div>{placeholder1}</div>
              <div>{placeholder2}</div>
              <div>{placeholder3}</div>
              <div>{placeholder4}</div>
              <div>{placeholder5}</div>
              <div>{placeholder6}</div>
            </div>
            <div className="gap-base flex-shrink-0 align-content-center">{placeholderRight}</div>
          </div>
          <div>{placeholderLocation}</div>
        </div>
      </div>
    </OSBlock>
  );
}
