/** @origin Connect2_LegacyShared.Widgets.NetworkWarning */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Animate } from '@/components/ui/Animate';
import { AnimationType, Speed } from '@/components/ui/lib/staticEntities';

export interface NetworkWarningProps {
  /** OutSystems instance id of the block (`b1-$b11`). */
  id: string;
  /** Event TryAgain. */
  onTryAgain: () => void;
}

/** Fetch-error card (p:capture/survey-UBTConnect.json sources["Connect2_LegacyShared.Widgets.NetworkWarning.mvc.js"],
    view): Animate (TopToBottom, Normal) around an orange card with the wifi icon, the two captured texts and the
    "Try again" button, whose OnClick raises TryAgain (controller tryAgain$Action). Catalog: own block of this route. */
export function NetworkWarning({ id, onTryAgain }: NetworkWarningProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Widgets.NetworkWarning" id={id}>
      <Animate id={`${scope}-$b1`} animationType={AnimationType.TopToBottom} speed={Speed.Normal}>
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
