/** @origin OutSystemsUI_2_23.Interaction.RangeSlider */
// @os-block OutSystemsUI_2_23.Interaction.RangeSlider
import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/* OutSystems UI 2.23 RangeSlider in Single mode, with its provider noUiSlider 15.8.1. Sources:
   - the block view (migration/blocks/sources/OutSystemsUI_2_23.Interaction.RangeSlider.mvc.js): Container
     `osui-range-slider` (extended property name = the unique id) > Container `osui-range-slider__provider`;
   - the provider (migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js, AbstractNoUiSlider,
     OSUINoUiSliderSingle, NoUiSliderSingleConfig, AbstractNoUiSliderConfig.getPipsConfig);
   - noUiSlider (migration/runtime-sources/OutSystemsUI_2_23.NoUISlider.js): the target classes, base, connects,
     origin, handle and pips markup, the tap, drag and keyboard handlers, and the aria attributes.
   Only what the app uses is built: horizontal, left to right, one handle, no floating label, no extensibility
   configs. The value comes from the provider, not from the block inputs, as in OSUI (StartingValue sets the start). */

/** RangeSliderOptionalConfigs (OutSystemsUI_2_23.model): the fields that this port reads. */
interface RangeSliderOptionalConfigs {
  /** ShowTickMarks: the pips and the class osui-range-slider--has-ticks. Default False. */
  ShowTickMarks?: boolean;
  /** TickMarksInterval: the interval of the pips (getPipsConfig). Default 0. */
  TickMarksInterval?: number;
  /** Step. Default 1. */
  Step?: number;
  /** IsDisabled: the provider gets `disabled` and the handle loses its tabindex. Default False. */
  IsDisabled?: boolean;
}

interface RangeSliderProps {
  /** OutSystems instance id of the block: the RangeSliderId of OnValueChange (the closest data-block id). */
  id?: string;
  optionalConfigs?: RangeSliderOptionalConfigs;
  /** MinValue. Default 0. */
  minValue?: number;
  /** MaxValue. Default 100 (getRangeConfig: 100 when it equals MinValue). */
  maxValue?: number;
  /** StartingValue: the start of the handle; noUiSlider clamps it to the range. Default 0. */
  startingValue?: number;
  /** ExtendedClass: added to the `osui-range-slider` element. */
  extendedClass?: string;
  /** Event OnValueChange(RangeSliderId, Value): the slide event, throttled to 200 ms (OSUINoUiSliderSingle). */
  onValueChange?: (rangeSliderId: string, value: number) => void;
}

/** AbstractNoUiSlider.throttleTimeValue. */
const THROTTLE_MS = 200;
/** noUiSlider default animationDuration: the noUi-state-tap class after a tap. */
const TAP_STATE_MS = 300;
/** noUiSlider default keyboardPageMultiplier (PageUp, PageDown). */
const KEYBOARD_PAGE_MULTIPLIER = 5;

/** noUiSlider's default format: `to` = toFixed(2) (the values of the slide event and aria-valuetext). */
const formatTo = (value: number) => value.toFixed(2);

/** noUiSlider writes aria-valuemin, aria-valuemax and aria-valuenow with toFixed(1) ("1.0"): the theme selects on
    aria-valuenow="1.0". React types these attributes as numbers, which would give "1". */
const ariaValues = (min: number, max: number, value: number) =>
  ({
    'aria-valuemin': min.toFixed(1),
    'aria-valuemax': max.toFixed(1),
    'aria-valuenow': value.toFixed(1),
  }) as unknown as HTMLAttributes<HTMLDivElement>;

/** AbstractNoUiSliderConfig.getPipsConfig: the values from MinValue by the interval, then MaxValue again (noUiSlider
    removes the duplicate). Null when the interval is below 1. */
