import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchEventDocuments, type EventDocumentItem } from '@/api/event';
import { CommunicationException, UserException } from '@/legacy/os/exceptions';
import { ControllerDisposedException } from '@/legacy/os/os-exceptions';
import type { ViewDocumentsInputs } from '@/pages/ViewDocuments/inputs';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import type { HandleDownloadEvents } from '@/platform/device/handleDownload';
import { openInApp_TryOpenFileInApp } from '@/lib/ubtConnectUtils/actions';
import { getContactHelpdeskSubject_Event, viewDocumentsReducer } from './viewDocumentsState';
import { useViewDocuments } from './useViewDocuments';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./viewDocumentsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./viewDocumentsState')>();
  return { ...actual, viewDocumentsReducer: vi.fn(actual.viewDocumentsReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchEventDocuments: vi.fn(),
}));
/* useFlowState sends a rejected OnReady to this flow handler; the click flow raises to it too. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
const navigate = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));
/* OpenInApp_TryOpenFileInApp: the browser answer by default (the document opens in a new tab). */
vi.mock('@/lib/ubtConnectUtils/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnectUtils/actions')>()),
  openInApp_TryOpenFileInApp: vi.fn(() => ({ IsInApp: false, Filepath: '' })),
}));
/* HandleDownload: the test raises its events (only a FileTransfer download in the app does). */
const download = vi.hoisted((): { events: HandleDownloadEvents } => ({ events: {} }));
vi.mock('@/platform/device/handleDownload', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/device/handleDownload')>()),
  useHandleDownload: (events: HandleDownloadEvents) => {
    download.events = events;
  },
}));

/* The flows of ScreenBlock_ViewDocuments and the screen action of ViewDocuments, with the data action, the file
   opener, the navigation and the flow handler replaced by spies. Fictional documents of an event. */
