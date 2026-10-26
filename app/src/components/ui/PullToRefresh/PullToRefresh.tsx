/** @origin OutSystemsUI_2_23.Private.PullToRefresh */
// @os-block OutSystemsUI_2_23.Private.PullToRefresh
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface PullToRefreshProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event OnContentPull. Not raised: the pull gesture script is not ported (README). */
  onContentPull?: () => void;
}

/** OSUI PullToRefresh markup as captured (MessageList/default). The a11y text ("Refreshing content" / "Content
    refreshed") shows only after a first pull (IsFirstTimeUsed, IsRefreshing: both False by default,
    p:OutSystemsUI_2_23.Private.PullToRefresh.mvc.js:13-17), so it stays empty without the gesture script. */
export function PullToRefresh({ id }: PullToRefreshProps) {
  return (
    <OSBlock name="Private.PullToRefresh" id={id}>
      <div aria-hidden="true" className="pull-to-refresh" data-container="">
        <div className="genericon" data-container="">
          <i className="icon fa fa-angle-down fa-1x" data-icon="" />
        </div>
        <div className="pull-to-refresh-loading" data-container="">
          <i className="icon fa-spin fa fa-spinner fa-1x" data-icon="" />
        </div>
      </div>
      <div
        aria-hidden="true"
        aria-live="assertive"
        className="pull-to-refresh-a11y wcag-hide-text"
        data-container=""
        role="alert"
      />
    </OSBlock>
  );
}
