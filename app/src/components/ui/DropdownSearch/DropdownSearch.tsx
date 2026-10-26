/** @origin OutSystemsUI_2_23.Interaction.DropdownSearch */
// @os-block OutSystemsUI_2_23.Interaction.DropdownSearch
import { useId, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { registerDropdown } from '@/components/ui/lib/actions';
import { DropdownSearchProvider } from './provider';
import type { DropdownOptionJson, DropdownSearchConfig, DropdownSearchProperty } from './providerConfig';
import type { DropdownOption, DropdownOptionalConfigs } from './types';

export interface DropdownSearchProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** OptionsList (default empty). */
  optionsList?: DropdownOption[];
  /** StartingSelection (default empty). */
  startingSelection?: DropdownOption[];
  /** Prompt (default "Select..."; "" also gives "Select..."). */
  prompt?: string;
  /** OptionalConfigs (record default: single selection, enabled, OSUI texts). */
  optionalConfigs?: DropdownOptionalConfigs;
  /** ExtendedClass (default ""). */
  extendedClass?: string;
  /** Event Initialized(DropdownSearchId). */
  onInitialized?: (dropdownSearchId: string) => void;
  /** Event OnChanged(DropdownId, SelectedOptionList). */
  onOnChanged?: (dropdownId: string, selectedOptionList: DropdownOption[]) => void;
}

/* Block local defaults (DropdownSearch.mvc.js model): Prompt_Default, SearchPrompt_Default, NoResultsText_Default,
   NoOptionsText_Default. */
const PROMPT_DEFAULT = 'Select...';
const SEARCH_PROMPT_DEFAULT = 'Search...';
const NO_RESULTS_TEXT_DEFAULT = 'There are no options to show.';
const NO_OPTIONS_TEXT_DEFAULT = 'There are no options to show.';

/** JSON Serialize of a DropdownOption list (JSON names of DropdownOptionRec). */
export const toJson = (options: DropdownOption[]): DropdownOptionJson[] =>
  options.map((o) => ({
    value: o.Value ?? '',
    label: o.Label ?? '',
    image_url_or_class: o.ImageUrlOrIconClass ?? '',
    group_name: o.GroupName ?? '',
    description: o.Description ?? '',
  }));

/** JSON Deserialize of the provider's SelectedOptionsJSON into a DropdownOption list ("" = none selected). */
export function fromJson(json: string): DropdownOption[] {
  if (json === '') return [];
  const parsed = JSON.parse(json) as Partial<DropdownOptionJson>[];
  return parsed.map((o) => ({
    Value: o.value ?? '',
    Label: o.label ?? '',
    ImageUrlOrIconClass: o.image_url_or_class ?? '',
    GroupName: o.group_name ?? '',
    Description: o.description ?? '',
  }));
}

/** InternalConfigs as OnInitialize sets them (DropdownSearch.mvc.js controller :311-349). */
export function internalConfigs(
  optionsList: DropdownOption[],
  startingSelection: DropdownOption[],
  prompt: string,
  optional: DropdownOptionalConfigs,
  extendedClass: string,
): DropdownSearchConfig {
  const noResults = optional.NoResultsText ?? NO_RESULTS_TEXT_DEFAULT;
  const searchPrompt = optional.SearchPrompt ?? SEARCH_PROMPT_DEFAULT;
  const noOptions = optional.NoOptionsText ?? NO_OPTIONS_TEXT_DEFAULT;
  return {
    OptionsList: toJson(optionsList),
    StartingSelection: toJson(startingSelection),
    IsDisabled: optional.IsDisabled ?? false,
    Prompt: prompt === '' ? PROMPT_DEFAULT : prompt,
    NoResultsText: noResults === '' ? NO_RESULTS_TEXT_DEFAULT : noResults,
    SearchPrompt: searchPrompt === '' ? SEARCH_PROMPT_DEFAULT : searchPrompt,
    AllowMultipleSelection: optional.AllowMultipleSelection ?? false,
    ExtendedClass: extendedClass,
    NoOptionsText: noOptions === '' ? NO_OPTIONS_TEXT_DEFAULT : noOptions,
    SanitizeDropdownValues: optional.SanitizeDropdownValues ?? false,
  };
}

/** Order of the OnParametersChanged checks (controller :455-580). */
const PROPERTY_ORDER: DropdownSearchProperty[] = [
  'OptionsList',
  'StartingSelection',
  'Prompt',
  'IsDisabled',
  'NoResultsText',
  'NoOptionsText',
  'SearchPrompt',
  'AllowMultipleSelection',
  'SanitizeDropdownValues',
  'ExtendedClass',
];

/** OutSystems UI Dropdown Search (p:migration/blocks/sources/OutSystemsUI_2_23.Interaction.DropdownSearch.mvc.js):
    a `osui-dropdown-search` container named after the generated UniqueId (view :205-217) that the Virtual Select
    provider fills (stack: same provider, v1.3.0 vendored from TST). OnInitialize builds InternalConfigs, OnReady
    creates and initializes the provider (DropdownCreate / DropdownInitialize → `provider.ts`), OnParametersChanged
    pushes each changed input (DropdownChange*Property), OnDestroy disposes it. Never captured. */
export function DropdownSearch({
  id,
  optionsList = [],
  startingSelection = [],
  prompt = PROMPT_DEFAULT,
  optionalConfigs = {},
  extendedClass = '',
  onInitialized,
  onOnChanged,
}: DropdownSearchProps) {
  const uniqueId = useId();
  const config = internalConfigs(optionsList, startingSelection, prompt, optionalConfigs, extendedClass);
  const key = JSON.stringify(config);
  const elementRef = useRef<HTMLDivElement>(null);
  const providerRef = useRef<DropdownSearchProvider | null>(null);
  const applied = useRef(key);
  const events = useRef({ onInitialized, onOnChanged, widgetId: id ?? '' });
  useLayoutEffect(() => {
    events.current = { onInitialized, onOnChanged, widgetId: id ?? '' };
  });

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const provider = new DropdownSearchProvider(element, JSON.parse(applied.current) as DropdownSearchConfig, {
      // InitializedHandler → Initialized; OnSelectHandler → JSON Deserialize → OnChanged (controller :402-415, 595-612).
      onInitialized: () => events.current.onInitialized?.(events.current.widgetId),
      onSelected: (json) => events.current.onOnChanged?.(events.current.widgetId, fromJson(json)),
    });
    provider.build();
    providerRef.current = provider;
    // DropdownAPI.Create / Dispose: reachable by the Dropdown client actions (CR-EventBooklet-2).
    const unregister = registerDropdown(uniqueId, events.current.widgetId, provider);
    return () => {
      unregister();
      provider.dispose();
      providerRef.current = null;
    };
    // useId is stable: built once per mount, as before.
  }, [uniqueId]);

  useLayoutEffect(() => {
    const provider = providerRef.current;
    if (!provider || applied.current === key) return;
    const before = JSON.parse(applied.current) as DropdownSearchConfig;
    const next = JSON.parse(key) as DropdownSearchConfig;
    for (const name of PROPERTY_ORDER) {
      if (JSON.stringify(before[name]) !== JSON.stringify(next[name])) provider.changeProperty(name, next[name]);
    }
    applied.current = key;
  }, [key]);

  const nameAttribute: Record<string, string> = { name: uniqueId };
  return (
    <OSBlock name="Interaction.DropdownSearch" id={id}>
      <div ref={elementRef} className="osui-dropdown-search" data-container="" {...nameAttribute} />
    </OSBlock>
  );
}
