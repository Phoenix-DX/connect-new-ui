// @os-block Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents
import { useEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { MenuAction } from '../../../shared/Connect2_LegacyShared/lib/staticEntities';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { NewConnectContent } from '../../../shared/Connect2_LegacyShared/NewConnectContent';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getSubdivisionName, getUserSubdivision } from '../api';
import { AssembleSummary_List } from './AssembleSummary_List';

export interface ScreenBlock_AssembleEventsProps {
  /** OutSystems instance id (`$b2`). */
  id: string;
  subdivisionId: string;
  showBackNavigation: boolean;
  isUserSubdivision: boolean;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  onNavigateToAssembleLocationFilters: () => void;
  onNavigateToMyCalendarAssemble: () => void;
  onNavigateToAssembleDetail: (seriesId: string, eventId: string, start: string) => void;
}

/** Assemble.ScreenBlock_AssembleEvents (p:…/Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc.js, view
    :170-470, controller :470-890; dom/default.html:180-265). Layout: back arrow when ShowBackNavigation (else the menu
    icon), title "Assemble" (IsUserSubdivision) and the SubdivisionName (`font-size-0-75em` unless a back navigation to
    another hall), the calendar icon and the place link (IsUserSubdivision), AssembleSummary_List in NewConnectContent,
    the BottomBar placeholder. OnReady: nothing when restored from cache; SubdivisionId 0 → GetCacheableUserInfo
    Subdivision.Name, else the GetSubdivisionName data action. Handler_AssyncException (an UnknownException) is not
    needed: the list's errors go to the flow handler directly. */
export function ScreenBlock_AssembleEvents({
  id,
  subdivisionId,
  showBackNavigation,
  isUserSubdivision,
  bottomBar,
  onNavigateToAssembleLocationFilters,
  onNavigateToMyCalendarAssemble,
  onNavigateToAssembleDetail,
}: ScreenBlock_AssembleEventsProps) {
  const scope = id.replace('$', '');
  const fromCache = useWasRestoredFromCache();
  const [subdivisionName, setSubdivisionName] = useViewState('SubdivisionName', '');

  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    if (fromCache) return;
    void (async () => {
      if (subdivisionId === '0' || subdivisionId === '') {
        setSubdivisionName((await getUserSubdivision()).Name);
      } else {
        setSubdivisionName(
          await getSubdivisionName({
            SubdivisionId: subdivisionId,
            ShowBackNavigation: showBackNavigation,
            IsUserSubdivision: isUserSubdivision,
          }),
        );
      }
    })().catch(raiseToFlowHandler);
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OSBlock name="Assemble.ScreenBlock_AssembleEvents" id={id}>
      <Layout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={
          <MenuIcon__UpdatedOSUI
            id={`${scope}-$b2`}
            menuAction={showBackNavigation ? MenuAction.Back : MenuAction.Menu}
          />
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
        content={
          <NewConnectContent id={`${scope}-$b3`}>
            <AssembleSummary_List
              id={`${scope}-$b4`}
              subdivisionId={subdivisionId}
              onNavigateToAssembleDetail={onNavigateToAssembleDetail}
            />
          </NewConnectContent>
        }
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
