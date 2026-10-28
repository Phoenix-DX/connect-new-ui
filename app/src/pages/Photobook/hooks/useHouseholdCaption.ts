import { useState } from 'react';
import { fetchHouseholdCaption, type PhotobookHousehold } from '@/api/household';
import { useFlowScope, useWasRestoredFromCache } from '@/platform/navigation';
import { bottomSheetClose, bottomSheetOpen } from '@/components/ui/lib/actions';

/** The variables and the flows of the block Photobook_Options_Left: the info sheet and the household caption that it
    shows. The block calls this hook and renders the info button and the sheet with the result.
    @origin UBTConnect.Directory_Photobook.Photobook_Options_Left */

/** GetSkeleton_UI_PhotobookCaption (UBTConnect.controller.js, raw copy in analysis/sources/raw): the caption shown
    until DataActionGetHouseholdCaption answers. */
export const SKELETON_CAPTION =
  'SURNAME (Name - Local) Name & Name (Name Name* - Locality, AA) First name m, Name m, Name m (Locality) Name 00/00, Name';
const EMPTY_HOUSEHOLD: PhotobookHousehold = { householdId: '0', householdName: '', locality: '' };
const sameHousehold = (a: PhotobookHousehold, b: PhotobookHousehold) =>
  a.householdId === b.householdId && a.householdName === b.householdName && a.locality === b.locality;

/** The block inputs that the flows read. */
export interface HouseholdCaptionInputs {
  inCurrentHousehold: PhotobookHousehold;
  inIsShow: boolean;
  inMainContainerClass: string;
}

/** What the block renders and the handlers of its widgets. */
export interface HouseholdCaptionFlows {
  /** The caption (HTML) of the sheet. */
  caption: string;
  /** isLoading: true while DataActionGetHouseholdCaption runs. */
  isLoading: boolean;
  /** Initialized of the BottomSheet: its widget id (InfoSheetId). */
  onSheetInitialized: (sheetId: string) => void;
  /** Handler_ClickedInfo. */
  onClickedInfo: () => void;
  /** OnClose of the BottomSheet: ToggleInfoSheet(False). */
  onCloseSheet: () => void;
}

/** The flows of Photobook_Options_Left.
    - OnInitialize: unless the view is restored from the cache, the caption starts as the skeleton caption. The view
      cache does not keep the block variables.
    - Handler_ClickedInfo: ToggleInfoSheet(True) (BottomSheetOpen), then, when the current household is not the last
      fetched one, the refresh of DataActionGetHouseholdCaption (isLoading True until OnAfterFetch sets the caption,
      isLoading False and LastFetched). A failure goes to the flow handler.
    - Flow scope (item 8): DataActionGetHouseholdCaption is a data action (R1, Photobook_Options_Left.js:494). A call
      that started runs to its end after an unmount, but its answer (OnAfterFetch, :624) and its failure are dropped. */
export function useHouseholdCaption({
  inCurrentHousehold,
  inIsShow,
  inMainContainerClass,
}: HouseholdCaptionInputs): HouseholdCaptionFlows {
  const flow = useFlowScope();
  const restored = useWasRestoredFromCache();
  const [infoSheetId, setInfoSheetId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastFetched, setLastFetched] = useState<PhotobookHousehold>(EMPTY_HOUSEHOLD);
  const [caption, setCaption] = useState(restored ? '' : SKELETON_CAPTION);

  /** ToggleInfoSheet. */
  const toggleInfoSheet = (isOpen: boolean) => {
    if (isOpen) bottomSheetOpen(infoSheetId);
    else bottomSheetClose(infoSheetId);
  };

  /** Handler_ClickedInfo. */
  const clickedInfo = async () => {
    toggleInfoSheet(true);
    if (sameHousehold(lastFetched, inCurrentHousehold)) return;
    setIsLoading(true);
    const out = await flow.fetch(
      fetchHouseholdCaption({
        inCurrentHousehold,
        inIsShow,
        inMainContainerClass,
        infoSheetId,
        lastFetched,
        isLoading: true,
      }),
    ); // R1
    setCaption(out.householdCaption);
    setIsLoading(false);
    setLastFetched(out.lastFetchedHousehold);
  };

  return {
    caption,
    isLoading,
    onSheetInitialized: setInfoSheetId,
    onClickedInfo: () => {
      flow.run(clickedInfo);
    },
    onCloseSheet: () => {
      toggleInfoSheet(false);
    },
  };
}
