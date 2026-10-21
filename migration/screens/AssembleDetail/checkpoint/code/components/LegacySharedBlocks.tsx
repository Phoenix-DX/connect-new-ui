// @os-block Connect2_LegacyShared.Utility.ShowMoreShowLessContainer
// @os-block Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton
// @os-block Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Tag
// @os-block Connect2_LegacyShared.Share.ContextMenu
// @os-block Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { InputCounter } from '../../../shared/Connect2_LegacyShared/InputCounter';
import { ItemOptionsMenu } from '../../../shared/Connect2_LegacyShared/ItemOptionsMenu';
import { ActionConfirmationDialog } from '../../../shell/dialogs';
import { useViewState, useWasRestoredFromCache } from '../../../shell/navigation';

/* Connect2_LegacyShared blocks only AssembleDetail renders (catalog "own"). Sources (readable copies):
   migration/screens/AssembleDetail/sources/Connect2_LegacyShared.<Folder>.<Block>.mvc.js, cited as <Block>:<line>. */

const scopeOf = (id: string) => id.replace(/\$/g, '');

export interface ShowMoreShowLessContainerProps {
  id: string;
  /** SectionHeaderId: element scrolled back to on "Show less". */
  sectionHeaderId?: string;
  /** MaximumNumberOfLines (default 3 in this route's only instance). */
  maximumNumberOfLines?: number;
  /** ContentLineHeight (default "1.5em", ShowMoreShowLessContainer:62-72). */
  contentLineHeight?: string;
  placeholderContent?: ReactNode;
  showMoreLabel?: ReactNode;
  showLessLabel?: ReactNode;
}

/** Utility.ShowMoreShowLessContainer (view :263-446, controller :490-880, JS :1117-1202): Root `show-more-container` >
    DIV_Content (`position-relative`: Placeholder_Content `show-more-body margin-bottom-base font-size-s` and the
    `show-more-cutoff` fade) and DIV_Actions (`font-size-s`: ShowMore `show-more-expand` / ShowLess `show-more-collapse`,
    right-aligned links). OnReady: InitiateShowMoreShowLess writes `--overflow-max-lines` / `--content-line-height` on
    Root, marks it `show-more-overflowing` when the body overflows (now and on resize); restored from cache with
    Local_IsShowMore it toggles `show-more-expanded` again. ShowMoreLessOnClick(IsShowLess): show less → Local_IsShowMore
    False and ScrollToTopContainer (`.content` back to the section header when scrolled past it); show more → True; then
    toggles `show-more-expanded`. OnDestroy removes the resize listener. */
