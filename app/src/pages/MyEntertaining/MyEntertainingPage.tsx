import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useNavigateBack } from '@/platform/navigation';
import { EMBEDDED_MY_ENTERTAINING_DEFAULTS, Embedded_MyEntertaining } from './components/Embedded_MyEntertaining';
import { MyEntertaining_Embedded } from './components/MyEntertaining_Embedded';
import { useEntertainingCalendar } from './hooks/useEntertainingCalendar';
import { useMyEntertaining, type MyEntertainingFlow } from './hooks/useMyEntertaining';
import { readMyEntertainingInputs } from './inputs';

/** Embedded_MyEntertaining at the place of the block: its calls (useEntertainingCalendar) and its view. The hook runs
    here, so GetEntertainingConfig starts where the block starts it, before the nested CommonUI_InsideLayout (the call
    order stays the same). MyEntertaining_Embedded gives no View and no Theme: the block uses its defaults. */
function EntertainingCalendar({
  id,
  flow,
  onNavBack,
}: {
  id: string;
  flow: MyEntertainingFlow;
  onNavBack: () => void;
}) {
  const { view, theme } = EMBEDDED_MY_ENTERTAINING_DEFAULTS;
  const calendar = useEntertainingCalendar({
    View: view,
    Theme: theme,
    Sources: flow.sources,
    B2CTenant: flow.b2CTenant,
  });
  return (
    <Embedded_MyEntertaining
      id={id}
      sources={flow.sources}
      b2CTenant={flow.b2CTenant}
      config={calendar.config}
      onRefreshToken={calendar.refreshToken}
      onOnError={flow.onError}
      onOnOpenMap={flow.onOpenMap}
      onOnNavBack={onNavBack}
    />
  );
}

/** @origin UBTConnect.Calendar.MyEntertaining
    The My Entertaining calendar: CommonUI_InsideLayout, then MyEntertaining_Embedded with
    In_InitialEventSouceId = MyCalendarEventSourceId. The screen has no lifecycle event and no call of its own. The
    flows of MyEntertaining_Embedded are in useMyEntertaining, the calls of Embedded_MyEntertaining in
    useEntertainingCalendar. Handle_NavBack (event OnNavBack of MyEntertaining_Embedded) goes to the previous screen
    (live TST of 2026-10-27, MyEntertaining.mvc.js:164-177, 216-237). */
export default function MyEntertaining() {
  const [params] = useSearchParams();
  const { MyCalendarEventSourceId } = readMyEntertainingInputs(params);
  const navigateBack = useNavigateBack();
  const flow = useMyEntertaining(MyCalendarEventSourceId);
  return (
    <>
      <CommonUiLayout id="$b1" />
      <MyEntertaining_Embedded
        id="$b2"
        onNavBack={navigateBack}
        renderCalendar={(id, onNavBack) => <EntertainingCalendar id={id} flow={flow} onNavBack={onNavBack} />}
      />
    </>
  );
}
