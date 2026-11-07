import type { RequestHandler } from 'msw';
import type { callAction } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { SCHOOLS } from '@/mocks/fictional/directory';
import { fixtureData } from '@/mocks/fixtures';
import { scenario } from '@/mocks/scenario';

const ACTION = 'OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails';
/** The path of the recording (2026-10-14, before TST moved the data action into OneSchoolGlobalDetails_Block). */
const RECORDED_ACTION = 'OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails';
type GetDetailsOutput = Awaited<ReturnType<typeof callAction<'UBTConnect', typeof ACTION>>>;

/** Fictional schools of the OneSchool Global carousel (OneSchoolGlobalCarousel mock preload, I10-4 (a)): the
    directory cast's two schools and two more. Names keep the captured word lengths (9 + 4 to 11 letters). */
export const CAROUSEL_SCHOOLS: readonly { id: string; name: string }[] = [
  ...SCHOOLS,
  { id: '1432', name: 'OneSchool Tandil' },
  { id: '1433', name: 'OneSchool Punta Alta' },
];

/* DataActionGetOneSchoolGlobalDetails: the one recorded call (fixture
   UBTConnect/DataActionGetOneSchoolGlobalDetails/01-5a0e2715.json), served for every In_OneSchoolGlobalId: its id was
   anonymised (4281) and differs from the captured route id (1430) (Q2, recommendation A, pending the orchestrator's
   answer). The recording lost the signed photo URL (SignedURL ""), while TST showed a photo
   (dom/default.html:62, data-masked-src="user-image"): per the person-image rule (Q-W2C-1, user 2026-10-14,
   migration/knowledge/mock-fixtures.md) the mock answers the neutral landscape placeholder shipped with the app.
   Without a URL UBT_LazyImage would ask GetSignedImagesInBulk, a call TST did not make. Scenarios (error, loading,
   empty) through contractHandler. The recorded Name ("Oneschool 0322", an anonymised placeholder) is overridden with
   the fictional name of the asked school: school 1430 is "OneSchool Alem" as on the Locality_Details card (same word
   lengths 9 4; decision B, 2026-10-16), the carousel schools have their own names, and an unknown id keeps the name
   of school 1430. The fixture file stays as recorded.
   Moved from pages/OneSchoolGlobalDetails/mocks.ts with the block (item 10, OneSchoolGlobalCarousel). */
const DEFAULT_NAME = SCHOOLS.find((s) => s.id === '1430')?.name ?? '';
const PLACEHOLDER_LANDSCAPE = `${import.meta.env.BASE_URL}mock-images/placeholder-landscape.svg`;

const schoolName = (id: string): string => CAROUSEL_SCHOOLS.find((s) => s.id === id)?.name ?? DEFAULT_NAME;

/** School 132: the route id of the capture of OneSchoolGlobalDetails since 2026-11-07 (school 1430 answers empty data
    on TST; route_discovery from Locality_Details 252 gives 132). Fictional values of the captured lengths
    (migration/screens/OneSchoolGlobalDetails/analysis/dom/default.html): name 9 5 6, areas served 5 7 10, address
    7 9 3 6, one business link with the captured text "OneSchool Argentina" (calls.md: Phone and Email empty, a photo
    URL). The link URL stays the recorded one. School 1430 keeps its data for the other routes. */
const CAPTURED_SCHOOL_132 = {
  id: '132',
  name: 'OneSchool Monte Grande',
  areasServed: 'Monte Hermoso Villalonga',
  address: 'Avenida Sarmiento 412 Centro',
  linkText: 'OneSchool Argentina',
} as const;

/** The answer of school 132 (CAPTURED_SCHOOL_132) built on the recording. */
function school132Answer(data: GetDetailsOutput): GetDetailsOutput {
  const school = data.Out_OneSchoolGlobal;
  const card = school.OneSchoolGlobal_DetailCard;
  const content = card.OneSchoolGlobal__DetailCard_Content;
  return {
    ...data,
    Out_OneSchoolGlobal: {
      ...school,
      OneSchoolGlobal_DetailCard: {
        ...card,
        SignedURL: PLACEHOLDER_LANDSCAPE,
        UI_OneSchool_Card_Content: { ...card.UI_OneSchool_Card_Content, Name: CAPTURED_SCHOOL_132.name },
        OneSchoolGlobal__DetailCard_Content: {
          ...content,
          Address: CAPTURED_SCHOOL_132.address,
          AreasServed: CAPTURED_SCHOOL_132.areasServed,
          BusinesLinks: {
            ...content.BusinesLinks,
            List: content.BusinesLinks.List.map((link) => ({ ...link, Text: CAPTURED_SCHOOL_132.linkText })),
          },
        },
      },
    },
  };
}

/** The `captured` scenario (OneSchoolGlobalCarousel Q3, user 2026-10-29): the answer of the block's data action in
    the carousel capture of 2026-10-29 (migration/screens/OneSchoolGlobalCarousel/analysis/calls.md,
    DataActionGetOneSchoolGlobalDetails): every text empty (no name, areas served, address, photo URL, phone or
    email), no business link and no locality. The slide shows "Sorry, no photo available" and an empty title
    (analysis/dom/default.html). The captured lengths are 0, so the mock keeps them empty. */
function capturedAnswer(data: GetDetailsOutput): GetDetailsOutput {
  const school = data.Out_OneSchoolGlobal;
  const card = school.OneSchoolGlobal_DetailCard;
  return {
    ...data,
    Out_OneSchoolGlobal: {
      ...school,
      OneSchoolGlobal_About: '',
      OneSchoolGlobal_LocalitiesList: { ...school.OneSchoolGlobal_LocalitiesList, List: [] },
      OneSchoolGlobal_DetailCard: {
        ...card,
        CommunityBusinessId: '0',
        SignedURL: '',
        UI_OneSchool_Card_Content: {
          ...card.UI_OneSchool_Card_Content,
          Name: '',
          LocalityName: '',
          CountryName: '',
          CountryCode: '',
          Phone: '',
          Email: '',
        },
        OneSchoolGlobal__DetailCard_Content: {
          ...card.OneSchoolGlobal__DetailCard_Content,
          Address: '',
          AreasServed: '',
          BusinesLinks: { ...card.OneSchoolGlobal__DetailCard_Content.BusinesLinks, List: [] },
        },
      },
    },
    UI_Timezone: { ...data.UI_Timezone, TimezoneName: '' },
  };
}

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', ACTION, (inputs) => {
    const data = fixtureData('UBTConnect', RECORDED_ACTION) as GetDetailsOutput;
    if (scenario() === 'captured') return capturedAnswer(data);
    const card = data.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard;
    const asked = (inputs as Record<string, unknown>).In_OneSchoolGlobalId;
    const id = typeof asked === 'string' || typeof asked === 'number' ? String(asked) : '';
    if (id === CAPTURED_SCHOOL_132.id) return school132Answer(data);
    return {
      ...data,
      Out_OneSchoolGlobal: {
        ...data.Out_OneSchoolGlobal,
        OneSchoolGlobal_DetailCard: {
          ...card,
          SignedURL: PLACEHOLDER_LANDSCAPE,
          UI_OneSchool_Card_Content: { ...card.UI_OneSchool_Card_Content, Name: schoolName(id) },
        },
      },
    };
  }),
];
