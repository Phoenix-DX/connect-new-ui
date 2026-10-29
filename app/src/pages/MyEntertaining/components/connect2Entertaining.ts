/* The Connect2Entertaining calendar embed SDK (`window.Connect2Entertaining.embed`), as far as the compiled block uses it
   (Embedded_MyEntertaining.mvc.js: InitializeCalendarJS :1231-1293, ApplySourcesJS :1224-1230, CleanupCalendarJS
   :1212-1222, RefreshEmbedTokenJS :1295-1301). The real SDK is an external script (`<BaseURL>/embed-entertaining.js`,
   calls.md:810), not a TST file. Decision D8 (b, user 2026-10-14) and Q1: in the mock phase a local stand-in takes its
   place; `requireEmbed` is the one seam where the real script is plugged in later. */

/** onComplete payload: the block reads `status` and `total` (InitializeCalendarJS :1262-1266). */
export interface EmbedCompleteData {
  status?: string;
  total?: number | string | null;
}

/** onError payload: the block reads `message`, then `type` (InitializeCalendarJS :1272-1276). */
export interface EmbedErrorData {
  message?: string;
  type?: string;
}

/** The options object InitializeCalendarJS passes to `Connect2Entertaining.embed.init` (:1244-1278). */
export interface EmbedInitOptions {
  baseUrl: string;
  containerId: string;
  view: string;
  theme: string;
  height: string;
  autoResize: boolean;
  sources: string | null;
  getIdToken: () => string;
  b2cTenants: string;
  b2cClientIds: string;
  b2cPolicy: string;
  onReady: () => void;
  onAuthenticated: () => void;
  onComplete: (data?: EmbedCompleteData) => void;
  onResize: (height: number) => void;
  onError: (error?: EmbedErrorData) => void;
  /** The calendar asks to go back (live TST of 2026-10-27, InitializeCalendarJS :1442-1444). */
  onNavBack: () => void;
}

/** The SDK calls the block makes. */
export interface Connect2EntertainingEmbed {
  init: (options: EmbedInitOptions) => void;
  isConfigured: () => boolean;
  destroy: () => void;
  setSources: (sources: string | null) => void;
  refreshToken: (idToken: string) => void;
}

/** Same-size page of the stand-in (public/mock-embeds/my-entertaining.html): a fictional timeline of the mock user's
    entertaining (directory cast). */
const MOCK_PAGE = `${import.meta.env.BASE_URL}mock-embeds/my-entertaining.html`;

let current: HTMLIFrameElement | null = null;
let removeNavBackListener: (() => void) | undefined;

/** Stand-in (Q1 A): one iframe with the mock page in the container (query view, theme, sources of the init options);
    onReady then onComplete (no status, no total) once it has loaded. No authentication, no errors; setSources posts
    `sources:set` to the mock page, token refresh is ignored. The mock page's back control posts `embed:nav-back`: the
    stand-in calls onNavBack, as the real calendar does from its own back (drift-WP3 Q5). */
const standIn: Connect2EntertainingEmbed = {
  init(options) {
    const container = document.getElementById(options.containerId);
    if (!container) return;
    const iframe = document.createElement('iframe');
    iframe.addEventListener(
      'load',
      () => {
        if (current !== iframe) return;
        options.onReady();
        options.onComplete();
      },
      { once: true },
    );
    const query = new URLSearchParams({ view: options.view, theme: options.theme, sources: options.sources ?? '' });
    iframe.src = `${MOCK_PAGE}?${query.toString()}`;
    const onMessage = (event: MessageEvent) => {
      if (current !== iframe || event.source !== iframe.contentWindow || event.origin !== window.location.origin)
        return;
      const data: unknown = event.data;
      if (typeof data === 'object' && data !== null && 'type' in data && data.type === 'embed:nav-back') {
        options.onNavBack();
      }
    };
    removeNavBackListener?.();
    window.addEventListener('message', onMessage);
    removeNavBackListener = () => {
      window.removeEventListener('message', onMessage);
    };
    container.appendChild(iframe);
    current = iframe;
  },
  isConfigured: () => current !== null,
  destroy() {
    removeNavBackListener?.();
    removeNavBackListener = undefined;
    current?.remove();
    current = null;
  },
  setSources(sources) {
    current?.contentWindow?.postMessage({ type: 'sources:set', sources: sources ?? '' }, window.location.origin);
  },
  refreshToken: () => undefined,
};

let loaded: Connect2EntertainingEmbed | undefined;

/** RequireScript(BaseURL + "/embed-entertaining.js") (OnAfterFetch_GetEntertainingConfig :928-930). Mock phase: the
    stand-in. The real embed: load that script once and return `window.Connect2Entertaining.embed`. */
export function requireEmbed(baseURL: string): Promise<Connect2EntertainingEmbed> {
  void baseURL;
  loaded = standIn;
  return Promise.resolve(loaded);
}

/** `window.Connect2Entertaining` of the JS nodes: the SDK once its script has been required, else undefined. */
export const loadedEmbed = (): Connect2EntertainingEmbed | undefined => loaded;

let entertainingToken = '';

/** Action_SetToken → SetEntertainingTokenJS (live TST of 2026-10-27, Embedded_MyEntertaining.mvc.js:785-814,
    :1385-1389): TST keeps the token on `window.__ubtEntertainingToken`; here it stays in this module. */
export function setEntertainingToken(token: string): void {
  entertainingToken = token;
}

/** getIdToken of InitializeCalendarJS: the token of the last Action_SetToken. */
export const getEntertainingToken = (): string => entertainingToken;
