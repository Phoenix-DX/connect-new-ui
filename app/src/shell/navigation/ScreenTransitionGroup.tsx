import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import {
  UNSAFE_LocationContext as LocationContext,
  useLocation,
  useNavigationType,
  useOutlet,
  type Location,
  type NavigationType,
} from 'react-router';
import {
  mergeChildMappings,
  nextTransition,
  SCREEN_TRANSITION_TIMEOUT,
  transitionClassNames,
  type TransitionClassNames,
  type TransitionName,
} from './screenTransition';
import {
  dispatchTransitionEnd,
  dispatchTransitionStart,
  getComputedTransitionDuration,
  notifyScreenTransitionEnd,
} from './transitionEvents';

/* The runtime Root render (OutSystemsReactView.js `OutSystems/ReactView/Root`, render, offset ~267500):
     TransitionGroup { id: "transitionContainer", childFactory: clone with { classNames, timeout } }
       CSSTransition { key: location.key, classNames: convertCssTransitionClassNames(transition.name),
                       timeout: animate ? 300 : 0, onExited: Root.onTransitionEnded } > the screen
   and each screen's root node is `<div class="active-screen screen-container">` (BaseWebScreen.getRootNodeProperties,
   offset 197685), losing `active-screen` when it is left (BaseWebScreen.onNavigationStart, offset 199633).
   ScreenTransitionGroup renders the screen containers of #transitionContainer (AppFrame) the same way: one container
   per history entry, the new one before the one it replaces (mergeChildMappings), both in the document until the old
   one has left. The leaving screen keeps its own location (React Router's LocationContext is frozen per entry), so it
   does not re-render with the new URL. Class names, timing and the NavigationHandler transition events:
   ScreenContainer below. */

interface Entry {
  key: string;
  element: ReactNode;
  context: { location: Location; navigationType: NavigationType };
}

interface GroupState {
  /** the entry the router shows (entering or entered) */
  current: Entry;
  /** keys in document order */
  order: string[];
  entries: ReadonlyMap<string, Entry>;
  leaving: ReadonlySet<string>;
  transition: { name: TransitionName; animate: boolean };
  /** the current entry was mounted with the group: no transition (the page's first screen) */
  initial: boolean;
}

function entryOf(location: Location, navigationType: NavigationType, element: ReactNode): Entry {
  return { key: location.key, element, context: { location, navigationType } };
}

function initialState(entry: Entry): GroupState {
  return {
    current: entry,
    order: [entry.key],
    entries: new Map([[entry.key, entry]]),
    leaving: new Set(),
    transition: { name: '', animate: false },
    initial: true,
  };
}

/** TransitionGroup.getDerivedStateFromProps for a new location key. */
function advance(state: GroupState, entry: Entry, transition: GroupState['transition']): GroupState {
  const order = mergeChildMappings(state.order, [entry.key]);
  const entries = new Map(state.entries);
  entries.set(entry.key, entry);
  return {
    current: entry,
    order,
    entries,
    leaving: new Set(order.filter((key) => key !== entry.key)),
    transition,
    initial: false,
  };
}

/** TransitionGroup.handleExited: the child that has left is removed. */
function removeEntry(state: GroupState, key: string): GroupState {
  if (!state.leaving.has(key)) return state;
  const entries = new Map(state.entries);
  entries.delete(key);
  const leaving = new Set(state.leaving);
  leaving.delete(key);
  return { ...state, order: state.order.filter((k) => k !== key), entries, leaving };
}

export interface ScreenTransitionGroupProps {
  /** Resolves when the screen of `location` can render at once (its code is loaded); null when it already can. The
      runtime's router loads a screen before the location changes (OutSystemsReactView.js Router: createHistory with
      the ScreenLoader), so the transition starts with the new screen rendered, never with an empty container. */
  prepare?: (location: Location) => Promise<void> | null;
  /** False for a location that shows no screen (the clone's `/` redirect): the next location then replaces it as the
      page's first screen, without a transition. */
  isScreen?: (location: Location) => boolean;
}

const always = () => true;

export function ScreenTransitionGroup({ prepare, isScreen = always }: ScreenTransitionGroupProps): ReactNode {
  const location = useLocation();
  const navigationType = useNavigationType();
  const outlet = useOutlet();
  const [state, setState] = useState(() => initialState(entryOf(location, navigationType, outlet)));

  /* Phase 2 of each container (the callbacks react-transition-group runs after its ENTERING / EXITING re-render), in
     document order, after every container of the commit ran phase 1. */
  const queue = useRef<(() => void)[]>([]);
  const schedule = useCallback((step: () => void) => {
    queue.current.push(step);
  }, []);
  useLayoutEffect(() => {
    const steps = queue.current;
    queue.current = [];
    for (const step of steps) step();
  });

  const displayed = useRef(state);
  useLayoutEffect(() => {
    displayed.current = state;
  });

  // a new history entry: Root.UNSAFE_componentWillReceiveProps (transition) + TransitionGroup (children)
  useLayoutEffect(() => {
    if (location.key === displayed.current.current.key) return undefined;
    const entry = entryOf(location, navigationType, outlet);
    const go = () => {
      const shown = displayed.current;
      if (shown.initial && !isScreen(shown.current.context.location)) {
        setState(initialState(entry));
        return;
      }
      const transition = nextTransition(navigationType, location, shown.current.context.location);
      setState((s) => advance(s, entry, transition));
    };
    const pending = prepare?.(location) ?? null;
    if (!pending) {
      go();
      return undefined;
    }
    let live = true;
    void pending.then(() => {
      if (live) go();
    });
    return () => {
      live = false;
    };
  }, [location, navigationType, outlet, prepare, isScreen]);

  const onExited = useCallback((key: string) => {
    setState((s) => removeEntry(s, key));
    notifyScreenTransitionEnd(); // Root.onTransitionEnded
  }, []);

  const names = transitionClassNames(state.transition.name);
  const timeout = state.transition.animate ? SCREEN_TRANSITION_TIMEOUT : 0;
  return state.order.map((key) => {
    const entry = state.entries.get(key);
    if (!entry) return null;
    const element = key === state.current.key && key === location.key ? outlet : entry.element;
    return (
      <ScreenContainer
        key={key}
        entryKey={key}
        in={!state.leaving.has(key)}
        initial={state.initial && key === state.current.key}
        names={names}
        timeout={timeout}
        schedule={schedule}
        onExited={onExited}
      >
        <LocationContext.Provider value={entry.context}>{element}</LocationContext.Provider>
      </ScreenContainer>
    );
  });
}

