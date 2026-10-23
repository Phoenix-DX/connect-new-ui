/* Session state machine (plan v2 §3.2): the status of the session in this page. Each page load starts at `starting`
   (the status is in memory, like the page); the app start resolves the stored session into a status, and the events
   below change it. Each row has a unit test (machine.test.ts).

   | From                   | Event             | To                                 | Sent by                       |
   | ---------------------- | ----------------- | ---------------------------------- | ----------------------------- |
   | starting               | appStartDone      | signedOut, needPinRegister, locked | appStartSteps.ts runAppStart  |
   |                        |                   | or unlocked: the stored session    | (session.ts markAppReady)     |
   | signedOut              | signIn            | signingIn                          | auth.ts signIn                |
   | signingIn              | postLoginDone     | needPinRegister (no PIN), unlocked | auth.ts signIn                |
   | needPinRegister        | pinRegistered     | unlocked                           | pin.ts registerPin            |
   | unlocked               | inactivityTimeout | locked                             | pin.ts lock (LockHost)        |
   | locked                 | pinVerified       | unlocked                           | pin.ts verifyPin              |
   | signingIn, signed in   | signOut           | signedOut                          | auth.ts signOut (401, Logout) |
   | signingIn, signed in   | signedOutRemotely | signedOut                          | auth.ts signedOutRemotely     |
   | not starting/signingIn | userChanged       | the status of the new user         | session.ts emit (mock)        |

   Any other event leaves the status as it is (the same object). No event leads to `policiesPending` yet: §3.2 has no
   row for it, and the pending policies stay in UBTConnect.App_Policies_HasPolicyToAccept.
   `userChanged` is not a row of §3.2: the stored session user of the mock identity provider can change outside the
   sign-in flow (session.ts setSignedInUser from testSession.ts and tests, another tab of the device), and the status
   follows it; the same user keeps the status.
   This module imports nothing. The selectors that read it are in session.ts. */

export type SessionStatus =
  | { status: 'starting' }
  | { status: 'signedOut' }
  | { status: 'signingIn' }
  | { status: 'needPinRegister'; userId: string }
  | { status: 'locked'; userId: string; returnTo: string }
  | { status: 'policiesPending'; userId: string }
  | { status: 'unlocked'; userId: string };

/** What a signed-in user still needs on this device, read as the app-start PIN check reads it (pin.ts pinCheck and
    startup.ts pinUnlockRedirect): `register` = PIN_Use and no local PIN; `unlock` = PIN_Use, a local PIN, and this tab
    did not unlock (PIN_HasUnlocked false); `none` otherwise. */
export type PinNeed = 'none' | 'register' | 'unlock';

/** The stored session that a status is resolved from. */
export interface SessionFacts {
  userId: string | null;
  pinNeed: PinNeed;
  /** The location of the page (path and query) when the status is resolved: where an unlock returns. */
  returnTo: string;
}

export type SessionEvent =
  // OnApplicationReady finished (appStartSteps.ts runAppStart)
  | ({ type: 'appStartDone' } & SessionFacts)
  // "Login with UBT One" (auth.ts signIn)
  | { type: 'signIn' }
  // the post-login calls finished, Connect_SetLoggedContext(True) (auth.ts signIn)
  | { type: 'postLoginDone'; userId: string; needPinRegister: boolean }
  // Pincode_Register confirmed (pin.ts registerPin)
  | { type: 'pinRegistered' }
  // PIN_IsLocked set: the inactivity timeout, or Pincode_Unlock with In_ForceVisible (pin.ts lock)
  | { type: 'inactivityTimeout'; returnTo: string }
  // Pincode_Unlock OnUnlockSuccess (pin.ts verifyPin)
  | { type: 'pinVerified' }
  // Connect_Logout (auth.ts signOut)
  | { type: 'signOut' }
  // Connect_Logout because the server ended the session: ShowExceptionMessage with ForceLogout (auth.ts
  // signedOutRemotely)
  | { type: 'signedOutRemotely' }
  // the stored session user of the mock identity provider, at each change of the session store (session.ts emit)
  | ({ type: 'userChanged' } & SessionFacts);

const userIdOf = (state: SessionStatus): string | null => ('userId' in state ? state.userId : null);

/** The status of a stored session: rows 1 to 4 of §3.2. */
function resolveStatus({ userId, pinNeed, returnTo }: SessionFacts): SessionStatus {
  if (userId === null) return { status: 'signedOut' };
  if (pinNeed === 'register') return { status: 'needPinRegister', userId };
  if (pinNeed === 'unlock') return { status: 'locked', userId, returnTo };
  return { status: 'unlocked', userId };
}

/** The next status. Pure: an event that the table does not list for the status returns the status itself. */
export function transition(state: SessionStatus, event: SessionEvent): SessionStatus {
  switch (event.type) {
    case 'appStartDone':
      return state.status === 'starting' ? resolveStatus(event) : state;
    case 'signIn':
      return state.status === 'signedOut' ? { status: 'signingIn' } : state;
    case 'postLoginDone':
      if (state.status !== 'signingIn') return state;
      return event.needPinRegister
        ? { status: 'needPinRegister', userId: event.userId }
        : { status: 'unlocked', userId: event.userId };
    case 'pinRegistered':
      return state.status === 'needPinRegister' ? { status: 'unlocked', userId: state.userId } : state;
    case 'inactivityTimeout':
      return state.status === 'unlocked' ? { status: 'locked', userId: state.userId, returnTo: event.returnTo } : state;
    case 'pinVerified':
      return state.status === 'locked' ? { status: 'unlocked', userId: state.userId } : state;
    case 'signOut':
    case 'signedOutRemotely':
      return state.status === 'starting' || state.status === 'signedOut' ? state : { status: 'signedOut' };
    case 'userChanged':
      // while starting, the app start resolves the session; while signing in, the post-login step does
      if (state.status === 'starting' || state.status === 'signingIn') return state;
      return event.userId === userIdOf(state) ? state : resolveStatus(event);
  }
}

const STARTING: SessionStatus = { status: 'starting' };
let current: SessionStatus = STARTING;
const listeners = new Set<() => void>();

function setStatus(next: SessionStatus): void {
  if (next === current) return;
  current = next;
  for (const listener of [...listeners]) listener();
}

export const getSessionStatus = (): SessionStatus => current;

/** Applies an event to the status of this page; the listeners hear only a change. */
export function sendSessionEvent(event: SessionEvent): void {
  setStatus(transition(current, event));
}

/** Back to `starting`, as a new page load (appStartSteps.ts resetAppStart, tests). */
export function resetSessionStatus(): void {
  setStatus(STARTING);
}

export function subscribeSessionStatus(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
