import { expect, test, vi } from 'vitest';
import { addLogSink, log } from './log';

test('every entry reaches the sinks, a failing sink does not break logging', () => {
  const seen = vi.fn();
  const removeBroken = addLogSink(() => {
    throw new Error('sink down');
  });
  const remove = addLogSink(seen);
  log.warn('slow call', { action: 'DataActionFetchCount' });
  expect(seen).toHaveBeenCalledWith(
    expect.objectContaining({ level: 'warn', message: 'slow call', data: { action: 'DataActionFetchCount' } }),
  );
  remove();
  removeBroken();
  log.info('after removal');
  expect(seen).toHaveBeenCalledTimes(1);
});
