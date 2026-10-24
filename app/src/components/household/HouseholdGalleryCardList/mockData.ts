import type { UI_SubdivisionHousehold } from '@/lib/ubtConnect/structures';
import {
  LOCALITY_HOUSEHOLDS,
  childrenText,
  householdName,
  householdsOfSupperMeeting,
  type CastHousehold,
} from '@/mocks/fictional/directory';

/** A gallery card row of a cast household (src/mocks/fictional/directory.ts). */
export const subdivisionHousehold = (h: CastHousehold): Required<UI_SubdivisionHousehold> => ({
  HouseholdId: h.id,
  HouseholdName: householdName(h),
  ChildrenNames: childrenText(h.children),
});

/** Fictional households of a supper meeting (person data, P-MOCKS): the households of supper meeting 1210 "Zapiola
    (Main Meeting Room)" of the directory cast, then the other households of the locality when `count` is larger. Used
    by the stories. */
export function sampleSubdivisionHouseholds(count: number): Required<UI_SubdivisionHousehold>[] {
  const first = householdsOfSupperMeeting('1210');
  return [...first, ...LOCALITY_HOUSEHOLDS.filter((h) => !first.includes(h))].slice(0, count).map(subdivisionHousehold);
}
