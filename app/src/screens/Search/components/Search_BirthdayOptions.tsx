// @os-block UBTConnect.Directory_Search.Search_BirthdayOptions
import { OSBlock } from '../../../components/OSBlock';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '../../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../../shared/UBTConnectLibrary/IconText';
import { UBT_Color, UBT_Size } from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import type { SearchBirthdayOption } from '../types';
import { UBT_Icons2_Search } from './staticEntities';

export interface Search_BirthdayOptionsProps {
  id?: string;
  birthdayOptions?: SearchBirthdayOption[];
  /** Event Selected(KeyWord). */
  onSelected?: (keyWord: string) => void;
}

/** UBTConnect Directory_Search.Search_BirthdayOptions (capture/survey-UBTConnect.json sources
    UBTConnect.Directory_Search.Search_BirthdayOptions.mvc.js, view internalRender, prettier line numbers :223-385): a
    list of CustomContainer (vertical Small, bottom border Neutral3 Small) with IconText (SearchName, spacing Base,
    calendar icon); a click raises Selected(SearchName). */
export function Search_BirthdayOptions({ id, birthdayOptions = [], onSelected }: Search_BirthdayOptionsProps) {
  return (
    <OSBlock name="Directory_Search.Search_BirthdayOptions" id={id}>
      <div className="list list-group OSFillParent" data-list="">
        {birthdayOptions.map((option) => (
          <CustomContainer
            key={option.searchName}
            options={{
              PaddingSize: { VerticalSizeId: UBT_Size.Small },
              BorderOptions: { Color: UBT_Color.Neutral3, Size: { BottomSizeId: UBT_Size.Small } },
            }}
          >
            <IconText
              text={option.searchName}
              spacingSize={UBT_Size.Base}
              onClicked={() => {
                onSelected?.(option.searchName);
              }}
            >
              <Icon inIconId={UBT_Icons2_Search.Calendar} />
            </IconText>
          </CustomContainer>
        ))}
      </div>
    </OSBlock>
  );
}
