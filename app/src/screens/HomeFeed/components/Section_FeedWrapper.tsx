// @os-block UBTConnect.Home.Section_FeedWrapper
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns_Two } from '../../../shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../../shared/UBTConnectLibrary/CustomText';
import { Icon } from '../../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../../shared/UBTConnectLibrary/IconText';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_IconSize } from '../../../shared/UBTConnect_Utils/lib/staticEntities';
import { Section } from './Section';
import { UBT_Icons2 } from './staticEntities';

export interface Section_FeedWrapperProps {
  /** Instance id of the block on the screen (HomeFeed: the widget names `Section_Services`, …). */
  id: string;
  /** Id prefix of the block's own elements (HomeFeed: alias `b4`, `b6`, `b8`). */
  scope: string;
  isTransparentBackground?: boolean;
  showHeader?: boolean;
  showViewAll?: boolean;
  title?: string;
  /** UBT_Size identifier ("" = none). */
  marginTopSizeId?: string;
  /** Event OnClick_ViewAll. */
  onOnClickViewAll?: () => void;
  /** Placeholder Content. */
  children?: ReactNode;
}

/** UBTConnect Home.Section_FeedWrapper (Section_FeedWrapper.mvc.js:200-330): a Section with, when ShowHeader, a
    Columns_Two header (Title | "View all" IconText raising OnClick_ViewAll when showViewAll). Defaults from the model
    (:10-45). Captured: dom/default.html:122-129 (no header), :481-550 (header with View all). */
export function Section_FeedWrapper({
  id,
  scope,
  isTransparentBackground = false,
  showHeader = true,
  showViewAll = true,
  title = '',
  marginTopSizeId = '',
  onOnClickViewAll,
  children,
}: Section_FeedWrapperProps) {
  return (
    <OSBlock name="Home.Section_FeedWrapper" id={id}>
      <Section
        id={`${scope}-$b1`}
        isTransparentBackground={isTransparentBackground}
        marginTopSizeId={marginTopSizeId}
        header={
          showHeader ? (
            <CustomContainer id={`${scope}-$b2`} options={{ MarginSize: { VerticalSizeId: UBT_Size.Base } }}>
              <Columns_Two
                id={`${scope}-$b3`}
                columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
                left={
                  <CustomText
                    id={`${scope}-$b4`}
                    inText={title}
                    inTextOptions={{
                      Color: UBT_Color.Neutral9,
                      FontSize: UBT_FontSize.Base,
                      FontWeight: UBT_FontWeight.SemiBold,
                    }}
                  />
                }
                right={
                  showViewAll ? (
                    <IconText
                      id={`${scope}-$b5`}
                      text="View all"
                      isIconOnRight
                      spacingSize={UBT_Size.Base}
                      textOptions={{
                        Color: UBT_Color.Neutral7,
                        FontSize: UBT_FontSize.ExtraSmall,
                        FontWeight: UBT_FontWeight.SemiBold,
                        IsUnderlined: true,
                      }}
                      onClicked={onOnClickViewAll} // OnClick_ViewAll2 → Trigger OnClick_ViewAll
                    >
                      <Icon
                        id={`${scope}-$b6`}
                        inIconId={UBT_Icons2.ArrowRightAlt}
                        inColorId={UBT_Color.Neutral8}
                        inSizeId={UBT_IconSize.Medium_20}
                      />
                    </IconText>
                  ) : null
                }
              />
            </CustomContainer>
          ) : null
        }
        content={<div id={`${scope}-Content`}>{children}</div>}
      />
    </OSBlock>
  );
}
