/** @origin UBTConnect.Directory_Search.SearchResult_Section */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { SectionSeparator } from '@/components/ui/SectionSeparator';
import { SearchResultItem } from '@/components/search/SearchResultItem';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { SearchResult } from '@/api/search';
import { UBT_FontWeight_Bold } from './staticEntities';

export interface SearchResult_SectionProps {
  id?: string;
  hideSeparator?: boolean;
  /** Connect_SearchCategories identifier, shown as the title. */
  type?: string;
  searchTerm?: string;
  items?: SearchResult[];
  /** Event OnItemClick(SearchResult). */
  onItemClick?: (searchResult: SearchResult) => void;
}

/** UBTConnect Directory_Search.SearchResult_Section (capture/survey-UBTConnect.json sources
    UBTConnect.Directory_Search.SearchResult_Section.mvc.js, view internalRender, prettier line numbers :334-650):
    SectionSeparator unless HideSeparator; CustomContainer (horizontal Base, top Base unless HideSeparator, bottom Base)
    with Columns_Two (ReduceLast, Center: Type | "<n> Results") and the list of SearchResult_Item. */
export function SearchResult_Section({
  id,
  hideSeparator = false,
  type = '',
  searchTerm = '',
  items = [],
  onItemClick,
}: SearchResult_SectionProps) {
  return (
    <OSBlock name="Directory_Search.SearchResult_Section" id={id}>
      {!hideSeparator && <SectionSeparator />}
      <CustomContainer
        options={{
          PaddingSize: {
            HorizontalSizeId: UBT_Size.Base,
            TopSizeId: hideSeparator ? '' : UBT_Size.Base,
            BottomSizeId: UBT_Size.Base,
          },
        }}
      >
        <ColumnsTwo
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, VerticalAlign: UBT_VerticalAlign.Center }}
          left={
            <CustomText
              inTextOptions={{
                Color: UBT_Color.Neutral9,
                FontSize: UBT_FontSize.Small,
                FontWeight: UBT_FontWeight_Bold,
              }}
              inText={type}
              inPaddingOptions={{ BottomSizeId: UBT_Size.Small }}
            />
          }
          right={
            <div data-container="" style={{ textAlign: 'right' }}>
              <CustomText
                inPaddingOptions={{ BottomSizeId: UBT_Size.Small }}
                inTextOptions={{
                  Color: UBT_Color.Neutral9,
                  FontSize: UBT_FontSize.ExtraSmall,
                  FontWeight: UBT_FontWeight.Regular,
                }}
                inText={`${String(items.length)} Results`}
              />
            </div>
          }
        />
        <div className="list list-group OSFillParent" data-list="">
          {items.map((item) => (
            <SearchResultItem
              key={`${item.type}-${item.id}`}
              inSearchResult={{
                Id: item.id,
                HouseholderId: item.householderId,
                Name: item.name,
                AdditionalInformation: item.additionalInformation,
                Location: item.location,
                Type: item.type,
                RecordDisabled: item.recordDisabled,
              }}
              inSearchTerm={searchTerm}
              onOnClick={() => {
                onItemClick?.(item);
              }}
            />
          ))}
        </div>
      </CustomContainer>
    </OSBlock>
  );
}
