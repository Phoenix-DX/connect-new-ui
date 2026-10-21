import { NavigationType } from 'react-router';
import { afterEach, expect, test } from 'vitest';
import {
  createTransition,
  DEFAULT_TRANSITION,
  mergeChildMappings,
  nextTransition,
  resetScreenTransition,
  reverseTransition,
  setTransitionOverride,
  transitionClassNames,
  transitionState,
  TransitionAnimation,
} from './screenTransition';

afterEach(() => {
  resetScreenTransition();
});

test('createTransition: names of the runtime Transitions module; Default is the app default (SlideFromRight)', () => {
  expect(DEFAULT_TRANSITION).toBe('slide-from-right');
  expect(createTransition(TransitionAnimation.Default, null)).toBe('slide-from-right');
  expect(createTransition(TransitionAnimation.None, null)).toBe('');
  expect(createTransition(TransitionAnimation.Fade, null)).toBe('fade');
  expect(createTransition(TransitionAnimation.SlideFromLeft, null)).toBe('slide-from-left');
  expect(createTransition(TransitionAnimation.SlideFromBottom, null)).toBe('slide-from-bottom');
  expect(createTransition(TransitionAnimation.SlideFromTop, null)).toBe('slide-from-top');
  // navigateTo: getTransitionObject(t, Default); navigateBack: getTransitionObject(t) (null fallback)
  expect(createTransition(undefined, DEFAULT_TRANSITION)).toBe('slide-from-right');
  expect(createTransition(null, null)).toBeNull();
});

test('reverseTransition: left/right and top/bottom swap, fade stays, none stays none, others get "-back"', () => {
  expect(reverseTransition('slide-from-right')).toBe('slide-from-left');
  expect(reverseTransition('slide-from-left')).toBe('slide-from-right');
  expect(reverseTransition('slide-from-bottom')).toBe('slide-from-top');
  expect(reverseTransition('slide-from-top')).toBe('slide-from-bottom');
  expect(reverseTransition('fade')).toBe('fade');
  expect(reverseTransition('')).toBe('');
  expect(reverseTransition(null)).toBe('');
  expect(reverseTransition('zoom')).toBe('zoom-back');
});

test('transitionClassNames: convertCssTransitionClassNames (exit is "-leave"), also for the empty transition', () => {
  expect(transitionClassNames('fade')).toEqual({
    appear: 'fade-appear',
    appearActive: 'fade-appear-active',
    appearDone: 'fade-appear-done',
    enter: 'fade-enter',
    enterActive: 'fade-enter-active',
    enterDone: 'fade-enter-done',
    exit: 'fade-leave',
    exitActive: 'fade-leave-active',
    exitDone: 'fade-leave-done',
  });
  expect(transitionClassNames('').enter).toBe('-enter');
});

test('nextTransition: push/replace use the entry state, POP reverses the leaving entry, an override wins once', () => {
  const entered = { state: transitionState('slide-from-right') };
  expect(nextTransition(NavigationType.Push, entered, null)).toEqual({ name: 'slide-from-right', animate: true });
  expect(nextTransition(NavigationType.Replace, { state: null }, null)).toEqual({ name: '', animate: false });
  expect(nextTransition(NavigationType.Pop, { state: null }, entered)).toEqual({
    name: 'slide-from-left',
    animate: true,
  });
  expect(nextTransition(NavigationType.Pop, { state: null }, { state: transitionState('fade') }).name).toBe('fade');
  expect(nextTransition(NavigationType.Pop, { state: null }, { state: undefined }).name).toBe('');
  setTransitionOverride('');
  expect(nextTransition(NavigationType.Pop, { state: null }, entered)).toEqual({ name: '', animate: false });
  expect(nextTransition(NavigationType.Pop, { state: null }, entered).name).toBe('slide-from-left');
});

test('transitionState keeps the other state fields', () => {
  expect(transitionState('fade', { a: 1 })).toEqual({ a: 1, transition: 'fade' });
  expect(transitionState('fade', 'x')).toEqual({ transition: 'fade' });
});

test('mergeChildMappings: the new child first, leaving children after, in their order (react-transition-group v4)', () => {
  expect(mergeChildMappings(['a'], ['b'])).toEqual(['b', 'a']);
  expect(mergeChildMappings(['c', 'a'], ['d'])).toEqual(['d', 'c', 'a']);
  // a leaving key that comes back keeps the keys that preceded it before it
  expect(mergeChildMappings(['c', 'b'], ['b'])).toEqual(['c', 'b']);
  expect(mergeChildMappings(['a'], ['a'])).toEqual(['a']);
});
