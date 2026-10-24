/** @origin Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoResults */
// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoResults
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface OrbitNoResultsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Placeholder_Title. */
  placeholderTitle?: ReactNode;
  /** Placeholder Placeholder_Message. */
  placeholderMessage?: ReactNode;
}

/** Orbit "no results" state (NoResults.mvc.js view :107-170): `no-results-cont` with the search icon in
    `no-results-icon-cont`, then the Placeholder_Title (`no-results-title`) and Placeholder_Message
    (`no-results-message`) placeholders. No inputs, no controller logic. Never captured (built from the compiled view). */
export function OrbitNoResults({ id, placeholderTitle, placeholderMessage }: OrbitNoResultsProps) {
  return (
    <OSBlock name="Orbit_Generic_Blocks.NoResults" id={id}>
      <div className="no-results-cont" data-container="">
        <div className="no-results-icon-cont" data-container="">
          <i className="icon no-results-icon fa fa-search fa-1x" data-icon="" />
        </div>
        <div className="no-results-title">{placeholderTitle}</div>
        <div className="no-results-message">{placeholderMessage}</div>
      </div>
    </OSBlock>
  );
}
