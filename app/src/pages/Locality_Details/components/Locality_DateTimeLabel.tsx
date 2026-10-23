import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { getLocalityCurrentTimeLabel } from './actions';
import { Timer } from './Timer';

export interface Locality_DateTimeLabelProps {
  id?: string;
  /** In_TimezoneOffset: the locality's UTC offset in seconds. */
  inTimezoneOffset?: number;
}

/** The local time of a locality: an expression GetLocalityCurrentTimeLabel(In_TimezoneOffset, LocalDateTime) and a
    Timer (default 1 s) whose Event_IntervalElapsed sets LocalDateTime = CurrDateTime(), as OnInitialize does.
    @origin UBTConnect.Directory_Locality.Locality_DateTimeLabel */
export function Locality_DateTimeLabel({ id, inTimezoneOffset = 0 }: Locality_DateTimeLabelProps) {
  const [localDateTime, setLocalDateTime] = useState(() => new Date());
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_Locality.Locality_DateTimeLabel" id={id}>
      <span data-expression="">{getLocalityCurrentTimeLabel(inTimezoneOffset, localDateTime)}</span>
      <Timer
        id={`${b}-$b1`}
        onEventIntervalElapsed={() => {
          setLocalDateTime(new Date());
        }}
      />
    </OSBlock>
  );
}
