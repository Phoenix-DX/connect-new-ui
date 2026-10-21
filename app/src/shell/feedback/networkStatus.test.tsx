import { act, render, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { getClientVar, setClientVar } from '../session';
import { freshPage } from '../testSupport';
import { showCommunicationExceptionMessage } from './exceptionMessages';
import { resetFeedbackDebounce } from './feedbackMessageAutoClose';
import { FeedbackMessageHost } from './FeedbackMessageHost';
import { resetFeedbackMessages } from './feedbackStore';
import { apiCallObserver, useNetworkStatusEvents } from './networkStatus';

let pingOk = true;
const fetchMock = vi.fn(() => (pingOk ? Promise.resolve(new Response('pong')) : Promise.reject(new TypeError('x'))));

beforeEach(() => {
  freshPage();
  resetFeedbackMessages();
  resetFeedbackDebounce();
  pingOk = true;
  vi.stubGlobal('fetch', fetchMock);
});
afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

const flag = () => getClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent');
const toast = () => document.querySelector('#feedbackMessageContainer > *');

test('the initial ping, the events and the timer set App_NetworkStatus_IsOnline_IsPersistent; no toast', async () => {
  pingOk = false;
  const { unmount } = renderHook(useNetworkStatusEvents);
  await act(() => Promise.resolve());
  expect(flag()).toBe(false);
  act(() => {
    window.dispatchEvent(new Event('online'));
  });
  expect(flag()).toBe(true);
  act(() => {
    window.dispatchEvent(new Event('offline'));
  });
  expect(flag()).toBe(false);
  expect(toast()).toBeNull();
  unmount();
});

test('until the first decision the persistent flag keeps the last session value (UC:15779-15816)', () => {
  setClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent', false);
  fetchMock.mockImplementationOnce(() => new Promise<Response>(() => undefined));
  const { unmount } = renderHook(useNetworkStatusEvents);
  expect(flag()).toBe(false);
  unmount();
});

test('the flag picks the communication toast: offline "No internet connection…", online "Service Interruption"', async () => {
  render(<FeedbackMessageHost />);
  const { unmount } = renderHook(useNetworkStatusEvents);
  await act(() => Promise.resolve());
  act(() => {
    window.dispatchEvent(new Event('offline'));
  });
  act(showCommunicationExceptionMessage);
  expect(toast()?.textContent).toContain('No internet connection. Please check your network settings and try again.');
  resetFeedbackMessages();
  resetFeedbackDebounce();
  act(() => {
    window.dispatchEvent(new Event('online'));
  });
  act(showCommunicationExceptionMessage);
  expect(toast()?.textContent).toContain('Service Interruption');
  unmount();
});

test('server calls are the API URLs of the configured base', () => {
  expect(apiCallObserver('').isServerCall('/api/UBTConnect/ActionSync_Info_GetMain')).toBe(true);
  expect(apiCallObserver('').isServerCall('/UBTConnect/status/network-ping.txt?d=1')).toBe(false);
  const bff = apiCallObserver('https://bff.example.test/connect');
  expect(bff.isServerCall('https://bff.example.test/connect/api/UBT_AppManager/ActionX')).toBe(true);
  expect(bff.isServerCall('/api/UBT_AppManager/ActionX')).toBe(false);
});
