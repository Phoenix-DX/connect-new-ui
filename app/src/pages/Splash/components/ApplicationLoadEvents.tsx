import { OSBlock } from '@/components/ui/os/OSBlock';

export interface ApplicationLoadEventsProps {
  /** OutSystems instance id of the block. */
  id: string;
}

/** The empty wrapper of the application load events. The events themselves come from `useApplicationLoadEvents`,
    which the screen hook calls.
    @origin OutSystemsUI_2_23.Private.ApplicationLoadEvents */
export function ApplicationLoadEvents({ id }: ApplicationLoadEventsProps) {
  return <OSBlock name="Private.ApplicationLoadEvents" id={id} />;
}
