// @os-block UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { log } from '@/platform/log/log';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { LazyImage } from '../../../shared/UBTConnectLibrary/LazyImage';
import { SkeletonSection } from '../../../shared/UBTConnectLibrary/SkeletonSection';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { appManager_Get_UserIdToken, useGetEntertainingConfig } from '../api';
import { loadedEmbed, requireEmbed } from './connect2Entertaining';

/** MaxLoadingItems (Embedded_MyEntertaining.mvc.js model, default 5). */
const MAX_LOADING_ITEMS = 5;
/** Token refresh period of InitializeCalendarJS (:1288-1291): 10 minutes. */
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

/** Action_RefreshToken (:1020-1040): AppManager_Get_UserIdToken, then RefreshEmbedTokenJS (:1295-1301). */
async function refreshToken(): Promise<void> {
  try {
    const idToken = await appManager_Get_UserIdToken();
    const embed = loadedEmbed();
    if (embed?.isConfigured()) embed.refreshToken(idToken);
  } catch (e: unknown) {
    log.warn('AppManager_Get_UserIdToken failed', e);
  }
}

/** UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining (view :229-410, controller :413-1205): the
    `connect2entertaining` container the calendar SDK fills (D8 b: the stand-in of connect2Entertaining.ts), hidden with a
    skeleton list while isLoading. OnInitialize builds the 5 loading items; after GetEntertainingConfig the script is
    required and InitializeCalendar runs; the SDK's onComplete ends the loading; OnParametersChanged applies the sources;
    OnDestroy runs CleanupCalendar. */
export function Embedded_MyEntertaining({
  id,
  view = 'timeline',
  theme = 'light',
  sources = '',
  b2CTenant = '',
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
  // ScreenEvent_OnInitialize (:603-640): LoadingList = "Loading 1" .. "Loading <MaxLoadingItems>".
  const [loadingList] = useState(() => Array.from({ length: MAX_LOADING_ITEMS }, (_, i) => `Loading ${String(i + 1)}`));
  const latest = useRef({
    inputs: { View: view, Theme: theme, Sources: sources, B2CTenant: b2CTenant },
    events: { onOnReady, onOnAuthenticated, onOnComplete, onOnError, onOnOpenMap },
  });
  useLayoutEffect(() => {
    latest.current = {
      inputs: { View: view, Theme: theme, Sources: sources, B2CTenant: b2CTenant },
      events: { onOnReady, onOnAuthenticated, onOnComplete, onOnError, onOnOpenMap },
    };
  });

  const { data: config } = useGetEntertainingConfig(() => latest.current.inputs);

  // OnAfterFetch_GetEntertainingConfig (:922-960) → InitializeCalendarJS (:1231-1293); cleanup = CleanupCalendarJS.
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
        view: inputs.View,
        theme: inputs.Theme,
        height: '100%',
        autoResize: false,
        sources: inputs.Sources || null,
        getIdToken: () => config.token,
        b2cTenants: inputs.B2CTenant,
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
        void refreshToken();
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

  // ScreenEvent_OnParametersChanged (:551-575) → Action_SetSources → ApplySourcesJS (:1224-1230).
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
        <SkeletonSection id={prefix === undefined ? undefined : `${prefix}-$b1`} inIsLoading>
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
        </SkeletonSection>
      )}
    </OSBlock>
  );
}
