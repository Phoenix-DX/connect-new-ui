// @os-block OutSystemsUI_2_23.Interaction.RangeSlider
import { useId, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Orientation } from '../lib/staticEntities';
import { RangeSliderProvider, type RangeSliderConfig, type RangeSliderProperty } from './provider';
import type { RangeSliderOptionalConfigs } from './types';

export interface RangeSliderProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** MinValue (default 0). */
  minValue?: number;
  /** MaxValue (default 0; equal to MinValue gives a 0-100 range). */
  maxValue?: number;
  /** StartingValue (default 0). */
  startingValue?: number;
  /** Orientation identifier (default Orientation.Horizontal). */
  orientation?: string;
  /** Size: CSS length (default "100%"). */
  size?: string;
  /** OptionalConfigs (record default: Step 1, ShowTickMarks True, TickMarksInterval 0, not disabled, no label). */
  optionalConfigs?: RangeSliderOptionalConfigs;
  /** ExtendedClass (default ""). */
  extendedClass?: string;
  /** Event Initialized(RangeSliderId). */
  onInitialized?: (rangeSliderId: string) => void;
  /** Event OnValueChange(RangeSliderId, Value). */
  onOnValueChange?: (rangeSliderId: string, value: number) => void;
}

/** InternalConfigs as OnInitialize sets them (RangeSlider.mvc.js controller :436-476), with the
    RangeSliderOptionalConfigsRec defaults. */
export function internalConfigs(
  minValue: number,
  maxValue: number,
  startingValue: number,
  orientation: string,
  size: string,
  optional: RangeSliderOptionalConfigs,
  extendedClass: string,
): RangeSliderConfig {
  return {
    MinValue: minValue,
    MaxValue: maxValue,
    StartingValueFrom: startingValue,
    Orientation: orientation,
    Size: size,
    ExtendedClass: extendedClass,
    Step: optional.Step ?? 1,
    ShowTickMarks: optional.ShowTickMarks ?? true,
    TickMarksInterval: optional.TickMarksInterval ?? 0,
    IsDisabled: optional.IsDisabled ?? false,
    ShowFloatingLabel: optional.ShowFloatingLabel ?? false,
    InitialValueFrom: startingValue,
  };
}

/** Order of the OnParametersChanged checks (controller :588-690). */
const PROPERTY_ORDER: RangeSliderProperty[] = [
  'MinValue',
  'MaxValue',
  'StartingValueFrom',
  'Step',
  'ShowTickMarks',
  'TickMarksInterval',
  'IsDisabled',
  'Orientation',
  'Size',
  'ShowFloatingLabel',
  'ExtendedClass',
];

/** OutSystems UI Range Slider, single handle (p:migration/blocks/sources/OutSystemsUI_2_23.Interaction.RangeSlider.mvc.js):
    `osui-range-slider` (named after the generated UniqueId) > `osui-range-slider__provider` (view :205-232), filled by
    noUiSlider (stack: same provider, noUiSlider 15.8.1 + wNumb 1.2.0). OnInitialize builds InternalConfigs, OnReady
    creates and initializes the provider (`provider.ts`), OnParametersChanged pushes each changed input, OnDestroy
    disposes it; OnValueChangeHandler raises OnValueChange with TextToDecimal of the value. Never captured. */
export function RangeSlider({
  id,
  minValue = 0,
  maxValue = 0,
  startingValue = 0,
  orientation = Orientation.Horizontal,
  size = '100%',
  optionalConfigs = {},
  extendedClass = '',
  onInitialized,
  onOnValueChange,
}: RangeSliderProps) {
  const uniqueId = useId();
  const config = internalConfigs(minValue, maxValue, startingValue, orientation, size, optionalConfigs, extendedClass);
  const key = JSON.stringify(config);
  const elementRef = useRef<HTMLDivElement>(null);
  const providerRef = useRef<RangeSliderProvider | null>(null);
  const applied = useRef(key);
  const events = useRef({ onInitialized, onOnValueChange, widgetId: id ?? '' });
  useLayoutEffect(() => {
    events.current = { onInitialized, onOnValueChange, widgetId: id ?? '' };
  });

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const provider = new RangeSliderProvider(element, JSON.parse(applied.current) as RangeSliderConfig, {
      onInitialized: () => events.current.onInitialized?.(events.current.widgetId),
      // OnValueChangeHandler (controller :295-318): OnValueChange(RangeSliderId, TextToDecimal(IntervalStart)).
      onValueChange: (value) => events.current.onOnValueChange?.(events.current.widgetId, textToDecimal(value)),
    });
    provider.build();
    providerRef.current = provider;
    return () => {
      provider.dispose();
      providerRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const provider = providerRef.current;
    if (!provider || applied.current === key) return;
    const before = JSON.parse(applied.current) as RangeSliderConfig;
    const next = JSON.parse(key) as RangeSliderConfig;
    for (const name of PROPERTY_ORDER) if (before[name] !== next[name]) provider.changeProperty(name, next[name]);
    applied.current = key;
  }, [key]);

  const nameAttribute: Record<string, string> = { name: uniqueId };
  return (
    <OSBlock name="Interaction.RangeSlider" id={id}>
      <div ref={elementRef} className="osui-range-slider" data-container="" {...nameAttribute}>
        <div className="osui-range-slider__provider" data-container="" />
      </div>
    </OSBlock>
  );
}

/** OutSystems TextToDecimal: the number of the text, 0 when it is not one. */
function textToDecimal(text: string): number {
  const n = Number(text);
  return Number.isFinite(n) ? n : 0;
}
