import { NavigationType, type Location } from 'react-router';

/* Screen transitions of the OutSystems runtime (F18, CR-F18-1). Sources, all in migration/runtime-sources/:
   - OutSystems.js `OutSystems/ClientRuntime/TransitionAnimation` (enum) and `.../Transitions` (createTransition,
     reverseTransition, sanitizeTransition, Default), byte offsets 29257-31000;
   - OutSystems.js public API `Navigation` (offset ~505860): navigateTo(url, transition, isReplace) resolves
     `getTransitionObject(transition, Default)`, navigateBack(transition) `getTransitionObject(transition)` (null default);
   - OutSystemsReactView.js `BaseNavigationCallbacks` (goTo: location state `{ transition }`, push or replace; goBack /
     goForward / goOffset: `Root.transitionOverride = transition` when one is given) and `Root` (getTransition,
     `animate: !!transition.name`, `timeout: animate ? 300 : 0`, TransitionGroup / CSSTransition keyed by location.key);
   - OutSystemsReactView.js `convertCssTransitionClassNames` (offset 262871): the CSSTransition class names. */

/** OS.Transitions.TransitionAnimation (OutSystems.js offset 29257). Compiled screens pass one of these. */
export enum TransitionAnimation {
  None = 0,
  Default = 1,
  Fade = 2,
  SlideFromLeft = 3,
  SlideFromRight = 4,
  SlideFromBottom = 5,
  SlideFromTop = 6,
}

/** A transition is its CSS name; '' is the runtime's empty Transition (no animation). */
export type TransitionName = string;

const NAMES: Readonly<Record<TransitionAnimation, TransitionName>> = {
  [TransitionAnimation.None]: '',
  [TransitionAnimation.Default]: '', // resolved through DEFAULT_TRANSITION below
  [TransitionAnimation.Fade]: 'fade',
  [TransitionAnimation.SlideFromLeft]: 'slide-from-left',
  [TransitionAnimation.SlideFromRight]: 'slide-from-right',
  [TransitionAnimation.SlideFromBottom]: 'slide-from-bottom',
  [TransitionAnimation.SlideFromTop]: 'slide-from-top',
};

/** `Transitions.Default`: set at app start by `setDefaultTransition(getDefaultTransition())` (OutSystems.js line 16,
    after ScreenStateCache.clear) from the app definition's `defaultTransition: "SlideFromRight"`
    (runtime-sources/UBTConnect.appDefinition.js). */
export const DEFAULT_TRANSITION: TransitionName = NAMES[TransitionAnimation.SlideFromRight];

/** Root render: `timeout: animate ? 300 : 0`. */
export const SCREEN_TRANSITION_TIMEOUT = 300;

/**
 * createTransition(animation, fallback) (Transitions module): the name for a TransitionAnimation; Default gives the app
 * default; anything else (undefined, null) gives `fallback`. A string is taken as a name.
 */
export function createTransition(
  animation: TransitionAnimation | TransitionName | null | undefined,
  fallback: TransitionName | null,
): TransitionName | null {
  if (typeof animation === 'string') return animation;
  if (animation === TransitionAnimation.Default) return DEFAULT_TRANSITION;
  if (animation === null || animation === undefined || !(animation in NAMES)) return fallback;
  return NAMES[animation];
}

/** reverseTransition (Transitions module): the transition a history navigation back uses. */
export function reverseTransition(name: TransitionName | null | undefined): TransitionName {
  switch (name ?? '') {
    case '':
      return '';
    case 'fade':
      return 'fade';
    case 'slide-from-bottom':
      return 'slide-from-top';
    case 'slide-from-left':
      return 'slide-from-right';
    case 'slide-from-right':
      return 'slide-from-left';
    case 'slide-from-top':
      return 'slide-from-bottom';
    default:
      return `${String(name)}-back`;
  }
}

/** CSSTransition class names of a transition (convertCssTransitionClassNames): `exit` is `-leave`. */
export interface TransitionClassNames {
  appear: string;
  appearActive: string;
  appearDone: string;
  enter: string;
  enterActive: string;
  enterDone: string;
  exit: string;
  exitActive: string;
  exitDone: string;
}

export function transitionClassNames(name: TransitionName): TransitionClassNames {
  return {
    appear: `${name}-appear`,
    appearActive: `${name}-appear-active`,
    appearDone: `${name}-appear-done`,
    enter: `${name}-enter`,
    enterActive: `${name}-enter-active`,
    enterDone: `${name}-enter-done`,
    exit: `${name}-leave`,
    exitActive: `${name}-leave-active`,
    exitDone: `${name}-leave-done`,
  };
}

/* ---- the transition a location carries ---- */

/** History state of a screen navigation: BaseNavigationCallbacks.urlToLocationDescriptor puts `{ transition }` in it. */
export function transitionState(name: TransitionName, state?: unknown): Record<string, unknown> {
  const base = typeof state === 'object' && state !== null ? (state as Record<string, unknown>) : {};
  return { ...base, transition: name };
}

/** sanitizeTransition of `location.state.transition`: its name, or null when the entry has none. */
function stateTransition(location: Pick<Location, 'state'> | null | undefined): TransitionName | null {
  const state: unknown = location?.state;
  if (typeof state !== 'object' || state === null || !('transition' in state)) return null;
  return typeof state.transition === 'string' ? state.transition : null;
}

/* Root.transitionOverride: set by goBack / goForward / goOffset with a transition, read by the next location change
   and cleared after it (Root componentDidMount / componentDidUpdate). */
let transitionOverride: TransitionName | null = null;

export function setTransitionOverride(name: TransitionName | null): void {
  transitionOverride = name;
}

/**
 * Root.getTransition(action, location, previousLocation) and UNSAFE_componentWillReceiveProps: the override when one
 * is set; a history navigation (POP, NAVIGATE_FROM_HISTORY_ACTION) reverses the transition the screen being left was
 * entered with; otherwise the new entry's own transition; else none. Consumes the override.
 */
export function nextTransition(
  action: NavigationType,
  location: Pick<Location, 'state'>,
  previous: Pick<Location, 'state'> | null,
): { name: TransitionName; animate: boolean } {
  let name: TransitionName;
  if (transitionOverride !== null) name = transitionOverride;
  else if (action === NavigationType.Pop) name = reverseTransition(stateTransition(previous));
  else name = stateTransition(location) ?? '';
  transitionOverride = null;
  return { name, animate: name !== '' };
}

/* ---- TransitionGroup child order ---- */

/**
 * react-transition-group `mergeChildMappings(prev, next)` (the runtime bundles v4): keeps every key of both, a leaving
 * key placed before the next key that follows it in `prev`, the others at the end. A new screen therefore comes
 * before the one it replaces (the runtime's `from: node.nextElementSibling`).
 */
export function mergeChildMappings(prev: readonly string[], next: readonly string[]): string[] {
  const nextSet = new Set(next);
  const nextKeysPending = new Map<string, string[]>();
  let pendingKeys: string[] = [];
  for (const prevKey of prev) {
    if (nextSet.has(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending.set(prevKey, pendingKeys);
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  const merged: string[] = [];
  for (const nextKey of next) {
    merged.push(...(nextKeysPending.get(nextKey) ?? []), nextKey);
  }
  merged.push(...pendingKeys);
  return merged;
}

/** Tests: a new page load. */
export function resetScreenTransition(): void {
  transitionOverride = null;
}
