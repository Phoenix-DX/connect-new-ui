import noUiSlider, { PipsMode, type API, type Options } from 'nouislider';
import wNumb from 'wnumb';
import { Orientation } from '@/shared/osui/lib/staticEntities';

/* OutSystems UI Range Slider provider glue for noUiSlider 15.8.1 + wNumb 1.2.0 (single mode), ported from
   migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js ("U"): AbstractRangeSliderConfig.validateDefault
   (U:8576-8612), Enum.CssClass / CssProperties / DefaultValues (U:8620-8648), AbstractNoUiSlider (U:21698-21850),
   AbstractNoUiSliderConfig (U:21854-21916), NoUiSlider Enum (U:21927-21958), OSUINoUiSliderSingle and
   NoUiSliderSingleConfig (U:22050-22260). */

/** InternalConfigs of the block (RangeSlider_InternalConfigRec) as the single slider reads them. */
export interface RangeSliderConfig {
  MinValue: number;
  MaxValue: number;
  StartingValueFrom: number | string;
  Orientation: string;
  Size: string;
  ExtendedClass: string;
  Step: number;
  ShowTickMarks: boolean;
  TickMarksInterval: number;
  IsDisabled: boolean;
  ShowFloatingLabel: boolean;
  InitialValueFrom: number | string;
}

export type RangeSliderProperty = keyof RangeSliderConfig;

const CssClass = {
  ClassModifier: 'osui-range-slider--is-',
  HasTicks: 'osui-range-slider--has-ticks',
  ProviderElem: 'osui-range-slider__provider',
};
const SIZE_PROPERTY = '--range-slider-size';
const DefaultValues = { PercentualSize: '100%', PixelSize: '100px' };
/** Throttle of the value change event (AbstractNoUiSlider constructor, U:21701). */
const THROTTLE_MS = 200;

/** validateDefault of AbstractRangeSliderConfig (U:8580-8608) with the OSUI validators (U:3734-3750). */
export function validateConfig(config: RangeSliderConfig): RangeSliderConfig {
  const orientation = [Orientation.Horizontal, Orientation.Vertical].includes(
    config.Orientation as (typeof Orientation)[keyof typeof Orientation],
  )
    ? config.Orientation
    : Orientation.Horizontal;
  const sizeDefault = orientation === Orientation.Horizontal ? DefaultValues.PercentualSize : DefaultValues.PixelSize;
  return {
    ...config,
    Orientation: orientation,
    Size: config.Size && config.Size.trim() ? config.Size : sizeDefault,
  };
}

/** getPipsConfig (U:21856-21880). Warns and returns null below one (the library needs whole steps). */
export function pipsConfig(config: RangeSliderConfig): Options['pips'] | null {
  let tickMarksValues = Math.floor(config.TickMarksInterval);
  if (tickMarksValues > config.MaxValue) tickMarksValues = config.MaxValue;
  if (tickMarksValues < 1) {
    console.warn(
      'The interval between tick marks, when they exist, can not be smaller than one or a decimal number (library restraint).',
    );
    config.ShowTickMarks = true;
    return null;
  }
  const list: number[] = [];
  let tick = config.MinValue;
  while (tick <= config.MaxValue) {
    list.push(tick);
    tick += tickMarksValues;
  }
  if (tick !== config.MaxValue) list.push(config.MaxValue);
  return { values: list, density: tickMarksValues * 100, mode: PipsMode.Values };
}

/** getRangeConfig (U:21895-21900). */
export const rangeConfig = (config: RangeSliderConfig) => ({
  min: config.MinValue,
  max: config.MaxValue === config.MinValue ? 100 : config.MaxValue,
});

/** getTooltipFormat of the single mode (U:21901-21911). */
export const tooltipFormat = (config: RangeSliderConfig) => [config.ShowFloatingLabel ? wNumb({ decimals: 0 }) : false];

/** getProviderConfig (U:21881-21894) merged with the single one (U:22252-22259); mergeConfigs drops null / undefined. */
export function providerConfig(config: RangeSliderConfig): Options {
  const options: Record<string, unknown> = {
    direction: document.body.classList.contains('is-rtl') ? 'rtl' : 'ltr',
    step: config.Step,
    orientation: config.Orientation,
    pips: config.ShowTickMarks ? pipsConfig(config) : null,
    range: rangeConfig(config),
    tooltips: tooltipFormat(config),
    handleAttributes: [{ 'aria-label': 'handler' }],
    start: [config.StartingValueFrom],
    connect: 'lower',
  };
  for (const key of Object.keys(options))
    if (options[key] === null || options[key] === undefined) Reflect.deleteProperty(options, key);
  return options as unknown as Options;
}

export interface RangeSliderCallbacks {
  onInitialized: () => void;
  /** platformEventValueChange(widgetId, StartingValueFrom): the slider value as the provider gives it (text). */
  onValueChange: (value: string) => void;
}

const asyncInvocation = (fn: () => void) => window.setTimeout(fn, 0);

/** OSUINoUiSliderSingle on the `osui-range-slider` element. */
export class RangeSliderProvider {
  private provider: API | undefined;
  private isBuilt = false;
  private throttleTimer: number | undefined;
  private redrawTimer = 0;
  private readonly configs: RangeSliderConfig;
  /** _valueChangeCallback (U:22053-22063): keep the value, raise the event at most every 200 ms. */
  private readonly onSlide = (values: (string | number)[]) => {
    const value = values[0];
    if (value !== undefined) this.configs.StartingValueFrom = value;
    if (this.throttleTimer === undefined) {
      this.throttleTimer = window.setTimeout(() => {
        this.callbacks.onValueChange(String(this.configs.StartingValueFrom));
        this.throttleTimer = undefined;
      }, THROTTLE_MS);
    }
  };

