import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';

/* Fictional answers of Connect2_OrbitMobile_MUI server actions. The one behind CheckDirectoryAccess (CR-MilestoneDetail-1;
   never captured: no member click in the captures). The Orbit captures were recorded with a full-permission account
   (src/mocks/fictional/orbit.ts), and the mock user has the same: every directory record is enabled, so a member card
   opens the household (RecordDisabled False). Id and Type are echoed as DirectoryAccessRec carries them. */
/** Page sizes of the event booklet (GetBookletGuestsMaxRows / GetBookletHelpersMaxRows, CR-EventBooklet-1; never
    recorded: EventBooklet has no capture). Fictional server settings sized to the booklet fixture
    (src/mocks/fictional/orbit.ts orbitEventBooklets) so that both lists page: more guests than one page of 10, more
    helpers than one page of 5. */
export const BOOKLET_MAX_ROWS = { guests: 10, helpers: 5 };

export const handlers: RequestHandler[] = [
  contractHandler('Connect2_OrbitMobile_MUI', 'ActionGetDirectoryAccess', ({ Id, Type }) => ({
    Response: { Id, Type, RecordDisabled: false },
  })),
  contractHandler('Connect2_OrbitMobile_MUI', 'ActionGetBookletGuestsMaxRows', () => ({
    BookletGuestsMaxRows: BOOKLET_MAX_ROWS.guests,
  })),
  contractHandler('Connect2_OrbitMobile_MUI', 'ActionGetBookletHelpersMaxRows', () => ({
    BookletHelpersMaxRows: BOOKLET_MAX_ROWS.helpers,
  })),
];
