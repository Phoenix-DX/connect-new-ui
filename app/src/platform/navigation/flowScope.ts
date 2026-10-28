import { useLayoutEffect, useState } from 'react';
import { ControllerDisposedException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useIsCurrentEntry } from './osNavigate';

/* The flow scope of a screen or block instance: what the TST runtime does with a flow after the user left
   (migration/clarify/review/item8-w23-errorpage.md §1, rules R1–R6; design A of item8-solution.md §2, user
   2026-10-28). "Left" has two forms, as on TST:
     disposed        the instance unmounted (the controller is disposed: isDisposed W533101, ensureControllerAlive
                     W534313). R1, R3.
     out of context  its history entry is not the one the router shows (isOutOfContext W518580). R4, R6.
   A leaving screen stays mounted for its transition: it is out of context at once, and disposed after the unmount. */

/** The flow scope of a screen or block instance. A flow hook gets it from `useFlowState` (`flow`) or `useFlowScope`. */
export interface FlowScope<E = undefined> {
  /** True from the mount until the unmount. A StrictMode remount keeps it true. */
  alive: () => boolean;
  /** True while the history entry of the instance is the one the router shows (R4, R6). */
  active: () => boolean;
  /** A data action or a screen aggregate (R1, callServerDataSource W533101; executeScreenClientAggregate W535250).
      When the instance is disposed at the answer, the answer and the failure are dropped: the call throws
      ControllerDisposedException (an IgnorableSystemException), so nothing after it in the flow runs. */
  fetch: <T>(call: Promise<T>) => Promise<T>;
  /** An own client action of the screen or block (R3): ensureControllerAlive (W534313) at its start. After the
      unmount, a call throws ControllerDisposedException (W49870). */
  own: <A extends unknown[], R>(action: (...args: A) => R) => (...args: A) => R;
  /** The block events (R3): each one checks `alive()`, then calls the newest handler of the parent. An optional
      handler that the parent did not give does nothing. */
  events: E;
  /** A flow that a widget event starts: runs it and sends an unhandled error to the flow handler with this scope
      (R6 context). A synchronous throw goes there too, for example the ControllerDisposedException of an own action
      (`flow.own`) that a widget calls after the unmount (user, 2026-10-28, S3b Q1 (a)). */
  run: (flow: () => Promise<void>) => void;
  /** As `run`, for a widget that awaits the flow (a list waits for its OnScrollEnding, a swipe item keeps its class
      until the flow ends). It returns the promise of the flow: the value of the flow, or `undefined` after it sent
      the error (a rejection or a synchronous throw) to the flow handler with this scope. It never rejects. */
  runAwaited: <T>(flow: () => Promise<T>) => Promise<T | undefined>;
}

type Handler = (...args: unknown[]) => unknown;

/** The scope of one instance, and the two inputs that its hook sets from its effects. */
interface FlowInstance<E> {
  scope: FlowScope<E>;
  setDisposed: (disposed: boolean) => void;
  setEvents: (events: E | undefined) => void;
}

function createFlowInstance<E>(active: () => boolean, initialEvents: E | undefined): FlowInstance<E> {
  let disposed = false;
  let events = initialEvents;
  const alive = (): boolean => !disposed;
  const ensureControllerAlive = (): void => {
    if (disposed) throw new ControllerDisposedException();
  };
  const eventsProxy = new Proxy(
    {},
    {
      get: (_target, name) => {
        if (typeof name === 'symbol') return undefined;
        return (...args: unknown[]): unknown => {
          if (disposed) return undefined;
          const handler = (events as Record<string, unknown> | undefined)?.[name];
          return typeof handler === 'function' ? (handler as Handler)(...args) : undefined;
        };
      },
    },
  ) as E;
  const scope: FlowScope<E> = {
    alive,
    active,
    fetch: async <T>(call: Promise<T>): Promise<T> => {
      let value: T;
      try {
        value = await call;
      } catch (error) {
        ensureControllerAlive();
        throw error;
      }
      ensureControllerAlive();
      return value;
    },
    own:
      <A extends unknown[], R>(action: (...args: A) => R) =>
      (...args: A): R => {
        ensureControllerAlive();
        return action(...args);
      },
    events: eventsProxy,
    run: (flow) => {
      void runAwaited(flow);
    },
    runAwaited,
  };
  /* The flow starts at once, in the call of the widget event, as before; only its error goes to the handler. */
  function runAwaited<T>(flow: () => Promise<T>): Promise<T | undefined> {
    const raise = (error: unknown): undefined => {
      raiseToFlowHandler(error, scope);
      return undefined;
    };
    try {
      return flow().catch(raise);
    } catch (error) {
      raise(error);
      return Promise.resolve(undefined);
    }
  }
  return {
    scope,
    setDisposed: (next) => {
      disposed = next;
    },
    setEvents: (next) => {
      events = next;
    },
  };
}

/**
 * The flow scope of a screen or block instance that keeps no reducer state (a `useViewState` or a query hook only).
 * `useFlowState` calls it and returns it as `flow`. `events` are the handlers that the parent gives (the block events).
 * The scope object is the same for the life of the instance.
 */
export function useFlowScope<E = undefined>(events?: E): FlowScope<E> {
  const active = useIsCurrentEntry();
  const [instance] = useState(() => createFlowInstance<E>(active, events));
  useLayoutEffect(() => {
    instance.setEvents(events);
  });
  useLayoutEffect(() => {
    // StrictMode (dev) runs this effect again on the same instance: the scope is then alive again.
    instance.setDisposed(false);
    return () => {
      instance.setDisposed(true);
    };
  }, [instance]);
  return instance.scope;
}
