import type { ReactNode } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { NoteListActionsContainer } from '@/containers/NoteListActions';
import { ItemCard_ActionBar } from '@/components/note/ItemCardActions';
import { NotesSheet } from '@/components/note/NotesSheet';
import { NoteCategory2 } from '@/lib/ubtConnect/staticEntities';
import { useFlagOn } from '@/platform/flags/flags';
import { getPreloadObject, setPreloadObject, useOsNavigate, useViewState } from '@/platform/navigation';
import { getNameAndSurname_ByFullName } from '@/lib/ubtConnect/actions';
import { AssembleDetailView } from './components/AssembleDetailView';
import { AssembleEventDetail } from './components/AssembleEventDetail';
import { FocusScrollAnchorOnBack } from './components/FocusScrollAnchorOnBack';
import { CURRENT_ITEM_POSITION } from './hooks/assembleDetailState';
import { useAssembleDetail } from './hooks/useAssembleDetail';
import { useAssembleNotes } from './hooks/useAssembleNotes';
import type { AssembleEventContactEvents } from './hooks/useAssembleEventContact';
import type { AttendeeSubdivisionEvents, AttendeeSubdivisionFlags } from './hooks/useAttendeeSubdivision';
import { readAssembleDetailInputs, type AssembleDetailInputs } from './inputs';

/** Type_ShareObject.Household, Connect_Entity.Member, ApplicationEvents_Directory.EmailHousehold
    (static-entities-tst.json, UBTConnect). */
const SHARE_OBJECT_HOUSEHOLD = 'Household';
const CONNECT_ENTITY_MEMBER = 'Member';
const AUDIT_EMAIL_HOUSEHOLD = 'f3fa3922-32a5-4eeb-bfb6-939a4e8697bd';

/** The instance id of ScreenBlock_AssembleDetail. */
const BLOCK_ID = '$b2';
const SCOPE = 'b2';

/** The handlers of the screen for the events of ScreenBlock_AssembleDetail. */
type AssembleDetailScreenEvents = AssembleEventContactEvents & AttendeeSubdivisionEvents;

/** @origin UBTConnect.Legacy_AssembleFlow.AssembleDetail
    Inputs EventId, SeriesId, Start (DateTime) and AssembleEventTypeTile. CommonUI_InsideLayout, then
    ScreenBlock_AssembleDetail (AssembleDetailView, flows in useAssembleDetail) with BottomBarMenu in its BottomBar, and
    a household ShareSheet whose IsShareOpen is never set to True (only Handler_CloseShareSheet writes it). The block
    restarts when EventId, SeriesId or Start changes. The flags are read here. Handlers of the block events:
    - NavigateTo_Household → HouseholdDetails(HouseholdId);
    - NavigateTo_HouseholdCarousel: GetHasCarouselEnabled (flag C2EnableCarousel) and a preloaded id list (AssignFromObject)
      with the household → SetPreloadObject(CarouselHouseholdItem of every id) and
      HouseholdCarousel(In_StartingHouseholdId); otherwise HouseholdDetails;
    - NavigateTo_EmailContact: GetNameAndSurname_ByFullName(name) → ContactByEmailMember(In_EntityId, In_EntityType
      Member, In_ContactName, In_ContactLocality, In_AuditEventId EmailHousehold, In_ContactCountry, In_EmailTo,
      In_ContactSurname, In_AvatarURL);
    - NavigateTo_ShareObject: external → ShareEntity_ByURL (never raised: the shared ItemOptionsMenu has no
      OnShareToOthers), else LegacyShareObject(In_ShareObjectTypeId, In_ObjectId);
    - EventNotFound → IsEventNotFound True (never raised by AssembleEventDetail). */