  constructor(
    private readonly element: HTMLElement,
    configs: RangeSliderConfig,
    private readonly callbacks: RangeSliderCallbacks,
  ) {
    this.configs = validateConfig(configs);
  }

  private get providerElement(): HTMLElement {
    const el = this.element.querySelector<HTMLElement>(`.${CssClass.ProviderElem}`);
    if (!el) throw new Error('RangeSlider: provider element missing');
    return el;
  }

  /** build (U:22075-22081): ExtendedClass, provider instance. */
  build(): void {
    const extended = this.configs.ExtendedClass.split(' ').filter(Boolean);
    if (extended.length) this.element.classList.add(...extended);
    this.createProviderInstance();
    this.isBuilt = true;
  }

  /** prepareConfigs + createProviderInstance (U:21731-21742, 22064-22067). */
  private createProviderInstance(): void {
    this.provider = noUiSlider.create(this.providerElement, providerConfig(this.configs));
    this.setSize();
    this.setIsDisabled(this.configs.IsDisabled);
    this.setInitialCSSClasses();
    this.provider.on('slide', this.onSlide);
    if (!this.isBuilt) asyncInvocation(this.callbacks.onInitialized);
  }

  /** _setSize (U:21712-21718). */
  private setSize(): void {
    if (this.configs.Size.includes('%') && parseFloat(this.configs.Size) > 100) {
      this.configs.Size = DefaultValues.PercentualSize;
      console.warn("The value of the Size property on the RangeSlider can't be bigger than '100%'.");
    }
    this.element.style.setProperty(SIZE_PROPERTY, this.configs.Size);
  }

  private setIsDisabled(isDisabled: boolean): void {
    if (isDisabled) this.provider?.disable();
    else this.provider?.enable();
  }

  /** setInitialCSSClasses (U:21746-21765). */
  private setInitialCSSClasses(): void {
    this.element.classList.toggle(
      CssClass.ClassModifier + Orientation.Vertical,
      this.configs.Orientation === Orientation.Vertical,
    );
    this.element.classList.toggle(CssClass.HasTicks, this.configs.ShowTickMarks);
  }

  /** redraw of the single slider (U:22068-22072) and AbstractProviderPattern (destroy + prepareConfigs, async). */
  private redraw(): void {
    const value = this.provider?.get();
    if (value !== undefined) this.configs.StartingValueFrom = Array.isArray(value) ? (value[0] ?? '') : value;
    window.clearTimeout(this.redrawTimer);
    this.redrawTimer = asyncInvocation(() => {
      if (this.provider) {
        this.provider.destroy();
        this.createProviderInstance();
      }
    });
  }

  /** _updateRangeValues (U:21719-21728). The original calls updateOptions(options) with no fireSetEvent (falsy). */
  private updateRangeValues(): void {
    this.provider?.updateOptions({ range: rangeConfig(this.configs) }, false);
    if (this.configs.ShowTickMarks)
      this.provider?.updateOptions({ pips: pipsConfig(this.configs) ?? undefined }, false);
  }

  /** setValue (U:22100-22108): only inside [MinValue, MaxValue]. */
  private setValue(value: number): void {
    if (value >= this.configs.MinValue && value <= this.configs.MaxValue) {
      this.configs.StartingValueFrom = value;
      this.provider?.set(value);
    } else {
      throw new Error('RangeSlider: The value must be between the minimum value and maximum value set.');
    }
  }

  /** changeProperty of AbstractNoUiSlider (U:21777-21806) and the single mode (U:22082-22093). */
  changeProperty<K extends RangeSliderProperty>(name: K, value: RangeSliderConfig[K]): void {
    if (name === 'ExtendedClass' && this.isBuilt) {
      const remove = this.configs.ExtendedClass.split(' ').filter(Boolean);
      if (remove.length) this.element.classList.remove(...remove);
      const add = (value as string).split(' ').filter(Boolean);
      if (add.length) this.element.classList.add(...add);
    }
    Object.assign(this.configs, validateConfig({ ...this.configs, [name]: value }));
    if (!this.isBuilt) return;
    switch (name) {
      case 'MinValue':
      case 'MaxValue':
        this.updateRangeValues();
        break;
      case 'Orientation':
      case 'ShowTickMarks':
        this.redraw();
        break;
      case 'IsDisabled':
        this.setIsDisabled(this.configs.IsDisabled);
        break;
      case 'TickMarksInterval':
        this.provider?.updateOptions({ pips: pipsConfig(this.configs) ?? undefined }, false);
        break;
      case 'Step':
        this.provider?.updateOptions({ step: this.configs.Step }, false);
        break;
      case 'Size':
        this.setSize();
        break;
      case 'ShowFloatingLabel':
        this.provider?.updateOptions({ tooltips: tooltipFormat(this.configs) }, false);
        break;
      case 'StartingValueFrom':
        this.setValue(Number(value));
        break;
    }
  }

  /** dispose (U:21810-21817). */
  dispose(): void {
    window.clearTimeout(this.redrawTimer);
    window.clearTimeout(this.throttleTimer);
    if (this.isBuilt) this.provider?.destroy();
    this.provider = undefined;
    this.isBuilt = false;
  }
}
