import { useQuery } from '@tanstack/react-query';
import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { HouseholdCaption, PhotobookHousehold, PhotobookInputs, SelectedHousehold } from './types';

const ACTION_HOUSEHOLDS = 'Photobook/DataActionGetLocalityHouseholdIds';
const ACTION_CAPTION = 'Photobook_Options_Left/DataActionGetHouseholdCaption';

type HouseholdWire = { HouseholdId: string; HouseholdName: string; Locality: string };

/** In_HouseholdId / In_LocalityId (Long Integer) from the query string; OutSystems default 0 when absent
    (Photobook.mvc.js model :96-104, setInputs). */
export function readPhotobookInputs(params: URLSearchParams): PhotobookInputs {
  const read = (name: string) => {
    const value = params.get(name);
    return value === null || value === '' ? '0' : value;
  };
  return { In_HouseholdId: read('In_HouseholdId'), In_LocalityId: read('In_LocalityId') };
}

const toHousehold = (w: HouseholdWire): PhotobookHousehold => ({
  householdId: w.HouseholdId,
  householdName: w.HouseholdName,
  locality: w.Locality,
});

export const householdWire = (h: PhotobookHousehold): HouseholdWire => ({
  HouseholdId: h.householdId,
  HouseholdName: h.householdName,
  Locality: h.locality,
});

/** Screen variables OutSystems sends with the data action (calls.md "DataActionGetLocalityHouseholdIds"). */
export interface PhotobookVariables {
  isLoading: boolean;
  selectedHousehold: SelectedHousehold;
}

/** DataActionGetLocalityHouseholdIds of the screen (Photobook.mvc.js controller :376-401): fetched at start
    (dataFetchDependenciesOriginal 0, :365-367; calls.json phase load), then OnAfterFetch (:556-583). The server action
    has no inputs of its own; OutSystems sends the screen variables, read at fetch time (`variables`). */
export function useGetLocalityHouseholdIds(inputs: PhotobookInputs, variables: () => PhotobookVariables) {
  return useQuery({
    queryKey: ['Photobook', ACTION_HOUSEHOLDS, inputs],
    queryFn: async (): Promise<PhotobookHousehold[]> => {
      const v = variables();
      const out = await callAction('UBTConnect', ACTION_HOUSEHOLDS, {
        IsLoading: v.isLoading,
        SelectedHousehold: { Id: v.selectedHousehold.id, Position: v.selectedHousehold.position },
        In_HouseholdId: inputs.In_HouseholdId,
        In_LocalityId: inputs.In_LocalityId,
      });
      return osList(out.Out_LocalityHouseholdIds).map(toHousehold);
    },
    gcTime: 0,
    staleTime: Infinity,
    retry: false,
  });
}

/** Block variables of Photobook_Options_Left sent with DataActionGetHouseholdCaption (contract input schema). */
export interface CaptionVariables {
  inCurrentHousehold: PhotobookHousehold;
  inIsShow: boolean;
  inMainContainerClass: string;
  infoSheetId: string;
  lastFetched: PhotobookHousehold;
  isLoading: boolean;
}

/** DataActionGetHouseholdCaption of Photobook_Options_Left (Photobook_Options_Left.mvc.js controller
    getHouseholdCaption$DataActRefresh): on demand only (dataFetchDependenciesOriginal -1), refreshed by
    Handler_ClickedInfo when the current household is not the last fetched one. */
export async function getHouseholdCaption(v: CaptionVariables): Promise<HouseholdCaption> {
  const out = await callAction('UBTConnect', ACTION_CAPTION, {
    In_CurrentHousehold: householdWire(v.inCurrentHousehold),
    In_IsShow: v.inIsShow,
    In_MainContainerClass: v.inMainContainerClass,
    InfoSheetId: v.infoSheetId,
    LastFetched: householdWire(v.lastFetched),
    isLoading: v.isLoading,
  });
  return { householdCaption: out.HouseholdCaption, lastFetchedHousehold: toHousehold(out.LastFetchedHousehold) };
}