type Status = 'exited' | 'entering' | 'entered' | 'exiting';
type Kind = 'appear' | 'enter' | 'exit';
type Phase = 'base' | 'active' | 'done';

interface ScreenContainerProps {
  entryKey: string;
  in: boolean;
  /** mounted with the group: shown as entered, no classes (Transition with appear false inside a mounting group) */
  initial: boolean;
  names: TransitionClassNames;
  timeout: number;
  schedule: (step: () => void) => void;
  onExited: (key: string) => void;
  children: ReactNode;
}

function classNameOf(names: TransitionClassNames, kind: Kind, phase: Phase): string {
  const suffix = phase === 'base' ? '' : phase === 'active' ? 'Active' : 'Done';
  return names[`${kind}${suffix}` as keyof TransitionClassNames];
}

/**
 * One screen container: react-transition-group v4 Transition + CSSTransition as the runtime uses them, with
 * NavigationHandler's Transition.safeSetState patch (NavigationHandler.controller.js:1336-1438).
 * Enter (a new entry): `<name>-enter` → (phase 2) reflow, `<name>-enter-active`, then `dx-navigation-transition-start`
 * `{ from: nextElementSibling (the screen being left), to: this container, duration }` → after `duration`:
 * `<name>-enter` and `-enter-active` replaced by `<name>-enter-done`.
 * Exit (the entry is left): `active-screen` removed, the enter classes removed, `<name>-leave` → (phase 2) reflow,
 * `<name>-leave-active` → after `duration`: `dx-navigation-transition-end` `{ from: this container, to:
 * previousElementSibling, duration }`, the leave classes replaced by `<name>-leave-done`, then the container is removed.
 * `duration` = `--dx-screen-transition-duration` of the container (300ms, UBTConnectLibrary.css) or the timeout.
 */
function ScreenContainer(props: ScreenContainerProps): ReactNode {
  const node = useRef<HTMLDivElement>(null);
  const status = useRef<Status>(props.initial ? 'entered' : 'exited');
  const applied = useRef<Record<Kind, Partial<Record<Phase, string>>>>({ appear: {}, enter: {}, exit: {} });
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const alive = useRef(true);
  const latest = useRef(props);
  useLayoutEffect(() => {
    latest.current = props;
  });
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  const isIn = props.in;
  useLayoutEffect(() => {
    const el = node.current;
    if (!el) return;
    // CSSTransition.addClass: the class names of the current props; the active phase forces a reflow first
    const addClass = (kind: Kind, phase: Phase) => {
      const className = classNameOf(latest.current.names, kind, phase);
      if (phase === 'active') void el.scrollTop;
      if (className) {
        applied.current[kind][phase] = className;
        el.classList.add(className);
      }
    };
    const removeClasses = (kind: Kind) => {
      for (const className of Object.values(applied.current[kind])) el.classList.remove(className);
      applied.current[kind] = {};
    };
    const later = (duration: number, step: () => void) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (alive.current) step();
      }, duration);
    };
    const duration = () => getComputedTransitionDuration(el) || latest.current.timeout;

    if (isIn && (status.current === 'exited' || status.current === 'exiting')) {
      clearTimeout(timer.current);
      removeClasses('exit'); // onEnter
      addClass('enter', 'base');
      status.current = 'entering';
      latest.current.schedule(() => {
        if (status.current !== 'entering') return;
        addClass('enter', 'active'); // onEntering
        const ms = duration();
        dispatchTransitionStart({ from: el.nextElementSibling, to: el, duration: ms });
        later(ms, () => {
          status.current = 'entered';
          removeClasses('enter'); // onEntered
          addClass('enter', 'done');
        });
      });
    } else if (!isIn && (status.current === 'entering' || status.current === 'entered')) {
      clearTimeout(timer.current);
      el.classList.remove('active-screen'); // BaseWebScreen.onNavigationStart
      removeClasses('appear'); // onExit
      removeClasses('enter');
      addClass('exit', 'base');
      status.current = 'exiting';
      latest.current.schedule(() => {
        if (status.current !== 'exiting') return;
        addClass('exit', 'active'); // onExiting
        const ms = duration();
        later(ms, () => {
          status.current = 'exited';
          dispatchTransitionEnd({ from: el, to: el.previousElementSibling, duration: ms });
          removeClasses('exit'); // onExited
          addClass('exit', 'done');
          latest.current.onExited(latest.current.entryKey);
        });
      });
    }
  }, [isIn]);

  return (
    <div ref={node} className="active-screen screen-container">
      {props.children}
    </div>
  );
}
