// @os-block UBTConnect.Directory_Locality.Locality_OneSchoolGlobal
import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { DirectoryEmptyState } from '@/components/directory/DirectoryEmptyState';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { getOneSchoolGlobalList } from '@/pages/Locality_Details/api';
import type { OneSchoolCard } from '@/pages/Locality_Details/types';
import { getSkeletonList_UI_OneSchoolGlobal_ListCard } from './actions';
import { OneSchoolGlobal_List, type OneSchoolRow } from './OneSchoolGlobal_List';

export interface Locality_OneSchoolGlobalProps {
  /** OutSystems instance id of the block (the widget name "Block_OneSchoolGlobal_List" in Locality_Details). */
  id?: string;
  /** Prefix of the ids inside the block (its alias, "b21"). */
  idPrefix?: string;
  /** In_LocalityId (Long Integer as text). */
  inLocalityId?: string;
  /** In_LocalityTimezoneData (UI_LocalityTimezone). */
  inLocalityTimezoneData?: { TimezoneName: string; TimezoneOffset: string };
  /** Event Event_OnClick(Event_OneSchoolGlobalId). */
  onEventOnClick?: (oneSchoolGlobalId: string) => void;
}

/** Block variables (Locality_OneSchoolGlobal.mvc.js model :60-200) and what Get_OneSchoolGlobal_List last returned. */
interface Model {
  getOneSchoolGlobal_List_StartIndex: number;
  getOneSchoolGlobal_List_Offset: number;
  get_OneSchoolGlobal_List_IsLoading: boolean;
  out_OneSchoolGlobal_List2: OneSchoolRow[];
  nextKey: number;
  isDataFetched: boolean;
  out_OneSchoolGlobal_List: OneSchoolCard[];
}

const INITIAL: Model = {
  getOneSchoolGlobal_List_StartIndex: 0,
  getOneSchoolGlobal_List_Offset: 20,
  get_OneSchoolGlobal_List_IsLoading: true,
  out_OneSchoolGlobal_List2: [],
  nextKey: 0,
  isDataFetched: false,
  out_OneSchoolGlobal_List: [],
};
const NO_TIMEZONE = { TimezoneName: '', TimezoneOffset: '0' };

const appendRows = (rows: OneSchoolRow[], nextKey: number, cards: OneSchoolCard[]) => ({
  rows: [...rows, ...cards.map((card, i) => ({ key: nextKey + i, card }))],
  nextKey: nextKey + cards.length,
});

/** Directory_Locality.Locality_OneSchoolGlobal, the OneSchool Global tag (p:migration/screens/Locality_Details/
    analysis/sources/pretty/UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc.js view :365-550, controller
    :600-960): CustomContainer "Block_OneSchoolGlobalListWrapper" (Neutral0, padding y Small x Base) with
    Directory_EmptyState (OneSchool Global) when Out_OneSchoolGlobal_List2 is empty, otherwise OneSchoolGlobal_List
    (In_IsLoading = Get_OneSchoolGlobal_List_IsLoading). ScreenEvent_OnReady: restored from cache → nothing; else three
    skeleton cards (GetSkeletonList_UI_OneSchoolGlobal_ListCard) and the refresh of Get_OneSchoolGlobal_List.
    OnAfterFetch: the first time ListClear and IsLoading False, then ListAppendAll. Handler_OnScrollEnding: fetched and
    a full page → StartIndex += Offset and refresh. Event_OnClick goes up to the screen. */
export function Locality_OneSchoolGlobal({
  id,
  idPrefix = '',
  inLocalityId = '0',
  inLocalityTimezoneData = NO_TIMEZONE,
  onEventOnClick,
}: Locality_OneSchoolGlobalProps) {
  const restored = useWasRestoredFromCache();
  const [state, setState] = useViewState<Model>('Locality_OneSchoolGlobal', INITIAL);
  const latest = useRef(state);
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setState(latest.current);
  };

  /** Refresh Get_OneSchoolGlobal_List, then OnAfterFetch_Get_OneSchoolGlobal_List (controller :739-786). */
  const refresh = async () => {
    const v = latest.current;
    const out = await getOneSchoolGlobalList({
      getOneSchoolGlobal_List_StartIndex: v.getOneSchoolGlobal_List_StartIndex,
      getOneSchoolGlobal_List_Offset: v.getOneSchoolGlobal_List_Offset,
      get_OneSchoolGlobal_List_IsLoading: v.get_OneSchoolGlobal_List_IsLoading,
      out_OneSchoolGlobal_List2: v.out_OneSchoolGlobal_List2.map((r) => r.card),
      in_LocalityId: inLocalityId,
      in_LocalityTimezoneData: inLocalityTimezoneData,
    });
    const m = latest.current;
    const cleared = m.get_OneSchoolGlobal_List_IsLoading ? [] : m.out_OneSchoolGlobal_List2;
    const { rows, nextKey } = appendRows(cleared, m.nextKey, out);
    set({
      isDataFetched: true,
      out_OneSchoolGlobal_List: out,
      get_OneSchoolGlobal_List_IsLoading: false,
      out_OneSchoolGlobal_List2: rows,
      nextKey,
    });
  };

  /* ScreenEvent_OnReady (controller :788-900). */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && latest.current.isDataFetched) return;
    const skeleton = appendRows([], 0, getSkeletonList_UI_OneSchoolGlobal_ListCard(3));
    set({ out_OneSchoolGlobal_List2: skeleton.rows, nextKey: skeleton.nextKey });
    refresh().catch(raiseToFlowHandler);
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Handler_OnScrollEnding (controller :674-737). */
  const handlerOnScrollEnding = async () => {
    const v = latest.current;
    if (!v.isDataFetched) return;
    if (v.out_OneSchoolGlobal_List.length < v.getOneSchoolGlobal_List_Offset) return;
    set({
      getOneSchoolGlobal_List_StartIndex: v.getOneSchoolGlobal_List_StartIndex + v.getOneSchoolGlobal_List_Offset,
    });
    await refresh();
  };

  const b = idPrefix;
  return (
    <OSBlock name="Directory_Locality.Locality_OneSchoolGlobal" id={id}>
      <CustomContainer
        id={`${b}-Block_OneSchoolGlobalListWrapper`}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
        }}
      >
        {state.out_OneSchoolGlobal_List2.length === 0 ? (
          <DirectoryEmptyState id={`${b}-$b2`} entityTypeId={Connect_Entity.OneSchoolGlobal} />
        ) : (
          <OneSchoolGlobal_List
            id={`${b}-$b3`}
            inIsLoading={state.get_OneSchoolGlobal_List_IsLoading}
            oneSchoolList={state.out_OneSchoolGlobal_List2}
            onEventOnClick={onEventOnClick}
            onEventScrollEnding={() => handlerOnScrollEnding().catch(raiseToFlowHandler)}
          />
        )}
      </CustomContainer>
    </OSBlock>
  );
}
