// @os-block Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList
// @os-block Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList
// @os-block Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { useFlagOn } from '@/platform/flags/flags';
import { osList } from '@/legacy/os/os-wire';
import { toggleBookmarkItem } from '../../../shared/Connect2_Assemble_MUI/lib/actions';
import { MyBookmarks_Group, MyBookmarks_ObjectType } from '../../../shared/Connect2_Assemble_MUI/lib/staticEntities';
import { NC_Result_Item_Badge } from '../../../shared/Connect2_LegacyShared/NC_Result_Item_Badge';
import { NC_Result_Item__Image } from '../../../shared/Connect2_LegacyShared/NC_Result_Item__Image';
import { flipHouseholdName, getCacheableSubdivision_V2 } from '../../../shared/Connect2_LegacyShared/lib/actions';
import type { CacheableSubdivisionInformation } from '../../../shared/Connect2_LegacyShared/lib/structures';
import { ScrollAnchor } from '../../../shared/NavigationHandler/ScrollAnchor';
import { Dialog_AccessRestrictedAction_Legacy } from '../../../shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { ShareSheet } from '../../../shared/UBTConnect_Utils/ShareSheet';
import { ShareableObject_Generic } from '../../../shared/UBTConnect_Utils/ShareableObject_Generic';
import type { UI_ShareableObject_Generic } from '../../../shared/UBTConnect_Utils/lib/structures';
import { confirmAction } from '@/platform/feedback/dialogs/confirmAction';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { getLocalBookmarksByObjectType } from '@/platform/storage/localEntities';
import { setPreloadObject, useWasRestoredFromCache } from '@/platform/navigation';
import type { AssembleAttendeeGuest, AssembleAttendeeSubdivision, LocalityDetails } from '../types';
import { maybeDisplaySubscriptionPopup } from './actions';
import {
  BookmarkNoteAddEdit,
  ContextMenu,
  NC_Result_Item__Image__Skeleton,
  NC_Result_Item__Tag,
} from './LegacySharedBlocks';

/* Attendee blocks of AssembleEventDetail. Sources: migration/screens/AssembleDetail/sources/Connect2_Assemble_MUI
   .Assemble.AssembleEventDetail_<Block>.mvc.js, cited LL (LocalitiesList), LS (LocalitySubdivisionList), AS
   (AttendeeSubdivision). */

const scopeOf = (id: string) => id.replace(/\$/g, '');

/** Type_ShareObject.Household / Connect_Entity2.Household (static-entities-tst.json, Connect2_Assemble_MUI). */
const SHARE_OBJECT_HOUSEHOLD = 'Household';
const CONNECT_ENTITY_HOUSEHOLD = 'Household';

export interface AttendeeNavigation {
  onNavigateToShareObject: (shareObjectTypeId: string, objectId: string, isExternalSharing: boolean) => void;
  onNavigateToHouseholdCarousel: (itemPosition: number, selectedHouseholdId: string) => void;
}

/** Assemble.AssembleEventDetail_LocalitiesList (LL view :210-476): DIV_InvitedLocalities__Header (`margin-bottom-base
    text-neutral-7 font-semi-bold`, Header placeholder), then, when the list is not empty, DIV_InvitedLocalitiesList
    (`margin-top-s`) > DIV_Localities__List > ListLocalities (`list list-group list-sticky-records margin-bottom-s`,
    no virtualization) with one DIV_Locality > LocalitySubdivisionList per locality (IsSelected False). */
