// @os-block Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { NewConnectContent } from '@/components/ui/NewConnectContent';
import { Input } from '@/components/ui/Input';
import { Shape } from '@/lib/ubtConnectLibrary/staticEntities';
import { usePreventBackNavigation } from '@/platform/navigation';
import type { AssembleEventFilter, AssembleEventTypeSelection } from '@/api/event';
import { compareAssembleFilters, emptyFilter } from './actions';
import { InBlock_ActionMenu } from './InBlock_ActionMenu';

export interface AssembleSummary_FilterDrawerProps {
  id: string;
  isOpen: boolean;
  assembleMeetingFilter: AssembleEventFilter;
  /** Event ApplyFilters(AssembleMeetingFilter). */
  onApplyFilters: (filter: AssembleEventFilter) => void;
  /** Event Close. */
  onClose: () => void;
}

/** ScrollToTop JS: the action menu scrolls to the top. */
function scrollToTop(parentElId: string) {
  const menu = document.getElementById(parentElId)?.querySelector('.action-menu');
  if (menu) menu.scrollTop = 0;
}

/** Assemble.AssembleSummary_FilterDrawer (p:…/Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc.js; view
    :150-560, controller :560-1230; dom/default.html:221-305): InBlock_ActionMenu with "Filters", the search Input
    ("Search", rounded, synced), "Meeting Types" with Reset, the FilteredEventTypes list (title + checkbox) while not
    IsLoading, Cancel and Apply (enabled when CompareAssembleFilters(AssembleMeetingFilter, Original) differs), and
    PreventBackNavigation while IsOpen. OnParametersChanged: IsLoading = no event type; on opening Original and
    FilteredEventTypes copy the filter and the search clears. The drawer edits its own copy of the filter (the block
    input), raised by Apply. A click on the container outside Block_FilterContent closes (HasClickedInsideFilterDiv). */
