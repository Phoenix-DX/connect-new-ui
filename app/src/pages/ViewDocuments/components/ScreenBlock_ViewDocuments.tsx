// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments
import { useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { log } from '@/platform/log/log';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { ContactHelpdeskFooter } from '@/components/orbit/ContactHelpdeskFooter';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { addExtensionToFile } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import {
  useHandleDownload,
  type FileDownloadResult,
  type FileTransferError,
} from '@/shared/FileTransferPlugin/lib/handleDownload';
import { openInApp_TryOpenFileInApp } from '@/shared/UBTConnect_Utils/lib/actions';
import { isUserException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getEventDocuments } from '@/pages/ViewDocuments/api';
import type { EventDocumentItem, EventDocumentsVariablesWire } from '@/pages/ViewDocuments/types';
import { getContactHelpdeskSubject_Event } from './actions';
import { LoadingSpinner } from './LoadingSpinner';

/* ScreenBlock_ViewDocuments (SB = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.
   ScreenBlock_ViewDocuments.mvc.js: model :1-173, view :174-633, controller :634-1232). No capture. */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (SB :275). */
const MENU_ACTION_AUTO = 'Auto';
/** FileExtension.PDF (static entity Connect2_OrbitMobile_MUI.fileExtension), as ScreenBlock_AccommodationHost. */
const FILE_EXTENSION_PDF = 'pdf';

const NO_DOCUMENTS =
  'There are no documents available for this event at the moment. For any enquiries please contact the event organiser.';

/** Block variables (SB model :30-90) and the data action state the view reads. */
interface Model {
  eventDocuments: EventDocumentItem[];
  isFetchingData: boolean;
  isLoadingDocument: boolean;
  /** GetEventDocuments.IsDataFetched and GetEventDocuments.Response.EventDocuments is not empty (SB :309, :468). */
  isDataFetched: boolean;
  hasResponseDocuments: boolean;
}

const INITIAL_MODEL: Model = {
  eventDocuments: [],
  isFetchingData: false,
  isLoadingDocument: false,
  isDataFetched: false,
  hasResponseDocuments: false,
};

export interface ScreenBlock_ViewDocumentsProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  In_MemberId: string;
  In_EventId: string;
  In_EventName: string;
  In_EventStartDate: string;
  In_EventEndDate: string;
  In_EventLocation: string;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event ContactHelpdesk(Subject, EventName). */
  onContactHelpdesk: (subject: string, eventName: string) => void;
}

/** Documents of an event (SB view :242-626): Layout_Orbit "orbit-detail orbit-header-center", Auto MenuIcon, title
    In_EventName. Content: the ViewDocument skeleton while fetching; with documents the hint row (file icon, "Tap the
    link/s below …"), the List_EventDocuments rows (PDF icon, underlined name: unviewed color-orbit-primary-7, viewed
    text-neutral-7; " margin-bottom-m" but on the last row) and the LoadingSpinner (IsLoadingDocument) in
    "backwards-compatibility"; without documents, once fetched, NoInformation. BottomBar: ContactHelpdesk_Footer with
    documents. CommonUI_Elements: FileTransfer HandleDownload (no markup) and the placeholder. OnReady (SB :903-952):
    unless restored from the view cache, IsFetchingData True, RefreshDocumentData, IsFetchingData False. */
