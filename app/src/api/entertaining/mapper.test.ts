import { describe, expect, it } from 'vitest';
import { toEntertainingConfig, type EntertainingConfigWire } from './mapper';

describe('entertaining mapper', () => {
  it('toEntertainingConfig keeps the four outputs with camelCase names', () => {
    const wire: EntertainingConfigWire = {
      Token: 'token-1',
      BaseURL: 'https://calendar.example',
      B2CClientId: 'client-1',
      B2CPolicy: 'policy-1',
    };
    expect(toEntertainingConfig(wire)).toEqual({
      token: 'token-1',
      baseURL: 'https://calendar.example',
      b2CClientId: 'client-1',
      b2CPolicy: 'policy-1',
    });
  });
});
