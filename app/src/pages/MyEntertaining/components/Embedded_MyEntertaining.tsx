import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import type { EntertainingConfig } from '@/api/entertaining';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { LazyImage } from '@/components/ui/LazyImage';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { loadedEmbed, requireEmbed } from './connect2Entertaining';

/** The defaults of the inputs View and Theme. */
export const EMBEDDED_MY_ENTERTAINING_DEFAULTS = { view: 'timeline', theme: 'light' } as const;
/** MaxLoadingItems (default 5): the items of the skeleton list. */
const MAX_LOADING_ITEMS = 5;
/** The token refresh period of InitializeCalendar: 10 minutes. */
const REFRESH_INTERVAL_MS = 10 * 60 * 1000;

export interface Embedded_MyEntertainingProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Input View (default "timeline"). */
  view?: string;
  /** Input Theme (default "light"). */
  theme?: string;
  /** Input Sources (default ""). */
  sources?: string;
  /** Input B2CTenant (default ""). */
  b2CTenant?: string;
  /** The answer of DataActionGetEntertainingConfig, fetched by the caller with the four inputs
      (`useEntertainingCalendar`); undefined while it loads or after it failed (the skeleton stays). */
  config?: EntertainingConfig;
  /** Action_RefreshToken: the caller gets a new ID token and gives it to `applyIdToken`. */
  onRefreshToken?: (applyIdToken: (idToken: string) => void) => Promise<void>;
  /** Event OnReady. */
  onOnReady?: () => void;
  /** Event OnAuthenticated. */
  onOnAuthenticated?: () => void;
  /** Event OnComplete(Status, Total). */
  onOnComplete?: (status: string, total: string) => void;
  /** Event OnError(Message). */
  onOnError?: (message: string) => void;
  /** Event OnOpenMap(Lat, Lng, Label). */
  onOnOpenMap?: (lat: string, lng: string, label: string) => void;
}

/** RefreshEmbedTokenJS: the new token goes to the SDK when it is configured. */
function applyIdToken(idToken: string): void {
  const embed = loadedEmbed();
  if (embed?.isConfigured()) embed.refreshToken(idToken);
}

/** @origin UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining
    The calendar embed: the `connect2entertaining` container that the calendar SDK fills (decision D8 b: the stand-in of
    connect2Entertaining.ts), hidden under a skeleton list while isLoading. Props only: the caller fetches the
    configuration and the token.
    - OnInitialize builds the loading items.
    - With the configuration (OnAfterFetch of GetEntertainingConfig) the SDK script is required and InitializeCalendar
      runs: it configures the SDK, listens to the `embed:open-map` messages of the calendar origin, and refreshes the
      token every 10 minutes.
    - The SDK's onComplete ends the loading (Action_OnComplete) and raises OnComplete.
    - OnParametersChanged applies the sources (ApplySourcesJS).
    - OnDestroy runs CleanupCalendar. */
