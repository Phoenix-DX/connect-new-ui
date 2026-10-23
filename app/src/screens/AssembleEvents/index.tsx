import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { BottomSheet } from '@/shared/UBTConnectLibrary/BottomSheet';
import { bottomSheetClose, bottomSheetOpen } from '@/shared/osui/lib/actions';
import { dateTimeParam, useOsNavigate } from '@/platform/navigation';
import { Assemble_FilterSheet } from './components/Assemble_FilterSheet';
import { ScreenBlock_AssembleEvents } from './components/ScreenBlock_AssembleEvents';

/** Type_MyCalendarEventSource.Assemble (static-entities-tst.json `UBTConnect.type_MyCalendarEventSource`). */
const MY_CALENDAR_EVENT_SOURCE_ASSEMBLE = 'event-assemble';

const bool = (v: string | null, fallback: boolean) => (v === null ? fallback : v.toLowerCase() === 'true');

/** UBTConnect Legacy_AssembleFlow.AssembleEvents (p:migration/screens/AssembleEvents/analysis/sources/pretty/
    UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc.js: view :150-330, controller :330-560). Inputs SubdivisionId
    (Long Integer, 0), ShowBackNavigation (False), IsUserSubdivision (True). CommonUI_InsideLayout, ScreenBlock_
    AssembleEvents with BottomBarMenu in its BottomBar, and BottomSheet_AssembleFilter ("Test", close on click outside)
    holding Assemble_FilterSheet. Handlers: the place link opens the filter sheet only with UseNewFilterSheet (a screen
    variable never set: False), so it goes to Assemble_BrowseByCountry; the calendar icon to MyEntertaining
    (MyCalendarEventSourceId "event-assemble"); a card to AssembleDetail (Start, EventId, SeriesId). The sheet's
    NavigateToSubdivision sets SubdivisionId / IsUserSubdivision and closes it; Cancel closes it. */
export default function AssembleEvents() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const [subdivisionId, setSubdivisionId] = useState(params.get('SubdivisionId') ?? '0');
  const [isUserSubdivision, setIsUserSubdivision] = useState(bool(params.get('IsUserSubdivision'), true));
  const showBackNavigation = bool(params.get('ShowBackNavigation'), false);
  const [sheetId, setSheetId] = useState('');
  // Screen variable UseNewFilterSheet (default False, never assigned).
  const [useNewFilterSheet] = useState(false);

  return (
    <>
      <CommonUiLayout id="$b1" />
      <ScreenBlock_AssembleEvents
        id="$b2"
        subdivisionId={subdivisionId}
        showBackNavigation={showBackNavigation}
        isUserSubdivision={isUserSubdivision}
        bottomBar={<BottomBar id="$b3" />}
        onNavigateToAssembleLocationFilters={() => {
          // Handler_NavigateTo_AssembleLocationFilters (:330-350).
          if (useNewFilterSheet) bottomSheetOpen(sheetId);
          else navigate('/UBTConnect/Assemble_BrowseByCountry');
        }}
        onNavigateToMyCalendarAssemble={() => {
          navigate('/UBTConnect/MyEntertaining', { MyCalendarEventSourceId: MY_CALENDAR_EVENT_SOURCE_ASSEMBLE });
        }}
        onNavigateToAssembleDetail={(seriesId, eventId, start) => {
          // Handler_NavigateTo_AssembleDetail (:420-445); Start through ServerDataConverter.asString(DateTime) (Q2).
          navigate('/UBTConnect/AssembleDetail', { Start: dateTimeParam(start), EventId: eventId, SeriesId: seriesId });
        }}
      />
      <BottomSheet
        id="BottomSheet_AssembleFilter"
        title="Test"
        closeOnClickOutsite
        onInitialized={setSheetId}
        content={
          <Assemble_FilterSheet
            id="Assemble_FilterSheet_Instance"
            scope="b5"
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
