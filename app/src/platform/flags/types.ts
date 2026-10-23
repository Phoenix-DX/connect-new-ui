import type { FLAGS } from './registry';

/** The key of a flag of the registry: a reader with another key does not compile. */
export type FlagKey = keyof typeof FLAGS;

/** One value per flag. */
export type FlagValues = Record<FlagKey, boolean>;
