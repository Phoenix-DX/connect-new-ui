import { useQuery } from '@tanstack/react-query';
import { callAction } from '../../lib/api';
import { osList } from '../../lib/os-wire';
import type { LookupItem } from '../../shared/UBTConnectLibrary/lib/structures';
import { Type_OneschoolGlobal_Subsection } from './components/staticEntities';
import type {
  OneSchoolGlobalDetails,
  OneSchoolGlobalDetailsInputs,
  OneSchoolGlobalDetailCard,
  OneSchoolGlobalDetailsVariables,
} from './types';

const ACTION = 'OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails';
type GetDetailsOutput = Awaited<ReturnType<typeof callAction<'UBTConnect', typeof ACTION>>>;
type DetailCardWire = GetDetailsOutput['Out_OneSchoolGlobal']['OneSchoolGlobal_DetailCard'];

/** In_OneSchoolGlobalId (Long Integer) from the query string; OutSystems default 0 when absent (mvc.js model :47-49). */
export function readOneSchoolGlobalDetailsInputs(params: URLSearchParams): OneSchoolGlobalDetailsInputs {
  const id = params.get('In_OneSchoolGlobalId');
  return { In_OneSchoolGlobalId: id === null || id === '' ? '0' : id };
}

const toCard = (w: DetailCardWire): OneSchoolGlobalDetailCard => ({
  communityBusinessId: w.CommunityBusinessId,
  signedURL: w.SignedURL,
  name: w.UI_OneSchool_Card_Content.Name,
  address: w.OneSchoolGlobal__DetailCard_Content.Address,
  areasServed: w.OneSchoolGlobal__DetailCard_Content.AreasServed,
  businessLinks: osList(w.OneSchoolGlobal__DetailCard_Content.BusinesLinks).map((l) => ({
    text: l.Text,
    link: l.Link,
    id: l.ID,
  })),
});

const lookupItemWire = (i: LookupItem) => ({
  Singular: i.Singular ?? '',
  Plural: i.Plural ?? '',
  Icon: i.Icon ?? '',
  Icon_Color: i.Icon_Color ?? '',
});

/** DataActionGetOneSchoolGlobalDetails of the screen (controller getOneSchoolGlobalDetails$DataActRefresh,
    OneSchoolGlobalDetails.mvc.js:1194-1217): refresh-only (dataFetchDependenciesOriginal -1, :1183-1185), started by
    ScreenEvent_OnReady (:1318-1323) once it has set LookupSections and the skeleton card. OutSystems sends the screen
    variables with the call (fixture 01-5a0e2715 inputs); they are read at fetch time (`variables`). `enabled` is the
    OnReady decision: no fetch when the view is restored from the cache with its data (:1300). */
export function useGetOneSchoolGlobalDetails(
  inputs: OneSchoolGlobalDetailsInputs,
  variables: () => OneSchoolGlobalDetailsVariables,
  enabled: boolean,
) {
  return useQuery({
    queryKey: ['OneSchoolGlobalDetails', ACTION, inputs],
    queryFn: async (): Promise<OneSchoolGlobalDetails> => {
      const v = variables();
      const out = await callAction('UBTConnect', ACTION, {
        LookupSections: {
          Actions: lookupItemWire(v.lookupSections.Actions),
          Households: lookupItemWire(v.lookupSections.Households),
          OneSchoolStatistitics: lookupItemWire(v.lookupSections.OneSchoolStatistitics),
        },
        Selected_OneschoolGlobal_SubsectionId: v.selected_OneschoolGlobal_SubsectionId,
        Type_OneschoolGlobal_SubsectionId: {
          UpcomingEvents: Type_OneschoolGlobal_Subsection.UpcomingEvents,
          AboutOurCampus: Type_OneschoolGlobal_Subsection.AboutOurCampus,
        },
        LocalIsBookmarked: v.localIsBookmarked,
        In_OneSchoolGlobalId: v.in_OneSchoolGlobalId,
      });
      return {
        card: toCard(out.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard),
        householdCoordinates: out.HouseholdCoordinates,
      };
    },
    enabled,
    gcTime: 0,
    staleTime: Infinity,
    retry: false,
  });
}