export function AssembleSummary_FilterDrawer({
  id,
  isOpen,
  assembleMeetingFilter,
  onApplyFilters,
  onClose,
}: AssembleSummary_FilterDrawerProps) {
  const scope = id.replace('$', '');
  const [filter, setFilter] = useState(assembleMeetingFilter);
  const [original, setOriginal] = useState<AssembleEventFilter>(emptyFilter);
  const [filtered, setFiltered] = useState<AssembleEventTypeSelection[]>([]);
  const [searchKey, setSearchKey] = useState('');
  const [wasOpen, setWasOpen] = useState(isOpen);
  const [inputFilter, setInputFilter] = useState(assembleMeetingFilter);
  // IsLoading (default False) is set only by OnParametersChanged.
  const [isLoading, setIsLoading] = useState(false);

  // OnParametersChanged (:1100-1160): a new input or IsOpen.
  if (inputFilter !== assembleMeetingFilter || wasOpen !== isOpen) {
    setInputFilter(assembleMeetingFilter);
    setWasOpen(isOpen);
    setFilter(assembleMeetingFilter);
    setIsLoading(assembleMeetingFilter.AssembleEventType.length === 0);
    if (isOpen) {
      setOriginal({
        AssembleFilterTimeOptionId: assembleMeetingFilter.AssembleFilterTimeOptionId,
        AssembleEventType: [...assembleMeetingFilter.AssembleEventType],
      });
      setSearchKey('');
      setFiltered([...assembleMeetingFilter.AssembleEventType]);
    }
  }

  /** ApplySearchFilter (:960-1010): all types for an empty key, else those whose upper-case Title contains it. */
  const applySearchFilter = (types: AssembleEventTypeSelection[], key: string) => {
    setFiltered(
      key === ''
        ? [...types]
        : types.filter((t) => t.AssembleEventType.Title.toUpperCase().includes(key.toUpperCase())),
    );
  };

  /** ActionMenuOnClose(IsCloseAction) (:1160-1200): IsOpen False, ScrollToTop, raise Close. */
  const actionMenuOnClose = () => {
    scrollToTop(`${scope}-Block_ActionMenu`);
    onClose();
  };

  usePreventBackNavigation(isOpen, () => {
    actionMenuOnClose();
  });

  const setSelected = (typeId: string, isSelected: boolean) => {
    // Checkbox_IsSelectedOnChange (:1030-1060): the filter's type with the same Id takes the checkbox value.
    const types = filter.AssembleEventType.map((t) =>
      t.AssembleEventType.Id === typeId ? { ...t, IsSelected: isSelected } : t,
    );
    setFilter({ ...filter, AssembleEventType: types });
    setFiltered((list) => list.map((t) => (t.AssembleEventType.Id === typeId ? { ...t, IsSelected: isSelected } : t)));
  };

  return (
    <OSBlock name="Assemble.AssembleSummary_FilterDrawer" id={id}>
      <InBlock_ActionMenu
        id={`${scope}-Block_ActionMenu`}
        extendedClass="ignore-backwards-compatibility-content action-menu-container--scrollable action-menu-container--padding-none"
        isOpen={isOpen}
        onClose={(e) => {
          // ActionMenuOnClose(False): a click inside Block_FilterContent does not close.
          if (e.target instanceof Element && e.target.closest(`#${CSS.escape(`${scope}-Block_FilterContent`)}`)) return;
          actionMenuOnClose();
        }}
        menuEntries={
          <NewConnectContent id={`${scope}-Block_FilterContent`}>
            <div
              className="font-size-s font-semi-bold padding-base action-menu-container--scrollable__header"
              data-container=""
              id={`${scope}-DIV_Header`}
            >
              Filters
              <div
                className="padding-x-s padding-y-base assemble-filter-search"
                data-container=""
                id={`${scope}-DIV_Search`}
              >
                <Input
                  id={`${scope}-$b3`}
                  inOptions={{
                    InitalString: searchKey,
                    SearchPrompt: 'Search',
                    BorderRadius: Shape.Rounded,
                    IsSyncValueWithInput: true,
                  }}
                  onEventOnChange={(value) => {
                    setSearchKey(value);
                    applySearchFilter(filter.AssembleEventType, value);
                  }}
                  onEventClearString={() => {
                    setSearchKey('');
                    applySearchFilter(filter.AssembleEventType, '');
                  }}
                />
              </div>
              <div
                className="display-flex justify-content-space-between font-semi-bold"
                data-container=""
                id={`${scope}-DIV_MeetingType__Header`}
              >
                <div className="OSInline" data-container="">
                  Meeting Types
                </div>
                <a
                  className="ThemeGrid_MarginGutter"
                  data-link=""
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // Link_ClearOnClick (:870-900): every type unselected, then ApplySearchFilter.
                    const types = filter.AssembleEventType.map((t) => ({ ...t, IsSelected: false }));
                    setFilter({ ...filter, AssembleEventType: types });
                    applySearchFilter(types, searchKey);
                  }}
                >
                  Reset
                </a>
              </div>
            </div>
            <div
              className="padding-x-base padding-bottom-base font-size-s assemble-filter-filters"
              data-container=""
              id={`${scope}-DIV_Filters`}
            >
              <div data-container="" id={`${scope}-DIV_MeetingType`}>
                <div data-container="" id={`${scope}-DIV_MeetingType__FilterList`}>
                  {!isLoading && (
                    <OSList
                      source={filtered}
                      keyOf={(t) => t.AssembleEventType.Id}
                      className="list list-group"
                      animateItems
                      positionRelative
                    >
                      {(t) => (
                        <div className="display-flex justify-content-space-between padding-y-s" data-container="">
                          <div className="OSInline" data-container="">
                            <span className="break-word" data-expression="">
                              {t.AssembleEventType.Title}
                            </span>
                          </div>
                          <span className="ThemeGrid_MarginGutter">
                            <input
                              checked={t.IsSelected}
                              className="checkbox"
                              data-checkbox=""
                              type="checkbox"
                              onChange={(e) => {
                                setSelected(t.AssembleEventType.Id, e.currentTarget.checked);
                              }}
                            />
                          </span>
                        </div>
                      )}
                    </OSList>
                  )}
                </div>
              </div>
              <div className="text-align-center assemble-filter-actions" data-container="" id={`${scope}-DIV_Action`}>
                <button className="btn" data-button="" type="button" onClick={actionMenuOnClose}>
                  Cancel
                </button>
                <button
                  className="btn btn-primary ThemeGrid_MarginGutter"
                  data-button=""
                  disabled={!compareAssembleFilters(filter, original)}
                  type="button"
                  onClick={() => {
                    // ApplyOnClick (:900-930): ScrollToTop, raise ApplyFilters(AssembleMeetingFilter).
                    scrollToTop(`${scope}-Block_ActionMenu`);
                    onApplyFilters(filter);
                  }}
                >
                  <span className="font-size-s">Apply</span>
                </button>
              </div>
            </div>
            <div className="padding-x-base padding-bottom-base" data-container="" />
          </NewConnectContent>
        }
      />
    </OSBlock>
  );
}
