// @os-block Connect2_LegacyShared.Reusable.MessageList_NoResults
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AlignCenter } from '@/shared/osui/AlignCenter';

export interface MessageList_NoResultsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Placeholder1 (first suggestion). */
  placeholder1?: ReactNode;
  /** Placeholder Placeholder2. */
  placeholder2?: ReactNode;
  /** Placeholder Placeholder3. */
  placeholder3?: ReactNode;
}

/** "No results" message of the legacy lists (p:migration/blocks/sources/Connect2_LegacyShared.Reusable.
    MessageList_NoResults.mvc.js view): a centred red search-minus icon (Icon size Twotimes = `fa-2x`) with "No results
    are found.", then "Suggestions:" and three placeholder rows. No input, no action. Not captured. */
export function MessageList_NoResults({ id, placeholder1, placeholder2, placeholder3 }: MessageList_NoResultsProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Reusable.MessageList_NoResults" id={id}>
      <div className="bold margin15 margin-left-xl margin-top-xxl" data-container="">
        <AlignCenter id={prefix === undefined ? undefined : `${prefix}-$b1`}>
          <div className="text-red mirror margin-right5 OSInline" data-container="">
            <i className="icon fa fa-search-minus fa-2x" data-icon="" />
          </div>
          No results are found.
        </AlignCenter>
      </div>
      <div className="bold margin15 margin-left-xl" data-container="">
        Suggestions:
      </div>
      <div className="margin15 margin-left-xl" data-container="">
        <div>{placeholder1}</div>
      </div>
      <div className="margin15 margin-left-xl" data-container="">
        <div>{placeholder2}</div>
      </div>
      <div className="margin15 margin-left-xl" data-container="">
        <div>{placeholder3}</div>
      </div>
    </OSBlock>
  );
}
