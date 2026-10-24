import type { AssembleAttendeeSubdivision } from '@/api/event';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { ShareableObject } from '@/components/share/ShareableObject';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { ScrollAnchor } from '@/platform/navigation/ScrollAnchor';
import { ResultItemBadge } from '@/components/ui/ResultItemBadge';
import { ResultItemMedia } from '@/components/ui/ResultItemMedia';
import { SHARE_OBJECT_HOUSEHOLD, SKELETON_ID } from '@/pages/AssembleDetail/hooks/attendeeSubdivisionState';
import {
  useAttendeeSubdivision,
  type AttendeeSubdivisionEvents,
  type AttendeeSubdivisionFlags,
} from '@/pages/AssembleDetail/hooks/useAttendeeSubdivision';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';
import { BookmarkNoteAddEdit } from './BookmarkNoteAddEdit';
import { ContextMenu } from './ContextMenu';
import { NC_Result_Item__Image__Skeleton } from './NC_Result_Item__Image__Skeleton';
import { NC_Result_Item__Tag } from './NC_Result_Item__Tag';

export interface AssembleEventDetail_AttendeeSubdivisionProps extends AttendeeSubdivisionEvents {
  /** OutSystems instance id of the block. */
  id: string;
  /** AssembleAttendeeSubdivision: the hall. */
  subdivision: AssembleAttendeeSubdivision;
  /** The flags of the block, read by the page. */
  flags: AttendeeSubdivisionFlags;
}

/** DIV_SubdivisionHousehold (`padding-bottom-s padding-left-base`): the hall header (the groups badge, the hall name and
    the angle; a click toggles IsSelected), and when it is selected List_SubdivisionHousehold (`list list-group`): per
    household a `padding-y-base padding-x-s` row with ScrollAnchor and NC_Result_Item__Image (45 px, visual 67 px; the
    name, the location tag and ContextMenu with the ellipsis), or the image skeleton for a skeleton row. Then
    Bookmark_Note (flag mobileDirectoryBookmarkNote), FreeSubscriptionAlert and the household ShareSheet (In_IsLegacy)
    with ShareableObject_Generic. The flows are in useAttendeeSubdivision.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision */
export function AssembleEventDetail_AttendeeSubdivision({
  id,
  subdivision,
  flags,
  ...events
}: AssembleEventDetail_AttendeeSubdivisionProps) {
  const scope = id.replace(/\$/g, '');
  const { state, ...flows } = useAttendeeSubdivision(subdivision, `${scope}-Bookmark_Note`, flags, events);
  const { isSelected } = state;
  return (
    <OSBlock name="Assemble.AssembleEventDetail_AttendeeSubdivision" id={id}>
      <div className="padding-bottom-s padding-left-base" data-container="" id={`${scope}-DIV_SubdivisionHousehold`}>
        <div
          className={
            'list-sticky-records__sticky-record ' + (isSelected ? 'list-sticky-records__sticky-record--active' : '')
          }
          data-container=""
          id={`${scope}-DIV_SubdivisionHousehold_Header`}
          onClick={flows.onToggleSelected}
        >
          <ResultItemMedia
            id={`${scope}-$b1`}
            inIsRoundImage
            showPlaceholderForImage
            imagePlaceholder={
              <ResultItemBadge id={`${scope}-$b2`}>
                <i className="icon connect-icon-groups font-size-h4 text-neutral-6 fa fa-flag fa-1x" data-icon="" />
              </ResultItemBadge>
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
              source={state.rows}
              keyOf={(r, i) => `${r.Id}-${String(i)}`}
            >
              {(r, i) => (
                <div className="padding-y-base padding-x-s" data-container="">
                  {r.Id !== SKELETON_ID ? (
                    <>
                      <ScrollAnchor id={`${scope}-$b3-${String(i)}`} idIn={r.Id} />
                      <ResultItemMedia
                        id={`${scope}-$b4-${String(i)}`}
                        inBucket={r.AvatarURL.Bucket}
                        inImageHeight={45}
                        inType={r.AvatarURL.Type}
                        showPlaceholderForImage={false}
                        inPath={r.AvatarURL.Path}
                        inSignedURL={r.AvatarURL.SignedURL}
                        inResultItemVisualWidth={67}
                        onOnClickItem={() => {
                          flows.onClickHousehold(r, i);
                        }}
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
                                flows.onClickBookmarkButton(r, i, isItemBookmarked);
                              }}
                              onShareProfileToConnect={() => {
                                flows.onClickShareConnect(r);
                              }}
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
      {flags.hasBookmarkNote && <BookmarkNoteAddEdit id={`${scope}-Bookmark_Note`} onSaveNote={flows.onSaveNote} />}
      <DialogAccessRestrictedActionLegacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b9`} />
      <ShareSheetContainer
        id={`${scope}-$b10`}
        inShareableObjectId={state.shareableObjectId}
        inShareObjectTypeId={SHARE_OBJECT_HOUSEHOLD}
        inIsLegacy
        inIsOpen={state.isShareOpen}
        onEventClosedShareSheet={flows.onCloseShareSheet}
      >
        {state.shareableObjectId !== '' && <ShareableObject id={`${scope}-$b11`} inShareableObject={state.shareable} />}
      </ShareSheetContainer>
    </OSBlock>
  );
}
