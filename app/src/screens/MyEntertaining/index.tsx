import { useSearchParams } from 'react-router';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { readMyEntertainingInputs } from './api';
import { MyEntertaining_Embedded } from './components/MyEntertaining_Embedded';

/** UBTConnect.Calendar.MyEntertaining (MyEntertaining.mvc.js view :140-172): CommonUI_InsideLayout, then
    MyEntertaining_Embedded with In_InitialEventSouceId = MyCalendarEventSourceId. No screen events. */
export default function MyEntertaining() {
  const [params] = useSearchParams();
  const inputs = readMyEntertainingInputs(params);
  return (
    <>
      <CommonUI_InsideLayout id="$b1" />
      <MyEntertaining_Embedded id="$b2" inInitialEventSouceId={inputs.MyCalendarEventSourceId} />
    </>
  );
}
