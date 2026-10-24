import { fetchEventDocuments } from '@/api/event';
import { isUserException } from '@/legacy/os/exceptions';
import type { ViewDocumentsInputs } from '@/pages/ViewDocuments/inputs';
import { feedbackMessageAutoClose, PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import { useFlowState, useOsNavigate, type IsAlive } from '@/platform/navigation';
import { useHandleDownload, type FileDownloadResult, type FileTransferError } from '@/platform/device/handleDownload';
import { addExtensionToFile } from '@/lib/orbit/actions';
import { openInApp_TryOpenFileInApp } from '@/lib/ubtConnectUtils/actions';
import {
  eventDocumentsCallInputs,
  FILE_EXTENSION_PDF,
  getContactHelpdeskSubject_Event,
  INITIAL_VIEW_DOCUMENTS_STATE,
  viewDocumentsReducer,
  withDocumentViewed,
  type ViewDocumentsPatch,
  type ViewDocumentsState,
} from './viewDocumentsState';

/** The folder of OpenInApp_TryOpenFileInApp for the documents of an event. */
const DOCUMENTS_FOLDER = 'orbit-documents';
const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** The flags that the screen reads; the page reads them (useFlag). */
export interface ViewDocumentsFlags {
  /** GetHasOrbitAccess: the flag mobileOrbitAccess. */
  hasOrbitAccess: boolean;
}

/** What the page renders and the handlers of the document rows and of the helpdesk footer. */
export interface ViewDocumentsFlows {
  /** The block variables (rendered). */
  state: ViewDocumentsState;
  /** OnClick_Document(In_DocumentURL, In_DocumentName): a document row. */
  onDocumentClick: (documentURL: string, documentName: string) => void;
  /** OnHandle_ContactHelpdesk of the block, then of the screen: the footer "Contact Orbit Helpdesk". */
  onContactHelpdesk: () => void;
}

/** FeedbackMessageAfterTransition (Connect2_LegacyShared): its JavaScript node shows the message 500 ms later, after
    the navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** The flows of ScreenBlock_ViewDocuments and the screen action of ViewDocuments.
    - OnReady (before the first paint, as the block runs it when it mounts; decision W28): a view that the view cache
      restored keeps its variables, without a call. Otherwise IsFetchingData True, RefreshDocumentData (the refresh of
      DataActionGetEventDocuments, which sends the block variables of the moment it starts), then IsFetchingData False.
      A failure keeps the skeleton and goes to the flow handler.
    - Decision W23: after an unmount, the started flow skips its state writes only. Its call runs to its end, and its
      error still goes to the flow handler.
    - OnClick_Document: nothing while a document opens; else IsLoadingDocument True and OpenInApp_TryOpenFileInApp
      (name with the PDF extension, URL, "orbit-documents", PDF). Not in the app (always in the browser: the document
      opens in a new tab, decision U18): Action_OpenDoc(name), IsLoadingDocument False. An UnknownError resets
      IsLoadingDocument and is raised again.
    - The HandleDownload events (only a FileTransfer download in the app raises them, never in the browser):
      OnDownloadComplete runs OpenDocumentFromLocalPath (FileViewerPlugin, Cordova only: logged), then
      Action_OpenDoc(Name); OnDownloadError resets IsLoadingDocument and shows the plugin's message
      (FeedbackMessage_AutoClose, Info).
    - OnHandle_ContactHelpdesk: the block raises ContactHelpdesk(GetContactHelpdeskSubject_Event(In_EventName,
      In_EventStartDate, In_EventEndDate, In_EventLocation), In_EventName). The screen handles it: with Orbit access
      (flag mobileOrbitAccess), ContactByEmailOrbitHelpdesk (In_MilestoneId ""); otherwise the no-access message
      (Error) after the transition, and HomeFeed.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments */
export function useViewDocuments(
  inputs: ViewDocumentsInputs,
  { hasOrbitAccess }: ViewDocumentsFlags,
): ViewDocumentsFlows {
  const navigate = useOsNavigate();
  const {
    state,
    dispatch: set,
    latest,
    parameters,
  } = useFlowState({
    viewName: 'Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments',
    reducer: viewDocumentsReducer,
    initial: INITIAL_VIEW_DOCUMENTS_STATE,
    parameters: inputs,
    beforePaint: true,
    onReady: (isAlive, restored) => onReady(isAlive, restored),
  });

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  const onReady = async (isAlive: IsAlive, restored: boolean) => {
    if (restored) return;
    /** A state write of the OnReady flow, skipped after the unmount (W23). */
    const write = (patch: ViewDocumentsPatch) => {
      if (isAlive()) set(patch);
    };
    write({ isFetchingData: true });
    // RefreshDocumentData, then OnAfterFetch_GetEventDocuments.
    const eventDocuments = await fetchEventDocuments(eventDocumentsCallInputs(latest.current, parameters.current));
    write({ isDataFetched: true, hasResponseDocuments: eventDocuments.length > 0, eventDocuments });
    write({ isFetchingData: false });
  };

  /** Action_OpenDoc(DocName): IsLoadingDocument False; the matching document becomes viewed. */
  const actionOpenDoc = (docName: string) => {
    set({ isLoadingDocument: false });
    const eventDocuments = withDocumentViewed(latest.current.eventDocuments, docName);
    if (eventDocuments !== null) set({ eventDocuments });
  };

  const onDocumentClick = (documentURL: string, documentName: string) => {
    if (latest.current.isLoadingDocument) return;
    set({ isLoadingDocument: true });
    try {
      const result = openInApp_TryOpenFileInApp(
        addExtensionToFile(documentName, FILE_EXTENSION_PDF),
        documentURL,
        DOCUMENTS_FOLDER,
        FILE_EXTENSION_PDF,
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

  useHandleDownload({
    /** HandleDownloadOnDownloadProgress: no step. */
    onDownloadProgress: () => undefined,
    onDownloadComplete: (result: FileDownloadResult) => {
      log.warn('NotPorted', { Action: 'OpenDocumentFromLocalPath', FullPath: result.FullPath });
      actionOpenDoc(result.Name);
    },
    /** FeedbackMessage_AutoClose("", FileTransferError.Message, Info, True, "", 0, False): the plugin's message (the
        Message that the flow computes before is not used, as compiled). */
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

  const onContactHelpdesk = () => {
    const { In_EventId, In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation } = parameters.current;
    const subject = getContactHelpdeskSubject_Event(In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation);
    if (!hasOrbitAccess) {
      feedbackMessageAfterTransition(NO_ORBIT_ACCESS, PLATFORM_MESSAGE_TYPE.error);
      navigate('/UBTConnect/HomeFeed', {});
      return;
    }
    navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
      In_Subject: subject,
      In_EventId,
      In_EventName,
      In_MilestoneId: '',
    });
  };

  return { state, onDocumentClick, onContactHelpdesk };
}