export default function AssembleDetail() {
  const [params] = useSearchParams();
  const inputs = readAssembleDetailInputs(params);
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');
  const flags: AttendeeSubdivisionFlags = {
    hasBookmarkNote: useFlagOn('mobileDirectoryBookmarkNote'),
    hasExtendedShare: useFlagOn('C2ExtendedShare'),
  };
  const [isShareOpen, setIsShareOpen] = useViewState('IsShareOpen', false);
  const [shareableObjectId] = useViewState('ShareableObjectId', '');
  // GetAssembleNotes (fetched at start) and IsAddNote, with the note handlers of the screen (route-actions gap 8).
  const notes = useAssembleNotes({ inputs, isShareOpen, shareableObjectId });
  /* The MeetingNotes placeholder of ScreenBlock_AssembleDetail (AssembleDetail.mvc.js:312-412): NoteListActions in
     preview with the notes of the meeting, then ItemCard_ActionBar with Add note (ActionBarOptions: ShowAddNote,
     IsAddNoteEnabled). Show all and Add note open the notes sheet (OpenNoteSheet). */
  const meetingNotes = (
    <>
      <NoteListActionsContainer
        id="$b6"
        inShowPreviewOnly
        notes={notes.notes}
        inItemId={inputs.EventId}
        inNoteCategoryId={NoteCategory2.AssembleEvent}
        onOnShowAllNotesRequested={notes.openNoteSheet}
        onOnSaveEditNote={notes.onNotesChanged}
        onOnNoteDeleted={notes.onNoteDeleted}
      />
      <ItemCard_ActionBar
        id="$b7"
        actionBarOptions={{ showUnbookmark: false, showAddNote: true, showShare: false }}
        onEventAddNote={notes.openNoteSheet}
      />
    </>
  );

  const navigateToHousehold = (householdId: string) => {
    navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
  };

  return (
    <>
      <CommonUiLayout id="$b1" />
      <AssembleDetailBlock
        key={`${inputs.EventId}-${inputs.SeriesId}-${inputs.Start}`}
        inputs={inputs}
        flags={flags}
        meetingNotes={meetingNotes}
        events={{
          onNavigateToHousehold: navigateToHousehold,
          onNavigateToHouseholdCarousel: (_itemPosition, selectedHouseholdId) => {
            const preload = getPreloadObject();
            const ids = Array.isArray(preload) ? preload.map(String) : null;
            if (hasCarouselEnabled && ids !== null && ids.includes(selectedHouseholdId)) {
              setPreloadObject({ CarouselHouseholdItem: ids.map((id) => ({ Household: id })) });
              navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: selectedHouseholdId });
              return;
            }
            navigateToHousehold(selectedHouseholdId);
          },
          onEmailContact: (a) => {
            const split = getNameAndSurname_ByFullName(a.contactName);
            navigate('/UBTConnect/ContactByEmailMember', {
              In_EntityId: a.memberId,
              In_EntityType: CONNECT_ENTITY_MEMBER,
              In_ContactName: split.Out_Name,
              In_ContactLocality: a.contactLocality,
              In_AuditEventId: AUDIT_EMAIL_HOUSEHOLD,
              In_ContactCountry: a.contactCountry,
              In_EmailTo: a.emailTo,
              In_ContactSurname: split.Out_Surname,
              In_AvatarURL: a.avatarURL,
            });
          },
          onNavigateToShareObject: (shareObjectTypeId, objectId, isExternalSharing) => {
            if (isExternalSharing) return; // ShareEntity_ByURL: never raised (see above).
            navigate('/UBTConnect/LegacyShareObject', {
              In_ShareObjectTypeId: shareObjectTypeId,
              In_ObjectId: objectId,
            });
          },
        }}
      />
      <ShareSheetContainer
        id="$b4"
        inShareObjectTypeId={SHARE_OBJECT_HOUSEHOLD}
        inIsOpen={isShareOpen}
        inShareableObjectId={shareableObjectId}
        onEventClosedShareSheet={() => {
          setIsShareOpen(false);
        }}
      />
      <NotesSheet
        id="$b5"
        inIsOpen={notes.isAddNote}
        inNotes={notes.notes}
        inItemId={inputs.EventId}
        inNoteCategoryId={NoteCategory2.AssembleEvent}
        onOnNotesChanged={notes.onNotesChanged}
        onOnNoteDeleted={notes.onNoteDeleted}
        onOnNoteSheetClosed={notes.onNoteSheetClosed}
      />
    </>
  );
}

/** ScreenBlock_AssembleDetail: its flows (useAssembleDetail) and its view, with AssembleEventDetail (SeriesId, EventId,
    Start), FocusScrollAnchorOnBack (ListIndex = CurrentItemPosition, ScrollAnchorId = PreloadedFromListIndex) and the
    BottomBar. */
function AssembleDetailBlock({
  inputs,
  flags,
  meetingNotes,
  events,
}: {
  inputs: AssembleDetailInputs;
  flags: AttendeeSubdivisionFlags;
  meetingNotes: ReactNode;
  events: AssembleDetailScreenEvents;
}) {
  const { state, onUpdateTitle } = useAssembleDetail(BLOCK_ID, inputs.AssembleEventTypeTile);
  return (
    <AssembleDetailView
      id={BLOCK_ID}
      title={state.title}
      eventDetail={
        <AssembleEventDetail
          id={`${SCOPE}-$b4`}
          inputs={{ SeriesId: inputs.SeriesId, EventId: inputs.EventId, Start: inputs.Start }}
          flags={flags}
          meetingNotes={meetingNotes}
          onUpdateTitle={onUpdateTitle}
          {...events}
        />
      }
      focusScrollAnchor={
        <FocusScrollAnchorOnBack
          id={`${SCOPE}-$b5`}
          listIndex={CURRENT_ITEM_POSITION}
          scrollAnchorId={String(state.preloadedFromListIndex)}
        />
      }
      bottomBar={<BottomBar id="$b3" />}
    />
  );
}
