/** @origin OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading */
// @os-block OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading
import { useEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface LegacyButtonLoadingProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** IsLoading (default false): `is--loading`, role status, aria-label "Loading", Enter / Space blocked. */
  isLoading?: boolean;
  /** ShowLoadingAndLabel (default false): `btn-show-label`. */
  showLoadingAndLabel?: boolean;
  extendedClass?: string;
  /** Placeholder Button. */
  children?: ReactNode;
}

/** Translated text of the aria-label while loading (view :180, message 56KsdoiGHUSxdwyRc1Cq8Q#Value.2001303836.1). */
const LOADING_LABEL = 'Loading';

/** DisableKeypressOnLoadingJS (p:migration/blocks/sources/OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading.mvc.js
    :455-475): on the first `button` in the wrapper, a keydown listener that cancels Enter (13) / Space (32) while
    IsLoading was true when it was added (keyCode 13 / 32 in the original, read here as `key`), and removes itself on any other key or once IsLoading was false. */
export function disableKeypressOnLoading(wrapper: Element, isLoading: boolean): void {
  const button = wrapper.querySelector('button');
  if (!button) return;
  const onButtonKeypress = (e: KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && isLoading) {
      e.preventDefault();
    } else {
      button.removeEventListener('keydown', onButtonKeypress);
    }
  };
  button.addEventListener('keydown', onButtonKeypress);
}

/** Deprecated OutSystems UI ButtonLoading (view :160-200): the Button placeholder (grid class `OSInline`) with
    `osui-deprecated [is--loading] [btn-show-label] <ExtendedClass>`, aria-live polite, aria-atomic true, and while
    loading role "status" and aria-label "Loading" (both "" otherwise, rendered empty as OutSystems does). OnReady and
    OnParametersChanged run DisableKeypressOnLoading (controller :230-245). Never captured. */
export function LegacyButtonLoading({
  id,
  isLoading = false,
  showLoadingAndLabel = false,
  extendedClass = '',
  children,
}: LegacyButtonLoadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) disableKeypressOnLoading(ref.current, isLoading);
  }, [isLoading, showLoadingAndLabel, extendedClass]);
  const className =
    'osui-deprecated ' +
    (isLoading ? ' is--loading' : '') +
    (showLoadingAndLabel ? ' btn-show-label' : '') +
    (extendedClass === '' ? '' : ` ${extendedClass}`);
  return (
    <OSBlock name="Utilities.DEPRECATED_ButtonLoading" id={id}>
      <div
        ref={ref}
        aria-atomic="true"
        aria-label={isLoading ? LOADING_LABEL : ''}
        aria-live="polite"
        className={`${className} OSInline`}
        role={isLoading ? 'status' : ''}
      >
        {children}
      </div>
    </OSBlock>
  );
}
