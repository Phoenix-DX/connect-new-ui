import type { Tag } from '@/shared/UBTConnectLibrary/lib/structures';
import { HouseholdDetailTags } from '@/shared/UBTConnect/lib/staticEntities';
import type {
  HouseholdPreviewStructure,
  UI_Household_Card_Content,
  UI_HouseholdTimelineImages,
  UI_Screen_HouseholdDetails,
} from '@/shared/UBTConnect/lib/structures';
import type { GetHouseholdOutput } from './api';

/* Block-local client actions of HouseholdDetails_Block, ported 1:1 as pure functions (compiled source:
   migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js,
   "mvc.js" below). */

/** Block variables TagsList_Id_About / TagsList_Id_Photos (defaults "About" / "Photos", mvc.js:62-67). */
export const TAGS_LIST_ID_ABOUT = 'About';
export const TAGS_LIST_ID_PHOTOS = 'Photos';

/** The card content of a GetHousehold.Household record (default record when missing). */
export const cardContent = (household: UI_Screen_HouseholdDetails): UI_Household_Card_Content =>
  household.HouseholdCard?.Household_Card_Content ?? {};

/** IsDeceased or IsAncestry (link-disabled-view, navigation guards, HouseholdDataFetched). */
export function isDeceasedOrAncestry(content: UI_Household_Card_Content): boolean {
  return content.DisplayOptions?.IsDeceased === true || content.DisplayOptions?.IsAncestry === true;
}

/** Not hidden, not deceased, not ancestry (photo EntityId mvc.js:384, AddressSection visibility :709, Photos tag :2500). */
export function isShownHousehold(content: UI_Household_Card_Content): boolean {
  const d = content.DisplayOptions ?? {};
  return d.IsHidden !== true && d.IsDeceased !== true && d.IsAncestry !== true;
}

/** ScreenEvent_OnInitialize, TagsList empty (mvc.js:2218-2240): About (selected) then Photos, both Text = Identifier. */
export function initialTagsList(): Tag[] {
  return [
    { Text: TAGS_LIST_ID_ABOUT, Identifier: TAGS_LIST_ID_ABOUT, IsSelected: true },
    { Text: TAGS_LIST_ID_PHOTOS, Identifier: TAGS_LIST_ID_PHOTOS, IsSelected: false },
  ];
}

/** OnChangeTag (mvc.js:2391-2432): Identifier of the first selected tag (HorizontalTagList is mandatory single
    selection, so one is always selected; with none OutSystems would fail on GetItem(-1): '' is returned instead). */
export function selectedTagOf(tags: readonly Tag[]): string {
  return tags.find((t) => t.IsSelected === true)?.Identifier ?? '';
}

/** OnAfterFetch_GetHouseholdDetail loop (mvc.js:2491-2507): the HouseholdDetailTags.Photos tag is enabled only for a
    household that is not deceased, ancestry or hidden. */
export function setPhotosTagEnabled(tags: readonly Tag[], content: UI_Household_Card_Content): Tag[] {
  return tags.map((t) =>
    t.Identifier === HouseholdDetailTags.Photos ? { ...t, Enabled: isShownHousehold(content) } : t,
  );
}

/** Action_HandlePreviewData (mvc.js:2139-2200): with Preview.UsePreview, the address becomes FormattedAddress and the
    member HouseholdMemberId (when listed) takes the preview's age visibility, phones (blank when hidden), email and,
    for a householder, home phone. */
export function handlePreviewData(data: GetHouseholdOutput, preview: HouseholdPreviewStructure): GetHouseholdOutput {
  if (preview.UsePreview !== true) return data;
  const card = data.Household.HouseholdCard ?? {};
  const household: UI_Screen_HouseholdDetails = {
    ...data.Household,
    HouseholdCard: {
      ...card,
      Household_Card_Content: { ...card.Household_Card_Content, Address: preview.FormattedAddress ?? '' },
    },
  };
  const memberId = preview.HouseholdMemberId ?? '0';
  const position = data.Out_HouseholdMembers.findIndex((p) => (p.Id ?? '0') === memberId);
  if (position === -1) return { ...data, Household: household };
  const personal = preview.UI_AccountForm?.AccountForm_PersonalInformation ?? {};
  const contact = preview.UI_AccountForm?.AccountForm_ContactInformation ?? {};
  const members = data.Out_HouseholdMembers.map((member, i) => {
    if (i !== position) return member;
    const updated = {
      ...member,
      DisplayAge: personal.ShowLifeCycleDates ?? false,
      MobilePhone: contact.ShowMobileNumber === true ? (contact.MobileNumber ?? '') : '',
      WorkPhone: contact.ShowWorkNumber === true ? (contact.WorkNumber ?? '') : '',
      Email: personal.Email ?? '',
    };
    return preview.isHouseholder === true ? { ...updated, HomePhone: contact.HomeNumber ?? '' } : updated;
  });
  return { ...data, Household: household, Out_HouseholdMembers: members };
}

/** Handler_TimelinePhotoSelected (mvc.js:2836-2879): IsCurrent = (Date = the selected date) for every image. */
export function selectTimelinePhoto(
  images: readonly UI_HouseholdTimelineImages[],
  date: string,
): UI_HouseholdTimelineImages[] {
  return images.map((image) => ({ ...image, IsCurrent: image.Date === date }));
}
