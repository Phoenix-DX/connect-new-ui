import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CommunicationException } from '@/legacy/os/os-exceptions';
import * as feedback from '@/platform/feedback';
import {
  getLocalBookmarkByObjectId,
  localBookmarksSchemas,
  memoryDatabase,
  setLocalBookmarksDatabase,
  synchBookmarksC2,
} from '@/platform/storage/localEntities';
import { setSignedInUser } from '@/platform/session/session';
import { getClientVar } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import {
  directory_Updates_GetCarouselPreloadedHouseholds,
  getBookmarkCategoryId_ByEntityTypeId,
  getBookmarkType_FromEntity,
  getNameAndSurname_ByFullName,
  getShareType_FromEntity,
  set_InitialClientVariables,
  toggleBookmarkItem_C2,
  get_LookupSection,
  getDescriptor_Subdivision_GenderSplit,
  getSkeletonList_UI_HouseholdMembers,
  getSkeletonList_UI_SubdivisionHousehold,
  isStringEquals,
} from './actions';
import { Type_CarouselItemSwipeAction } from './staticEntities';
import {
  directory_BrowseByCountry_TooltipBuilder,
  getLocalityLabel,
  getSkeletonList_UI_LocalityStatistics,
} from './actions';

describe('set_InitialClientVariables', () => {
  it('sets PhotobookCarousel_SelectedSpeed to Photobook_Speed.EightSeconds (8000)', () => {
    freshPage();
    expect(getClientVar('UBTConnect.PhotobookCarousel_SelectedSpeed')).toBe(0);
    set_InitialClientVariables();
    expect(getClientVar('UBTConnect.PhotobookCarousel_SelectedSpeed')).toBe(8000);
  });
});

describe('directory_Updates_GetCarouselPreloadedHouseholds (UC:1828-1925)', () => {
  it('keeps the order; unread items get UpdatesCarousel_SetIsRead with their parameters as JSON, read ones nothing', () => {
    const out = directory_Updates_GetCarouselPreloadedHouseholds([
      { HouseholdId: '11', IsRead: false, Updates_CarouselSwipeCallbackParameters: { UpdateItemId: '501' } },
      { HouseholdId: '12', IsRead: true, Updates_CarouselSwipeCallbackParameters: { UpdateItemId: '502' } },
      { HouseholdId: '13', IsRead: false, Updates_CarouselSwipeCallbackParameters: { UpdateItemId: '0' } },
    ]);
    expect(out.CarouselHouseholdItem).toEqual([
      {
        Household: '11',
        SwipeAction: {
          ActionId: Type_CarouselItemSwipeAction.UpdatesCarousel_SetIsRead,
          Parameters: '{"UpdateItemId":501}',
        },
      },
      { Household: '12', SwipeAction: { ActionId: '', Parameters: '' } },
      // JSON Serialize leaves out an attribute at its default value (0)
      {
        Household: '13',
        SwipeAction: { ActionId: Type_CarouselItemSwipeAction.UpdatesCarousel_SetIsRead, Parameters: '{}' },
      },
    ]);
  });

  it('returns an empty list for no items', () => {
    expect(directory_Updates_GetCarouselPreloadedHouseholds([])).toEqual({ CarouselHouseholdItem: [] });
  });
});

