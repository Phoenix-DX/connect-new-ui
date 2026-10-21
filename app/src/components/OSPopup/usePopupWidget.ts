import { useLayoutEffect, useRef, useState, useSyncExternalStore, type RefObject } from 'react';
import { getShellState, subscribe } from '../../shell/session';

/* Page-level side effects of the OutSystems platform Popup widget (OSWidgets.Popup, "OutSystems/ReactWidgets/Popup" in
   migration/runtime-sources/OutSystemsReactWidgets.js; readable copy
   migration/screens/MessageList/analysis/sources/pretty/OutSystemsReactWidgets.js:2819-2912). Every port of a Popup
   widget calls the hook for as long as the widget is in the view, open or not: a closed widget (ShowPopup False)
   renders nothing but still runs these effects on mount, on every update and on unmount. */

/** Popup.DisableScrollClass (:2911). */
const POPUP_DISABLE_SCROLL_CLASS = 'popup-disable-scroll';

/** disableScroll (:2854-2858): the class on <html> on, or off. */
function disableScroll(disable: boolean): void {
  if (disable) document.documentElement.classList.add(POPUP_DISABLE_SCROLL_CLASS);
  else document.documentElement.classList.remove(POPUP_DISABLE_SCROLL_CLASS);
}

/** updateMainContainerAriaHiddenAttr (:2859-2864): an open popup hides #reactContainer; a closed one shows it again
    only when no popup backdrop is left in the document. */
function updateMainContainerAriaHiddenAttr(showPopup: boolean): void {
  const main = document.getElementById('reactContainer');
  if (showPopup) main?.setAttribute('aria-hidden', 'true');
  else if (document.getElementsByClassName('popup-backdrop').length === 0) main?.removeAttribute('aria-hidden');
}

/** focusFirstFocusableElement (:2865-2873): with ShowPopup, the first "input, button, textarea, select, a" inside the
    widget's HTML node (Widget.getHTMLNode = findDOMNode of the widget, i.e. the first element its Portal renders,
    runtime-sources/OutSystemsReactView.js getHTMLNode) gets the focus. */
function focusFirstFocusableElement(showPopup: boolean, node: Element | null | undefined): void {
  if (!showPopup || !node) return;
  const first = node.querySelector<HTMLElement>('input, button, textarea, select, a');
  first?.focus();
}

/** Lifecycle of the Popup widget: constructor → updateMainContainerAriaHiddenAttr (:2826-2833);
    UNSAFE_componentWillMount → disableScroll(ShowPopup) (:2840-2842); UNSAFE_componentWillUpdate → disableScroll(next
    ShowPopup) and componentDidUpdate → updateMainContainerAriaHiddenAttr (:2843-2853), on every re-render of the
    widget; componentWillUnmount → disableScroll(False), updateMainContainerAriaHiddenAttr (:2837-2839). The
    before-render steps run here in the layout effect of the same commit.
    The widget's own state (constructor state.value = ShowPopup, :2831): componentDidUpdate compares ShowPopup with
    state.value and, when they differ, setState({ value: ShowPopup }) (:2848-2852). That re-renders the widget once
    more after the commit that changed ShowPopup, after its siblings' updates of the same commit, so its
    UNSAFE_componentWillUpdate / componentDidUpdate apply disableScroll(ShowPopup) and the aria-hidden of #reactContainer
    last (e.g. an open popup keeps `popup-disable-scroll` although a closed sibling popup after it removed it). Here a
    state of the hook, set in the layout effect: React re-renders the calling component synchronously after the commit,
    as for a setState in componentDidUpdate. The setState callback then runs focusFirstFocusableElement, on
    `popupNode` (the element the widget's Portal renders) when the caller passes it; without it no focus is moved. */
export function usePopupWidget(showPopup: boolean, popupNode?: RefObject<Element | null>): void {
  /* Every OutSystems controller subscribes to the ClientVariablesService in fireInitialize
     (migration/runtime-sources/OutSystems.js:530153); a client variable change bumps the model's
     clientVariablesGeneration and flushes it (clientVariablesHandler, OutSystems.js:527146), so the block that owns
     this Popup re-renders, and with it the Popup (no _dependencies and children: Widget.shouldComponentUpdate is true,
     OutSystemsReactView.js:208266 area). Its UNSAFE_componentWillUpdate then re-applies disableScroll(ShowPopup) in
     tree order: a closed popup after the content (CommonUI_InsideLayout > Dialog_AccessRestrictedAction >
     ActionConfirmationDialog) removes the class that an open share popup added. */
  useSyncExternalStore(subscribe, getShellState);
  const [value, setValue] = useState(showPopup);
  const showPopupRef = useRef(showPopup);
  const mountedRef = useRef(false);
  const focusPendingRef = useRef(false);
  // On every render of the widget (UNSAFE_componentWillUpdate / componentDidUpdate run on each update): no dependencies.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    showPopupRef.current = showPopup;
    if (!mountedRef.current) {
      mountedRef.current = true;
      updateMainContainerAriaHiddenAttr(showPopup);
      disableScroll(showPopup);
      return;
    }
    disableScroll(showPopup);
    updateMainContainerAriaHiddenAttr(showPopup);
    if (focusPendingRef.current) {
      // the setState callback, after the re-render it caused
      focusPendingRef.current = false;
      focusFirstFocusableElement(showPopup, popupNode?.current);
    }
    if (showPopup !== value) {
      focusPendingRef.current = true;
      // the widget's componentDidUpdate → setState: the extra render after the commit is the ported behaviour
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(showPopup);
    }
  });
  useLayoutEffect(
    () => () => {
      mountedRef.current = false;
      disableScroll(false);
      updateMainContainerAriaHiddenAttr(showPopupRef.current);
    },
    [],
  );
}

/** A Popup widget whose markup the caller renders itself (e.g. inside an If, with ShowPopup True): only the effects. */
export function OSPopupWidget({ showPopup }: { showPopup: boolean }): null {
  usePopupWidget(showPopup);
  return null;
}
