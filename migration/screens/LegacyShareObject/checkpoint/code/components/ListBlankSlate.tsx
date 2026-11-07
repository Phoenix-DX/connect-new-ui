import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface ListBlankSlateProps {
  /** OutSystems instance id of the block (`b1-b8-$b5`); the placeholders are `<scope>-Icon` and `<scope>-Message`. */
  id: string;
  /** Placeholder Icon. */
  icon?: ReactNode;
  /** Placeholder Message. */
  message?: ReactNode;
}

/** A column container with the Icon placeholder and the Message placeholder (`text-align-center font-size-0-75em
    margin-top-base`). No inputs, events or logic. Captured in dom/loading.html.
    @origin Connect2_LegacyShared.Share_UI.ListBlankSlate */
export function ListBlankSlate({ id, icon, message }: ListBlankSlateProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Share_UI.ListBlankSlate" id={id}>
      <div
        className="display-flex flex-direction-column flex-center-vertical padding-y-m text-neutral-6 margin-top-xxl"
        data-container=""
      >
        <div id={`${scope}-Icon`}>{icon}</div>
        <div className="text-align-center font-size-0-75em margin-top-base" id={`${scope}-Message`}>
          {message}
        </div>
      </div>
    </OSBlock>
  );
}
