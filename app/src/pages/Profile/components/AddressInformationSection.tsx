import type { LocalityListItem, SubdivisionListItem } from '@/api/locality';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { DropdownSearch, type DropdownOption } from '@/components/ui/DropdownSearch';
import { OSList } from '@/components/ui/os/OSList';
import { Skeleton } from '@/components/ui/Skeleton';
import { UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { osList } from '@/lib/os-wire';
import type { AccountForm, AddressItem } from '@/pages/Profile/hooks/profileState';
import { FormInput } from './FormInput';
import { FIELD_LABEL, PAD_BOTTOM_BASE, PAD_TOP_BASE_BOTTOM_S, SECTION_PADDING, SECTION_TITLE } from './formOptions';

type AddressInformation = AccountForm['AccountForm_AddressInformation'];

export interface AddressInformationSectionProps {
  /** AccountForm.AccountForm_AddressInformation. */
  address: AddressInformation;
  /** SkeletonSection In_IsLoading: the localities or the subdivisions are not fetched yet. */
  isLoading: boolean;
  /** LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList (sorted). */
  localityList: readonly LocalityListItem[];
  /** SubdivisionFilteredList. */
  subdivisionFilteredList: readonly SubdivisionListItem[];
  /** AddressInput OnChange of the row `index`, with the new value. */
  onAddressItemChange: (index: number, value: string) => void;
  /** LocalityDropdown OnChanged → OnChange_LocalityDropdown. */
  onLocalityChange: (selectedOptionList: DropdownOption[]) => void;
  /** SubdivisionDropdown OnChanged → OnChange_SubdivionDropdown. */
  onSubdivisionChange: (selectedOptionList: DropdownOption[]) => void;
}

/** The id of a widget of the address list (List uuid 37, no name): `l1-37_<row>-<name>`. */
const rowId = (index: number, name: string) => `l1-37_${String(index)}-${name}`;

/** LocalityDropdown OptionsList (Profile.mvc.js:1534-1542): Value LocalityId, Label Name + ", " + CountryName (only
    the name when CountryName is ""), GroupName CountryName. */
export const localityOptions = (localityList: readonly LocalityListItem[]): DropdownOption[] =>
  localityList.map((l) => ({
    Value: l.LocalityId,
    Label: l.Name + (l.CountryName !== '' ? `, ${l.CountryName}` : ''),
    GroupName: l.CountryName,
  }));

/** SubdivisionDropdown OptionsList (Profile.mvc.js:1639-1646): Value SubdivisionId, Label SubdivisionName. */
const subdivisionOptions = (list: readonly SubdivisionListItem[]): DropdownOption[] =>
  list.map((s) => ({ Value: s.SubdivisionId, Label: s.SubdivisionName }));

/** One row of the address list (Container uuid 38): AddressLabel, then AddressInput (Text, Mandatory = Required,
    MaxLength 50, Style "form-control " + "not-valid" while IsValid is False). */
function AddressRow({
  item,
  index,
  onChange,
}: {
  item: AddressItem;
  index: number;
  onChange: (index: number, value: string) => void;
}) {
  return (
    <div data-container="">
      <CustomText
        id={rowId(index, 'AddressLabel')}
        inText={item.Label}
        inTextOptions={FIELD_LABEL}
        // TopSizeId: Base after the first row, else NullTextIdentifier() (Profile.mvc.js:1419).
        inPaddingOptions={{ TopSizeId: index > 0 ? UBT_Size.Base : '', BottomSizeId: UBT_Size.Small }}
      />
      <FormInput
        id={rowId(index, 'AddressInput')}
        type="text"
        enabled
        mandatory={item.Required}
        maxLength={50}
        style={'form-control ' + (item.IsValid ? '' : 'not-valid')}
        value={item.Value}
        onChange={(v) => {
          onChange(index, v);
        }}
      />
    </div>
  );
}

/** The address section of the Profile form, householder only (Profile.mvc.js:1288-1716): SkeletonSection > the
    container AddressInfo with the title, the list of the address items, and the containers Locality and Subdivion
    with their DropdownSearch.
    @origin UBTConnect.App_Profile.Profile */
export function AddressInformationSection({
  address,
  isLoading,
  localityList,
  subdivisionFilteredList,
  onAddressItemChange,
  onLocalityChange,
  onSubdivisionChange,
}: AddressInformationSectionProps) {
  return (
    <Skeleton id="$b29" isLoading={isLoading}>
      <CustomContainer id="AddressInfo" options={SECTION_PADDING}>
        <CustomText
          id="AddressInformation"
          inText="Address Information"
          inTextOptions={SECTION_TITLE}
          inPaddingOptions={PAD_BOTTOM_BASE}
        />
        <OSList
          source={osList(address.Custom_Address_ItemList)}
          keyOf={(_item, index) => String(index)}
          className="list list-group"
          animateItems
        >
          {(item, index) => <AddressRow item={item} index={index} onChange={onAddressItemChange} />}
        </OSList>
        <div data-container="" id="Locality">
          <CustomText
            id="LocalityLabel"
            inText="Locality"
            inTextOptions={FIELD_LABEL}
            inPaddingOptions={PAD_TOP_BASE_BOTTOM_S}
          />
          <DropdownSearch
            id="LocalityDropdown"
            optionsList={localityOptions(localityList)}
            prompt="-"
            startingSelection={[{ Value: address.LocalityId, Label: '' }]}
            onOnChanged={(_id, selectedOptionList) => {
              onLocalityChange(selectedOptionList);
            }}
          />
        </div>
        <div data-container="" id="Subdivion">
          <CustomText
            id="SubdivisionLabel"
            inText="Subdivision"
            inTextOptions={FIELD_LABEL}
            inPaddingOptions={PAD_TOP_BASE_BOTTOM_S}
          />
          <DropdownSearch
            id="SubdivisionDropdown"
            optionsList={subdivisionOptions(subdivisionFilteredList)}
            startingSelection={[{ Value: address.SubdivionId, Label: '' }]}
            prompt="-"
            optionalConfigs={{ IsDisabled: address.LocalityId === '' }}
            onOnChanged={(_id, selectedOptionList) => {
              onSubdivisionChange(selectedOptionList);
            }}
          />
        </div>
      </CustomContainer>
    </Skeleton>
  );
}
