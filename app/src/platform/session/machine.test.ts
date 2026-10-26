import { beforeEach, describe, expect, test, vi } from 'vitest';
import {
  getSessionStatus,
  resetSessionStatus,
  sendSessionEvent,
  subscribeSessionStatus,
  transition,
  type SessionEvent,
  type SessionFacts,
  type SessionStatus,
} from './machine';

const USER = '990001';
const MENU = '/UBTConnect/Menu?x=1';

const starting: SessionStatus = { status: 'starting' };
const signedOut: SessionStatus = { status: 'signedOut' };
const signingIn: SessionStatus = { status: 'signingIn' };
const needPinRegister: SessionStatus = { status: 'needPinRegister', userId: USER };
const locked: SessionStatus = { status: 'locked', userId: USER, returnTo: MENU };
const policiesPending: SessionStatus = { status: 'policiesPending', userId: USER };
const unlocked: SessionStatus = { status: 'unlocked', userId: USER };

const facts = (values: Partial<SessionFacts> = {}): SessionFacts => ({
  userId: USER,
  pinNeed: 'none',
  returnTo: MENU,
  ...values,
});
const appStartDone = (values: Partial<SessionFacts> = {}): SessionEvent => ({ type: 'appStartDone', ...facts(values) });
const userChanged = (values: Partial<SessionFacts> = {}): SessionEvent => ({ type: 'userChanged', ...facts(values) });

beforeEach(() => {
  resetSessionStatus();
});

describe('transitions of plan v2 §3.2, one test per row', () => {
  test('starting → signedOut: app start done, no user', () => {
    expect(transition(starting, appStartDone({ userId: null }))).toEqual(signedOut);
  });

  test('starting → needPinRegister: app start done, user, PIN_Use, no PIN', () => {
    expect(transition(starting, appStartDone({ pinNeed: 'register' }))).toEqual(needPinRegister);
  });

  test('starting → locked: app start done, user, PIN, not unlocked (back to the opened location)', () => {
    expect(transition(starting, appStartDone({ pinNeed: 'unlock' }))).toEqual(locked);
  });

  test('starting → unlocked: app start done, user, unlocked', () => {
    expect(transition(starting, appStartDone())).toEqual(unlocked);
  });

  test('signedOut → signingIn: sign in', () => {
    expect(transition(signedOut, { type: 'signIn' })).toEqual(signingIn);
  });

  test('signingIn → needPinRegister: post-login calls done, no PIN', () => {
    expect(transition(signingIn, { type: 'postLoginDone', userId: USER, needPinRegister: true })).toEqual(
      needPinRegister,
    );
  });

  test('signingIn → unlocked: post-login calls done, PIN', () => {
    expect(transition(signingIn, { type: 'postLoginDone', userId: USER, needPinRegister: false })).toEqual(unlocked);
  });

  test('needPinRegister → unlocked: PIN registered', () => {
    expect(transition(needPinRegister, { type: 'pinRegistered' })).toEqual(unlocked);
  });

  test('unlocked → locked: inactivity timeout, back to where it locked', () => {
    expect(transition(unlocked, { type: 'inactivityTimeout', returnTo: MENU })).toEqual(locked);
  });

  test('locked → unlocked: PIN verified', () => {
    expect(transition(locked, { type: 'pinVerified' })).toEqual(unlocked);
  });

  test.each([signingIn, needPinRegister, locked, policiesPending, unlocked])(
    '$status → signedOut: sign out, 401, SecurityException',
    (state) => {
      expect(transition(state, { type: 'signOut' })).toEqual(signedOut);
    },
  );

  test.each([signingIn, needPinRegister, locked, policiesPending, unlocked])(
    '$status → signedOut: the server ended the session (signedOutRemotely), as signOut',
    (state) => {
      expect(transition(state, { type: 'signedOutRemotely' })).toEqual(signedOut);
      expect(transition(state, { type: 'signedOutRemotely' })).toEqual(transition(state, { type: 'signOut' }));
    },
  );
});

describe('userChanged: the mock identity provider changes the session user (not a row of §3.2)', () => {
  test('while starting or signing in the status waits for the app start or the post-login step', () => {
    expect(transition(starting, userChanged())).toBe(starting);
    expect(transition(signingIn, userChanged())).toBe(signingIn);
  });

  test('the same user keeps the status', () => {
    expect(transition(unlocked, userChanged({ pinNeed: 'unlock' }))).toBe(unlocked);
    expect(transition(signedOut, userChanged({ userId: null }))).toBe(signedOut);
  });

  test('no user: signedOut', () => {
    expect(transition(locked, userChanged({ userId: null }))).toEqual(signedOut);
  });

  test('a new user: the status of the stored session, as the app start resolves it', () => {
    expect(transition(signedOut, userChanged({ pinNeed: 'register' }))).toEqual(needPinRegister);
    expect(transition(signedOut, userChanged({ pinNeed: 'unlock' }))).toEqual(locked);
    expect(transition(needPinRegister, userChanged({ userId: '123' }))).toEqual({ status: 'unlocked', userId: '123' });
  });
});

describe('an event that the table does not list keeps the status (the same object)', () => {
  const cases: { from: SessionStatus; event: SessionEvent }[] = [
    { from: unlocked, event: appStartDone({ userId: null }) },
    { from: starting, event: { type: 'signIn' } },
    { from: unlocked, event: { type: 'signIn' } },
    { from: signedOut, event: { type: 'postLoginDone', userId: USER, needPinRegister: false } },
    { from: unlocked, event: { type: 'pinRegistered' } },
    { from: locked, event: { type: 'pinRegistered' } },
    { from: needPinRegister, event: { type: 'inactivityTimeout', returnTo: MENU } },
    { from: locked, event: { type: 'inactivityTimeout', returnTo: '/UBTConnect/Notes' } },
    { from: signedOut, event: { type: 'inactivityTimeout', returnTo: MENU } },
    { from: unlocked, event: { type: 'pinVerified' } },
    { from: policiesPending, event: { type: 'pinVerified' } },
    { from: starting, event: { type: 'signOut' } },
    { from: signedOut, event: { type: 'signOut' } },
    { from: starting, event: { type: 'signedOutRemotely' } },
    { from: signedOut, event: { type: 'signedOutRemotely' } },
  ];

  test.each(cases)('$from.status, $event.type', ({ from, event }) => {
    expect(transition(from, event)).toBe(from);
  });
});

describe('the status of the page', () => {
  test('starts at starting and follows the events', () => {
    expect(getSessionStatus()).toEqual(starting);
    sendSessionEvent(appStartDone({ pinNeed: 'register' }));
    sendSessionEvent({ type: 'pinRegistered' });
    expect(getSessionStatus()).toEqual(unlocked);
  });

  test('the listeners hear a change only', () => {
    const listener = vi.fn();
    const stop = subscribeSessionStatus(listener);
    sendSessionEvent({ type: 'signOut' }); // starting: no change
    expect(listener).not.toHaveBeenCalled();
    sendSessionEvent(appStartDone());
    expect(listener).toHaveBeenCalledTimes(1);
    stop();
    sendSessionEvent({ type: 'signOut' });
    expect(listener).toHaveBeenCalledTimes(1);
  });

  test('a new page load starts again', () => {
    sendSessionEvent(appStartDone());
    resetSessionStatus();
    expect(getSessionStatus()).toEqual(starting);
  });
});
