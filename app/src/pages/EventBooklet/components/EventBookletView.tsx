import type { ReactNode } from 'react';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { searchInputId, type EventBookletState } from '@/pages/EventBooklet/hooks/eventBookletState';
import type { PopupFilters } from '@/pages/EventBooklet/types';
import { InputWithIcon } from '@/components/ui/InputWithIcon';
import { BookletPopup } from './BookletPopup';
import { DoubleAction } from './DoubleAction';
import { EventBookletGuestView } from './EventBookletGuestView';
import { EventBookletHelperView } from './EventBookletHelperView';
import { PopUp_OrbitBookletFilters } from './PopUp_OrbitBookletFilters';

/** The event booklet block: Layout_Orbit (CustomClass "orbit-detail orbit-header-center", ExtendedClasses
    "orbit-booklet") with the Auto MenuIcon; Title: the search input in search mode, else "Event Guest List" and the
    event name; HeaderRight: the search and filter icons (faded until the helper roles and the filters are fetched);
    HeaderContent: the Guests / Helpers switch and, with filters applied, "Filters Applied" / "Clear All"; Content: the
    guest view or the helper view; then the filters popup, the BackNavigationHandler and the legacy access-restricted
    dialog. Props only: the flows are in useEventBooklet. No capture: markup from the compiled view.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI. */
const MENU_ACTION_AUTO = 'Auto';

export interface EventBookletViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** In_EventName: the title until Get_EventBookletFilters gives the event name. */
  inEventName: string;
  /** The block variables. */
  state: EventBookletState;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** The BackNavigationHandler of the block (instance `<prefix>-$b23`). */
  backNavigationHandler?: ReactNode;
  /** Dialog_AccessRestrictedAction_Legacy (instance `<prefix>-FreeSubscriptionAlert`). */
  accessRestrictedDialog?: ReactNode;
  /** The search icon. */
  onSearchIcon: () => void;
  /** The filter icon and the close icon of the popup. */
  onToggleFiltersPopUp: () => void;
  /** The Guests (True) and Helpers (False) buttons. */
  onViewSwap: (isGuestButton: boolean) => void;
  /** The search input changed. */
  onSearchTermChange: (searchTerm: string) => void;
  /** A key up in the search input: Enter or another key. */
  onSearchTermKeyUp: (isEnterKey: boolean) => void;
  /** The clear icon of the search input. */
  onClearSearch: () => void;
  /** "Filters Applied". */
  onSelectedFilters: () => void;
  /** "Clear All". */
  onClearAllFilters: () => void;
  /** The ApplyFilters event of the popup. */
  onApplyFilters: (filters: PopupFilters) => void;
  /** The guest Lists reached their end. */
  onScrollEndingGuests: () => void;
  /** The helper List reached its end. */
  onScrollEndingHelpers: () => void;
  /** A List of the view mounted. */
  onListMounted: (listId: string) => void;
  /** The member or the host of a row. */
  onClickedMember: (householdId: string) => void;
}

