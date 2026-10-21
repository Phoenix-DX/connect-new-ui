import type { RequestHandler } from 'msw';
import type { callAction } from '../../lib/api';
import { contractHandler } from '../../mocks/contract';
import { SCHOOLS } from '../../mocks/fictional/directory';
import { fixtureData } from '../../mocks/fixtures';

const ACTION = 'OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails';
type GetDetailsOutput = Awaited<ReturnType<typeof callAction<'UBTConnect', typeof ACTION>>>;

/* DataActionGetOneSchoolGlobalDetails: the one recorded call (fixture
   UBTConnect/DataActionGetOneSchoolGlobalDetails/01-5a0e2715.json), served for every In_OneSchoolGlobalId: its id was
   anonymised (4281) and differs from the captured route id (1430) (Q2, recommendation A, pending the orchestrator's
   answer). The recording lost the signed photo URL (SignedURL ""), while TST showed a photo
   (dom/default.html:62, data-masked-src="user-image"): per the person-image rule (Q-W2C-1, user 2026-10-14,
   migration/knowledge/mock-fixtures.md) the mock answers the neutral landscape placeholder shipped with the app.
   Without a URL UBT_LazyImage would ask GetSignedImagesInBulk, a call TST did not make. Scenarios (error, loading,
   empty) through contractHandler. The recorded Name ("Oneschool 0322", an anonymised placeholder) is overridden with
   the directory cast's name of school 1430 as on the Locality_Details card, "OneSchool Alem" (same word lengths 9 4;
   decision B, 2026-10-16); the fixture file stays as recorded. */
const SCHOOL_NAME = SCHOOLS.find((s) => s.id === '1430')?.name ?? '';
const PLACEHOLDER_LANDSCAPE = `${import.meta.env.BASE_URL}mock-images/placeholder-landscape.svg`;

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', ACTION, () => {
    const data = fixtureData('UBTConnect', ACTION) as GetDetailsOutput;
    const card = data.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard;
    return {
      ...data,
      Out_OneSchoolGlobal: {
        ...data.Out_OneSchoolGlobal,
        OneSchoolGlobal_DetailCard: {
          ...card,
          SignedURL: PLACEHOLDER_LANDSCAPE,
          UI_OneSchool_Card_Content: { ...card.UI_OneSchool_Card_Content, Name: SCHOOL_NAME },
        },
      },
    };
  }),
];
