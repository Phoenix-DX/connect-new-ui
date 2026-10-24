/** @origin UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AvatarImage } from '@/shared/UBTConnectLibrary/AvatarImage';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import {
  UBT_AlignItems,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_Display,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Icons,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { AvatarImage as AvatarImageRec, TextOptions } from '@/shared/UBTConnectLibrary/lib/structures';
import { child, scopeOf } from './ids';
import {
  UBT_AlignItems_FlexEnd,
  UBT_AvatarSize_DoubleExtraSmall_20,
  UBT_FlexDirection_Row,
  UBT_JustifyContent_SpaceBetween,
} from './staticEntities';

export interface ItemCard_WithNotesProps {
  id?: string;
  inSearchString?: string;
  inTotalNotes?: string;
  inTitle?: string;
  inSubtitle?: string;
  inLabel?: string;
  avatarImage?: AvatarImageRec;
  /** Placeholder Notes. */
  notes?: ReactNode;
  /** Placeholder Actions. */
  actions?: ReactNode;
  onOnClickItemCard?: () => void;
  onOnClickTotalNotesIcon?: () => void;
}

const HIGHLIGHT: TextOptions = { Color: UBT_Color.Primary, FontWeight: UBT_FontWeight.SemiBold };

/** Card with a source header (avatar, label, total notes), title, subtitle, notes and actions (survey
    UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc.js; captured in dom/loading.html:220-393). The header
    container, the title and the subtitle raise OnClickItemCard; the total-notes IconText raises OnClickTotalNotesIcon.
    Label and title highlight In_SearchString. */
export function ItemCard_WithNotes({
  id,
  inSearchString = '',
  inTotalNotes = '',
  inTitle = '',
  inSubtitle = '',
  inLabel = '',
  avatarImage = {},
  notes,
  actions,
  onOnClickItemCard,
  onOnClickTotalNotesIcon,
}: ItemCard_WithNotesProps) {
  const p = scopeOf(id);
  const highlightWords = inSearchString !== '' ? inSearchString : '';
  // AvatarImage input (ItemCard_WithNotes.mvc.js view): initials → cyan-dark badge with a neutral-5 small border,
  // else neutral-0 background and border with neutral-10 text, the input's border size.
  const fallback = avatarImage.FallbackOptions ?? {};
  const hasInitials = (fallback.Initials ?? '') !== '';
  const avatar: AvatarImageRec = {
    URL: avatarImage.URL,
    FallbackOptions: {
      Initials: fallback.Initials,
      SVG: fallback.SVG,
      IconId: fallback.IconId,
      BackgroundColor: hasInitials ? UBT_Color.CyanDark : UBT_Color.Neutral0,
      FontColor: hasInitials ? UBT_Color.Neutral0 : UBT_Color.Neutral10,
      BorderColor: hasInitials ? UBT_Color.Neutral5 : UBT_Color.Neutral0,
      BorderSize: hasInitials ? UBT_Size.Small : fallback.BorderSize,
    },
  };
  return (
    <OSBlock name="ConnectPatterns.ItemCard_WithNotes" id={id}>
      <CustomContainer
        id={child(p, 1)}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Small },
          BorderOptions: {
            Color: UBT_Color.Neutral3,
            Size: { GeneralSizeId: UBT_Size.Small },
            Radius: { GeneralSizeId: UBT_Shape.Medium },
          },
          DisplayOptions: { Display: UBT_Display.Flex, FlexDirection: UBT_FlexDirection.Column },
        }}
      >
        <CustomContainer id={child(p, 2)} options={{ PaddingSize: { BottomSizeId: UBT_Size.Small } }}>
          <CustomContainer
            id={child(p, 3)}
            options={{
              DisplayOptions: {
                Display: UBT_Display.Flex,
                AlignItems: UBT_AlignItems.Center,
                JustifyContent: UBT_JustifyContent_SpaceBetween,
              },
            }}
          >
            <CustomContainer id={child(p, 4)} />
          </CustomContainer>
          <Columns_Two
            id={child(p, 5)}
            columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
            left={
              <CustomContainer
                id={child(p, 6)}
                options={{ DisplayOptions: { Display: UBT_Display.InlineFlex, AlignItems: UBT_AlignItems.Center } }}
                onClicked={onOnClickItemCard}
              >
                <AvatarImage
                  id={child(p, 7)}
                  inSizeId={UBT_AvatarSize_DoubleExtraSmall_20}
                  inBorderRadius={UBT_Shape.Circle}
                  inAvatarImage={avatar}
                />
                <CustomText
                  id={child(p, 8)}
                  inText={inLabel}
                  inTextOptions={{
                    Color: UBT_Color.Neutral10,
                    FontSize: UBT_FontSize.ExtraSmall,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                  inPaddingOptions={{ LeftSizeId: UBT_Size.ExtraSmall }}
                  inHighlightWords={highlightWords}
                  inHighlightOptions={HIGHLIGHT}
                />
              </CustomContainer>
            }
            right={
              <CustomContainer
                id={child(p, 9)}
                options={{
                  DisplayOptions: {
                    Display: UBT_Display.Flex,
                    AlignItems: UBT_AlignItems_FlexEnd,
                    FlexDirection: UBT_FlexDirection_Row,
                  },
                }}
              >
                <IconText
                  id={child(p, 10)}
                  text={inTotalNotes}
                  textOptions={{
                    Color: UBT_Color.Neutral7,
                    FontSize: UBT_FontSize.DoubleExtraSmall,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                  onClicked={onOnClickTotalNotesIcon}
                >
                  <Icon
                    id={child(p, 11)}
                    inSizeId={UBT_IconSize.NonStandard_16}
                    inIconId={UBT_Icons.ListAltFill}
                    inColorId={UBT_Color.Neutral7}
                  />
                </IconText>
              </CustomContainer>
            }
          />
          <CustomContainer id={child(p, 12)}>
            <CustomText
              id={child(p, 13)}
              inText={inTitle}
              inTextOptions={{ FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold }}
              inHighlightWords={highlightWords}
              inHighlightOptions={HIGHLIGHT}
              onClicked={onOnClickItemCard}
            />
            <CustomText
              id={child(p, 14)}
              inText={inSubtitle}
              inTextOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall }}
              onClicked={onOnClickItemCard}
            />
          </CustomContainer>
        </CustomContainer>
        <CustomContainer id={child(p, 15)}>
          <div id={`${p}-Notes`}>{notes}</div>
        </CustomContainer>
        <CustomContainer id={child(p, 16)}>
          <div className="bookmark_note_card__actions" id={`${p}-Actions`}>
            {actions}
          </div>
        </CustomContainer>
      </CustomContainer>
    </OSBlock>
  );
}
