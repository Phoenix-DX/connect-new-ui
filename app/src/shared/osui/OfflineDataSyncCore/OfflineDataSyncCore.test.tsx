import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { OfflineDataSyncCore } from './OfflineDataSyncCore';
import * as stories from './OfflineDataSyncCore.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('OfflineDataSyncCore', () => {
  testCapturedVariants(stories, captures);

  it('raises OnConfigure once on initialize', () => {
    const onConfigure = vi.fn();
    const { rerender } = render(<OfflineDataSyncCore onConfigure={onConfigure} />);
    rerender(<OfflineDataSyncCore onConfigure={onConfigure} />);
    expect(onConfigure).toHaveBeenCalledTimes(1);
  });
});
