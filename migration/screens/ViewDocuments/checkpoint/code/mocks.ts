import type { RequestHandler } from 'msw';
import { wireList } from '../../lib/os-wire';
import { contractHandler } from '../../mocks/contract';
import { orbitEventDocuments } from '../../mocks/fictional/orbit';
import type { GetEventDocumentsWire } from './types';

/* DataActionGetEventDocuments was never recorded (no capture, no-capture.json): fictional answers from the shared Orbit
   world (src/mocks/fictional/orbit.ts orbitEventDocuments, ViewDocuments Q1) in the contract's shape.
   Scenarios:
   - real: the documents of In_EventId (event 7301: four PDFs on example.com, the same for every member); any other
     event has none (NoInformation "There are no documents available …").
   - empty (no document), loading (never answers: skeleton), error (HTTP 500): contractHandler. */

const MODULE = 'Connect2_OrbitMobile_MUI';

/** The answer for event `eventId`. */
export function eventDocumentsAnswer(eventId: string): GetEventDocumentsWire {
  return {
    Response: {
      EventDocuments: wireList(
        orbitEventDocuments()
          .filter((d) => d.EventId === eventId)
          .map((d) => ({
            DocumentName: d.DocumentName,
            DocumentURL: d.DocumentURL,
            LastUpdatedBy: d.LastUpdatedBy,
            LastUpdatedOn: d.LastUpdatedOn,
          })),
      ),
    },
  };
}

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_ViewDocuments/DataActionGetEventDocuments', ({ In_EventId }) =>
    eventDocumentsAnswer(In_EventId ?? ''),
  ),
];
