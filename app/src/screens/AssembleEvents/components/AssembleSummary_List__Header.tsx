// @os-block Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header
import { OSBlock } from '@/components/ui/os/OSBlock';
import { NC_Card_Item_Text__Skeleton } from '@/shared/Connect2_LegacyShared/NC_Card_Item_Text__Skeleton';

const POINTER = { cursor: 'pointer' };

export interface AssembleSummary_List__HeaderProps {
  id: string;
  filterLabel: string;
  listHeaderLabel: string;
  showClear: boolean;
  isLoading: boolean;
  onClick: () => void;
  onClear: () => void;
}

/** Assemble.AssembleSummary_List__Header (p:…/Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc.js view;
    dom/default.html:194-206, loading.html:194-214): DIV_Filter (click → OnClick) with FilterLabel and a caret, and the
    Clear link while ShowClear (show/hide animation not reproduced); DIV_ListHeader while ListHeaderLabel <> "" or
    IsLoading, with a text skeleton while loading, else the label. */
export function AssembleSummary_List__Header({
  id,
  filterLabel,
  listHeaderLabel,
  showClear,
  isLoading,
  onClick,
  onClear,
}: AssembleSummary_List__HeaderProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Assemble.AssembleSummary_List__Header" id={id}>
      <div
        className="padding-x-base assemble-list-header__filter text-primary bold display-flex justify-content-space-between align-items-center"
        data-container=""
        id={`${scope}-DIV_Filter`}
        style={POINTER}
        onClick={onClick}
      >
        <div className="full-height display-flex align-items-center OSInline" data-container="">
          <span className="white-space-nowrap" data-expression="">
            {filterLabel}
          </span>
          <i className="icon text-neutral-8 fa fa-caret-down fa-1x ThemeGrid_MarginGutter" data-icon="" />
        </div>
        {showClear && (
          <div data-container="">
            <a
              data-link=""
              href="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClear();
              }}
            >
              <div className="OSInline" data-container="" style={{ textAlign: 'right' }}>
                Clear
              </div>
            </a>
          </div>
        )}
      </div>
      {(listHeaderLabel !== '' || isLoading) && (
        <div
          className="padding-x-base assemble-list-header__date padding-y-s margin-top-s font-semi-bold font-size-s"
          data-container=""
          id={`${scope}-DIV_ListHeader`}
        >
          <div data-container="">
            {isLoading ? (
              <div className="ThemeGrid_Width6" data-container="">
                <NC_Card_Item_Text__Skeleton id={`${scope}-$b1`} />
              </div>
            ) : (
              <span data-expression="">{listHeaderLabel}</span>
            )}
          </div>
        </div>
      )}
    </OSBlock>
  );
}
