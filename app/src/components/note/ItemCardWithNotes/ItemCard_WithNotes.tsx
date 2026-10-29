/** @origin UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AvatarImage } from '@/components/ui/AvatarImage';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { LazyImage } from '@/components/ui/LazyImage';
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
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/lib/ubtConnectLibrary/staticEntities';
import type { AvatarImage as AvatarImageRec, TextOptions } from '@/lib/ubtConnectLibrary/structures';
import { formatDateForAssembleMeetings, preetyFormatDate } from '@/lib/ubtConnectLibrary/actions';
import { parseOsDate } from '@/lib/osDateTime';
import { child, scopeOf } from '@/components/ui/os/blockIds';

/* TST static-entity values that the shared static entities do not list (migration/knowledge/static-entities-tst.json;
   classes as captured, Notes dom/loading.html and Bookmarks dom/default.html). */
const UBT_AlignItems_FlexEnd = 'align-items-flex-end';
const UBT_AvatarSize_DoubleExtraSmall_20 = 'xxs';
const UBT_FlexDirection_Row = 'flex-direction-row';
const UBT_JustifyContent_SpaceBetween = 'justify-content-space-between';
const UBT_Icons_Clock = 'connect-icon-clock';
const UBT_IconSize_ExtraSmall_10 = 'icon-extra-small';

interface ItemCard_WithNotesProps {
  id?: string;
  inSearchString?: string;
  inTotalNotes?: string;
  inTitle?: string;
  inSubtitle?: string;
  inLabel?: string;
  avatarImage?: AvatarImageRec;
  inChannelName?: string;
  /** Image URL of the channel logo. */
  inChannelLogo?: string;
  /** DateTime ("yyyy-MM-ddTHH:mm:ss"); the default is NullDate. */
  inPublishedAt?: string;
  /** DateTime ("yyyy-MM-ddTHH:mm:ss"); the default is NullDate. With In_EventEndDateTime, the event time row. */
  inEventStartDateTime?: string;
  /** DateTime ("yyyy-MM-ddTHH:mm:ss"); the default is NullDate. */
  inEventEndDateTime?: string;
  /** Placeholder Notes. */
  notes?: ReactNode;
  /** Placeholder Actions. */
  actions?: ReactNode;
  onOnClickItemCard?: () => void;
  onOnClickTotalNotesIcon?: () => void;
}

const HIGHLIGHT: TextOptions = { Color: UBT_Color.Primary, FontWeight: UBT_FontWeight.SemiBold };

/** OutSystems NullDate() as a DateTime (the In_PublishedAt default). */
const NULL_DATE_TIME = '1900-01-01T00:00:00';
const NULL_DATE = new Date(1900, 0, 1).getTime();

/** The IsAllDay input of FormatDateForAssembleMeetings (mvc.js:1040): the start is at 00:00:00 and
    DiffSeconds(Start, End) = 86400. */
const isEventAllDay = (start: string, end: string): boolean => {
  const s = parseOsDate(start);
  return (
    s.getHours() === 0 &&
    s.getMinutes() === 0 &&
    s.getSeconds() === 0 &&
    (parseOsDate(end).getTime() - s.getTime()) / 1000 === 86400
  );
};

/** In_TotalNotes as the IconText shows it: "" for 0, "9+" above 9, else the total (mvc.js:612-614). */
const totalNotesLabel = (inTotalNotes: string): string => {
  const total = Number.parseInt(inTotalNotes, 10) || 0;
  return total === 0 ? '' : total > 9 ? '9+' : inTotalNotes;
};

