// @os-block UBTConnect.Directory_Locality.Locality_Subdivisions
import { useEffect, useRef } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { OSList } from '../../../components/OSList';
import { isOn } from '../../../lib/flags';
import { raiseToFlowHandler } from '../../../shell/exceptions';
import { setPreloadObject, useOsNavigate, useViewState, useWasRestoredFromCache } from '../../../shell/navigation';
import { APP_ID } from '../../../shell/paths';
import { Directory_EmptyState } from '../../../shared/UBTConnect/Directory_EmptyState';
import { SupperMeeting_ImageCard_Content } from '../../../shared/UBTConnect/SupperMeeting_ImageCard_Content';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { ImageCard_LazyLoading } from '../../../shared/UBTConnectLibrary/ImageCard_LazyLoading';
import {
  UBT_Color,
  UBT_ImageCardType,
  UBT_ImageSize,
  UBT_Size,
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '../../../shared/UBTConnectLibrary/SkeletonSection';
import { Connect_Entity } from '../../../shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '../../../shared/UBTConnect_Utils/UBT_LazyImage';
import { getSubdivisionList } from '../api';
import type { SubdivisionCard } from '../types';
import { getSkeletonList_UI_SubdivisionCard } from './actions';

export interface Locality_SubdivisionsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** LocalityId (Long Integer as text). */
  localityId?: string;
}

/** A row of Subdivision_Card_List with its record key (OutSystems keeps one key per appended record: the ten skeleton
    rows take 0-9, the fetched rows appended after ListClear continue at 10, captured `l1-3598_10..12`). */
interface Row {
  key: number;
  card: SubdivisionCard;
}

/** Block variables (Locality_Subdivisions.mvc.js model :86-200) and what Get_Subdivision_List last returned. */
interface Model {
  getSubdivisions_StartIndex: number;
  getSubdivisions_Offset: number;
  subdivision_Card_List: Row[];
  subdivision_Card_List_IsLoading: boolean;
  isPaginated: boolean;
  nextKey: number;
  isDataFetched: boolean;
  out_Subdivision_Card_List: SubdivisionCard[];
}

const INITIAL: Model = {
  getSubdivisions_StartIndex: 0,
  getSubdivisions_Offset: 20,
  subdivision_Card_List: [],
  subdivision_Card_List_IsLoading: true,
  isPaginated: false,
  nextKey: 0,
  isDataFetched: false,
  out_Subdivision_Card_List: [],
};

const appendRows = (rows: Row[], nextKey: number, cards: SubdivisionCard[]) => ({
  rows: [...rows, ...cards.map((card, i) => ({ key: nextKey + i, card }))],
  nextKey: nextKey + cards.length,
});

/** Directory_Locality.Locality_Subdivisions, the Supper Meetings tag (p:migration/screens/Locality_Details/analysis/
    sources/pretty/UBTConnect.Directory_Locality.Locality_Subdivisions.mvc.js view :373-620, controller :778-1210):
    SkeletonSection (Subdivision_Card_List_IsLoading) around a CustomContainer (Neutral0, padding y Small x Base) with
    Directory_EmptyState (Supper Meetings) for an empty loaded list, otherwise the List "Subdivision_List" of
    ImageCard_LazyLoading (List) cards: UBT_LazyImage of the subdivision and SupperMeeting_ImageCard_Content.
    ScreenEvent_OnReady: restored from cache → nothing; else ten skeleton cards (GetSkeletonList_UI_SubdivisionCard)
    and the refresh of Get_Subdivision_List. OnAfterFetch: the first time ListClear and IsLoading False, then
    ListAppendAll of the result. OnScrollEnding_RefreshSubdivisions pages only when IsPaginated, never set: no-op. */
