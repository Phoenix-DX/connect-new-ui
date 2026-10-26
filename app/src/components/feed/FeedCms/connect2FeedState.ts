/* Connect2Feed embed SDK port (connect2Feed.ts): the configuration and the private variables of the SDK. */

export interface FeedMessage {
  type?: string;
  count?: number;
  total?: number;
  url?: string;
  fileName?: string;
  feedId?: string;
  feedTitle?: string;
  subtitle?: string;
  image?: string;
  message?: string;
  error?: string;
  [key: string]: unknown;
}

type Callback = ((data: FeedMessage) => void) | null;

export interface Connect2FeedConfig {
  baseUrl: string | null;
  theme: string;
  limit: number;
  hideActions: boolean;
  height: string;
  width: string;
  containerId: string;
  onReady: Callback;
  onFeedsLoaded: Callback;
  onError: Callback;
  onFeedClick: Callback;
  onShare: Callback;
  onAddToCalendar: Callback;
  onComplete: Callback;
  onDownload: Callback;
  onFilterCleared: Callback;
  idToken: string | null;
  getIdToken: (() => string | null | Promise<string | null>) | null;
  b2cTenants: string | null;
  b2cClientIds: string | null;
  b2cPolicy: string | null;
  customTheme: { mode?: string; variables?: Record<string, string> } | null;
  feedId: string | null;
}

/** What callers pass: any subset; keys the SDK does not know (channelId, tokenType…) are dropped by mergeConfig. */
export type Connect2FeedUserConfig = Partial<Connect2FeedConfig> & Record<string, unknown>;

/** Defaults (:5-29). */
export const defaults = (): Connect2FeedConfig => ({
  baseUrl: null,
  theme: 'light',
  limit: 10,
  hideActions: false,
  height: '600px',
  width: '100%',
  containerId: 'connect2-feeds',
  onReady: null,
  onFeedsLoaded: null,
  onError: null,
  onFeedClick: null,
  onShare: null,
  onAddToCalendar: null,
  onComplete: null,
  onDownload: null,
  onFilterCleared: null,
  idToken: null,
  getIdToken: null,
  b2cTenants: null,
  b2cClientIds: null,
  b2cPolicy: null,
  customTheme: null,
  feedId: null,
});

/** The private variables of the SDK (its closure in the original), in one record that the modules of the port
    share. */
interface Connect2FeedState {
  config: Connect2FeedConfig;
  iframe: HTMLIFrameElement | null;
  isReady: boolean;
  pendingToken: string | null;
  itemIframes: Record<string, HTMLIFrameElement | undefined>;
  itemHandlers: Record<string, ((event: MessageEvent) => void) | undefined>;
  preloadIframe: HTMLIFrameElement | null;
  configureResolve: (() => void) | null;
  configurePromise: Promise<void> | null;
  configureTimeout: ReturnType<typeof setTimeout> | null;
  hasEmittedComplete: boolean;
  isConfigured: boolean;
}

export const sdk: Connect2FeedState = {
  config: defaults(),
  iframe: null,
  isReady: false,
  pendingToken: null,
  itemIframes: {},
  itemHandlers: {},
  preloadIframe: null,
  configureResolve: null,
  configurePromise: null,
  configureTimeout: null,
  hasEmittedComplete: false,
  isConfigured: false,
};

export const baseUrl = () => sdk.config.baseUrl ?? '';

/** mergeConfig (:42-49): only the SDK's own keys. */
export function mergeConfig(userConfig: Connect2FeedUserConfig | undefined) {
  if (!userConfig) return;
  const target = sdk.config as unknown as Record<string, unknown>;
  for (const key of Object.keys(userConfig)) if (Object.hasOwn(sdk.config, key)) target[key] = userConfig[key];
}
