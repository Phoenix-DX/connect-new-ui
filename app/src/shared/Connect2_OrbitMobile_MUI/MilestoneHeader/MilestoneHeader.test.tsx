import { act, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { DataBaseException } from '../../../lib/os-exceptions';
import { raiseToFlowHandler } from '../../../shell/exceptions';
import { testCapturedVariants } from '../../test/capturedVariants';
import { syncOrbitMilestoneTypes } from '../lib/actions';
import { MilestoneHeader } from './MilestoneHeader';
import * as stories from './MilestoneHeader.stories';

vi.mock('../../../shell/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('../../../shell/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('MilestoneHeader', () => {
  testCapturedVariants(stories, captures);

  it('a type id without a LocalOrbitMilestoneType record: Entity.get raises to the flow handler, once; empty icon and " ()" suffix', () => {
    vi.mocked(raiseToFlowHandler).mockClear();
    const { container } = render(
      <MilestoneHeader inEventName="Event" inMilestoneName="Meal" inOrbitMilestoneTypeId="meal-host" />,
    );
    expect(container.querySelector('i')?.className).toBe('icon ');
    expect(container.querySelector('.orbit-milestone-sub-header span')?.textContent).toBe('Meal ()');
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    const [error] = vi.mocked(raiseToFlowHandler).mock.calls[0] ?? [];
    expect(error).toBeInstanceOf(DataBaseException);
    expect((error as Error).message).toBe('OSUSR_HQ9_LOCALORBITMILESTONETYPE with id meal-host was not found');
  });

  it('reads the record again when the app start syncs the milestone types after the first render (CR-MilestoneDetail-4)', async () => {
    await syncOrbitMilestoneTypes([]);
    const { container } = render(
      <MilestoneHeader inEventName="Event" inMilestoneName="Home" inOrbitMilestoneTypeId="accommodation-host" />,
    );
    expect(container.querySelector('.orbit-milestone-sub-header span')?.textContent).toBe('Home ()');
    await act(async () => {
      await syncOrbitMilestoneTypes([{ Id: 'accommodation-host', Type: 'Host', MainIcon: 'orbit-icon-accommodation' }]);
    });
    expect(container.querySelector('.orbit-milestone-sub-header span')?.textContent).toBe('Home (Host)');
    expect(container.querySelector('i')?.className).toBe('icon orbit-icon-accommodation');
    await act(async () => {
      await syncOrbitMilestoneTypes([]);
    });
  });

  it('defaults: empty names', () => {
    const { container } = render(<MilestoneHeader />);
    expect(container.querySelector('.full-width')?.textContent).toBe('');
  });
});
