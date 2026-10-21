// @os-block Connect2_LegacyShared.UtilityFlow.MessageSearchHistory
import { useEffect, useState } from 'react';
import {
  getFilteredUserSearchHistory,
  localSearchHistory_Update,
  type LocalSearchHistory,
} from '../../../shell/localEntities';
import { OSBlock } from '../../../components/OSBlock';
import { OSList } from '../../../components/OSList';

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
  /** Event SelectedItem(SelectedItemString); ScreenBlock_MessageList sets no handler (its view :664-680). */
  onSelectedItem?: (selectedItemString: string) => void;
}

/** MessageSearchHistory (p:Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc.js view :309-449): when the
    client aggregate GetFilteredUserSearchHistory (controller :494-600, fetched at start (:649 dataFetchActionNames) and
    again in OnParametersChanged (:717-745); MaxRecords 5; shell adapter src/shell/localEntities/localSearchHistory.ts,
    CR-MessageList-3) is not empty, Search_History_List: one `search-history-item` per record with the flag icon and
    the searched string. Item click (OnClick_Search_History_List_Item :755-830): LocalSearchHistory_Update, then the
    event SelectedItem. */
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
