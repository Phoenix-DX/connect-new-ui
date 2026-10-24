import type { KeyboardEvent, ReactNode } from 'react';
import type { MessageListCallInputs, MessagesList } from '@/api/message';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { MenuIconBack } from '@/components/layout/MenuIconBack';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AnimationType, RecentSearchType, Speed } from '@/pages/MessageList/staticEntities';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { MessageListNoResults } from '@/components/ui/MessageListNoResults';
import { Spinner } from '@/components/ui/Spinner';
import { Animate } from '@/components/ui/Animate';
import { InputWithIcon } from '@/components/ui/InputWithIcon';
import { MessageListBlock } from './MessageListBlock';
import { MessageListFilter } from './MessageListFilter';
import { MessageListNoNotificationsBanner } from './MessageListNoNotificationsBanner';
import { MessageSearchHistory } from './MessageSearchHistory';
import { WarningPrivateMessage } from './WarningPrivateMessage';

/** What the view shows: the block variables, MessagesList and whether GetMessages has answered. */
export interface MessageListViewState {
  /** The block variables with their OutSystems names. */
  variables: MessageListCallInputs;
  /** [MessagesList] */
  messagesList: MessagesList;
  /** GetMessages.IsDataFetched. */
  isDataFetched: boolean;
}

/** The handlers of the view, one per screen action of the block. */
export interface MessageListViewEvents {
  /** OnPullToRefresh of the layout: PullToRefresh. */
  onPullToRefresh: () => void;
  /** The back arrow of the search or the filters: OnClick_CloseSearchAndFilter. */
  onCloseSearchAndFilter: () => void;
  /** Input_SearchMessages changed. */
  onSearchStringChange: (value: string) => void;
  /** The Enter key in Input_SearchMessages: OnHandle_SearchHistorySelectedItem(""). */
  onSearchSubmit: () => void;
  /** The remove icon of the search: OnClickSearchClear. */
  onSearchClear: () => void;
  /** Search_Icon: OnClick_Search. */
  onSearch: () => void;
  /** Filter_Icon: OnClick_Filter. */
  onFilter: () => void;
  /** Warning_PrivateMessage NavigateTo_Login. */
  onNavigateToLogin: () => void;
  /** Warning_PrivateMessage Dismiss. */
  onDismissWarning: () => void;
  /** MessageListBlock SwipeEventsClear: Swipe_EventsClear. */
  onSwipeEventsClear: (messageInstanceId: string) => Promise<void>;
  /** MessageListBlock MarkAllRead: OnClick_MarkAllAsRead. */
  onMarkAllRead: () => void;
  /** MessageListBlock OnClick_GoToMessageDetail; its Promise keeps the item "active". */
  onGoToMessageDetail: (messageInstanceId: string) => Promise<void>;
  /** MessageListBlock SwipeEventsRead: Swipe_EventsRead. */
  onSwipeEventsRead: (messageInstanceId: string) => Promise<void>;
  /** MessageListBlock OnScrollEnding. */
  onScrollEnding: () => Promise<void>;
  /** MessageList_Filter MessageSort: OnChange_MessageSort. */
  onMessageSort: (isAscending: boolean) => void;
  /** MessageList_Filter ResetFilters: OnClick_ResetFilters. */
  onResetFilters: () => void;
  /** MessageList_Filter ApplyFilters: OnClick_ApplyFilters. */
  onApplyFilters: () => void;
}

export interface MessageListViewProps extends MessageListViewState, MessageListViewEvents {
  /** OutSystems instance id of the block. */
  id?: string;
  /** The user is signed in: the menu icon, the type filters and the empty state depend on it. */
  signedIn: boolean;
  /** Placeholder Menu_IfLoggedIn (empty in MessageList). */
  menuIfLoggedIn?: ReactNode;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** The BackNavigationHandler of the block (instance `$b15`), at the end of the content. */
  backNavigationHandler?: ReactNode;
}

