// @os-block Connect2_LegacyShared.Reusable.Spinner
import { OSBlock } from '../../../components/OSBlock';

export interface SpinnerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  showLoader?: boolean;
}

/** Legacy list spinner (p:Connect2_LegacyShared.Reusable.Spinner.mvc.js view :143, `visible: showLoaderIn`): the `list-updating-cont`
    container is visible while ShowLoader is set. */
export function Spinner({ id, showLoader = false }: SpinnerProps) {
  return (
    <OSBlock name="Reusable.Spinner" id={id}>
      {showLoader && (
        <div className="list-updating-cont" data-container="">
          <div className="list-updating" data-container="" />
        </div>
      )}
    </OSBlock>
  );
}