export function ShowMoreShowLessContainer({
  id,
  sectionHeaderId = '',
  maximumNumberOfLines = 3,
  contentLineHeight = '1.5em',
  placeholderContent,
  showMoreLabel,
  showLessLabel,
}: ShowMoreShowLessContainerProps) {
  const scope = scopeOf(id);
  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const fromCache = useWasRestoredFromCache();
  const [isShowMore, setIsShowMore] = useViewState(`${scope}-Local_IsShowMore`, false);

  useEffect(() => {
    const root = rootRef.current;
    const body = bodyRef.current;
    if (!root || !body) return;
    root.setAttribute(
      'style',
      `--overflow-max-lines: ${String(maximumNumberOfLines)}; --content-line-height: ${contentLineHeight}`,
    );
    const timer = window.setTimeout(() => {
      if (body.scrollHeight > body.offsetHeight) root.classList.add('show-more-overflowing');
    }, 0);
    const listener = () => {
      if (body.scrollHeight > body.offsetHeight) root.classList.add('show-more-overflowing');
      else root.classList.remove('show-more-overflowing');
    };
    window.addEventListener('resize', listener);
    if (fromCache && isShowMore) root.classList.toggle('show-more-expanded');
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', listener);
    };
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showMoreLessOnClick = (isShowLess: boolean) => {
    const root = rootRef.current;
    if (isShowLess) {
      setIsShowMore(false);
      if (root?.classList.contains('show-more-expanded')) {
        const sectionHeader = document.getElementById(sectionHeaderId);
        const scrollable = document.querySelector('.content');
        if (scrollable && sectionHeader && scrollable.scrollTop > sectionHeader.offsetTop)
          scrollable.scrollTo({ top: sectionHeader.offsetTop, left: 0, behavior: 'smooth' });
      }
    } else {
      setIsShowMore(true);
    }
    root?.classList.toggle('show-more-expanded');
  };

  return (
    <OSBlock name="Utility.ShowMoreShowLessContainer" id={id}>
      <div className="show-more-container" data-container="" id={`${scope}-Root`} ref={rootRef}>
        <div className="position-relative" data-container="" id={`${scope}-DIV_Content`}>
          <div
            className="show-more-body margin-bottom-base font-size-s"
            id={`${scope}-Placeholder_Content`}
            ref={bodyRef}
          >
            {placeholderContent}
          </div>
          <div className="show-more-cutoff" data-container="" />
        </div>
        <div className="font-size-s" data-container="" id={`${scope}-DIV_Actions`}>
          <div className="show-more-expand" data-container="" id={`${scope}-ShowMore`} style={{ textAlign: 'right' }}>
            <a
              data-link=""
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showMoreLessOnClick(false);
              }}
            >
              <div id={`${scope}-ShowMoreLabel`}>{showMoreLabel}</div>
            </a>
          </div>
          <div className="show-more-collapse" data-container="" id={`${scope}-ShowLess`} style={{ textAlign: 'right' }}>
            <a
              data-link=""
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showMoreLessOnClick(true);
              }}
            >
              <div id={`${scope}-ShowLessLabel`}>{showLessLabel}</div>
            </a>
          </div>
        </div>
      </div>
    </OSBlock>
  );
}

export interface NC_Result_Item__Image__SkeletonProps {
  id: string;
  inIsRoundImage?: boolean;
  inImageHeight?: number;
  inResultItemVisualWidth?: number;
  customClass?: string;
  inBorderRadius?: number;
  inIsReverseImageAndContent?: boolean;
}

/** NewConnect_Skeleton.NC_Result_Item__Image__Skeleton (view :340-470; defaults :40-120: heights 40, radius 0):
    Result_Item `display-flex align-items-center gap-base` (+ `flex-direction-row-reverse `, CustomClass) > an OSInline
    column `min-width: <width>px` with the `skeleton-item` image (round: `border-radius-circle`, square sides; else the
    radius) and a `skeleton-item … flex1 border-radius-soft` bar of the image height. */
export function NC_Result_Item__Image__Skeleton({
  id,
  inIsRoundImage = false,
  inImageHeight = 40,
  inResultItemVisualWidth = 40,
  customClass = '',
  inBorderRadius = 0,
  inIsReverseImageAndContent = false,
}: NC_Result_Item__Image__SkeletonProps) {
  const scope = scopeOf(id);
  const h = `${String(inImageHeight)}px`;
  return (
    <OSBlock name="NewConnect_Skeleton.NC_Result_Item__Image__Skeleton" id={id}>
      <div
        className={
          'display-flex align-items-center gap-base ' +
          (inIsReverseImageAndContent ? 'flex-direction-row-reverse ' : '') +
          customClass
        }
        data-container=""
        id={`${scope}-Result_Item`}
      >
        <div className="OSInline" data-container="" style={{ minWidth: `${String(inResultItemVisualWidth)}px` }}>
          <div
            className={'skeleton-item ' + (inIsRoundImage ? 'border-radius-circle' : '')}
            data-container=""
            style={
              inIsRoundImage ? { height: h, width: h } : { height: h, borderRadius: `${String(inBorderRadius)}px` }
            }
          />
        </div>
        <div
          className="skeleton-item display-flex align-items-center justify-content-space-between flex1 border-radius-soft"
          data-container=""
          style={{ height: h }}
        />
      </div>
    </OSBlock>
  );
}

/** NewConnect_Utilities.NC_Result_Item__Tag (view :140-161): the Label placeholder as a small neutral tag. */
export function NC_Result_Item__Tag({ id, label }: { id: string; label?: ReactNode }) {
  const scope = scopeOf(id);
  return (
    <OSBlock name="NewConnect_Utilities.NC_Result_Item__Tag" id={id}>
      <div
        className="font-size-xs text-neutral-9 background-neutral-2 padding-xs border-radius-soft width-fit-content OSInline"
        id={`${scope}-Label`}
      >
        {label}
      </div>
    </OSBlock>
  );
}

