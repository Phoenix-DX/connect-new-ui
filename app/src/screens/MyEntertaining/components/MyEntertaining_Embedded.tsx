// @os-block UBTConnect.Calendar.MyEntertaining_Embedded
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CommonUI_InsideLayout } from '../../../shared/UBTConnect/CommonUI_InsideLayout';
import { Layout_DetailPage } from '../../../shared/UBTConnectLibrary/Layout_DetailPage';
import { openInApp_OpenExternalLink } from '../../../shared/UBTConnect_Utils/lib/actions';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { useClientVar } from '@/platform/session/session';
import { Embedded_MyEntertaining } from './Embedded_MyEntertaining';
import { Type_MyCalendarEventSource } from './staticEntities';

export interface MyEntertaining_EmbeddedProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Input In_InitialEventSouceId (Text, default ""). */
  inInitialEventSouceId?: string;
}

/** OnInitialize (MyEntertaining_Embedded.mvc.js:284-305): PreloadedSource from the initial event source. */
function preloadedSourceOf(eventSourceId: string): string {
  if (eventSourceId === Type_MyCalendarEventSource.Orbit) return 'orbit';
  if (eventSourceId === Type_MyCalendarEventSource.LDM) return 'ldm';
  if (eventSourceId === Type_MyCalendarEventSource.Assemble) return 'assemble';
  if (eventSourceId === Type_MyCalendarEventSource.UserCreated) return 'personal';
  return '';
}

/** UBTConnect.Calendar.MyEntertaining_Embedded (view :147-244, controller :252-420): Layout_DetailPage (primary,
    title "My Entertaining") holding the calendar embed with the client variable Embedd_B2CTenant and the preloaded source;
    Handle_Error shows the embed error as an info message, Handle_OpenMap opens Google Maps outside the app. */
export function MyEntertaining_Embedded({ id, inInitialEventSouceId = '' }: MyEntertaining_EmbeddedProps) {
  const prefix = id?.replace('$', '') ?? 'b2';
  const [preloadedSource] = useState(() => preloadedSourceOf(inInitialEventSouceId));
  const b2CTenant = useClientVar('UBTConnect.Embedd_B2CTenant');

  return (
    <OSBlock name="Calendar.MyEntertaining_Embedded" id={id}>
      <Layout_DetailPage
        id={`${prefix}-$b1`}
        inIsPrimaryColor
        placeholderHeaderTitle="My Entertaining"
        content={
          <Embedded_MyEntertaining
            id={`${prefix}-$b2`}
            b2CTenant={b2CTenant}
            sources={preloadedSource}
            onOnError={(message) => {
              // Handle_Error (:390-400): FeedbackMessage_AutoClose("", Message, Info, True, "", 0, False).
              feedbackMessageAutoClose({
                title: '',
                message,
                messageType: 'info',
                encodedHtml: true,
                extendedClass: '',
                delayMs: 0,
                useDebounce: false,
              });
            }}
            onOnOpenMap={(lat, lng) => {
              // Handle_OpenMap (:350-360): OpenInApp_OpenExternalLink(maps search URL, InNewTab True).
              openInApp_OpenExternalLink(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, true);
            }}
          />
        }
        placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id={`${prefix}-$b3`} />}
      />
    </OSBlock>
  );
}
