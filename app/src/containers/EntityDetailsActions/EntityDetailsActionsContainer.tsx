/** @origin UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions */
// @os-block UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSPopupWidget } from '@/components/ui/os/OSPopup';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { ActionsMenu } from '@/components/ui/ActionsMenu';
import { Skeleton } from '@/components/ui/Skeleton';
import { ContactByMessage } from '@/components/contact/ContactByMessage';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { NotesSheet } from '@/components/note/NotesSheet';
import { ShareableObject } from '@/components/share/ShareableObject';
import { SharePopup } from '@/components/share/SharePopup';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { CONTACT_POPUP_DATA_DEFAULT } from './entityDetailsActionsState';
import type { EntityDetailsActionsContainerProps } from './types';
import { useEntityDetailsActions } from './useEntityDetailsActions';

/** Entity actions (UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js, HouseholdCarousel copy):
    SkeletonSection (loading while not isLoaded or bookmarks / notes not synched, unless the fetch failed) with the
    ActionsMenu, then ContactByMessage_Wrapper, ContactPopup_ByPhone, SharePopup, the extended-share popup (ShareSheet,
    only with C2ExtendedShare and HasShare) and NotesSheet. README lists what is not ported. */
export function EntityDetailsActionsContainer(props: EntityDetailsActionsContainerProps) {
  const { id } = props;
  const {
    isEnabled,
    entityType,
    entityId,
    onViewDetailsOnClick,
    navigate,
    options,
    localEnableOptions,
    showIconLabels,
    shareType,
    noteCategoryId,
    isLoaded,
    isLoading,
    isBookmarked,
    isBookmarked_C2,
    hasNewBookmarks,
    hasExtendedShare,
    details,
    contact,
    overrideImageURL,
    shareSheetImageURL,
    notes,
    setNotes,
    showEmailPopUp,
    showCallPopUp,
    setShowCallPopUp,
    showSharePopup,
    setShowSharePopup,
    showNotesSheet,
    setShowNotesSheet,
    popupData,
    handleMail,
    handleMailPage,
    onClickBookmark,
    handlerAddNotes,
  } = useEntityDetailsActions(props);

  return (
    <OSBlock name="Directory_CommonBlocks.Directory_EntityDetailsActions" id={id}>
      <Skeleton isLoading={isLoading}>
        <ActionsMenu
          isEnabled={isEnabled}
          inShowLabels={showIconLabels}
          inActionsEnableOptions={localEnableOptions}
          inActionsMenuOptions={{
            // view mvc.js:379-384: Local_isBookmarked unless GetHasNewBookmarks, then Local_isBookmarked_C2
            HasBookmark: (options.HasBookmark ?? false) && (!hasNewBookmarks ? !isBookmarked : !isBookmarked_C2),
            HasUnbookmark: (options.HasBookmark ?? false) && (!hasNewBookmarks ? isBookmarked : isBookmarked_C2),
            HasNotes: options.HasNotes ?? false,
            HasGift: options.HasGift ?? false,
            HasShare: options.HasShare ?? false,
            HasCall: options.HasCall ?? false,
            HasEmail: options.HasEmail ?? false,
            HasViewDetails: options.HasViewDetails ?? false,
          }}
          onEventClickBookmark={onClickBookmark}
          onEventClickUnbookmark={onClickBookmark}
          onEventClickShare={() => {
            setShowSharePopup(true);
          }}
          onEventClickViewDetails={onViewDetailsOnClick}
          onEventClickCall={() => {
            setShowCallPopUp(true);
          }}
          onEventClickNotes={() => {
            handlerAddNotes().catch(raiseToFlowHandler);
          }}
          onEventClickEmail={() => {
            handleMail(true);
          }}
        />
      </Skeleton>
      <ContactByMessage
        inContactPopupData={{
          Email: details?.Email ?? '',
          Phone: details?.MobilePhone ?? '',
          ContactPopupData: popupData(showEmailPopUp),
        }}
        onEventCancel={() => {
          handleMail(false);
        }}
        onEventEmail={handleMailPage}
      />
      <ContactPopupByPhone
        inCallPopupData={{
          ContactPopupData: { ...popupData(showCallPopUp), TitleTerminator: contact.TitleTerminator ?? '' },
          Phone: details?.Phone ?? '',
          MobilePhone: details?.MobilePhone ?? '',
          HomePhone: details?.HomePhone ?? '',
          WorkPhone: details?.WorkPhone ?? '',
        }}
        onEventCancel={() => {
          setShowCallPopUp(false);
        }}
      />
      <SharePopup
        inContactPopupData={{
          ...CONTACT_POPUP_DATA_DEFAULT,
          ImageURL: overrideImageURL,
          EntityTypeId: entityType,
          EntityId: entityId,
          ActionName: 'Share',
          Name: contact.Name ?? '',
          Locality: '',
          TimezoneName: '',
          TimezoneOffset: 0,
          ShowPopup: showSharePopup && !hasExtendedShare,
          IsLoading: !isLoaded,
          ShowTimezone: false,
        }}
        onEventShareToConnect={() => {
          setShowSharePopup(false);
          navigate('/UBTConnect/LegacyShareObject', { In_ShareObjectTypeId: shareType, In_ObjectId: entityId });
        }}
        onEventShareToOthers={() => {
          // Handle_Share_Others: closes, then UBTConnect_Utils ShareEntity_ByURL (not ported, README).
          setShowSharePopup(false);
        }}
        onEventCancel={() => {
          setShowSharePopup(false);
        }}
      />
      {hasExtendedShare &&
        (options.HasShare ?? false) &&
        createPortal(
          <div className="portal-class" style={{ display: 'inline' }}>
            <div>
              <div className="popup-backdrop" data-popup-backdrop="">
                <div
                  aria-modal="true"
                  className="popup-dialog popup-dialog connect-share-portal"
                  data-popup=""
                  role="dialog"
                >
                  <div className="popup-content">
                    <ShareSheetContainer
                      inIsOpen={showSharePopup}
                      inShareObjectTypeId={shareType}
                      inShareableObjectId={entityId}
                      onEventClosedShareSheet={() => {
                        setShowSharePopup(false);
                      }}
                    >
                      <ShareableObject
                        inShareableObject={{
                          ConnectEntityTypeId: entityType,
                          Id: entityId,
                          SignedURL: shareSheetImageURL,
                          Title: details?.EntityName ?? '',
                          Subtitle: details?.EntitySubtitle ?? '',
                          Location: `${details?.LocalityName ?? ''}, ${details?.CountryName ?? ''}`,
                        }}
                      />
                    </ShareSheetContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
      {/* The share Popup widget (ShowPopup True, mvc.js:827-831): aria-hidden on #reactContainer and the
          popup-disable-scroll html class while it is in the view. */}
      {hasExtendedShare && (options.HasShare ?? false) && <OSPopupWidget showPopup />}
      <NotesSheet
        inNotes={notes}
        inItemId={entityId}
        inNoteCategoryId={noteCategoryId}
        inIsOpen={showNotesSheet}
        onOnNotesChanged={(newNotes) => {
          setNotes(newNotes);
        }}
        onOnNoteDeleted={(noteId) => {
          setNotes((n) => {
            const list = (n.Note_Item_List ?? []).filter((item) => item.Id !== noteId);
            return { ...n, Note_Item_List: list, Total: list.length };
          });
        }}
        onOnNoteSheetClosed={() => {
          setShowNotesSheet(false);
        }}
      />
    </OSBlock>
  );
}
