/** The variables of the block ScreenBlock_AssembleDetail, the reducer and OnInitialize_Preload. Pure; the flows are in
    useAssembleDetail.
    @origin Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail */

/** The variables of the block that the view cache keeps. */
export interface AssembleDetailState {
  /** Title: the header title. */
  title: string;
  /** AssembleDetailsPreloading.PreloadedFromListIndex: the ScrollAnchorId of FocusScrollAnchorOnBack. */
  preloadedFromListIndex: number;
}

/** An assignment of one or more variables. */
export type AssembleDetailPatch = Partial<AssembleDetailState>;

/** The variables before OnInitialize (their defaults). */
export const INITIAL_ASSEMBLE_DETAIL_STATE: AssembleDetailState = { title: '', preloadedFromListIndex: 0 };

/** CurrentItemPosition: never assigned, so always -1. It is the ListIndex of FocusScrollAnchorOnBack. */
export const CURRENT_ITEM_POSITION = -1;

/** The variables after an assignment. */
export const assembleDetailReducer = (state: AssembleDetailState, patch: AssembleDetailPatch): AssembleDetailState => ({
  ...state,
  ...patch,
});

/** AssembleDetailsPreloading (Connect2_Assemble_CS AssembleDetailsPreloadingRec): the fields that the block reads. */
interface AssembleDetailsPreloading {
  AssembleEventSummary?: { AssembleEventType?: { Title?: string } };
  PreloadedFromListIndex?: number;
}

/** OnInitialize of a new visit: OnInitialize_Preload (AssignFromObject of the preload object into
    AssembleDetailsPreloading; a value that is not a record leaves it at its defaults), then the title is the preloaded
    meeting type title, or the AssembleEventTypeTile input when that title is empty. */
export function initializeFromPreload(preload: unknown, assembleEventTypeTile: string): AssembleDetailPatch {
  const patch: AssembleDetailPatch = {};
  let preloadedTitle = '';
  if (preload !== null && typeof preload === 'object' && !Array.isArray(preload)) {
    const p = preload as AssembleDetailsPreloading;
    preloadedTitle = p.AssembleEventSummary?.AssembleEventType?.Title ?? '';
    patch.preloadedFromListIndex = p.PreloadedFromListIndex ?? 0;
  }
  patch.title = preloadedTitle === '' ? assembleEventTypeTile : preloadedTitle;
  return patch;
}

/** UpdateTitle of AssembleEventDetail: the title, unless it is empty (then nothing). */
export const titleUpdate = (title: string): AssembleDetailPatch | null => (title === '' ? null : { title });
