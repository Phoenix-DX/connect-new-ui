/* OutSystems UI Dropdown Search provider glue for Virtual Select, ported from
   migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js ("U"): the configs AbstractVirtualSelectConfig
   (U:20193-20339), Enum (U:20353-20399) and VirtualSelectSearchConfig (U:20528-20569). The provider: provider.ts. */

/** A DropdownOption record in its JSON form (OutSystemsUI_2_23.model.js DropdownOptionRec JSON names), as the block
    serializes OptionsList / StartingSelection for the provider. The provider adds `customData`. */
export interface DropdownOptionJson {
  value: string;
  label: string;
  image_url_or_class: string;
  group_name: string;
  description: string;
  customData?: { description?: string; group_name?: string };
}

/** InternalConfigs of the block (DropdownSearch_InternalConfigsRec) as the provider reads them. */
export interface DropdownSearchConfig {
  OptionsList: DropdownOptionJson[];
  StartingSelection: DropdownOptionJson[];
  IsDisabled: boolean;
  Prompt: string;
  NoResultsText: string;
  SearchPrompt: string;
  AllowMultipleSelection: boolean;
  ExtendedClass: string;
  NoOptionsText: string;
  SanitizeDropdownValues: boolean;
}

export type DropdownSearchProperty = keyof DropdownSearchConfig;

/** Provider mode: OSUIVirtualSelectSearch (DropdownSearch) or OSUIVirtualSelectTags (DropdownTags, U:20586-20633:
    always multiple, values shown as tags; its configs are given with AllowMultipleSelection true). */
export type DropdownVariant = 'search' | 'tags';

/** Enum.CssClass (U:20361-20366) and Enum.PropertiesValues (U:20385-20388). */
export const CssClass = {
  ErrorMessage: 'osui-dropdown-error-message',
  NotValid: 'osui-dropdown--not-valid',
  OptionItemIcon: 'osui-dropdown-option-icon',
  OptionItemImage: 'osui-dropdown-option-image',
};
const AriaLabel = { Multiple: 'Select one or more options', Single: 'Select an option' };

/** Helper.Sanitize (U:3478-3485): `<` → `‹`, `>` → `›`. */
export function sanitize(value: string): string {
  return value !== '' ? value.replace(/</g, '‹').replace(/>/g, '›') : value;
}