export function EventBookletView(props: EventBookletViewProps) {
  const { id, inEventName, state: s } = props;
  const prefix = id.replace('$', '');
  const p = s.paginationSettings;
  const fetchedFilterData = s.helperRolesFetched && s.filtersFetched;
  const showFiltersApplied =
    s.hasFiltersApplied &&
    (s.isGuestView ? s.guests.length > 0 || p.Guest_NoResults : s.helpers.length > 0 || p.Helper_NoResults);

  const title = s.isSearchMode ? (
    <InputWithIcon
      id={`${prefix}-$b3`}
      alignIconRight={false}
      icon={
        s.currentFilters.SearchTerm === '' && <i className="icon orbit-icon-search fa fa-flag fa-1x" data-icon="" />
      }
      input={
        <InputWithIcon
          id={`${prefix}-$b4`}
          alignIconRight
          icon={
            s.currentFilters.SearchTerm !== '' && (
              <i className="icon orbit-icon-cross fa fa-rocket fa-1x" data-icon="" onClick={props.onClearSearch} />
            )
          }
          input={
            <input
              aria-required="false"
              autoComplete="off"
              className="form-control OSFillParent"
              data-input=""
              id={searchInputId(id)}
              maxLength={50}
              placeholder="Search guest or host name"
              type="search"
              value={s.currentFilters.SearchTerm}
              onChange={(e) => {
                props.onSearchTermChange(e.target.value);
              }}
              onKeyUp={(e) => {
                props.onSearchTermKeyUp(e.key === 'Enter'); // CheckForEnterKey: event.keyCode == 13
              }}
            />
          }
        />
      }
    />
  ) : (
    <>
      <div className="font-size-s bold text-align-center" data-container="">
        Event Guest List
      </div>
      <div className="font-size-base text-align-center" data-container="">
        <span data-expression="">{s.eventInfo.EventName !== '' ? s.eventInfo.EventName : inEventName}</span>
      </div>
    </>
  );

  const listEvents = { prefix, state: s, onListMounted: props.onListMounted, onClickedMember: props.onClickedMember };

  return (
    <OSBlock name="Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail orbit-header-center"
        extendedClasses="orbit-booklet"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={title}
        headerRight={
          <div className={`flex-center-all${fetchedFilterData ? '' : ' opacity-0-50'}`} data-container="">
            {!s.isSearchMode && (
              <i className="icon orbit-icon-search fa fa-flag fa-1x" data-icon="" onClick={props.onSearchIcon} />
            )}
            <i className="icon orbit-icon-filter fa fa-flag fa-1x" data-icon="" onClick={props.onToggleFiltersPopUp} />
          </div>
        }
        headerContent={
          <>
            <div className="orbit-double-button-cont" data-container="">
              <div className="orbit-double-button-border-cont" data-container="">
                <div
                  className={`orbit-double-button-btn${s.isGuestView ? ' orbit-double-button-btn-active' : ''}`}
                  data-container=""
                  onClick={() => {
                    props.onViewSwap(true);
                  }}
                >
                  Guests
                </div>
                <div
                  className={`orbit-double-button-btn${s.isGuestView ? '' : ' orbit-double-button-btn-active'}`}
                  data-container=""
                  onClick={() => {
                    props.onViewSwap(false);
                  }}
                >
                  Helpers
                </div>
              </div>
            </div>
            {showFiltersApplied && (
              <DoubleAction
                id={`${prefix}-$b5`}
                extendedClass="orbit-border-background"
                placeholderLeft={
                  <span
                    className="color-orbit-primary-7 bold font-size-s"
                    data-expression=""
                    onClick={props.onSelectedFilters}
                  >
                    Filters Applied
                  </span>
                }
                placeholderRight={
                  <span className="font-size-s text-neutral-10" data-expression="" onClick={props.onClearAllFilters}>
                    Clear All
                  </span>
                }
              />
            )}
          </>
        }
        content={
          <>
            {s.isGuestView && <EventBookletGuestView {...listEvents} onScrollEnding={props.onScrollEndingGuests} />}
            {!s.isGuestView && <EventBookletHelperView {...listEvents} onScrollEnding={props.onScrollEndingHelpers} />}
          </>
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
      <BookletPopup showPopup={s.filtersPopUp}>
        <PopUp_OrbitBookletFilters
          id={`${prefix}-$b22`}
          currentFilters={{
            IsGuest: s.currentFilters.IsGuest,
            IsHelper: s.currentFilters.IsHelper,
            DateRange: s.currentFilters.DateRange,
            HelperRoles: s.currentFilters.HelperRoles,
            Countries: s.currentFilters.Countries,
            Localities: s.currentFilters.Localities,
          }}
          availableFilters={s.availableFilters}
          onClosePopUp={props.onToggleFiltersPopUp}
          onApplyFilters={props.onApplyFilters}
        />
      </BookletPopup>
      {props.backNavigationHandler}
      {props.accessRestrictedDialog}
    </OSBlock>
  );
}