export function AssembleEventDetail_LocalitiesList({
  id,
  assembleAttendeeSubdivisionList,
  header,
  ...nav
}: AttendeeNavigation & { id: string; assembleAttendeeSubdivisionList: LocalityDetails[]; header?: ReactNode }) {
  const scope = scopeOf(id);
  return (
    <OSBlock name="Assemble.AssembleEventDetail_LocalitiesList" id={id}>
      <div
        className="margin-bottom-base text-neutral-7 font-semi-bold"
        data-container=""
        id={`${scope}-DIV_InvitedLocalities__Header`}
      >
        <div id={`${scope}-Header`}>{header}</div>
      </div>
      {assembleAttendeeSubdivisionList.length > 0 && (
        <div className="margin-top-s" data-container="" id={`${scope}-DIV_InvitedLocalitiesList`}>
          <div data-container="" id={`${scope}-DIV_Localities__List`}>
            <OSList
              id={`${scope}-ListLocalities`}
              className="list list-group list-sticky-records margin-bottom-s"
              animateItems
              disableVirtualization
              source={assembleAttendeeSubdivisionList}
              keyOf={(l) => l.LocalityId}
            >
              {(l, i) => (
                <div data-container="">
                  <div data-container="" id={`${scope}-DIV_Locality`}>
                    <AssembleEventDetail_LocalitySubdivisionList
                      id={`${scope}-$b1-${String(i)}`}
                      locality={l}
                      {...nav}
                    />
                  </div>
                </div>
              )}
            </OSList>
          </div>
        </div>
      )}
    </OSBlock>
  );
}

/** Assemble.AssembleEventDetail_LocalitySubdivisionList (LS view :233-605, controller :654-830): DIV_Locality_Header
    (`list-sticky-records__sticky-record`, `--active` when selected; click toggles IsSelected) with NC_Result_Item__Image
    (round, placeholder image: map-marker badge; title the locality name; angle up/down action), and when selected
    DIV_LocalitySubdivisions_List > a List (`list list-group list-sticky-records margin-bottom-s`) of
    AttendeeSubdivision. OnReady (not restored from cache): the local copy = the input (collapsed). */
export function AssembleEventDetail_LocalitySubdivisionList({
  id,
  locality,
  ...nav
}: AttendeeNavigation & { id: string; locality: LocalityDetails }) {
  const scope = scopeOf(id);
  const [isSelected, setIsSelected] = useState(false);
  return (
    <OSBlock name="Assemble.AssembleEventDetail_LocalitySubdivisionList" id={id}>
      <div
        className={
          'list-sticky-records__sticky-record ' + (isSelected ? 'list-sticky-records__sticky-record--active' : '')
        }
        data-container=""
        id={`${scope}-DIV_Locality_Header`}
        onClick={() => {
          setIsSelected((v) => !v);
        }}
      >
        <NC_Result_Item__Image
          id={`${scope}-$b1`}
          showPlaceholderForImage
          inIsRoundImage
          imagePlaceholder={
            <NC_Result_Item_Badge id={`${scope}-$b2`}>
              <i className="icon fa-map-marker font-size-h4 text-neutral-6 fa fa-map-marker fa-1x" data-icon="" />
            </NC_Result_Item_Badge>
          }
          titlePlaceholder={
            <span className="font-size-s" data-expression="">
              {locality.LocalityName}
            </span>
          }
          actionPlaceholder={
            <div
              className="list-sticky-records__sticky-record__action"
              data-container=""
              id={`${scope}-DIV_ToggleSubsdivisionList`}
            >
              {isSelected ? (
                <i className="icon fa fa-angle-up fa-2x" data-icon="" />
              ) : (
                <i className="icon fa fa-angle-down fa-2x" data-icon="" />
              )}
            </div>
          }
        />
      </div>
      {isSelected && (
        <div data-container="" id={`${scope}-DIV_LocalitySubdivisions_List`}>
          <OSList
            className="list list-group list-sticky-records margin-bottom-s"
            animateItems
            disableVirtualization
            source={locality.AssembleAttendeeSubdivisionList}
            keyOf={(s) => s.Id}
          >
            {(s, i) => (
              <div data-container="" id={`${scope}-DIV_ListSubdivisions`}>
                <AssembleEventDetail_AttendeeSubdivision id={`${scope}-$b3-${String(i)}`} subdivision={s} {...nav} />
              </div>
            )}
          </OSList>
        </div>
      )}
    </OSBlock>
  );
}

const SKELETON_ID = '0';

