import { useState } from 'react';
import { Type_MyCalendarEventSource } from '@/pages/MyEntertaining/staticEntities';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { useClientVar } from '@/platform/session/session';
import { openInApp_OpenExternalLink } from '@/lib/ubtConnectUtils/actions';

/** What MyEntertaining_Embedded gives its Embedded_MyEntertaining: two inputs and two event handlers. */
export interface MyEntertainingFlow {
  /** PreloadedSource: the Sources input. */
  sources: string;
  /** The client variable UBTConnect.Embedd_B2CTenant: the B2CTenant input. */
  b2CTenant: string;
  /** Handle_Error (event OnError). */
  onError: (message: string) => void;
  /** Handle_OpenMap (event OnOpenMap; the label is not used). */
  onOpenMap: (lat: string, lng: string) => void;
}

/** OnInitialize: PreloadedSource of the initial event source ("orbit", "ldm", "assemble", "personal"), "" for any
    other value. */
export function preloadedSourceOf(eventSourceId: string): string {
  if (eventSourceId === Type_MyCalendarEventSource.Orbit) return 'orbit';
  if (eventSourceId === Type_MyCalendarEventSource.LDM) return 'ldm';
  if (eventSourceId === Type_MyCalendarEventSource.Assemble) return 'assemble';
  if (eventSourceId === Type_MyCalendarEventSource.UserCreated) return 'personal';
  return '';
}

/** Handle_Error: FeedbackMessage_AutoClose("", Message, Info, True, "", 0, False). */
function handleError(message: string): void {
  feedbackMessageAutoClose({
    title: '',
    message,
    messageType: 'info',
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  });
}

/** Handle_OpenMap: OpenInApp_OpenExternalLink(the Google Maps search URL of Lat and Lng, InNewTab True). */
function handleOpenMap(lat: string, lng: string): void {
  openInApp_OpenExternalLink(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, true);
}

/** @origin UBTConnect.Calendar.MyEntertaining_Embedded
    The flows of MyEntertaining_Embedded that use the platform. OnInitialize sets PreloadedSource once from
    In_InitialEventSouceId (a later change of the input does not change it). The client variable is read on render, as
    the block reads it. The handlers show the error of the calendar as an info message, and open the map outside the
    app. The block has no call of its own. */
export function useMyEntertaining(initialEventSourceId: string): MyEntertainingFlow {
  const [sources] = useState(() => preloadedSourceOf(initialEventSourceId));
  const b2CTenant = useClientVar('UBTConnect.Embedd_B2CTenant');
  return { sources, b2CTenant, onError: handleError, onOpenMap: handleOpenMap };
}