export function ScreenBlock_ViewDocuments(props: ScreenBlock_ViewDocumentsProps) {
  const { id, In_MemberId, In_EventId, In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation } = props;
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : INITIAL_MODEL),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** The block variables the data action sends (screenData.variables, see EventDocumentsVariablesWire). */
  const variables = (): EventDocumentsVariablesWire => {
    const s = m();
    return {
      IsFetchingData: s.isFetchingData,
      IsLoadingDocument: s.isLoadingDocument,
      In_MemberId,
      In_EventId,
      In_EventName,
      In_EventLocation,
      In_EventStartDate,
      In_EventEndDate,
    };
  };

  /* OnReady (SB :903-952), before paint as OnReady runs when the block mounts. */
  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    set({ isFetchingData: true });
    void (async () => {
      try {
        // RefreshDocumentData (SB :1102-1132) → OnAfterFetch_GetEventDocuments (SB :1012-1043)
        const eventDocuments = await getEventDocuments(variables());
        set({ isDataFetched: true, hasResponseDocuments: eventDocuments.length > 0, eventDocuments });
        set({ isFetchingData: false });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Action_OpenDoc(DocName) (SB :782-828): IsLoadingDocument False; the document whose name is DocName (or whose
      name with the PDF extension is DocName) becomes viewed. */
  const actionOpenDoc = (docName: string) => {
    set({ isLoadingDocument: false });
    const docs = m().eventDocuments;
    const position = docs.findIndex(
      (p) => p.DocumentName === docName || docName === addExtensionToFile(p.DocumentName, FILE_EXTENSION_PDF),
    );
    if (position !== -1) set({ eventDocuments: docs.map((d, i) => (i === position ? { ...d, IsViewed: true } : d)) });
  };

  /** OnClick_Document(In_DocumentURL, In_DocumentName) (SB :684-764): nothing while IsLoadingDocument; else
      IsLoadingDocument True and OpenInApp_TryOpenFileInApp(AddExtensionToFile(name, PDF), url, "orbit-documents",
      "pdf"); not in app (always in the browser: the document opens in a new tab, decision U18; ViewDocuments Q2) →
      Action_OpenDoc(name), IsLoadingDocument False. UnknownError resets IsLoadingDocument and is raised again. */
  const onClickDocument = (documentURL: string, documentName: string) => {
    if (m().isLoadingDocument) return;
    set({ isLoadingDocument: true });
    try {
      const result = openInApp_TryOpenFileInApp(
        addExtensionToFile(documentName, FILE_EXTENSION_PDF),
        documentURL,
        'orbit-documents',
        'pdf',
      );
      if (!result.IsInApp) {
        actionOpenDoc(documentName);
        set({ isLoadingDocument: false });
      }
    } catch (e) {
      if (isUserException(e, 'Connect2_OrbitMobile_MUI.UnknownError')) set({ isLoadingDocument: false });
      raiseToFlowHandler(e);
    }
  };

  /* HandleDownload events (SB :556-614, :869-1083): only a FileTransfer download in the app raises them (see
     useHandleDownload; never in the browser). */
  useHandleDownload({
    /** HandleDownloadOnDownloadProgress (SB :869-892): no step besides its debugger context. */
    onDownloadProgress: () => undefined,
    /** HandleDownloadOnDownloadComplete (SB :962-1001): OpenDocumentFromLocalPath(FullPath) (FileViewerPlugin, Cordova
        only: logged), then Action_OpenDoc(Name). */
    onDownloadComplete: (result: FileDownloadResult) => {
      log.warn('NotPorted', { Action: 'OpenDocumentFromLocalPath', FullPath: result.FullPath });
      actionOpenDoc(result.Name);
    },
    /** HandleDownloadOnDownloadError (SB :1044-1083): IsLoadingDocument False; Message by FileTransferError.Message;
        FeedbackMessage_AutoClose("", FileTransferError.Message, Info, True, "", 0, False) shows the plugin's message
        (the computed Message is not used, as compiled). */
    onDownloadError: (error: FileTransferError) => {
      set({ isLoadingDocument: false });
      feedbackMessageAutoClose({
        title: '',
        message: error.Message,
        messageType: 'info',
        encodedHtml: true,
        extendedClass: '',
      });
    },
  });

  /** OnHandle_ContactHelpdesk (SB :838-868): ContactHelpdesk(GetContactHelpdeskSubject_Event(In_EventName,
      In_EventStartDate, In_EventEndDate, In_EventLocation), In_EventName). */
  const onHandleContactHelpdesk = () => {
    props.onContactHelpdesk(
      getContactHelpdeskSubject_Event(In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation),
      In_EventName,
    );
  };

  const s = state;
  const prefix = id.replace('$', '');
  const lastRow = s.eventDocuments.length - 1;

  const documents = (
    <>
      <div className="full-width padding-x-m padding-y-m" data-container="">
        <div data-container="">
          <i className="icon fa fa-file-text-o fa-1x" data-icon="" />
          <span className="margin-left-base">Tap the link/s below to view/download documents</span>
        </div>
        <div className="full-width margin-top-m" data-container="">
          <OSList
            id={`${prefix}-List_EventDocuments`}
            className="list list-group"
            animateItems
            positionRelative
            source={s.eventDocuments}
            keyOf={(d: EventDocumentItem, i) => `${d.DocumentURL}-${String(i)}`}
          >
            {(d, i) => (
              <div
                className={`full-width${i !== lastRow ? ' margin-bottom-m' : ''}`}
                data-container=""
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  onClickDocument(d.DocumentURL, d.DocumentName);
                }}
              >
                <i className="icon orbit-icon-file-pdf color-orbit-red-5 fa fa-file-pdf-o fa-1x" data-icon="" />
                <span
                  className={`margin-left-base underline${!d.IsViewed ? ' color-orbit-primary-7' : ' text-neutral-7'}`}
                  data-expression=""
                >
                  {d.DocumentName}
                </span>
              </div>
            )}
          </OSList>
        </div>
      </div>
      <div className="backwards-compatibility" data-container="">
        <LoadingSpinner id={`${prefix}-$b3`} IsProcessingData={s.isLoadingDocument} />
      </div>
    </>
  );

  const content: ReactNode = s.isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b5`} inSkeletonLoadingId={OrbitSkeletonLoading.ViewDocument} />
  ) : s.hasResponseDocuments ? (
    documents
  ) : s.isDataFetched ? (
    <OrbitNoInformation id={`${prefix}-$b4`} message={NO_DOCUMENTS} />
  ) : null;

  return (
    <OSBlock name="Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail orbit-header-center"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={<span data-expression="">{In_EventName}</span>}
        content={content}
        bottomBar={
          s.eventDocuments.length > 0 ? (
            <ContactHelpdeskFooter id={`${prefix}-$b6`} onClick={onHandleContactHelpdesk} />
          ) : null
        }
        commonUIElements={
          <>
            {/* FileTransfer.HandleDownload (SB :556-615): no markup; its events are wired by useHandleDownload above. */}
            <OSBlock name="FileTransfer.HandleDownload" id={`${prefix}-$b7`} />
            <div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>
          </>
        }
      />
    </OSBlock>
  );
}
