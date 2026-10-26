/** Query keys of the search queries. The birthday options keep the key of the block's query before the domain. */
export const searchKeys = {
  all: ['Search'] as const,
  birthdayOptions: () => [...searchKeys.all, 'ScreenDataSetGet_SearchBirthdayOptions'] as const,
};