/** BuildSkeletonList (AS :2652-2730): HouseholdCount rows with the null id appended to the hall's households. */
function withSkeletonRows(s: AssembleAttendeeSubdivision): AssembleAttendeeGuest[] {
  const rows = [...s.SubdivisionHouseholdList];
  for (let i = 0; i < s.HouseholdCount; i++)
    rows.push({
      Id: SKELETON_ID,
      Name: '',
      FamilyNames: '',
      Location: '',
      IsBookmarked: false,
      IsDisabled: false,
      AvatarURL: { Bucket: '', Path: '', Type: '', SignedURL: '' },
    });
  return rows;
}

/** The households of GetCacheableSubdivision_V2 as the hall's rows (AS :1764-1785): Id, Name, FamilyNames = Family,
    Location, IsBookmarked, AvatarURL = Photo340's Bucket, Path, Type and SignedURL (IsDisabled at its default, False).
    A missing record (undefined) has no households. */
function householdRowsOf(info: CacheableSubdivisionInformation | undefined): AssembleAttendeeGuest[] {
  if (!info) return [];
  return osList(info.HouseholdListResponse).map((h) => ({
    Id: h.Id,
    Name: h.Name,
    FamilyNames: h.Family,
    Location: h.Location,
    IsBookmarked: h.IsBookmarked,
    IsDisabled: false,
    AvatarURL: {
      Bucket: h.Photo340.Bucket,
      Path: h.Photo340.Path,
      Type: h.Photo340.Type,
      SignedURL: h.Photo340.SignedURL,
    },
  }));
}

/** Assemble.AssembleEventDetail_AttendeeSubdivision (AS view :424-1375, controller :1460-2937). DIV_SubdivisionHousehold
    (`padding-bottom-s padding-left-base`): the hall header (groups badge, hall name, angle; click toggles), and when
    selected List_SubdivisionHousehold (`list list-group`): per household a `padding-y-base padding-x-s` row with
    ScrollAnchor + NC_Result_Item__Image (45 px, visual 67 px; name, location tag, ContextMenu with the ellipsis), or
    the image skeleton for a skeleton row. Then Bookmark_Note (flag mobileDirectoryBookmarkNote, GetHasBookmarNote),
    FreeSubscriptionAlert and the household ShareSheet (In_IsLegacy) with ShareableObject_Generic.
    OnReady (AS :1690-1830): not restored → local copy (collapsed), BuildSkeletonList, GetCacheableSubdivision_V2(Id)
    (CR-AssembleDetail-1) → SubdivisionHouseholdList = its HouseholdListResponse, CountryCode = Subdivision.Locality
    .Country.Code, LocalityId = Subdivision.Locality.Id; then, restored or not, Set_SelectedAssembleAttendeeListBookmarks
    (AS :2367-2470): each row's IsBookmarked = a legacy local bookmark of ObjectType Contact has its ObjectId
    (GetLocalBookmarksByObjectType, ListIndexOf). An exception goes to the flow handler. Handlers:
    - household click: MaybeDisplaySubscriptionPopup(CountryCode, LocalityId); no popup → SetPreloadObject(the rows'
      ids) and NavigateTo_HouseholdCarousel(row number, id) (AS :1462-1608);
    - bookmark (IsItemBookmarked from ContextMenu): popup check; the row not bookmarked → ConfirmAction(Bookmark_Note),
      confirmed → Trim(BookmarkNote); then (confirmed or not) ToggleBookmarkItem(row IsBookmarked, Contact, row Id,
      Contacts, BookmarkNote) (CR-AssembleDetail-2), then the row's IsBookmarked = not IsItemBookmarked whatever the
      toggle did (ported 1:1) and BookmarkNote = "" (AS :1901-2080);
    - share to Connect: popup check; C2ExtendedShare → ShareableObjectId / ShareableObject_Generic (household entity,
      FlipHouseholdName title, family names, location, avatar) and IsShareOpen, else NavigateTo_ShareObject(Household,
      id, False) (AS :2095-2277); close sheet → IsShareOpen False, ShareableObjectId "" (AS :2599-2651).
    CountryCode and LocalityId stay "" / "0" until GetCacheableSubdivision_V2 fills them (and when restored). */
