import { useCallback } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router';
import { parseOsDate } from '@/lib/osDateTime';
import { currentEntry } from './historyStack';
import {
  createTransition,
  DEFAULT_TRANSITION,
  setTransitionOverride,
  transitionState,
  type TransitionAnimation,
} from './screenTransition';

/* Navigation helper of pattern P-PARAMS: original screen paths and parameter names. */

/** A screen input as it goes in the URL. Long Integer ids are passed as strings (they can exceed 2^53). */
export type OsParamValue = string | number | boolean | null | undefined;
export type OsParams = Readonly<Record<string, OsParamValue>>;

export interface OsNavigateOptions {
  /** replace the current history entry instead of adding one */
  replace?: boolean;
  /** the compiled `OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.X)`; Default (the app's
      SlideFromRight) when left out, as Navigation.navigateTo resolves `getTransitionObject(transition, Default)` */
  transition?: TransitionAnimation;
}

/** Booleans are written True/False as the original URLs (`Login?In_IsFromInvalidPermissions=True`, ACF:79-84). */
function formatParam(value: string | number | boolean): string {
  if (typeof value === 'boolean') return value ? 'True' : 'False';
  return String(value);
}

/** A DateTime screen input as the original puts it in the URL: OS.DataConversion.ServerDataConverter.asString(value,
    DateTime) (runtime-sources/OutSystems.js line 9, functions i → h: `case DateTime: return e.toString()`) calls the
    DateTime's toString() without arguments (line 4, the DateTime class used since OutSystemsSettings.js:9
    DateTimeRevamp = false): the null DateTime (new Date(1900, 0, 1) local, `nativeDefaultDate`) gives
    "1900-01-01T00:00:00", any other value `this.date.toISOString()`, the instant in UTC with milliseconds and "Z"
    ("2026-10-18T12:30:00.000Z" for the wall clock 2026-10-18 19:30 at UTC+7). generateScreenURL then encodes it with
    encodeURIComponent (":" → "%3A"). The clone's DateTimes are local wall-clock texts (shared/lib/osDateTime), so the
    instant is that local time. */
export function dateTimeParam(value: string): string {
  const date = parseOsDate(value);
  return date.getTime() === new Date(1900, 0, 1).getTime() ? '1900-01-01T00:00:00' : date.toISOString();
}

/** `/UBTConnect/<Screen>?<Name>=<value>&…`, in the order given; null/undefined values are left out. */
export function screenUrl(path: string, params: OsParams = {}): string {
  const query = Object.entries(params)
    .flatMap(([name, value]) =>
      value === null || value === undefined
        ? []
        : [`${encodeURIComponent(name)}=${encodeURIComponent(formatParam(value))}`],
    )
    .join('&');
  return query ? `${path}?${query}` : path;
}

/* ReplaceOnUpcomingNavigation / ResetReplaceOnUpcomingNavigation (NH:1031-1041): the next navigation away from the
   current screen replaces its history entry; the mark is gone once that screen is left. */
let replaceFromKey: string | null = null;

export function replaceOnUpcomingNavigation(): void {
  replaceFromKey = currentEntry()?.key ?? null;
}

export function resetReplaceOnUpcomingNavigation(): void {
  replaceFromKey = null;
}

const isReplacePending = (): boolean => replaceFromKey !== null && replaceFromKey === currentEntry()?.key;

export type OsNavigate = (path: string, params?: OsParams, options?: OsNavigateOptions) => void;

/** A screen path and its parameters. */
export interface NavigationTarget {
  path: string;
  params: OsParams;
}

/** Gives the target of a navigation: the flag redirects of the route table (plan v2 §3.1 rule 2; app/routes.ts
    flagRedirectTarget, which AppFrame gives to NavigationHost). */
export type NavigationRedirect = (target: NavigationTarget) => NavigationTarget;

/* None when no NavigationHost has one (a block rendered alone in a test): the navigation goes where it is sent. */
let redirect: NavigationRedirect | null = null;

export function setNavigationRedirect(next: NavigationRedirect | null): void {
  redirect = next;
}

/** A navigation of useOsNavigate and osNavigateTo through the router's `navigate`. */
function goTo(navigate: NavigateFunction, path: string, params?: OsParams, options?: OsNavigateOptions): void {
  const target = redirect === null ? { path, params } : redirect({ path, params: params ?? {} });
  const replace = options?.replace === true || isReplacePending();
  const transition = createTransition(options?.transition, DEFAULT_TRANSITION) ?? DEFAULT_TRANSITION;
  void navigate(screenUrl(target.path, target.params), { replace, state: transitionState(transition) });
}

/** Navigates to an original screen path with its parameters, after the flag redirects of the route table. The history
    entry carries its transition (BaseNavigationCallbacks.goTo: location state `{ transition }`), read by the screen
    transition and reversed by a back navigation from it. */
export function useOsNavigate(): OsNavigate {
  const navigate = useNavigate();
  return useCallback(
    (path, params, options) => {
      goTo(navigate, path, params, options);
    },
    [navigate],
  );
}

/* The router's navigate for a navigation that does not start in a component (the App_Common flow handler,
   legacy/os/exceptions.ts): NavigationHost sets it. None when no NavigationHost is mounted. */
let hostNavigate: NavigateFunction | null = null;

export function setHostNavigate(next: NavigateFunction | null): void {
  hostNavigate = next;
}

/** OS.Navigation.navigateTo outside a component: the navigation of useOsNavigate, through the router of the
    NavigationHost. Without a router, the runtime's navigateTo changes the window location instead
    (runtime-sources/OutSystems.js:8, navigateTo: no router goTo → changeWindowLocation), so this sets `location.href`. */
export function osNavigateTo(path: string, params?: OsParams, options?: OsNavigateOptions): void {
  if (hostNavigate === null) {
    window.location.href = screenUrl(path, params);
    return;
  }
  goTo(hostNavigate, path, params, options);
}

/** The shell's back action: a history back, which runs the back-navigation queue like the device back button.
    Without a transition (compiled `navigateBack(null)`) the screen transition reverses the one the screen being left
    was entered with; with one (`navigateBack(createTransition(X))`) that one is used (BaseNavigationCallbacks.goBack
    sets Root.transitionOverride). Call it with no argument from event handlers (`onClick={() => { back(); }}`). */
export function useNavigateBack(): (transition?: TransitionAnimation) => void {
  const navigate = useNavigate();
  return useCallback(
    (transition?: TransitionAnimation) => {
      const name = createTransition(transition, null);
      if (name !== null) setTransitionOverride(name);
      void navigate(-1);
    },
    [navigate],
  );
}

/** OS.Navigation.generateScreenURL(url, params) (runtime-sources/OutSystems.js, function G): url + "?" + the encoded
    `name=value` pairs when there are any, even when the url already has a query (so ".../dir/?api=1?api=1&query=…", as
    the original). For external URLs (Google Maps); app screens use screenUrl. */
export function generateScreenURL(url: string, params: Readonly<Record<string, string>>): string {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k] ?? '')}`)
    .join('&');
  return url + (query.length > 0 ? `?${query}` : '');
}
