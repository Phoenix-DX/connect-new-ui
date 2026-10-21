/* Typed wrapper of the vendored TST Virtual Select script (SOURCE.md). The file is a plain IIFE: loaded as an ES module
   it sets `window.VirtualSelect` (and `window.PopoverComponent`), as the classic <script> of the original app does. */
import './OutSystemsUI_2_23.VirtualSelect.js';

/** The `ele` element after init: Virtual Select adds these methods to it (the API the OSUI provider uses). */
export interface VirtualSelectElement extends HTMLElement {
  disable: () => void;
  enable: () => void;
  close: () => void;
  open: () => void;
  reset: (formReset?: boolean, keepSelection?: boolean) => void;
  setValue: (value: string[], silentChange?: boolean) => void;
  getSelectedOptions: () => VirtualSelectOption | VirtualSelectOption[] | undefined;
}

/** An option as Virtual Select returns it from getSelectedOptions. */
export interface VirtualSelectOption {
  label: string;
  value: string;
  customData?: { description?: string; group_name?: string };
}

/** The instance `VirtualSelect.init` returns for one element. */
export interface VirtualSelectInstance {
  $ele: VirtualSelectElement;
  $dropboxContainer: HTMLElement;
  isOpened: () => boolean;
  getSelectedOptions: () => VirtualSelectOption | VirtualSelectOption[] | undefined;
  destroy: () => void;
}

export interface VirtualSelectStatic {
  init: (options: Record<string, unknown>) => VirtualSelectInstance | VirtualSelectInstance[] | undefined;
}

/** `window.VirtualSelect`, set by the vendored script. */
export function virtualSelect(): VirtualSelectStatic {
  return (window as unknown as { VirtualSelect: VirtualSelectStatic }).VirtualSelect;
}
