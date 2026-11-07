import { useEffect, useState } from 'react';
import {
  getFilteredUserSearchHistory,
  localSearchHistory_Update,
  type LocalSearchHistory,
} from '@/platform/storage/localEntities';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';

export interface MessageSearchHistoryProps {
  /** OutSystems instance id of the block (`b1-$b5`). */
  id: string;
  /** Input SearchString. */
  searchString: string;
  /** Input RecentSearchTypeId. */
  recentSearchTypeId: string;
  /** Input ShowOnlyOnCorrectTerm (default True). */
  showOnlyOnCorrectTerm?: boolean;
  /** Input HasBottomBorder (default False). */
  hasBottomBorder?: boolean;
  /** Event SelectedItem(SelectedItemString); ScreenBlock_MessageList sets no handler. */
  onSelectedItem?: (selectedItemString: string) => void;
}

/** The recent searches. When the client aggregate GetFilteredUserSearchHistory (fetched at start and again in
    OnParametersChanged; MaxRecords 5; adapter platform/storage/localEntities/localSearchHistory.ts, CR-MessageList-3)
    is not empty, Search_History_List: one `search-history-item` per record with the flag icon and the searched
    string. Item click (OnClick_Search_History_List_Item): LocalSearchHistory_Update, then the event SelectedItem.
    @origin Connect2_LegacyShared.UtilityFlow.MessageSearchHistory */
export function MessageSearchHistory({
  id,
  searchString,
  recentSearchTypeId,
  showOnlyOnCorrectTerm = true,
  hasBottomBorder = false,
  onSelectedItem,
}: MessageSearchHistoryProps) {
  const prefix = `${id.replace('$', '')}-`;
  const [history, setHistory] = useState<readonly LocalSearchHistory[]>([]);

  useEffect(() => {
    let alive = true;
    void getFilteredUserSearchHistory(recentSearchTypeId, searchString, showOnlyOnCorrectTerm, 5).then((list) => {
      if (alive) setHistory(list);
    });
    return () => {
      alive = false;
    };
  }, [recentSearchTypeId, searchString, showOnlyOnCorrectTerm]);

  const onClickItem = async (h: LocalSearchHistory) => {
    await localSearchHistory_Update(h.Id);
    onSelectedItem?.(h.SearchedString);
  };

  return (
    <OSBlock name="UtilityFlow.MessageSearchHistory" id={id}>
      {history.length > 0 && (
        // Virtualized List with rows stacked vertically: the viewer writes position: relative (OSList README).
        <OSList
          source={history}
          keyOf={(h) => h.Id}
          className="list list-group"
          animateItems={false}
          positionRelative
          id={`${prefix}Search_History_List`}
        >
          {(h) => (
            <div
              className={`search-history-item${hasBottomBorder ? ' border-bottom-neutral-2' : ''}`}
              data-container=""
              id={`${prefix}Search_History_List_Item`}
              onClick={() => void onClickItem(h)}
            >
              <i className="icon icon-history text-neutral-6 fa fa-flag fa-1x" data-icon="" />
              <span className="margin-left-base truncate-data-span" data-expression="">
                {h.SearchedString}
              </span>
            </div>
          )}
        </OSList>
      )}
    </OSBlock>
  );
}