const INPUTS: ViewDocumentsInputs = {
  In_MemberId: '55',
  In_EventId: '7301',
  In_EventName: 'Spring Conference',
  In_EventStartDate: '2026-11-06T09:00:00',
  In_EventEndDate: '2026-11-08T17:00:00',
  In_EventLocation: 'Main Hall',
};
const doc = (name: string): EventDocumentItem => ({
  DocumentURL: `https://example.com/docs/${name.toLowerCase().replace(/ /g, '-')}.pdf`,
  DocumentName: name,
  LastUpdatedOn: '',
  LastUpdatedBy: 'Event Office',
  IsViewed: false,
});
const DOCS = [doc('Conference Programme'), doc('Hall Map')];

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** A GetEventDocuments answer that the test gives later. */
function pendingDocuments() {
  let resolve: (rows: EventDocumentItem[]) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  vi.mocked(fetchEventDocuments).mockReturnValueOnce(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
}
const render = (hasOrbitAccess = true, strict = false) =>
  renderHook(() => useViewDocuments(INPUTS, { hasOrbitAccess }), { wrapper: strict ? strictWrapper : wrapper });
/** Renders and waits for the documents. */
async function loaded(hasOrbitAccess = true) {
  const view = render(hasOrbitAccess);
  await settle();
  return view;
}

beforeEach(() => {
  vi.mocked(fetchEventDocuments).mockResolvedValue(DOCS);
  resetFeedbackMessages();
});
afterEach(() => {
  vi.clearAllMocks();
  vi.useRealTimers();
});

describe('useViewDocuments', () => {
  it('OnReady before the first paint: IsFetchingData, then the documents; the call sends the block variables', async () => {
    const answer = pendingDocuments();
    const { result } = render();
    // The layout effect ran OnReady: the first rendered state already fetches.
    expect(result.current.state.isFetchingData).toBe(true);
    expect(fetchEventDocuments).toHaveBeenCalledTimes(1);
    expect(fetchEventDocuments).toHaveBeenCalledWith({
      IsFetchingData: true,
      IsLoadingDocument: false,
      In_MemberId: '55',
      In_EventId: '7301',
      In_EventName: 'Spring Conference',
      In_EventLocation: 'Main Hall',
      In_EventStartDate: '2026-11-06T09:00:00',
      In_EventEndDate: '2026-11-08T17:00:00',
    });
    answer.resolve(DOCS);
    await settle();
    expect(result.current.state).toEqual({
      eventDocuments: DOCS,
      isFetchingData: false,
      isLoadingDocument: false,
      isDataFetched: true,
      hasResponseDocuments: true,
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('no documents: fetched, without response documents', async () => {
    vi.mocked(fetchEventDocuments).mockResolvedValueOnce([]);
    const { result } = await loaded();
    expect(result.current.state).toMatchObject({
      isDataFetched: true,
      hasResponseDocuments: false,
      eventDocuments: [],
    });
  });

  it('a failed call keeps the skeleton and goes to the flow handler', async () => {
    const error = new CommunicationException('offline');
    vi.mocked(fetchEventDocuments).mockRejectedValueOnce(error);
    const { result } = await loaded();
    expect(result.current.state).toMatchObject({ isFetchingData: true, isDataFetched: false });
    expect(vi.mocked(raiseToFlowHandler).mock.calls.map(([raised]) => raised)).toEqual([error]);
  });

  it('StrictMode: OnReady runs once and the documents come', async () => {
    const { result } = render(true, true);
    await settle();
    expect(fetchEventDocuments).toHaveBeenCalledTimes(1);
    expect(result.current.state.eventDocuments).toEqual(DOCS);
  });

  it('a document click in the browser opens it (new tab) and marks it viewed', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onDocumentClick(DOCS[1]?.DocumentURL ?? '', 'Hall Map');
    });
    expect(openInApp_TryOpenFileInApp).toHaveBeenCalledWith(
      'Hall Mappdf',
      'https://example.com/docs/hall-map.pdf',
      'orbit-documents',
      'pdf',
    );
    expect(result.current.state.isLoadingDocument).toBe(false);
    expect(result.current.state.eventDocuments.map((d) => d.IsViewed)).toEqual([false, true]);
  });

  it('in the app: the spinner stays until the download; a click meanwhile does nothing; complete marks it viewed', async () => {
    vi.mocked(openInApp_TryOpenFileInApp).mockReturnValueOnce({ IsInApp: true, Filepath: '/files/doc.pdf' });
    const { result } = await loaded();
    act(() => {
      result.current.onDocumentClick(DOCS[0]?.DocumentURL ?? '', 'Conference Programme');
    });
    expect(result.current.state.isLoadingDocument).toBe(true);
    act(() => {
      result.current.onDocumentClick(DOCS[1]?.DocumentURL ?? '', 'Hall Map');
    });
    expect(openInApp_TryOpenFileInApp).toHaveBeenCalledTimes(1);
    act(() => {
      download.events.onDownloadComplete?.({
        IsFile: true,
        IsDirectory: false,
        Name: 'Conference Programmepdf',
        FullPath: '/files/doc.pdf',
        NativeURL: '',
      });
    });
    expect(result.current.state.isLoadingDocument).toBe(false);
    expect(result.current.state.eventDocuments.map((d) => d.IsViewed)).toEqual([true, false]);
  });

  it('a download error resets the spinner and shows the plugin message', async () => {
    vi.mocked(openInApp_TryOpenFileInApp).mockReturnValueOnce({ IsInApp: true, Filepath: '' });
    const { result } = await loaded();
    act(() => {
      result.current.onDocumentClick(DOCS[0]?.DocumentURL ?? '', 'Conference Programme');
    });
    act(() => {
      download.events.onDownloadError?.({
        Code: '3',
        Message: 'Document not found',
        Source: '',
        Target: '',
        HttpStatus: 404,
        Body: '',
        Exception: '',
        Headers: '',
      });
    });
    expect(result.current.state.isLoadingDocument).toBe(false);
    expect(result.current.state.eventDocuments.every((d) => !d.IsViewed)).toBe(true);
    expect(getFeedbackMessage()?.message).toContain('Document not found');
  });

  it('an UnknownError resets IsLoadingDocument and is raised again; another error keeps it', async () => {
    const unknown = new UserException('cannot open', 'Connect2_OrbitMobile_MUI.UnknownError');
    vi.mocked(openInApp_TryOpenFileInApp).mockImplementationOnce(() => {
      throw unknown;
    });
    const { result } = await loaded();
    act(() => {
      result.current.onDocumentClick(DOCS[0]?.DocumentURL ?? '', 'Conference Programme');
    });
    expect(result.current.state.isLoadingDocument).toBe(false);
    expect(vi.mocked(raiseToFlowHandler).mock.calls).toEqual([[unknown]]);

    const other = new TypeError('no name');
    vi.mocked(openInApp_TryOpenFileInApp).mockImplementationOnce(() => {
      throw other;
    });
    act(() => {
      result.current.onDocumentClick('', '');
    });
    expect(result.current.state.isLoadingDocument).toBe(true);
    expect(vi.mocked(raiseToFlowHandler).mock.calls[1]).toEqual([other]);
  });

  it('Contact Orbit Helpdesk with Orbit access: ContactByEmailOrbitHelpdesk with the event subject', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onContactHelpdesk();
    });
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/ContactByEmailOrbitHelpdesk', {
      In_Subject: getContactHelpdeskSubject_Event(
        'Spring Conference',
        '2026-11-06T09:00:00',
        '2026-11-08T17:00:00',
        'Main Hall',
      ),
      In_EventId: '7301',
      In_EventName: 'Spring Conference',
      In_MilestoneId: '',
    });
  });

  it('Contact Orbit Helpdesk without Orbit access: HomeFeed, then the no-access message after 500 ms', async () => {
    const { result } = await loaded(false);
    vi.useFakeTimers();
    act(() => {
      result.current.onContactHelpdesk();
    });
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/HomeFeed', {});
    expect(getFeedbackMessage()).toBeNull();
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(getFeedbackMessage()).toMatchObject({
      message: "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
      type: 3,
    });
  });

  it('R1: unmount while GetEventDocuments is pending: one call, no state write, nothing raised', async () => {
    const answer = pendingDocuments();
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useViewDocuments(INPUTS, { hasOrbitAccess: true });
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(viewDocumentsReducer).mockClear();
    answer.resolve(DOCS);
    await settle();
    expect(fetchEventDocuments).toHaveBeenCalledTimes(1);
    expect(viewDocumentsReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    // Only the ignorable ControllerDisposedException reaches the flow handler, which drops it (R1).
    expect(vi.mocked(raiseToFlowHandler).mock.calls.every(([e]) => e instanceof ControllerDisposedException)).toBe(
      true,
    );
  });

  it('R1: unmount while GetEventDocuments is pending: its failure reaches no handler, without a state write', async () => {
    const answer = pendingDocuments();
    const { unmount } = render(true, true);
    await settle();
    unmount();
    vi.mocked(viewDocumentsReducer).mockClear();
    const error = new CommunicationException('offline');
    answer.reject(error);
    await settle();
    const raised = vi.mocked(raiseToFlowHandler).mock.calls.map(([e]) => e);
    expect(raised).toHaveLength(1);
    expect(raised[0]).toBeInstanceOf(ControllerDisposedException);
    expect(raised).not.toContain(error);
    expect(viewDocumentsReducer).not.toHaveBeenCalled();
  });
});
