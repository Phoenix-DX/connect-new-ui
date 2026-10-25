/** @origin OutSystemsUI_2_23.Interaction.DropdownTags */
// @os-block OutSystemsUI_2_23.Interaction.DropdownTags
import { useId, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { registerDropdown } from '@/components/ui/lib/actions';
import { fromJson, internalConfigs } from '@/components/ui/DropdownSearch/DropdownSearch';
import { DropdownSearchProvider } from '@/components/ui/DropdownSearch/provider';
import type { DropdownSearchConfig, DropdownSearchProperty } from '@/components/ui/DropdownSearch/providerConfig';
import type { DropdownOption, DropdownTagsOptionalConfigs } from './types';

export interface DropdownTagsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** OptionsList (default empty). */
  optionsList?: DropdownOption[];
  /** StartingSelection (default empty). */
  startingSelection?: DropdownOption[];
  /** Prompt (default "Select..."; "" also gives "Select..."). */
  prompt?: string;
  /** OptionalConfigs (record default: enabled, OSUI texts). */
  optionalConfigs?: DropdownTagsOptionalConfigs;
  extendedClass?: string;
  /** Event Initialized(DropdownTagsId). */
  onInitialized?: (dropdownTagsId: string) => void;
  /** Event OnChanged(DropdownId, SelectedOptionList). */
  onOnChanged?: (dropdownId: string, selectedOptionList: DropdownOption[]) => void;
}

/** Order of the OnParametersChanged checks (controller :461-565). */
const PROPERTY_ORDER: DropdownSearchProperty[] = [
  'OptionsList',
  'StartingSelection',
  'Prompt',
  'IsDisabled',
  'NoResultsText',
  'NoOptionsText',
  'SearchPrompt',
  'SanitizeDropdownValues',
  'ExtendedClass',
];

/** OutSystems UI Dropdown Tags (p:migration/blocks/sources/OutSystemsUI_2_23.Interaction.DropdownTags.mvc.js): a
    `osui-dropdown-tags` container named after the UniqueId (view :205-217) filled by the Virtual Select provider in its
    Tags mode (stack: same provider, Virtual Select 1.3.0 vendored in `../DropdownSearch/vendor/`, reused through
    `DropdownSearchProvider` with variant `tags`: multiple selection, values as tags). OnInitialize builds InternalConfigs
    (:339-383, same defaults and empty-text fallbacks as DropdownSearch), OnReady creates the provider, OnParametersChanged
    pushes each changed input, OnSelected deserializes the selection and raises OnChanged (:270-295). Never captured. */
export function DropdownTags({
  id,
  optionsList = [],
  startingSelection = [],
  prompt = 'Select...',
  optionalConfigs = {},
  extendedClass = '',
  onInitialized,
  onOnChanged,
}: DropdownTagsProps) {
  const uniqueId = useId();
  const config = internalConfigs(
    optionsList,
    startingSelection,
    prompt,
    { ...optionalConfigs, AllowMultipleSelection: true },
    extendedClass,
  );
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
    const provider = new DropdownSearchProvider(
      element,
      JSON.parse(applied.current) as DropdownSearchConfig,
      {
        onInitialized: () => events.current.onInitialized?.(events.current.widgetId),
        onSelected: (json) => events.current.onOnChanged?.(events.current.widgetId, fromJson(json)),
      },
      'tags',
    );
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
    <OSBlock name="Interaction.DropdownTags" id={id}>
      <div ref={elementRef} className="osui-dropdown-tags" data-container="" {...nameAttribute} />
    </OSBlock>
  );
}