/** The message list block: the legacy layout with pull to refresh. Header: the menu icon (signed in), the back icon
    (signed out) or the close arrow of the search and the filters; the title, or the search input while a search is
    open or typed; the search and filter icons. Content: the search history, the private-message warning (signed
    out), MessageListBlock or the empty states, the load-more spinner, or the sort filters in an Animate; the spinner
    of "Mark All as Read"; the BackNavigationHandler.
    @origin Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList */
export function MessageListView({
  id,
  signedIn,
  variables: vars,
  messagesList,
  isDataFetched,
  menuIfLoggedIn,
  bottomBar,
  commonUIElements,
  backNavigationHandler,
  onPullToRefresh,
  onCloseSearchAndFilter,
  onSearchStringChange,
  onSearchSubmit,
  onSearchClear,
  onSearch,
  onFilter,
  onNavigateToLogin,
  onDismissWarning,
  onSwipeEventsClear,
  onMarkAllRead,
  onGoToMessageDetail,
  onSwipeEventsRead,
  onScrollEnding,
  onMessageSort,
  onResetFilters,
  onApplyFilters,
}: MessageListViewProps) {
  const isEmpty = messagesList.items.length === 0;
  const prefix = id?.replace('$', '') ?? 'b1';

  /** OnKeyup_SearchMessages, JS CheckForEnterKey: Enter → the search, then the input loses the focus. */
  const onKeyupSearchMessages = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return; // event.keyCode == 13
    onSearchSubmit();
    event.currentTarget.blur();
  };

  const headerLeft = signedIn ? (
    vars.ShowSearch || vars.ShowFilters ? (
      <i
        className="icon padding-y-s padding-x-s fa fa-arrow-left fa-1x"
        data-icon={vars.ShowSearch ? 'icon-search' : 'icon-filter'}
        id={`${prefix}-Close_Search_Icon`}
        onClick={onCloseSearchAndFilter}
      />
    ) : (
      <MenuIcon id={`${prefix}-$b2`} menuAction={MenuAction.Menu} />
    )
  ) : (
    <MenuIconBack id={`${prefix}-$b3`} />
  );

  const title =
    vars.SearchMessageString !== '' || vars.ShowSearch ? (
      // InputWithIcon $b4: the search icon; Input_SearchMessages (type Search, max 50, extended style
      // "display: block;", enabled while searching) and the remove icon (OnClickSearchClear).
      <InputWithIcon
        id={`${prefix}-$b4`}
        icon={<i className="icon fa fa-search fa-1x" data-icon="" />}
        input={
          <>
            <span className="input-search">
              <input
                aria-required="false"
                className="form-control search-input OSFillParent"
                data-input=""
                disabled={!(vars.ShowSearch || vars.SearchMessageString !== '')}
                id={`${prefix}-Input_SearchMessages`}
                maxLength={50}
                placeholder="Search My Notifications..."
                style={{ display: 'block' }}
                type="search"
                value={vars.SearchMessageString}
                onChange={(e) => {
                  onSearchStringChange(e.currentTarget.value);
                }}
                onKeyUp={onKeyupSearchMessages}
              />
            </span>
            <i
              className="icon fa fa-remove fa-1x"
              data-icon=""
              // The compiled inline style "color: #d3d3d3; padding: 10px; …", as the search capture shows it (Q7 A).
              style={{ color: 'rgb(211, 211, 211)', padding: 10, position: 'absolute', right: 0, top: 5 }}
              onClick={onSearchClear}
            />
          </>
        }
      />
    ) : (
      <div className="text-align-center" data-container="">
        <span data-expression="">{vars.ShowFilters ? 'Sort' : 'My Notifications'}</span>
      </div>
    );

  const headerRight = (
    <div data-container="">
      {!vars.ShowSearch && !vars.ShowFilters && (
        <i
          className="icon padding-y-s padding-x-s fa fa-search fa-1x"
          data-icon=""
          id={`${prefix}-Search_Icon`}
          style={{ marginRight: 0, padding: 5 }}
          onClick={onSearch}
        />
      )}
      {!vars.ShowSearch &&
        (vars.ShowFilters ? (
          <i
            className="icon padding-y-s padding-x-s margin-left-base fa fa-remove fa-1x"
            data-icon=""
            id={`${prefix}-Close_Filter_Icon`}
            style={{ marginLeft: 0, marginRight: 0 }}
            onClick={onCloseSearchAndFilter}
          />
        ) : (
          <i
            className="icon padding-y-s padding-x-s margin-left-base fa fa-filter fa-1x"
            data-icon=""
            id={`${prefix}-Filter_Icon`}
            style={{ marginLeft: 0, marginRight: 0, padding: 5 }}
            onClick={onFilter}
          />
        ))}
      <div className="ThemeGrid_Width1" data-container="" />
    </div>
  );

  // The empty list: filtered or searched → NoResults (unless the last message was cleared) or the banner; otherwise
  // an empty container and the banner once fetched.
  const filteredOrSearched =
    (signedIn && !vars.Filter_MessageTypePrivate) || !vars.Filter_MessageTypePublic || vars.SearchMessageString !== '';
  const emptyState =
    isDataFetched && filteredOrSearched ? (
      isEmpty && !vars.IsEmptyMessage ? (
        <div data-container="">
          <MessageListNoResults
            id={`${prefix}-$b8`}
            placeholder1="Make sure that all words are spelled correctly."
            placeholder2="Try different keyword."
            placeholder3="Clear filter."
          />
        </div>
      ) : (
        <MessageListNoNotificationsBanner id={`${prefix}-$b9`} />
      )
    ) : isDataFetched && isEmpty ? (
      <>
        <div data-container="" />
        <MessageListNoNotificationsBanner id={`${prefix}-$b10`} />
      </>
    ) : null;

  const content = (
    <>
      <div className="message-list" data-container="">
        {vars.ShowSearch && (
          <MessageSearchHistory
            id={`${prefix}-$b5`}
            searchString={vars.SearchMessageString}
            recentSearchTypeId={RecentSearchType.MyNotifications}
          />
        )}
        {!vars.IsShowLoading && (
          <div data-container="" id={`${prefix}-FilterDataBlock`}>
            {!vars.ShowFilters ? (
              <>
                {!vars.ShowWarning && (
                  <WarningPrivateMessage
                    id={`${prefix}-$b6`}
                    message={vars.WarningMessage}
                    onNavigateToLogin={onNavigateToLogin}
                    onDismiss={onDismissWarning}
                  />
                )}
                {!isEmpty ? (
                  <MessageListBlock
                    id={`${prefix}-$b7`}
                    isShowLoading={vars.IsShowLoading}
                    messagesList={messagesList}
                    onSwipeEventsClear={onSwipeEventsClear}
                    onMarkAllRead={onMarkAllRead}
                    onClickGoToMessageDetail={(messageId) => onGoToMessageDetail(messageId)}
                    onSwipeEventsRead={onSwipeEventsRead}
                    onScrollEnding={onScrollEnding}
                  />
                ) : (
                  emptyState
                )}
                <Spinner id={`${prefix}-$b11`} showLoader={vars.isLoadMore} />
              </>
            ) : (
              // Animate $b12 (Speed fast, right to left) › MessageList_Filter $b13.
              <Animate id={`${prefix}-$b12`} speed={Speed.Fast} animationType={AnimationType.RightToLeft}>
                <MessageListFilter
                  id={`${prefix}-$b13`}
                  filterOrderASC={vars.Filter_OrderASC}
                  filterOrderDESC={vars.Filter_OrderDESC}
                  onMessageSort={onMessageSort}
                  onResetFilters={onResetFilters}
                  onApplyFilters={onApplyFilters}
                />
              </Animate>
            )}
          </div>
        )}
        <Spinner id={`${prefix}-LoadingMarkAllRead`} showLoader={vars.IsShowLoading} />
      </div>
      {backNavigationHandler}
    </>
  );

  return (
    <OSBlock name="MyNotifications.ScreenBlock_MessageList" id={id}>
      <LegacyLayout
        id={`${prefix}-$b1`}
        usePullToRefresh
        onOnPullToRefresh={onPullToRefresh}
        menu={<div id={`${prefix}-Menu_IfLoggedIn`}>{menuIfLoggedIn}</div>}
        headerLeft={headerLeft}
        title={title}
        headerRight={headerRight}
        content={content}
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
