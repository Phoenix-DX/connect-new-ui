// @os-block OutSystemsUI_2_23.Utilities.ButtonLoading
import { useEffect, useId, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface ButtonLoadingProps {
  /** OutSystems instance id of the block. */
  id?: string;
  isLoading?: boolean;
  showLabelOnLoading?: boolean;
  extendedClass?: string;
  /** Event Initialized (ButtonLoadingId). */
  onInitialized?: (buttonLoadingId: string) => void;
  /** Placeholder Button. */
  children?: ReactNode;
}

const PATTERN_CLASS = 'osui-btn-loading';

/** OutSystems UI ButtonLoading: the Button placeholder with the `osui-btn-loading` pattern (p:OutSystemsUI_2_23.
    Utilities.ButtonLoading.mvc.js view; the provider JS builds the rest). From the captures: aria-live polite,
    aria-atomic true, aria-busy = IsLoading, ExtendedClass, `osui-btn-loading-show-spinner` when ShowLabelOnLoading is
    false, and `aria-hidden="true"` on the spinner container of the content (absent from the callers' compiled views);
    `osui-btn-loading--is-loading` while loading (the original CSS). */
export function ButtonLoading({
  id,
  isLoading = false,
  showLabelOnLoading = false,
  extendedClass = '',
  onInitialized,
  children,
}: ButtonLoadingProps) {
  const uniqueId = useId();
  const ref = useRef<HTMLDivElement>(null);
  const initialized = useRef(onInitialized);
  useEffect(() => {
    ref.current?.querySelectorAll(`.${PATTERN_CLASS}__spinner-animation`).forEach((spinner) => {
      spinner.setAttribute('aria-hidden', 'true');
    });
    initialized.current?.(uniqueId);
  }, [uniqueId]);
  const className = [
    `${PATTERN_CLASS} OSInline`,
    extendedClass,
    showLabelOnLoading ? '' : `${PATTERN_CLASS}-show-spinner`,
    isLoading ? `${PATTERN_CLASS}--is-loading` : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <OSBlock name="Utilities.ButtonLoading" id={id}>
      <div
        ref={ref}
        aria-atomic="true"
        aria-busy={isLoading ? 'true' : 'false'}
        aria-live="polite"
        className={className}
      >
        {children}
      </div>
    </OSBlock>
  );
}
