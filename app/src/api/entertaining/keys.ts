/** Query keys of the entertaining calendar queries. */
export const entertainingKeys = {
  all: ['entertaining'] as const,
  /** The calendar configuration. The block fetches it once and does not refresh it when an input changes, so the key
      does not hold the inputs. */
  config: () => [...entertainingKeys.all, 'config'] as const,
};