describe('bookmarks (CR-W4A-1)', () => {
  const server = (success: boolean, fail?: Error) => ({
    addBookmark2: vi.fn(() =>
      fail
        ? Promise.reject(fail)
        : Promise.resolve({ Success: success, Bookmark_Added: { Id: '900', DateCreatedUtc: '2026-10-15T09:00:00' } }),
    ),
    deleteBookmarkByBookmarkId2: vi.fn(() => (fail ? Promise.reject(fail) : Promise.resolve({ Success: success }))),
  });
  beforeEach(() => {
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    setSignedInUser('990001');
    return () => {
      setLocalBookmarksDatabase(null);
      setSignedInUser(null);
      vi.restoreAllMocks();
    };
  });

  it('GetBookmarkCategoryId_ByEntityTypeId and GetBookmarkType_FromEntity map the entity types', () => {
    expect(getBookmarkCategoryId_ByEntityTypeId('Supper Meetings')).toBe('Supper Meeting');
    expect(getBookmarkCategoryId_ByEntityTypeId('OneSchool Global')).toBe('OneSchoolGlobal');
    expect(() => getBookmarkCategoryId_ByEntityTypeId('Member')).toThrow('Bookmarks not available');
    expect(getBookmarkType_FromEntity('Household')).toEqual({ BookmarkType: 'Contact', BookmarkGroup: 'Contacts' });
    expect(getBookmarkType_FromEntity('Interchange')).toEqual({ BookmarkType: 'Locality', BookmarkGroup: 'Locations' });
    expect(() => getBookmarkType_FromEntity('Feed Item')).toThrow('Bookmarks not available');
  });

  it('ToggleBookmarkItem_C2 adds: AddBookmark2 with the item as text, local row, success message', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage');
    const s = server(true);
    await toggleBookmarkItem_C2('42', 'Household', false, s);
    expect(s.addBookmark2).toHaveBeenCalledWith('Household', '42');
    expect(await getLocalBookmarkByObjectId('42')).toMatchObject({
      BookmarkId: '900',
      BookmarkCategoryId: 'Household',
    });
    expect(show).toHaveBeenCalledWith('Added to your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);
  });

  it('ToggleBookmarkItem_C2 removes by the local BookmarkId; failures show the error message', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage');
    await synchBookmarksC2([
      {
        Id: '1',
        UserId: 990001,
        BookmarkId: '420',
        BookmarkCategoryId: 'Household',
        ItemId: '42',
        CreatedAtDateUtc: '1900-01-01T00:00:00',
      },
    ]);
    await toggleBookmarkItem_C2('42', 'Household', true, server(false));
    expect((await getLocalBookmarkByObjectId('42')).Id).toBe('1');
    expect(show).toHaveBeenLastCalledWith(
      'Bookmark could not be removed. Please try again later.',
      feedback.PLATFORM_MESSAGE_TYPE.error,
    );
    const s = server(true);
    await toggleBookmarkItem_C2('42', 'Household', true, s);
    expect(s.deleteBookmarkByBookmarkId2).toHaveBeenCalledWith('420');
    expect((await getLocalBookmarkByObjectId('42')).Id).toBe('0');
    expect(show).toHaveBeenLastCalledWith('Removed from your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);
    await expect(
      toggleBookmarkItem_C2('43', 'Household', false, server(true, new CommunicationException('x'))),
    ).resolves.toEqual({
      Out_LocalBookmarkId: '0',
      Out_CreatedBookmarkId: '0',
    });
    expect(show).toHaveBeenLastCalledWith(
      'Bookmark could not be added. Please try again later.',
      feedback.PLATFORM_MESSAGE_TYPE.error,
    );
  });
});

describe('GetShareType_FromEntity (UC:11102-11223, BR-UBTCON-244)', () => {
  it('maps each entity type; a Household stays Household whatever In_IsMyHousehold is', () => {
    expect(getShareType_FromEntity('Locality')).toBe('Locality');
    expect(getShareType_FromEntity('Interchange')).toBe('Locality');
    expect(getShareType_FromEntity('Household', false)).toBe('Household');
    expect(getShareType_FromEntity('Household', true)).toBe('Household');
    expect(getShareType_FromEntity('Supper Meetings')).toBe('Supper Meeting');
    expect(getShareType_FromEntity('OneSchool Global')).toBe('OneSchool Global');
    expect(getShareType_FromEntity('Feed Item', true)).toBe('Feed');
  });

  it('In_IsMyHousehold gives My Household only after no entity case matched; Member always raises', () => {
    expect(getShareType_FromEntity('Country', true)).toBe('My Household');
    expect(getShareType_FromEntity('', true)).toBe('My Household');
    expect(() => getShareType_FromEntity('Country', false)).toThrow('Share not available');
    expect(() => getShareType_FromEntity('Member', false)).toThrow('Share not available');
    expect(() => getShareType_FromEntity('Member', true)).toThrow('Share not available');
  });
});

