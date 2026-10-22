// @os-block UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { AvatarImage } from '../AvatarImage';
import { Columns_Two } from '../Columns_Two';
import { CustomContainer } from '../CustomContainer';
import { CustomText } from '../CustomText';
import { Icon } from '../Icon';
import { IconText } from '../IconText';
import { formatClasses } from '../lib/actions';
import {
  UBT_AvatarSize,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Shape,
  UBT_Size,
} from '../lib/staticEntities';
import type { StatisticsOptions } from '../lib/structures';

export interface Statistics_ListItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inStatisticsOptions?: StatisticsOptions;
  inExtendedClasses?: string;
  inHighlightWords?: string;
  inShowSubtitle?: boolean;
  inHasActionsMenu?: boolean;
  inHideBorder?: boolean;
  /** Placeholder ActionsMenu. */
  actionsMenu?: ReactNode;
  /** Event Event_Clicked. */
  onEventClicked?: () => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-statistics-item';
const LABEL = {
  Color: UBT_Color.Neutral8,
  FontSize: UBT_FontSize.DoubleExtraSmall,
  FontWeight: UBT_FontWeight.Regular,
};
const VALUE = { FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold };

/** Country / locality statistics card (p:UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc.js:229-773): a
    bordered CustomContainer; the clickable Columns_Two (reduce last) holds the title (h6, or base with the subtitle),
    the list of statistics (label, with its icon when IconId is set, and value) and, on the right, the avatar; then the
    actions menu placeholder when In_HasActionsMenu. Title and subtitle highlight In_HighlightWords. */
export function Statistics_ListItem({
  id,
  inStatisticsOptions = {},
  inExtendedClasses = '',
  inHighlightWords = '',
  inShowSubtitle = false,
  inHasActionsMenu = false,
  inHideBorder = false,
  actionsMenu,
  onEventClicked,
}: Statistics_ListItemProps) {
  const o = inStatisticsOptions;
  return (
    <OSBlock name="ConnectCorePatterns.Statistics_ListItem" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
          BorderOptions: {
            Color: UBT_Color.Neutral3,
            Size: { GeneralSizeId: inHideBorder ? UBT_Size.None : UBT_Size.Small },
            Radius: { GeneralSizeId: UBT_Shape.Large },
          },
        }}
        extendedClasses={formatClasses(MAIN_CONTAINER_CLASS, inExtendedClasses)}
      >
        <div data-container="" style={{ cursor: 'pointer' }} onClick={onEventClicked}>
          <Columns_Two
            columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
            left={
              <>
                {inShowSubtitle ? (
                  <CustomContainer options={{ MarginSize: { BottomSizeId: UBT_Size.ExtraSmall } }}>
                    <CustomText
                      inText={o.Subtitle ?? ''}
                      inTextOptions={{ Color: UBT_Color.Neutral8, FontSize: UBT_FontSize.DoubleExtraSmall }}
                      inHighlightWords={inHighlightWords}
                    />
                    <CustomText inHighlightWords={inHighlightWords} inText={o.Title ?? ''} inTextOptions={VALUE} />
                  </CustomContainer>
                ) : (
                  <CustomContainer options={{ MarginSize: { BottomSizeId: UBT_Size.Small } }}>
                    <CustomText
                      inHighlightWords={inHighlightWords}
                      inText={o.Title ?? ''}
                      inTextOptions={{ FontSize: UBT_FontSize.Heading6, FontWeight: UBT_FontWeight.SemiBold }}
                    />
                  </CustomContainer>
                )}
                <div className="OSInline" data-container="">
                  <OSList
                    source={o.Statistics ?? []}
                    keyOf={(s, i) => `${s.Name ?? ''}-${String(i)}`}
                    className={formatClasses('list list-group', `${MAIN_CONTAINER_CLASS}__list`)}
                    animateItems
                    disableVirtualization
                  >
                    {(s) => (
                      <div data-container="">
                        {(s.IconId ?? '') !== '' ? (
                          <IconText textOptions={LABEL} text={s.Name ?? ''}>
                            <Icon
                              inColorId={s.IconColorId ?? ''}
                              inIconId={s.IconId ?? ''}
                              inSizeId={UBT_IconSize.NonStandard_16}
                            />
                          </IconText>
                        ) : (
                          <CustomText inTextOptions={LABEL} inText={s.Name ?? ''} />
                        )}
                        <CustomText inTextOptions={VALUE} inText={s.Value ?? ''} />
                      </div>
                    )}
                  </OSList>
                </div>
              </>
            }
            right={
              (o.AvatarURL ?? '') !== '' ? (
                <AvatarImage inAvatarImage={{ URL: o.AvatarURL ?? '' }} inSizeId={UBT_AvatarSize.Large_65} />
              ) : null
            }
          />
        </div>
        {inHasActionsMenu ? (
          <div data-container="">
            <CustomContainer
              options={{
                PaddingSize: { TopSizeId: UBT_Size.Small },
                MarginSize: { TopSizeId: UBT_Size.Base },
                BorderOptions: { Color: UBT_Color.Neutral3, Size: { TopSizeId: UBT_Size.Small } },
              }}
              extendedClasses="ubt-statistics-action-menu"
            >
              <div>{actionsMenu}</div>
            </CustomContainer>
          </div>
        ) : null}
      </CustomContainer>
    </OSBlock>
  );
}
