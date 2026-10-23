/** Query keys of the service queries. */
export const serviceKeys = {
  all: ['service'] as const,
  /** The services of the signed-in user (Services screen). The call has no input that changes the answer. */
  user: () => [...serviceKeys.all, 'user'] as const,
};
