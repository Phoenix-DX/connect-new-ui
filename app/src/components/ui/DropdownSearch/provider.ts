import { osToken } from '@/platform/device/device';
import { virtualSelect, type VirtualSelectInstance, type VirtualSelectOption } from './vendor';

/* OutSystems UI Dropdown Search provider glue for Virtual Select, ported from
   migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js ("U"): Providers.OSUI.Dropdown.VirtualSelect
   AbstractVirtualSelect (U:19923-20179), AbstractVirtualSelectConfig (U:20193-20339), Enum (U:20353-20399),
   Search.OSUIVirtualSelectSearch (U:20485-20511) and VirtualSelectSearchConfig (U:20528-20569). */

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
const CssClass = {
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

/** Helper.AsyncInvocation (U:2374-2379). */
const asyncInvocation = (fn: () => void) => window.setTimeout(fn, 0);

/** DeviceInfo.IsMobileDevice (U:2716-2720): Android or iOS. The operating system comes from the app's user-agent rule
    (lib/device osToken, the GetOS_Legacy port). */
const isMobileDevice = () => {
  const os = osToken();
  return os === 'android' || os === 'ios';
};

/** DeviceInfo.IsDesktop && HasCursorPointer (U:2644-2649): device class `desktop` on the body and a fine pointer. */
const isDesktopWithPointer = () =>
  document.body.classList.contains('desktop') && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

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

export interface DropdownSearchCallbacks {
  /** Initialized (triggerPlatformInitializedEventCallback). */
  onInitialized: () => void;
  /** OnSelected with getSelectedValues(): the selected options as JSON, "" when none (U:20110-20119). */
  onSelected: (selectedOptionsJson: string) => void;
}

/** OSUIVirtualSelectSearch: build / changeProperty / dispose on the `osui-dropdown-search` element, and the pattern
    methods the DropdownAPI reaches (clear, close, togglePopup, validation; osui/lib/actions.ts registry,
    CR-EventBooklet-2). */
export class DropdownSearchProvider {
  private provider: VirtualSelectInstance | undefined;
  private isBuilt = false;
  private redrawTimer = 0;
  /** AbstractVirtualSelectConfig.ShowDropboxAsPopup (U:20197): true until togglePopup changes it. */
  private showDropboxAsPopup = true;
  /** _onSelectedOption (U:19953-19955) → triggerPlatformEventCallback: asynchronous (U:3585-3589). */
  private readonly onChange = () => {
    const selected = this.getSelectedValues();
    asyncInvocation(() => {
      this.callbacks.onSelected(selected);
    });
  };
  /** _onOrientationChange / _onWindowResize (U:19949-19957): close(). */
  private readonly onCloseEvent = () => {
    this.close();
  };

  constructor(
    private readonly element: HTMLElement,
    private readonly configs: DropdownSearchConfig,
    private readonly callbacks: DropdownSearchCallbacks,
    private readonly variant: DropdownVariant = 'search',
  ) {}

  /** build (U:20041-20048): ExtendedClass, events, provider instance. */
  build(): void {
    if (this.configs.ExtendedClass !== '')
      this.element.classList.add(...this.configs.ExtendedClass.split(' ').filter(Boolean));
    this.element.addEventListener('change', this.onChange);
    if (isMobileDevice()) window.addEventListener('orientationchange', this.onCloseEvent);
    else if (isDesktopWithPointer()) window.addEventListener('resize', this.onCloseEvent);
    this.prepareConfigs();
    this.isBuilt = true;
  }

  /** prepareConfigs + createProviderInstance (U:19985-20017): keeps the current selection across redraws. */
  private prepareConfigs(): void {
    const selected = this.provider?.getSelectedOptions();
    if (selected) this.configs.StartingSelection = [selected].flat() as DropdownOptionJson[];
    // _setDropdownProps (U:19959-19965): on a mobile device the dropbox is always a popup.
    const breakpoint = isMobileDevice() ? `${Math.max(window.innerWidth, window.innerHeight)}px` : undefined;
    const instance = virtualSelect().init(
      providerConfig(this.configs, this.element, breakpoint, this.variant, this.showDropboxAsPopup),
    );
    this.provider = Array.isArray(instance) ? instance[0] : instance;
    this.provider?.$dropboxContainer.setAttribute('name', this.element.getAttribute('name') ?? '');
    // triggerPlatformInitializedEventCallback: only while the pattern is not built yet (first build, not redraws).
    if (!this.isBuilt) asyncInvocation(this.callbacks.onInitialized);
  }

  /** AbstractProviderPattern.redraw (U:...redraw/_handleRedraw): destroy and rebuild on the next tick. */
  private redraw(): void {
    window.clearTimeout(this.redrawTimer);
    this.redrawTimer = asyncInvocation(() => {
      if (this.provider) {
        this.provider.destroy();
        this.prepareConfigs();
      }
    });
  }

  /** getSelectedOptionsStructure of the Search mode (U:20489-20500). */
  private selectedOptions(): VirtualSelectOption[] {
    const selected = this.provider?.$ele.getSelectedOptions();
    if (this.configs.AllowMultipleSelection) return (selected ?? []) as VirtualSelectOption[];
    return selected ? [selected as VirtualSelectOption] : [];
  }

  /** getSelectedValues (U:20110-20119). */
  getSelectedValues(): string {
    const selected = this.selectedOptions();
    if (selected.length === 0) return '';
    return JSON.stringify(
      selected.map((option) => ({
        group_name: option.customData?.group_name ?? '',
        description: option.customData?.description ?? '',
        ...option,
      })),
    );
  }

  /** close (U:20078-20082): closes the dropbox on the next tick when it is open. */
  close(): void {
    if (this.provider?.isOpened()) {
      const ele = this.provider.$ele;
      asyncInvocation(() => {
        ele.close();
      });
    }
  }

  /** setValue (U:20146-20159): selects the given options when they differ from the current selection. */
  private setValue(optionsToSelect: DropdownOptionJson[]): void {
    asyncInvocation(() => {
      const current = this.selectedOptions().map((option) => option.value);
      let values: string[] = [];
      const first = optionsToSelect[0];
      if (first)
        values = this.configs.AllowMultipleSelection ? optionsToSelect.map((option) => option.value) : [first.value];
      if ([...values].sort().join(' ') !== [...current].sort().join(' ')) this.provider?.$ele.setValue(values, true);
    });
  }

  /** clear (U:20075-20077): Virtual Select reset(false, silentOnChangedEvent): no option selected; with
      silentOnChangedEvent the `change` event (OnSelected → OnChanged) is not raised. */
  clear(silentOnChangedEvent = true): void {
    this.provider?.$ele.reset(false, silentOnChangedEvent);
  }

  /** togglePopup (U:20160-20165): when ShowDropboxAsPopup differs from isEnabled, sets it and redraws (the dropbox
      then opens as a popup or below the field). */
  togglePopup(isEnabled: boolean): void {
    if (this.showDropboxAsPopup !== isEnabled) {
      this.showDropboxAsPopup = isEnabled;
      this.redraw();
    }
  }

  /** validation (U:20166-20178) with _addErrorMessage (U:19927-19938): not valid → the NotValid class on the element and
      the message in an `osui-dropdown-error-message` div of its parent (created once, then its HTML replaced); valid →
      the class and that div removed. */
  validation(isValid: boolean, validationMessage: string): void {
    const parent = this.element.parentElement;
    const errorMessageElement = parent?.querySelector(`.${CssClass.ErrorMessage}`) ?? undefined;
    if (!isValid) {
      this.element.classList.add(CssClass.NotValid);
      if (errorMessageElement === undefined) {
        const textContainer = document.createElement('div');
        textContainer.classList.add(CssClass.ErrorMessage);
        textContainer.innerHTML = validationMessage;
        parent?.appendChild(textContainer);
      } else errorMessageElement.innerHTML = validationMessage;
    } else {
      this.element.classList.remove(CssClass.NotValid);
      errorMessageElement?.remove();
    }
  }

  /** changeProperty of AbstractVirtualSelect (U:20049-20074) and the Search mode (U:20501-20510). */
  changeProperty<K extends DropdownSearchProperty>(name: K, value: DropdownSearchConfig[K]): void {
    this.provider?.$ele.close();
    if (name === 'ExtendedClass' && this.isBuilt) {
      // AbstractPattern.changeProperty: Styles.ExtendedClass(old → new)
      const remove = this.configs.ExtendedClass.split(' ').filter(Boolean);
      if (remove.length) this.element.classList.remove(...remove);
      const add = (value as string).split(' ').filter(Boolean);
      if (add.length) this.element.classList.add(...add);
    }
    this.configs[name] = value;
    if (!this.isBuilt) return;
    switch (name) {
      case 'IsDisabled':
        if (this.configs.IsDisabled) this.provider?.$ele.disable();
        else this.provider?.$ele.enable();
        break;
      case 'SanitizeDropdownValues':
      case 'NoOptionsText':
      case 'NoResultsText':
      case 'OptionsList':
      case 'Prompt':
      case 'SearchPrompt':
      case 'AllowMultipleSelection':
        this.redraw();
        break;
      case 'StartingSelection':
        this.setValue(value as DropdownOptionJson[]);
        break;
    }
  }

  /** dispose (U:20089-20103). */
  dispose(): void {
    window.clearTimeout(this.redrawTimer);
    if (this.isBuilt) this.provider?.destroy();
    this.element.removeEventListener('change', this.onChange);
    window.removeEventListener('orientationchange', this.onCloseEvent);
    window.removeEventListener('resize', this.onCloseEvent);
    this.provider = undefined;
    this.isBuilt = false;
  }
}
