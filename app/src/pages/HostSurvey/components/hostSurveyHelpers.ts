import type { HostSurveyHelper, HostSurveyHelperMember } from '@/api/event';
import type { LocalHelperStatus } from '@/platform/storage/localEntities';

/* Pure parts of the helper blocks of the host survey: HostSurvey_HelperItem (HI), HostSurvey_AddHelper (AH) and the
   helper summary of ScreenBlock_HostSurvey (HS). Lines: the raw TST files of build-B2. */

/** Static entity HelperStatus of Connect2_OrbitMobile_MUI (migration/knowledge/static-entities-tst.json). */
const HelperStatus = { removed: 1, denied: 2, approved: 3, pending: 4 } as const;

/** The status pill of a helper (HI view $b2, HS view #102): approved → green and orbit-icon-circle-check; pending →
    orange and orbit-icon-circle-warning; any other status → orange and orbit-icon-warning. */
export function helperStatusPill(statusId: number): { extendedStyle: string; iconClass: string } {
  if (statusId === HelperStatus.approved) {
    return {
      extendedStyle: 'background-color: var(--orbit-green-2); color: var(--orbit-green-6);\n',
      iconClass: 'orbit-icon-circle-check',
    };
  }
  return {
    extendedStyle: 'background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);\n',
    iconClass: statusId === HelperStatus.pending ? 'orbit-icon-circle-warning' : 'orbit-icon-warning',
  };
}

/** OnFocus_Inputs(InputId), JavaScript node ScrollIntoViewJS (HI, AH): the element scrolls smoothly to the centre. The
    original throws on an unknown id; here an unknown id does nothing. */
export function scrollInputIntoView(inputId: string): void {
  document.getElementById(inputId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/** A HostSurvey_HelperItemInfo record at its defaults. */
export const EMPTY_HELPER: HostSurveyHelper = {
  Id: '0',
  MemberId: '0',
  FirstName: '',
  LastName: '',
  LocalityName: '',
  CountryName: '',
  HelperRole: '',
  HelperStatus: '',
  IsEdit: false,
};

/** The name of a member pill of the search field (AH view #12): FirstName (+ " " when a LastName follows), then
    LastName. */
export const memberPillName = (h: HostSurveyHelper): string =>
  (h.FirstName !== '' ? h.FirstName + (h.LastName !== '' ? ' ' : '') : '') + h.LastName;

/** OnAfterFetch_GetSurveyHelpers (AH controller): the found members that are already in Helpers.Helpers get
    IsSelected True; a new search replaces SurveyHelpersData, a further page is appended to it. */
export function mergeFoundHelpers(
  surveyHelpersData: readonly HostSurveyHelperMember[],
  found: readonly HostSurveyHelperMember[],
  helpers: readonly HostSurveyHelper[],
  isNewSearch: boolean,
): HostSurveyHelperMember[] {
  const page = found.map((m) => (helpers.some((h) => h.MemberId === m.MemberId) ? { ...m, IsSelected: true } : m));
  return isNewSearch ? page : [...surveyHelpersData, ...page];
}

/** OnClick_AddHelpers (AH controller): the selected members that are not yet in Helpers.Helpers, as
    HostSurvey_HelperItemInfo (MemberId, FirstName, LastName, LocalityName, CountryName), appended to it. Returns
    undefined when no member is selected (the action then does nothing). */
export function addSelectedHelpers(
  helpers: readonly HostSurveyHelper[],
  surveyHelpersData: readonly HostSurveyHelperMember[],
): HostSurveyHelper[] | undefined {
  const selected = surveyHelpersData.filter((m) => m.IsSelected);
  if (selected.length === 0) return undefined;
  const toAdd = selected
    .filter((m) => !helpers.some((h) => h.MemberId === m.MemberId))
    .map((m): HostSurveyHelper => ({
      ...EMPTY_HELPER,
      MemberId: m.MemberId,
      FirstName: m.FirstName,
      LastName: m.LastName,
      LocalityName: m.LocalityName,
      CountryName: m.CountryName,
    }));
  return [...helpers, ...toAdd];
}

/** The save part of OnHandle_Save (AH controller): every helper gets the role, the JSON_Name of the first Pending
    status of In_HelperStatus ("" when there is none) and IsEdit False. */
export function helpersToSave(
  helpers: readonly HostSurveyHelper[],
  role: string,
  helperStatus: readonly LocalHelperStatus[],
): HostSurveyHelper[] {
  const pending = helperStatus.find((s) => s.Id === HelperStatus.pending)?.JSON_Name ?? '';
  return helpers.map((h) => ({ ...h, HelperRole: role, HelperStatus: pending, IsEdit: false }));
}
