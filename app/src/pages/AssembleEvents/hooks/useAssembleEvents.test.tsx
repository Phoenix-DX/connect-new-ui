import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchSubdivisionName } from '@/api/locality';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useAssembleEvents, type AssembleEventsBlockInputs } from './useAssembleEvents';
import { fetchUserSubdivision, type UserSubdivision } from './userSubdivision';

vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchSubdivisionName: vi.fn(),
}));
vi.mock('./userSubdivision', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./userSubdivision')>()),
  fetchUserSubdivision: vi.fn(),
}));
/* useFlowState sends a rejection of OnReady to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The OnReady of ScreenBlock_AssembleEvents: the SubdivisionName of the title. The supper meetings are fictional. */
const USER_HALL: UserSubdivision = { id: '1210', name: 'Zapiola (Main Meeting Room)' };
const OWN: AssembleEventsBlockInputs = { subdivisionId: '0', showBackNavigation: false, isUserSubdivision: true };
const OTHER: AssembleEventsBlockInputs = { subdivisionId: '9202', showBackNavigation: true, isUserSubdivision: false };

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
const renderFlows = (inputs: AssembleEventsBlockInputs, strict = false) =>
  renderHook(() => useAssembleEvents(inputs), { wrapper: strict ? strictWrapper : wrapper });

beforeEach(() => {
  vi.mocked(fetchUserSubdivision).mockResolvedValue(USER_HALL);
  vi.mocked(fetchSubdivisionName).mockResolvedValue('Patagonia');
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useAssembleEvents', () => {
  it("OnReady with SubdivisionId 0: the name of the user's supper meeting", async () => {
    const { result } = renderFlows(OWN);
    expect(result.current.subdivisionName).toBe('');
    await settle();
    expect(result.current.subdivisionName).toBe('Zapiola (Main Meeting Room)');
    expect(fetchSubdivisionName).not.toHaveBeenCalled();
  });

  it('OnReady with another SubdivisionId: GetSubdivisionName with the inputs of the block', async () => {
    const { result } = renderFlows(OTHER);
    await settle();
    expect(fetchSubdivisionName).toHaveBeenCalledWith({
      SubdivisionId: '9202',
      ShowBackNavigation: true,
      IsUserSubdivision: false,
    });
    expect(fetchUserSubdivision).not.toHaveBeenCalled();
    expect(result.current.subdivisionName).toBe('Patagonia');
  });

  it('StrictMode: one call, and the name comes', async () => {
    const { result } = renderFlows(OTHER, true);
    await settle();
    expect(fetchSubdivisionName).toHaveBeenCalledTimes(1);
    expect(result.current.subdivisionName).toBe('Patagonia');
  });

  it('a failure goes to the flow handler', async () => {
    const error = new Error('Service Interruption');
    vi.mocked(fetchSubdivisionName).mockRejectedValueOnce(error);
    const { result } = renderFlows(OTHER);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current.subdivisionName).toBe('');
  });

  it('W23: an unmount while the call is pending skips the state write; the call and its error still run', async () => {
    let reject: (error: unknown) => void = () => undefined;
    vi.mocked(fetchSubdivisionName).mockReturnValueOnce(
      new Promise<string>((_, rej) => {
        reject = rej;
      }),
    );
    const { result, unmount } = renderFlows(OTHER);
    await settle();
    unmount();
    const error = new Error('late');
    reject(error);
    await settle();
    expect(fetchSubdivisionName).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current.subdivisionName).toBe('');
  });
});
