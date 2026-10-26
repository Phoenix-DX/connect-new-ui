import { useQuery } from '@tanstack/react-query';
import { searchKeys } from './keys';
import { fetchSearchBirthdayOptions } from './repository';

/** Get_SearchBirthdayOptions of ScreenBlock_Search as a query, with the options that the block had before the domain:
    - It is not fetched at start (refresh -1): `enabled` stays false until OnReady sets isBirthdaySearchEnabled (the
      C2EnableSearchByBirthday check), which refreshes it.
    - No retry: OutSystems does not retry a failed aggregate. The cache times are the library defaults, as the block had
      them before the domain. */
export function useSearchBirthdayOptionsQuery(enabled: boolean) {
  return useQuery({
    queryKey: searchKeys.birthdayOptions(),
    queryFn: () => fetchSearchBirthdayOptions(),
    enabled,
    retry: false,
  });
}
