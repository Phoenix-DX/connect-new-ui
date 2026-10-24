/** @origin UBTConnect.Directory_Locality.StatisticsList */
// @os-block UBTConnect.Directory_Locality.StatisticsList
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Input } from '@/components/ui/Input';
import {
  Shape,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { StatisticsListItem } from '@/components/directory/StatisticsListItem';
import { jSUtils_String_RemoveAccents } from '@/shared/UBTJavaScriptUtils/lib/actions';
import type { TextStatisticsOptionsRecord } from '@/shared/UBTConnect/lib/structures';

export interface StatisticsListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_Statistics: the cards (Id + StatisticsOptions). */
  inStatistics?: TextStatisticsOptionsRecord[];
  /** In_SearchPrompt: placeholder of the search input. */
  inSearchPrompt?: string;
  /** In_IsLoading: skeleton state; the search is not highlighted. */
  inIsLoading?: boolean;
  /** In_ShowSubtitle: passed to every Statistics_ListItem. */
  inShowSubtitle?: boolean;
  /** Event Event_Clicked(Id): a card was clicked. */
  onEventClicked?: (id: string) => void;
  /** Event OnParametersChangedEv: raised after the list was redefined for new inputs. */
  onOnParametersChangedEv?: () => void;
}

/** BuiltinFunctions Index(Text, Search, 0, searchFromEnd False, ignoreCase True) <> -1. */
const contains = (text: string, search: string) => text.toLowerCase().includes(search.toLowerCase());

/** Action_DefineList (p:…StatisticsList.mvc.js:690-735): In_Statistics when SearchString = "", otherwise the cards whose
    Title or Subtitle contains it, ignoring case, both sides through JSUtils_String_RemoveAccents. */
export function action_DefineList(
  inStatistics: readonly TextStatisticsOptionsRecord[],
  searchString: string,
): readonly TextStatisticsOptionsRecord[] {
  if (searchString === '') return inStatistics;
  const search = jSUtils_String_RemoveAccents(searchString);
  return inStatistics.filter(
    (p) =>
      contains(jSUtils_String_RemoveAccents(p.StatisticsOptions?.Title ?? ''), search) ||
      contains(jSUtils_String_RemoveAccents(p.StatisticsOptions?.Subtitle ?? ''), search),
  );
}

const EMPTY: TextStatisticsOptionsRecord[] = [];

/** Ids found more than once in the list (skeleton rows all carry the LocalityId default "0", e.g.
    GetSkeletonList_UI_LocalityStatistics): those rows, like rows without Id, are keyed by position so React replaces
    them when the data arrives. */
function repeatedIdsOf(list: readonly TextStatisticsOptionsRecord[]): ReadonlySet<string> {
  const seen = new Set<string>();
  const repeated = new Set<string>();
  for (const { Id } of list) {
    if (Id === undefined) continue;
    if (seen.has(Id)) repeated.add(Id);
    else seen.add(Id);
  }
  return repeated;
}

/** Searchable list of country / locality statistics cards (p:UBTConnect.Directory_Locality.StatisticsList.mvc.js:
    213-518): a white container (padding x Base, y Small) with the search Input (Block_Search, margin y Small; enabled
    with more than one card, debounce 200 ms, rounded) and a SkeletonSection with either the "No results" texts (empty
    filtered list and a search) or the List (`list list-group list--gap-s`) of Statistics_ListItem ("country-flag").
    OnChange / Submit set SearchString, ClearString empties it; each runs Action_DefineList. OnReady's
    ReactiveInstance_ForceUpdate of the List is React's re-render. */
export function StatisticsList({
  id,
  inStatistics = EMPTY,
  inSearchPrompt = '',
  inIsLoading = false,
  inShowSubtitle = false,
  onEventClicked,
  onOnParametersChangedEv,
}: StatisticsListProps) {
  const [searchString, setSearchString] = useState('');
  /* Local_List: Action_DefineList on OnReady, OnParametersChanged, Handler_Search_OnChange and _ClearString. */
  const localList = action_DefineList(inStatistics, searchString);
  const repeatedIds = repeatedIdsOf(localList);

  /* OnParametersChanged (:617-641): Action_DefineList (the derived list above), then OnParametersChangedEv. */
  const latest = useRef(onOnParametersChangedEv);
  useEffect(() => {
    latest.current = onOnParametersChangedEv;
  });
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    latest.current?.();
  }, [inStatistics, inSearchPrompt, inIsLoading, inShowSubtitle]);

  return (
    <OSBlock name="Directory_Locality.StatisticsList" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
        }}
      >
        <CustomContainer options={{ MarginSize: { VerticalSizeId: UBT_Size.Small } }}>
          <Input
            inOptions={{
              IsEnabled: inStatistics.length > 1,
              SearchPrompt: inSearchPrompt,
              Debounce_DelayMS: 200,
              BorderRadius: Shape.Rounded,
            }}
            onEventOnChange={setSearchString}
            onEventSubmit={setSearchString}
            onEventClearString={() => {
              setSearchString('');
            }}
          />
        </CustomContainer>
        <Skeleton isLoading={inIsLoading}>
          {localList.length === 0 && searchString !== '' ? (
            <>
              <CustomText
                inPaddingOptions={{ BottomSizeId: UBT_Size.Small }}
                inTextOptions={{
                  Color: UBT_Color.Neutral9,
                  FontSize: UBT_FontSize.Small,
                  FontWeight: UBT_FontWeight.SemiBold,
                }}
                inText={"No results found for '" + searchString + "'"}
              />
              <CustomText
                inTextOptions={{
                  Color: UBT_Color.Neutral10,
                  FontSize: UBT_FontSize.Small,
                  FontWeight: UBT_FontWeight.Regular,
                }}
                inText="Try searching for a country or locality."
                inPaddingOptions={{ BottomSizeId: UBT_Size.Small }}
              />
            </>
          ) : (
            <OSList
              source={localList}
              keyOf={(item, index) =>
                item.Id === undefined || item.Id === '' || repeatedIds.has(item.Id) ? `#${String(index)}` : item.Id
              }
              className="list list-group list--gap-s"
              animateItems
              positionRelative
            >
              {(item) => (
                <div data-container="">
                  <StatisticsListItem
                    inShowSubtitle={inShowSubtitle}
                    inExtendedClasses="country-flag"
                    inStatisticsOptions={item.StatisticsOptions ?? {}}
                    inHighlightWords={inIsLoading ? '' : searchString}
                    onEventClicked={() => onEventClicked?.(item.Id ?? '')}
                  />
                </div>
              )}
            </OSList>
          )}
        </Skeleton>
      </CustomContainer>
    </OSBlock>
  );
}