export function AssembleEventDetail_AttendeeSubdivision({
  id,
  subdivision,
  onNavigateToShareObject,
  onNavigateToHouseholdCarousel,
}: AttendeeNavigation & { id: string; subdivision: AssembleAttendeeSubdivision }) {
  const scope = scopeOf(id);
  const fromCache = useWasRestoredFromCache();
  const hasBookmarkNote = useFlagOn('mobileDirectoryBookmarkNote');
  const hasExtendedShare = useFlagOn('C2ExtendedShare');
  const [isSelected, setIsSelected] = useState(false);
  // OnReady (not restored from cache): local copy, BuildSkeletonList (the initial rows), then the effect below.
  const [rows, setRows] = useState<AssembleAttendeeGuest[]>(() =>
    fromCache ? subdivision.SubdivisionHouseholdList : withSkeletonRows(subdivision),
  );
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareableObjectId, setShareableObjectId] = useState('');
  const [shareable, setShareable] = useState<UI_ShareableObject_Generic>({});
  const bookmarkNote = useRef('');
  // CountryCode / LocalityId: block variables set from GetCacheableSubdivision_V2.
  const [countryCode, setCountryCode] = useState('');
  const [localityId, setLocalityId] = useState('0');
  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    void (async () => {
      let list = rows;
      if (!fromCache) {
        const info = await getCacheableSubdivision_V2(subdivision.Id);
        list = householdRowsOf(info);
        setRows(list);
        setCountryCode(info?.Subdivision.Locality.Country.Code ?? '');
        setLocalityId(info?.Subdivision.Locality.Id ?? '0');
      }
      // Set_SelectedAssembleAttendeeListBookmarks
      const bookmarks = await getLocalBookmarksByObjectType(MyBookmarks_ObjectType.Contact);
      setRows(list.map((r) => ({ ...r, IsBookmarked: bookmarks.some((b) => b.ObjectId === r.Id) })));
    })().catch(raiseToFlowHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickHousehold = async (row: AssembleAttendeeGuest, index: number) => {
    if (await maybeDisplaySubscriptionPopup(countryCode, localityId)) return;
    setPreloadObject(rows.map((r) => r.Id));
    onNavigateToHouseholdCarousel(index, row.Id);
  };

  const onClickBookmarkButton = async (row: AssembleAttendeeGuest, index: number, isItemBookmarked: boolean) => {
    if (await maybeDisplaySubscriptionPopup(countryCode, localityId)) return;
    if (!row.IsBookmarked && (await confirmAction(`${scope}-Bookmark_Note`)))
      bookmarkNote.current = bookmarkNote.current.trim();
    await toggleBookmarkItem(
      row.IsBookmarked,
      MyBookmarks_ObjectType.Contact,
      row.Id,
      MyBookmarks_Group.Contacts,
      bookmarkNote.current,
    );
    setRows((current) => current.map((r, i) => (i === index ? { ...r, IsBookmarked: !isItemBookmarked } : r)));
    bookmarkNote.current = '';
  };

  const onClickShareConnect = async (row: AssembleAttendeeGuest) => {
    if (await maybeDisplaySubscriptionPopup(countryCode, localityId)) return;
    if (hasExtendedShare) {
      setShareableObjectId(row.Id);
      setShareable({
        ConnectEntityTypeId: CONNECT_ENTITY_HOUSEHOLD,
        Id: row.Id,
        SignedURL: row.AvatarURL.SignedURL,
        Title: flipHouseholdName(row.Name),
        Subtitle: row.FamilyNames,
        Location: row.Location,
      });
      setIsShareOpen(true);
    } else {
      onNavigateToShareObject(SHARE_OBJECT_HOUSEHOLD, row.Id, false);
    }
  };

  return (
    <OSBlock name="Assemble.AssembleEventDetail_AttendeeSubdivision" id={id}>
      <div className="padding-bottom-s padding-left-base" data-container="" id={`${scope}-DIV_SubdivisionHousehold`}>
        <div
          className={
            'list-sticky-records__sticky-record ' + (isSelected ? 'list-sticky-records__sticky-record--active' : '')
          }
          data-container=""
          id={`${scope}-DIV_SubdivisionHousehold_Header`}
          onClick={() => {
            setIsSelected((v) => !v);
          }}
        >
          <NC_Result_Item__Image
            id={`${scope}-$b1`}
            inIsRoundImage
            showPlaceholderForImage
            imagePlaceholder={
              <NC_Result_Item_Badge id={`${scope}-$b2`}>
                <i className="icon connect-icon-groups font-size-h4 text-neutral-6 fa fa-flag fa-1x" data-icon="" />
              </NC_Result_Item_Badge>
            }
            titlePlaceholder={
              <span className="font-size-s" data-expression="">
                {subdivision.Name}
              </span>
            }
            actionPlaceholder={
              <div
                className="list-sticky-records__sticky-record__action"
                data-container=""
                id={`${scope}-DIV_ToggleSubsdivisionList`}
              >
                {isSelected ? (
                  <i className="icon fa fa-angle-up fa-2x" data-icon="" />
                ) : (
                  <i className="icon fa fa-angle-down fa-2x" data-icon="" />
                )}
              </div>
            }
          />
        </div>
        {isSelected && (
          <div data-container="" id={`${scope}-DIV_SubdivisionHousehold_List`}>
            <OSList
              id={`${scope}-List_SubdivisionHousehold`}
              className="list list-group"
              animateItems
              disableVirtualization
              source={rows}
              keyOf={(r, i) => `${r.Id}-${String(i)}`}
            >
              {(r, i) => (
                <div className="padding-y-base padding-x-s" data-container="">
                  {r.Id !== SKELETON_ID ? (
                    <>
                      <ScrollAnchor id={`${scope}-$b3-${String(i)}`} idIn={r.Id} />
                      <NC_Result_Item__Image
                        id={`${scope}-$b4-${String(i)}`}
                        inBucket={r.AvatarURL.Bucket}
                        inImageHeight={45}
                        inType={r.AvatarURL.Type}
                        showPlaceholderForImage={false}
                        inPath={r.AvatarURL.Path}
                        inSignedURL={r.AvatarURL.SignedURL}
                        inResultItemVisualWidth={67}
                        onOnClickItem={() => void onClickHousehold(r, i)}
                        titlePlaceholder={
                          <span className="font-size-s" data-expression="">
                            {r.Name}
                          </span>
                        }
                        descriptionPlaceholder={
                          <NC_Result_Item__Tag
                            id={`${scope}-$b5-${String(i)}`}
                            label={<span data-expression="">{r.Location}</span>}
                          />
                        }
                        actionPlaceholder={
                          <div className="margin-left-base" data-container="">
                            <ContextMenu
                              id={`${scope}-$b6-${String(i)}`}
                              isRecordAvailable={!r.IsDisabled}
                              isBookmarked={r.IsBookmarked}
                              onBookmarkButtonClicked={(isItemBookmarked) => {
                                onClickBookmarkButton(r, i, isItemBookmarked).catch(raiseToFlowHandler);
                              }}
                              onShareProfileToConnect={() => void onClickShareConnect(r)}
                              anchorPlaceHolder={<i className="icon  fa fa-ellipsis-h fa-1x" data-icon="" />}
                            />
                          </div>
                        }
                      />
                    </>
                  ) : (
                    <NC_Result_Item__Image__Skeleton
                      id={`${scope}-$b7-${String(i)}`}
                      inImageHeight={45}
                      inResultItemVisualWidth={67}
                    />
                  )}
                </div>
              )}
            </OSList>
          </div>
        )}
      </div>
      {hasBookmarkNote && (
        <BookmarkNoteAddEdit
          id={`${scope}-Bookmark_Note`}
          onSaveNote={(note) => {
            bookmarkNote.current = note;
          }}
        />
      )}
      <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b9`} />
      <ShareSheet
        id={`${scope}-$b10`}
        inShareableObjectId={shareableObjectId}
        inShareObjectTypeId={SHARE_OBJECT_HOUSEHOLD}
        inIsLegacy
        inIsOpen={isShareOpen}
        onEventClosedShareSheet={() => {
          setIsShareOpen(false);
          setShareableObjectId('');
        }}
      >
        {shareableObjectId !== '' && <ShareableObject_Generic id={`${scope}-$b11`} inShareableObject={shareable} />}
      </ShareSheet>
    </OSBlock>
  );
}
