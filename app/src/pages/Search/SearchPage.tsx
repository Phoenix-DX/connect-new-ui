import { useFlagOn } from '@/platform/flags/flags';
import { SearchView } from './components/SearchView';
import { SEARCH_SCREEN_INPUTS, useSearch } from './hooks/useSearch';

/** @origin UBTConnect.Directory_Search.Search
    The Search route: the screen renders only ScreenBlock_Search, with no inputs. The page reads the two flags of the
    block, runs its flows (useSearch) and renders its view. */
export default function Search() {
  const birthdaySearch = useFlagOn('C2EnableSearchByBirthday'); // Connect_OutSystems_PermissionCheck (default-only, on)
  const carousel = useFlagOn('C2EnableCarousel'); // GetHasCarouselEnabled (default-only, on)
  const search = useSearch(SEARCH_SCREEN_INPUTS, { birthdaySearch, carousel });
  return <SearchView id="$b1" inIsInScreenSearch={SEARCH_SCREEN_INPUTS.inIsInScreenSearch} {...search} />;
}
