// @os-block Connect2_LegacyShared.Widgets.NetworkWarning
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Animate } from '../../osui/Animate';
import { AnimationType, Speed } from '../../osui/lib/staticEntities';

export interface NetworkWarningProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event TryAgain: the parent's handler (the block's own `tryAgain$Action` is empty). */
  onTryAgain?: () => void;
}

/** Orange "network problems" card with a Try again button (migration/runtime-sources/
    Connect2_LegacyShared.Widgets.NetworkWarning.mvc.js, fetched read-only from TST 2026-10-16: view :84-215, the
    Button OnClick calls the event TryAgain, controller `tryAgain$Action` :237 is `Promise.resolve()`). It sits in
    an Animate (topToBottom, normal, no Delay input). */
export function NetworkWarning({ id, onTryAgain }: NetworkWarningProps) {
  return (
    <OSBlock name="Widgets.NetworkWarning" id={id}>
      <Animate animationType={AnimationType.TopToBottom} speed={Speed.Normal}>
        <div className="card background-orange-dark" data-container="">
          <div data-container="">
            <i className="icon fa fa-wifi fa-1x" data-icon="" />
            <div data-container="">
              <div data-container="">
                We are experiencing some network problems and could not display this information.
              </div>
              <div className="margin-top-base" data-container="">
                Please check your network connection and try again.
              </div>
            </div>
          </div>
          <div data-container="">
            <button className="btn" data-button="" type="button" onClick={onTryAgain}>
              Try again
            </button>
          </div>
        </div>
      </Animate>
    </OSBlock>
  );
}
