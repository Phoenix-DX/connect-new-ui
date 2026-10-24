// @os-block Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail
// @os-block NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack
import { useEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { NewConnectContent } from '@/shared/Connect2_LegacyShared/NewConnectContent';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { getPreloadObject, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import type { AssembleDetailInputs } from '@/pages/AssembleDetail/types';
import { navigationStorage } from './actions';
import { AssembleEventDetail, type AssembleEventDetailProps } from './AssembleEventDetail';

/* Sources: migration/screens/AssembleDetail/sources/Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc.js
   (SB) and NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc.js (FSA). */

const scopeOf = (id: string) => id.replace(/\$/g, '');

/** NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack (FSA view :208-282, controller :320-444, JS :464-472): an
    always-empty `$if(False)` and a BackNavigationHandler (Priority -1) whose BackNavigation stores
    { id: ScrollAnchorId, index: ListIndex } as "dx-entering-scroll-anchor" in the navigation storage, then raises the
    block's BackNavigation event (not handled by ScreenBlock_AssembleDetail). */
export function FocusScrollAnchorOnBack({
  id,
  listIndex,
  scrollAnchorId,
}: {
  id: string;
  listIndex: number;
  scrollAnchorId: string;
}) {
  const scope = scopeOf(id);
  return (
    <OSBlock name="ScrollAnchors.FocusScrollAnchorOnBack" id={id}>
      <BackNavigationHandler
        id={`${scope}-$b1`}
        priority={-1}
        onBackNavigation={() => {
          navigationStorage.set('dx-entering-scroll-anchor', { id: scrollAnchorId, index: listIndex });
        }}
      />
    </OSBlock>
  );
}

/** AssembleDetailsPreloading (Connect2_Assemble_CS AssembleDetailsPreloadingRec): the fields the block reads. */
interface AssembleDetailsPreloading {
  AssembleEventSummary?: { AssembleEventType?: { Title?: string } };
  PreloadedFromListIndex?: number;
}

export interface ScreenBlock_AssembleDetailProps extends Omit<
  AssembleEventDetailProps,
  'id' | 'inputs' | 'onUpdateTitle'
> {
  id: string;
  inputs: AssembleDetailInputs;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
}

/** Assemble.ScreenBlock_AssembleDetail (SB view :343-748, controller :796-1192). Layout: back arrow, title = the
    preloaded event type title, NewConnectContent with AssembleEventDetail (SeriesId, EventId, Start) and
    FocusScrollAnchorOnBack (ListIndex = CurrentItemPosition -1, ScrollAnchorId = PreloadedFromListIndex), the BottomBar
    and CommonUI_Elements placeholders. OnInitialize (not restored from cache): OnInitialize_Preload (GetPreloadObject,
    AssignFromObject into AssembleDetailsPreloading), then an empty title takes the AssembleEventTypeTile input. The
    detail's UpdateTitle sets the title unless empty. */
export function ScreenBlock_AssembleDetail({ id, inputs, bottomBar, ...events }: ScreenBlock_AssembleDetailProps) {
  const scope = scopeOf(id);
  const fromCache = useWasRestoredFromCache();
  const [title, setTitle] = useViewState(`${scope}-Title`, '');
  const [preloadedFromListIndex, setPreloadedFromListIndex] = useViewState(`${scope}-PreloadedFromListIndex`, 0);
  const currentItemPosition = -1;

  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    if (fromCache) return;
    const preload = getPreloadObject();
    let preloadedTitle = '';
    if (preload !== null && typeof preload === 'object' && !Array.isArray(preload)) {
      const p = preload as AssembleDetailsPreloading;
      preloadedTitle = p.AssembleEventSummary?.AssembleEventType?.Title ?? '';
      setPreloadedFromListIndex(p.PreloadedFromListIndex ?? 0);
    }
    setTitle(preloadedTitle === '' ? inputs.AssembleEventTypeTile : preloadedTitle);
    // OnInitialize runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OSBlock name="Assemble.ScreenBlock_AssembleDetail" id={id}>
      <LegacyLayout
        id={`${scope}-Layout`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
        title={<span data-expression="">{title}</span>}
        content={
          <NewConnectContent id={`${scope}-$b3`}>
            <AssembleEventDetail
              id={`${scope}-$b4`}
              inputs={{ SeriesId: inputs.SeriesId, EventId: inputs.EventId, Start: inputs.Start }}
              onUpdateTitle={(t) => {
                if (t !== '') setTitle(t);
              }}
              {...events}
            />
            <FocusScrollAnchorOnBack
              id={`${scope}-$b5`}
              listIndex={currentItemPosition}
              scrollAnchorId={String(preloadedFromListIndex)}
            />
          </NewConnectContent>
        }
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