export function Locality_Subdivisions({ id, localityId = '0' }: Locality_SubdivisionsProps) {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const [state, setState] = useViewState<Model>('Locality_Subdivisions', INITIAL);
  const latest = useRef(state);
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setState(latest.current);
  };

  /** Refresh Get_Subdivision_List, then OnAfterFetch_Get_Subdivision_List (controller :841-886). */
  const refresh = async () => {
    const v = latest.current;
    const out = await getSubdivisionList({
      getSubdivisions_StartIndex: v.getSubdivisions_StartIndex,
      getSubdivisions_Offset: v.getSubdivisions_Offset,
      subdivision_Card_List: v.subdivision_Card_List.map((r) => r.card),
      subdivision_Card_List_IsLoading: v.subdivision_Card_List_IsLoading,
      isPaginated: v.isPaginated,
      localityId,
    });
    const m = latest.current;
    const cleared = m.subdivision_Card_List_IsLoading ? [] : m.subdivision_Card_List;
    const { rows, nextKey } = appendRows(cleared, m.nextKey, out);
    set({
      isDataFetched: true,
      out_Subdivision_Card_List: out,
      subdivision_Card_List_IsLoading: false,
      subdivision_Card_List: rows,
      nextKey,
    });
  };

  /* ScreenEvent_OnReady (controller :888-982). */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && latest.current.isDataFetched) return;
    const skeleton = appendRows([], 0, getSkeletonList_UI_SubdivisionCard(10));
    set({ subdivision_Card_List: skeleton.rows, nextKey: skeleton.nextKey });
    refresh().catch(raiseToFlowHandler);
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnScrollEnding_RefreshSubdivisions (controller :1087-1192): IsPaginated, fetched and a full page → next page. */
  const onScrollEnding = async () => {
    const v = latest.current;
    if (!v.isPaginated || !v.isDataFetched) return;
    if (v.out_Subdivision_Card_List.length < v.getSubdivisions_Offset) return;
    set({ getSubdivisions_StartIndex: v.getSubdivisions_StartIndex + v.getSubdivisions_Offset });
    await refresh();
  };

  /** OnClick_NavigateToSubdivision (controller :984-1085): GetHasCarouselEnabled → PreloadedSupperMeetings with the
      SubdivisionId of every row Get_Subdivision_List returned (SetPreloadObject) and SupperMeeting_Carousel at the
      clicked one; otherwise SupperMeeting_Details of it. */
  const onClickNavigateToSubdivision = (subdivisionId: string) => {
    if (isOn('C2EnableCarousel')) {
      setPreloadObject({
        SupperMeetingIds: latest.current.out_Subdivision_Card_List.map((c) => c.subdivisionId),
      });
      navigate(`/${APP_ID}/SupperMeeting_Carousel`, { In_StartingSupperMeetingId: subdivisionId });
      return;
    }
    navigate(`/${APP_ID}/SupperMeeting_Details`, { In_SubdivsionId: subdivisionId });
  };

  const b = id?.replace('$', '') ?? '';
  const list = state.subdivision_Card_List;
  return (
    <OSBlock name="Directory_Locality.Locality_Subdivisions" id={id}>
      <SkeletonSection id={`${b}-$b1`} inIsLoading={state.subdivision_Card_List_IsLoading}>
        <CustomContainer
          id={`${b}-Block_SubdivisionListWrapper`}
          options={{
            Background: { BackgroundColor: UBT_Color.Neutral0 },
            PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
          }}
        >
          {list.length === 0 && !state.subdivision_Card_List_IsLoading ? (
            <Directory_EmptyState id={`${b}-$b3`} entityTypeId={Connect_Entity.SupperMeetings_aka_Subdivisions} />
          ) : (
            <OSList
              id={`${b}-Subdivision_List`}
              className="list list-group list--gap-s"
              animateItems
              positionRelative
              source={list}
              keyOf={(row) => row.key}
              onScrollEnding={() => onScrollEnding().catch(raiseToFlowHandler)}
            >
              {(row) => {
                const item = `${b}-l1-3598_${String(row.key)}`;
                return (
                  <div data-container="">
                    <ImageCard_LazyLoading
                      id={`${item}-$b4`}
                      inCardTypeId={UBT_ImageCardType.List}
                      onEventClick={() => {
                        onClickNavigateToSubdivision(row.card.subdivisionId);
                      }}
                      lazyImagePlaceholder={
                        <UBT_LazyImage
                          id={`${item}-$b5`}
                          entityType={Connect_Entity.SupperMeetings_aka_Subdivisions}
                          imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
                          entityId={row.card.subdivisionId}
                          hasErrorMessage
                        />
                      }
                      placeholderContent={
                        <SupperMeeting_ImageCard_Content
                          id={`${item}-$b6`}
                          inSubdivisionCardContent={row.card.content}
                        />
                      }
                    />
                  </div>
                );
              }}
            </OSList>
          )}
        </CustomContainer>
      </SkeletonSection>
    </OSBlock>
  );
}
