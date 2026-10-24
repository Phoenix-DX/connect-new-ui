import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { dateTimeParam, useOsNavigate } from '@/platform/navigation';
import { bottomSheetClose, bottomSheetOpen } from '@/shared/osui/lib/actions';
import { BottomSheet } from '@/shared/UBTConnectLibrary/BottomSheet';
import { Assemble_FilterSheet } from './components/Assemble_FilterSheet';
import { AssembleEventsView } from './components/AssembleEventsView';
import { AssembleSummary_List } from './components/AssembleSummary_List';
import { useAssembleEvents, type AssembleEventsBlockInputs } from './hooks/useAssembleEvents';
import { useAssembleFilterSheet, type AssembleFilterSheetEvents } from './hooks/useAssembleFilterSheet';
import { useAssembleSummaryList, type AssembleSummaryListEvents } from './hooks/useAssembleSummaryList';
import { readAssembleEventsInputs } from './inputs';

/** Type_MyCalendarEventSource.Assemble (static-entities-tst.json `UBTConnect.type_MyCalendarEventSource`). */
const MY_CALENDAR_EVENT_SOURCE_ASSEMBLE = 'event-assemble';
/** The instance id of ScreenBlock_AssembleEvents. */
const SCREEN_BLOCK_ID = '$b2';
/** The instance id of AssembleSummary_List in ScreenBlock_AssembleEvents (`$b4` of the block `b2`). */
const SUMMARY_LIST_ID = 'b2-$b4';
/** The instance id of Assemble_FilterSheet, and the id prefix of its widgets. */
const FILTER_SHEET_ID = 'Assemble_FilterSheet_Instance';
const FILTER_SHEET_SCOPE = 'b5';

/* The three blocks of the screen with flows. Each one is a small component at the place of the block that calls the
   hook of the block and gives the result to the view of the block. So the flows live as long as the block, OnReady
   runs in the order of the blocks (the meeting list, ScreenBlock_AssembleEvents, then the filter sheet), and a change
   of the block state renders only the block, as in OutSystems. */

/** The inputs and the events of ScreenBlock_AssembleEvents. */
interface AssembleEventsBlockProps extends AssembleEventsBlockInputs, AssembleSummaryListEvents {
  /** Event NavigateTo_AssembleLocationFilters. */
  onNavigateToAssembleLocationFilters: () => void;
  /** Event NavigateTo_MyCalendarAssemble. */
  onNavigateToMyCalendarAssemble: () => void;
}

/** ScreenBlock_AssembleEvents `$b2`, with BottomBarMenu `$b3` in its BottomBar and AssembleSummary_List `$b4`. */
function AssembleEventsBlock({
  onNavigateToAssembleLocationFilters,
  onNavigateToMyCalendarAssemble,
  onNavigateToAssembleDetail,
  ...inputs
}: AssembleEventsBlockProps) {
  const { subdivisionName } = useAssembleEvents(inputs);
  return (
    <AssembleEventsView
      id={SCREEN_BLOCK_ID}
      subdivisionName={subdivisionName}
      showBackNavigation={inputs.showBackNavigation}
      isUserSubdivision={inputs.isUserSubdivision}
      list={
        <AssembleSummaryListBlock
          subdivisionId={inputs.subdivisionId}
          onNavigateToAssembleDetail={onNavigateToAssembleDetail}
        />
      }
      bottomBar={<BottomBar id="$b3" />}
      onNavigateToAssembleLocationFilters={onNavigateToAssembleLocationFilters}
      onNavigateToMyCalendarAssemble={onNavigateToMyCalendarAssemble}
    />
  );
}

/** AssembleSummary_List `b2-$b4`, with the SubdivisionId of the screen. */
function AssembleSummaryListBlock({ subdivisionId, ...events }: { subdivisionId: string } & AssembleSummaryListEvents) {
  const list = useAssembleSummaryList({ subdivisionId }, events);
  return <AssembleSummary_List id={SUMMARY_LIST_ID} {...list} />;
}

/** Assemble_FilterSheet in BottomSheet_AssembleFilter. */
function AssembleFilterSheetBlock(events: AssembleFilterSheetEvents) {
  const sheet = useAssembleFilterSheet(FILTER_SHEET_SCOPE, events);
  return <Assemble_FilterSheet id={FILTER_SHEET_ID} scope={FILTER_SHEET_SCOPE} {...sheet} />;
}

/** @origin UBTConnect.Legacy_AssembleFlow.AssembleEvents
    The meetings of a supper meeting. Inputs SubdivisionId (Long Integer, 0), ShowBackNavigation (False) and
    IsUserSubdivision (True). CommonUI_InsideLayout, ScreenBlock_AssembleEvents with BottomBarMenu in its BottomBar, and
    BottomSheet_AssembleFilter ("Test", close on click outside) with Assemble_FilterSheet. Handlers: the place link opens
    the filter sheet only with UseNewFilterSheet (a screen variable that nothing sets: False), so it goes to
    Assemble_BrowseByCountry; the calendar icon goes to MyEntertaining (MyCalendarEventSourceId "event-assemble"); a card
    goes to AssembleDetail (Start, EventId, SeriesId). The NavigateToSubdivision event of the sheet sets SubdivisionId and
    IsUserSubdivision and closes the sheet; its Cancel event closes it. The flows of the blocks are in useAssembleEvents,
    useAssembleSummaryList and useAssembleFilterSheet. */
export default function AssembleEvents() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const inputs = readAssembleEventsInputs(params);
  const [subdivisionId, setSubdivisionId] = useState(inputs.subdivisionId);
  const [isUserSubdivision, setIsUserSubdivision] = useState(inputs.isUserSubdivision);
  const [sheetId, setSheetId] = useState('');
  // Screen variable UseNewFilterSheet (default False, never assigned).
  const [useNewFilterSheet] = useState(false);

  return (
    <>
      <CommonUiLayout id="$b1" />
      <AssembleEventsBlock
        subdivisionId={subdivisionId}
        showBackNavigation={inputs.showBackNavigation}
        isUserSubdivision={isUserSubdivision}
        onNavigateToAssembleLocationFilters={() => {
          // Handler_NavigateTo_AssembleLocationFilters.
          if (useNewFilterSheet) bottomSheetOpen(sheetId);
          else navigate('/UBTConnect/Assemble_BrowseByCountry');
        }}
        onNavigateToMyCalendarAssemble={() => {
          navigate('/UBTConnect/MyEntertaining', { MyCalendarEventSourceId: MY_CALENDAR_EVENT_SOURCE_ASSEMBLE });
        }}
        onNavigateToAssembleDetail={(seriesId, eventId, start) => {
          // Handler_NavigateTo_AssembleDetail; Start through ServerDataConverter.asString(DateTime) (Q2).
          navigate('/UBTConnect/AssembleDetail', { Start: dateTimeParam(start), EventId: eventId, SeriesId: seriesId });
        }}
      />
      <BottomSheet
        id="BottomSheet_AssembleFilter"
        title="Test"
        closeOnClickOutsite
        onInitialized={setSheetId}
        content={
          <AssembleFilterSheetBlock
            onCancel={() => {
              bottomSheetClose(sheetId);
            }}
            onNavigateToSubdivision={(newSubdivisionId, newIsUserSubdivision) => {
              setSubdivisionId(newSubdivisionId);
              setIsUserSubdivision(newIsUserSubdivision);
              bottomSheetClose(sheetId);
            }}
          />
        }
      />
    </>
  );
}
