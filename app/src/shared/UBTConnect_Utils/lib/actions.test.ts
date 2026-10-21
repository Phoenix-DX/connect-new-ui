import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  openInApp_TryOpenFileInApp,
  getOperatingSystem,
  openInApp_OpenApp,
  openInApp_OpenExternalLink,
} from './actions';
import { Mobile_OperatingSystem } from './staticEntities';

const redirect = vi.hoisted(() => vi.fn());
const toast = vi.hoisted(() => vi.fn());
vi.mock('../../../shell/feedback/pageRedirect', () => ({ pageRedirect: redirect }));
vi.mock('../../../shell/feedback', async (importOriginal) => ({
  ...(await importOriginal<object>()),
  feedbackMessageAutoClose: toast,
}));

describe('openInApp_OpenExternalLink (UBTConnect_Utils.controller.js:4491-4538)', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    redirect.mockReset();
  });

  it('an http(s) link takes the in-app browser branch: a new tab for both targets (decision U18)', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    openInApp_OpenExternalLink('https://example.test/a', false);
    openInApp_OpenExternalLink('HTTP://example.test/b', true); // Index(…, ignoreCase True)
    expect(open.mock.calls).toEqual([
      ['https://example.test/a', '_blank', 'noopener'],
      ['HTTP://example.test/b', '_blank', 'noopener'],
    ]);
    expect(redirect).not.toHaveBeenCalled();
  });

  it('another link: InNewTab → JSUtils_PageOpenInNewTab, else JSUtils_PageRedirect(Url, True)', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    openInApp_OpenExternalLink('market://details?id=x', true);
    expect(open).toHaveBeenCalledWith('market://details?id=x', '_blank');
    openInApp_OpenExternalLink('mailto:someone@example.test');
    expect(redirect).toHaveBeenCalledWith('mailto:someone@example.test', true);
  });
});

describe('openInApp_OpenApp (UBTConnect_Utils.controller.js:4360-4462), browser path', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    toast.mockReset();
  });

  it('no Cordova: GetOperatingSystem is Other (CommonPlugin.controller.js:147-200)', () => {
    expect(getOperatingSystem()).toBe(Mobile_OperatingSystem.Other);
  });

  it('no AppLauncher plugin, no Cordova, OS Other: the "Not available" toast, no link opened (:4439-4441)', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    openInApp_OpenApp('com.example.app');
    expect(toast).toHaveBeenCalledWith({
      title: 'Not available',
      message: 'Sorry, this app is not available in the platform you are using',
      messageType: 'info',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
    expect(open).not.toHaveBeenCalled();
    expect(redirect).not.toHaveBeenCalled();
  });
});

describe('OpenInApp_TryOpenFileInApp, web branch (CR-MilestoneDetail-3)', () => {
  it('without Cordova or the plugins PWA wrappers: OpenInApp_ViewFile_Fallback opens the URL in a new tab, IsInApp False', () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    expect(openInApp_TryOpenFileInApp('Rooms.pdf', 'https://example.com/rooms.pdf', 'orbit-documents', 'pdf')).toEqual({
      IsInApp: false,
      Filepath: '',
    });
    expect(open).toHaveBeenCalledWith('https://example.com/rooms.pdf', '_blank', 'noopener');
    open.mockRestore();
  });

  it('an empty file name makes the Get_FileExtension JS node throw, as the original', () => {
    expect(() => openInApp_TryOpenFileInApp('', 'https://example.com/x', 'f', 'pdf')).toThrow(TypeError);
  });
});
