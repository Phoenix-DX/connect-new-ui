import type { ReactNode } from 'react';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { NewConnectContent } from '@/shared/Connect2_LegacyShared/NewConnectContent';

/** The view of the block ScreenBlock_AssembleEvents, props only. The legacy layout has the back arrow when
    ShowBackNavigation (else the menu icon), the title "Assemble" (IsUserSubdivision) and the SubdivisionName
    (`font-size-0-75em` unless a back navigation to another supper meeting), the calendar icon and the place link
    (IsUserSubdivision), the meeting list (the `list` slot, instance `$b4`) in NewConnectContent, and the BottomBar
    placeholder. The flows are in useAssembleEvents.
    @origin Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents */

export interface AssembleEventsViewProps {
  /** OutSystems instance id of the block (`$b2`). */
  id: string;
  /** SubdivisionName. */
  subdivisionName: string;
  /** Input ShowBackNavigation. */
  showBackNavigation: boolean;
  /** Input IsUserSubdivision. */
  isUserSubdivision: boolean;
  /** The block AssembleSummary_List (instance `$b4`), in NewConnectContent. */
  list: ReactNode;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** The place link: the event NavigateTo_AssembleLocationFilters. */
  onNavigateToAssembleLocationFilters: () => void;
  /** The calendar icon: the event NavigateTo_MyCalendarAssemble. */
  onNavigateToMyCalendarAssemble: () => void;
}

export function AssembleEventsView({
  id,
  subdivisionName,
  showBackNavigation,
  isUserSubdivision,
  list,
  bottomBar,
  onNavigateToAssembleLocationFilters,
  onNavigateToMyCalendarAssemble,
}: AssembleEventsViewProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Assemble.ScreenBlock_AssembleEvents" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={
          <MenuIcon id={`${scope}-$b2`} menuAction={showBackNavigation ? MenuAction.Back : MenuAction.Menu} />
        }
        title={
          <>
            {isUserSubdivision && (
              <div data-container="" id={`${scope}-DIV_Assemble`}>
                Assemble
              </div>
            )}
            <div className="text-ellipsis" data-container="" id={`${scope}-DIV_SMName`}>
              <span
                className={`text-align-center${showBackNavigation && !isUserSubdivision ? '' : ' font-size-0-75em'}`}
                data-expression=""
              >
                {subdivisionName}
              </span>
            </div>
          </>
        }
        headerRight={
          isUserSubdivision ? (
            <>
              <i
                className="icon menu-icon-my-calendar font-size-1-5em fa fa-flag fa-2x"
                data-icon=""
                onClick={onNavigateToMyCalendarAssemble}
              />
              <div className="line-height-1 OSInline" data-container="">
                <a
                  data-link=""
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToAssembleLocationFilters();
                  }}
                >
                  <i className="icon connect-icon-place font-size-1-5em fa fa-flag fa-1x" data-icon="" />
                </a>
              </div>
            </>
          ) : null
        }
        content={<NewConnectContent id={`${scope}-$b3`}>{list}</NewConnectContent>}
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
