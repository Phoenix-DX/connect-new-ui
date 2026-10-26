import { useLocation } from 'react-router';
import { FeedbackMessageHost, useNetworkStatusEvents } from '@/platform/feedback';
import { useCommonUiBackHandler } from './commonUiBack';
import { useIsCommonUiAbsent, useIsCommonUiMounted } from './commonUiPresence';
import { DialogAccessRestrictedAction } from './DialogAccessRestrictedAction';

/* Part C of the app shell, mounted once in AppFrame:
   - app wide: the feedback message container (runtime) and the online/offline callbacks registered by
     UBTConnect OnApplicationReady (UC:15284-15316);
   - per screen: the CommonUI_InsideLayout parts of part C, Dialog_AccessRestrictedAction and the back handler, remounted
     on every navigation as each screen mounts its own CommonUI. They stand in for the CommonUI block until the layouts
     (foundation queue) render it in their `Placeholder_CommonUI_Inside_Layout` (HF dom:1100-1176). None on a screen
     whose layout has no CommonUI (CR-Splash-3: Splash dom/default.html has neither part). */
export function CommonUiHost() {
  const { key } = useLocation();
  const screenHasCommonUi = useIsCommonUiMounted();
  const screenHasNoCommonUi = useIsCommonUiAbsent();
  useNetworkStatusEvents();
  return (
    <>
      <FeedbackMessageHost />
      {!screenHasCommonUi && !screenHasNoCommonUi && <CommonUiScreenParts key={key} />}
    </>
  );
}

function CommonUiScreenParts() {
  useCommonUiBackHandler();
  return <DialogAccessRestrictedAction />;
}
