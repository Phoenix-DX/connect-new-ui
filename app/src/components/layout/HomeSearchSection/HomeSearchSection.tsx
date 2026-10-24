/** @origin UBTConnectLibrary.Layouts.SubLayout_HomePageSearch */
// @os-block UBTConnectLibrary.Layouts.SubLayout_HomePageSearch
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { StaticInput } from '@/components/ui/StaticInput';

export interface HomeSearchSectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event Clicked_Search. */
  onClickedSearch?: () => void;
}

/** Search bar under the home header (p:UBTConnectLibrary.Layouts.SubLayout_HomePageSearch.mvc.js view): a
    StaticInput (default prompt) in a padded container; a click raises Clicked_Search. */
export function HomeSearchSection({ id, onClickedSearch }: HomeSearchSectionProps) {
  return (
    <OSBlock name="Layouts.SubLayout_HomePageSearch" id={id}>
      <CustomContainer
        extendedClasses="ubt-home-page-search"
        options={{ PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Base }, MarginSize: {} }}
      >
        <StaticInput onClickInput={onClickedSearch} />
      </CustomContainer>
    </OSBlock>
  );
}