/** Helper.URL.IsImage (U:3539-3541). */
export function isImage(url: string): boolean {
  return (
    /(^data:image\/*(jpeg|jpg|gif|png|svg);base64)|\/?(\.\w\.)*\.(jpeg|jpg|gif|png|svg)($|(\?))/i.exec(url) !== null
  );
}

interface GroupedOptions {
  label: string;
  options: DropdownOptionJson[];
  index: number;
}

interface LabelData {
  isGroupTitle?: boolean;
  isGroupOption?: boolean;
  groupIndex: number;
  index: number;
  label: string;
}

/** AbstractVirtualSelectConfig._groupOptions (U:20264-20282): options by group_name, `customData` with the description
    and group; hasDescription when any option has one. */
function groupOptions(optionsList: DropdownOptionJson[]): [boolean, Record<string, DropdownOptionJson[]>] {
  let hasDescription = false;
  const grouped = optionsList.reduce<Record<string, DropdownOptionJson[]>>((previous, option) => {
    const groupName = option.group_name || '';
    const description = option.description || '';
    option.customData = {};
    if (description !== '') {
      option.customData = { description };
      hasDescription = true;
    }
    if (groupName !== '') option.customData = { ...option.customData, group_name: groupName };
    (previous[groupName] ??= []).push(option);
    return previous;
  }, {});
  return [hasDescription, grouped];
}

/** _getGroupedOptionsList (U:20208-20223): one entry per group with the index of its title row. */
function groupedOptionsList(optionsList: DropdownOptionJson[]): [boolean, GroupedOptions[]] {
  const options: GroupedOptions[] = [];
  let previousKey: string | undefined;
  const [hasDescription, grouped] = groupOptions(optionsList);
  for (const key in grouped) {
    const previous = previousKey !== undefined ? grouped[previousKey] : undefined;
    const last = options[options.length - 1];
    options.push({
      label: key,
      options: grouped[key] ?? [],
      index: previous && last ? last.index + previous.length + 1 : 0,
    });
    previousKey = key;
  }
  return [hasDescription, options];
}

/** _getOptionInfo (U:20231-20255): the label, after an icon or image of `image_url_or_class` when there is one. */
function optionLabel(groups: GroupedOptions[], data: LabelData): string {
  let prefix = '';
  if (!data.isGroupTitle) {
    let groupIndex: number;
    let index: number;
    if (data.isGroupOption) {
      groupIndex = groups.findIndex((group) => group.index === data.groupIndex);
      index = data.index - (data.groupIndex + 1);
    } else {
      groupIndex = 0;
      index = data.index;
    }
    const option = groups[groupIndex]?.options[index];
    const figure = option?.image_url_or_class ?? '';
    if (option && figure !== '') {
      prefix = isImage(figure)
        ? `<img class="${CssClass.OptionItemImage}" src="${sanitize(figure)}">`
        : `<i class="${CssClass.OptionItemIcon} ${figure}"></i>`;
    }
  }
  return `${prefix}${data.label}`;
}

/** VirtualSelectSearchConfig.getSelectedValues (U:20529-20547): the StartingSelection values ("" skipped). */
export function startingValues(config: DropdownSearchConfig): string[] {
  const selected: string[] = [];
  const first = config.StartingSelection[0];
  if (!first) return selected;
  if (config.AllowMultipleSelection) {
    for (const option of config.StartingSelection) if (option.value !== '') selected.push(option.value);
  } else if (first.value !== '') selected.push(first.value);
  return selected;
}

/** AbstractProviderConfiguration.mergeConfigs (U:3863-3876): later objects win; undefined, null and [] are dropped. */
function mergeConfigs(...configs: Record<string, unknown>[]): Record<string, unknown> {
  const merged: Record<string, unknown> = {};
  for (const config of configs) Object.assign(merged, config);
  for (const key of Object.keys(merged)) {
    const value = merged[key];
    if (value === undefined || value === null || (Array.isArray(value) && value.length === 0))
      Reflect.deleteProperty(merged, key);
  }
  return merged;
}

/** getProviderConfig of AbstractVirtualSelectConfig (U:20283-20318) merged with the Search one (U:20548-20556).
    `showDropboxAsPopup` is the config ShowDropboxAsPopup (default true, U:20197; changed by togglePopup). */
export function providerConfig(
  config: DropdownSearchConfig,
  element: HTMLElement,
  popupDropboxBreakpoint: string | undefined,
  variant: DropdownVariant = 'search',
  showDropboxAsPopup = true,
): Record<string, unknown> {
  for (const option of config.OptionsList) option.label = sanitize(option.label);
  const [hasDescription, groups] = groupedOptionsList(config.OptionsList);
  const options = groups.length === 1 && !groups[0]?.label ? groups[0]?.options : groups;
  const common = {
    // `ele: this.ElementId` ('#' + id) in the original; the element itself here (Virtual Select accepts both).
    ele: element,
    enableSecureText: config.SanitizeDropdownValues,
    disabled: config.IsDisabled,
    dropboxWrapper: 'body',
    hasOptionDescription: hasDescription,
    hideClearButton: false,
    labelRenderer: (data: LabelData) => optionLabel(groups, data),
    noOptionsText: config.NoOptionsText,
    noSearchResultsText: config.NoResultsText,
    options,
    placeholder: config.Prompt,
    search: true,
    searchNormalize: true,
    searchPlaceholderText: config.SearchPrompt,
    selectAllOnlyVisible: true,
    selectedValue: startingValues(config),
    showDropboxAsPopup,
    popupDropboxBreakpoint,
    showSecureTextWarning: false,
    silentInitialValueSet: true,
    textDirection: document.body.classList.contains('is-rtl') ? 'rtl' : 'ltr',
    updatePositionThrottle: 0,
    useGroupValue: true,
    zIndex: 251,
  };
  // Tags: VirtualSelectTagsConfig.getProviderConfig (U:20624-20631).
  if (variant === 'tags')
    return mergeConfigs(common, { ariaLabelText: AriaLabel.Multiple, multiple: true, showValueAsTags: true });
  return mergeConfigs(common, {
    multiple: config.AllowMultipleSelection,
    ariaLabelText: config.AllowMultipleSelection ? AriaLabel.Multiple : AriaLabel.Single,
  });
}
