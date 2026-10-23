import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface TimerProps {
  id?: string;
  /** In_Delay: seconds (default 1). */
  inDelay?: number;
  /** Event_IntervalElapsed. */
  onEventIntervalElapsed?: () => void;
}

/** An empty block; OnInitialize StartIntervalJS (`window.setInterval(Action_IntervalElapsed, In_Delay * 1000)`),
    OnDestroy RemoveIntervalJS (`clearInterval`). Action_IntervalElapsed raises Event_IntervalElapsed.
    @origin UBTConnect_Utils.Utils.Timer */
export function Timer({ id, inDelay = 1, onEventIntervalElapsed }: TimerProps) {
  const onElapsed = useRef(onEventIntervalElapsed);
  useEffect(() => {
    onElapsed.current = onEventIntervalElapsed;
  });
  useEffect(() => {
    const interval = window.setInterval(() => {
      onElapsed.current?.();
    }, inDelay * 1000);
    return () => {
      window.clearInterval(interval);
    };
    // OnInitialize / OnDestroy only: the interval keeps its first delay.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <OSBlock name="Utils.Timer" id={id} />;
}
