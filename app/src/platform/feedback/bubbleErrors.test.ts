import { describe, expect, it, vi } from 'vitest';
import {
  CommunicationException,
  NotRegisteredException,
  SystemException,
  UserException,
  isUserException,
  raiseToFlowHandler,
} from '@/legacy/os/exceptions';
import { raiseBubbledToFlowHandler } from './bubbleErrors';

vi.mock('@/legacy/os/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/legacy/os/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));

const raised = (): unknown => vi.mocked(raiseToFlowHandler).mock.calls.at(-1)?.[0];

describe('raiseBubbledToFlowHandler', () => {
  it('raises a NotRegisteredException as it is', () => {
    const error = new NotRegisteredException('Not registered');
    raiseBubbledToFlowHandler(error);
    expect(raised()).toBe(error);
  });

  it('raises a CommunicationException as BubbleCommunicationException with its message', () => {
    raiseBubbledToFlowHandler(new CommunicationException('The server did not answer.'));
    expect(isUserException(raised(), 'UBTConnect.BubbleCommunicationException')).toBe(true);
    expect((raised() as Error).message).toBe('The server did not answer.');
  });

  it('raises any other error that is not a system exception as BubbleGenericException', () => {
    raiseBubbledToFlowHandler(new Error('Index out of range'));
    expect(isUserException(raised(), 'UBTConnect.BubbleGenericException')).toBe(true);
    expect((raised() as Error).message).toBe('Index out of range');
    raiseBubbledToFlowHandler(new UserException('No seats left', 'UBTConnect.SomeUserException'));
    expect(isUserException(raised(), 'UBTConnect.BubbleGenericException')).toBe(true);
  });

  it('raises a system exception as it is', () => {
    const error = new SystemException('System failure');
    raiseBubbledToFlowHandler(error);
    expect(raised()).toBe(error);
  });
});