export function Embedded_MyEntertaining({
  id,
  view = EMBEDDED_MY_ENTERTAINING_DEFAULTS.view,
  theme = EMBEDDED_MY_ENTERTAINING_DEFAULTS.theme,
  sources = '',
  b2CTenant = '',
  config,
  onRefreshToken,
  onOnReady,
  onOnAuthenticated,
  onOnComplete,
  onOnError,
  onOnOpenMap,
}: Embedded_MyEntertainingProps) {
  const prefix = id?.replace('$', '');
  const fallbackId = useId();
  const containerId = prefix === undefined ? `connect2entertaining${fallbackId}` : `${prefix}-connect2entertaining`;
  const [isLoading, setIsLoading] = useState(true);
  // OnInitialize: LoadingList = "Loading 1" .. "Loading <MaxLoadingItems>".
  const [loadingList] = useState(() => Array.from({ length: MAX_LOADING_ITEMS }, (_, i) => `Loading ${String(i + 1)}`));
  const latest = useRef({
    inputs: { view, theme, sources, b2CTenant },
    events: { onRefreshToken, onOnReady, onOnAuthenticated, onOnComplete, onOnError, onOnOpenMap },
  });
  useLayoutEffect(() => {
    latest.current = {
      inputs: { view, theme, sources, b2CTenant },
      events: { onRefreshToken, onOnReady, onOnAuthenticated, onOnComplete, onOnError, onOnOpenMap },
    };
  });

  // OnAfterFetch of GetEntertainingConfig → InitializeCalendar; the cleanup is CleanupCalendar.
  useEffect(() => {
    if (!config) return;
    let alive = true;
    let messageListener: ((event: MessageEvent) => void) | null = null;
    let refreshIntervalId: number | null = null;
    void requireEmbed(config.baseURL).then((embed) => {
      if (!alive) return;
      if (embed.isConfigured()) embed.destroy();
      const inputs = latest.current.inputs;
      embed.init({
        baseUrl: config.baseURL,
        containerId,
        view: inputs.view,
        theme: inputs.theme,
        height: '100%',
        autoResize: false,
        sources: inputs.sources || null,
        getIdToken: () => config.token,
        b2cTenants: inputs.b2CTenant,
        b2cClientIds: config.b2CClientId,
        b2cPolicy: config.b2CPolicy,
        onReady: () => {
          if (alive) latest.current.events.onOnReady?.();
        },
        onAuthenticated: () => {
          if (alive) latest.current.events.onOnAuthenticated?.();
        },
        onComplete: (data) => {
          if (!alive) return;
          const status = data?.status || '';
          const total = data?.total != null ? String(data.total) : '';
          setIsLoading(false); // Action_OnComplete
          latest.current.events.onOnComplete?.(status, total);
        },
        onResize: () => undefined, // autoResize is false by design
        onError: (error) => {
          if (alive) latest.current.events.onOnError?.(error?.message || error?.type || 'Unknown error');
        },
      });
      const baseUrl = config.baseURL;
      messageListener = (event: MessageEvent) => {
        if (event.origin !== baseUrl) return;
        const data = (event.data || {}) as {
          type?: unknown;
          lat?: string | number;
          lng?: string | number;
          label?: string;
        };
        if (data.type === 'embed:open-map') {
          latest.current.events.onOnOpenMap?.(String(data.lat), String(data.lng), data.label || '');
        }
      };
      window.addEventListener('message', messageListener);
      refreshIntervalId = window.setInterval(() => {
        void latest.current.events.onRefreshToken?.(applyIdToken);
      }, REFRESH_INTERVAL_MS);
    });
    return () => {
      alive = false;
      if (messageListener) window.removeEventListener('message', messageListener);
      if (refreshIntervalId !== null) window.clearInterval(refreshIntervalId);
      const embed = loadedEmbed();
      if (embed?.isConfigured()) embed.destroy();
    };
  }, [config, containerId]);

  // OnParametersChanged → Action_SetSources → ApplySourcesJS (not on the first render).
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const embed = loadedEmbed();
    if (embed?.isConfigured()) embed.setSources(sources || null);
  }, [view, theme, sources, b2CTenant]);

  return (
    <OSBlock name="Blocks.Embedded_MyEntertaining" id={id}>
      <div className={`overflow-hidden ${isLoading ? 'display-none' : ''}`} data-container="" id={containerId} />
      {isLoading && (
        <Skeleton id={prefix === undefined ? undefined : `${prefix}-$b1`} isLoading>
          <CustomContainer
            id={prefix === undefined ? undefined : `${prefix}-$b2`}
            options={{ Background: { BackgroundColor: UBT_Color.Neutral0 } }}
          >
            <div className="list list-group OSFillParent" data-list="" style={{ position: 'relative' }}>
              {loadingList.map((item, i) => (
                <CustomContainer
                  key={item}
                  id={prefix === undefined ? undefined : `${prefix}-l1-38_${String(i)}-$b3`}
                  options={{ MarginSize: { GeneralSizeId: UBT_Size.Base } }}
                >
                  <LazyImage
                    id={prefix === undefined ? undefined : `${prefix}-l1-38_${String(i)}-$b4`}
                    fallbackPadding={{ GeneralSizeId: UBT_Size.DoubleExtraLarge }}
                    inBorderOptions={{ BorderRadius: UBT_Shape.Soft }}
                    inImageSize={{ Width: UBT_ImageSize.FullWidth_100_Percent }}
                    fallbackOptions={{ IconId: UBT_Icons.WidgetsFill, FontSize: UBT_FontSize.Display }}
                  />
                </CustomContainer>
              ))}
            </div>
          </CustomContainer>
        </Skeleton>
      )}
    </OSBlock>
  );
}
