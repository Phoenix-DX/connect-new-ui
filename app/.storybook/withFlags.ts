import type { Decorator } from '@storybook/react-vite';
import { setFlagOverride, type FlagKey, type FlagValues } from '../src/platform/flags';

/** Story decorator (plan v2 §3.1): the story renders with these flag values, the other flags at their defaults
    (`decorators: [withFlags({ C2ExtendedShare: false })]`). preview.ts clears the overrides before every story. */
export function withFlags(values: Partial<FlagValues>): Decorator {
  return (Story) => {
    for (const [key, value] of Object.entries(values) as [FlagKey, boolean][]) setFlagOverride(key, value);
    return Story();
  };
}
