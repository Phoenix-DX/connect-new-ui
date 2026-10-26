import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { Icon } from '@/components/ui/Icon';
import {
  UBT_ColumnBehaviour,
  UBT_Color,
  UBT_Icons,
  UBT_IconsSize,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/lib/ubtConnectLibrary/staticEntities';

export interface SubHeader_MainPagesProps {
  id?: string;
  /** In_IsShowSearchIcon. */
  inIsShowSearchIcon?: boolean;
  placeholderTitle?: ReactNode;
  placeholderIcons?: ReactNode;
  /** Click_Search. */
  onClickSearch?: () => void;
}

/** The sub-header of the main pages: container "ubt-sub-header-main-pages" with Columns_Two (ReduceLast, spacing
    Small, vertical Center): Placeholder_Title on the left; on the right "ubt-sub-header-main-pages__right" with the
    search Icon (Neutral0, "padding-xxs", Base_24, visible = In_IsShowSearchIcon, Click raises Click_Search) and
    Placeholder_Icons ("ubt-sub-header-main-pages__icons").
    @origin UBTConnectLibrary.Layouts.SubHeader_MainPages */
export function SubHeader_MainPages({
  id,
  inIsShowSearchIcon = false,
  placeholderTitle,
  placeholderIcons,
  onClickSearch,
}: SubHeader_MainPagesProps) {
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Layouts.SubHeader_MainPages" id={id}>
      <div className="ubt-sub-header-main-pages" data-container="">
        <ColumnsTwo
          id={`${b}-$b1`}
          columnOptions={{
            ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
            SpacingSize: UBT_Size.Small,
            VerticalAlign: UBT_VerticalAlign.Center,
          }}
          left={<div id={`${b}-Placeholder_Title`}>{placeholderTitle}</div>}
          right={
            <div className="ubt-sub-header-main-pages__right" data-container="">
              <Icon
                id={`${b}-$b2`}
                inColorId={UBT_Color.Neutral0}
                inExtendedClasses="padding-xxs"
                inSizeId={UBT_IconsSize.Base_24}
                inVisible={inIsShowSearchIcon}
                inIconId={UBT_Icons.Search}
                onClick={() => onClickSearch?.()}
              />
              <div className="ubt-sub-header-main-pages__icons" id={`${b}-Placeholder_Icons`}>
                {placeholderIcons}
              </div>
            </div>
          }
        />
      </div>
    </OSBlock>
  );
}
