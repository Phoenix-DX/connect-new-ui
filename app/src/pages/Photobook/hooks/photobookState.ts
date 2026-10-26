import type { PhotobookHousehold, SelectedHousehold } from '@/api/household';
import type { PhotobookInputs } from '@/pages/Photobook/inputs';

/** The state of the Photobook screen: its variables and the answer of its data action. The view cache keeps all of
    it (P-BACK).
    @origin UBTConnect.Directory_Photobook.Photobook */
export interface PhotobookState {
  /** SelectedHousehold: the household that the photobook opens on (Id) and its position in the list. */
  selectedHousehold: SelectedHousehold;
  /** IsLoading: true until GetLocalityHouseholdIds answers. */
  isLoading: boolean;
  /** GetLocalityHouseholdIds.List; null until the first answer. */
  households: PhotobookHousehold[] | null;
}

export type PhotobookAction = {
  /** OnAfterFetch of GetLocalityHouseholdIds. */
  type: 'localityHouseholdIdsFetched';
  households: PhotobookHousehold[];
  /** In_HouseholdId: the household whose position the screen selects. */
  householdId: string;
};

/** OnInitialize of a new visit: SelectedHousehold.Id = In_HouseholdId, IsLoading = True. A view that the view cache
    restores keeps its saved state instead. */
export function initialPhotobookState(inputs: PhotobookInputs): PhotobookState {
  return { selectedHousehold: { id: inputs.In_HouseholdId, position: 0 }, isLoading: true, households: null };
}

/** OnAfterFetch of GetLocalityHouseholdIds: the list, SelectedHousehold.Position = the index of In_HouseholdId in the
    list (0 when it is not in the list), IsLoading = False. */
export function photobookReducer(state: PhotobookState, action: PhotobookAction): PhotobookState {
  const index = action.households.findIndex((h) => h.householdId === action.householdId);
  return {
    ...state,
    households: action.households,
    selectedHousehold: { ...state.selectedHousehold, position: index !== -1 ? index : 0 },
    isLoading: false,
  };
}