describe('GetNameAndSurname_ByFullName (JSUtils_String_Split)', () => {
  it('splits on spaces: surname = last part, name = the earlier parts each after a space', () => {
    expect(getNameAndSurname_ByFullName('Ana Maria Lopez')).toEqual({ Out_Name: ' Ana Maria', Out_Surname: 'Lopez' });
  });
});

/* ---- Wave 4C ---- */
describe('Get_LookupSection', () => {
  it('labels Actions and Households (lower case on request) and the OneSchool statistics item', () => {
    const lookup = get_LookupSection(false);
    expect(lookup.Actions).toEqual({ Singular: 'Action', Plural: 'Actions' });
    expect(lookup.Households.Plural).toBe('Households');
    expect(get_LookupSection(true).Households.Plural).toBe('households');
    expect(lookup.OneSchoolStatistitics).toEqual({
      Singular: 'Show student numbers',
      Plural: 'Show student numbers',
      Icon: 'connect-icon-school',
    });
  });
});

describe('GetDescriptor_Subdivision_GenderSplit', () => {
  it('joins the brothers and sisters counts with the lookup plurals', () => {
    expect(getDescriptor_Subdivision_GenderSplit(24, 15)).toBe('24 Brothers & 15 Sisters');
  });
});

describe('skeleton lists', () => {
  it('build ListLength placeholder rows, none for 0', () => {
    expect(getSkeletonList_UI_SubdivisionHousehold(4)).toHaveLength(4);
    expect(getSkeletonList_UI_SubdivisionHousehold(0)).toEqual([]);
    expect(getSkeletonList_UI_HouseholdMembers(5)[0]).toEqual({
      FirstName: 'Example',
      LastName: 'Example',
      Initials: 'MM',
      HasNavigation: true,
    });
  });
});

describe('IsStringEquals', () => {
  it('compares trimmed strings, ignoring case unless In_IsCaseSensitive', () => {
    expect(isStringEquals(' Supper ', 'supper', false)).toBe(true);
    expect(isStringEquals('Supper', 'supper', true)).toBe(false);
  });
});

describe('directory map screens actions', () => {
  it('GetLocalityLabel: "<locality>, <country>"', () => {
    expect(getLocalityLabel('Town', 'Country')).toBe('Town, Country');
  });

  it('GetSkeletonList_UI_LocalityStatistics: ListLength (default 4) skeleton rows, none for 0 or less', () => {
    expect(getSkeletonList_UI_LocalityStatistics()).toHaveLength(4);
    expect(getSkeletonList_UI_LocalityStatistics(0)).toEqual([]);
    expect(getSkeletonList_UI_LocalityStatistics(-1)).toEqual([]);
    const [row] = getSkeletonList_UI_LocalityStatistics(1);
    expect(row?.LocalityId).toBeUndefined();
    expect(row?.Statistics?.Title).toBe('Adelaide');
    expect(row?.Statistics?.Statistics?.map((s) => s.Value)).toEqual(['83', '15868', '4652', '7934', '7934']);
  });

  it('Directory_BrowseByCountry_TooltipBuilder: a link with ExtraData; a click calls LinkOnClickAction(Id)', () => {
    const onClick = vi.fn();
    const el = directory_BrowseByCountry_TooltipBuilder({ Marker: { Id: '42', ExtraData: 'Town' } }, onClick);
    const link = el.querySelector('a');
    expect(el.outerHTML).toBe('<div><a href="#">Town</a></div>');
    const click = new MouseEvent('click', { bubbles: true, cancelable: true });
    link?.dispatchEvent(click);
    expect(click.defaultPrevented).toBe(true);
    expect(onClick).toHaveBeenCalledWith('42');
    expect(directory_BrowseByCountry_TooltipBuilder({ Marker: { Id: '1' } }, onClick).textContent).toBe('');
  });
});