export interface ContextMenuProps {
  id: string;
  isBookmarked?: boolean;
  isRecordAvailable?: boolean;
  showGift?: boolean;
  anchorPlaceHolder?: ReactNode;
  onBookmarkButtonClicked?: (isItemBookmarked: boolean) => void;
  onShareProfileToConnect?: () => void;
}

/** Share.ContextMenu (view :250-386): ItemOptionsMenu (IsShareImplemented True) with the block's inputs and the
    AnchorPlaceHolder placeholder. BookmarkToggle → BookmarkButtonClicked, OnShareToConnect → ShareProfileToConnect;
    OnShareToOthers → ShareProfileToOthers and OnSendGift are not raised by the shared ItemOptionsMenu (its props). */
export function ContextMenu({
  id,
  isBookmarked = false,
  isRecordAvailable = true,
  showGift = false,
  anchorPlaceHolder,
  onBookmarkButtonClicked,
  onShareProfileToConnect,
}: ContextMenuProps) {
  const scope = scopeOf(id);
  return (
    <OSBlock name="Share.ContextMenu" id={id}>
      <ItemOptionsMenu
        id={`${scope}-$b1`}
        isShareImplemented
        inIsBookmarked={isBookmarked}
        showGift={showGift}
        inIsRecordAvailable={isRecordAvailable}
        onBookmarkToggle={onBookmarkButtonClicked}
        onShareToConnect={onShareProfileToConnect}
        anchorPlaceholder={<div id={`${scope}-AnchorPlaceHolder`}>{anchorPlaceHolder}</div>}
      />
    </OSBlock>
  );
}

export interface BookmarkNoteAddEditProps {
  /** Instance id (`<scope>-Bookmark_Note`): the id ConfirmAction looks up. */
  id: string;
  /** Event Save_Note(BookmarkNote): the note text. */
  onSaveNote: (note: string) => void;
}

/** MyBookmarks.BookmarkNoteAddEdit (Connect2_LegacyShared; view :200-452, controller after it), rendered without
    inputs here: `bookmark-note-action-dialog backwards-compatibility` > ActionConfirmationDialog with "Add note" /
    "Edit note" (In_Note), TextArea_Note (max 50, 3 lines, "Give a Description") with InputCounter, "SAVE" (Confirmed →
    SaveNote: Save_Note(BookmarkNote), then Note "" and BookmarkId 0) and "CANCEL" (DiscardNote: Note ""). The text
    area's OnFocus JS (Enter-key handling) is not ported (spec, Unclear points). */
export function BookmarkNoteAddEdit({ id, onSaveNote }: BookmarkNoteAddEditProps) {
  const scope = scopeOf(id);
  const [note, setNote] = useState('');
  const [inNote] = useState('');
  return (
    <OSBlock name="MyBookmarks.BookmarkNoteAddEdit" id={id}>
      <div className="bookmark-note-action-dialog backwards-compatibility" data-container="">
        <ActionConfirmationDialog
          widgetId={`${scope}-$b1`}
          scope={`${scope}-b1`}
          header={<span data-expression="">{(inNote === '' ? 'Add ' : 'Edit ') + 'note'}</span>}
          body={
            <div data-container="">
              <textarea
                className="form-control OSFillParent"
                id={`${scope}-TextArea_Note`}
                maxLength={50}
                placeholder="Give a Description"
                rows={3}
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
              <InputCounter id={`${scope}-$b2`} inputId={`${scope}-TextArea_Note`} noteInitialLength={note.length} />
            </div>
          }
          confirmLabel="SAVE"
          dismissLabel={
            <div
              data-container=""
              onClick={() => {
                setNote('');
              }}
            >
              CANCEL
            </div>
          }
          onConfirmed={() => {
            onSaveNote(note);
            setNote('');
          }}
        />
      </div>
    </OSBlock>
  );
}