export function getPipsValues(minValue: number, maxValue: number, tickMarksInterval: number): number[] | null {
  let interval = Math.floor(tickMarksInterval);
  if (interval > maxValue) interval = maxValue;
  if (interval < 1) return null;
  const list: number[] = [];
  let tick = minValue;
  while (tick <= maxValue) {
    list.push(tick);
    tick += interval;
  }
  if (tick !== maxValue) list.push(maxValue);
  return [...new Set(list)].sort((a, b) => a - b);
}

/** Single-mode RangeSlider block. The markup is the noUiSlider DOM: target > base (connects, origin > handle >
    touch area) and the pips (a large marker and a value per pip, mode "values", density = interval × 100: no sub
    markers). The handle has aria-label "handler" (NoUiSliderSingleConfig.handleAttributes). */
export function RangeSlider({
  id,
  optionalConfigs = {},
  minValue = 0,
  maxValue = 100,
  startingValue = 0,
  extendedClass = '',
  onValueChange,
}: RangeSliderProps) {
  const uniqueId = useId().replace(/[^a-zA-Z0-9-]/g, '');
  const showTickMarks = optionalConfigs.ShowTickMarks ?? false;
  const step = optionalConfigs.Step ?? 1;
  const isDisabled = optionalConfigs.IsDisabled ?? false;
  const min = minValue;
  const max = maxValue === minValue ? 100 : maxValue;

  /** noUiSlider spectrum: the value of a position (0-100), snapped to the step and clamped. */
  const toValue = (percent: number) => {
    const clamped = Math.min(100, Math.max(0, percent));
    const raw = min + (clamped / 100) * (max - min);
    return Math.min(max, Math.max(min, min + Math.round((raw - min) / step) * step));
  };
  const toPercent = (value: number) => ((value - min) / (max - min)) * 100;

  const [value, setValue] = useState(() => toValue(toPercent(startingValue)));
  const [isTapping, setTapping] = useState(false);
  const [isActive, setActive] = useState(false);
  const baseRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef(value);
  const pending = useRef<{ timer?: ReturnType<typeof setTimeout>; startingValueFrom: string }>({
    startingValueFrom: '',
  });
  const latest = useRef({ onValueChange, id });
  useEffect(() => {
    latest.current = { onValueChange, id };
  });
  useEffect(
    () => () => {
      clearTimeout(pending.current.timer);
    },
    [],
  );

  // The first ExtendedClass is placed before the ticks class; OSUI appends a changed one (Dom.Styles.ExtendedClass).
  const [firstExtendedClass] = useState(extendedClass);
  const [extendedClassHasChanged, setExtendedClassHasChanged] = useState(false);
  const extendedClassChanged = extendedClassHasChanged || extendedClass !== firstExtendedClass;
  if (extendedClassChanged && !extendedClassHasChanged) setExtendedClassHasChanged(true);

  /** OSUINoUiSliderSingle._valueChangeCallback on the slide event: StartingValueFrom = the formatted value; the first
      slide starts a 200 ms timer that raises OnValueChange with the value at that moment. */
  const slide = (next: number) => {
    valueRef.current = next;
    setValue(next);
    pending.current.startingValueFrom = formatTo(next);
    if (pending.current.timer !== undefined) return;
    pending.current.timer = setTimeout(() => {
      pending.current.timer = undefined;
      latest.current.onValueChange?.(latest.current.id ?? '', Number(pending.current.startingValueFrom));
    }, THROTTLE_MS);
  };

  const percentOf = (clientX: number) => {
    const rect = baseRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return 0;
    return ((clientX - rect.left) * 100) / rect.width;
  };

  // noUiSlider tap (q): the handle goes to the tapped step; slide always fires, then change and set.
  const onBasePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (isDisabled || (event.target as HTMLElement).closest('.noUi-handle')) return;
    event.stopPropagation();
    setTapping(true);
    setTimeout(() => {
      setTapping(false);
    }, TAP_STATE_MS);
    slide(toValue(percentOf(event.clientX)));
  };

  // noUiSlider drag (B, then the move handler): noUi-active on the handle; slide fires when the step changes.
  const onHandlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    event.stopPropagation();
    setActive(true);
    const onMove = (move: globalThis.PointerEvent) => {
      const next = toValue(percentOf(move.clientX));
      if (next !== valueRef.current) slide(next);
    };
    const onEnd = () => {
      setActive(false);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onEnd);
    };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onEnd);
  };

  // noUiSlider keyboard (C): arrows by one step, PageUp/PageDown by 5 steps, Home/End to the ends.
  const onHandleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    const key = event.key.replace('Arrow', '');
    const decrease = key === 'Down' || key === 'Left' || key === 'PageDown';
    const increase = key === 'Up' || key === 'Right' || key === 'PageUp';
    if (!decrease && !increase && key !== 'Home' && key !== 'End') return;
    event.preventDefault();
    let next: number;
    if (decrease || increase) {
      // getNearbySteps: no step beyond the range end, so nothing moves.
      if ((decrease && valueRef.current <= min) || (increase && valueRef.current >= max)) return;
      const multiplier = key === 'PageUp' || key === 'PageDown' ? KEYBOARD_PAGE_MULTIPLIER : 1;
      next = Math.min(max, Math.max(min, valueRef.current + (decrease ? -1 : 1) * step * multiplier));
    } else {
      next = key === 'Home' ? min : max;
    }
    slide(next);
  };

  const position = toPercent(value);
  const pips = showTickMarks ? getPipsValues(min, max, optionalConfigs.TickMarksInterval ?? 0) : null;
  const ticksClass = showTickMarks ? 'osui-range-slider--has-ticks' : '';
  const classes = extendedClassChanged
    ? ['osui-range-slider', ticksClass, extendedClass]
    : ['osui-range-slider', extendedClass, ticksClass];

  return (
    <OSBlock name="Interaction.RangeSlider" id={id}>
      <div
        className={classes.filter((c) => c.trim() !== '').join(' ')}
        data-container=""
        {...{ name: uniqueId }}
        style={{ '--range-slider-size': '100%' } as CSSProperties}
      >
        <div
          className={
            'osui-range-slider__provider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr' +
            (isTapping ? ' noUi-state-tap' : '')
          }
          data-container=""
          {...(isDisabled ? { disabled: '' } : {})}
        >
          <div ref={baseRef} className="noUi-base" onPointerDown={onBasePointerDown}>
            <div className="noUi-connects">
              <div
                className="noUi-connect"
                style={{ transform: `translate(0%, 0px) scale(${String(position / 100)}, 1)` }}
              />
            </div>
            <div className="noUi-origin" style={{ transform: `translate(${String(position - 100)}%, 0px)`, zIndex: 4 }}>
              <div
                className={'noUi-handle noUi-handle-lower' + (isActive ? ' noUi-active' : '')}
                data-handle="0"
                tabIndex={isDisabled ? undefined : 0}
                aria-label="handler"
                role="slider"
                aria-orientation="horizontal"
                {...ariaValues(min, max, value)}
                aria-valuetext={formatTo(value)}
                onPointerDown={onHandlePointerDown}
                onKeyDown={onHandleKeyDown}
              >
                <div className="noUi-touch-area" />
              </div>
            </div>
          </div>
          {pips && (
            <div className="noUi-pips noUi-pips-horizontal">
              {pips.map((pip) => {
                const left = `${toPercent(pip).toFixed(5)}%`;
                return [
                  <div
                    key={`m${String(pip)}`}
                    className="noUi-marker noUi-marker-horizontal noUi-marker-large"
                    style={{ left }}
                  />,
                  <div
                    key={`v${String(pip)}`}
                    className="noUi-value noUi-value-horizontal noUi-value-large"
                    data-value={String(pip)}
                    style={{ left }}
                  >
                    {String(Math.round(pip))}
                  </div>,
                ];
              })}
            </div>
          )}
        </div>
      </div>
    </OSBlock>
  );
}