/** Card with a source header (avatar, label, total notes), title, subtitle, notes and actions (live TST
    UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc.js, extracted 2026-10-29 to
    migration/screens/Bookmarks/sources/; captured in Bookmarks dom/default.html, card 0). The header container, the
    title and the subtitle raise OnClickItemCard; the total-notes IconText raises OnClickTotalNotesIcon. Label and
    title highlight In_SearchString. Ids follow the TST widget aliases: $b12-$b15 are the channel row (:692-870, shown
    only with In_ChannelName, In_ChannelLogo and an In_PublishedAt other than NullDate), so the title container is
    $b16. The channel name and the published date also raise OnClickItemCard; the channel name highlights
    In_SearchString. The event time row $b19 (TST publish of 2026-10-29, mvc.js:1035-1100, If IsEventTimePresent):
    only when In_EventStartDateTime and In_EventEndDateTime are not NullDate; CustomText with the clock icon (extra
    small), neutral-7, extra small font, text FormatDateForAssembleMeetings(Start, IsAllDay); a click raises
    OnClickItemCard. */
export function ItemCard_WithNotes({
  id,
  inSearchString = '',
  inTotalNotes = '',
  inTitle = '',
  inSubtitle = '',
  inLabel = '',
  avatarImage = {},
  inChannelName = '',
  inChannelLogo = '',
  inPublishedAt = NULL_DATE_TIME,
  inEventStartDateTime = NULL_DATE_TIME,
  inEventEndDateTime = NULL_DATE_TIME,
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
          <ColumnsTwo
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
                  text={totalNotesLabel(inTotalNotes)}
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
          {inChannelName !== '' && inChannelLogo !== '' && parseOsDate(inPublishedAt).getTime() !== NULL_DATE && (
            <ColumnsTwo
              id={child(p, 12)}
              columnOptions={{
                ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst,
                SpacingSize: UBT_Size.Base,
                VerticalAlign: UBT_VerticalAlign.Center,
              }}
              extendedClasses="margin-top-s"
              left={
                <LazyImage
                  id={child(p, 13)}
                  imageURL={inChannelLogo}
                  fallbackOptions={{}}
                  inImageSize={{ Height: UBT_ImageSize.Base_52, Width: UBT_ImageSize.FullHeight_100_Percent }}
                  extendedClass="ubt-avatar-image"
                />
              }
              right={
                <>
                  <CustomText
                    id={child(p, 14)}
                    inText={inChannelName}
                    inTextOptions={{ FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold }}
                    inHighlightWords={highlightWords}
                    inHighlightOptions={HIGHLIGHT}
                    onClicked={onOnClickItemCard}
                  />
                  <CustomText
                    id={child(p, 15)}
                    inText={preetyFormatDate(inPublishedAt)}
                    inTextOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall }}
                    onClicked={onOnClickItemCard}
                  />
                </>
              }
            />
          )}
          <CustomContainer id={child(p, 16)} extendedClasses="margin-top-s">
            <CustomText
              id={child(p, 17)}
              inText={inTitle}
              inTextOptions={{ FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold }}
              inHighlightWords={highlightWords}
              inHighlightOptions={HIGHLIGHT}
              onClicked={onOnClickItemCard}
            />
            <CustomText
              id={child(p, 18)}
              inText={inSubtitle}
              inTextOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall }}
              onClicked={onOnClickItemCard}
            />
          </CustomContainer>
          {parseOsDate(inEventStartDateTime).getTime() !== NULL_DATE &&
            parseOsDate(inEventEndDateTime).getTime() !== NULL_DATE && (
              <CustomText
                id={child(p, 19)}
                inText={formatDateForAssembleMeetings(
                  inEventStartDateTime,
                  isEventAllDay(inEventStartDateTime, inEventEndDateTime),
                )}
                inlineIcon={{ IconId: UBT_Icons_Clock, IconSizeId: UBT_IconSize_ExtraSmall_10 }}
                inTextOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall }}
                onClicked={onOnClickItemCard}
              />
            )}
        </CustomContainer>
        <CustomContainer id={child(p, 20)}>
          <div id={`${p}-Notes`}>{notes}</div>
        </CustomContainer>
        <CustomContainer id={child(p, 21)}>
          <div className="bookmark_note_card__actions" id={`${p}-Actions`}>
            {actions}
          </div>
        </CustomContainer>
      </CustomContainer>
    </OSBlock>
  );
}
