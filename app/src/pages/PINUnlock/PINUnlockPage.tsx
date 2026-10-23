/** @origin UBTConnect.App_PIN.PINUnlock */
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { BlockPinUnlock } from '@/platform/feedback/dialogs';
import { usePINUnlock } from './hooks/usePINUnlock';

/** PINUnlock: Block_PINUnlock with In_ForceVisible True, and CommonUI_InsideLayout (In_IgnoreLockScreen,
    In_IgnorePolicy) in its placeholder. The flow of its Unlock event is in `usePINUnlock`. */
export default function PINUnlock() {
  const { onUnlock } = usePINUnlock();
  return (
    <BlockPinUnlock
      id="$b1"
      inForceVisible
      onUnlock={onUnlock}
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b2" inIgnoreLockScreen inIgnorePolicy />}
    />
  );
}
