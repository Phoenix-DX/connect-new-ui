// @os-block NavigationHandler.ScrollAnchors.ScrollAnchor
import { OSBlock } from '../../../components/OSBlock';

export interface ScrollAnchorProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Input Id (the anchor id). Named after the compiled variable `idIn` because `id` is the instance id. */
  idIn?: string;
}

/** Scroll anchor of a list item (p:NavigationHandler.ScrollAnchors.ScrollAnchor.mvc.js view): one container with
    `data-dx-scroll-anchor-id` = Id. The block has no actions (all event handlers null). */
export function ScrollAnchor({ id, idIn = '' }: ScrollAnchorProps) {
  return (
    <OSBlock name="ScrollAnchors.ScrollAnchor" id={id}>
      <div data-container="" data-dx-scroll-anchor-id={idIn} />
    </OSBlock>
  );
}
